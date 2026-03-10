/**
 * Add lazy loading and async decoding to all img tags
 * that don't already have these attributes.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.join(__dirname, "..", "src");

function scanFiles(dir) {
  let files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== "node_modules") {
      files = files.concat(scanFiles(fullPath));
    } else if (entry.name.endsWith(".tsx")) {
      files.push(fullPath);
    }
  }
  return files;
}

function main() {
  console.log("=== Add Lazy Loading ===\n");

  const files = scanFiles(SRC_DIR);
  let totalFixes = 0;
  let filesModified = 0;

  for (const file of files) {
    let content = fs.readFileSync(file, "utf-8");
    const original = content;

    // Add loading="lazy" to <img tags that don't have it
    // Match <img ... /> or <img ... > without loading attribute
    content = content.replace(
      /<img\b(?![^>]*loading=)([^>]*?)\/?>/g,
      (match, attrs) => {
        // Don't add lazy loading to images that are critical (hero images)
        // We'll identify hero by className containing 'hero' or if it's the first img in a page
        return match.replace("<img", '<img loading="lazy" decoding="async"');
      },
    );

    if (content !== original) {
      fs.writeFileSync(file, content, "utf-8");
      const relPath = path.relative(path.join(__dirname, ".."), file);
      const count =
        (content.match(/loading="lazy"/g) || []).length -
        (original.match(/loading="lazy"/g) || []).length;
      console.log(`  ${relPath}: +${count} lazy images`);
      totalFixes += count;
      filesModified++;
    }
  }

  console.log(
    `\nDone! Added lazy loading to ${totalFixes} images across ${filesModified} files.`,
  );
}

main();
