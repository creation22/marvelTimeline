import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import crypto from "crypto";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const charsDir = path.join(root, "public/images/characters");
const moviesDir = path.join(root, "public/images/movies");

function md5(buf) {
  return crypto.createHash("md5").update(buf).digest("hex");
}

const catalog = fs.readFileSync(path.join(root, "src/data/catalog.ts"), "utf8");
const charSection = catalog.split("export const CHARACTER_CATALOG")[1] ?? "";
const chars = [];
const re = /slug:\s*"([^"]+)"[\s\S]*?name:\s*"([^"]+)"[\s\S]*?image:\s*"([^"]+)"/g;
let m;
while ((m = re.exec(charSection)) !== null) {
  chars.push({ slug: m[1], name: m[2], image: m[3] });
}

const localFiles = new Set(
  fs.readdirSync(charsDir).map((f) => f.replace(/\.(jpg|png|webp)$/i, ""))
);

const movieFiles = fs.readdirSync(moviesDir).filter((f) => /\.jpe?g$/i.test(f));
const movieHashes = new Map();
for (const f of movieFiles) {
  const buf = fs.readFileSync(path.join(moviesDir, f));
  movieHashes.set(md5(buf), f);
}

console.log("Catalog characters:", chars.length);
console.log("Local character files:", localFiles.size);

const missing = chars.filter((c) => !localFiles.has(c.slug));
console.log("\nMissing local:", missing.length);
for (const c of missing) console.log("  MISSING", c.slug);

// Detect shared TMDB image IDs across characters (often means movie poster reuse)
const byImage = new Map();
for (const c of chars) {
  if (!byImage.has(c.image)) byImage.set(c.image, []);
  byImage.get(c.image).push(c.slug);
}
console.log("\nShared catalog image URLs (suspicious poster reuse):");
for (const [img, slugs] of byImage) {
  if (slugs.length > 1) {
    console.log(`  ${slugs.join(", ")} => ${img.slice(-40)}`);
  }
}

console.log("\n--- Local file analysis ---");
const results = [];
for (const f of fs.readdirSync(charsDir).filter((x) => /\.jpe?g$/i.test(x))) {
  const fp = path.join(charsDir, f);
  const buf = fs.readFileSync(fp);
  const hash = md5(buf);
  const isJpeg = buf[0] === 0xff && buf[1] === 0xd8;
  const isPng = buf[0] === 0x89 && buf[1] === 0x50;
  const isWebp =
    buf.toString("ascii", 0, 4) === "RIFF" &&
    buf.toString("ascii", 8, 12) === "WEBP";
  let meta = null;
  try {
    meta = await sharp(buf).metadata();
  } catch (e) {
    meta = { error: String(e.message || e) };
  }
  const w = meta?.width || 0;
  const h = meta?.height || 0;
  const ratio = w && h ? w / h : 0;
  const posterLike = ratio > 0 && ratio < 0.72; // TMDB posters ~0.666
  const movieMatch = movieHashes.get(hash);
  results.push({
    f,
    size: buf.length,
    isJpeg,
    isPng,
    isWebp,
    w,
    h,
    ratio: ratio ? ratio.toFixed(3) : "?",
    posterLike,
    movieMatch: movieMatch || null,
    format: meta?.format,
  });
}

const notJpeg = results.filter((r) => !r.isJpeg);
const posterLike = results.filter((r) => r.posterLike);
const movieMatches = results.filter((r) => r.movieMatch);

console.log("Non-JPEG files:", notJpeg.length);
notJpeg.forEach((r) =>
  console.log(
    `  ${r.f} png=${r.isPng} webp=${r.isWebp} format=${r.format} ${r.w}x${r.h}`
  )
);
console.log("Exact movie hash matches:", movieMatches.length);
console.log("Poster-aspect (w/h < 0.72):", posterLike.length);
posterLike
  .sort((a, b) => a.ratio - b.ratio)
  .forEach((r) =>
    console.log(`  ${r.f} ${r.w}x${r.h} ratio=${r.ratio} size=${r.size}`)
  );

// Also list slugs in FANDOM script coverage
const script = fs.readFileSync(
  path.join(root, "scripts/fix-character-portraits.mjs"),
  "utf8"
);
const covered = new Set([
  ...[...script.matchAll(/^\s*"([^"]+)":\s*\[/gm)].map((x) => x[1]),
]);
const uncovered = chars.filter((c) => !covered.has(c.slug));
console.log("\nCharacters not in FANDOM_TITLES/EXTRA:", uncovered.length);
uncovered.forEach((c) =>
  console.log(`  ${c.slug} local=${localFiles.has(c.slug)}`)
);
