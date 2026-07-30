"use client";

import { CoachSelection } from "./CoachSelection";
import { useScrollAnimation } from "./useScrollAnimation";

/* ─── The real member journey ─── */

function StepEntry() {
  const ref = useScrollAnimation();
  return (
    <section ref={ref} className="relative border-b border-border">
      <div className="ambient-orb ambient-orb-green w-[400px] h-[400px] -left-40 top-0 opacity-15" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="fade-up">
            <span className="section-number">01</span>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Enter the Academy
            </h3>
            <p className="mt-4 text-base text-muted leading-relaxed sm:text-lg">
              The app opens like entering an academy — not downloading another
              game companion. You see the branding, enter a controlled
              sign-in experience, and capture your profile: country, platform,
              how you heard about us.
            </p>
            <p className="mt-3 text-sm text-muted">
              Membership is controlled by the founder through invitations and
              seasons. Season One has <strong className="text-accent">1,000 seats</strong>.
            </p>
          </div>
          <div className="fade-up fade-up-delay-2">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot" style={{ background: "#ff5f57" }} />
                <div className="terminal-dot" style={{ background: "#febc2e" }} />
                <div className="terminal-dot" style={{ background: "#28c840" }} />
                <span className="ml-2 font-mono text-[10px] text-muted/50">
                  entry — onliversity
                </span>
              </div>
              <div className="terminal-body space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-foreground/70">Welcome to Pro Season Academy</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-foreground/70">Season One: <span className="text-accent">1,000 seats</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-foreground/70">Your invite: <span className="text-primary">verified</span></span>
                </div>
                <div className="divider-glow my-2" />
                <div className="space-y-1.5">
                  <p className="font-mono text-[10px] text-muted">Profile captured:</p>
                  <p className="text-xs text-foreground/60">Country · Platform · Referral source</p>
                </div>
                <div className="divider-glow my-2" />
                <div className="flex items-center gap-2">
                  <span className="text-primary/60">$</span>
                  <span className="text-muted/70">Ready for coach selection</span>
                  <span className="inline-block h-3 w-1.5 bg-primary cursor-blink" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCoach() {
  const ref = useScrollAnimation();
  return (
    <section ref={ref} className="relative border-b border-border">
      <div className="ambient-orb ambient-orb-amber w-[300px] h-[300px] right-0 top-1/4 opacity-15" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="mb-12 fade-up">
          <span className="section-number">02</span>
          <h3 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Choose Your Coach — and Mean It
          </h3>
          <p className="mt-3 max-w-2xl text-base text-muted leading-relaxed sm:text-lg">
            You&apos;re shown coach options with their scout-file personalities.
            You choose one. This is a <strong className="text-foreground">permanent lock</strong>.
            You don&apos;t hop between coaches whenever you get bored. The commitment
            makes the coach/player relationship, journey language, and earned
            progress mean something.
          </p>
        </div>
        <div className="fade-up fade-up-delay-2">
          <CoachSelection selectedCoach={null} />
        </div>
      </div>
    </section>
  );
}

function StepBaseline() {
  const ref = useScrollAnimation();
  return (
    <section ref={ref} className="relative border-b border-border">
      <div className="ambient-orb ambient-orb-green w-[350px] h-[350px] -right-20 bottom-0 opacity-15" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="fade-up">
            <span className="section-number">03</span>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Baseline Scan — 5 Matches
            </h3>
            <p className="mt-4 text-base text-muted leading-relaxed sm:text-lg">
              Before the journey begins, your coach welcomes you and puts you
              through a baseline. This is not a fake AI ranking. It&apos;s a
              five-match self-assessment. You record match outcomes, composure,
              and thoughtful written answers. The coach asks meaningful questions
              and you state your ambition.
            </p>
            <p className="mt-3 text-sm text-foreground">
              At the end, the academy produces a sealed starting profile. The
              journey has a real beginning — you&apos;re not just clicking into
              Stage 1 with no context.
            </p>
          </div>
          <div className="fade-up fade-up-delay-2">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot" style={{ background: "#ff5f57" }} />
                <div className="terminal-dot" style={{ background: "#febc2e" }} />
                <div className="terminal-dot" style={{ background: "#28c840" }} />
                <span className="ml-2 font-mono text-[10px] text-muted/50">
                  baseline-scan
                </span>
              </div>
              <div className="terminal-body space-y-2">
                <p className="text-xs text-muted mb-2">Baseline Scan — 5 matches</p>
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="flex items-center justify-between">
                    <span className="text-muted">Match {n}</span>
                    <span className="text-primary">✓ Recorded</span>
                  </div>
                ))}
                <div className="flex items-center justify-between">
                  <span className="text-muted">Match 5</span>
                  <span className="text-accent">⟳ Recording...</span>
                </div>
                <div className="divider-glow my-2" />
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Composure</span>
                    <span className="font-mono text-xs text-primary">7.2/10</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Ambition</span>
                    <span className="font-mono text-xs text-accent">World Champion</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Playstyle</span>
                    <span className="font-mono text-xs text-foreground">Aggressive Counter</span>
                  </div>
                </div>
                <div className="divider-glow my-2" />
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-foreground/70">Sealed profile created</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepJourney() {
  const ref = useScrollAnimation();
  return (
    <section ref={ref} id="journey" className="relative border-b border-border">
      <div className="ambient-orb ambient-orb-green w-[400px] h-[400px] top-0 left-1/3 opacity-10" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1 fade-up fade-up-delay-2">
            <div className="glass-card p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="mono-label">Journey Map</span>
                <span className="status-live">In progress</span>
              </div>
              {/* Stage list */}
              {[
                { stage: "01", title: "Grassroots", status: "cleared", year: "2016" },
                { stage: "02", title: "First Tournament", status: "cleared", year: "2017" },
                { stage: "03", title: "First Major Title", status: "current", year: "2018" },
                { stage: "04", title: "World Champion", status: "locked", year: "2018" },
                { stage: "05", title: "Back-to-Back", status: "locked", year: "2019" },
                { stage: "06", title: "Building Legacy", status: "locked", year: "2022+" },
              ].map((s) => (
                <div
                  key={s.stage}
                  className={`flex items-center justify-between rounded-lg px-4 py-3 ${
                    s.status === "cleared"
                      ? "bg-primary/5 border border-primary/10"
                      : s.status === "current"
                      ? "bg-primary/10 border border-primary/30"
                      : "bg-surface/30 border border-border opacity-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-primary">
                      {s.stage}
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {s.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-muted">{s.year}</span>
                    {s.status === "cleared" && (
                      <span className="text-primary text-xs">✓</span>
                    )}
                    {s.status === "current" && (
                      <span className="h-2 w-2 rounded-full bg-primary pulse-dot" />
                    )}
                    {s.status === "locked" && (
                      <svg className="h-3 w-3 text-muted/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 fade-up">
            <span className="section-number">04</span>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              The Journey — Heart of the Academy
            </h3>
            <p className="mt-4 text-base text-muted leading-relaxed sm:text-lg">
              Each coach has a six-stage path through their own world. You see a
              progression map with cleared stages, the current stage, locked
              future stages, live objectives, XP, and badges.
            </p>
            <p className="mt-3 text-sm text-muted">
              You don&apos;t just read a lesson and press &ldquo;complete.&rdquo;
              You play, reflect, and meet objectives before moving forward. The
              stages teach FC Mobile mechanics that are useful <strong className="text-foreground">now</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepMatchVault() {
  const ref = useScrollAnimation();
  return (
    <section ref={ref} className="relative border-b border-border">
      <div className="ambient-orb ambient-orb-amber w-[250px] h-[250px] left-0 top-1/3 opacity-15" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="fade-up">
            <span className="section-number">05</span>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Match Vault — Real Match Reflection
            </h3>
            <p className="mt-4 text-base text-muted leading-relaxed sm:text-lg">
              FC Mobile doesn&apos;t give us an official match data feed. We&apos;re
              honest about that. You log a real match: scoreline, mode, opponent
              style, pass accuracy, whether you followed the taught mechanic,
              composure, and a note.
            </p>
            <p className="mt-3 text-sm text-foreground">
              This is an honour-system record. The value is not pretending to
              have impossible data — the value is making you notice patterns and
              take responsibility for your play.
            </p>
          </div>
          <div className="fade-up fade-up-delay-2">
            <div className="glass-card p-5 space-y-3">
              <div className="flex items-center justify-between mb-2">
                <span className="mono-label">Match Vault</span>
                <span className="font-mono text-[10px] text-muted">Last 3 matches</span>
              </div>
              {[
                { result: "W 3-1", mode: "H2H", mechanic: "Used", composure: "8/10", color: "text-primary" },
                { result: "L 1-2", mode: "VS Attack", mechanic: "Missed", composure: "5/10", color: "text-red-400" },
                { result: "W 2-0", mode: "H2H", mechanic: "Used", composure: "9/10", color: "text-primary" },
              ].map((m, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg bg-surface/40 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-xs font-bold ${m.color}`}>{m.result}</span>
                    <span className="font-mono text-[10px] text-muted">{m.mode}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-muted">Mechanic: {m.mechanic}</span>
                    <span className="font-mono text-[10px] text-muted">Composure: {m.composure}</span>
                  </div>
                </div>
              ))}
              <div className="divider-glow" />
              <div className="flex items-center justify-between">
                <span className="mono-label">Loss Journal</span>
                <span className="font-mono text-[10px] text-muted">Pattern detected</span>
              </div>
              <div className="rounded-lg bg-surface/40 px-4 py-3">
                <p className="text-xs text-muted">
                  <span className="text-foreground font-medium">Cause:</span> Defending
                </p>
                <p className="text-xs text-muted mt-1 italic">
                  &ldquo;Pushed too many men forward. Same pattern as last loss.&rdquo;
                </p>
              </div>
              <p className="text-center font-mono text-[10px] text-primary/70">
                The pattern you write is the pattern he fixes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepMatchScan() {
  const ref = useScrollAnimation();
  return (
    <section ref={ref} className="relative border-b border-border">
      <div className="ambient-orb ambient-orb-green w-[300px] h-[300px] right-0 bottom-0 opacity-15" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1 fade-up fade-up-delay-2">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot" style={{ background: "#ff5f57" }} />
                <div className="terminal-dot" style={{ background: "#febc2e" }} />
                <div className="terminal-dot" style={{ background: "#28c840" }} />
                <span className="ml-2 font-mono text-[10px] text-muted/50">
                  match-scan — stage 03
                </span>
              </div>
              <div className="terminal-body space-y-3">
                <p className="text-xs text-primary mb-2">Match Scan — The Eye & The Mind</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted">The Vault</span>
                    <span className="font-mono text-xs text-primary">3 matches logged</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted">The Eye</span>
                    <span className="font-mono text-xs text-primary">Mechanic applied 2/3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted">The Mind</span>
                    <span className="font-mono text-xs text-accent">Composure: 7.3 avg</span>
                  </div>
                </div>
                <div className="divider-glow my-2" />
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Objectives</span>
                  <span className="font-mono text-xs text-primary">4/5 met</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface">
                  <div className="h-full w-4/5 rounded-full bar-shimmer" />
                </div>
                <div className="divider-glow my-2" />
                <div className="flex items-center gap-2">
                  <span className="text-accent">⟳</span>
                  <span className="text-xs text-muted">Coach reading: &ldquo;Your discipline is showing. One more match.&rdquo;</span>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 fade-up">
            <span className="section-number">06</span>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Match Scan — The Eye & The Mind
            </h3>
            <p className="mt-4 text-base text-muted leading-relaxed sm:text-lg">
              The Match Scan is how a stage checks progress. It combines:
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-0.5">•</span>
                <span><strong className="text-foreground">The Vault:</strong> what you actually logged across matches</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-0.5">•</span>
                <span><strong className="text-foreground">The Eye:</strong> the coached mechanic and match observation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-0.5">•</span>
                <span><strong className="text-foreground">The Mind:</strong> composure, self-awareness, honest reflection</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-0.5">•</span>
                <span><strong className="text-foreground">Coach reading:</strong> a story that connects the result to the lesson</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-foreground">
              A pass gives XP, a badge, and access to what comes next. A failure
              doesn&apos;t shame you — it gives a reason to run it back, log
              another match, and improve.
            </p>
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
          <p className="mono-label mb-3">The member experience</p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            How it works — start to finish
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted sm:text-lg">
            A serious, personal football academy. Not a toy, not a generic
            gaming app, not an over-corporate learning platform.
          </p>
        </div>
      </div>

      <StepEntry />
      <StepCoach />
      <StepBaseline />
      <StepJourney />
      <StepMatchVault />
      <StepMatchScan />
    </div>
  );
}
