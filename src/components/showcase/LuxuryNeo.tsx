"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function NeoMarquee({ text }: { text: string }) {
  return (
    <div className="neo-border bg-[var(--surface)] text-[var(--fire-bright)] overflow-hidden py-2">
      <motion.div
        className="flex whitespace-nowrap font-display text-sm md:text-base tracking-[0.35em] uppercase"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className="px-8">{text}</span>
        ))}
      </motion.div>
    </div>
  );
}

export function NeoBadge({
  children,
  variant = "gold",
  className,
}: {
  children: React.ReactNode;
  variant?: "gold" | "red" | "violet" | "dark" | "surface";
  className?: string;
}) {
  const variants = {
    gold: "bg-[var(--fire-bright)] text-[var(--bg-void)]",
    red: "bg-[var(--crimson)] text-white",
    violet: "bg-[var(--violet)] text-white",
    dark: "bg-[var(--bg-void)] text-[var(--fire-bright)]",
    surface: "bg-[var(--surface)] text-[var(--text)]",
  };
  return (
    <span
      className={cn(
        "neo-border px-3 py-1 font-display text-xs md:text-sm tracking-widest uppercase",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export function NeoPanel({
  children,
  className,
  accent = "red",
}: {
  children: React.ReactNode;
  className?: string;
  accent?: "red" | "violet" | "fire";
}) {
  const shadow =
    accent === "red" ? "neo-shadow-red" : accent === "violet" ? "neo-shadow-blue" : "neo-shadow";
  return (
    <motion.div
      whileHover={{ x: 4, y: 4 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn("neo-border bg-[var(--card)] p-6 md:p-8", shadow, className)}
    >
      {children}
    </motion.div>
  );
}

export function NeoGridOverlay() {
  return (
    <div
      className="fixed inset-0 z-[2] pointer-events-none opacity-[0.07]"
      style={{
        backgroundImage:
          "linear-gradient(#ff8c42 2px, transparent 2px), linear-gradient(90deg, #ff8c42 2px, transparent 2px)",
        backgroundSize: "48px 48px",
      }}
      aria-hidden
    />
  );
}

export function NeoGrain() {
  return (
    <div
      className="fixed inset-0 z-[3] pointer-events-none opacity-[0.06] mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }}
      aria-hidden
    />
  );
}
