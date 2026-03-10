/**
 * ImageKit to Local Migration Script
 *
 * This script:
 * 1. Scans all .tsx and .ts files for ImageKit URLs
 * 2. Downloads each unique image to public/images/ organized by category
 * 3. Generates a mapping JSON (url -> local path) for find-and-replace
 */

import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.join(__dirname, "..", "src");
const PUBLIC_DIR = path.join(__dirname, "..", "public", "images");
const MAPPING_FILE = path.join(__dirname, "image-mapping.json");

// Regex to find all ImageKit URLs
const IMAGEKIT_REGEX = /https:\/\/ik\.imagekit\.io\/v6xwevpjp\/[^\s"'`,)}\]]+/g;

function scanFiles(dir, extensions = [".tsx", ".ts"]) {
  let files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== "node_modules") {
      files = files.concat(scanFiles(fullPath, extensions));
    } else if (extensions.some((ext) => entry.name.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  return files;
}

function categorizeUrl(url) {
  const decodedUrl = decodeURIComponent(url);

  if (
    decodedUrl.includes("/videos-Elegentize/") ||
    decodedUrl.includes("/videos/") ||
    decodedUrl.endsWith(".mp4")
  ) {
    return "videos";
  } else if (
    decodedUrl.includes("/Gallery-Elegantize/") ||
    decodedUrl.includes("/Gallery-Elegentize/")
  ) {
    return "gallery";
  } else if (
    decodedUrl.includes("/Portfolio/") ||
    decodedUrl.includes("/Elegentize-portfolio/")
  ) {
    return "portfolio";
  } else if (
    decodedUrl.includes("/Home%20Page") ||
    decodedUrl.includes("/Home Page")
  ) {
    return "home";
  } else if (
    decodedUrl.includes("/featured-in/") ||
    decodedUrl.toLowerCase().includes("logo")
  ) {
    return "logos";
  } else if (decodedUrl.includes("/Elegentize/")) {
    return "general";
  } else {
    return "misc";
  }
}

function getCleanFilename(url) {
  // Remove query params and get basename
  let urlPath = url.split("?")[0];
  let filename = decodeURIComponent(path.basename(urlPath));

  // Clean up filename
  filename = filename
    .replace(/^Copy\s+of\s+/i, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9._-]/g, "")
    .toLowerCase();

  // Ensure extension
  if (!path.extname(filename)) {
    filename += ".jpg";
  }

  return filename;
}

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    // Clean URL
    let cleanUrl = url;
    // Fix URLs with double ? (e.g., ?updatedAt=xxx?tr=xxx)
    const qCount = (cleanUrl.match(/\?/g) || []).length;
    if (qCount > 1) {
      const firstQ = cleanUrl.indexOf("?");
      cleanUrl =
        cleanUrl.substring(0, firstQ) +
        "?" +
        cleanUrl.substring(firstQ + 1).replace(/\?/g, "&");
    }

    const dir = path.dirname(destPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    if (fs.existsSync(destPath)) {
      console.log(`  SKIP (exists): ${path.basename(destPath)}`);
      resolve(true);
      return;
    }

    https
      .get(
        cleanUrl,
        {
          headers: { "User-Agent": "Mozilla/5.0" },
          timeout: 30000,
        },
        (response) => {
          if (response.statusCode === 301 || response.statusCode === 302) {
            downloadFile(response.headers.location, destPath)
              .then(resolve)
              .catch(reject);
            return;
          }

          if (response.statusCode !== 200) {
            console.log(`  FAIL (${response.statusCode}): ${cleanUrl}`);
            reject(new Error(`HTTP ${response.statusCode}`));
            return;
          }

          const fileStream = fs.createWriteStream(destPath);
          response.pipe(fileStream);
          fileStream.on("finish", () => {
            fileStream.close();
            const size = fs.statSync(destPath).size;
            console.log(
              `  OK (${(size / 1024).toFixed(0)}KB): ${path.basename(destPath)}`,
            );
            resolve(true);
          });
          fileStream.on("error", reject);
        },
      )
      .on("error", reject)
      .on("timeout", () => reject(new Error("Timeout")));
  });
}

async function main() {
  console.log("=== ImageKit to Local Migration ===\n");

  // Step 1: Scan for all URLs
  console.log("Scanning source files...");
  const files = scanFiles(SRC_DIR);
  console.log(`Found ${files.length} source files\n`);

  const allUrls = new Set();

  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    const matches = content.match(IMAGEKIT_REGEX);
    if (matches) {
      matches.forEach((url) => allUrls.add(url));
    }
  }

  console.log(`Found ${allUrls.size} unique ImageKit URLs\n`);

  // Step 2: Categorize and create mapping
  const mapping = {};
  const downloads = [];
  const usedPaths = new Set();

  for (const url of allUrls) {
    const category = categorizeUrl(url);
    let filename = getCleanFilename(url);

    const destDir = path.join(PUBLIC_DIR, category);
    let localPath = `/images/${category}/${filename}`;
    let destPath = path.join(destDir, filename);

    // Handle filename collision
    let counter = 1;
    const baseName = path.parse(filename).name;
    const ext = path.parse(filename).ext;
    while (usedPaths.has(localPath)) {
      filename = `${baseName}-${counter}${ext}`;
      localPath = `/images/${category}/${filename}`;
      destPath = path.join(destDir, filename);
      counter++;
    }

    usedPaths.add(localPath);
    mapping[url] = localPath;
    downloads.push({ url, destPath, localPath, category });
  }

  // Print summary by category
  const categories = {};
  downloads.forEach((d) => {
    categories[d.category] = (categories[d.category] || 0) + 1;
  });
  console.log("Images by category:");
  for (const [cat, count] of Object.entries(categories)) {
    console.log(`  ${cat}: ${count} images`);
  }
  console.log("");

  // Step 3: Download all images
  console.log("Downloading images...\n");

  let success = 0;
  let failed = 0;
  const failedUrls = [];

  for (const { url, destPath, localPath } of downloads) {
    try {
      await downloadFile(url, destPath);
      success++;
    } catch (err) {
      console.log(`  ERROR: ${err.message} -> ${localPath}`);
      failed++;
      failedUrls.push({ url, localPath, error: err.message });
    }
    // Small delay
    await new Promise((r) => setTimeout(r, 100));
  }

  console.log(`\nDownload complete: ${success} success, ${failed} failed`);

  if (failedUrls.length > 0) {
    console.log("\nFailed downloads:");
    failedUrls.forEach((f) => console.log(`  ${f.url}`));
  }

  // Step 4: Save mapping
  fs.writeFileSync(MAPPING_FILE, JSON.stringify(mapping, null, 2));
  console.log(`\nMapping saved to: ${MAPPING_FILE}`);
  console.log(`Total mappings: ${Object.keys(mapping).length}`);
}

main().catch(console.error);
