"use client";

import { motion } from "framer-motion";
import type { WatchLink } from "@/lib/watch";

export function WatchButtons({ links }: { links: WatchLink[] }) {
  if (links.length === 0) return null;

  const primary = links.find((l) => l.primary) ?? links[0];
  const secondary = links.filter((l) => l !== primary);

  return (
    <div className="flex flex-wrap items-center gap-2 mt-4">
      <motion.a
        href={primary.url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ x: 4, y: 4, boxShadow: "6px 6px 0 var(--fire-bright)" }}
        whileTap={{ scale: 0.97 }}
        className="neo-border-thick bg-[var(--fire)] text-[var(--bg-void)] px-4 py-2.5 font-display text-sm md:text-base tracking-[0.2em] neo-shadow inline-flex items-center gap-2"
      >
        WATCH ON {primary.platform.toUpperCase()}
        <span aria-hidden>↗</span>
      </motion.a>

      {secondary.map((link) => (
        <motion.a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 2, y: 2 }}
          className="neo-border bg-[var(--surface)] px-3 py-2 font-display text-xs tracking-widest neo-shadow hover:bg-[var(--card-elevated)] transition-colors text-[var(--text)]"
        >
          {link.platform} ↗
        </motion.a>
      ))}
    </div>
  );
}
