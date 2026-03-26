const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const BlogPost = require("../models/BlogPost");
const sequelize = require("../config/db");

async function fixSlugs() {
  await sequelize.authenticate();
  console.log("Connected to database.");

  const posts = await BlogPost.findAll({ attributes: ["id", "slug"] });
  let fixed = 0;

  for (const post of posts) {
    const cleanSlug = post.slug.replace(/^\/+/, "").trim().toLowerCase();
    if (cleanSlug !== post.slug) {
      console.log(`Fixing: "${post.slug}" → "${cleanSlug}"`);
      await post.update({ slug: cleanSlug });
      fixed++;
    }
  }

  console.log(`\nDone. Fixed ${fixed} slugs out of ${posts.length} total.`);
  process.exit(0);
}

fixSlugs().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
