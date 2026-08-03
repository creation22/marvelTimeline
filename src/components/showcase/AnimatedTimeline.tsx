"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import type { CatalogItem } from "@/data/catalog";
import { getCharacterBySlug } from "@/data/catalog";
import { characterHeroOrFallback, moviePosterOrFallback } from "@/lib/images";
import { getWatchLinks } from "@/lib/watch";
import {
  countWatched,
  loadWatched,
  saveWatched,
  toggleWatchedSlug,
  type WatchedMap,
} from "@/lib/watch-progress";
import { SafeNeoImage } from "./SafeNeoImage";
import { PremiumNav } from "./PremiumNav";
import { SiteFooter } from "./SiteFooter";
import { CharacterPathRail, collectPathCharacters } from "./CharacterPathRail";

const TimelineAtmosphere = dynamic(
  () =>
    import("./TimelineAtmosphere").then((m) => ({ default: m.TimelineAtmosphere })),
  { ssr: false }
);

const MEDIA_LABEL: Record<string, string> = {
  MOVIE: "Film",
  SERIES: "Series",
  SPECIAL: "Special",
};

const PHASE_ACCENT: Record<number, string> = {
  1: "#2b6cff",
  2: "#00c2a8",
  3: "#ffd400",
  4: "#e11d2e",
  5: "#c8ff00",
  6: "#1a1a1a",
};

function Marquee({ text }: { text: string }) {
  const line = `${text}  ///  `.repeat(8);
  return (
    <div className="pt-marquee">
      <div className="pt-marquee-track">
        <span>{line}</span>
        <span>{line}</span>
      </div>
    </div>
  );
}

function PremiumWatch({ slug }: { slug: string }) {
  const links = getWatchLinks(slug);
  if (!links.length) return null;
  const primary = links.find((l) => l.primary) ?? links[0];

  return (
    <div className="mt-2 flex flex-wrap items-center gap-1 sm:mt-3 sm:gap-1.5">
      <a href={primary.url} target="_blank" rel="noopener noreferrer" className="pt-watch-primary">
        Watch · {primary.platform}
        <span aria-hidden>↗</span>
      </a>
    </div>
  );
}

function Hero({ count }: { count: number }) {
  return (
    <section className="relative overflow-hidden px-3 pb-8 pt-8 sm:px-4 sm:pb-10 sm:pt-10 md:px-6 md:pb-12 md:pt-12">
      <motion.div
        className="pointer-events-none absolute -left-16 top-8 h-48 w-48 rounded-full bg-[#2b6cff]/15 blur-3xl"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="pointer-events-none absolute right-10 top-4 h-36 w-36 rounded-full bg-[#c8ff00]/30 blur-3xl"
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="relative z-10 mx-auto max-w-6xl md:pr-0">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2.1rem,9vw,5.5rem)] font-bold leading-[0.92] tracking-[-0.04em]"
        >
          MARVEL{" "}
          <span className="text-[var(--pt-red)]">TIMELINE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.5 }}
          className="mt-5 max-w-xl text-[13px] leading-relaxed text-[var(--pt-muted)] md:mt-6 md:text-sm"
        >
          Chronological MCU watch order — {count} films, series, and specials. Tick what
          you&apos;ve seen; progress stays on this device.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22 }}
          className="mt-6 flex flex-wrap gap-2"
        >
          <a
            href="#captain-america-the-first-avenger"
            className="border-2 border-[var(--pt-ink)] bg-[var(--pt-lime)] px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-[var(--pt-ink)] shadow-[3px_3px_0_var(--pt-ink)] transition-transform hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_var(--pt-ink)] sm:text-[11px]"
          >
            Start watching →
          </a>
          <span className="border-2 border-[var(--pt-ink)] bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-wider shadow-[3px_3px_0_var(--pt-ink)] sm:text-[11px]">
            {count} titles
          </span>
        </motion.div>
      </div>
    </section>
  );
}

function CharacterStrip({ slugs }: { slugs: string[] }) {
  const max = 5;
  return (
    <div className="mt-2.5 hidden items-center gap-1.5 sm:mt-3 sm:flex sm:gap-2">
      {slugs.slice(0, max).map((slug) => {
        const char = getCharacterBySlug(slug);
        if (!char) return null;
        return (
          <motion.div
            key={slug}
            whileHover={{ y: -2 }}
            className="relative h-8 w-8 shrink-0 overflow-hidden border-2 border-[var(--pt-ink)] bg-[var(--pt-bg)] shadow-[2px_2px_0_var(--pt-ink)] sm:h-9 sm:w-9"
            title={char.name}
          >
            <img
              src={characterHeroOrFallback(slug)}
              alt=""
              className="h-full w-full object-cover object-[center_15%]"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        );
      })}
      {slugs.length > max && (
        <span className="flex h-8 min-w-8 items-center justify-center border-2 border-[var(--pt-ink)] bg-[var(--pt-ink)] px-1.5 text-[9px] font-bold text-white sm:h-9 sm:min-w-9 sm:text-[10px]">
          +{slugs.length - max}
        </span>
      )}
    </div>
  );
}

function WatchedTick({
  checked,
  onToggle,
  title,
}: {
  checked: boolean;
  onToggle: () => void;
  title: string;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={checked}
      aria-label={checked ? `Mark ${title} as not watched` : `Mark ${title} as watched`}
      title={checked ? "Watched — tap to undo" : "Mark as watched"}
      className="group/tick absolute left-0 top-5 z-20 flex h-7 w-7 shrink-0 items-center justify-center border-2 border-[var(--pt-ink)] transition-transform hover:scale-105 active:scale-95 sm:top-6 sm:h-8 sm:w-8 md:top-7"
      style={{
        background: checked ? "#c8ff00" : "#ffffff",
        boxShadow: checked ? "2px 2px 0 #1a1a1a" : "2px 2px 0 #1a1a1a55",
      }}
    >
      {checked ? (
        <svg viewBox="0 0 20 20" className="h-4 w-4 sm:h-[18px] sm:w-[18px]" aria-hidden>
          <path
            d="M4 10.5 L8 14.5 L16 5.5"
            fill="none"
            stroke="#1a1a1a"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <span className="block h-2 w-2 border border-[var(--pt-ink)]/30 bg-transparent group-hover/tick:bg-[var(--pt-lime)]/40" />
      )}
    </button>
  );
}

function TimelineEntry({
  item,
  index,
  total,
  watched,
}: {
  item: CatalogItem;
  index: number;
  total: number;
  watched: boolean;
}) {
  const accent = PHASE_ACCENT[item.phase] ?? "#e11d2e";

  return (
    <motion.article
      initial={{ opacity: 0.35, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "40px 0px" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="scroll-mt-20"
      id={item.slug}
    >
      <div
        className="pt-hard group grid grid-cols-[108px_minmax(0,1fr)] items-stretch overflow-hidden transition-shadow duration-200 hover:shadow-[6px_6px_0_var(--pt-ink)] sm:grid-cols-[132px_minmax(0,1fr)] md:grid-cols-[152px_minmax(0,1fr)] lg:grid-cols-[168px_minmax(0,1fr)]"
        style={watched ? { outline: "2px solid #c8ff00", outlineOffset: "-2px" } : undefined}
      >
        <div className="relative isolate min-h-[168px] w-full self-stretch overflow-hidden border-r-2 border-[var(--pt-ink)] bg-[#111]">
          <div
            className="absolute left-0 top-0 z-10 border-b-2 border-r-2 border-[var(--pt-ink)] px-1.5 py-0.5 text-[9px] font-bold text-white sm:px-2 sm:py-1 sm:text-[10px]"
            style={{ background: accent }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>
          <SafeNeoImage
            src={moviePosterOrFallback(item.slug, item.poster)}
            fallback={item.poster}
            alt={item.title}
            fill
            sizes="256px"
            className="object-cover object-[center_18%] sm:object-center"
            priority={index < 2}
          />
          {watched && (
            <div className="absolute bottom-0 right-0 z-10 border-l-2 border-t-2 border-[var(--pt-ink)] bg-[var(--pt-lime)] px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-[var(--pt-ink)]">
              Done
            </div>
          )}
        </div>

        <div className="flex min-w-0 flex-col justify-center p-2.5 sm:p-4 md:p-5">
          <div className="mb-1.5 flex flex-wrap items-center gap-1 sm:mb-2 sm:gap-1.5">
            <span
              className="border border-[var(--pt-ink)] px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white sm:px-2 sm:text-[9px]"
              style={{ background: accent }}
            >
              Phase {item.phase}
            </span>
            <span className="border border-[var(--pt-ink)] bg-[var(--pt-bg)] px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider sm:px-2 sm:text-[9px]">
              {MEDIA_LABEL[item.mediaType]}
            </span>
            <span className="border border-[var(--pt-ink)] bg-white px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wider text-[var(--pt-muted)] sm:px-2 sm:text-[9px]">
              {item.timelineDate}
            </span>
            {watched && (
              <span className="border border-[var(--pt-ink)] bg-[var(--pt-lime)] px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-[var(--pt-ink)] sm:px-2 sm:text-[9px]">
                Watched
              </span>
            )}
            <span className="ml-auto text-[9px] font-semibold text-[var(--pt-faint)] sm:text-[10px]">
              {index + 1}/{total}
            </span>
          </div>

          <h2 className="font-display text-[15px] font-bold leading-snug tracking-tight sm:text-xl md:text-2xl">
            {item.title}
          </h2>

          <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-[var(--pt-muted)] sm:mt-2 sm:text-[12px] md:text-[13px]">
            {item.overview}
          </p>

          <div className="mt-1.5 flex flex-wrap gap-2 text-[10px] text-[var(--pt-faint)] sm:mt-2 sm:gap-3 sm:text-[11px]">
            <span className="font-semibold text-[var(--pt-ink)]">
              {item.mediaType === "SERIES" ? `${item.runtime}m` : `${item.runtime} min`}
            </span>
            <span style={{ color: accent }} className="font-bold">
              ★ {item.rating.toFixed(1)}
            </span>
            <span className="uppercase tracking-wider">{item.saga}</span>
          </div>

          <CharacterStrip slugs={item.featuredCharacters} />
          <PremiumWatch slug={item.slug} />
        </div>
      </div>
    </motion.article>
  );
}

function ProgressHud({
  progress,
  count,
  watchedCount,
}: {
  progress: MotionValue<number>;
  count: number;
  watchedCount: number;
}) {
  const pct = useTransform(progress, (v) => `${Math.round(v * 100)}%`);
  const indexLabel = useTransform(progress, (v) => {
    const i = Math.min(count, Math.max(1, Math.ceil(v * count)));
    return `${String(i).padStart(2, "0")} / ${String(count).padStart(2, "0")}`;
  });

  return (
    <div className="fixed bottom-3 left-3 z-40 flex items-center gap-2 sm:bottom-4 sm:left-4 md:left-6">
      <div className="border-2 border-[var(--pt-ink)] bg-white px-2.5 py-1.5 shadow-[3px_3px_0_var(--pt-ink)] sm:px-3">
        <motion.span className="text-[10px] font-bold tracking-wide sm:text-[11px]">{indexLabel}</motion.span>
      </div>
      <div className="h-2 w-16 overflow-hidden border-2 border-[var(--pt-ink)] bg-white sm:w-24">
        <motion.div className="h-full bg-[var(--pt-red)]" style={{ width: pct }} />
      </div>
      <div className="border-2 border-[var(--pt-ink)] bg-[var(--pt-lime)] px-2.5 py-1.5 shadow-[3px_3px_0_var(--pt-ink)] sm:px-3">
        <span className="text-[10px] font-bold tracking-wide sm:text-[11px]">
          ✓ {watchedCount}/{count}
        </span>
      </div>
    </div>
  );
}

export function AnimatedTimelineShowcase({ items }: { items: CatalogItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 32, mass: 0.2 });

  const [watched, setWatched] = useState<WatchedMap>({});

  useEffect(() => {
    setWatched(loadWatched());
  }, []);

  const onToggleWatched = useCallback((slug: string) => {
    setWatched((prev) => {
      const next = toggleWatchedSlug(prev, slug);
      saveWatched(next);
      return next;
    });
  }, []);

  const watchedCount = countWatched(watched);
  const pathChars = useMemo(() => collectPathCharacters(items), [items]);
  const movies = useMemo(() => items.filter((i) => i.mediaType === "MOVIE").length, [items]);
  const series = useMemo(() => items.filter((i) => i.mediaType === "SERIES").length, [items]);
  const specials = items.length - movies - series;

  return (
    <div ref={containerRef} className="premium-timeline relative">
      <TimelineAtmosphere />
      <div className="relative z-10">
      <Marquee text={`MCU Timeline /// ${items.length} titles /// Tick what you've watched /// Saved on this device`} />
      <PremiumNav />
      <CharacterPathRail characterSlugs={pathChars} progress={smooth} />
      <ProgressHud progress={smooth} count={items.length} watchedCount={watchedCount} />

      <Hero count={items.length} />

      <div className="mx-auto max-w-6xl px-3 pb-28 sm:px-4 sm:pb-28 sm:pr-20 md:px-6 md:pb-32 md:pr-28 lg:pr-32">
        <div className="mb-6 grid grid-cols-4 gap-2 sm:mb-8 sm:gap-3">
          <Stat value={movies} label="Films" accent="#c8ff00" />
          <Stat value={series} label="Series" accent="#2b6cff" />
          <Stat value={specials} label="Specials" accent="#ffd400" />
          <Stat value={watchedCount} label="Watched" accent="#e11d2e" />
        </div>

        <div className="relative space-y-3 sm:space-y-4 md:space-y-5">
          <div
            className="pointer-events-none absolute bottom-0 left-[14px] top-0 w-[2px] bg-[var(--pt-ink)]/15 sm:left-[18px] md:left-[22px]"
            aria-hidden
          />
          {items.map((item, i) => {
            const isWatched = Boolean(watched[item.slug]);
            return (
              <div key={item.slug} className="relative pl-9 sm:pl-11 md:pl-12">
                <WatchedTick
                  checked={isWatched}
                  onToggle={() => onToggleWatched(item.slug)}
                  title={item.title}
                />
                <TimelineEntry
                  item={item}
                  index={i}
                  total={items.length}
                  watched={isWatched}
                />
              </div>
            );
          })}
        </div>

        <motion.footer
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-hard mt-12 p-6 text-center md:p-8"
        >
          <p className="font-display text-2xl font-bold tracking-tight md:text-3xl">
            End of the known <span className="bg-[var(--pt-lime)] px-1">saga</span>
          </p>
          <p className="mx-auto mt-2 max-w-md text-[12px] text-[var(--pt-muted)]">
            Full chronological path complete. Browse the roster next.
          </p>
          <Link href="/characters" className="pt-watch-primary mt-5 inline-flex">
            Meet the characters →
          </Link>
        </motion.footer>
      </div>
      </div>
      <SiteFooter />
    </div>
  );
}

function Stat({ value, label, accent }: { value: number; label: string; accent: string }) {
  return (
    <div className="pt-stat px-2 py-2.5 sm:px-3 sm:py-3">
      <p className="font-display text-xl font-bold leading-none sm:text-2xl md:text-3xl" style={{ color: accent }}>
        {value}
      </p>
      <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.14em] text-white/70 sm:text-[9px] sm:tracking-[0.18em]">
        {label}
      </p>
    </div>
  );
}
