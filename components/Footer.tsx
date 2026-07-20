"use client";

import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-12 text-center sm:gap-6 sm:px-6 sm:py-16">
        <div className="transition-transform hover:scale-105">
          <Logo size={32} />
        </div>
        <p className="max-w-sm px-4 text-sm text-muted">
          Walk a real pro's path. Stage by stage. Certified at the end.
        </p>
        <Link
          href="/signup"
          className="shimmer w-full max-w-xs rounded bg-primary px-6 py-3 text-sm font-medium text-background transition-all hover:opacity-90 hover:shadow-[0_0_16px_-4px_rgba(57,255,106,0.3)] sm:w-auto"
        >
          Start your journey
        </Link>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted/60 sm:text-[11px]">
          © {new Date().getFullYear()} Onliversity
        </p>
        <p className="max-w-sm px-4 text-[10px] text-muted/40 leading-relaxed sm:text-[11px]">
          Chinedu Okafor &amp; Obinna Eze are fictional. The journey they walk is inspired by a real pro's rise — reimagined through them. The learning system, coaching, and certification are real.
        </p>
      </div>
    </footer>
  );
}
