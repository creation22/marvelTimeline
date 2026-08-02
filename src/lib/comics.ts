export interface ComicReadLink {
  platform: string;
  url: string;
  primary?: boolean;
}

export const MARVEL_UNLIMITED_URL = "https://www.marvel.com/unlimited";

/** Marvel.com site search (SPA — opens search results in browser) */
export function marvelComSearchUrl(query: string): string {
  return `https://www.marvel.com/search?search=${encodeURIComponent(query)}`;
}

export function amazonComicsSearchUrl(query: string): string {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query + " Marvel comic")}`;
}

export function getComicReadLinks(comic: {
  searchQuery: string;
  marvelUrl?: string;
}): ComicReadLink[] {
  const marvelSeriesUrl = comic.marvelUrl ?? marvelComSearchUrl(comic.searchQuery);

  return [
    {
      platform: "Marvel.com",
      url: marvelSeriesUrl,
      primary: true,
    },
    {
      platform: "Marvel Unlimited",
      url: MARVEL_UNLIMITED_URL,
    },
    {
      platform: "Amazon",
      url: amazonComicsSearchUrl(comic.searchQuery),
    },
  ];
}
