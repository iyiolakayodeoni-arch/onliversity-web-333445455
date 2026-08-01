"use client";

import { useState } from "react";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";
import { SessionArt } from "@/components/SessionArt";
import { useScrollAnimation } from "@/components/useScrollAnimation";
import { appInfo, seasons } from "@/lib/app-data";
import type { SeasonEntry } from "@/lib/app-data";

/* ─── App Icon ─── */
function AppIcon({ size = 96 }: { size?: number }) {
  return (
    <div
      className="relative overflow-hidden rounded-[22%] bg-[#111] border border-white/10"
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <Logo size={size * 0.55} />
      </div>
    </div>
  );
}

/* ─── Download glyph ─── */
function DownloadGlyph({ size = 44, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3v11" />
      <path d="M7.5 10.5L12 15l4.5-4.5" />
      <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
    </svg>
  );
}

/* ─── Stat pill ─── */
function StatPill({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <div className="text-muted">{icon}</div>
      <p className="font-display text-sm font-bold text-foreground">{value}</p>
      <p className="font-mono text-[9px] uppercase tracking-widest text-muted">{label}</p>
    </div>
  );
}

/* ─── Season card ─── */
function SeasonCard({ season, isExpanded, onToggle }: { season: SeasonEntry; isExpanded: boolean; onToggle: () => void }) {
  return (
    <div className={`glass-card overflow-hidden transition-all ${season.isLatest ? "!border-primary/20" : ""}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-surface/20 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl font-display text-lg font-bold ${season.isLatest ? "bg-primary/10 text-primary border border-primary/20" : "bg-surface text-muted border border-border"}`}>
            {season.season}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p className="font-display text-sm font-bold text-foreground">{season.label}</p>
              {season.isLatest && (
                <span className="rounded-full bg-primary/10 border border-primary/20 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-primary">Latest</span>
              )}
            </div>
            <p className="font-mono text-[10px] text-muted mt-0.5">{season.date} · {season.size} · Android {season.androidVersion}</p>
          </div>
        </div>
        <svg className={`h-5 w-5 text-muted transition-transform ${isExpanded ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isExpanded && (
        <div className="border-t border-border px-5 pb-5 sm:px-6 sm:pb-6">
          <div className="mt-5">
            <p className="mono-label mb-3">Highlights</p>
            <div className="flex flex-wrap gap-2">
              {season.highlights.map((h, i) => (
                <span key={i} className="rounded-lg bg-surface/50 border border-border px-3 py-1.5 text-xs text-foreground">{h}</span>
              ))}
            </div>
          </div>
          <div className="mt-6 space-y-5">
            {season.changelog.map((group, i) => (
              <div key={i}>
                <p className="mono-label mb-2">{group.category}</p>
                <ul className="space-y-2">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 text-[8px]">●</span>
                      <span className="text-sm text-muted leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 divider-glow" />
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot" />
              Season One · live
            </span>
            <span>{season.size} · Android {season.androidVersion}+</span>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── MAIN PAGE ─── */
export default function ProSeasonAcademyPage() {
  const [expandedSeason, setExpandedSeason] = useState<number | null>(1);
  const latestSeason = seasons.find((s) => s.isLatest)!;
  const ref = useScrollAnimation(0.05);

  return (
    <main className="min-h-screen bg-black">
      <Nav />

      {/* Header — icon, name, facts, download icon */}
      <section ref={ref} className="relative border-b border-border bg-black overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(57,255,106,0.10),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="relative mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs text-muted fade-up">
            <Link href="/" className="hover:text-foreground transition-colors">Onliversity</Link>
            <span>›</span>
            <Link href="/#app" className="hover:text-foreground transition-colors">Apps</Link>
            <span>›</span>
            <span className="text-foreground">ProSeasonAcademy</span>
          </div>

          {/* App header */}
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start fade-up fade-up-delay-1">
            <div className="flex gap-5">
              <AppIcon size={96} />
              <div className="min-w-0">
                <h1 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{appInfo.name}</h1>
                <p className="text-sm text-primary font-medium mt-0.5">{appInfo.developer}</p>
                <p className="text-xs text-muted mt-1">{appInfo.category}</p>
              </div>
            </div>

            {/* Download icon — leads to the download page */}
            <div className="sm:ml-auto flex items-center gap-4">
              <Link
                href="/download"
                aria-label="Download ProSeasonAcademy"
                title="Download ProSeasonAcademy — Android APK, first week free"
                className="group relative flex h-20 w-20 items-center justify-center rounded-[24px] border border-primary/25 bg-primary/5 text-primary transition-all hover:border-primary/60 hover:bg-primary/10 hover:shadow-[0_0_40px_-8px_rgba(57,255,106,0.45)]"
              >
                <DownloadGlyph size={40} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                <span className="absolute -inset-1 rounded-[28px] border border-primary/10" aria-hidden="true" />
              </Link>
              <div className="max-w-[180px]">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Download</p>
                <p className="mt-1 text-xs text-muted leading-relaxed">
                  Season One · 1,000 seats · first week free
                </p>
              </div>
            </div>
          </div>

          {/* Facts row */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-4 fade-up fade-up-delay-2">
            <StatPill icon={<svg className="h-5 w-5" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" /><circle cx="12" cy="12" r="4" fill="currentColor" className="pulse-dot" /></svg>} value="Live" label="Status" />
            <StatPill icon={<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>} value={latestSeason.size} label="Size" />
            <StatPill icon={<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>} value={`Android ${latestSeason.androidVersion}`} label="Version" />
            <StatPill icon={<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>} value="1,000" label="Seats" />
          </div>
        </div>
      </section>

      {/* How a session might look */}
      <section className="border-b border-border bg-black">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="max-w-[560px]">
            <p className="mono-label">How a session might look</p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              The Mirror Session
            </h2>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              Before each match you set an intention. At half-time and full-time you answer in
              your own words. You watch the versions of your thinking sit beside the evidence —
              until self-deception becomes difficult to maintain. The app never thinks for you.
            </p>
          </div>
          <div className="mt-8 fade-up fade-up-delay-1">
            <SessionArt
              src="/illustrations/mirror-session.webp"
              alt="A player sits in a dark room, phone in hand, watching his own reflection in a glowing mirror"
              label="mirror / session — live"
              caption="A player sees himself. The evidence sits beside his intention."
            />
          </div>
        </div>
      </section>

      {/* About this app */}
      <section className="border-b border-border bg-black">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-10">
          <div className="flex items-center justify-between mb-4">
            <p className="mono-label">About this app</p>
            <span className="text-xs text-muted">v{latestSeason.season}.0</span>
          </div>
          <p className="text-sm text-muted leading-relaxed whitespace-pre-line">{appInfo.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["FC Mobile", "Mirror method", "Professional development", "One coach, locked", "Receipts, not promises", "First week free"].map((tag) => (
              <span key={tag} className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* What's new — Season changelog */}
      <section className="border-b border-border bg-black">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-10">
          <p className="mono-label mb-5">What&apos;s new</p>

          <div className="space-y-4">
            {seasons.map((season) => (
              <SeasonCard
                key={season.season}
                season={season}
                isExpanded={expandedSeason === season.season}
                onToggle={() => setExpandedSeason(expandedSeason === season.season ? null : season.season)}
              />
            ))}
          </div>

          {/* Future seasons teaser */}
          <div className="mt-6 glass-card p-5 text-center">
            <p className="mono-label text-muted mb-2">Coming next</p>
            <p className="text-sm text-muted">
              <strong className="text-foreground">Season Two</strong> is in
              development. New features, improvements, and content based on
              Founder&apos;s Week feedback. The founder will announce details in
              the community halls.
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              {["Season 2", "Season 3", "Season 4"].map((s) => (
                <span key={s} className="rounded-lg border border-border bg-surface/30 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-muted/50">{s}</span>
              ))}
              <span className="font-mono text-[10px] text-muted/30">···</span>
            </div>
          </div>
        </div>
      </section>

      {/* Back to home CTA */}
      <section className="border-b border-border bg-black">
        <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-16">
          <h2 className="font-display text-2xl font-bold text-foreground">See yourself. Do the work.</h2>
          <p className="mt-2 text-sm text-muted">Season One is live. 1,000 seats. One coach, locked permanently.</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/download" className="shimmer rounded-lg bg-primary px-8 py-3 font-medium text-background transition-all hover:shadow-glow-sm">Download the app</Link>
            <Link href="/" className="text-sm text-muted transition-colors hover:text-foreground">← Back to Onliversity</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
