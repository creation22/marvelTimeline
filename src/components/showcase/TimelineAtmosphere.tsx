"use client";

import { motion, useScroll, useTransform } from "framer-motion";

type PathFigure = {
  id: string;
  x: string;
  y: string;
  rotate: number;
  scale: number;
  delay: number;
  color?: string;
};

/** Dense scatter of pathLength figures — kept to page edges so cards stay readable */
const FIGURES: PathFigure[] = [
  { id: "shield", x: "1%", y: "6%", rotate: -12, scale: 1.05, delay: 0.05 },
  { id: "arc", x: "88%", y: "5%", rotate: 8, scale: 0.95, delay: 0.12, color: "#2b6cff" },
  { id: "helmet", x: "3%", y: "14%", rotate: 6, scale: 1, delay: 0.18 },
  { id: "star", x: "90%", y: "12%", rotate: -18, scale: 0.85, delay: 0.22, color: "#e11d2e" },
  { id: "mandala", x: "2%", y: "22%", rotate: 0, scale: 1.1, delay: 0.28, color: "#e11d2e" },
  { id: "hammer", x: "87%", y: "20%", rotate: 14, scale: 1, delay: 0.34 },
  { id: "claw", x: "4%", y: "30%", rotate: -8, scale: 0.95, delay: 0.4 },
  { id: "portal", x: "89%", y: "28%", rotate: 20, scale: 1.05, delay: 0.46, color: "#ffd400" },
  { id: "spider", x: "1%", y: "38%", rotate: -6, scale: 1.1, delay: 0.52 },
  { id: "bow", x: "86%", y: "36%", rotate: 10, scale: 0.9, delay: 0.58 },
  { id: "gauntlet", x: "3%", y: "46%", rotate: -4, scale: 1.15, delay: 0.64 },
  { id: "bifrost", x: "88%", y: "44%", rotate: -12, scale: 1, delay: 0.7, color: "#2b6cff" },
  { id: "stone-ring", x: "2%", y: "54%", rotate: 8, scale: 1.05, delay: 0.76 },
  { id: "mask", x: "87%", y: "52%", rotate: 14, scale: 0.95, delay: 0.82 },
  { id: "arc", x: "4%", y: "62%", rotate: -16, scale: 0.9, delay: 0.88, color: "#c8ff00" },
  { id: "shield", x: "89%", y: "60%", rotate: 22, scale: 0.85, delay: 0.94 },
  { id: "claw", x: "1%", y: "70%", rotate: 12, scale: 1, delay: 1.0 },
  { id: "mandala", x: "86%", y: "68%", rotate: -8, scale: 0.95, delay: 1.06, color: "#00c2a8" },
  { id: "hammer", x: "3%", y: "78%", rotate: -20, scale: 0.9, delay: 1.12 },
  { id: "spider", x: "88%", y: "76%", rotate: 8, scale: 1, delay: 1.18 },
  { id: "portal", x: "2%", y: "86%", rotate: 16, scale: 1, delay: 1.24, color: "#7c3aed" },
  { id: "gauntlet", x: "87%", y: "84%", rotate: -10, scale: 1.05, delay: 1.3 },
  { id: "star", x: "5%", y: "94%", rotate: 4, scale: 0.8, delay: 1.36, color: "#ffd400" },
  { id: "bow", x: "90%", y: "92%", rotate: -14, scale: 0.85, delay: 1.42 },
  { id: "helmet", x: "78%", y: "8%", rotate: -22, scale: 0.7, delay: 0.15 },
  { id: "mask", x: "10%", y: "48%", rotate: 18, scale: 0.7, delay: 0.68 },
  { id: "bifrost", x: "8%", y: "82%", rotate: 6, scale: 0.75, delay: 1.2, color: "#e11d2e" },
  { id: "stone-ring", x: "80%", y: "96%", rotate: -6, scale: 0.75, delay: 1.48 },
];

const STONE_NODES = [
  { color: "#2b6cff", x: "14%", y: "8%", delay: 0.1 },
  { color: "#ffd400", x: "78%", y: "11%", delay: 0.3 },
  { color: "#e11d2e", x: "16%", y: "26%", delay: 0.5 },
  { color: "#7c3aed", x: "82%", y: "32%", delay: 0.7 },
  { color: "#00c2a8", x: "13%", y: "44%", delay: 0.9 },
  { color: "#f59e0b", x: "84%", y: "48%", delay: 1.1 },
  { color: "#2b6cff", x: "15%", y: "60%", delay: 1.25 },
  { color: "#e11d2e", x: "81%", y: "66%", delay: 1.4 },
  { color: "#c8ff00", x: "14%", y: "78%", delay: 1.55 },
  { color: "#7c3aed", x: "83%", y: "88%", delay: 1.7 },
  { color: "#ffd400", x: "18%", y: "92%", delay: 1.85 },
  { color: "#00c2a8", x: "76%", y: "18%", delay: 0.4 },
] as const;

function DrawnPath({
  d,
  delay = 0,
  duration = 2.4,
  strokeWidth = 1.5,
  opacity = 1,
  color,
}: {
  d: string;
  delay?: number;
  duration?: number;
  strokeWidth?: number;
  opacity?: number;
  color?: string;
}) {
  return (
    <path
      d={d}
      fill="none"
      stroke={color ?? "currentColor"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      pathLength={1}
      className="pt-draw-path"
      style={{
        opacity,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      }}
    />
  );
}

function DrawnCircle({
  cx,
  cy,
  r,
  delay = 0,
  duration = 1.8,
  strokeWidth = 1.4,
  opacity = 1,
  color,
}: {
  cx: number;
  cy: number;
  r: number;
  delay?: number;
  duration?: number;
  strokeWidth?: number;
  opacity?: number;
  color?: string;
}) {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      fill="none"
      stroke={color ?? "currentColor"}
      strokeWidth={strokeWidth}
      pathLength={1}
      className="pt-draw-path"
      style={{
        opacity,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      }}
    />
  );
}

function PathFigureSvg({ id, delay, color }: { id: string; delay: number; color?: string }) {
  const ink = color ?? "currentColor";

  switch (id) {
    case "shield":
      return (
        <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden>
          <DrawnCircle cx={60} cy={60} r={52} delay={delay} duration={2.2} strokeWidth={2} />
          <DrawnCircle cx={60} cy={60} r={38} delay={delay + 0.12} duration={2} strokeWidth={1.6} opacity={0.85} />
          <DrawnCircle cx={60} cy={60} r={22} delay={delay + 0.24} duration={1.8} strokeWidth={1.6} opacity={0.75} />
          <DrawnCircle cx={60} cy={60} r={8} delay={delay + 0.36} duration={1.4} strokeWidth={2} />
          <DrawnPath d="M60 8 L60 112 M8 60 L112 60 M24 24 L96 96 M96 24 L24 96" delay={delay + 0.2} duration={2.6} strokeWidth={1.2} opacity={0.45} />
          <DrawnPath d="M60 8 C 90 20, 108 42, 112 60 C 108 78, 90 100, 60 112 C 30 100, 12 78, 8 60 C 12 42, 30 20, 60 8" delay={delay + 0.45} duration={2.8} strokeWidth={1} opacity={0.35} />
        </svg>
      );

    case "helmet":
      return (
        <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden>
          <DrawnPath d="M22 72 C 24 36, 40 18, 60 16 C 80 18, 96 36, 98 72 L 98 92 L 78 86 L 70 98 L 60 90 L 50 98 L 42 86 L 22 92 Z" delay={delay} duration={2.8} strokeWidth={1.8} />
          <DrawnPath d="M34 68 L 50 68 L 60 52 L 70 68 L 86 68" delay={delay + 0.3} duration={1.8} strokeWidth={1.6} />
          <DrawnPath d="M38 48 L 52 48 M68 48 L 82 48 M52 28 L 60 14 L 68 28" delay={delay + 0.5} duration={1.6} strokeWidth={1.4} opacity={0.8} />
          <DrawnPath d="M28 78 C 40 74, 50 74, 60 78 C 70 74, 80 74, 92 78" delay={delay + 0.65} duration={1.5} strokeWidth={1.2} opacity={0.55} />
          <DrawnPath d="M44 36 C 48 40, 52 40, 56 36 M64 36 C 68 40, 72 40, 76 36" delay={delay + 0.8} duration={1.3} strokeWidth={1.3} />
        </svg>
      );

    case "hammer":
      return (
        <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden>
          <DrawnPath d="M18 22 L 102 22 L 102 48 L 78 48 L 78 108 L 42 108 L 42 48 L 18 48 Z" delay={delay} duration={2.6} strokeWidth={1.8} />
          <DrawnPath d="M28 28 L 92 28 M28 36 L 92 36 M28 42 L 92 42" delay={delay + 0.25} duration={1.8} strokeWidth={1.1} opacity={0.5} />
          <DrawnPath d="M50 48 L 50 108 M70 48 L 70 108" delay={delay + 0.4} duration={1.6} strokeWidth={1.4} />
          <DrawnPath d="M42 70 C 50 66, 70 66, 78 70 M42 88 C 50 84, 70 84, 78 88" delay={delay + 0.55} duration={1.5} strokeWidth={1.1} opacity={0.55} />
          <DrawnCircle cx={60} cy={34} r={6} delay={delay + 0.7} duration={1.2} strokeWidth={1.5} />
          <DrawnPath d="M48 30 L 52 24 L 60 28 L 68 24 L 72 30" delay={delay + 0.85} duration={1.2} strokeWidth={1.1} opacity={0.6} />
        </svg>
      );

    case "spider":
      return (
        <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden>
          <DrawnPath d="M60 18 C 74 18, 84 30, 84 44 C 84 56, 74 64, 60 64 C 46 64, 36 56, 36 44 C 36 30, 46 18, 60 18" delay={delay} duration={2} strokeWidth={1.7} />
          <DrawnPath d="M60 64 C 74 64, 82 74, 82 88 C 82 100, 72 108, 60 108 C 48 108, 38 100, 38 88 C 38 74, 46 64, 60 64" delay={delay + 0.15} duration={2} strokeWidth={1.7} />
          <DrawnPath d="M40 34 C 18 22, 8 8, 6 6 M80 34 C 102 22, 112 8, 114 6" delay={delay + 0.3} duration={1.8} strokeWidth={1.4} />
          <DrawnPath d="M36 48 C 12 48, 4 58, 2 64 M84 48 C 108 48, 116 58, 118 64" delay={delay + 0.45} duration={1.8} strokeWidth={1.4} />
          <DrawnPath d="M38 72 C 14 84, 8 100, 6 108 M82 72 C 106 84, 112 100, 114 108" delay={delay + 0.6} duration={1.8} strokeWidth={1.4} />
          <DrawnPath d="M44 90 C 28 102, 22 112, 20 116 M76 90 C 92 102, 98 112, 100 116" delay={delay + 0.75} duration={1.6} strokeWidth={1.3} opacity={0.8} />
          <DrawnPath d="M60 18 L 60 8 M52 40 L 68 40 M52 84 L 68 84" delay={delay + 0.85} duration={1.3} strokeWidth={1.2} opacity={0.6} />
          <DrawnPath d="M48 28 C 54 34, 66 34, 72 28" delay={delay + 0.95} duration={1.2} strokeWidth={1.2} />
        </svg>
      );

    case "gauntlet":
      return (
        <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden>
          <DrawnPath d="M28 112 L 28 68 C 28 56, 34 48, 44 42 L 52 14 C 54 6, 66 6, 68 14 L 72 36 L 78 18 C 80 10, 92 12, 92 22 L 94 42 L 102 30 C 106 24, 116 28, 114 38 L 108 62 C 106 82, 96 98, 78 108 L 28 112 Z" delay={delay} duration={3.2} strokeWidth={1.8} />
          <DrawnCircle cx={64} cy={62} r={10} delay={delay + 0.35} duration={1.6} strokeWidth={1.8} color="#7c3aed" />
          <DrawnCircle cx={46} cy={72} r={5} delay={delay + 0.5} duration={1.2} strokeWidth={1.4} color="#2b6cff" />
          <DrawnCircle cx={78} cy={78} r={5} delay={delay + 0.6} duration={1.2} strokeWidth={1.4} color="#e11d2e" />
          <DrawnCircle cx={58} cy={86} r={5} delay={delay + 0.7} duration={1.2} strokeWidth={1.4} color="#ffd400" />
          <DrawnCircle cx={72} cy={48} r={5} delay={delay + 0.8} duration={1.2} strokeWidth={1.4} color="#00c2a8" />
          <DrawnCircle cx={88} cy={56} r={4.5} delay={delay + 0.9} duration={1.2} strokeWidth={1.4} color="#f59e0b" />
          <DrawnPath d="M40 54 C 50 48, 70 48, 86 56 M36 96 C 52 90, 74 92, 92 100" delay={delay + 0.45} duration={1.8} strokeWidth={1.1} opacity={0.45} />
        </svg>
      );

    case "mask":
      return (
        <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden>
          <DrawnPath d="M16 56 C 22 24, 42 12, 60 12 C 78 12, 98 24, 104 56 C 108 74, 100 96, 82 106 C 70 112, 50 112, 38 106 C 20 96, 12 74, 16 56 Z" delay={delay} duration={2.6} strokeWidth={1.8} />
          <DrawnPath d="M28 52 C 38 58, 48 56, 56 46 M64 46 C 72 56, 82 58, 92 52" delay={delay + 0.3} duration={1.8} strokeWidth={1.6} />
          <DrawnPath d="M48 78 C 54 86, 66 86, 72 78" delay={delay + 0.5} duration={1.3} strokeWidth={1.5} />
          <DrawnPath d="M36 34 C 44 28, 52 28, 58 34 M62 34 C 68 28, 76 28, 84 34" delay={delay + 0.65} duration={1.4} strokeWidth={1.2} opacity={0.6} />
          <DrawnPath d="M60 12 L 60 28 M40 68 L 80 68" delay={delay + 0.8} duration={1.2} strokeWidth={1.1} opacity={0.4} />
        </svg>
      );

    case "mandala":
      return (
        <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden>
          <DrawnCircle cx={60} cy={60} r={48} delay={delay} duration={2} strokeWidth={1.5} color={ink} />
          <DrawnCircle cx={60} cy={60} r={32} delay={delay + 0.12} duration={1.8} strokeWidth={1.3} color={ink} opacity={0.8} />
          <DrawnCircle cx={60} cy={60} r={16} delay={delay + 0.24} duration={1.5} strokeWidth={1.4} color={ink} />
          <DrawnPath d="M60 12 L 72 48 L 108 60 L 72 72 L 60 108 L 48 72 L 12 60 L 48 48 Z" delay={delay + 0.2} duration={2.6} strokeWidth={1.5} color={ink} />
          <DrawnPath d="M60 28 L 66 54 L 92 60 L 66 66 L 60 92 L 54 66 L 28 60 L 54 54 Z" delay={delay + 0.4} duration={2.2} strokeWidth={1.2} color={ink} opacity={0.7} />
          <DrawnPath d="M24 24 C 40 40, 40 80, 24 96 M96 24 C 80 40, 80 80, 96 96 M24 24 C 40 40, 80 40, 96 24 M24 96 C 40 80, 80 80, 96 96" delay={delay + 0.55} duration={2.4} strokeWidth={1} color={ink} opacity={0.45} />
        </svg>
      );

    case "stone-ring":
      return (
        <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden>
          <DrawnCircle cx={60} cy={60} r={46} delay={delay} duration={2.2} strokeWidth={1.6} />
          <DrawnPath d="M60 20 L 78 32 L 90 52 L 86 76 L 68 94 L 44 94 L 26 76 L 22 52 L 34 32 Z" delay={delay + 0.15} duration={2.4} strokeWidth={1.5} />
          <DrawnPath d="M60 34 L 72 42 L 78 56 L 72 70 L 60 78 L 48 70 L 42 56 L 48 42 Z" delay={delay + 0.35} duration={2} strokeWidth={1.3} opacity={0.8} />
          {[
            { c: "#2b6cff", a: -90 },
            { c: "#ffd400", a: -30 },
            { c: "#e11d2e", a: 30 },
            { c: "#7c3aed", a: 90 },
            { c: "#00c2a8", a: 150 },
            { c: "#f59e0b", a: 210 },
          ].map((s, i) => {
            const rad = ((s.a - 90) * Math.PI) / 180;
            return (
              <DrawnCircle
                key={s.c}
                cx={60 + Math.cos(rad) * 38}
                cy={60 + Math.sin(rad) * 38}
                r={5}
                delay={delay + 0.5 + i * 0.07}
                duration={1.1}
                strokeWidth={1.5}
                color={s.c}
              />
            );
          })}
          <DrawnCircle cx={60} cy={60} r={6} delay={delay + 0.95} duration={1.2} strokeWidth={1.6} color="#7c3aed" />
        </svg>
      );

    case "arc":
      return (
        <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden>
          <DrawnCircle cx={60} cy={60} r={46} delay={delay} duration={2} strokeWidth={1.8} color={ink} />
          <DrawnCircle cx={60} cy={60} r={34} delay={delay + 0.12} duration={1.8} strokeWidth={1.4} color={ink} opacity={0.75} />
          <DrawnCircle cx={60} cy={60} r={20} delay={delay + 0.24} duration={1.5} strokeWidth={1.6} color={ink} />
          <DrawnPath d="M60 20 L 60 40 M60 80 L 60 100 M20 60 L 40 60 M80 60 L 100 60" delay={delay + 0.35} duration={1.6} strokeWidth={1.5} color={ink} />
          <DrawnPath d="M34 34 L 46 46 M74 46 L 86 34 M34 86 L 46 74 M74 74 L 86 86" delay={delay + 0.5} duration={1.6} strokeWidth={1.3} color={ink} opacity={0.7} />
          <DrawnPath d="M48 60 L 56 52 L 64 68 L 72 48 L 76 60" delay={delay + 0.65} duration={1.8} strokeWidth={1.4} color={ink} />
          <DrawnCircle cx={60} cy={60} r={6} delay={delay + 0.8} duration={1.1} strokeWidth={1.5} color={ink} />
        </svg>
      );

    case "claw":
      return (
        <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden>
          <DrawnPath d="M28 20 C 32 50, 30 80, 26 110" delay={delay} duration={2} strokeWidth={2} />
          <DrawnPath d="M48 12 C 52 48, 50 82, 46 112" delay={delay + 0.15} duration={2.1} strokeWidth={2.2} />
          <DrawnPath d="M68 16 C 72 50, 70 84, 66 110" delay={delay + 0.3} duration={2} strokeWidth={2} />
          <DrawnPath d="M22 36 C 40 40, 60 38, 78 32" delay={delay + 0.45} duration={1.6} strokeWidth={1.3} opacity={0.55} />
          <DrawnPath d="M20 70 C 42 76, 64 74, 84 66" delay={delay + 0.6} duration={1.6} strokeWidth={1.3} opacity={0.45} />
          <DrawnPath d="M88 28 C 92 55, 90 85, 86 108" delay={delay + 0.4} duration={1.9} strokeWidth={1.6} opacity={0.7} />
          <DrawnPath d="M34 24 L 30 18 M54 16 L 50 10 M74 20 L 70 14" delay={delay + 0.75} duration={1.2} strokeWidth={1.4} />
        </svg>
      );

    case "portal":
      return (
        <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden>
          <DrawnCircle cx={60} cy={60} r={48} delay={delay} duration={2.2} strokeWidth={1.6} color={ink} />
          <DrawnPath d="M60 12 C 90 20, 108 40, 112 60 C 108 80, 90 100, 60 108 C 30 100, 12 80, 8 60 C 12 40, 30 20, 60 12" delay={delay + 0.15} duration={2.4} strokeWidth={1.3} color={ink} opacity={0.7} />
          <DrawnPath d="M20 60 C 35 35, 85 35, 100 60 C 85 85, 35 85, 20 60" delay={delay + 0.35} duration={2.2} strokeWidth={1.5} color={ink} />
          <DrawnPath d="M40 40 C 55 50, 65 50, 80 40 M40 80 C 55 70, 65 70, 80 80" delay={delay + 0.55} duration={1.6} strokeWidth={1.2} color={ink} opacity={0.65} />
          <DrawnPath d="M60 28 L 70 55 L 98 60 L 70 65 L 60 92 L 50 65 L 22 60 L 50 55 Z" delay={delay + 0.45} duration={2.3} strokeWidth={1.2} color={ink} opacity={0.55} />
          <DrawnCircle cx={60} cy={60} r={8} delay={delay + 0.75} duration={1.2} strokeWidth={1.5} color={ink} />
        </svg>
      );

    case "bow":
      return (
        <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden>
          <DrawnPath d="M28 16 C 70 30, 70 90, 28 104" delay={delay} duration={2.4} strokeWidth={1.8} />
          <DrawnPath d="M28 16 L 28 104" delay={delay + 0.2} duration={1.6} strokeWidth={1.5} />
          <DrawnPath d="M28 60 L 108 60" delay={delay + 0.35} duration={1.8} strokeWidth={1.6} />
          <DrawnPath d="M96 52 L 108 60 L 96 68" delay={delay + 0.55} duration={1.2} strokeWidth={1.5} />
          <DrawnPath d="M40 28 C 52 40, 52 80, 40 92" delay={delay + 0.45} duration={1.8} strokeWidth={1.2} opacity={0.55} />
          <DrawnPath d="M52 48 L 52 72 M64 52 L 64 68" delay={delay + 0.7} duration={1.3} strokeWidth={1.1} opacity={0.5} />
          <DrawnCircle cx={28} cy={16} r={3} delay={delay + 0.85} duration={0.9} strokeWidth={1.3} />
          <DrawnCircle cx={28} cy={104} r={3} delay={delay + 0.95} duration={0.9} strokeWidth={1.3} />
        </svg>
      );

    case "bifrost":
      return (
        <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden>
          <DrawnPath d="M20 100 C 40 70, 40 40, 60 20 C 80 40, 80 70, 100 100" delay={delay} duration={2.6} strokeWidth={1.8} color={ink} />
          <DrawnPath d="M28 100 C 44 76, 44 48, 60 32 C 76 48, 76 76, 92 100" delay={delay + 0.2} duration={2.4} strokeWidth={1.4} color={ink} opacity={0.75} />
          <DrawnPath d="M36 100 C 48 82, 48 56, 60 44 C 72 56, 72 82, 84 100" delay={delay + 0.4} duration={2.2} strokeWidth={1.2} color={ink} opacity={0.55} />
          <DrawnPath d="M20 100 L 100 100" delay={delay + 0.55} duration={1.4} strokeWidth={1.5} color={ink} />
          <DrawnPath d="M48 56 L 60 20 L 72 56 M54 72 L 60 44 L 66 72" delay={delay + 0.7} duration={1.8} strokeWidth={1.1} color={ink} opacity={0.5} />
          <DrawnCircle cx={60} cy={20} r={5} delay={delay + 0.85} duration={1.1} strokeWidth={1.4} color={ink} />
        </svg>
      );

    case "star":
      return (
        <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden>
          <DrawnPath d="M60 10 L 70 46 L 108 46 L 78 68 L 90 106 L 60 84 L 30 106 L 42 68 L 12 46 L 50 46 Z" delay={delay} duration={2.8} strokeWidth={1.7} color={ink} />
          <DrawnPath d="M60 28 L 66 48 L 88 48 L 70 62 L 76 84 L 60 70 L 44 84 L 50 62 L 32 48 L 54 48 Z" delay={delay + 0.25} duration={2.3} strokeWidth={1.3} color={ink} opacity={0.7} />
          <DrawnCircle cx={60} cy={60} r={10} delay={delay + 0.5} duration={1.3} strokeWidth={1.4} color={ink} />
          <DrawnPath d="M60 10 L 60 110 M12 46 L 108 46 M30 106 L 90 20 M90 106 L 30 20" delay={delay + 0.35} duration={2.2} strokeWidth={0.9} color={ink} opacity={0.3} />
        </svg>
      );

    default:
      return null;
  }
}

function MarvelLogoPaths() {
  return (
    <svg viewBox="0 0 560 140" className="h-full w-full" fill="none" aria-hidden>
      <DrawnPath d="M12 18 H 548 V 122 H 12 Z" delay={0} duration={2.6} strokeWidth={3} opacity={0.9} />
      <DrawnPath d="M20 26 H 540 V 114 H 20 Z" delay={0.12} duration={2.3} strokeWidth={1.2} opacity={0.4} />
      <DrawnPath d="M36 108 V 32 H 56 L 80 84 L 104 32 H 124 V 108 H 108 V 56 L 88 108 H 72 L 52 56 V 108 Z" delay={0.2} duration={2.8} strokeWidth={2} />
      <DrawnPath d="M144 108 L 174 32 H 192 L 222 108 H 204 L 196 88 H 170 L 162 108 Z M176 72 H 190 L 183 50 Z" delay={0.4} duration={2.5} strokeWidth={2} />
      <DrawnPath d="M242 108 V 32 H 286 C 312 32, 324 48, 324 66 C 324 82, 314 94, 298 98 L 324 108 H 304 L 282 100 H 260 V 108 Z M260 48 V 84 H 284 C 296 84, 304 78, 304 66 C 304 54, 296 48, 284 48 Z" delay={0.6} duration={2.8} strokeWidth={2} />
      <DrawnPath d="M344 32 H 362 L 384 84 L 406 32 H 424 L 392 108 H 376 Z" delay={0.8} duration={2.3} strokeWidth={2} />
      <DrawnPath d="M444 32 H 508 V 48 H 462 V 62 H 498 V 78 H 462 V 92 H 508 V 108 H 444 Z" delay={1} duration={2.4} strokeWidth={2} />
      <DrawnPath d="M524 32 H 542 V 92 H 556 V 108 H 524 Z" delay={1.15} duration={1.8} strokeWidth={2} />
      <DrawnPath d="M40 118 C 140 130, 240 122, 300 116 C 380 108, 460 128, 520 118" delay={1.3} duration={2.2} strokeWidth={1.4} opacity={0.55} />
      <DrawnPath d="M48 12 C 160 2, 280 16, 380 8 C 450 2, 500 10, 520 14" delay={1.45} duration={2} strokeWidth={1.2} opacity={0.4} />
      <DrawnPath d="M12 18 L 12 8 M12 18 L 2 18 M548 18 L 548 8 M548 18 L 558 18 M12 122 L 12 132 M12 122 L 2 122 M548 122 L 548 132 M548 122 L 558 122" delay={1.6} duration={1.6} strokeWidth={1.5} opacity={0.5} />
    </svg>
  );
}

function InfinityStoneNode({ color, delay }: { color: string; delay: number }) {
  return (
    <svg viewBox="0 0 40 40" className="h-7 w-7 sm:h-9 sm:w-9 md:h-11 md:w-11" aria-hidden>
      <DrawnPath d="M20 4 L 32 12 L 36 26 L 28 36 L 12 36 L 4 26 L 8 12 Z" delay={delay} duration={2} strokeWidth={1.6} color={color} />
      <DrawnPath d="M20 10 L 28 16 L 30 24 L 24 30 L 16 30 L 10 24 L 12 16 Z" delay={delay + 0.2} duration={1.6} strokeWidth={1.2} color={color} opacity={0.7} />
      <DrawnCircle cx={20} cy={20} r={4} delay={delay + 0.4} duration={1.2} strokeWidth={1.4} color={color} />
    </svg>
  );
}

/** Full-bleed decorative path mesh — many strokes, scroll-linked */
function PathMesh({
  progress,
  variant,
}: {
  progress: ReturnType<typeof useTransform<number, number>>;
  variant: "left" | "right" | "web" | "orbit";
}) {
  if (variant === "left") {
    return (
      <svg
        className="absolute left-0 top-0 h-full w-[28%] opacity-[0.07] sm:opacity-[0.09] md:opacity-[0.12]"
        viewBox="0 0 120 2800"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M90 30 C 40 120, 20 220, 50 320 C 90 420, 10 520, 40 620 C 80 720, 20 820, 55 920
             C 95 1020, 15 1120, 45 1220 C 85 1320, 25 1420, 60 1520 C 100 1620, 30 1720, 50 1820
             C 90 1920, 20 2020, 55 2120 C 95 2220, 25 2320, 50 2420 C 80 2520, 30 2620, 60 2720"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          style={{ pathLength: progress }}
        />
        <motion.path
          d="M70 80 C 30 180, 60 280, 25 380 C 55 480, 15 580, 45 680 C 75 780, 20 880, 50 980
             C 80 1080, 25 1180, 55 1280 C 85 1380, 30 1480, 60 1580 C 90 1680, 35 1780, 65 1880
             C 95 1980, 40 2080, 70 2180 C 100 2280, 45 2380, 75 2480 C 105 2580, 50 2680, 80 2780"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity={0.6}
          style={{ pathLength: progress }}
        />
        <motion.path
          d="M40 200 H 100 M30 400 H 95 M45 600 H 105 M25 800 H 90 M50 1000 H 110
             M35 1200 H 100 M40 1400 H 105 M30 1600 H 95 M45 1800 H 110 M35 2000 H 100
             M40 2200 H 105 M30 2400 H 95 M50 2600 H 110"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.9"
          opacity={0.4}
          style={{ pathLength: progress }}
        />
      </svg>
    );
  }

  if (variant === "right") {
    return (
      <svg
        className="absolute right-0 top-0 h-full w-[28%] opacity-[0.07] sm:opacity-[0.09] md:opacity-[0.12]"
        viewBox="0 0 120 2800"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M30 40 C 80 140, 100 240, 70 340 C 30 440, 110 540, 80 640 C 40 740, 100 840, 65 940
             C 25 1040, 105 1140, 75 1240 C 35 1340, 95 1440, 60 1540 C 20 1640, 90 1740, 70 1840
             C 30 1940, 100 2040, 65 2140 C 25 2240, 95 2340, 70 2440 C 40 2540, 90 2640, 60 2740"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          style={{ pathLength: progress }}
        />
        <motion.path
          d="M50 100 C 90 200, 60 300, 95 400 C 65 500, 105 600, 75 700 C 45 800, 100 900, 70 1000
             C 40 1100, 95 1200, 65 1300 C 35 1400, 90 1500, 60 1600 C 30 1700, 85 1800, 55 1900
             C 25 2000, 80 2100, 50 2200 C 20 2300, 75 2400, 45 2500 C 15 2600, 70 2700, 40 2780"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity={0.6}
          style={{ pathLength: progress }}
        />
        <motion.path
          d="M20 220 H 80 M25 420 H 90 M15 620 H 85 M20 820 H 95 M10 1020 H 80
             M20 1220 H 90 M15 1420 H 85 M25 1620 H 95 M20 1820 H 80 M15 2020 H 90
             M20 2220 H 85 M25 2420 H 95 M15 2620 H 80"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.9"
          opacity={0.4}
          style={{ pathLength: progress }}
        />
      </svg>
    );
  }

  if (variant === "web") {
    return (
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.04] sm:opacity-[0.055] md:opacity-[0.07]"
        viewBox="0 0 400 2800"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 200 L 200 400 L 400 200 M0 600 L 200 800 L 400 600 M0 1000 L 200 1200 L 400 1000
             M0 1400 L 200 1600 L 400 1400 M0 1800 L 200 2000 L 400 1800 M0 2200 L 200 2400 L 400 2200
             M0 2600 L 200 2750 L 400 2600"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          style={{ pathLength: progress }}
        />
        <motion.path
          d="M200 0 L 200 2800 M100 0 L 100 2800 M300 0 L 300 2800"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity={0.5}
          style={{ pathLength: progress }}
        />
        <motion.path
          d="M0 400 L 400 800 M0 800 L 400 1200 M0 1200 L 400 1600 M0 1600 L 400 2000
             M0 2000 L 400 2400 M0 2400 L 400 2750 M400 400 L 0 800 M400 800 L 0 1200
             M400 1200 L 0 1600 M400 1600 L 0 2000 M400 2000 L 0 2400"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.7"
          opacity={0.35}
          style={{ pathLength: progress }}
        />
      </svg>
    );
  }

  // orbit rings scattered down the page
  return (
    <svg
      className="absolute left-1/2 top-0 h-full w-[min(100%,640px)] -translate-x-1/2 opacity-[0.05] sm:opacity-[0.07] md:opacity-[0.09]"
      viewBox="0 0 200 2800"
      preserveAspectRatio="none"
    >
      {[180, 520, 860, 1200, 1540, 1880, 2220, 2560].map((cy, i) => (
        <motion.ellipse
          key={cy}
          cx={100}
          cy={cy}
          rx={70 - (i % 3) * 10}
          ry={28 + (i % 2) * 8}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          style={{ pathLength: progress }}
        />
      ))}
      {[180, 520, 860, 1200, 1540, 1880, 2220, 2560].map((cy, i) => (
        <motion.path
          key={`spoke-${cy}`}
          d={`M100 ${cy - 30} L 100 ${cy + 30} M70 ${cy} L 130 ${cy} M78 ${cy - 18} L 122 ${cy + 18} M122 ${cy - 18} L 78 ${cy + 18}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity={0.55}
          style={{ pathLength: progress }}
        />
      ))}
    </svg>
  );
}

/**
 * MCU atmosphere — dense SVG pathLength drawings, no images.
 */
export function TimelineAtmosphere() {
  const { scrollYProgress } = useScroll();
  const logoY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const figuresY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const spine = useTransform(scrollYProgress, [0, 0.92], [0.06, 1]);
  const leftBranch = useTransform(scrollYProgress, [0.02, 0.95], [0, 1]);
  const rightBranch = useTransform(scrollYProgress, [0.06, 1], [0, 1]);
  const mesh = useTransform(scrollYProgress, [0, 1], [0.05, 1]);
  const meshSlow = useTransform(scrollYProgress, [0.08, 1], [0, 1]);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden text-[var(--pt-ink)] [contain:paint_layout] [content-visibility:auto]"
      aria-hidden
    >
      <div className="pt-atmosphere-wash absolute inset-0" />

      {/* Dense path meshes */}
      <PathMesh progress={mesh} variant="web" />
      <PathMesh progress={meshSlow} variant="left" />
      <PathMesh progress={meshSlow} variant="right" />
      <PathMesh progress={spine} variant="orbit" />

      {/* Multi-path saga spine + branches */}
      <svg
        className="absolute left-1/2 top-0 h-full w-[min(100%,900px)] -translate-x-1/2 opacity-[0.09] sm:opacity-[0.12] md:opacity-[0.15]"
        viewBox="0 0 200 2800"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M100 20
             C 60 180, 140 320, 100 480
             C 55 640, 145 800, 100 960
             C 70 1120, 130 1280, 100 1440
             C 50 1600, 150 1760, 100 1920
             C 65 2080, 135 2240, 100 2400
             C 80 2520, 120 2640, 100 2760"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          style={{ pathLength: spine }}
        />
        <motion.path
          d="M100 120 C 70 160, 70 220, 100 260 C 130 300, 130 360, 100 400
             C 70 440, 70 500, 100 540 C 130 580, 130 640, 100 680
             C 70 720, 70 780, 100 820 C 130 860, 130 920, 100 960
             C 70 1000, 70 1060, 100 1100 C 130 1140, 130 1200, 100 1240
             C 70 1280, 70 1340, 100 1380 C 130 1420, 130 1480, 100 1520
             C 70 1560, 70 1620, 100 1660 C 130 1700, 130 1760, 100 1800
             C 70 1840, 70 1900, 100 1940 C 130 1980, 130 2040, 100 2080
             C 70 2120, 70 2180, 100 2220 C 130 2260, 130 2320, 100 2360
             C 70 2400, 70 2460, 100 2500 C 130 2540, 130 2600, 100 2640"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
          opacity={0.45}
          style={{ pathLength: spine }}
        />
        <motion.path
          d="M100 200 C 40 240, 20 320, 30 400
             M100 520 C 30 560, 10 640, 25 720
             M100 840 C 45 900, 15 980, 35 1060
             M100 1200 C 40 1260, 18 1340, 28 1420
             M100 1560 C 35 1620, 12 1700, 30 1780
             M100 1920 C 45 1980, 20 2060, 32 2140
             M100 2280 C 40 2340, 15 2420, 28 2500
             M100 360 C 50 400, 35 460, 45 520
             M100 1000 C 55 1040, 40 1100, 50 1160
             M100 1680 C 55 1720, 35 1780, 48 1840
             M100 2440 C 55 2480, 40 2540, 52 2600"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          opacity={0.55}
          style={{ pathLength: leftBranch }}
        />
        <motion.path
          d="M100 260 C 160 300, 180 380, 170 460
             M100 580 C 170 620, 190 700, 175 780
             M100 900 C 155 960, 185 1040, 165 1120
             M100 1260 C 160 1320, 182 1400, 172 1480
             M100 1620 C 165 1680, 188 1760, 170 1840
             M100 1980 C 155 2040, 180 2120, 168 2200
             M100 2340 C 160 2400, 185 2480, 172 2560
             M100 420 C 150 460, 165 520, 155 580
             M100 1080 C 145 1120, 165 1180, 150 1240
             M100 1740 C 150 1780, 165 1840, 152 1900
             M100 2500 C 145 2540, 165 2600, 155 2660"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          opacity={0.55}
          style={{ pathLength: rightBranch }}
        />
        <motion.path
          d="M70 400 H 130 M60 720 H 140 M65 1060 H 135 M55 1420 H 145 M60 1780 H 140 M55 2140 H 145 M65 2500 H 135
             M75 280 H 125 M68 560 H 132 M72 900 H 128 M62 1240 H 138 M70 1600 H 130 M64 1960 H 136 M72 2320 H 128"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity={0.35}
          style={{ pathLength: spine }}
        />
        {/* Node dots along spine */}
        {[200, 480, 760, 1040, 1320, 1600, 1880, 2160, 2440, 2700].map((y) => (
          <motion.circle
            key={y}
            cx={100}
            cy={y}
            r={3.5}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            style={{ pathLength: spine }}
          />
        ))}
      </svg>

      {/* Marvel logos */}
      <motion.div
        className="absolute left-1/2 top-[4vh] w-[min(94vw,760px)] -translate-x-1/2"
        style={{ y: logoY }}
      >
        <div className="opacity-[0.08] md:opacity-[0.11]">
          <MarvelLogoPaths />
        </div>
      </motion.div>

      <div className="absolute left-1/2 top-[34%] w-[min(72vw,560px)] -translate-x-1/2 rotate-[-5deg] opacity-[0.045]">
        <MarvelLogoPaths />
      </div>

      <div className="absolute left-1/2 top-[68%] w-[min(60vw,440px)] -translate-x-1/2 rotate-[4deg] opacity-[0.035]">
        <MarvelLogoPaths />
      </div>

      {/* Dense figure SVGs */}
      <motion.div className="absolute inset-0" style={{ y: figuresY }}>
        {FIGURES.map((f) => (
          <div
            key={`${f.id}-${f.x}-${f.y}`}
            className="absolute h-11 w-11 opacity-[0.08] sm:h-[4.25rem] sm:w-[4.25rem] sm:opacity-[0.12] md:h-[6.5rem] md:w-[6.5rem] md:opacity-[0.17]"
            style={{
              left: f.x,
              top: f.y,
              rotate: `${f.rotate}deg`,
              scale: f.scale,
              color: f.color ?? "var(--pt-ink)",
            }}
          >
            <PathFigureSvg id={f.id} delay={f.delay} color={f.color} />
          </div>
        ))}
      </motion.div>

      {/* Infinity stone nodes */}
      {STONE_NODES.map((s) => (
        <div
          key={`${s.color}-${s.x}-${s.y}`}
          className="absolute"
          style={{ left: s.x, top: s.y }}
        >
          <div
            className="pt-stone-float scale-75 opacity-65 sm:scale-90 sm:opacity-75 md:scale-100 md:opacity-85"
            style={{ animationDelay: `${s.delay}s` }}
          >
            <InfinityStoneNode color={s.color} delay={s.delay} />
          </div>
        </div>
      ))}
    </div>
  );
}
