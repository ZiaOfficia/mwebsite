const fs = require("fs");
const path = require("path");
const xml2js = require("xml2js");
const cloudinary = require("cloudinary").v2;
const fetch = require("node-fetch");
const BlogPost = require("../models/BlogPost");
const sequelize = require("../config/db");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Paths
const xmlFilePath =
  "c:/Users/pmiay/Downloads/elegantizebestweddingdecoratorsinny.WordPress.2026-02-03.xml";
const progressFilePath = path.join(__dirname, "import_progress.json");

// Configuration
const BATCH_SIZE = 100; // Import all remaining at once
const CLEAR_EXISTING = process.argv.includes("--clear");

// Load or initialize progress
const loadProgress = () => {
  if (fs.existsSync(progressFilePath)) {
    return JSON.parse(fs.readFileSync(progressFilePath, "utf-8"));
  }
  return {
    importedPostIds: [],
    importedSlugs: [],
    lastImportDate: null,
    totalImported: 0,
  };
};

// Save progress
const saveProgress = (progress) => {
  fs.writeFileSync(progressFilePath, JSON.stringify(progress, null, 2));
};

// Upload single image to Cloudinary
const uploadToCloudinary = async (imageUrl, publicId) => {
  try {
    // Skip if already a Cloudinary URL
    if (
      imageUrl.includes("cloudinary.com") ||
      imageUrl.includes("res.cloudinary")
    ) {
      return imageUrl;
    }

    console.log(`     📤 Uploading: ${imageUrl.substring(0, 60)}...`);

    const result = await cloudinary.uploader.upload(imageUrl, {
      folder: "elegantize-blogs",
      public_id: publicId,
      overwrite: true,
      resource_type: "image",
    });

    return result.secure_url;
  } catch (error) {
    console.error(`     ✗ Failed: ${error.message}`);
    return null;
  }
};

// Process all images in content and upload to Cloudinary
const processContentImages = async (content, slug) => {
  if (!content) return content;

  // Find all image URLs in content
  const imgRegex = /<img[^>]+src="([^"]+)"[^>]*>/gi;
  const matches = [...content.matchAll(imgRegex)];

  if (matches.length === 0) {
    return content;
  }

  console.log(`   📷 Found ${matches.length} inline image(s) to migrate`);

  let processedContent = content;
  let imageIndex = 0;

  for (const match of matches) {
    const originalUrl = match[1];

    // Skip if not a WordPress URL or already Cloudinary
    if (
      !originalUrl.includes("elegantize.com") &&
      !originalUrl.includes("wp-content") &&
      !originalUrl.includes("wordpress")
    ) {
      if (originalUrl.includes("cloudinary")) {
        continue; // Already on Cloudinary
      }
    }

    // Generate unique public ID for this image
    const publicId = `${slug}-inline-${imageIndex}`;
    imageIndex++;

    const cloudinaryUrl = await uploadToCloudinary(originalUrl, publicId);

    if (cloudinaryUrl && cloudinaryUrl !== originalUrl) {
      // Replace old URL with new Cloudinary URL in content
      processedContent = processedContent
        .split(originalUrl)
        .join(cloudinaryUrl);
      console.log(`     ✓ Migrated image ${imageIndex}`);
    }
  }

  return processedContent;
};

// Main import function
const importBlogs = async () => {
  try {
    await sequelize.authenticate();
    console.log("✓ Database connected.\n");

    let progress = loadProgress();

    // Clear existing blogs if requested
    if (CLEAR_EXISTING) {
      console.log("🗑️  Clearing all existing blogs...");
      await BlogPost.destroy({ where: {}, truncate: true });
      progress = {
        importedPostIds: [],
        importedSlugs: [],
        lastImportDate: null,
        totalImported: 0,
      };
      saveProgress(progress);
      console.log("✓ All blogs cleared.\n");
    }

    // Read and parse XML
    console.log("📖 Reading WordPress XML export...");
    const xmlData = fs.readFileSync(xmlFilePath, "utf-8");

    const parser = new xml2js.Parser();
    const result = await new Promise((resolve, reject) => {
      parser.parseString(xmlData, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });

    const channel = result.rss.channel[0];
    const items = channel.item;

    // Filter to only published posts
    const publishedPosts = items.filter((item) => {
      const postType = item["wp:post_type"]?.[0];
      const status = item["wp:status"]?.[0];
      return postType === "post" && status === "publish";
    });

    console.log(`✓ Found ${publishedPosts.length} published posts in XML.\n`);

    // Filter out already imported posts
    const postsToImport = publishedPosts.filter((item) => {
      const postId = item["wp:post_id"]?.[0];
      return !progress.importedPostIds.includes(postId);
    });

    console.log(`📝 ${postsToImport.length} posts remaining to import.`);

    // Limit to batch size
    const batch = postsToImport.slice(0, BATCH_SIZE);
    console.log(`🚀 Importing batch of ${batch.length} posts...\n`);
    console.log("=".repeat(60) + "\n");

    let importedCount = 0;

    for (const item of batch) {
      const postId = item["wp:post_id"]?.[0];
      const title = item.title?.[0] || "Untitled";
      let content = item["content:encoded"]?.[0] || "";
      const excerpt = item["excerpt:encoded"]?.[0] || "";
      const slug = item["wp:post_name"]?.[0] || `post-${postId}`;
      const date = item["wp:post_date"]?.[0];
      const author = item["dc:creator"]?.[0] || "Elegantize";

      // Get category
      let category = "Uncategorized";
      if (item.category) {
        const categories = item.category.map((c) =>
          typeof c === "string" ? c : c._,
        );
        const validCat = categories.find(
          (c) => c && c !== "Uncategorized" && c !== "Blog",
        );
        category = validCat || categories[0] || "Uncategorized";
      }

      // Find featured image
      let imageUrl = null;
      if (item["wp:postmeta"]) {
        const thumbMeta = item["wp:postmeta"].find(
          (m) => m["wp:meta_key"]?.[0] === "_thumbnail_id",
        );
        if (thumbMeta) {
          const thumbId = thumbMeta["wp:meta_value"]?.[0];
          const attachment = items.find(
            (i) =>
              i["wp:post_id"]?.[0] === thumbId &&
              i["wp:post_type"]?.[0] === "attachment",
          );
          if (attachment && attachment["wp:attachment_url"]) {
            imageUrl = attachment["wp:attachment_url"][0];
          }
        }
      }

      // Fallback: extract first image from content
      if (!imageUrl && content) {
        const imgMatch = content.match(/src="([^"]+\.(jpg|jpeg|png|webp))"/i);
        if (imgMatch) {
          imageUrl = imgMatch[1];
        }
      }

      console.log(`${importedCount + 1}. ${title.substring(0, 50)}...`);
      console.log(`   Slug: ${slug}`);
      console.log(`   Category: ${category}`);

      // Upload featured image to Cloudinary
      let cloudinaryFeaturedUrl = null;
      if (imageUrl) {
        console.log(`   🖼️  Uploading featured image...`);
        cloudinaryFeaturedUrl = await uploadToCloudinary(
          imageUrl,
          `${slug}-featured`,
        );
        if (cloudinaryFeaturedUrl) {
          console.log(`   ✓ Featured image uploaded`);
        }
      }

      // Process and migrate all inline images in content
      console.log(`   🔄 Processing inline images...`);
      const processedContent = await processContentImages(content, slug);

      // Create blog post
      try {
        const [post, created] = await BlogPost.findOrCreate({
          where: { slug },
          defaults: {
            title,
            slug,
            content: processedContent,
            excerpt:
              excerpt ||
              content.substring(0, 200).replace(/<[^>]*>/g, "") + "...",
            author,
            category,
            image_url: cloudinaryFeaturedUrl || imageUrl,
            createdAt: new Date(date),
            updatedAt: new Date(),
          },
        });

        if (created) {
          console.log(`   ✅ Imported successfully\n`);
          importedCount++;
          progress.importedPostIds.push(postId);
          progress.importedSlugs.push(slug);
        } else {
          // Update existing post with new content
          await post.update({
            content: processedContent,
            image_url: cloudinaryFeaturedUrl || post.image_url,
          });
          console.log(`   🔄 Updated existing post\n`);
        }
      } catch (dbErr) {
        console.error(`   ✗ Database error: ${dbErr.message}\n`);
      }
    }

    // Update and save progress
    progress.totalImported = progress.importedPostIds.length;
    progress.lastImportDate = new Date().toISOString();
    saveProgress(progress);

    console.log("=".repeat(60));
    console.log(`\n✅ Import complete!`);
    console.log(`   Imported this batch: ${importedCount}`);
    console.log(`   Total imported so far: ${progress.totalImported}`);
    console.log(`   Remaining: ${postsToImport.length - importedCount}`);
    console.log(`\n📁 Progress saved to: ${progressFilePath}`);
    console.log(`\n💡 To import more blogs, run:`);
    console.log(`   node scripts/importFromWP.js\n`);

    process.exit(0);
  } catch (error) {
    console.error("\n❌ Import failed:", error);
    process.exit(1);
  }
};

// Run
importBlogs();
