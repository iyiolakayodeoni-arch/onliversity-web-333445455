"use client";

import { Logo } from "./Logo";

/**
 * SessionArt — a framed, on-brand illustration block.
 *
 * Renders an illustration inside a HUD-style frame with a live label,
 * the Onliversity logo badge, and a caption bar — the "mirror session"
 * vibe used on the download page and across the homepage.
 */
interface SessionArtProps {
  src: string;
  alt: string;
  label: string;
  caption: string;
  logoBadge?: boolean;
  className?: string;
  aspect?: string;
}

export function SessionArt({
  src,
  alt,
  label,
  caption,
  logoBadge = true,
  className = "",
  aspect = "1408 / 768",
}: SessionArtProps) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-[24px] border border-border bg-surface shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        style={{ aspectRatio: aspect }}
      />

      {/* Bottom blend so the caption sits on a dark base */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(7,13,9,0.55))]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Live label */}
      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot" />
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary">{label}</span>
      </div>

      {/* Logo badge */}
      {logoBadge && (
        <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-[22%] border border-white/10 bg-[#070d09]/80 backdrop-blur-md">
          <Logo size={26} />
        </div>
      )}

      {/* Caption */}
      <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-5 pb-4 sm:px-6 sm:pb-5">
        <p className="font-display text-sm font-bold text-foreground sm:text-base">{caption}</p>
        <span className="hidden shrink-0 font-mono text-[9px] uppercase tracking-[0.18em] text-muted sm:block">
          The Mirror does not think for you
        </span>
      </figcaption>
    </figure>
  );
}
