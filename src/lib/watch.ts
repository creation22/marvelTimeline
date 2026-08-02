import { TIMELINE_CATALOG } from "@/data/catalog";

export interface WatchLink {
  platform: string;
  url: string;
  primary?: boolean;
}

/**
 * Disney+ deep links like /movies/.../ID are unreliable:
 * - Disney has moved many titles to /browse/entity-… URLs
 * - In India, disneyplus.com redirects to JioHotstar and drops old deep-link paths
 *   (users land on Hotstar home instead of the title)
 *
 * Title search is the reliable option: India keeps ?q= on the Hotstar redirect,
 * and other regions open Disney+ search for that title.
 */
function disneyPlusSearchUrl(title: string): string {
  return `https://www.disneyplus.com/browse/search?q=${encodeURIComponent(title)}`;
}

/** India-friendly Hotstar search (same catalog as Disney+ Hotstar / JioHotstar). */
function hotstarSearchUrl(title: string): string {
  return `https://www.hotstar.com/in/explore?search_query=${encodeURIComponent(title)}`;
}

export function getWatchLinks(slug: string): WatchLink[] {
  const item = TIMELINE_CATALOG.find((i) => i.slug === slug);
  if (!item) return [];

  return [
    {
      platform: "Disney+",
      url: disneyPlusSearchUrl(item.title),
      primary: true,
    },
    {
      platform: "JioHotstar",
      url: hotstarSearchUrl(item.title),
    },
  ];
}

export function getPrimaryWatchLink(slug: string): WatchLink | null {
  const links = getWatchLinks(slug);
  return links.find((l) => l.primary) ?? links[0] ?? null;
}
