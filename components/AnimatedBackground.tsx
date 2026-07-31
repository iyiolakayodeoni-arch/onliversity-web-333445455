"use client";

import { useMemo } from "react";

/**
 * Persistent, fixed, full-viewport motion layer.
 * Sits behind all content (z-0) and gives the whole site an
 * "always-alive" esports/arena feel — drifting aurora energy,
 * a rising particle field, and a moving grid.
 *
 * Purely decorative: aria-hidden, pointer-events: none.
 */
export function AnimatedBackground() {
  // Stable random particle layout per mount (no SSR mismatch — same on client).
  const particles = useMemo(
    () =>
      Array.from({ length: 26 }).map((_, i) => {
        const colors = [
          "rgba(57,255,106,0.55)",
          "rgba(33,230,193,0.5)",
          "rgba(160,107,255,0.45)",
          "rgba(242,192,120,0.4)",
        ];
        return {
          id: i,
          left: Math.round((i * 137.5) % 100),
          bottom: -Math.round((i * 53) % 30) - 4,
          size: 1 + ((i * 7) % 3),
          delay: (i * 1.37) % 14,
          dur: 12 + ((i * 3) % 16),
          drift: ((i % 5) - 2) * 8,
          op: 0.25 + ((i % 4) * 0.12),
          color: colors[i % colors.length],
        };
      }),
    []
  );

  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-background pointer-events-none">
      {/* Moving arena grid */}
      <div className="absolute inset-0 arena-grid opacity-50" />

      {/* Drifting aurora energy orbs */}
      <div className="aurora-a absolute -top-32 -left-24 h-[520px] w-[520px] rounded-full blur-[120px]"
           style={{ background: "radial-gradient(circle, rgba(57,255,106,0.16), transparent 65%)" }} />
      <div className="aurora-b absolute top-1/3 -right-32 h-[560px] w-[560px] rounded-full blur-[130px]"
           style={{ background: "radial-gradient(circle, rgba(160,107,255,0.13), transparent 65%)" }} />
      <div className="aurora-c absolute -bottom-40 left-1/4 h-[480px] w-[480px] rounded-full blur-[120px]"
           style={{ background: "radial-gradient(circle, rgba(33,230,193,0.12), transparent 65%)" }} />

      {/* Rising particle field */}
      {particles.map((p) => (
        <span key={p.id} className="particle"
          style={{
            left: `${p.left}%`,
            bottom: `${p.bottom}px`,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 8px ${p.color}`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
            // @ts-ignore — custom props for the drift keyframe
            "--p-x": `${p.drift}px`,
            "--p-op": p.op,
          }}
        />
      ))}

      {/* Top + bottom vignette to keep content legible */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
