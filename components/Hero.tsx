"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { useScrollAnimation } from "./useScrollAnimation";

function AppTerminal() {
  return (
    <div className="terminal-window w-full max-w-lg">
      <div className="terminal-header">
        <div className="terminal-dot" style={{ background: "#ff5f57" }} />
        <div className="terminal-dot" style={{ background: "#febc2e" }} />
        <div className="terminal-dot" style={{ background: "#28c840" }} />
        <span className="ml-2 font-mono text-[10px] text-muted/50">
          pro-season-academy — onliversity
        </span>
      </div>
      <div className="terminal-body space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-primary/60">$</span>
          <span className="text-muted">onliversity open pro-season-academy</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-primary">✓</span>
          <span className="text-foreground/70">
            Academy loaded: <span className="text-primary font-medium">Pro Season Academy</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-primary">✓</span>
          <span className="text-foreground/70">
            Season One: <span className="text-accent font-medium">1,000 seats — open</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-primary">✓</span>
          <span className="text-foreground/70">
            Status: <span className="text-primary">Founder&apos;s Week — free access</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-primary">✓</span>
          <span className="text-foreground/70">
            Coaches: <span className="text-foreground">Chinedu &ldquo;The King&rdquo; · Obinna &ldquo;Tekkerz&rdquo;</span>
          </span>
        </div>
        <div className="divider-glow my-2" />
        <div className="flex items-center gap-2">
          <span className="text-primary/60">$</span>
          <span className="text-muted/70">Your seat is waiting</span>
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

            {/* Season One badge */}
            <div className="mb-5 flex flex-wrap items-center gap-2 fade-up fade-up-delay-1">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  Season One — Live
                </span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  1,000 seats
                </span>
              </span>
            </div>

            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl fade-up fade-up-delay-2">
              Pro Season
              <br />
              Academy
            </h1>

            <p className="mt-5 max-w-xl text-base text-muted leading-relaxed sm:text-lg fade-up fade-up-delay-3">
              A private FC Mobile performance academy. Choose your coach. Walk
              their real journey from grassroots to pro. Log real matches. Prove
              progress. Get certified.
            </p>

            <p className="mt-3 max-w-xl text-sm text-foreground/80 leading-relaxed fade-up fade-up-delay-3">
              <strong className="text-foreground">Founder&apos;s Week is open.</strong>{" "}
              Use the academy for free. Tell the founder what helps, what&apos;s
              missing, and what should go. No surprise payments. No hidden deals.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:gap-4 fade-up fade-up-delay-4">
              <Link
                href="/signup"
                className="shimmer w-full rounded-lg bg-primary px-7 py-3.5 text-center font-medium text-background transition-all hover:shadow-glow-sm sm:w-auto"
              >
                Claim your seat
              </Link>
              <a
                href="#journey"
                className="w-full rounded-lg border border-border-bright px-7 py-3.5 text-center font-medium text-foreground transition-colors hover:border-primary/40 sm:w-auto"
              >
                See the journey
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 fade-up fade-up-delay-5">
              <div>
                <p className="font-display text-2xl font-bold text-foreground stat-display">
                  2
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  Coaches
                </p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <p className="font-display text-2xl font-bold text-foreground stat-display">
                  6
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  Stages
                </p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <p className="font-display text-2xl font-bold text-accent stat-display">
                  1,000
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  Seats
                </p>
              </div>
            </div>
          </div>

          {/* Right: Terminal mockup */}
          <div className="flex justify-center lg:justify-end fade-up fade-up-delay-3">
            <AppTerminal />
          </div>
        </div>
      </div>
    </section>
  );
}
