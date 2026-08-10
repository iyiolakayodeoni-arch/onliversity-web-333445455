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
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{
        background:
          "radial-gradient(1200px 800px at 50% 40%, rgba(14,40,22,0.45) 0%, rgba(7,13,9,0.85) 55%, #05080a 100%)",
      }}
    >
      {/* Moving arena grid — covers the FULL viewport (inset-0) without hard-coded sizes */}
      <div
        className="absolute arena-grid"
        style={{ inset: "-10%" /* bleed past edges so drift never shows a seam */, opacity: 0.45 }}
      />

      {/* Drifting aurora energy orbs — viewport-sized with vw min() so they
          NEVER get vertically cropped on short mobile screens. */}
      <div
        className="aurora-a absolute"
        style={{
          top: "-18%",
          left: "-12%",
          width: "min(900px, 90vw)",
          height: "min(900px, 90vw)",
          borderRadius: "9999px",
          filter: "blur(140px)",
          background: "radial-gradient(circle, rgba(57,255,106,0.18), transparent 65%)",
        }}
      />
      <div
        className="aurora-b absolute"
        style={{
          top: "8%",
          right: "-18%",
          width: "min(900px, 90vw)",
          height: "min(900px, 90vw)",
          borderRadius: "9999px",
          filter: "blur(150px)",
          background: "radial-gradient(circle, rgba(160,107,255,0.15), transparent 65%)",
        }}
      />
      <div
        className="aurora-c absolute"
        style={{
          bottom: "-20%",
          left: "18%",
          width: "min(820px, 85vw)",
          height: "min(820px, 85vw)",
          borderRadius: "9999px",
          filter: "blur(140px)",
          background: "radial-gradient(circle, rgba(33,230,193,0.14), transparent 65%)",
        }}
      />

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

      {/* Top + bottom vignette to keep content legible — sized in vh so they never crop */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0"
        style={{ height: "35vh", background: "linear-gradient(to bottom, #05080a, transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0"
        style={{ height: "40vh", background: "linear-gradient(to top, #05080a, transparent)" }}
      />
    </div>
  );
}
