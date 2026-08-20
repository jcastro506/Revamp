"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    if (!isDragging) return;

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      updateFromClientX(clientX);
    };
    const stop = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };
  }, [isDragging, updateFromClientX]);

  return (
    <div
      ref={containerRef}
      className="group relative aspect-[16/10] w-full select-none overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl"
      onMouseDown={(e) => {
        setIsDragging(true);
        updateFromClientX(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        updateFromClientX(e.touches[0].clientX);
      }}
    >
      {/* After (full, underneath) */}
      <Image
        src={afterSrc || "/placeholder.svg"}
        alt={afterAlt}
        fill
        priority
        sizes="(max-width: 768px) 100vw, 1000px"
        className="pointer-events-none object-cover"
        draggable={false}
      />
      <div className="pointer-events-none absolute right-4 top-4 z-20 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-black">
        After
      </div>

      {/* Before (revealed on the left via clip-path so the image never squishes) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc || "/placeholder.svg"}
          alt={beforeAlt}
          fill
          sizes="(max-width: 768px) 100vw, 1000px"
          className="pointer-events-none object-cover"
          draggable={false}
        />
        <div className="pointer-events-none absolute left-4 top-4 z-20 rounded-full bg-black/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white ring-1 ring-white/20">
          Before
        </div>
      </div>

      {/* Divider + handle */}
      <div
        className="absolute inset-y-0 z-30 w-0.5 bg-white"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white text-black shadow-lg ring-4 ring-white/30 transition-transform group-hover:scale-105">
          <MoveHorizontal className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
