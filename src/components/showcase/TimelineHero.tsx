"use client";

import { motion } from "framer-motion";

export function TimelineHero({ itemCount }: { itemCount: number }) {
  return (
    <section className="relative h-screen snap-start flex items-center justify-center px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-halftone opacity-[0.08] pointer-events-none" aria-hidden />
      <motion.div
        className="absolute -left-20 top-1/4 w-72 h-72 rounded-full bg-[var(--crimson)]/25 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute -right-16 bottom-1/4 w-96 h-96 rounded-full bg-[var(--violet)]/20 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-5xl w-full text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="neo-border-thick bg-[var(--surface)] text-[var(--fire-bright)] px-4 py-2 font-display text-sm tracking-[0.4em] mb-6 inline-block neo-shadow"
        >
          CHRONOLOGICAL WATCH ORDER
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 120 }}
          className="font-display text-[clamp(3.5rem,12vw,9rem)] leading-[0.88] tracking-wide uppercase neo-text-stroke text-[var(--fire)] mb-4"
        >
          MCU
          <br />
          <span className="text-[var(--text)]">TIMELINE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-lg md:text-xl max-w-xl text-theme-muted mb-8 leading-relaxed"
        >
          Scroll through {itemCount} films, series & specials. Fire falls from the sky as the saga
          unfolds — one chapter at a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-3 justify-center md:justify-start"
        >
          {[
            { label: "INFINITY SAGA", color: "bg-[var(--crimson)] text-white" },
            { label: "MULTIVERSE SAGA", color: "bg-[var(--violet)] text-white" },
            { label: `${itemCount} TITLES`, color: "bg-[var(--fire-bright)] text-[var(--bg-void)]" },
          ].map((pill, i) => (
            <motion.span
              key={pill.label}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.55 + i * 0.08, type: "spring" }}
              className={`neo-border-thick px-4 py-2 font-display text-sm tracking-widest neo-shadow ${pill.color}`}
            >
              {pill.label}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 flex items-center gap-3 justify-center md:justify-start"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="neo-border-thick bg-[var(--card)] px-5 py-3 font-display text-base tracking-[0.3em] neo-shadow text-[var(--fire-bright)]">
            SCROLL TO BEGIN ↓
          </div>
        </motion.div>
      </div>
    </section>
  );
}
