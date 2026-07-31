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
            Esports · Built for FC Mobile players
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Pro Season Academy
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-muted">
            A gamified, structured path from grassroots to pro — with AI coaching, XP progression, and a real certification at the end.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="rounded border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary">
              Launches Jan 1, 2027
            </span>
            <span className="rounded border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
              6 Stages · 2000 XP
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
            How it works
          </p>
          <h2 className="mt-3 max-w-lg font-display text-2xl font-bold tracking-tight">
            Not a course. A real path.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded border border-border bg-surface-elevated/40 p-6">
              <p className="font-mono text-xs text-primary">01</p>
              <p className="mt-2 font-display font-bold">Real matching</p>
              <p className="mt-1 text-sm text-muted">
                Your playstyle gets matched to a real FC Mobile pro — not a random assignment.
              </p>
            </div>
            <div className="rounded border border-border bg-surface-elevated/40 p-6">
              <p className="font-mono text-xs text-primary">02</p>
              <p className="mt-2 font-display font-bold">AI Coach watches you</p>
              <p className="mt-1 text-sm text-muted">
                Post-match breakdowns and check-ins, in your coach's own voice, the whole way through.
              </p>
            </div>
            <div className="rounded border border-border bg-surface-elevated/40 p-6">
              <p className="font-mono text-xs text-primary">03</p>
              <p className="mt-2 font-display font-bold">Certification + Income</p>
              <p className="mt-1 text-sm text-muted">
                Finish with a real certificate — and earn 80% training the next wave.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            Ready to start your journey?
          </h2>
          <p className="mt-3 text-sm text-muted">
            Download ProSeason Academy to get started.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/pro-season-academy"
              className="rounded bg-primary px-7 py-3 font-medium text-background transition-opacity hover:opacity-90"
            >
              Download ProSeason Academy
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
