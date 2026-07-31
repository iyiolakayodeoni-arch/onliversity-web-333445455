"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ProgressRing } from "./ProgressRing";

/* Three.js is heavy + browser-only → render the canvas client-side only. */
const Trophy3D = dynamic(
  () => import("./Trophy3D").then((m) => m.Trophy3D),
  {
    ssr: false,
    loading: () => (
      <div className="grid h-full place-items-center">
        <div className="flex flex-col items-center gap-3">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary/20 border-t-primary" />
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Spawning trophy…</p>
        </div>
      </div>
    ),
  }
);

export function RankProgressCard() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setActive(true), 200);
    return () => clearTimeout(t);
  }, []);

  const levelXp = 1280;
  const nextLevelXp = 2000;
  const levelPct = Math.round((levelXp / nextLevelXp) * 100);

  return (
    <div className="hud-border relative mb-8 overflow-hidden rounded-xl border border-border bg-surface-elevated/60 p-5 backdrop-blur sm:p-7">
      {/* ambient energy */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[120%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(57,255,106,0.10),transparent_60%)]" />

      <div className="relative z-10 grid items-center gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        {/* ── Trophy ── */}
        <div className="relative">
          <div className="relative h-[280px] w-full sm:h-[320px]">
            <Trophy3D className="h-full w-full" />
          </div>
          <p className="mt-1 text-center font-mono text-[9px] uppercase tracking-[0.2em] text-muted/70">
            ✦ Drag to inspect
          </p>
        </div>

        {/* ── Rank + rings ── */}
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary live-dot" /> Rank • Season One
            </span>
            <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-gold">
              Tier III
            </span>
          </div>

          <h2 className="mt-3 font-display text-[28px] font-bold leading-none tracking-tight text-foreground sm:text-[34px]">
            Rising <span className="neon-text">Star</span>
          </h2>
          <p className="mt-1.5 text-sm text-muted">
            You&apos;re <span className="text-primary">720 XP</span> from <span className="text-foreground">All-Star</span>. Keep logging matches to rank up.
          </p>

          {/* level XP bar */}
          <div className="mt-5">
            <div className="mb-1.5 flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-muted">
              <span className="text-primary">Level 3</span>
              <span>{levelXp} / {nextLevelXp} XP</span>
            </div>
            <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-background border border-border">
              <div
                className="xp-fill relative h-full rounded-full"
                style={{
                  // @ts-ignore
                  "--xp": `${levelPct}%`,
                  width: active ? `${levelPct}%` : undefined,
                  background: "linear-gradient(90deg, var(--color-primary), var(--color-electric))",
                  boxShadow: "0 0 14px rgba(57,255,106,0.5)",
                  transition: "width 1.4s cubic-bezier(0.16,1,0.3,1)",
                }}
              />
            </div>
          </div>

          {/* rings */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-5 sm:justify-start sm:gap-7">
            <ProgressRing
              value={64}
              active={active}
              caption="Season XP"
              color="#39ff6a"
              color2="#21e6c1"
            />
            <ProgressRing
              value={72}
              active={active}
              caption="Stage 3"
              color="#ffd23f"
              color2="#21e6c1"
            />
            <ProgressRing
              value={48}
              active={active}
              caption="Rank pts"
              color="#a06bff"
              color2="#ff3df0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
