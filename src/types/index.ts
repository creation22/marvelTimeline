export type MediaType = "MOVIE" | "SERIES" | "SPECIAL";
export type CharacterStatus = "ALIVE" | "DECEASED" | "UNKNOWN" | "SNAPPED" | "BLIPPED";
export type AppearanceType = "APPEARING" | "INTRODUCED" | "RETURNING" | "FINAL" | "CAMEO";
export type StoneColor = "SPACE" | "MIND" | "REALITY" | "POWER" | "TIME" | "SOUL";

export interface Movie {
  id: string;
  slug: string;
  title: string;
  overview: string;
  posterUrl?: string;
  backdropUrl?: string;
  trailerUrl?: string;
  releaseDate: string;
  timelineDate: string;
  timelineYear: number;
  runtime: number;
  phase: number;
  saga: string;
  rating: number;
  watchOrder: number;
  chronologicalOrder: number;
  mediaType: MediaType;
  director?: string;
  postCreditScenes?: string[];
  importantObjects?: string[];
  characters?: MovieCharacterEntry[];
  events?: string[];
  locations?: string[];
  stones?: string[];
}

export interface MovieCharacterEntry {
  slug: string;
  name: string;
  type: AppearanceType;
}

export interface CharacterCatalogItem {
  slug: string;
  name: string;
  realName?: string;
  image: string;
  affiliation?: string;
  status: CharacterStatus;
  bio: string;
}

export interface Character {
  id: string;
  slug: string;
  name: string;
  realName?: string;
  biography: string;
  heroImageUrl?: string;
  aliases: string[];
  status: CharacterStatus;
  affiliation?: string;
  species?: string;
  gender?: string;
  abilities: string[];
  weapons: string[];
  firstAppearance?: string;
  lastAppearance?: string;
  currentStatus?: string;
  quotes: string[];
  movies?: string[];
  enemies?: string[];
  friends?: string[];
  family?: string[];
  storyOrder?: string[];
}

export interface Event {
  id: string;
  slug: string;
  name: string;
  description: string;
  timelineDate?: string;
  timelineYear?: number;
  consequences: string[];
  imageUrl?: string;
  movies: string[];
  characters: string[];
  relatedEvents?: string[];
}

export interface Location {
  id: string;
  slug: string;
  name: string;
  description: string;
  imageUrl?: string;
  gallery: string[];
  movies: string[];
  characters: string[];
  events: string[];
}

export interface Organization {
  id: string;
  slug: string;
  name: string;
  description: string;
  imageUrl?: string;
  history?: string;
  members: string[];
  enemies: string[];
  movies: string[];
}

export interface InfinityStone {
  id: string;
  slug: string;
  name: string;
  color: StoneColor;
  description: string;
  origin?: string;
  power?: string;
  currentStatus?: string;
  imageUrl?: string;
  owners: StoneOwner[];
  movies: string[];
}

export interface StoneOwner {
  ownerName: string;
  characterSlug?: string;
  fromDate?: string;
  toDate?: string;
}

export interface MultiverseEntry {
  id: string;
  slug: string;
  universe: string;
  designation: string;
  description: string;
  variants: string[];
  connections: string[];
  imageUrl?: string;
}

export interface SearchResult {
  type: "movie" | "character" | "event" | "location" | "organization" | "stone" | "multiverse";
  slug: string;
  title: string;
  subtitle?: string;
  imageUrl?: string;
}

export interface WatchGuide {
  id: string;
  name: string;
  description: string;
  movieSlugs: string[];
}

export interface StoryArc {
  id: string;
  name: string;
  description: string;
  movieSlugs: string[];
  imageUrl?: string;
}
