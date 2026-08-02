import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const catalog = fs.readFileSync(path.join(root, "src/data/catalog.ts"), "utf8");

const movieSection = catalog.split("export const CHARACTER_CATALOG")[0];
const charSection = catalog.split("export const CHARACTER_CATALOG")[1] ?? "";

function extractPairs(section, field) {
  const out = [];
  const re = new RegExp(
    'slug: "([^"]+)"[\\s\\S]*?' + field + ": `\\$\\{TMDB\\}/([^`]+)`",
    "g"
  );
  let m;
  while ((m = re.exec(section)) !== null) out.push({ slug: m[1], tmdb: m[2] });
  return out;
}

const movies = extractPairs(movieSection, "poster");
const chars = extractPairs(charSection, "image");

const movieByTmdb = new Map();
for (const m of movies) {
  if (!movieByTmdb.has(m.tmdb)) movieByTmdb.set(m.tmdb, []);
  movieByTmdb.get(m.tmdb).push(m.slug);
}

console.log("Movies:", movies.length, "Chars:", chars.length);

const posterFallbacks = chars.filter((c) => movieByTmdb.has(c.tmdb));
console.log(
  "\nCharacters whose catalog.image is a movie poster TMDB path:",
  posterFallbacks.length
);
for (const c of posterFallbacks) {
  console.log(`  ${c.slug} => movies: ${movieByTmdb.get(c.tmdb).join(",")}`);
}

const byTmdb = new Map();
for (const c of chars) {
  if (!byTmdb.has(c.tmdb)) byTmdb.set(c.tmdb, []);
  byTmdb.get(c.tmdb).push(c.slug);
}
console.log("\nCharacters sharing same catalog image:");
for (const [tmdb, slugs] of byTmdb) {
  if (slugs.length > 1) console.log(`  ${slugs.join(", ")} (${tmdb})`);
}

const UA = "marvelworld/1.0 (audit)";
async function md5Url(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) return null;
  const buf = Buffer.from(await res.arrayBuffer());
  return {
    hash: crypto.createHash("md5").update(buf).digest("hex"),
    size: buf.length,
  };
}

const charsDir = path.join(root, "public/images/characters");
console.log("\nComparing local files to catalog TMDB w500...");
let matches = 0;
const matched = [];
for (const c of chars) {
  const local = path.join(charsDir, `${c.slug}.jpg`);
  if (!fs.existsSync(local)) {
    console.log("MISSING local", c.slug);
    continue;
  }
  const localHash = crypto
    .createHash("md5")
    .update(fs.readFileSync(local))
    .digest("hex");
  const remote = await md5Url(`https://image.tmdb.org/t/p/w500/${c.tmdb}`);
  if (!remote) {
    console.log("TMDB fail", c.slug);
    continue;
  }
  if (localHash === remote.hash) {
    matches++;
    matched.push(c.slug);
    console.log(
      "LOCAL=TMDB",
      c.slug,
      movieByTmdb.has(c.tmdb) ? "(movie poster path)" : "(other)"
    );
  }
}
console.log("\nLocal files identical to catalog TMDB:", matches);
console.log(matched.join(", ") || "(none)");
