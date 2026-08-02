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
  GRAPHIC_NOVEL: "Graphic novel",
};

function ComicRow({ comic, index }: { comic: ComicEntry; index: number }) {
  const links = getComicReadLinks(comic);
  const primary = links.find((l) => l.primary) ?? links[0];

  return (
    <motion.li
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.04 }}
      className="grid grid-cols-[minmax(0,1fr)_auto] gap-2 border-b-2 border-[var(--pt-ink)]/15 py-3 last:border-b-0 sm:gap-3 sm:py-4 md:grid-cols-[minmax(0,1fr)_auto]"
    >
      <div>
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <span className="font-display text-base font-bold tracking-tight md:text-lg">
            {comic.title}
          </span>
          {comic.year && (
            <span className="border border-[var(--pt-ink)] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider">
              {comic.year}
            </span>
          )}
          <span className="border border-[var(--pt-ink)] bg-[var(--pt-bg)] px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[var(--pt-muted)]">
            {TYPE_LABEL[comic.type] ?? comic.type}
          </span>
        </div>
        <p className="text-[12px] leading-relaxed text-[var(--pt-muted)] md:text-[13px]">
          {comic.overview}
        </p>
        {comic.relatedMcuSlug && (
          <Link
            href={`/timeline#${comic.relatedMcuSlug}`}
            className="mt-2 inline-block text-[11px] font-bold uppercase tracking-wider text-[var(--pt-red)] hover:underline"
          >
            Related MCU title →
          </Link>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-1.5 md:justify-end">
        <a
          href={primary.url}
          target="_blank"
          rel="noopener noreferrer"
          className="pt-watch-primary"
        >
          {primary.platform} ↗
        </a>
        {links
          .filter((l) => l !== primary)
          .map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pt-watch-secondary"
            >
              {link.platform}
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
        className="flex w-full items-start justify-between gap-4 p-4 text-left md:p-5"
      >
        <div className="min-w-0">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span
              className="h-3 w-3 shrink-0 border-2 border-[var(--pt-ink)]"
              style={{ background: order.accent }}
            />
            <h2 className="font-display text-xl font-bold tracking-tight md:text-2xl">
              {order.name}
            </h2>
            <span className="border-2 border-[var(--pt-ink)] bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider shadow-[2px_2px_0_var(--pt-ink)]">
              {order.comics.length} picks
            </span>
          </div>
          <p className="max-w-2xl text-[13px] leading-relaxed text-[var(--pt-muted)]">
            {order.description}
          </p>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          className="mt-1 shrink-0 font-display text-lg font-bold text-[var(--pt-ink)]"
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
            <ul className="border-t-2 border-[var(--pt-ink)] px-4 md:px-5">
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
    <div className="premium-timeline relative">
      <Marquee
        text={`${orders.length} reading orders /// ${totalEntries} curated comics /// Read on Marvel Unlimited`}
      />
      <PremiumNav />

      <div className="mx-auto max-w-6xl px-3 pb-24 pt-6 sm:px-4 sm:pt-8 md:px-6">
        <section className="relative mb-8 overflow-hidden">
          <motion.div
            className="pointer-events-none absolute -left-12 top-0 h-40 w-40 rounded-full bg-[#2b6cff]/10 blur-3xl"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pt-muted)]">
            Official reading paths · Marvel Unlimited
          </p>
          <h1 className="font-display text-[clamp(2.4rem,7vw,4.5rem)] font-bold leading-[0.92] tracking-[-0.04em]">
            MCU{" "}
            <span className="relative inline-block">
              COMICS
              <span className="absolute -right-2 -top-1 h-3 w-3 rotate-12 bg-[var(--pt-blue)]" />
            </span>
          </h1>
          <p className="mt-3 max-w-2xl text-[13px] leading-relaxed text-[var(--pt-muted)] md:text-sm">
            Curated reading orders that pair with our timeline. We don&apos;t host comics — every
            link opens an official <strong className="font-semibold text-[var(--pt-ink)]">Marvel.com</strong> series
            or guide (with Marvel Unlimited on the same pages), plus Amazon for print copies.
          </p>

          <div className="mt-5 grid grid-cols-4 gap-2 sm:gap-3">
            <Stat value={orders.length} label="Reading orders" accent="#c8ff00" />
            <Stat value={totalEntries} label="Curated picks" accent="#2b6cff" />
            <Stat value={7} label="Themes" accent="#e11d2e" />
            <Stat value={1} label="Platform" accent="#ffd400" subtitle="Marvel Unlimited" />
          </div>
        </section>

        <div className="mb-6 flex flex-wrap items-center gap-3">
          <input
            type="search"
            placeholder="Search comics or orders..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full max-w-md border-2 border-[var(--pt-ink)] bg-white px-4 py-2.5 text-sm shadow-[3px_3px_0_var(--pt-ink)] placeholder:text-[var(--pt-faint)] focus:outline-none focus:shadow-[4px_4px_0_var(--pt-lime)]"
          />
          <a
            href="https://www.marvel.com/unlimited"
            target="_blank"
            rel="noopener noreferrer"
            className="pt-watch-primary"
          >
            Open Marvel Unlimited ↗
          </a>
        </div>

        <div className="mb-6 border-2 border-[var(--pt-ink)] bg-[var(--pt-lime)]/40 px-4 py-3 text-[12px] leading-relaxed text-[var(--pt-ink)] shadow-[3px_3px_0_var(--pt-ink)]">
          <strong className="font-bold uppercase tracking-wide">Disclaimer:</strong> Marvel Timeline
          is a fan showcase. Comics are copyrighted by Marvel. Subscribe to Marvel Unlimited or
          purchase from official retailers — we only link you there.
        </div>

        <div className="space-y-4">
          {filtered.map((order) => (
            <OrderPanel
              key={order.slug}
              order={order}
              open={openSlug === order.slug}
              onToggle={() =>
                setOpenSlug((s) => (s === order.slug ? "" : order.slug))
              }
            />
          ))}
          {filtered.length === 0 && (
            <p className="pt-hard p-6 text-center text-sm text-[var(--pt-muted)]">
              No comics match your search.
            </p>
          )}
        </div>

        <footer className="pt-hard mt-10 p-6 text-center md:p-8">
          <p className="font-display text-xl font-bold tracking-tight md:text-2xl">
            Finished a reading order?
          </p>
          <p className="mx-auto mt-2 max-w-md text-[12px] text-[var(--pt-muted)]">
            Jump back to the MCU timeline and see where those stories connect on screen.
          </p>
          <Link href="/timeline" className="pt-watch-primary mt-5 inline-flex">
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
      <p className="font-display text-xl font-bold leading-none sm:text-2xl md:text-3xl" style={{ color: accent }}>
        {value}
      </p>
      <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-white/70 sm:text-[9px] sm:tracking-[0.18em]">
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
