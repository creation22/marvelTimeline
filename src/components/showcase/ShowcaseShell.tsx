"use client";

import { FireballBackground } from "./FireballBackground";
import { NeoGridOverlay, NeoGrain } from "./LuxuryNeo";

export function ShowcaseShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FireballBackground />
      <NeoGridOverlay />
      <NeoGrain />
      <div className="fixed inset-0 z-[4] pointer-events-none luxury-gradient" aria-hidden />
      {children}
    </>
  );
}
