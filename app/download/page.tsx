"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";
import { EmailCapture } from "@/components/EmailCapture";
import { appInfo, seasons } from "@/lib/app-data";

const latestSeason = seasons.find((s) => s.isLatest)!;

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
function DownloadGlyph({ size = 28, className = "" }: { size?: number; className?: string }) {
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

/* ─── Fact pill ─── */
function FactPill({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <p className="font-display text-sm font-bold text-foreground">{value}</p>
      <p className="font-mono text-[9px] uppercase tracking-widest text-muted">{label}</p>
    </div>
  );
}

export default function DownloadPage() {
  const [state, setState] = useState<"checking" | "ready" | "pending">("checking");

  useEffect(() => {
    let cancelled = false;
    fetch(appInfo.downloadUrl, { method: "HEAD" })
      .then((r) => {
        if (!cancelled) setState(r.ok ? "ready" : "pending");
      })
      .catch(() => {
        if (!cancelled) setState("pending");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="min-h-screen bg-black">
      <Nav />

      {/* Header */}
      <section className="relative border-b border-border bg-black overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(57,255,106,0.10),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="relative mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs text-muted fade-up">
            <Link href="/" className="hover:text-foreground transition-colors">Onliversity</Link>
            <span>›</span>
            <Link href="/#app" className="hover:text-foreground transition-colors">Apps</Link>
            <span>›</span>
            <Link href="/pro-season-academy" className="hover:text-foreground transition-colors">ProSeasonAcademy</Link>
            <span>›</span>
            <span className="text-foreground">Download</span>
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

            {/* Status chip */}
            <div className="sm:ml-auto">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot" />
                Season One · Live
              </span>
              <p className="mt-2 text-right font-mono text-[10px] text-muted">
                v{latestSeason.season}.0 · {latestSeason.size} · Android {latestSeason.androidVersion}
              </p>
            </div>
          </div>

          {/* Facts row */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-4 fade-up fade-up-delay-2">
            <FactPill value="Live" label="Status" />
            <FactPill value={latestSeason.size} label="Size" />
            <FactPill value={`Android ${latestSeason.androidVersion}`} label="Version" />
            <FactPill value="1,000" label="Seats" />
          </div>
        </div>
      </section>

      {/* Download card */}
      <section className="border-b border-border bg-black">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="hud-border rounded-[24px] border border-border bg-surface-elevated/60 backdrop-blur-xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-border/60 bg-surface/50">
              <span className="font-mono text-[10px] text-muted/70">mirror / download — direct APK</span>
              <span className="font-mono text-[10px] text-primary flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot" />LIVE
              </span>
            </div>

            <div className="p-6 sm:p-10 text-center">
              {state === "checking" && (
                <div className="py-6 flex flex-col items-center gap-4">
                  <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary/20 border-t-primary" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Checking download…</p>
                </div>
              )}

              {state === "ready" && (
                <>
                  <p className="mono-label mb-3">Ready to install</p>
                  <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                    SEASON ONE IS IN YOUR HANDS.
                  </h2>
                  <p className="mx-auto mt-3 max-w-[480px] text-sm leading-relaxed text-muted">
                    Direct Android APK, signed by Onliversity. First week free — your Baseline
                    Week starts the moment you open it.
                  </p>
                  <div className="mt-8 flex flex-col items-center gap-3">
                    <a
                      href={appInfo.downloadUrl}
                      download
                      className="cta-energy shimmer inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 font-medium text-background transition-all hover:shadow-[0_0_30px_-6px_rgba(57,255,106,0.55)]"
                    >
                      <DownloadGlyph size={20} />
                      DOWNLOAD APK — {latestSeason.size}
                    </a>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                      {appInfo.downloadUrl.replace("/downloads/", "")}
                    </p>
                  </div>
                </>
              )}

              {state === "pending" && (
                <>
                  <p className="mono-label mb-3">Almost ready</p>
                  <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                    THE FINAL BUILD IS ALMOST DONE.
                  </h2>
                  <p className="mx-auto mt-3 max-w-[480px] text-sm leading-relaxed text-muted">
                    We&apos;re putting the last touches on Season One. Drop your email and
                    we&apos;ll send you the download link the moment it goes live — before
                    the public announcement.
                  </p>
                  <div className="mx-auto mt-8 max-w-[420px] text-left">
                    <EmailCapture ctaLabel="Send me the download" placeholder="your@email.com" />
                  </div>
                </>
              )}

              <div className="mt-8 flex flex-col items-center justify-center gap-3 border-t border-border/60 pt-6 font-mono text-[9px] uppercase tracking-[0.18em] text-muted sm:flex-row sm:gap-6">
                <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-primary" /> Free first week</span>
                <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-primary" /> Video never leaves your phone</span>
                <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-primary" /> Refunds for time not used</span>
              </div>
            </div>
          </div>

          {/* Install steps */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { n: "01", t: "Download the APK", d: "The file is signed by Onliversity — verify the filename before installing." },
              { n: "02", t: "Allow unknown sources", d: "Your phone will ask for permission to install apps from outside the Play Store. Accept it once." },
              { n: "03", t: "Open and start", d: "Your Baseline Week begins inside the app. Claim your seat, lock your coach, do the work." },
            ].map((s) => (
              <div key={s.n} className="rounded-xl border border-border bg-surface/40 p-5">
                <p className="font-mono text-[10px] text-primary">{s.n}</p>
                <p className="mt-2 font-display text-sm font-bold text-foreground">{s.t}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">{s.d}</p>
              </div>
            ))}
          </div>

          {/* Why no store */}
          <div className="mt-6 rounded-[20px] border border-primary/20 bg-primary/[0.06] px-6 py-5 text-center sm:px-8">
            <p className="text-[13px] leading-[1.7] text-foreground sm:text-[14px]">
              <strong className="text-primary">Why no Play Store?</strong>{" "}
              We will never be on one. The store is a feed of infinite, anonymous apps —
              the opposite of what this programme is. ProSeasonAcademy is capped at 1,000
              seats, and every seat is handled by us — that&apos;s how the cap and the
              permanent coach lock are enforced. Direct download isn&apos;t a workaround;
              it&apos;s the point. When the cap is full,{" "}
              <Link href="/signup" className="text-primary underline underline-offset-2 hover:text-foreground">join the waitlist</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Back home */}
      <section className="border-b border-border bg-black">
        <div className="mx-auto max-w-4xl px-4 py-10 text-center sm:px-6 sm:py-12">
          <p className="text-sm text-muted">Season One · 1,000 seats · One coach, locked permanently</p>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/pro-season-academy" className="rounded-lg border border-border bg-surface px-7 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40">
              ← See the app
            </Link>
            <Link href="/" className="text-sm text-muted transition-colors hover:text-foreground">
              ← Back to Onliversity
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
