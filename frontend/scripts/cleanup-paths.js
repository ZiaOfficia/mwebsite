/**
 * Cleanup script: remove leftover ImageKit query param fragments
 * from local image paths (e.g., ",f-auto" or "?tr=..." or "?updatedAt=...")
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.join(__dirname, "..", "src");

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

function main() {
  console.log("=== Cleanup leftover query params ===\n");

  const files = scanFiles(SRC_DIR);
  let totalFixes = 0;
  let filesModified = 0;

  for (const file of files) {
    let content = fs.readFileSync(file, "utf-8");
    const originalContent = content;

    // Pattern: local image path followed by query params or comma-separated params
    // Match: /images/...(extension)(leftover junk)
    // e.g., "/images/gallery/dsc00021.jpg,f-auto"  -> "/images/gallery/dsc00021.jpg"
    // e.g., "/images/gallery/dsc00021.jpg?updatedAt=123" -> "/images/gallery/dsc00021.jpg"
    // e.g., "/images/gallery/dsc00021.jpg?updatedAt=123?tr=w-1200,f-auto" -> "/images/gallery/dsc00021.jpg"

    const regex =
      /(\/images\/[a-zA-Z0-9_/-]+\.(jpg|jpeg|png|webp|avif|gif|mp4|svg))[?,][^"'\s`)}\]]+/g;

    content = content.replace(regex, (match, cleanPath) => {
      totalFixes++;
      return cleanPath;
    });

    if (content !== originalContent) {
      fs.writeFileSync(file, content, "utf-8");
      const relPath = path.relative(path.join(__dirname, ".."), file);
      const count = originalContent.length - content.length;
      console.log(`  ${relPath}: cleaned (${count} chars removed)`);
      filesModified++;
    }
  }

  console.log(
    `\nDone! Fixed ${totalFixes} paths across ${filesModified} files.`,
  );
}

main();
