/**
 * MD5-compare character portraits vs movie posters. Exit 1 if any matches.
 * Run: node scripts/audit-poster-copies.mjs
 */
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const charsDir = path.join(root, "public/images/characters");
const moviesDir = path.join(root, "public/images/movies");

function md5(file) {
  return crypto.createHash("md5").update(fs.readFileSync(file)).digest("hex");
}

const movieHashes = new Map();
for (const f of fs.readdirSync(moviesDir).filter((x) => x.endsWith(".jpg"))) {
  movieHashes.set(md5(path.join(moviesDir, f)), f.replace(".jpg", ""));
}

const matches = [];
for (const f of fs.readdirSync(charsDir).filter((x) => x.endsWith(".jpg"))) {
  const slug = f.replace(".jpg", "");
  const h = md5(path.join(charsDir, f));
  if (movieHashes.has(h)) {
    matches.push({ char: slug, movie: movieHashes.get(h) });
  }
}

if (matches.length) {
  console.error(`Found ${matches.length} character portrait(s) identical to movie posters:`);
  for (const m of matches) console.error(`  ${m.char} -> ${m.movie}`);
  process.exit(1);
}

console.log("OK: 0 poster-copy hashes");
