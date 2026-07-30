"use client";

import Link from "next/link";
import { useScrollAnimation } from "./useScrollAnimation";

export function CoursesSection() {
  const ref = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="download"
      className="relative border-b border-border"
    >
      <div className="ambient-orb ambient-orb-green w-[400px] h-[400px] top-0 right-0 opacity-10" />
      <div className="ambient-orb ambient-orb-amber w-[200px] h-[200px] bottom-1/4 left-1/4 opacity-10" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 md:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: App info */}
          <div className="fade-up">
            <p className="mono-label mb-3">Download the App</p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Pro Season Academy
            </h2>
            <p className="mt-4 text-base text-muted leading-relaxed sm:text-lg">
              The academy lives in the Onliversity app. Download it to start
              your journey, choose your coach, log matches, and progress
              through the stages.
            </p>

            {/* App stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="glass-card p-4 text-center">
                <p className="font-display text-2xl font-bold text-primary stat-display">
                  6
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  Stages
                </p>
              </div>
              <div className="glass-card p-4 text-center">
                <p className="font-display text-2xl font-bold text-accent stat-display">
                  2
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  Coaches
                </p>
              </div>
              <div className="glass-card p-4 text-center">
                <p className="font-display text-2xl font-bold text-foreground stat-display">
                  1K
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  Seats
                </p>
              </div>
            </div>

            {/* Download buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <div className="glass-card flex flex-1 items-center gap-3 p-4 cursor-not-allowed opacity-70">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-foreground"
                >
                  <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 19h14" />
                </svg>
                <div className="text-left">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                    Coming soon
                  </p>
                  <p className="font-display text-sm font-bold">App Store</p>
                </div>
              </div>
              <div className="glass-card flex flex-1 items-center gap-3 p-4 cursor-not-allowed opacity-70">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-foreground"
                >
                  <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 19h14" />
                </svg>
                <div className="text-left">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                    Coming soon
                  </p>
                  <p className="font-display text-sm font-bold">Google Play</p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs text-muted/60">
              The app is currently in Founder&apos;s Week. Sign up to secure your
              seat and get notified when the app is available for download.
            </p>

            <Link
              href="/pro-season-academy"
              className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-primary hover:underline"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              View full app page &amp; changelog →
            </Link>
          </div>

          {/* Right: App preview terminal */}
          <div className="fade-up fade-up-delay-2">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot" style={{ background: "#ff5f57" }} />
                <div className="terminal-dot" style={{ background: "#febc2e" }} />
                <div className="terminal-dot" style={{ background: "#28c840" }} />
                <span className="ml-2 font-mono text-[10px] text-muted/50">
                  app-preview — pro-season-academy
                </span>
              </div>
              <div className="terminal-body space-y-3">
                {/* App header */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-primary font-medium">Pro Season Academy</span>
                  <span className="status-live">Founder&apos;s Week</span>
                </div>
                <div className="divider-glow" />

                {/* Journey preview */}
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  Your Journey — Chinedu &ldquo;The King&rdquo;
                </p>
                {[
                  { stage: "01", title: "Grassroots", status: "cleared" },
                  { stage: "02", title: "First Tournament", status: "cleared" },
                  { stage: "03", title: "First Major Title", status: "current" },
                  { stage: "04", title: "World Champion", status: "locked" },
                  { stage: "05", title: "Back-to-Back", status: "locked" },
                  { stage: "06", title: "Building Legacy", status: "locked" },
                ].map((s) => (
                  <div key={s.stage} className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-primary w-4">{s.stage}</span>
                    <span className={`text-xs flex-1 ${
                      s.status === "locked" ? "text-muted/40" : "text-foreground/70"
                    }`}>
                      {s.title}
                    </span>
                    {s.status === "cleared" && <span className="text-primary text-[10px]">✓</span>}
                    {s.status === "current" && <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot" />}
                    {s.status === "locked" && <span className="text-muted/30 text-[10px]">🔒</span>}
                  </div>
                ))}

                <div className="divider-glow" />

                {/* Quick stats */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-muted">XP</span>
                  <span className="font-mono text-xs text-primary">420 / 2000</span>
                </div>
                <div className="h-1 w-full overflow-hidden rounded-full bg-surface">
                  <div className="h-full w-1/5 rounded-full bar-shimmer" />
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-muted">Matches logged</span>
                  <span className="font-mono text-xs text-foreground">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-muted">Badges</span>
                  <span className="font-mono text-xs text-accent">2</span>
                </div>

                <div className="divider-glow" />

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <span className="text-primary/60">$</span>
                  <span className="text-muted/70">Ready for Stage 03 — Match Scan</span>
                  <span className="inline-block h-3 w-1.5 bg-primary cursor-blink" />
                </div>
              </div>
            </div>

            {/* Founder's Week callout */}
            <div className="mt-6 glass-card p-5 text-center">
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">
                Founder&apos;s Week
              </p>
              <p className="text-sm text-muted">
                Use the academy for free. Tell the founder what helps, what&apos;s
                missing, and what should go. Pricing will be explained openly —
                no surprises.
              </p>
              <Link
                href="/signup"
                className="mt-4 inline-block shimmer rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-background transition-all hover:shadow-glow-sm"
              >
                Sign up for Season One
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
