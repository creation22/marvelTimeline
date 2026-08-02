const STORAGE_KEY = "marvelworld.watched.v1";

export type WatchedMap = Record<string, true>;

function canUseStorage() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export function loadWatched(): WatchedMap {
  if (!canUseStorage()) return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    const out: WatchedMap = {};
    for (const [slug, value] of Object.entries(parsed as Record<string, unknown>)) {
      if (value === true || value === 1 || value === "true") out[slug] = true;
    }
    return out;
  } catch {
    return {};
  }
}

export function saveWatched(map: WatchedMap) {
  if (!canUseStorage()) return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch {
    // Quota / private mode — fail silently; in-memory state still works for the session
  }
}

export function toggleWatchedSlug(map: WatchedMap, slug: string): WatchedMap {
  const next = { ...map };
  if (next[slug]) delete next[slug];
  else next[slug] = true;
  return next;
}

export function countWatched(map: WatchedMap) {
  return Object.keys(map).length;
}
