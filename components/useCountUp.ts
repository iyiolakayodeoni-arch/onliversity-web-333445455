"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 → `end` once `active` becomes true.
 * Uses requestAnimationFrame with an ease-out curve. No deps.
 *
 * Usage:
 *   const ref = useScrollAnimation();
 *   const xp = useCountUp(640, true);
 */
export function useCountUp(end: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!active || startedRef.current) return;
    startedRef.current = true;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(end);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setValue(Math.round(end * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, end, duration]);

  return value;
}
