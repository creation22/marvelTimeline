/** Local-first image paths — run `npm run download-images` to populate public/images/ */

const TMDB = "https://image.tmdb.org/t/p/w500";

export function tmdbPosterUrl(fileId: string): string {
  return `${TMDB}/${fileId}`;
}

/** Local cached poster at /images/movies/{slug}.jpg */
export function moviePoster(slug: string): string {
  return `/images/movies/${slug}.jpg`;
}

/** Local cached portrait at /images/characters/{slug}.jpg */
export function characterHero(slug: string): string {
  return `/images/characters/${slug}.jpg`;
}

/** Prefer local cache; remote TMDB URL used as onError fallback in SafeNeoImage */
export function moviePosterOrFallback(slug: string, _remote?: string): string {
  return moviePoster(slug);
}

/**
 * Local solo portrait only. Do NOT fall back to catalog `character.image` —
 * those TMDB paths are often the parent movie's poster, not a character portrait.
 */
export function characterHeroOrFallback(slug: string, _remote?: string): string {
  return characterHero(slug);
}

/** Movie posters only — never use for character tiles/avatars */
export function remotePosterFallback(remote?: string): string | undefined {
  return remote;
}
