import { TIMELINE_CATALOG } from "@/data/catalog";

export interface WatchLink {
  platform: string;
  url: string;
  primary?: boolean;
}

/** Verified Disney+ deep links (fallback is title search) */
const DISNEY_PLUS_DIRECT: Partial<Record<string, string>> = {
  "iron-man": "https://www.disneyplus.com/movies/marvel-studios-iron-man/1SW2IYJ4GDxw",
  "the-avengers": "https://www.disneyplus.com/movies/marvel-studios-the-avengers/1UzfBjsDF18H",
  "avengers-infinity-war":
    "https://www.disneyplus.com/movies/marvel-studios-avengers-infinity-war/1WEuZ3H6yLGV",
  "avengers-endgame":
    "https://www.disneyplus.com/movies/marvel-studios-avengers-endgame/3hZbMYWN8gNR",
  wandavision: "https://www.disneyplus.com/series/wandavision/1V5bN9s7wZ3F",
  "loki-s1": "https://www.disneyplus.com/series/loki/6pJH0d4wUQig",
  "loki-s2": "https://www.disneyplus.com/series/loki/6pJH0d4wUQig",
  "falcon-winter-soldier":
    "https://www.disneyplus.com/series/the-falcon-and-the-winter-soldier/4Rg3e3G8xb7K",
  hawkeye: "https://www.disneyplus.com/series/hawkeye/4SrNo6A7N7eL",
  "moon-knight": "https://www.disneyplus.com/series/moon-knight/4S3oOF1knocS",
  "deadpool-wolverine":
    "https://www.disneyplus.com/movies/marvel-studios-deadpool-and-wolverine/3V08MFnMmfjR",
};

function disneyPlusUrl(slug: string, title: string): string {
  const direct = DISNEY_PLUS_DIRECT[slug];
  if (direct) return direct;
  return `https://www.disneyplus.com/browse/search?q=${encodeURIComponent(title)}`;
}

export function getWatchLinks(slug: string): WatchLink[] {
  const item = TIMELINE_CATALOG.find((i) => i.slug === slug);
  if (!item) return [];

  return [
    {
      platform: "Disney+",
      url: disneyPlusUrl(slug, item.title),
      primary: true,
    },
  ];
}

export function getPrimaryWatchLink(slug: string): WatchLink | null {
  const links = getWatchLinks(slug);
  return links.find((l) => l.primary) ?? links[0] ?? null;
}
