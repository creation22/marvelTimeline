/**
 * Multi-source MCU image downloader.
 * Chain: cached local → curated (Pinterest/Wikimedia) → Wikipedia → TMDB API → Fanart → OMDB → catalog TMDB → movie-poster copy
 *
 * Run: npm run download-images
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const CACHE_MIN_BYTES = 5000;
const DOWNLOAD_MIN_BYTES = 800;
const UA = "marvelworld/1.0 (educational MCU showcase; local image cache)";
const WIKI_DELAY_MS = 250;

const moviesDir = path.join(root, "public/images/movies");
const charsDir = path.join(root, "public/images/characters");
fs.mkdirSync(moviesDir, { recursive: true });
fs.mkdirSync(charsDir, { recursive: true });

// ── env ──────────────────────────────────────────────────────────────────────
function loadEnv() {
  const env = { ...process.env };
  for (const file of [".env", ".env.local"]) {
    const p = path.join(root, file);
    if (!fs.existsSync(p)) continue;
    for (const line of fs.readFileSync(p, "utf8").split("\n")) {
      const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
      if (m && !env[m[1]]) env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  }
  return env;
}

const env = loadEnv();
const TMDB_KEY = env.TMDB_API_KEY || "";
const OMDB_KEY = env.OMDB_API_KEY || "";
const FANART_KEY = env.FANART_API_KEY || "";

// ── parse TS exports ─────────────────────────────────────────────────────────
function parseTsExport(filePath, exportName) {
  const text = fs.readFileSync(filePath, "utf8");
  const marker = `export const ${exportName}`;
  const idx = text.indexOf(marker);
  if (idx === -1) return {};
  const eq = text.indexOf("=", idx);
  const start = text.indexOf("{", eq);
  let depth = 0;
  let end = start;
  for (let i = start; i < text.length; i++) {
    if (text[i] === "{") depth++;
    if (text[i] === "}") {
      depth--;
      if (depth === 0) {
        end = i;
        break;
      }
    }
  }
  return new Function(`return ${text.slice(start, end + 1)}`)();
}

const dataDir = path.join(root, "src/data");
const curatedMovies = parseTsExport(path.join(dataDir, "curated-images.ts"), "CURATED_MOVIE_IMAGES");
const curatedChars = parseTsExport(path.join(dataDir, "curated-images.ts"), "CURATED_CHARACTER_IMAGES");
const wikiMovies = parseTsExport(path.join(dataDir, "wikipedia-titles.ts"), "WIKIPEDIA_MOVIE_TITLES");
const wikiChars = parseTsExport(path.join(dataDir, "wikipedia-titles.ts"), "WIKIPEDIA_CHARACTER_TITLES");
const charMovieFallback = parseTsExport(path.join(dataDir, "wikipedia-titles.ts"), "CHARACTER_MOVIE_FALLBACK");
const tmdbIds = parseTsExport(path.join(dataDir, "tmdb-ids.ts"), "TMDB_IDS");

const catalogText = fs.readFileSync(path.join(dataDir, "catalog.ts"), "utf8");
const charSection = catalogText.split("export const CHARACTER_CATALOG")[1] ?? "";

function extractSlugs(text) {
  const slugs = [];
  const re = /slug: "([^"]+)"/g;
  let m;
  while ((m = re.exec(text)) !== null) slugs.push(m[1]);
  return slugs;
}

const movieSlugs = extractSlugs(catalogText.split("export const CHARACTER_CATALOG")[0]);
const charSlugs = extractSlugs(charSection);

const catalogTmdbPaths = {};
const pathRe = /slug: "([^"]+)"[^}]*(?:poster|image): `\$\{TMDB\}\/([^"]+)`/g;
let cp;
while ((cp = pathRe.exec(catalogText)) !== null) catalogTmdbPaths[cp[1]] = cp[2];

function buildCharacterMovieMap() {
  const map = {};
  const lineRe = /\{ slug: "([^"]+)"[^}]*featuredCharacters: \[([^\]]*)\]/g;
  let m;
  while ((m = lineRe.exec(catalogText)) !== null) {
    for (const charSlug of [...m[2].matchAll(/"([^"]+)"/g)].map((x) => x[1])) {
      if (!map[charSlug]) map[charSlug] = m[1];
    }
  }
  return map;
}

const charFromMovie = buildCharacterMovieMap();

// ── helpers ──────────────────────────────────────────────────────────────────
let wikiLast = 0;

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function throttleWiki() {
  const wait = Math.max(0, WIKI_DELAY_MS - (Date.now() - wikiLast));
  if (wait) await sleep(wait);
  wikiLast = Date.now();
}

function isCached(dest) {
  return fs.existsSync(dest) && fs.statSync(dest).size >= CACHE_MIN_BYTES;
}

function upscaleWikiUrl(url) {
  if (!url?.includes("/thumb/")) return url;
  const [base, rest] = url.split("/thumb/");
  const segments = rest.split("/");
  segments.pop();
  return `${base}/${segments.join("/")}`;
}

function sourceLabel(url) {
  if (!url) return "unknown";
  if (url.startsWith("copy:")) return "movie-fallback";
  if (url.includes("pinimg.com")) return "pinterest";
  if (url.includes("wikimedia.org")) return "wikimedia";
  if (url.includes("wikipedia.org")) return "wikipedia";
  if (url.includes("tmdb.org")) return "tmdb";
  if (url.includes("fanart.tv")) return "fanart";
  if (url.includes("omdbapi.com") || url.includes("media-amazon.com")) return "omdb";
  return "direct";
}

async function fetchBuffer(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": UA, Accept: "image/*,*/*" },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const ct = res.headers.get("content-type") || "";
  if (ct.includes("text/html") && !ct.includes("svg")) throw new Error("HTML response");
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < DOWNLOAD_MIN_BYTES) throw new Error(`too small (${buf.length}b)`);
  return buf;
}

async function tryUrls(urls, dest) {
  for (const url of urls) {
    if (!url) continue;
    try {
      const buf = await fetchBuffer(url);
      fs.writeFileSync(dest, buf);
      return url;
    } catch {
      // next
    }
  }
  return null;
}

async function wikipediaImage(title) {
  if (!title) return null;
  await throttleWiki();
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
  const res = await fetch(url, { headers: { "User-Agent": UA, Accept: "application/json" } });
  if (res.status === 429) {
    await sleep(1500);
    return wikipediaImage(title);
  }
  if (!res.ok) return null;
  const data = await res.json();
  return data.originalimage?.source || upscaleWikiUrl(data.thumbnail?.source) || data.thumbnail?.source || null;
}

async function tmdbPosterUrl(slug) {
  if (!TMDB_KEY) return null;
  const entry = tmdbIds[slug];
  if (!entry) return null;
  const endpoint =
    entry.type === "tv"
      ? `https://api.themoviedb.org/3/tv/${entry.id}?api_key=${TMDB_KEY}`
      : `https://api.themoviedb.org/3/movie/${entry.id}?api_key=${TMDB_KEY}`;
  const res = await fetch(endpoint);
  if (!res.ok) return null;
  const data = await res.json();
  if (!data.poster_path) return null;
  for (const size of ["w500", "w342", "original"]) {
    const url = `https://image.tmdb.org/t/p/${size}${data.poster_path}`;
    try {
      await fetchBuffer(url);
      return url;
    } catch {
      // next
    }
  }
  return null;
}

async function fanartPosterUrl(slug) {
  if (!FANART_KEY) return null;
  const entry = tmdbIds[slug];
  if (!entry || entry.type !== "movie") return null;
  const res = await fetch(`https://webservice.fanart.tv/v3/movies/${entry.id}?api_key=${FANART_KEY}`);
  if (!res.ok) return null;
  const data = await res.json();
  return data.movieposter?.[0]?.url || null;
}

async function omdbPosterUrl(slug) {
  if (!OMDB_KEY) return null;
  const title = wikiMovies[slug];
  if (!title) return null;
  const clean = title.replace(/\s*\([^)]*\)/g, "").trim();
  const res = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(clean)}&apikey=${OMDB_KEY}`);
  if (!res.ok) return null;
  const data = await res.json();
  if (!data.Poster || data.Poster === "N/A") return null;
  return data.Poster;
}

function catalogTmdbUrls(slug) {
  const fileId = catalogTmdbPaths[slug];
  if (!fileId) return [];
  return ["w500", "w342", "original"].map((s) => `https://image.tmdb.org/t/p/${s}/${fileId}`);
}

function copyMoviePoster(movieSlug, dest) {
  const src = path.join(moviesDir, `${movieSlug}.jpg`);
  if (!fs.existsSync(src) || fs.statSync(src).size < DOWNLOAD_MIN_BYTES) return false;
  fs.copyFileSync(src, dest);
  return true;
}

async function downloadMovie(slug) {
  const dest = path.join(moviesDir, `${slug}.jpg`);
  if (isCached(dest)) return { ok: true, source: "cached" };

  const curated = curatedMovies[slug] || [];
  const hit = await tryUrls(curated, dest);
  if (hit) return { ok: true, source: sourceLabel(hit) };

  const wikiUrl = await wikipediaImage(wikiMovies[slug]);
  if (wikiUrl) {
    const w = await tryUrls([wikiUrl], dest);
    if (w) return { ok: true, source: "wikipedia" };
  }

  const tmdb = await tmdbPosterUrl(slug);
  if (tmdb) {
    const t = await tryUrls([tmdb], dest);
    if (t) return { ok: true, source: "tmdb" };
  }

  const fanart = await fanartPosterUrl(slug);
  if (fanart) {
    const f = await tryUrls([fanart], dest);
    if (f) return { ok: true, source: "fanart" };
  }

  const omdb = await omdbPosterUrl(slug);
  if (omdb) {
    const o = await tryUrls([omdb], dest);
    if (o) return { ok: true, source: "omdb" };
  }

  const direct = await tryUrls(catalogTmdbUrls(slug), dest);
  if (direct) return { ok: true, source: "tmdb-direct" };

  return { ok: false, source: null };
}

async function downloadCharacter(slug, { force = false } = {}) {
  const dest = path.join(charsDir, `${slug}.jpg`);
  if (!force && isCached(dest)) return { ok: true, source: "cached" };

  const curated = curatedChars[slug] || [];
  const hit = await tryUrls(curated, dest);
  if (hit) return { ok: true, source: sourceLabel(hit) };

  const wikiUrl = await wikipediaImage(wikiChars[slug]);
  if (wikiUrl) {
    const w = await tryUrls([wikiUrl], dest);
    if (w) return { ok: true, source: "wikipedia" };
  }

  // Avoid movie-poster copies for characters — prefer failing over wrong icon
  const allowPosterFallback = process.env.ALLOW_MOVIE_FALLBACK === "1";
  if (allowPosterFallback) {
    const direct = await tryUrls(catalogTmdbUrls(slug), dest);
    if (direct) return { ok: true, source: "tmdb-direct" };

    const fallbackMovie = charMovieFallback[slug] || charFromMovie[slug];
    if (fallbackMovie && copyMoviePoster(fallbackMovie, dest)) {
      return { ok: true, source: "movie-fallback" };
    }
  }

  return { ok: false, source: null };
}

// ── run ──────────────────────────────────────────────────────────────────────
const sourceCounts = {};
let movieOk = 0;
let movieFail = 0;
let charOk = 0;
let charFail = 0;
const failedMovies = [];
const failedChars = [];

console.log(`Downloading ${movieSlugs.length} posters + ${charSlugs.length} characters…`);
console.log(`Curated movies: ${Object.keys(curatedMovies).length} | API keys: TMDB=${TMDB_KEY ? "yes" : "no"} OMDB=${OMDB_KEY ? "yes" : "no"} Fanart=${FANART_KEY ? "yes" : "no"}\n`);

for (const slug of movieSlugs) {
  const result = await downloadMovie(slug);
  if (result.ok) {
    movieOk++;
    sourceCounts[result.source] = (sourceCounts[result.source] || 0) + 1;
    console.log(`✓ movie ${slug} [${result.source}]`);
  } else {
    movieFail++;
    failedMovies.push(slug);
    console.error(`✗ movie ${slug} FAILED`);
  }
}

for (const slug of charSlugs) {
  const result = await downloadCharacter(slug);
  if (result.ok) {
    charOk++;
    sourceCounts[result.source] = (sourceCounts[result.source] || 0) + 1;
    console.log(`✓ char  ${slug} [${result.source}]`);
  } else {
    charFail++;
    failedChars.push(slug);
    console.error(`✗ char  ${slug} FAILED`);
  }
}

console.log("\n── Summary ──");
console.log(`Movies:     ${movieOk} ok, ${movieFail} failed (${movieSlugs.length} total)`);
console.log(`Characters: ${charOk} ok, ${charFail} failed (${charSlugs.length} total)`);
console.log("Sources:", JSON.stringify(sourceCounts, null, 2));
if (failedMovies.length) console.log("Failed movies:", failedMovies.join(", "));
if (failedChars.length) console.log("Failed characters:", failedChars.join(", "));
