import Link from "next/link";

export default function NotFound() {
  return (
    <main className="premium-timeline flex min-h-screen flex-col items-center justify-center bg-[var(--pt-bg)] px-4 text-center text-[var(--pt-ink)]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pt-muted)]">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-sm text-[var(--pt-muted)]">
        That route isn&apos;t part of Marvel Timeline. Head back to the watch order.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <Link
          href="/"
          className="border-2 border-[var(--pt-ink)] bg-[var(--pt-lime)] px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-[var(--pt-ink)] shadow-[3px_3px_0_var(--pt-ink)]"
        >
          Home →
        </Link>
        <Link
          href="/timeline"
          className="border-2 border-[var(--pt-ink)] bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-wider shadow-[3px_3px_0_var(--pt-ink)]"
        >
          Timeline
        </Link>
        <Link
          href="/characters"
          className="border-2 border-[var(--pt-ink)] bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-wider shadow-[3px_3px_0_var(--pt-ink)]"
        >
          Characters
        </Link>
      </div>
    </main>
  );
}
