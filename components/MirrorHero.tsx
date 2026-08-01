"use client";
import Link from "next/link";
import { useScrollAnimation } from "./useScrollAnimation";
import { Logo } from "./Logo";

/**
 * HERO — MIRROR · PROSEASONACADEMY
 * SEE YOURSELF. DO THE WORK.
 * Moved-to-mirror aesthetic: restrained, reflective, no noise.
 */
export function MirrorHero() {
  const ref = useScrollAnimation(0.1);

  return (
    <section ref={ref as any} className="relative overflow-hidden border-b border-border/60">
      {/* Reflective ambient — subtle, not neon */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(57,255,106,0.10),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 py-20 sm:py-28 lg:py-36">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-14 items-center">
          {/* Left — copy */}
          <div>
            <div className="fade-up flex items-center gap-3 mb-7">
              <Logo size={30} />
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
                Mirror · ProSeasonAcademy
              </span>
            </div>

            <h1 className="fade-up fade-up-delay-1 font-display font-bold tracking-tight leading-[0.92] text-[36px] sm:text-[60px] lg:text-[72px]">
              SEE YOURSELF.
              <br />
              <span className="text-muted">DO THE WORK.</span>
            </h1>

            <p className="fade-up fade-up-delay-2 mt-7 max-w-[560px] text-[15px] sm:text-[17px] leading-[1.7] text-muted">
              ProSeasonAcademy is Mirror&apos;s professional development programme for FC Mobile
              players who want their behaviour to match their ambition.{" "}
              <strong className="text-foreground">One coach. One road. One standard. No excuses.</strong>
            </p>

            <div className="fade-up fade-up-delay-3 mt-9 flex flex-col sm:flex-row items-stretch gap-3">              <Link
                href="/signup"
                className="cta-energy shimmer rounded-xl bg-primary px-7 py-4 text-center font-medium text-background transition-all hover:shadow-[0_0_30px_-6px_rgba(57,255,106,0.55)]"
              >
                JOIN THE WAITLIST
              </Link>
              <a
                href="#programme"
                className="rounded-xl border border-border bg-surface px-7 py-4 text-center font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-surface/60"
              >
                MEET THE COACHES
              </a>
            </div>

            {/* Trust strip */}
            <div className="fade-up fade-up-delay-4 mt-10 flex flex-col sm:flex-row gap-3 sm:gap-6 border-t border-border/60 pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-primary" /> Season One · 1,000 seats only
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-primary" /> One coach · locked permanently
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-primary" /> The Mirror does not think for you
              </span>
            </div>
          </div>

          {/* Right — reflective panel (visible on all screens; stacks under copy on phones) */}
          <div className="fade-up fade-up-delay-2 flex justify-center">
            <div className="relative w-full max-w-[420px]">
              <div className="absolute -inset-8 bg-[radial-gradient(ellipse_at_center,rgba(57,255,106,0.07),transparent_65%)] blur-2xl" />
              <div className="hud-border relative rounded-[24px] border border-border bg-surface-elevated/60 backdrop-blur-xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7)]">
                <div className="flex items-center justify-between px-5 py-3 border-b border-border/60 bg-surface/50">
                  <span className="font-mono text-[10px] text-muted/70">mirror / session — baseline</span>
                  <span className="font-mono text-[10px] text-primary flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot" />REC
                  </span>
                </div>
                <div className="p-6">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-4">
                    Intention before the match
                  </p>
                  <p className="text-sm leading-relaxed text-foreground">
                    &ldquo;I will not rush my finishing inside the box.&rdquo;
                  </p>
                  <div className="mt-6 space-y-3">
                    {[
                      { k: "Half-time", v: "Two forced shots, boxed in" },
                      { k: "Full-time", v: "Rushed again at 88'" },
                      { k: "After review", v: "Saw the pattern you wrote" },
                    ].map((r) => (
                      <div key={r.k} className="flex items-center justify-between gap-4 rounded-xl bg-background border border-border px-4 py-3">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-muted">{r.k}</span>
                        <span className="text-xs text-foreground/90 text-right">{r.v}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between font-mono text-[10px] text-muted">
                    <span>The Mirror does not think for you.</span>
                    <span className="text-primary">●</span>
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
