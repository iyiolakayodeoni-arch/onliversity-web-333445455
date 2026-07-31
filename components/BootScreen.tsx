"use client";

import { useEffect, useState } from "react";
import { LogoSplash } from "./Logo";
import { useCountUp } from "./useCountUp";

/**
 * First-load boot screen.
 *
 * Shows the Onliversity splash logo + an animated progress bar, locks scroll,
 * then lifts the curtain and fades the page in. Renders the overlay during SSR
 * so the very first paint is the logo (no content flash), and matches on
 * hydration. It only runs once per full page load — client-side navigations
 * keep the layout mounted so it won't re-appear.
 *
 * The content wrapper is faded with opacity ONLY (no transform), so it never
 * breaks the sticky nav / fixed background.
 */
export function BootScreen({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(false);
  const [unmount, setUnmount] = useState(false);
  const pct = useCountUp(100, true, 1500);

  useEffect(() => {
    const t1 = setTimeout(() => setDone(true), 1700);
    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    if (!done) return;
    const t2 = setTimeout(() => setUnmount(true), 950);
    return () => clearTimeout(t2);
  }, [done]);

  // lock scroll while booting
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = done ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [done]);

  return (
    <>
      {/* Overlay curtain */}
      <div
        aria-hidden={done}
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background ${
          unmount ? "hidden" : ""
        }`}
        style={{
          transform: done ? "translateY(-100%)" : "translateY(0)",
          opacity: done ? 0 : 1,
          transition: "transform 850ms cubic-bezier(0.76,0,0.24,1), opacity 600ms ease",
        }}
      >
        {/* ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(57,255,106,0.16),transparent_65%)] blur-2xl" />

        <div className="loader-pop relative flex flex-col items-center">
          <div className="float">
            <LogoSplash size={132} />
          </div>

          <p className="mt-8 font-display text-[22px] font-bold tracking-[0.22em] text-foreground">
            ONLIVERSITY
          </p>
          <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
            Esports × Academy
          </p>

          {/* progress */}
          <div className="mt-8 w-[230px] max-w-[70vw]">
            <div className="mb-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
              <span>Loading Season One</span>
              <span className="stat-display tabular-nums">{pct}%</span>
            </div>
            <div className="h-[3px] w-full overflow-hidden rounded-full bg-border">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${pct}%`,
                  background: "linear-gradient(90deg, var(--color-primary), var(--color-electric))",
                  boxShadow: "0 0 12px rgba(57,255,106,0.6)",
                  transition: "width 0.08s linear",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Page content — opacity-only fade so sticky/fixed keep working */}
      <div
        style={{
          opacity: done ? 1 : 0,
          transition: "opacity 800ms cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {children}
      </div>
    </>
  );
}
