"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { CatalogItem } from "@/data/catalog";
import { getCharacterBySlug } from "@/data/catalog";
import { characterHeroOrFallback } from "@/lib/images";

const PATH_D = "M 8 24 L 8 320";

export function CharacterSpotlightRail({
  item,
  activeIndex,
  progress,
  onHero,
  totalCount,
}: {
  item: CatalogItem | null;
  activeIndex: number;
  progress: number;
  onHero: boolean;
  totalCount: number;
}) {
  const characters = item?.featuredCharacters ?? [];
  const pathLength = 320;
  const strokeOffset = pathLength - progress * pathLength;

  return (
    <aside
      className="fixed right-0 top-0 z-[35] h-screen w-[280px] md:w-[320px] pointer-events-none hidden lg:flex flex-col pt-28 pb-8 pr-4 md:pr-6"
      aria-label="Featured characters"
    >
      <div className="neo-border-thick bg-[var(--card)]/95 backdrop-blur-sm neo-shadow flex-1 flex flex-col overflow-hidden pointer-events-auto">
        <div className="bg-[var(--surface)] text-[var(--fire-bright)] px-4 py-3 border-b-4 border-[var(--border)]">
          <p className="font-display text-xs tracking-[0.35em]">SPOTLIGHT</p>
          <AnimatePresence mode="wait">
            <motion.p
              key={onHero ? "hero" : item?.slug}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              className="font-display text-lg tracking-wide text-[var(--text)] mt-1 line-clamp-2"
            >
              {onHero ? "THE SAGA BEGINS" : item?.title}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="relative flex-1 p-4 overflow-hidden">
          <svg
            className="absolute left-3 top-4 bottom-4 w-6 overflow-visible"
            viewBox="0 0 16 340"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="charPathGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffaa33" />
                <stop offset="50%" stopColor="#ff6b35" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
              <filter id="pathGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path d={PATH_D} fill="none" stroke="var(--border)" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
            <motion.path
              d={PATH_D}
              fill="none"
              stroke="url(#charPathGrad)"
              strokeWidth="3"
              strokeLinecap="round"
              filter="url(#pathGlow)"
              strokeDasharray={pathLength}
              style={{ strokeDashoffset: onHero ? pathLength : strokeOffset }}
            />
          </svg>

          <div className="pl-8 space-y-3 h-full overflow-y-auto hide-scrollbar">
            <AnimatePresence mode="wait">
              {onHero ? (
                <motion.div key="hero-chars" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-3">
                  {["steve-rogers", "tony-stark", "thor", "natasha-romanoff"].map((slug, i) => {
                    const c = getCharacterBySlug(slug);
                    if (!c) return null;
                    return (
                      <motion.div
                        key={slug}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="neo-border bg-[var(--surface)] p-2 flex gap-3 items-center"
                      >
                        <div className="w-12 h-12 neo-border overflow-hidden shrink-0">
                          <img src={characterHeroOrFallback(slug)} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-display text-sm tracking-wide">{c.name}</p>
                          <p className="text-xs text-theme-muted">Founding era</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              ) : (
                <motion.div key={item?.slug} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-3">
                  <p className="font-display text-xs tracking-[0.3em] text-[var(--fire)] mb-2">
                    #{String(activeIndex + 1).padStart(2, "0")} · FEATURED
                  </p>
                  {characters.map((slug, i) => {
                    const c = getCharacterBySlug(slug);
                    if (!c) return null;
                    return (
                      <motion.div
                        key={slug}
                        initial={{ opacity: 0, x: 24, rotate: 2 }}
                        animate={{ opacity: 1, x: 0, rotate: 0 }}
                        transition={{ delay: i * 0.08, type: "spring", stiffness: 320, damping: 26 }}
                        whileHover={{ x: 4, boxShadow: "4px 4px 0 var(--crimson)" }}
                        className="neo-border-thick bg-[var(--card-elevated)] p-2 flex gap-3 items-center group cursor-default"
                      >
                        <div className="relative w-14 h-14 neo-border overflow-hidden shrink-0">
                          <img
                            src={characterHeroOrFallback(slug)}
                            alt={c.name}
                            className="w-full h-full object-cover object-top transition-transform group-hover:scale-110"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="font-display text-base tracking-wide leading-tight truncate">{c.name}</p>
                          {c.realName && <p className="text-xs text-theme-muted truncate">{c.realName}</p>}
                          <span
                            className={`text-[10px] font-display tracking-widest mt-1 inline-block px-2 py-0.5 neo-border ${
                              c.status === "ALIVE"
                                ? "bg-[var(--fire)]/20 text-[var(--fire-bright)]"
                                : "bg-[var(--surface)] text-theme-muted"
                            }`}
                          >
                            {c.status}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="border-t-4 border-[var(--border)] px-4 py-2 bg-[var(--surface)]">
          <div className="h-1.5 neo-border bg-[var(--bg-void)] overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[var(--fire-bright)] via-[var(--crimson)] to-[var(--violet)]"
              style={{ width: onHero ? "0%" : `${((activeIndex + 1) / totalCount) * 100}%` }}
              layout
            />
          </div>
          <p className="font-display text-[10px] tracking-widest mt-2 text-theme-muted">SAGA PROGRESS</p>
        </div>
      </div>
    </aside>
  );
}
