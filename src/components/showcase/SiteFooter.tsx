import Link from "next/link";
import { Mail } from "lucide-react";
import {
  CONTACT_EMAIL,
  CONTACT_X_HANDLE,
  CONTACT_X_URL,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const nav = [
  { href: "/", label: "Timeline" },
  { href: "/characters", label: "Characters" },
  { href: "/comics", label: "Comics" },
];

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-10 border-t-2 border-[var(--pt-ink)] bg-[var(--pt-bg)] pb-28 sm:pb-24 md:pb-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-3 py-8 sm:px-4 sm:py-10 md:grid-cols-[1.2fr_1fr_1fr] md:px-6 md:py-12">
        <div>
          <p className="font-display text-lg font-bold tracking-tight sm:text-xl">
            MARVEL <span className="text-[var(--pt-red)]">TIMELINE</span>
          </p>
          <p className="mt-2 max-w-sm text-[12px] leading-relaxed text-[var(--pt-muted)] sm:text-[13px]">
            Fan-made MCU watch order, character stories, and comics paths. Not affiliated with
            Marvel or Disney.
          </p>
          <a
            href={SITE_URL}
            className="mt-3 inline-block text-[11px] font-semibold text-[var(--pt-blue)] hover:underline"
          >
            marveltimeline.space
          </a>
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--pt-muted)]">
            Explore
          </p>
          <ul className="mt-3 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[13px] font-semibold text-[var(--pt-ink)] hover:text-[var(--pt-red)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--pt-muted)]">
            Contact
          </p>
          <ul className="mt-3 space-y-2.5">
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--pt-ink)] hover:text-[var(--pt-red)]"
              >
                <Mail className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} aria-hidden />
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a
                href={CONTACT_X_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--pt-ink)] hover:text-[var(--pt-red)]"
              >
                <span
                  className="flex h-5 w-5 items-center justify-center border border-[var(--pt-ink)] bg-[var(--pt-ink)] text-[10px] font-bold text-white"
                  aria-hidden
                >
                  𝕏
                </span>
                @{CONTACT_X_HANDLE}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t-2 border-[var(--pt-ink)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-3 py-3 text-[10px] text-[var(--pt-faint)] sm:flex-row sm:items-center sm:justify-between sm:px-4 md:px-6">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}
          </p>
          <p>Made for fans · Contact for tips & feedback</p>
        </div>
      </div>
    </footer>
  );
}
