"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { CharacterCatalogItem } from "@/types";
import type { CatalogItem } from "@/data/catalog";
import { PremiumNav } from "./PremiumNav";
import { SafeNeoImage } from "./SafeNeoImage";
import { characterHeroOrFallback, moviePosterOrFallback } from "@/lib/images";
import { getWatchLinks } from "@/lib/watch";
import { cn } from "@/lib/utils";

type Char = CharacterCatalogItem;
type AppearanceMap = Record<string, CatalogItem[]>;
type StoryMap = Record<string, string>;
type PowersMap = Record<string, string[]>;

const STATUS_COLOR: Record<string, string> = {
  ALIVE: "#c8ff00",
  DECEASED: "#e11d2e",
  UNKNOWN: "#ffd400",
  SNAPPED: "#2b6cff",
  BLIPPED: "#00c2a8",
};

function Marquee({ text }: { text: string }) {
  const line = `${text}  ///  `.repeat(6);
  return (
    <div className="pt-marquee">
      <div className="pt-marquee-track">
        <span>{line}</span>
        <span>{line}</span>
      </div>
    </div>
  );
}

function AppearanceCard({ item }: { item: CatalogItem }) {
  const watch = getWatchLinks(item.slug);
  const primary = watch.find((l) => l.primary) ?? watch[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-hard flex flex-col overflow-hidden transition-shadow hover:shadow-[6px_6px_0_var(--pt-ink)]"
    >
      <Link
        href={`/timeline#${item.slug}`}
        className="relative block aspect-[2/3] overflow-hidden border-b-2 border-[var(--pt-ink)]"
      >
        <SafeNeoImage
          src={moviePosterOrFallback(item.slug, item.poster)}
          fallback={item.poster}
          alt={item.title}
          width={240}
          height={360}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <span className="absolute left-1.5 top-1.5 border border-[var(--pt-ink)] bg-[var(--pt-lime)] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[var(--pt-ink)]">
          {item.mediaType === "MOVIE" ? "Film" : item.mediaType === "SERIES" ? "Series" : "Special"}
        </span>
      </Link>
      <div className="flex flex-1 flex-col gap-1.5 p-2.5">
        <Link href={`/timeline#${item.slug}`}>
          <h4 className="font-display text-sm font-bold leading-tight tracking-tight line-clamp-2 hover:text-[var(--pt-red)]">
            {item.title}
          </h4>
        </Link>
        <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--pt-faint)]">
          Phase {item.phase} · {item.timelineDate}
        </p>
        {primary && (
          <a
            href={primary.url}
            target="_blank"
            rel="noopener noreferrer"
            className="pt-watch-primary mt-auto justify-center text-center"
          >
            Watch ↗
          </a>
        )}
      </div>
    </motion.div>
  );
}

function CharacterDetail({
  character,
  story,
  powers,
  appearances,
}: {
  character: Char;
  story: string;
  powers: string[];
  appearances: CatalogItem[];
}) {
  const statusColor = STATUS_COLOR[character.status] ?? "#c8ff00";

  return (
    <motion.div
      key={character.slug}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-6"
    >
      <div className="grid grid-cols-[110px_minmax(0,1fr)] items-stretch gap-3 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-4 md:grid-cols-[minmax(0,240px)_minmax(0,1fr)] md:gap-5 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)]">
        <div className="pt-hard relative overflow-hidden">
          <SafeNeoImage
            src={characterHeroOrFallback(character.slug)}
            alt={character.name}
            width={560}
            height={750}
            className="aspect-[3/4] h-full w-full object-cover object-[center_12%]"
            priority
          />
          <span
            className="absolute bottom-0 left-0 border-t-2 border-r-2 border-[var(--pt-ink)] px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-[var(--pt-ink)] sm:px-3 sm:py-1 sm:text-[10px]"
            style={{ background: statusColor }}
          >
            {character.status}
          </span>
        </div>

        <div className="pt-hard flex min-w-0 flex-col p-3 sm:p-4 md:p-5">
          <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-[0.28em] text-[var(--pt-muted)] sm:mb-2 sm:text-[10px]">
            Selected hero
          </p>
          <h2 className="font-display text-xl font-bold leading-[0.95] tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
            {character.name}
          </h2>
          {character.realName && (
            <p className="mt-1 text-xs font-semibold text-[var(--pt-red)] sm:mt-1.5 sm:text-sm md:text-base">
              {character.realName}
            </p>
          )}

          <div className="mt-2 flex flex-wrap gap-1 sm:mt-3 sm:gap-1.5">
            {character.affiliation && (
              <span className="border-2 border-[var(--pt-ink)] bg-[var(--pt-blue)] px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white shadow-[2px_2px_0_var(--pt-ink)] sm:px-2.5 sm:py-1 sm:text-[10px]">
                {character.affiliation}
              </span>
            )}
            <span className="border-2 border-[var(--pt-ink)] bg-white px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider shadow-[2px_2px_0_var(--pt-ink)] sm:px-2.5 sm:py-1 sm:text-[10px]">
              {appearances.length} title{appearances.length === 1 ? "" : "s"}
            </span>
          </div>

          {powers.length > 0 && (
            <div className="mt-3 border-t-2 border-[var(--pt-ink)] pt-3 sm:mt-4 sm:pt-4">
              <h3 className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.25em] text-[var(--pt-muted)] sm:mb-2 sm:text-[10px]">
                Powers &amp; skills
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {powers.map((power) => (
                  <span
                    key={power}
                    className="border-2 border-[var(--pt-ink)] bg-[var(--pt-lime)] px-2 py-1 text-[10px] font-semibold leading-snug text-[var(--pt-ink)] shadow-[2px_2px_0_var(--pt-ink)] sm:text-[11px]"
                  >
                    {power}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-3 border-t-2 border-[var(--pt-ink)] pt-3 sm:mt-4 sm:pt-4">
            <h3 className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.25em] text-[var(--pt-muted)] sm:mb-2 sm:text-[10px]">
              Background story
            </h3>
            <p className="max-w-2xl text-[12px] leading-relaxed text-[var(--pt-muted)] sm:text-[13px] md:text-sm">
              {story}
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
          <div>
            <h3 className="font-display text-xl font-bold tracking-tight md:text-2xl">Appeared in</h3>
            <p className="mt-0.5 text-[11px] text-[var(--pt-faint)]">
              Jump to the timeline or open a watch link
            </p>
          </div>
          <Link href="/timeline" className="text-[11px] font-bold uppercase tracking-wider text-[var(--pt-red)]">
            Full timeline →
          </Link>
        </div>

        {appearances.length === 0 ? (
          <div className="pt-hard p-4 text-sm text-[var(--pt-muted)]">
            No appearances logged yet for this character.
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {appearances.map((item) => (
              <AppearanceCard key={item.slug} item={item} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function CharacterTile({
  character,
  index,
  selected,
  onSelect,
}: {
  character: Char;
  index: number;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.012, 0.45) }}
      whileHover={{ x: 2, y: 2, boxShadow: "2px 2px 0 var(--pt-ink)" }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "overflow-hidden border-2 border-[var(--pt-ink)] text-left transition-all",
        selected
          ? "bg-[var(--pt-lime)] shadow-[4px_4px_0_var(--pt-ink)]"
          : "bg-white shadow-[3px_3px_0_var(--pt-ink)]"
      )}
    >
      <div className="relative aspect-[3/4] overflow-hidden border-b-2 border-[var(--pt-ink)]">
        <SafeNeoImage
          src={characterHeroOrFallback(character.slug)}
          alt={character.name}
          width={280}
          height={370}
          className="h-full w-full object-cover object-[center_12%]"
        />
      </div>
      <div className="px-2 py-2">
        <p className="font-display text-xs font-bold leading-tight tracking-tight line-clamp-2 md:text-sm">
          {character.name}
        </p>
      </div>
    </motion.button>
  );
}

export function CharacterShowcase({
  characters,
  stories,
  powersBySlug,
  appearancesBySlug,
}: {
  characters: Char[];
  stories: StoryMap;
  powersBySlug: PowersMap;
  appearancesBySlug: AppearanceMap;
}) {
  const [selected, setSelected] = useState<Char>(characters[0]);
  const [filter, setFilter] = useState("");

  const filtered = useMemo(() => {
    const q = filter.trim().toLowerCase();
    if (!q) return characters;
    return characters.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.slug.includes(q) ||
        c.affiliation?.toLowerCase().includes(q) ||
        c.realName?.toLowerCase().includes(q)
    );
  }, [characters, filter]);

  const alive = characters.filter((c) => c.status === "ALIVE").length;
  const story = stories[selected.slug] ?? selected.bio;
  const powers = powersBySlug[selected.slug] ?? [];
  const appearances = appearancesBySlug[selected.slug] ?? [];

  return (
    <div className="premium-timeline relative">
      <Marquee
        text={`${characters.length} MCU characters /// Stories & powers in plain English /// Solo portraits`}
      />
      <PremiumNav />

      <div className="mx-auto max-w-6xl px-3 pb-24 pt-6 sm:px-4 sm:pt-8 md:px-6">
        <section className="relative mb-8 overflow-hidden">
          <motion.div
            className="pointer-events-none absolute -left-12 top-0 h-40 w-40 rounded-full bg-[#e11d2e]/10 blur-3xl"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="pointer-events-none absolute right-8 top-2 h-32 w-32 rounded-full bg-[#c8ff00]/25 blur-3xl"
            animate={{ opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pt-muted)]">
            Full MCU roster · {characters.length} heroes
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-[clamp(2.4rem,7vw,4.5rem)] font-bold leading-[0.92] tracking-[-0.04em]"
          >
            MCU{" "}
            <span className="relative inline-block">
              HEROES
              <span className="absolute -right-2 -top-1 h-3 w-3 rotate-12 bg-[var(--pt-lime)]" />
            </span>
          </motion.h1>
          <p className="mt-3 max-w-lg text-[13px] leading-relaxed text-[var(--pt-muted)] md:text-sm">
            Tap a character for a simple background story, their powers, and every film or series
            they appear in.
          </p>

          <div className="mt-5 grid grid-cols-4 gap-2 sm:gap-3">
            <Stat value={characters.length} label="Roster" accent="#c8ff00" />
            <Stat value={alive} label="Alive" accent="#2b6cff" />
            <Stat value={characters.length - alive} label="Fallen" accent="#e11d2e" />
            <Stat value={appearances.length} label="Selected titles" accent="#ffd400" />
          </div>
        </section>

        <input
          type="search"
          placeholder="Search characters..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mb-8 w-full max-w-md border-2 border-[var(--pt-ink)] bg-white px-4 py-2.5 text-sm shadow-[3px_3px_0_var(--pt-ink)] placeholder:text-[var(--pt-faint)] focus:outline-none focus:shadow-[4px_4px_0_var(--pt-lime)]"
        />

        <div id="character-detail" className="mb-10 scroll-mt-24">
          <AnimatePresence mode="wait">
            <CharacterDetail
              key={selected.slug}
              character={selected}
              story={story}
              powers={powers}
              appearances={appearances}
            />
          </AnimatePresence>
        </div>

        <div className="mb-3 flex items-end justify-between gap-3 border-b-2 border-[var(--pt-ink)] pb-3">
          <h3 className="font-display text-lg font-bold tracking-tight md:text-xl">Full roster</h3>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--pt-faint)]">
            {filtered.length} shown
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {filtered.map((char, i) => (
            <CharacterTile
              key={char.slug}
              character={char}
              index={i}
              selected={selected.slug === char.slug}
              onSelect={() => {
                setSelected(char);
                document.getElementById("character-detail")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Stat({ value, label, accent }: { value: number; label: string; accent: string }) {
  return (
    <div className="pt-stat px-2 py-2.5 sm:px-3 sm:py-3">
      <p className="font-display text-xl font-bold leading-none sm:text-2xl md:text-3xl" style={{ color: accent }}>
        {value}
      </p>
      <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-white/70 sm:text-[9px] sm:tracking-[0.18em]">
        {label}
      </p>
    </div>
  );
}
