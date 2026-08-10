"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 → `end` while `active` is true. Restarts from 0
 * whenever `active` flips false → true (so per-route re-splashes re-run it).
 * Uses requestAnimationFrame with an ease-out curve. Honors reduced-motion.
 */
export function useCountUp(end: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) {
      setValue(0);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(end);
      return;
    }

    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setValue(Math.round(end * eased));
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
      else rafRef.current = null;
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [active, end, duration]);

  return value;
}
