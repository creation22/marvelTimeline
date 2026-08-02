/**
 * Force-download solo character portraits from MCU Fandom / Wikipedia (not movie posters).
 * Writes real JPEGs via sharp. Run: node scripts/fix-character-portraits.mjs
 * Optional: --only=slug1,slug2
 */
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const charsDir = path.join(root, "public/images/characters");
fs.mkdirSync(charsDir, { recursive: true });

const UA = "marvelworld/1.0 (educational MCU showcase; local image cache)";

/** slug → MCU Fandom page title(s) to try */
const FANDOM_TITLES = {
  "pepper-potts": ["Pepper Potts"],
  "happy-hogan": ["Happy Hogan"],
  "war-machine": ["War Machine", "James Rhodes"],
  okoye: ["Okoye"],
  tchalla: ["T'Challa"],
  killmonger: ["Erik Killmonger"],
  ultron: ["Ultron"],
  thanos: ["Thanos"],
  hela: ["Hela"],
  valkyrie: ["Valkyrie"],
  odin: ["Odin"],
  "jennifer-walters": ["She-Hulk", "Jennifer Walters"],
  namor: ["Namor"],
  kang: ["Kang the Conqueror"],
  wenwu: ["Xu Wenwu"],
  katy: ["Katy Chen"],
  "hank-pym": ["Hank Pym"],
  ghost: ["Ghost"],
  mordo: ["Karl Mordo"],
  "america-chavez": ["America Chavez"],
  "riri-williams": ["Ironheart", "Riri Williams"],
  "monica-rambeau": ["Monica Rambeau"],
  "red-hulk": ["Red Hulk"],
  "thunderbolt-ross": ["Thaddeus Ross"],
  talos: ["Talos"],
  gravik: ["Gravik"],
  khonshu: ["Khonshu"],
  "arthur-harrow": ["Arthur Harrow"],
  "dar-benn": ["Dar-Benn"],
  "cassandra-nova": ["Cassandra Nova"],
  "jack-slash": ["Jack Russell", "Werewolf by Night"],
  "elsa-bloodstone": ["Elsa Bloodstone"],
  "rio-vidal": ["Rio Vidal", "Green Witch"],
  teen: ["Wiccan", "Billy Maximoff"],
  bruno: ["Bruno Carrelli"],
  "red-dagger": ["Red Dagger"],
  "party-thor": ["Party Thor", "Thor"],
  "zombie-strange": ["Doctor Strange", "Zombie Strange"],
  vulture: ["Vulture"],
  deadpool: ["Deadpool"],
  wolverine: ["Wolverine"],
  "ned-leeds": ["Ned Leeds"],
  "sharon-carter": ["Sharon Carter"],
  zemo: ["Helmut Zemo"],
  "red-skull": ["Red Skull"],
  "jane-foster": ["Jane Foster"],
  "peggy-carter": ["Peggy Carter"],
  "cassie-lang": ["Cassie Lang"],
  "he-who-remains": ["He Who Remains"],
  "high-evolutionary": ["High Evolutionary"],
  ego: ["Ego"],
  abomination: ["Abomination"],
  ronan: ["Ronan the Accuser"],
  malekith: ["Malekith"],
  sersi: ["Sersi"],
  ikaris: ["Ikaris"],
  thena: ["Thena"],
  druig: ["Druig"],
  "yelena-belova": ["Yelena Belova"],
  "red-guardian": ["Red Guardian"],
  "kate-bishop": ["Kate Bishop"],
  kingpin: ["Wilson Fisk"],
  echo: ["Maya Lopez"],
  "agatha-harkness": ["Agatha Harkness"],
  gorr: ["Gorr"],
  mysterio: ["Mysterio"],
  "scott-lang": ["Scott Lang"],
  "hope-van-dyne": ["Hope van Dyne"],
  "carol-danvers": ["Captain Marvel", "Carol Danvers"],
  "nick-fury": ["Nick Fury"],
  "sam-wilson": ["Sam Wilson"],
  "bucky-barnes": ["Bucky Barnes"],
  loki: ["Loki"],
  "peter-quill": ["Star-Lord"],
  gamora: ["Gamora"],
  drax: ["Drax the Destroyer"],
  rocket: ["Rocket"],
  groot: ["Groot"],
  nebula: ["Nebula"],
  mantis: ["Mantis"],
  "tony-stark": ["Iron Man", "Tony Stark"],
  "steve-rogers": ["Steve Rogers", "Captain America"],
  thor: ["Thor"],
  "bruce-banner": ["Hulk", "Bruce Banner"],
  "natasha-romanoff": ["Black Widow", "Natasha Romanoff"],
  "clint-barton": ["Hawkeye", "Clint Barton"],
  "peter-parker": ["Spider-Man", "Peter Parker"],
  "stephen-strange": ["Doctor Strange", "Stephen Strange"],
  wong: ["Wong"],
  "wanda-maximoff": ["Scarlet Witch", "Wanda Maximoff"],
  vision: ["Vision"],
  shuri: ["Shuri"],
  "shang-chi": ["Shang-Chi"],
  "moon-knight": ["Moon Knight", "Marc Spector"],
  "kamala-khan": ["Ms. Marvel", "Kamala Khan"],
  mobius: ["Mobius M. Mobius"],
  sylvie: ["Sylvie"],
  "john-walker": ["John Walker", "U.S. Agent"],
  "matt-murdock": ["Daredevil", "Matt Murdock"],
  "reed-richards": ["Mister Fantastic", "Reed Richards"],
  "sue-storm": ["Invisible Woman", "Sue Storm"],
  "johnny-storm": ["Human Torch", "Johnny Storm"],
  "ben-grimm": ["Thing", "Ben Grimm"],
  "doctor-doom": ["Doctor Doom", "Victor von Doom"],
  sentry: ["Sentry", "Robert Reynolds"],
};

/** Prefer these direct solo portrait URLs before Fandom (MCU / Wikimedia). */
const EXTRA_URLS = {
  "pepper-potts": [
    "https://upload.wikimedia.org/wikipedia/en/9/92/Gwyneth_Paltrow_as_Pepper_Potts.jpg",
  ],
  tchalla: [
    "https://upload.wikimedia.org/wikipedia/en/1/1a/Chadwick_Boseman_as_T%27Challa.jpg",
  ],
  thanos: [
    "https://upload.wikimedia.org/wikipedia/en/7/7b/Josh_Brolin_as_Thanos.jpeg",
  ],
  "steve-rogers": [
    "https://upload.wikimedia.org/wikipedia/en/9/9b/Chris_Evans_as_Steve_Rogers_Captain_America.jpg",
  ],
  "nick-fury": [
    "https://upload.wikimedia.org/wikipedia/en/5/5c/Samuel_L._Jackson_as_Nick_Fury.jpg",
  ],
  "natasha-romanoff": [
    "https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackwidow_lob_crd_05.jpg",
  ],
  "bruce-banner": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Mark_Ruffalo_%2848470894776%29_%28cropped%29.jpg/800px-Mark_Ruffalo_%2848470894776%29_%28cropped%29.jpg",
  ],
  "thunderbolt-ross": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Harrison_Ford_by_Gage_Skidmore_2.jpg/800px-Harrison_Ford_by_Gage_Skidmore_2.jpg",
  ],
  sersi: [
    "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/8/8c/Sersi_infobox.jpg",
  ],
  ikaris: [
    "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/9/9a/Ikaris_infobox.jpg",
  ],
  thena: [
    "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/4/4e/Thena_infobox.jpg",
  ],
  druig: [
    "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/2c/Druig_infobox.jpg",
  ],
  gorr: [
    "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/0/0e/Gorr_infobox.jpg",
  ],
  "high-evolutionary": [
    "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/5/5a/High_Evolutionary_infobox.jpg",
  ],
  "clint-barton": [
    "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/8/8a/Hawkeye_infobox.jpg",
  ],
};

/** Always re-fetch these (known wrong / comic / collage / duplicate Red Hulk). */
const FORCE_REFRESH = new Set([
  "sersi",
  "ikaris",
  "thena",
  "druig",
  "gorr",
  "high-evolutionary",
  "bruce-banner",
  "thunderbolt-ross",
  "clint-barton",
  "tony-stark",
  "peter-parker",
  "stephen-strange",
  "wanda-maximoff",
  "vision",
  "wong",
  "mordo",
  "okoye",
  "killmonger",
  "pepper-potts",
  "war-machine",
  "happy-hogan",
  "vulture",
  "ned-leeds",
  "yelena-belova",
  "natasha-romanoff",
  "red-guardian",
  "kate-bishop",
  "kingpin",
  "red-skull",
  "peggy-carter",
  "jane-foster",
  "valkyrie",
  "odin",
  "abomination",
  "ronan",
  "mantis",
  "ego",
  "hope-van-dyne",
  "kang",
  "cassie-lang",
  "mobius",
  "sylvie",
  "he-who-remains",
  "sam-wilson",
  "zemo",
  "sharon-carter",
  "shuri",
  "namor",
  "riri-williams",
  "gamora",
  "rocket",
  "groot",
  "nebula",
  "peter-quill",
  "drax",
  "deadpool",
  "wolverine",
  "cassandra-nova",
  "agatha-harkness",
  "rio-vidal",
  "teen",
  "monica-rambeau",
  "dar-benn",
  "red-hulk",
  "party-thor",
  "zombie-strange",
  "elsa-bloodstone",
  "jack-slash",
  "kamala-khan",
  "bruno",
  "red-dagger",
  "moon-knight",
  "khonshu",
  "arthur-harrow",
  "nick-fury",
  "talos",
  "gravik",
  "shang-chi",
  "wenwu",
  "katy",
  "scott-lang",
  "hank-pym",
  "john-walker",
  "matt-murdock",
  "reed-richards",
  "sue-storm",
  "johnny-storm",
  "ben-grimm",
  "doctor-doom",
  "sentry",
]);

function md5(file) {
  return crypto.createHash("md5").update(fs.readFileSync(file)).digest("hex");
}

function findPosterCopySlugs() {
  const moviesDir = path.join(root, "public/images/movies");
  const movieHashes = new Map();
  if (!fs.existsSync(moviesDir)) return [];
  for (const f of fs.readdirSync(moviesDir).filter((x) => x.endsWith(".jpg"))) {
    movieHashes.set(md5(path.join(moviesDir, f)), f.replace(".jpg", ""));
  }
  const copies = [];
  for (const f of fs.readdirSync(charsDir).filter((x) => x.endsWith(".jpg"))) {
    const slug = f.replace(".jpg", "");
    if (movieHashes.has(md5(path.join(charsDir, f)))) copies.push(slug);
  }
  return copies;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function looksLikePosterOrLogo(url) {
  const u = url.toLowerCase();
  return (
    u.includes("poster") ||
    u.includes("_logo") ||
    u.includes("logo.") ||
    u.includes("theatrical") ||
    u.includes("billing")
  );
}

async function fetchBuffer(url) {
  if (looksLikePosterOrLogo(url)) throw new Error("poster-like url");
  const res = await fetch(url, {
    headers: { "User-Agent": UA, Accept: "image/*,*/*" },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const ct = res.headers.get("content-type") || "";
  if (ct.includes("text/html")) throw new Error("HTML");
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 2000) throw new Error("too small");
  return buf;
}

async function toJpeg(buf) {
  return sharp(buf)
    .rotate()
    .resize({ width: 1200, height: 1600, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 88, mozjpeg: true })
    .toBuffer();
}

async function fandomImage(title) {
  const api =
    "https://marvelcinematicuniverse.fandom.com/api.php?action=query&titles=" +
    encodeURIComponent(title) +
    "&prop=pageimages&format=json&pithumbsize=1000&piprop=thumbnail|name|original&origin=*";
  const res = await fetch(api, { headers: { "User-Agent": UA } });
  if (!res.ok) return null;
  const data = await res.json();
  const page = Object.values(data.query?.pages || {})[0];
  if (!page || page.missing != null) return null;
  let url = page.original?.source || page.thumbnail?.source || null;
  if (!url) return null;
  url = url.replace(/\/scale-to-width-down\/\d+/g, "");
  if (looksLikePosterOrLogo(url)) return null;
  return url;
}

async function wikipediaImage(title) {
  if (!title) return null;
  const api =
    "https://en.wikipedia.org/w/api.php?action=query&titles=" +
    encodeURIComponent(title) +
    "&prop=pageimages&format=json&pithumbsize=1000&piprop=thumbnail|original&origin=*";
  const res = await fetch(api, { headers: { "User-Agent": UA } });
  if (!res.ok) return null;
  const data = await res.json();
  const page = Object.values(data.query?.pages || {})[0];
  if (!page || page.missing != null) return null;
  let url = page.original?.source || page.thumbnail?.source || null;
  if (!url || looksLikePosterOrLogo(url)) return null;
  return url;
}

async function resolveUrls(slug) {
  const urls = [...(EXTRA_URLS[slug] || [])];
  for (const title of FANDOM_TITLES[slug] || []) {
    try {
      const img = await fandomImage(title);
      if (img) urls.push(img);
      await sleep(120);
    } catch {
      // continue
    }
  }
  // Wikipedia MCU article as extra attempt
  for (const title of [
    ...(FANDOM_TITLES[slug] || []).map((t) => `${t} (Marvel Cinematic Universe)`),
    ...(FANDOM_TITLES[slug] || []),
  ]) {
    try {
      const img = await wikipediaImage(title);
      if (img) urls.push(img);
      await sleep(120);
    } catch {
      // continue
    }
  }
  return [...new Set(urls)];
}

async function downloadSlug(slug) {
  const dest = path.join(charsDir, `${slug}.jpg`);
  const urls = await resolveUrls(slug);
  for (const url of urls) {
    try {
      const raw = await fetchBuffer(url);
      const jpeg = await toJpeg(raw);
      if (jpeg.length < 3000) throw new Error("jpeg too small");
      fs.writeFileSync(dest, jpeg);
      return { ok: true, url };
    } catch {
      // next
    }
  }
  return { ok: false };
}

const onlyArg = process.argv.find((a) => a.startsWith("--only="));
const forceAll = process.argv.includes("--all");
const only = onlyArg ? onlyArg.replace("--only=", "").split(",") : null;

const catalog = fs.readFileSync(path.join(root, "src/data/catalog.ts"), "utf8");
const charSection = catalog.split("export const CHARACTER_CATALOG")[1] ?? "";
const allSlugs = [...charSection.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]);

const posterCopies = findPosterCopySlugs();
if (posterCopies.length) {
  console.log(`Detected ${posterCopies.length} poster copy hash(es): ${posterCopies.join(", ")}\n`);
}

const targets =
  only ||
  (forceAll
    ? allSlugs.filter((s) => FANDOM_TITLES[s] || EXTRA_URLS[s])
    : [...new Set([
        ...allSlugs.filter(
          (s) =>
            FORCE_REFRESH.has(s) ||
            FANDOM_TITLES[s] ||
            EXTRA_URLS[s]
        ),
        ...posterCopies,
      ])]);

console.log(`Fixing ${targets.length} character portraits via MCU Fandom/Wikipedia…\n`);

let ok = 0;
let fail = 0;
const failed = [];
const fixed = [];

for (const slug of targets) {
  const result = await downloadSlug(slug);
  if (result.ok) {
    ok++;
    fixed.push(slug);
    console.log(`✓ ${slug}`);
  } else {
    fail++;
    failed.push(slug);
    console.error(`✗ ${slug}`);
  }
}

console.log(`\nDone: ${ok} ok, ${fail} failed`);
if (failed.length) console.log("Failed:", failed.join(", "));
console.log("Fixed:", fixed.join(", "));
