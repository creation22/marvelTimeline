"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Coffee } from "lucide-react";
import { cn } from "@/lib/utils";

const SUPPORT_URL = "https://buymeacoffee.com/creation22";

const links = [
  { href: "/timeline", label: "Timeline" },
  { href: "/characters", label: "Characters" },
  { href: "/comics", label: "Comics" },
];

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
