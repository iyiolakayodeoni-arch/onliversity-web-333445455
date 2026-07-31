"use client";

import { useId } from "react";
import { useCountUp } from "./useCountUp";

export interface ProgressRingProps {
  /** target value 0–100 */
  value: number;
  /** flips the animation on when true */
  active: boolean;
  size?: number;
  stroke?: number;
  /** stroke gradient stops */
  color?: string;
  color2?: string;
  /** optional override for the big center number (e.g. "Lv 3") */
  centerLabel?: string;
  centerPrefix?: string;
  centerSuffix?: string;
  /** small caption under the number */
  caption?: string;
  duration?: number;
  className?: string;
}

/**
 * Animated SVG conic-style progress ring.
 * The arc fills from 0 → `value` in lockstep with a count-up number,
 * finished with a rounded gradient stroke + glow.
 */
export function ProgressRing({
  value,
  active,
  size = 140,
  stroke = 11,
  color = "#39ff6a",
  color2 = "#21e6c1",
  centerLabel,
  centerPrefix = "",
  centerSuffix = "%",
  caption,
  duration = 1600,
  className = "",
}: ProgressRingProps) {
  const raw = useId();
  const id = `pr${raw.replace(/[^a-zA-Z0-9]/g, "")}`;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const center = size / 2;

  const v = useCountUp(Math.max(0, Math.min(100, Math.round(value))), active, duration);
  const offset = c - (v / 100) * c;

  return (
    <div className={`relative flex flex-col items-center ${className}`} style={{ width: size }}>
      <div className="relative" style={{ width: size, height: size }}>
        {/* soft conic glow behind */}
        <div
          className="absolute inset-0 rounded-full opacity-40 blur-md"
          style={{ background: `conic-gradient(from -90deg, ${color}, transparent 60%)` }}
        />
        <svg width={size} height={size} className="relative -rotate-90">
          <defs>
            <linearGradient id={`${id}-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={color} />
              <stop offset="100%" stopColor={color2} />
            </linearGradient>
          </defs>
          {/* track */}
          <circle
            cx={center}
            cy={center}
            r={r}
            fill="none"
            stroke="rgba(57,255,106,0.08)"
            strokeWidth={stroke}
          />
          {/* progress arc */}
          <circle
            cx={center}
            cy={center}
            r={r}
            fill="none"
            stroke={`url(#${id}-grad)`}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={offset}
            style={{ filter: `drop-shadow(0 0 5px ${color})`, transition: "stroke-dashoffset 0.08s linear" }}
          />
        </svg>

        {/* center content (un-rotated) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {centerLabel ? (
            <span className="font-display text-[20px] font-bold leading-none text-foreground">
              {centerLabel}
            </span>
          ) : (
            <span className="font-display text-[26px] font-bold leading-none text-foreground stat-display">
              {centerPrefix}
              {v}
              {centerSuffix}
            </span>
          )}
          {caption && (
            <span className="mt-1 font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
              {caption}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
