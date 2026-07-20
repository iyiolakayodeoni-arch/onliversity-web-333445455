"use client";

import { CoachSelection } from "./CoachSelection";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">
            How it works
          </p>
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Your Journey Starts Here
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted">
            Play matches. Meet your coaches. Walk the path — stage by stage.
          </p>
        </div>

        {/* Step 1: Play Matches */}
        <div className="mb-16 rounded-lg border border-border bg-surface-elevated/50 p-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-primary/10 font-mono text-lg font-bold text-primary">
              1
            </div>
          </div>
          <h3 className="mb-2 font-display text-xl font-bold text-foreground">
            Play 5 Matches
          </h3>
          <p className="text-sm text-muted">
            Our match scanning builds your player profile — your strengths, weaknesses, and playstyle patterns.
          </p>
        </div>

        {/* Step 2: Meet Coaches */}
        <div className="mb-16">
          <div className="mb-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-primary/10 font-mono text-lg font-bold text-primary">
                2
              </div>
            </div>
            <h3 className="mb-2 font-display text-xl font-bold text-foreground">
              Meet Your Coaches
            </h3>
            <p className="text-sm text-muted">
              Preview both coaches below. Tap a card to explore their journey stages. The actual coach selection happens inside the app after your 5 placement matches.
            </p>
          </div>

          <CoachSelection selectedCoach={null} />
        </div>

        {/* Step 3: Certification & Partnership */}
        <div className="rounded-lg border border-accent/40 bg-accent/5 p-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-accent/10 font-mono text-lg font-bold text-accent">
              3
            </div>
          </div>
          <h3 className="mb-2 font-display text-xl font-bold text-accent">
            Get Certified & Become a Partner
          </h3>
          <p className="mb-4 text-sm text-muted">
            Complete the journey to earn your certification — a real, dated record of your development.
          </p>
          <div className="flex items-center justify-center gap-6">
            <div className="text-center">
              <p className="font-display text-2xl font-bold text-accent">80%</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted">You keep</p>
            </div>
            <div className="h-8 w-px bg-border-bright" />
            <div className="text-center">
              <p className="font-display text-2xl font-bold text-muted">20%</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Onliversity</p>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted/70">
            Train the next generation under the Onliversity name. Keep 80% of every session.
          </p>
        </div>
      </div>
    </section>
  );
}
