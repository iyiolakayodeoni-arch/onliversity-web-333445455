"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { useScrollAnimation } from "./useScrollAnimation";

function JourneyTerminal() {
  return (
    <div className="terminal-window w-full max-w-lg">
      <div className="terminal-header">
        <div className="terminal-dot" style={{ background: "#ff5f57" }} />
        <div className="terminal-dot" style={{ background: "#febc2e" }} />
        <div className="terminal-dot" style={{ background: "#28c840" }} />
        <span className="ml-2 font-mono text-[10px] text-muted/50">
          journey — onliversity
        </span>
      </div>
      <div className="terminal-body space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-primary/60">$</span>
          <span className="text-muted">onliversity start --coach chinedu</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-primary">✓</span>
          <span className="text-foreground/70">Coach assigned: <span className="text-primary font-medium">Chinedu &ldquo;King of the Pitch&rdquo; Okafor</span></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-primary">✓</span>
          <span className="text-foreground/70">Journey loaded: <span className="text-foreground">6 stages mapped</span></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-primary">✓</span>
          <span className="text-foreground/70">Stage 1 unlocked: <span className="text-accent">Grassroots — &ldquo;Just Playing&rdquo;</span></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-primary/60">$</span>
          <span className="text-muted/70">Your journey is live</span>
          <span className="inline-block h-3 w-1.5 bg-primary cursor-blink" />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const ref = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-b border-border"
    >
      {/* Ambient orbs */}
      <div className="ambient-orb ambient-orb-green w-[500px] h-[500px] -top-40 -left-40 opacity-50" />
      <div className="ambient-orb ambient-orb-green w-[400px] h-[400px] -bottom-20 -right-32 opacity-30" />
      <div className="ambient-orb ambient-orb-amber w-[200px] h-[200px] top-1/3 right-1/4 opacity-40" />

      <div className="bg-grid absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 md:py-36">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Copy */}
          <div>
            <div className="mb-6 flex items-center gap-3 fade-up">
              <Logo size={40} />
              <span className="font-display text-sm font-bold tracking-tight text-muted">
                ONLIVERSITY
              </span>
            </div>

            <p className="mono-label fade-up fade-up-delay-1">
              Digital University for Creatives
            </p>

            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl fade-up fade-up-delay-2">
              Walk a real
              <br />
              pro&apos;s path.
              <br />
              <span className="text-gradient-green">Stage by stage.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base text-muted leading-relaxed sm:text-lg fade-up fade-up-delay-3">
              Choose your coach. Walk their real journey from grassroots to pro.
              Every lesson, every checkpoint, every coaching moment — pulled from
              their actual career.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:gap-4 fade-up fade-up-delay-4">
              <Link
                href="/signup"
                className="shimmer w-full rounded-lg bg-primary px-7 py-3.5 text-center font-medium text-background transition-all hover:shadow-glow-sm sm:w-auto"
              >
                Start your journey
              </Link>
              <a
                href="#how-it-works"
                className="w-full rounded-lg border border-border-bright px-7 py-3.5 text-center font-medium text-foreground transition-colors hover:border-primary/40 sm:w-auto"
              >
                See how it works
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 fade-up fade-up-delay-5">
              <div>
                <p className="font-display text-2xl font-bold text-foreground stat-display">2</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Coaches</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <p className="font-display text-2xl font-bold text-foreground stat-display">12</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Stages</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <p className="font-display text-2xl font-bold text-foreground stat-display">6</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Game Academies</p>
              </div>
            </div>
          </div>

          {/* Right: Terminal mockup */}
          <div className="flex justify-center lg:justify-end fade-up fade-up-delay-3">
            <JourneyTerminal />
          </div>
        </div>
      </div>
    </section>
  );
}
