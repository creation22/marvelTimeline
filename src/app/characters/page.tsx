import { CharacterShowcase } from "@/components/showcase/CharacterShowcase";
import {
  getAllCharacters,
  getCharacterAppearances,
  getCharacterStory,
} from "@/lib/data";

export default function CharactersPage() {
  const characters = getAllCharacters();
  const stories: Record<string, string> = {};
  const appearancesBySlug: Record<string, ReturnType<typeof getCharacterAppearances>> = {};

  for (const c of characters) {
    stories[c.slug] = getCharacterStory(c.slug);
    appearancesBySlug[c.slug] = getCharacterAppearances(c.slug);
  }

  return (
    <CharacterShowcase
      characters={characters}
      stories={stories}
      appearancesBySlug={appearancesBySlug}
    />
  );
}
