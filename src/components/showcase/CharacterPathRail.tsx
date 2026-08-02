"use client";

import { useMemo, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { getCharacterBySlug } from "@/data/catalog";
import { characterHeroOrFallback } from "@/lib/images";

const PATH_D =
  "M 40 16 C 16 70, 64 120, 40 170 C 16 220, 64 270, 40 320 C 16 370, 64 420, 40 470 C 16 520, 64 570, 40 620 C 16 670, 64 720, 40 770 C 24 800, 56 830, 40 860";

const PATH_LENGTH = 980;

type PathChar = {
  slug: string;
  name: string;
  image: string;
  accent: string;
  y: number;
  revealAt: number;
};

const ACCENTS = ["#e11d2e", "#2b6cff", "#c8ff00", "#ffd400", "#00c2a8", "#1a1a1a"];

export function CharacterPathRail({
  characterSlugs,
  progress,
}: {
  characterSlugs: string[];
  progress: MotionValue<number>;
}) {
  const [drawnBucket, setDrawnBucket] = useState(0);
  const [hovered, setHovered] = useState<string | null>(null);
  const lastBucket = useRef(0);

  const chars = useMemo<PathChar[]>(() => {
    const unique: PathChar[] = [];
    const seen = new Set<string>();
    const max = 16;
    for (const slug of characterSlugs) {
      if (seen.has(slug) || unique.length >= max) continue;
      const c = getCharacterBySlug(slug);
      if (!c) continue;
      seen.add(slug);
      const t = unique.length / Math.max(max - 1, 1);
      unique.push({
        slug,
        name: c.name,
        image: characterHeroOrFallback(slug),
        accent: ACCENTS[unique.length % ACCENTS.length],
        y: 28 + t * 800,
        revealAt: t,
      });
    }
    return unique;
  }, [characterSlugs]);

  const dashOffset = useTransform(progress, (v) => {
    const clamped = Math.max(0, Math.min(1, v));
    return PATH_LENGTH - clamped * PATH_LENGTH;
  });

  // Quantize progress updates so we don't re-render 60fps for avatars
  useMotionValueEvent(progress, "change", (v) => {
    const bucket = Math.round(Math.max(0, Math.min(1, v)) * 24);
    if (bucket === lastBucket.current) return;
    lastBucket.current = bucket;
    setDrawnBucket(bucket);
  });

  const drawn = drawnBucket / 24;

  return (
    <aside
      className="pointer-events-none fixed right-1 top-20 z-30 flex h-[calc(100vh-6.5rem)] w-[52px] sm:right-2 sm:top-24 sm:h-[calc(100vh-7rem)] sm:w-[72px] md:w-[88px] lg:right-4 lg:w-[100px]"
      aria-label="Character journey path"
    >
      <div className="relative h-full w-full">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 80 880"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="ptPathGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e11d2e" />
              <stop offset="25%" stopColor="#2b6cff" />
              <stop offset="50%" stopColor="#c8ff00" />
              <stop offset="75%" stopColor="#ffd400" />
              <stop offset="100%" stopColor="#00c2a8" />
            </linearGradient>
          </defs>
          <path d={PATH_D} fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" opacity="0.15" />
          <motion.path
            d={PATH_D}
            fill="none"
            stroke="url(#ptPathGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={PATH_LENGTH}
            style={{ strokeDashoffset: dashOffset }}
          />
        </svg>

        {chars.map((char) => {
          const visible = drawn >= char.revealAt - 0.02;
          const active = Math.abs(drawn - char.revealAt) < 0.08;
          return (
            <div
              key={char.slug}
              className="pointer-events-auto absolute left-1/2 -translate-x-1/2 transition-[opacity,transform] duration-200"
              style={{
                top: `${(char.y / 880) * 100}%`,
                opacity: visible ? 1 : 0.22,
                transform: `translateX(-50%) scale(${visible ? (active ? 1.06 : 1) : 0.78})`,
              }}
              onMouseEnter={() => setHovered(char.slug)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="h-7 w-7 overflow-hidden border-2 border-[var(--pt-ink)] bg-white sm:h-9 sm:w-9 lg:h-11 lg:w-11"
                style={{
                  boxShadow: visible
                    ? `3px 3px 0 ${char.accent}`
                    : "2px 2px 0 #1a1a1a33",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={char.image}
                  alt={char.name}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              {(hovered === char.slug || active) && (
                <p className="absolute right-full top-1/2 mr-1.5 hidden -translate-y-1/2 whitespace-nowrap border-2 border-[var(--pt-ink)] bg-[var(--pt-ink)] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white sm:mr-2 sm:block">
                  {char.name}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}

export function collectPathCharacters(
  items: { featuredCharacters: string[] }[]
): string[] {
  const out: string[] = [];
  const seen = new Set<string>();
  for (const item of items) {
    for (const slug of item.featuredCharacters) {
      if (seen.has(slug)) continue;
      seen.add(slug);
      out.push(slug);
    }
  }
  return out;
}
