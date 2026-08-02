"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { href: "/timeline", label: "TIMELINE" },
  { href: "/characters", label: "CHARACTERS" },
];

export function ShowcaseNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="/timeline">
          <motion.div
            whileHover={{ x: 3, y: 3, boxShadow: "5px 5px 0 var(--fire-bright)" }}
            whileTap={{ scale: 0.97 }}
            className="neo-border-thick bg-[var(--crimson)] px-5 py-2.5 font-display text-2xl md:text-3xl tracking-[0.2em] text-white neo-shadow"
          >
            MARVEL
          </motion.div>
        </Link>

        <div className="flex gap-2 md:gap-3">
          {links.map((link) => {
            const active = pathname === link.href || (pathname === "/" && link.href === "/timeline");
            return (
              <Link key={link.href} href={link.href}>
                <motion.div
                  whileHover={{ x: 3, y: 3 }}
                  whileTap={{ scale: 0.97 }}
                  className={cn(
                    "neo-border-thick px-4 md:px-6 py-2.5 font-display text-base md:text-lg tracking-[0.25em] transition-shadow",
                    active
                      ? "bg-[var(--fire-bright)] text-[var(--bg-void)] neo-shadow-red"
                      : "bg-[var(--card)] text-[var(--text)] neo-shadow hover:neo-shadow-red"
                  )}
                >
                  {link.label}
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
