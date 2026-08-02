"use client";

import { useEffect, useRef } from "react";

interface Fireball {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  trail: { x: number; y: number }[];
  flicker: number;
}

export function FireballBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let balls: Fireball[] = [];
    let raf = 0;

    const spawn = (): Fireball => ({
      x: Math.random() * w,
      y: -40 - Math.random() * 120,
      vx: (Math.random() - 0.5) * 1.2,
      vy: Math.random() * 2.5 + 2,
      radius: Math.random() * 14 + 8,
      trail: [],
      flicker: Math.random() * Math.PI * 2,
    });

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      const count = Math.min(28, Math.floor(w / 45));
      balls = Array.from({ length: count }, spawn);
    };

    const drawFireball = (b: Fireball) => {
      const len = b.trail.length;
      for (let i = 0; i < len; i++) {
        const t = b.trail[i];
        const alpha = (i / len) * 0.35;
        const r = b.radius * (i / len) * 0.9;
        const grad = ctx.createRadialGradient(t.x, t.y, 0, t.x, t.y, r);
        grad.addColorStop(0, `rgba(255, 180, 60, ${alpha})`);
        grad.addColorStop(0.5, `rgba(255, 80, 20, ${alpha * 0.5})`);
        grad.addColorStop(1, "rgba(255, 40, 0, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(t.x, t.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      const flick = 0.85 + Math.sin(b.flicker) * 0.15;
      const core = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius * flick);
      core.addColorStop(0, "rgba(255, 244, 163, 0.95)");
      core.addColorStop(0.25, "rgba(255, 170, 51, 0.85)");
      core.addColorStop(0.55, "rgba(255, 107, 53, 0.6)");
      core.addColorStop(0.85, "rgba(220, 38, 38, 0.25)");
      core.addColorStop(1, "rgba(255, 69, 0, 0)");

      ctx.fillStyle = core;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.radius * flick, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "rgba(255, 255, 220, 0.9)";
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.radius * 0.25, 0, Math.PI * 2);
      ctx.fill();
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);

      for (const b of balls) {
        b.trail.push({ x: b.x, y: b.y });
        if (b.trail.length > 18) b.trail.shift();

        b.x += b.vx;
        b.y += b.vy;
        b.vy += 0.02;
        b.flicker += 0.12;

        if (b.y > h + 60 || b.x < -80 || b.x > w + 80) {
          Object.assign(b, spawn());
        }

        drawFireball(b);
      }

      raf = requestAnimationFrame(tick);
    };

    resize();
    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none"
      aria-hidden
    />
  );
}
