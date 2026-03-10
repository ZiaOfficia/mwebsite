const mysql = require("mysql2/promise");
const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

// Source database (current)
const SOURCE_CONFIG = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
};

// Target database (new Hostinger) - UPDATE THESE VALUES
const TARGET_CONFIG = {
  host: process.env.NEW_DB_HOST || "YOUR_NEW_HOST",
  user: process.env.NEW_DB_USER || "YOUR_NEW_USER",
  password: process.env.NEW_DB_PASSWORD || "YOUR_NEW_PASSWORD",
  database: process.env.NEW_DB_NAME || "YOUR_NEW_DATABASE",
  port: process.env.NEW_DB_PORT || 3306,
};

const exportFilePath = path.join(__dirname, "blog_data_export.json");

async function exportData() {
  console.log("📤 Exporting data from source database...\n");

  const connection = await mysql.createConnection(SOURCE_CONFIG);

  try {
    // Export BlogPosts table
    const [blogPosts] = await connection.execute(
      "SELECT * FROM BlogPosts ORDER BY createdAt ASC",
    );
    console.log(`✓ Found ${blogPosts.length} blog posts`);

    // Save to JSON file
    const exportData = {
      exportDate: new Date().toISOString(),
      source: {
        host: SOURCE_CONFIG.host,
        database: SOURCE_CONFIG.database,
      },
      data: {
        blogPosts,
      },
    };

    fs.writeFileSync(exportFilePath, JSON.stringify(exportData, null, 2));
    console.log(`\n✅ Data exported to: ${exportFilePath}`);
    console.log(`   Total: ${blogPosts.length} blog posts\n`);

    return exportData;
  } finally {
    await connection.end();
  }
}

async function importData() {
  console.log("📥 Importing data to target database...\n");

  // Check if export file exists
  if (!fs.existsSync(exportFilePath)) {
    console.error("❌ Export file not found. Run export first.");
    process.exit(1);
  }

  const importData = JSON.parse(fs.readFileSync(exportFilePath, "utf-8"));
  const { blogPosts } = importData.data;

  const connection = await mysql.createConnection(TARGET_CONFIG);

  try {
    // Create table if not exists
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS BlogPosts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(500) NOT NULL,
        slug VARCHAR(500) UNIQUE,
        excerpt TEXT,
        content LONGTEXT,
        image_url VARCHAR(1000),
        image_alt_text VARCHAR(500),
        author VARCHAR(255),
        category VARCHAR(255),
        meta_title VARCHAR(500),
        meta_description TEXT,
        meta_keywords TEXT,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
    console.log("✓ Table structure verified");

    // Clear existing data (optional)
    await connection.execute("DELETE FROM BlogPosts");
    console.log("✓ Cleared existing data");

    // Insert blog posts
    let inserted = 0;
    for (const post of blogPosts) {
      try {
        await connection.execute(
          `INSERT INTO BlogPosts 
           (title, slug, excerpt, content, image_url, image_alt_text, author, category, 
            meta_title, meta_description, meta_keywords, createdAt, updatedAt)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            post.title,
            post.slug,
            post.excerpt,
            post.content,
            post.image_url,
            post.image_alt_text,
            post.author,
            post.category,
            post.meta_title,
            post.meta_description,
            post.meta_keywords,
            post.createdAt,
            post.updatedAt,
          ],
        );
        inserted++;
        process.stdout.write(`\r   Inserted: ${inserted}/${blogPosts.length}`);
      } catch (err) {
        console.log(`\n   ⚠️ Skipped: ${post.slug} - ${err.message}`);
      }
    }

    console.log(`\n\n✅ Migration complete!`);
    console.log(`   Inserted: ${inserted} blog posts`);
  } finally {
    await connection.end();
  }
}

// Parse command line arguments
const command = process.argv[2];

if (command === "export") {
  exportData().catch(console.error);
} else if (command === "import") {
  importData().catch(console.error);
} else if (command === "migrate") {
  exportData()
    .then(() => importData())
    .catch(console.error);
} else {
  console.log(`
Database Migration Script
========================

Usage:
  node scripts/migrateDb.js export   - Export data from source DB to JSON
  node scripts/migrateDb.js import   - Import data from JSON to target DB
  node scripts/migrateDb.js migrate  - Export and import in one step

Before running import/migrate, update the TARGET_CONFIG in this file
or set these environment variables:
  NEW_DB_HOST, NEW_DB_USER, NEW_DB_PASSWORD, NEW_DB_NAME, NEW_DB_PORT
  `);
}
