"use client";

import Link from "next/link";
import { Logo, LogoSplash } from "@/components/Logo";
import { SignupForm } from "@/components/SignupForm";
import { useScrollAnimation } from "@/components/useScrollAnimation";
import { PitchPattern } from "@/components/PitchPattern";

export default function SignupPage() {
  const ref = useScrollAnimation(0.05);

  return (
    <main ref={ref} className="min-h-screen bg-grid">
      <div className="glow-primary pointer-events-none fixed inset-0" />
      <div className="relative mx-auto grid min-h-screen max-w-6xl grid-cols-1 lg:grid-cols-2">
        {/* Left — Pro Season Academy brand panel */}
        <div className="relative hidden flex-col items-center justify-between overflow-hidden border-r border-border px-8 py-10 lg:flex lg:px-12 lg:py-12">
          {/* Pitch pattern background */}
          <PitchPattern />
          <div className="glow-primary pointer-events-none absolute inset-0" />

          <Link href="/" className="group relative z-10 flex w-full items-center gap-3">
            <div className="transition-transform group-hover:scale-105">
              <Logo size={36} />
            </div>
            <span className="font-display text-lg font-bold tracking-tight transition-colors group-hover:text-primary">
              ONLIVERSITY
            </span>
          </Link>

          <div className="relative z-10 flex flex-col items-center fade-up">
            {/* Pro Season Academy badge */}
            <div className="mb-4 flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-primary pulse-dot" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary">Pro Season Academy</span>
            </div>

            <LogoSplash size={140} />

            <p className="mt-6 max-w-xs text-center font-mono text-[10px] uppercase tracking-[0.25em] text-primary fade-up fade-up-delay-1 lg:text-xs">
              FC Mobile · Esports Coaching
            </p>
            <p className="mt-2 max-w-xs text-center text-sm text-muted fade-up fade-up-delay-2">
              Your journey from grassroots to pro starts here. Walk a real coach's path, stage by stage.
            </p>

            {/* Stats */}
            <div className="mt-6 grid w-full max-w-xs grid-cols-3 gap-3 fade-up fade-up-delay-3">
              <div className="rounded border border-border/50 bg-surface/50 p-2 text-center">
                <p className="font-display text-lg font-bold text-primary">6</p>
                <p className="font-mono text-[8px] uppercase tracking-widest text-muted">Stages</p>
              </div>
              <div className="rounded border border-border/50 bg-surface/50 p-2 text-center">
                <p className="font-display text-lg font-bold text-accent">2000</p>
                <p className="font-mono text-[8px] uppercase tracking-widest text-muted">XP</p>
              </div>
              <div className="rounded border border-border/50 bg-surface/50 p-2 text-center">
                <p className="font-display text-lg font-bold text-foreground">1</p>
                <p className="font-mono text-[8px] uppercase tracking-widest text-muted">Cert</p>
              </div>
            </div>
          </div>

          <div className="relative z-10 w-full text-center">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted/60 lg:text-[11px]">
              © {new Date().getFullYear()} Onliversity
            </p>
          </div>
        </div>

        {/* Right — form */}
        <div className="flex flex-col justify-center px-4 py-12 sm:px-6 sm:py-16 lg:px-16">
          {/* Mobile splash */}
          <div className="mb-6 flex flex-col items-center fade-up lg:hidden">
            {/* Mobile Pro Season badge */}
            <div className="mb-3 flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary">Pro Season Academy</span>
            </div>

            <LogoSplash size={100} />
            <p className="mt-3 text-center font-mono text-[9px] uppercase tracking-[0.2em] text-primary fade-up fade-up-delay-1 sm:text-[10px]">
              FC Mobile · Esports Coaching
            </p>
          </div>

          <Link href="/" className="group mb-4 flex items-center justify-center gap-2.5 lg:hidden">
            <div className="transition-transform group-hover:scale-105">
              <Logo size={26} />
            </div>
            <span className="font-display text-base font-bold tracking-tight transition-colors group-hover:text-primary">
              ONLIVERSITY
            </span>
          </Link>

          <div className="mx-auto w-full max-w-sm fade-up fade-up-delay-1">
            <div className="text-center lg:text-left">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary lg:hidden">
                Join Pro Season Academy
              </p>
              <h2 className="mt-2 font-display text-xl font-bold tracking-tight lg:mt-0 lg:text-2xl">
                Join Pro Season Academy
              </h2>
              <p className="mt-1.5 text-xs text-muted sm:text-sm">
                Your FC Mobile journey starts here. Create your account to get started.
              </p>
            </div>

            <div className="mt-6 rounded-lg border border-border bg-surface-elevated p-5 shadow-[0_0_40px_-12px_rgba(57,255,106,0.1)] sm:mt-8 sm:p-6 lg:p-8 fade-up fade-up-delay-2">
              <SignupForm />
            </div>

            <Link
              href="/"
              className="link-underline mt-5 block text-center text-xs text-muted transition-colors hover:text-foreground sm:mt-6 sm:text-sm"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
