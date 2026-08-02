"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

function isCharacterPortraitSrc(src: string) {
  return src.includes("/images/characters/");
}

type SafeNeoImageProps = {
  src: string;
  fallback?: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
} & (
  | { fill: true; width?: never; height?: never }
  | { fill?: false; width: number; height: number }
);

export function SafeNeoImage({
  src,
  fallback,
  alt,
  width,
  height,
  className,
  priority,
  sizes,
  fill,
}: SafeNeoImageProps) {
  const [current, setCurrent] = useState(src);
  const [failed, setFailed] = useState(false);
  const allowFallback = Boolean(fallback) && !isCharacterPortraitSrc(src);

  if (failed) {
    return (
      <div
        className={cn(
          "flex min-h-[120px] items-center justify-center bg-[var(--surface)] font-display text-4xl text-[var(--fire-bright)]",
          fill && "absolute inset-0 min-h-0",
          className
        )}
      >
        ★
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={current}
        alt={alt}
        fill
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
