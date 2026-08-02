import { TIMELINE_CATALOG } from "@/data/catalog";

export interface WatchLink {
  platform: string;
  url: string;
  primary?: boolean;
}

/**
 * One Disney+ search URL works in both regions:
 * - US / most countries → stays on disneyplus.com search for that title
 * - India → Disney+ redirects to JioHotstar and keeps ?q= so the title is searched
 *
 * Old /movies/.../ID deep links break in India (redirect to Hotstar home with no title).
 */
function disneyPlusSearchUrl(title: string): string {
  return `https://www.disneyplus.com/browse/search?q=${encodeURIComponent(title)}`;
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
  ];
}

export function getPrimaryWatchLink(slug: string): WatchLink | null {
  const links = getWatchLinks(slug);
  return links.find((l) => l.primary) ?? links[0] ?? null;
}
