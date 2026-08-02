"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

function isCharacterPortraitSrc(src: string) {
  return src.includes("/images/characters/");
}

export function SafeNeoImage({
  src,
  fallback,
  alt,
  width,
  height,
  className,
  priority,
  sizes,
}: {
  src: string;
  fallback?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const [current, setCurrent] = useState(src);
  const [failed, setFailed] = useState(false);
  const allowFallback = Boolean(fallback) && !isCharacterPortraitSrc(src);

  if (failed) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-[var(--surface)] font-display text-4xl text-[var(--fire-bright)] min-h-[120px]",
          className
        )}
      >
        ★
      </div>
    );
  }

  return (
    <Image
      src={current}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
      priority={priority}
      onError={() => {
        if (allowFallback && fallback && current !== fallback) setCurrent(fallback);
        else setFailed(true);
      }}
    />
  );
}
