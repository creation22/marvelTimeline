"use client";

/**
 * Lightweight static atmosphere — no scroll-bound SVG pathLength updates.
 * (The previous version re-painted huge Framer Motion meshes every scroll frame.)
 */
export function TimelineAtmosphere() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden text-[var(--pt-ink)]"
      aria-hidden
    >
      <div className="pt-atmosphere-wash absolute inset-0" />

      {/* Soft static orbs — CSS only, no JS animation loops */}
      <div className="absolute -left-24 top-[8%] h-56 w-56 rounded-full bg-[#2b6cff]/10 blur-3xl" />
      <div className="absolute -right-20 top-[28%] h-48 w-48 rounded-full bg-[#c8ff00]/15 blur-3xl" />
      <div className="absolute left-[10%] top-[55%] h-40 w-40 rounded-full bg-[#e11d2e]/8 blur-3xl" />
      <div className="absolute right-[8%] top-[72%] h-52 w-52 rounded-full bg-[#ffd400]/10 blur-3xl" />

      {/* One static spine — no pathLength / scroll binding */}
      <svg
        className="absolute left-1/2 top-0 hidden h-full w-[min(100%,720px)] -translate-x-1/2 opacity-[0.06] md:block md:opacity-[0.08]"
        viewBox="0 0 200 2800"
        preserveAspectRatio="none"
      >
        <path
          d="M100 20
             C 60 180, 140 320, 100 480
             C 55 640, 145 800, 100 960
             C 70 1120, 130 1280, 100 1440
             C 50 1600, 150 1760, 100 1920
             C 65 2080, 135 2240, 100 2400
             C 80 2520, 120 2640, 100 2760"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
