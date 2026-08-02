/**
 * Uploads all site images from /public to Vercel Blob and prints
 * a ready-to-paste src/lib/image-urls.ts file.
 *
 * Run:  node scripts/upload-images-to-blob.mjs
 */

import { put } from "@vercel/blob";
import { readFileSync, existsSync } from "fs";
import { join, extname } from "path";
import { config } from "dotenv";

// Load .env.local so BLOB_READ_WRITE_TOKEN is available
config({ path: ".env.local" });

const PUBLIC_DIR = join(process.cwd(), "public");

const IMAGES = [
  // Hero / pages
  "hero.jpg",
  "mission.jpg",
  "community.jpg",
  "impact.jpg",
  "impact2.jpg",
  "team.jpg",
  "support.jpg",
  "involved.jpg",
  "story.jpg",
  "hope.jpg",
  // Programs
  "002.jpg",
  "003.jpg",
  "004.jpg",
  "005.jpg",
  "006.jpg",
  "007.jpg",
  "soccer01.jpg",
  "soccer02.jpg",
  // Gallery
  "001.jpg",
  "008.jpg",
  "01.jpg",
  "02.jpg",
  "03.jpeg",
  "04.jpg",
  "05.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  // Team
  "Aline.png",
  "Aristote.jpeg",
  "Bienvenue.jpeg",
  "Christophe.jpeg",
  "Esther.jpeg",
  "Patrone.jpeg",
  // Events
  "bridgefest2026.png",
  "newroots-summit.png",
  "youth-unlocking-potential.png",
];

const mimeMap = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
};

const results = {};

console.log("Uploading images to Vercel Blob...\n");

for (const filename of IMAGES) {
  const filepath = join(PUBLIC_DIR, filename);
  if (!existsSync(filepath)) {
    console.warn(`  SKIP (not found): ${filename}`);
    continue;
  }
  const ext = extname(filename).toLowerCase();
  const contentType = mimeMap[ext] ?? "application/octet-stream";
  const file = readFileSync(filepath);

  try {
    const blob = await put(`site/${filename}`, file, {
      access: "public",
      contentType,
      addRandomSuffix: false,
    });
    results[`/${filename}`] = blob.url;
    console.log(`  ✓ ${filename}`);
  } catch (err) {
    console.error(`  ✗ ${filename}: ${err.message}`);
  }
}

// Build the TypeScript module
const lines = [
  `/**`,
  ` * Auto-generated — do not edit manually.`,
  ` * Source: scripts/upload-images-to-blob.mjs`,
  ` *`,
  ` * Maps every local /public image path to its Vercel Blob CDN URL.`,
  ` * Import and use instead of bare "/filename.jpg" strings so images`,
  ` * are served from Vercel's edge CDN for faster global load times.`,
  ` */`,
  ``,
  `export const imageUrls: Record<string, string> = {`,
  ...Object.entries(results).map(
    ([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`
  ),
  `};`,
  ``,
  `/** Returns the Blob CDN URL for a public path, or the original path as fallback. */`,
  `export function img(publicPath: string): string {`,
  `  return imageUrls[publicPath] ?? publicPath;`,
  `}`,
];

const output = lines.join("\n") + "\n";
const outPath = join(process.cwd(), "src/lib/image-urls.ts");
import { writeFileSync } from "fs";
writeFileSync(outPath, output, "utf-8");

console.log(`\nDone! Wrote ${Object.keys(results).length} URLs → src/lib/image-urls.ts`);
