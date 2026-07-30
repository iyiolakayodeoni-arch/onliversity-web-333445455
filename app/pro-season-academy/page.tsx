"use client";

import { useState } from "react";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";
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

/* ─── Play Store-style Star Rating ─── */
function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`h-4 w-4 ${star <= Math.round(rating) ? "text-accent" : "text-border"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="font-mono text-xs text-muted">{count} reviews</span>
    </div>
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

/* ─── Esports-style Screenshots ─── */
function ScreenshotCarousel() {
  const screens = [
    { 
      label: "Journey Map", 
      desc: "6-stage path", 
      visual: (
        <div className="w-full h-40 bg-[#111] rounded-xl p-3 border border-white/10 relative overflow-hidden">
          <div className="text-[10px] text-primary font-mono mb-2">STAGE 3 / 6</div>
          <div className="flex justify-between items-end h-24">
            {["GS","GR","BR","ST","PR","CH"].map((s, idx) => (
              <div key={idx} className={`text-center ${idx === 4 ? 'scale-110' : ''}`}>
                <div className={`w-6 h-6 mx-auto rounded-full flex items-center justify-center text-[9px] font-mono border ${idx <= 4 ? 'bg-primary text-black border-primary' : 'bg-[#222] border-white/20 text-muted'}`}>
                  {s}
                </div>
                <div className="text-[8px] mt-1 text-muted/70">{idx === 4 ? "PRO" : ""}</div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-3 right-3 text-[9px] px-2 py-0.5 bg-primary/10 text-primary rounded font-mono">640 XP</div>
        </div>
      )
    },
    { 
      label: "Match Vault", 
      desc: "Log & reflect", 
      visual: (
        <div className="w-full h-40 bg-[#111] rounded-xl p-3 border border-white/10">
          <div className="text-[10px] text-primary font-mono mb-1">MATCH LOGGED</div>
          <div className="flex justify-between text-sm mb-3">
            <div><span className="text-green-400">W</span> 3-1</div>
            <div className="font-mono text-xs text-muted">Div 4</div>
          </div>
          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between"><span>Composure</span><span className="text-primary">9/10</span></div>
            <div className="flex justify-between"><span>Decision</span><span className="text-primary">8/10</span></div>
            <div className="flex justify-between"><span>Mechanics</span><span className="text-primary">7/10</span></div>
          </div>
          <div className="mt-3 text-[9px] text-muted/60">Heel-to-heel • 42nd min</div>
        </div>
      )
    },
    { 
      label: "Film Room", 
      desc: "Coach sessions", 
      visual: (
        <div className="w-full h-40 bg-[#111] rounded-xl p-3 border border-white/10 relative">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-xs">C</div>
            <div>
              <div className="text-sm font-medium">Chinedu</div>
              <div className="text-[10px] text-muted">ST • Finisher</div>
            </div>
          </div>
          <div className="text-xs bg-[#1a1a1a] p-2 rounded">“Control tempo. The game rewards patience.”</div>
          <div className="absolute bottom-3 right-3 text-[9px] px-2 py-0.5 bg-white/5 rounded text-muted">12 videos</div>
        </div>
      )
    },
    { 
      label: "Match Scan", 
      desc: "Progress check", 
      visual: (
        <div className="w-full h-40 bg-[#111] rounded-xl p-3 border border-white/10">
          <div className="text-[10px] text-primary font-mono mb-2">THE EYE + THE MIND</div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-[#1a1a1a] p-2 rounded">Eye: 87</div>
            <div className="bg-[#1a1a1a] p-2 rounded">Mind: 79</div>
          </div>
          <div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-1.5 w-[83%] bg-primary rounded-full"></div>
          </div>
          <div className="text-[10px] text-center mt-1.5 text-muted">+14 since last scan</div>
        </div>
      )
    },
    { 
      label: "The Halls", 
      desc: "Academy rooms", 
      visual: (
        <div className="w-full h-40 bg-[#111] rounded-xl p-3 border border-white/10">
          <div className="text-xs font-mono text-primary mb-2">#founder-ama • LIVE</div>
          <div className="space-y-2 text-xs">
            <div className="flex gap-2"><span className="text-primary">•</span> <span>Founder broadcast: Season 2 roadmap</span></div>
            <div className="flex gap-2"><span className="text-primary">•</span> <span>Chinedu path — 47 online</span></div>
            <div className="flex gap-2"><span className="text-primary">•</span> <span>Match Vault review room</span></div>
          </div>
        </div>
      )
    },
  ];

  return (
    <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide">
      {screens.map((screen, i) => (
        <div
          key={i}
          className="glass-card flex-shrink-0 w-44 h-[340px] p-4 flex flex-col"
        >
          <div className="mb-3">
            {screen.visual}
          </div>
          <div className="mt-auto">
            <p className="font-display text-sm font-bold text-foreground">{screen.label}</p>
            <p className="text-xs text-muted mt-0.5">{screen.desc}</p>
          </div>
        </div>
      ))}
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
            <span className="flex items-center gap-1">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              {season.downloads} downloads
            </span>
            <span className="flex items-center gap-1">
              <svg className="h-3.5 w-3.5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              {season.rating} · {season.ratingCount} reviews
            </span>
            <span>{season.size} · Android {season.androidVersion}+</span>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Update banner ─── */
function UpdateBanner({ season }: { season: SeasonEntry }) {
  return (
    <div className="glass-card !border-primary/20 p-4 flex items-center gap-4">
      <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
        <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground">Season {season.season} is available</p>
        <p className="text-xs text-muted truncate">{season.label} · {season.size}</p>
      </div>
      <button className="shimmer flex-shrink-0 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-background transition-all hover:shadow-glow-sm">
        Update
      </button>
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

      {/* Header */}
      <section ref={ref} className="relative border-b border-border bg-black">
        <div className="relative mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs text-muted fade-up">
            <Link href="/" className="hover:text-foreground transition-colors">Onliversity</Link>
            <span>›</span>
            <Link href="/#download" className="hover:text-foreground transition-colors">Apps</Link>
            <span>›</span>
            <span className="text-foreground">Pro Season Academy</span>
          </div>

          {/* App header */}
          <div className="flex gap-5 fade-up fade-up-delay-1">
            <AppIcon size={96} />
            <div className="flex-1 min-w-0">
              <h1 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{appInfo.name}</h1>
              <p className="text-sm text-primary font-medium mt-0.5">{appInfo.developer}</p>
              <p className="text-xs text-muted mt-1">{appInfo.category}</p>
              <div className="mt-2">
                <StarRating rating={latestSeason.rating} count={latestSeason.ratingCount} />
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-6 grid grid-cols-4 gap-2 sm:gap-4 fade-up fade-up-delay-2">
            <StatPill icon={<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>} value={`${latestSeason.rating}`} label="Rating" />
            <StatPill icon={<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>} value={latestSeason.downloads} label="Downloads" />
            <StatPill icon={<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>} value={latestSeason.size} label="Size" />
            <StatPill icon={<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>} value={appInfo.contentRating} label="Rating" />
          </div>

          {/* Download button */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row fade-up fade-up-delay-3">
            <Link href="/signup" className="shimmer flex-1 rounded-xl bg-primary px-6 py-3.5 text-center font-medium text-background text-base transition-all hover:shadow-glow-sm">Install — Free</Link>
            <button className="flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3.5 text-sm text-foreground transition-colors hover:border-primary/30">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              Add to wishlist
            </button>
          </div>

          {/* Update banner */}
          <div className="mt-4 fade-up fade-up-delay-4">
            <UpdateBanner season={latestSeason} />
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="border-b border-border bg-black">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
          <ScreenshotCarousel />
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
            {["FC Mobile", "Esports", "Coaching", "Private Academy", "Match Analysis", "Founder's Week"].map((tag) => (
              <span key={tag} className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* What's new — Season changelog */}
      <section className="border-b border-border bg-black">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-10">
          <p className="mono-label mb-5">What's new</p>

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

      {/* Data safety & permissions */}
      <section className="border-b border-border bg-black">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-10">
          <p className="mono-label mb-5">Data safety</p>
          <p className="text-xs text-muted mb-4">
            Safety starts with understanding how developers collect and share
            your data. Data privacy and security practices may vary based on
            your use, region, and age.
          </p>

          <div className="space-y-3">
            {appInfo.dataSafety.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer contact */}
      <section className="border-b border-border bg-black">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-10">
          <p className="mono-label mb-5">Developer</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Developer</span>
              <span className="text-sm text-foreground">{appInfo.developer}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Category</span>
              <span className="text-sm text-foreground">{appInfo.category}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Contains ads</span>
              <span className="text-sm text-foreground">No</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Price</span>
              <span className="text-sm text-primary font-medium">{appInfo.price}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Contact</span>
              <Link href="/signup" className="text-sm text-primary hover:underline">Founder contact</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Back to home CTA */}
      <section className="border-b border-border bg-black">
        <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-16">
          <h2 className="font-display text-2xl font-bold text-foreground">Ready to start?</h2>
          <p className="mt-2 text-sm text-muted">Season One is live. Founder&apos;s Week is active. 1,000 seats.</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/signup" className="shimmer rounded-lg bg-primary px-8 py-3 font-medium text-background transition-all hover:shadow-glow-sm">Install — Free</Link>
            <Link href="/" className="text-sm text-muted transition-colors hover:text-foreground">← Back to Onliversity</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
