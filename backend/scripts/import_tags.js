/**
 * Tags Import Script
 *
 * This script extracts tags from a WordPress XML export file and updates
 * the corresponding blog posts in the database.
 *
 * Usage: node scripts/import_tags.js <path-to-xml-file>
 * Example: node scripts/import_tags.js ../../../Downloads/elegantizebestweddingdecoratorsinny.WordPress.2026-02-03.xml
 */

const fs = require("fs");
const path = require("path");
const { Sequelize, DataTypes } = require("sequelize");
const xml2js = require("xml2js");

// Database configuration (uses NEW_DB_* env vars)
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const DB_HOST = process.env.NEW_DB_HOST || process.env.DB_HOST;
const DB_NAME = process.env.NEW_DB_NAME || process.env.DB_NAME;
const DB_USER = process.env.NEW_DB_USER || process.env.DB_USER;
const DB_PASSWORD = process.env.NEW_DB_PASSWORD || process.env.DB_PASSWORD;

console.log("Connecting to database:", DB_NAME, "@", DB_HOST);

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
  logging: false,
});

// Define BlogPost model (minimal, just what we need)
const BlogPost = sequelize.define(
  "BlogPost",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    tags: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  },
);

async function parseXML(filePath) {
  const xmlContent = fs.readFileSync(filePath, "utf-8");
  const parser = new xml2js.Parser({ explicitArray: false });
  return parser.parseStringPromise(xmlContent);
}

function extractTagsFromItem(item) {
  const tags = [];

  if (item.category) {
    const categories = Array.isArray(item.category)
      ? item.category
      : [item.category];

    for (const cat of categories) {
      // Check if it's a post_tag (not a category)
      if (cat.$ && cat.$.domain === "post_tag") {
        // Extract the tag name from CDATA
        const tagName = cat._ || cat;
        if (tagName && typeof tagName === "string") {
          tags.push(tagName.trim());
        }
      }
    }
  }

  return tags;
}

function getSlugFromItem(item) {
  // wp:post_name contains the slug
  if (item["wp:post_name"]) {
    const slug = item["wp:post_name"]._ || item["wp:post_name"];
    return typeof slug === "string" ? slug.trim() : null;
  }
  return null;
}

function getPostType(item) {
  if (item["wp:post_type"]) {
    const type = item["wp:post_type"]._ || item["wp:post_type"];
    return typeof type === "string" ? type.trim() : null;
  }
  return null;
}

async function ensureTagsColumnExists() {
  try {
    // Check if tags column exists by running a simple query
    await sequelize.query("SELECT tags FROM BlogPosts LIMIT 1");
    console.log("✓ Tags column exists\n");
  } catch (error) {
    if (error.message.includes("Unknown column")) {
      console.log("Tags column not found, creating it...");
      await sequelize.query("ALTER TABLE BlogPosts ADD COLUMN tags TEXT NULL");
      console.log("✓ Tags column created\n");
    } else {
      throw error;
    }
  }
}

async function importTags(xmlFilePath) {
  console.log("\n=== Tags Import Script ===\n");
  console.log("XML File:", xmlFilePath);

  // Check if file exists
  if (!fs.existsSync(xmlFilePath)) {
    console.error("ERROR: XML file not found:", xmlFilePath);
    process.exit(1);
  }

  try {
    // Connect to database
    await sequelize.authenticate();
    console.log("✓ Database connected successfully\n");

    // Ensure tags column exists
    await ensureTagsColumnExists();

    // Parse XML
    console.log("Parsing XML file...");
    const result = await parseXML(xmlFilePath);

    const items = result.rss.channel.item;
    if (!items) {
      console.error("ERROR: No items found in XML");
      process.exit(1);
    }

    const itemsArray = Array.isArray(items) ? items : [items];
    console.log(`Found ${itemsArray.length} items in XML\n`);

    // Filter only posts (not pages, attachments, etc.)
    const posts = itemsArray.filter((item) => getPostType(item) === "post");
    console.log(`Found ${posts.length} blog posts\n`);

    let updated = 0;
    let skipped = 0;
    let notFound = 0;

    // Process each post
    for (const item of posts) {
      const slug = getSlugFromItem(item);
      const tags = extractTagsFromItem(item);

      if (!slug) {
        console.log("  ⚠ Skipping item with no slug");
        skipped++;
        continue;
      }

      if (tags.length === 0) {
        console.log(`  - ${slug}: No tags found`);
        skipped++;
        continue;
      }

      // Find the post in database by slug
      const dbPost = await BlogPost.findOne({ where: { slug } });

      if (!dbPost) {
        console.log(`  ✗ ${slug}: Not found in database`);
        notFound++;
        continue;
      }

      // Update tags (comma-separated string)
      const tagsString = tags.join(", ");
      await dbPost.update({ tags: tagsString });
      console.log(`  ✓ ${slug}: Updated with tags [${tagsString}]`);
      updated++;
    }

    console.log("\n=== Import Summary ===");
    console.log(`Updated: ${updated}`);
    console.log(`Skipped (no tags): ${skipped}`);
    console.log(`Not found in DB: ${notFound}`);
    console.log("======================\n");
  } catch (error) {
    console.error("ERROR:", error.message);
    process.exit(1);
  } finally {
    await sequelize.close();
  }
}

// Get XML file path from command line argument
const xmlFilePath = process.argv[2];

if (!xmlFilePath) {
  console.log("Usage: node scripts/import_tags.js <path-to-xml-file>");
  console.log(
    "Example: node scripts/import_tags.js ../Downloads/wordpress-export.xml",
  );
  process.exit(1);
}

// Resolve to absolute path
const absolutePath = path.resolve(xmlFilePath);
importTags(absolutePath);
