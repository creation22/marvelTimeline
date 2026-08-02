"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, Coffee, Copy, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

const SUPPORT_URL = "https://buymeacoffee.com/creation22";
const SHARE_TITLE = "Marvel Timeline";
const SHARE_TEXT = "MCU chronological watch order — tick what you've seen.";

const links = [
  { href: "/timeline", label: "Timeline" },
  { href: "/characters", label: "Characters" },
  { href: "/comics", label: "Comics" },
];

function getShareUrl() {
  if (typeof window === "undefined") return "https://github.com/creation22/marvelTimeline";
  return window.location.origin + (window.location.pathname || "/");
}

function ShareMenu() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShareUrl(getShareUrl());
    setCanNativeShare(typeof navigator !== "undefined" && typeof navigator.share === "function");
  }, []);

  useEffect(() => {
    if (!open) return;
    setShareUrl(getShareUrl());
    const onPointer = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(t);
  }, [copied]);

  const copyLink = useCallback(async () => {
    const url = getShareUrl();
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      const input = document.createElement("input");
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
    }
  }, []);

  const nativeShare = useCallback(async () => {
    const url = getShareUrl();
    try {
      await navigator.share({ title: SHARE_TITLE, text: SHARE_TEXT, url });
      setOpen(false);
    } catch (err) {
      if ((err as Error)?.name === "AbortError") return;
    }
  }, []);

  const encoded = encodeURIComponent(shareUrl || "https://github.com/creation22/marvelTimeline");
  const textEncoded = encodeURIComponent(
    `${SHARE_TEXT} ${shareUrl || "https://github.com/creation22/marvelTimeline"}`
  );

  const social = [
    { label: "WhatsApp", href: `https://wa.me/?text=${textEncoded}`, bg: "#25D366" },
    {
      label: "X / Twitter",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encoded}`,
      bg: "#1a1a1a",
      fg: "#fff",
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`,
      bg: "#1877F2",
      fg: "#fff",
    },
    {
      label: "Telegram",
      href: `https://t.me/share/url?url=${encoded}&text=${encodeURIComponent(SHARE_TEXT)}`,
      bg: "#229ED9",
      fg: "#fff",
    },
    {
      label: "Reddit",
      href: `https://www.reddit.com/submit?url=${encoded}&title=${encodeURIComponent(SHARE_TITLE)}`,
      bg: "#FF4500",
      fg: "#fff",
    },
  ];

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        title="Share this site"
        aria-label="Share Marvel Timeline"
        className="inline-flex items-center gap-1 border-2 border-[var(--pt-ink)] bg-[var(--pt-blue)] px-1.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white shadow-[2px_2px_0_var(--pt-ink)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_var(--pt-ink)] sm:gap-1.5 sm:px-2.5 sm:py-1.5 sm:text-[11px] sm:shadow-[3px_3px_0_var(--pt-ink)]"
      >
        <Share2 className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={2.5} aria-hidden />
        <span className="hidden sm:inline">Share</span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-[calc(100%+6px)] z-50 w-[11.5rem] border-2 border-[var(--pt-ink)] bg-white p-1.5 shadow-[4px_4px_0_var(--pt-ink)] sm:w-52"
        >
          <button
            type="button"
            role="menuitem"
            onClick={copyLink}
            className="flex w-full items-center gap-2 border-2 border-[var(--pt-ink)] bg-[var(--pt-lime)] px-2.5 py-2 text-left text-[10px] font-bold uppercase tracking-wider text-[var(--pt-ink)] transition-colors hover:bg-white sm:text-[11px]"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} aria-hidden />
            ) : (
              <Copy className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} aria-hidden />
            )}
            {copied ? "Link copied!" : "Copy link"}
          </button>

          {canNativeShare && (
            <button
              type="button"
              role="menuitem"
              onClick={nativeShare}
              className="mt-1 flex w-full items-center gap-2 border-2 border-[var(--pt-ink)] bg-white px-2.5 py-1.5 text-left text-[10px] font-bold uppercase tracking-wider text-[var(--pt-ink)] hover:bg-[var(--pt-bg)] sm:text-[11px]"
            >
              <Share2 className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} aria-hidden />
              More apps…
            </button>
          )}

          <div className="mt-1.5 space-y-1">
            {social.map((item) => (
              <a
                key={item.label}
                role="menuitem"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex w-full items-center border-2 border-[var(--pt-ink)] px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-opacity hover:opacity-90 sm:text-[11px]"
                style={{ background: item.bg, color: item.fg ?? "#1a1a1a" }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function PremiumNav() {
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50 border-b-2 border-[var(--pt-ink)] bg-[var(--pt-bg)]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-2.5 sm:gap-4 sm:px-4 sm:py-3 md:px-6">
          <Link
            href="/timeline"
            className="min-w-0 truncate font-display text-sm font-bold tracking-tight sm:text-base md:text-lg"
            aria-label="Marvel Timeline — home"
          >
            MARVEL <span className="text-[var(--pt-red)]">TIMELINE</span>
          </Link>

          <div className="flex shrink-0 items-center gap-0.5 sm:gap-1.5">
            <nav className="flex items-center gap-0.5 sm:gap-1">
              {links.map((link) => {
                const active =
                  pathname === link.href ||
                  (pathname === "/" && link.href === "/timeline");
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "border-2 border-[var(--pt-ink)] px-1.5 py-1 text-[9px] font-semibold uppercase tracking-wider transition-all sm:px-3 sm:py-1.5 sm:text-[11px]",
                      active
                        ? "bg-[var(--pt-ink)] text-white shadow-[2px_2px_0_var(--pt-lime)] sm:shadow-[3px_3px_0_var(--pt-lime)]"
                        : "bg-white hover:bg-[var(--pt-lime)] hover:shadow-[3px_3px_0_var(--pt-ink)]"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <ShareMenu />

            <a
              href={SUPPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Support this website"
              aria-label="Support this website on Buy Me a Coffee"
              className="inline-flex items-center gap-1 border-2 border-[var(--pt-ink)] bg-[#ffdd00] px-1.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[var(--pt-ink)] shadow-[2px_2px_0_var(--pt-ink)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_var(--pt-ink)] sm:gap-1.5 sm:px-2.5 sm:py-1.5 sm:text-[11px] sm:shadow-[3px_3px_0_var(--pt-ink)]"
            >
              <Coffee className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={2.5} aria-hidden />
              <span className="hidden sm:inline">Support</span>
            </a>
          </div>
        </div>
      </header>

      {/* Floating support — always visible while scrolling */}
      <a
        href={SUPPORT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-3 right-3 z-40 flex items-center gap-2 border-2 border-[var(--pt-ink)] bg-[#ffdd00] px-3 py-2 font-display text-[11px] font-bold uppercase tracking-wide text-[var(--pt-ink)] shadow-[3px_3px_0_var(--pt-ink)] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_var(--pt-ink)] sm:bottom-5 sm:right-5 sm:px-3.5 sm:py-2.5 sm:text-xs md:right-28"
        aria-label="Support this website"
      >
        <Coffee className="h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden />
        <span className="hidden sm:inline">Support this site</span>
        <span className="sm:hidden">Support</span>
      </a>
    </>
  );
}
