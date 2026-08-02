import { TIMELINE_CATALOG, CHARACTER_CATALOG } from "@/data/catalog";
import { CHARACTER_STORIES } from "@/data/character-stories";
import { CHARACTER_APPEARANCES } from "@/data/character-appearances";
import { REDDIT_WATCH_ORDER_SLUGS } from "@/data/watch-order";
import type { CatalogItem } from "@/data/catalog";

export function getTimelineItems() {
  const bySlug = new Map(TIMELINE_CATALOG.map((i) => [i.slug, i]));
  const ordered = REDDIT_WATCH_ORDER_SLUGS
    .map((slug) => bySlug.get(slug))
    .filter((i): i is NonNullable<typeof i> => i != null);
  const rest = TIMELINE_CATALOG.filter(
    (i) => !REDDIT_WATCH_ORDER_SLUGS.includes(i.slug as typeof REDDIT_WATCH_ORDER_SLUGS[number])
  );
  return [...ordered, ...rest];
}

export function getAllCharacters() {
  return CHARACTER_CATALOG;
}

export function getCharacter(slug: string) {
  return CHARACTER_CATALOG.find((c) => c.slug === slug);
}

export function getCatalogItem(slug: string) {
  return TIMELINE_CATALOG.find((i) => i.slug === slug);
}

/** Full background story for a character detail panel */
export function getCharacterStory(slug: string): string {
  const fromStories = CHARACTER_STORIES[slug];
  if (fromStories) return fromStories;
  return getCharacter(slug)?.bio ?? "";
}

/** Titles a character appears in — explicit filmography + featuredCharacters, watch order */
export function getCharacterAppearances(slug: string): CatalogItem[] {
  const timeline = getTimelineItems();
  const bySlug = new Map(timeline.map((i) => [i.slug, i]));
  const seen = new Set<string>();
  const out: CatalogItem[] = [];

  const push = (movieSlug: string) => {
    if (seen.has(movieSlug)) return;
    const item = bySlug.get(movieSlug);
    if (!item) return;
    seen.add(movieSlug);
    out.push(item);
  };

  for (const movieSlug of CHARACTER_APPEARANCES[slug] ?? []) push(movieSlug);
  for (const item of timeline) {
    if (item.featuredCharacters.includes(slug)) push(item.slug);
  }

  return out;
}
