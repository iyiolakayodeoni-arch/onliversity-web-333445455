"use client";

import { CoachSelection } from "./CoachSelection";
import { useScrollAnimation } from "./useScrollAnimation";

/* ─── Pxxl-style numbered feature sections ─── */

function Step01() {
  const ref = useScrollAnimation();
  return (
    <section ref={ref} className="relative border-b border-border">
      <div className="ambient-orb ambient-orb-green w-[400px] h-[400px] -left-40 top-0 opacity-15" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div className="fade-up">
            <span className="section-number">01</span>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Play 5 Matches
            </h3>
            <p className="mt-4 text-base text-muted leading-relaxed sm:text-lg">
              Our match scanning builds your player profile — your strengths,
              weaknesses, and playstyle patterns. No tests, no grades. Just the
              way you actually play.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="status-live">Scanning active</div>
            </div>
          </div>

          {/* Mockup: Match scanner */}
          <div className="fade-up fade-up-delay-2">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot" style={{ background: "#ff5f57" }} />
                <div className="terminal-dot" style={{ background: "#febc2e" }} />
                <div className="terminal-dot" style={{ background: "#28c840" }} />
                <span className="ml-2 font-mono text-[10px] text-muted/50">
                  match-scanner
                </span>
              </div>
              <div className="terminal-body space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted">Match 1</span>
                  <span className="text-primary">✓ Analyzed</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted">Match 2</span>
                  <span className="text-primary">✓ Analyzed</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted">Match 3</span>
                  <span className="text-primary">✓ Analyzed</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted">Match 4</span>
                  <span className="text-primary">✓ Analyzed</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted">Match 5</span>
                  <span className="text-accent">⟳ Scanning...</span>
                </div>
                <div className="divider-glow my-3" />
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                      Attack rating
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-24 overflow-hidden rounded-full bg-surface">
                        <div className="h-full w-4/5 rounded-full bar-shimmer" />
                      </div>
                      <span className="font-mono text-xs text-primary">82</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                      Defense rating
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-24 overflow-hidden rounded-full bg-surface">
                        <div className="h-full w-3/5 rounded-full bar-shimmer" />
                      </div>
                      <span className="font-mono text-xs text-primary">64</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                      Playstyle
                    </span>
                    <span className="font-mono text-xs text-accent">
                      Aggressive Counter
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Step02() {
  const ref = useScrollAnimation();
  return (
    <section ref={ref} className="relative border-b border-border">
      <div className="ambient-orb ambient-orb-amber w-[300px] h-[300px] right-0 top-1/4 opacity-15" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="mb-12 fade-up">
          <span className="section-number">02</span>
          <h3 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Meet Your Coaches
          </h3>
          <p className="mt-3 max-w-2xl text-base text-muted leading-relaxed sm:text-lg">
            Preview both coaches below. Tap a card to explore their journey
            stages. The actual coach selection happens inside the app after your
            5 placement matches.
          </p>
        </div>

        <div className="fade-up fade-up-delay-2">
          <CoachSelection selectedCoach={null} />
        </div>
      </div>
    </section>
  );
}

function Step03() {
  const ref = useScrollAnimation();
  return (
    <section ref={ref} className="relative border-b border-border">
      <div className="ambient-orb ambient-orb-green w-[350px] h-[350px] -right-20 bottom-0 opacity-15" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div className="fade-up">
            <span className="section-number">03</span>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl text-accent">
              Get Certified & Become a Partner
            </h3>
            <p className="mt-4 text-base text-muted leading-relaxed sm:text-lg">
              Complete the journey to earn your certification — a real, dated
              record of your development. Then train the next generation under
              the Onliversity name.
            </p>

            {/* Revenue split */}
            <div className="mt-8 flex items-center gap-8">
              <div className="text-center">
                <p className="font-display text-4xl font-bold text-accent stat-display">
                  80%
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  You keep
                </p>
              </div>
              <div className="h-12 w-px bg-border-bright" />
              <div className="text-center">
                <p className="font-display text-4xl font-bold text-muted stat-display">
                  20%
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  Onliversity
                </p>
              </div>
            </div>
          </div>

          {/* Mockup: Certification */}
          <div className="fade-up fade-up-delay-2">
            <div className="glass-card p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
                  <svg
                    className="h-6 w-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="mono-label text-accent">Certification</p>
                  <p className="font-display text-lg font-bold text-foreground">
                    Pro Season Academy
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { label: "Stages completed", value: "6/6", color: "text-primary" },
                  { label: "Coaching sessions", value: "24", color: "text-foreground" },
                  { label: "Match analysis", value: "48", color: "text-foreground" },
                  { label: "Status", value: "Certified", color: "text-accent" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-lg bg-surface/40 px-4 py-3"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                      {item.label}
                    </span>
                    <span className={`font-mono text-sm font-medium ${item.color}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 divider-glow" />
              <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-widest text-muted/60">
                Issued by Onliversity · July 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <div id="how-it-works">
      {/* Section header */}
      <div className="relative border-b border-border bg-surface/20">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <p className="mono-label mb-3">How it works</p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Your Journey Starts Here
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted sm:text-lg">
            Play matches. Meet your coaches. Walk the path — stage by stage.
          </p>
        </div>
      </div>

      <Step01 />
      <Step02 />
      <Step03 />
    </div>
  );
}
