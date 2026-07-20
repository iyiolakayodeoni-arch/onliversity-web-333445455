"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { useScrollAnimation } from "./useScrollAnimation";

export function Hero() {
  const ref = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="relative overflow-hidden border-b border-border bg-grid">
      <div className="glow-primary pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28 md:py-36">
        <div className="mb-6 flex justify-center fade-up sm:mb-8">
          <Logo size={56} />
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary fade-up fade-up-delay-1 sm:text-xs">
          Digital University for Creatives
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-6xl fade-up fade-up-delay-2">
          Walk a real pro's path.
          <br className="hidden sm:block" />
          Stage by stage.
        </h1>
        <p className="mx-auto mt-4 max-w-xl px-2 text-sm text-muted sm:mt-6 sm:text-base md:text-lg fade-up fade-up-delay-3">
          Choose your coach. Walk their real journey from grassroots to pro. Every lesson, every checkpoint, every coaching moment — pulled from their actual career.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 px-4 sm:mt-10 sm:flex-row sm:gap-4 fade-up fade-up-delay-4">
          <Link
            href="/signup"
            className="shimmer w-full rounded bg-primary px-6 py-3 text-center font-medium text-background transition-opacity hover:opacity-90 sm:w-auto sm:px-7"
          >
            Start your journey
          </Link>
          <a
            href="#how-it-works"
            className="link-underline w-full rounded border border-border-bright px-6 py-3 text-center font-medium text-foreground transition-colors hover:border-primary sm:w-auto sm:px-7"
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
