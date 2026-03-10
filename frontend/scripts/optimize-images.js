/**
 * Image Optimization Script
 *
 * Resizes and compresses all images in public/images/ to WebP format.
 * - Max width: 1200px (sufficient for any screen)
 * - Quality: 80 (great visual quality, much smaller file)
 * - Replaces original files with .webp versions
 * - Updates all source code references to use .webp extensions
 * - Skips videos (.mp4)
 */

import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, "..", "public", "images");
const SRC_DIR = path.join(__dirname, "..", "src");
const MAX_WIDTH = 1200;
const QUALITY = 80;

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

function walkDir(dir) {
  let files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(walkDir(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

function scanSourceFiles(dir, extensions = [".tsx", ".ts"]) {
  let files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== "node_modules") {
      files = files.concat(scanSourceFiles(fullPath, extensions));
    } else if (extensions.some((ext) => entry.name.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  return files;
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();

  // Skip non-image files
  if (!IMAGE_EXTENSIONS.includes(ext)) {
    return null;
  }

  const originalSize = fs.statSync(filePath).size;
  const webpPath = filePath.replace(/\.(jpg|jpeg|png|avif)$/i, ".webp");
  const isAlreadyWebp = ext === ".webp";

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    // Resize if wider than MAX_WIDTH
    const pipeline =
      metadata.width > MAX_WIDTH
        ? image.resize(MAX_WIDTH, null, { withoutEnlargement: true })
        : image;

    // Convert to WebP
    const outputBuffer = await pipeline.webp({ quality: QUALITY }).toBuffer();

    // Write the WebP file
    fs.writeFileSync(isAlreadyWebp ? filePath : webpPath, outputBuffer);

    // Delete original if different from output
    if (!isAlreadyWebp && fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    const newSize = outputBuffer.length;
    const savings = ((1 - newSize / originalSize) * 100).toFixed(0);

    return {
      original: path.basename(filePath),
      output: path.basename(isAlreadyWebp ? filePath : webpPath),
      originalSize,
      newSize,
      savings: parseInt(savings),
      originalExt: ext,
      wasRenamed: !isAlreadyWebp,
    };
  } catch (err) {
    console.log(
      `  ERROR processing ${path.basename(filePath)}: ${err.message}`,
    );
    return null;
  }
}

function updateSourceReferences(renameMap) {
  const sourceFiles = scanSourceFiles(SRC_DIR);
  let totalReplacements = 0;
  let filesModified = 0;

  for (const file of sourceFiles) {
    let content = fs.readFileSync(file, "utf-8");
    const originalContent = content;

    for (const [oldPath, newPath] of renameMap) {
      if (content.includes(oldPath)) {
        content = content.replaceAll(oldPath, newPath);
      }
    }

    if (content !== originalContent) {
      fs.writeFileSync(file, content, "utf-8");
      const replacements =
        originalContent.length !== content.length ? "(updated)" : "";
      const relPath = path.relative(path.join(__dirname, ".."), file);
      console.log(`  Updated: ${relPath}`);
      filesModified++;
    }
  }

  return { totalReplacements, filesModified };
}

async function main() {
  console.log("=== Image Optimization ===\n");

  const allFiles = walkDir(IMAGES_DIR);
  const imageFiles = allFiles.filter((f) =>
    IMAGE_EXTENSIONS.includes(path.extname(f).toLowerCase()),
  );

  console.log(`Found ${imageFiles.length} images to optimize\n`);

  let totalOriginal = 0;
  let totalNew = 0;
  let processed = 0;
  const renameMap = []; // [oldRefPath, newRefPath]

  for (const file of imageFiles) {
    const result = await optimizeImage(file);
    if (result) {
      totalOriginal += result.originalSize;
      totalNew += result.newSize;
      processed++;

      const relDir = path.dirname(
        path.relative(path.join(__dirname, "..", "public"), file),
      );

      if (result.wasRenamed) {
        const oldRef = `/${relDir}/${result.original}`.replace(/\\/g, "/");
        const newRef = `/${relDir}/${result.output}`.replace(/\\/g, "/");
        renameMap.push([oldRef, newRef]);
      }

      if (processed % 20 === 0) {
        console.log(`  Processed ${processed}/${imageFiles.length}...`);
      }
    }
  }

  console.log(`\nOptimized ${processed} images:`);
  console.log(`  Before: ${(totalOriginal / 1024 / 1024).toFixed(1)} MB`);
  console.log(`  After:  ${(totalNew / 1024 / 1024).toFixed(1)} MB`);
  console.log(
    `  Saved:  ${((totalOriginal - totalNew) / 1024 / 1024).toFixed(1)} MB (${((1 - totalNew / totalOriginal) * 100).toFixed(0)}%)\n`,
  );

  // Update source references for renamed files
  if (renameMap.length > 0) {
    console.log(
      `Updating ${renameMap.length} file references in source code...\n`,
    );
    const { filesModified } = updateSourceReferences(renameMap);
    console.log(`\nUpdated ${filesModified} source files.`);
  }

  console.log("\nDone! Images optimized and references updated.");
}

main().catch(console.error);
