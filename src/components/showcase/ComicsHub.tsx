"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { ComicReadingOrder, ComicEntry } from "@/data/comic-reading-orders";
import { getTotalComicEntries } from "@/data/comic-reading-orders";
import { PremiumNav } from "./PremiumNav";
import { SiteFooter } from "./SiteFooter";
import { getComicReadLinks } from "@/lib/comics";

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

const TYPE_LABEL: Record<string, string> = {
  EVENT: "Event",
  SERIES: "Series",
  ISSUE: "Issue",
  GRAPHIC_NOVEL: "GN",
};

function ComicRow({ comic, index }: { comic: ComicEntry; index: number }) {
  const links = getComicReadLinks(comic);
  const primary = links.find((l) => l.primary) ?? links[0];
  const secondary = links.filter((l) => l !== primary);

  return (
    <motion.li
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.03, 0.24) }}
      className="border-b-2 border-[var(--pt-ink)]/15 py-3.5 last:border-b-0 sm:py-4"
    >
      <div className="mb-1.5 flex flex-wrap items-center gap-1.5">
        {comic.year && (
          <span className="border border-[var(--pt-ink)] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider">
            {comic.year}
          </span>
        )}
        <span className="border border-[var(--pt-ink)] bg-[var(--pt-bg)] px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[var(--pt-muted)]">
          {TYPE_LABEL[comic.type] ?? comic.type}
        </span>
      </div>

      <h3 className="font-display text-[15px] font-bold leading-snug tracking-tight sm:text-base md:text-lg">
        {comic.title}
      </h3>

      <p className="mt-1.5 text-[12px] leading-relaxed text-[var(--pt-muted)] sm:text-[13px]">
        {comic.overview}
      </p>

      {comic.relatedMcuSlug && (
        <Link
          href={`/#${comic.relatedMcuSlug}`}
          className="mt-2 inline-block text-[11px] font-bold uppercase tracking-wider text-[var(--pt-red)] hover:underline"
        >
          Related MCU title →
        </Link>
      )}

      <div className="mt-3 flex flex-wrap gap-1.5">
        <a
          href={primary.url}
          target="_blank"
          rel="noopener noreferrer"
          className="pt-watch-primary min-h-9 justify-center px-2.5 text-[10px] sm:min-h-0 sm:text-[11px]"
        >
          <span className="sm:hidden">Read ↗</span>
          <span className="hidden sm:inline">{primary.platform} ↗</span>
        </a>
        {secondary.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="pt-watch-secondary min-h-9 items-center justify-center px-2.5 text-[10px] sm:min-h-0 sm:text-[11px]"
          >
            {link.platform === "Marvel Unlimited" ? (
              <>
                <span className="sm:hidden">Unlimited</span>
                <span className="hidden sm:inline">Marvel Unlimited</span>
              </>
            ) : (
              link.platform
            )}
          </a>
        ))}
      </div>
    </motion.li>
  );
}

function OrderPanel({
  order,
  open,
  onToggle,
}: {
  order: ComicReadingOrder;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <section className="pt-hard overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-start gap-3 p-3.5 text-left sm:gap-4 sm:p-4 md:p-5"
      >
        <span
          className="mt-1.5 h-3 w-3 shrink-0 border-2 border-[var(--pt-ink)]"
          style={{ background: order.accent }}
          aria-hidden
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <h2 className="font-display text-lg font-bold leading-tight tracking-tight sm:text-xl md:text-2xl">
              {order.name}
            </h2>
            <span className="border-2 border-[var(--pt-ink)] bg-white px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider shadow-[2px_2px_0_var(--pt-ink)] sm:px-2 sm:text-[10px]">
              {order.comics.length} picks
            </span>
          </div>
          <p className="mt-1.5 text-[12px] leading-relaxed text-[var(--pt-muted)] sm:mt-2 sm:text-[13px]">
            {order.description}
          </p>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border-2 border-[var(--pt-ink)] bg-white font-display text-sm font-bold shadow-[2px_2px_0_var(--pt-ink)]"
          aria-hidden
        >
          ↓
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <ul className="border-t-2 border-[var(--pt-ink)] px-3.5 sm:px-4 md:px-5">
              {order.comics.map((comic, i) => (
                <ComicRow key={comic.slug} comic={comic} index={i} />
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export function ComicsHub({ orders }: { orders: ComicReadingOrder[] }) {
  const [openSlug, setOpenSlug] = useState(orders[0]?.slug ?? "");
  const [filter, setFilter] = useState("");

  const totalEntries = getTotalComicEntries();

  const filtered = useMemo(() => {
    const q = filter.trim().toLowerCase();
    if (!q) return orders;
    return orders
      .map((order) => ({
        ...order,
        comics: order.comics.filter(
          (c) =>
            c.title.toLowerCase().includes(q) ||
            c.overview.toLowerCase().includes(q) ||
            c.searchQuery.toLowerCase().includes(q)
        ),
      }))
      .filter((o) => o.name.toLowerCase().includes(q) || o.comics.length > 0);
  }, [orders, filter]);

  return (
    <div className="premium-timeline relative overflow-x-hidden">
      <Marquee
        text={`${orders.length} reading orders /// ${totalEntries} curated comics /// Read on Marvel Unlimited`}
      />
      <PremiumNav />

      <div className="mx-auto max-w-6xl px-3 pb-28 pt-6 sm:px-4 sm:pb-24 sm:pt-8 md:px-6 md:pb-16">
        <section className="relative mb-6 overflow-hidden sm:mb-8">
          <motion.div
            className="pointer-events-none absolute -left-12 top-0 h-40 w-40 rounded-full bg-[#2b6cff]/10 blur-3xl"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--pt-muted)] sm:mb-3 sm:text-[11px] sm:tracking-[0.28em]">
            Official reading paths · Marvel Unlimited
          </p>
          <h1 className="font-display text-[clamp(2rem,9vw,4.5rem)] font-bold leading-[0.92] tracking-[-0.04em]">
            MCU{" "}
            <span className="relative inline-block">
              COMICS
              <span className="absolute -right-1.5 -top-1 h-2.5 w-2.5 rotate-12 bg-[var(--pt-blue)] sm:-right-2 sm:h-3 sm:w-3" />
            </span>
          </h1>
          <p className="mt-3 max-w-2xl text-[12px] leading-relaxed text-[var(--pt-muted)] sm:text-[13px] md:text-sm">
            Curated reading orders that pair with our timeline. We don&apos;t host comics — every
            link opens official Marvel pages (with Unlimited) or Amazon for print.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
            <Stat value={orders.length} label="Reading orders" accent="#c8ff00" />
            <Stat value={totalEntries} label="Curated picks" accent="#2b6cff" />
            <Stat value={7} label="Themes" accent="#e11d2e" />
            <Stat value={1} label="Platform" accent="#ffd400" subtitle="Marvel Unlimited" />
          </div>
        </section>

        <div className="mb-5 flex flex-col gap-2.5 sm:mb-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
          <input
            type="search"
            placeholder="Search comics or orders..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full border-2 border-[var(--pt-ink)] bg-white px-3.5 py-2.5 text-sm shadow-[3px_3px_0_var(--pt-ink)] placeholder:text-[var(--pt-faint)] focus:outline-none focus:shadow-[4px_4px_0_var(--pt-lime)] sm:max-w-md sm:px-4"
          />
          <a
            href="https://www.marvel.com/unlimited"
            target="_blank"
            rel="noopener noreferrer"
            className="pt-watch-primary w-full justify-center sm:w-auto"
          >
            <span className="sm:hidden">Marvel Unlimited ↗</span>
            <span className="hidden sm:inline">Open Marvel Unlimited ↗</span>
          </a>
        </div>

        <div className="mb-5 border-2 border-[var(--pt-ink)] bg-[var(--pt-lime)]/40 px-3 py-2.5 text-[11px] leading-relaxed text-[var(--pt-ink)] shadow-[3px_3px_0_var(--pt-ink)] sm:mb-6 sm:px-4 sm:py-3 sm:text-[12px]">
          <strong className="font-bold uppercase tracking-wide">Disclaimer:</strong> Marvel Timeline
          is a fan showcase. Comics are copyrighted by Marvel. Subscribe to Marvel Unlimited or
          purchase from official retailers — we only link you there.
        </div>

        <div className="space-y-3 sm:space-y-4">
          {filtered.map((order) => (
            <OrderPanel
              key={order.slug}
              order={order}
              open={openSlug === order.slug}
              onToggle={() => setOpenSlug((s) => (s === order.slug ? "" : order.slug))}
            />
          ))}
          {filtered.length === 0 && (
            <p className="pt-hard p-5 text-center text-sm text-[var(--pt-muted)] sm:p-6">
              No comics match your search.
            </p>
          )}
        </div>

        <footer className="pt-hard mt-8 p-5 text-center sm:mt-10 sm:p-6 md:p-8">
          <p className="font-display text-xl font-bold tracking-tight sm:text-2xl">
            Finished a reading order?
          </p>
          <p className="mx-auto mt-2 max-w-md text-[12px] text-[var(--pt-muted)]">
            Jump back to the MCU timeline and see where those stories connect on screen.
          </p>
          <Link href="/" className="pt-watch-primary mt-5 inline-flex">
            Back to timeline →
          </Link>
        </footer>
      </div>
      <SiteFooter />
    </div>
  );
}

function Stat({
  value,
  label,
  accent,
  subtitle,
}: {
  value: number;
  label: string;
  accent: string;
  subtitle?: string;
}) {
  return (
    <div className="pt-stat px-2 py-2.5 sm:px-3 sm:py-3">
      <p
        className="font-display text-2xl font-bold leading-none sm:text-2xl md:text-3xl"
        style={{ color: accent }}
      >
        {value}
      </p>
      <p className="mt-1.5 text-[8px] font-semibold uppercase leading-tight tracking-[0.1em] text-white/70 sm:text-[9px] sm:tracking-[0.18em]">
        {label}
      </p>
      {subtitle && (
        <p className="mt-0.5 hidden text-[8px] font-semibold uppercase tracking-wider text-white/50 sm:block">
          {subtitle}
        </p>
      )}
    </div>
  );
}
