import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PitchPattern } from "@/components/PitchPattern";
import { Logo } from "@/components/Logo";
import { CourseDashboard } from "@/components/CourseDashboard";

export default function ProSeasonAcademyPage() {
  return (
    <main className="min-h-screen">
      <Nav />

      {/* Hero — esports-themed, futuristic university feel */}
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <PitchPattern />
        <div className="glow-primary pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
          <div className="mb-6 flex justify-center">
            <Logo size={56} />
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            Mirror · ProSeasonAcademy — the first programme
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            ProSeasonAcademy
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-muted">
            Mirror&apos;s professional development programme for FC Mobile players who want
            their behaviour to match their ambition. One coach. One road. One standard. No excuses.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="rounded border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary">
              Live · Season One · 1,000 seats
            </span>
            <span className="rounded border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
              6 stages · Your evidence moves you
            </span>
          </div>
        </div>
      </section>

      {/* Course Dashboard — the main gamified section */}
      <section className="border-b border-border bg-background">
        <CourseDashboard />
      </section>

      {/* What to expect */}
      <section className="border-b border-border bg-surface/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            How the method works
          </p>
          <h2 className="mt-3 max-w-lg font-display text-2xl font-bold tracking-tight">
            Not a course. A structure you walk.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded border border-border bg-surface-elevated/40 p-6">
              <p className="font-mono text-xs text-primary">01</p>
              <p className="mt-2 font-display font-bold">Baseline Week</p>
              <p className="mt-1 text-sm text-muted">
                Seven days, five matches, honest analysis. Your profile seals before the road opens.
              </p>
            </div>
            <div className="rounded border border-border bg-surface-elevated/40 p-6">
              <p className="font-mono text-xs text-primary">02</p>
              <p className="mt-2 font-display font-bold">The Mirror records. You see.</p>
              <p className="mt-1 text-sm text-muted">
                Set an intention before each match, answer at half-time and full-time in your own
                words, and watch your thinking sit beside the evidence. No AI verdicts.
              </p>
            </div>
            <div className="rounded border border-border bg-surface-elevated/40 p-6">
              <p className="font-mono text-xs text-primary">03</p>
              <p className="mt-2 font-display font-bold">Receipts, not promises</p>
              <p className="mt-1 text-sm text-muted">
                Six universal stages, moved forward only by your matches, answers and receipts.
                The app never thinks for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            Download the app.
          </h2>
          <p className="mt-3 text-sm text-muted">
            Season One is live. 1,000 seats. One coach, locked permanently.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/download"
              className="rounded bg-primary px-7 py-3 font-medium text-background transition-opacity hover:opacity-90"
            >
              Download the app
            </Link>
            <Link
              href="/"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
