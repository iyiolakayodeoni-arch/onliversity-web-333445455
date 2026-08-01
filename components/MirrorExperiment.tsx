"use client";
import Link from "next/link";
import { useScrollAnimation } from "./useScrollAnimation";

/**
 * THE EXPERIMENT — THE APP IS THE MAIN THING
 *
 * Positions FC Mobile Pro as the experiment that proves the Mirror method
 * and properly starts every other Onliversity course — while making clear
 * it is a real, proper product, not a beta or a test.
 */
export function MirrorExperiment() {
  const ref = useScrollAnimation(0.08);

  const points = [
    {
      t: "IT IS A PROPER PRODUCT",
      d: "Fully built. Priced. Capped at 1,000 seats. Real coaching, real receipts, real support — not a beta and not a demo.",
    },
    {
      t: "IT IS THE EXPERIMENT",
      d: "Onliversity doesn't open ten courses and hope. We run one serious experiment first and watch the receipts before we build more.",
    },
    {
      t: "YOUR SEAT OPENS THE REST",
      d: "Every other course inherits this structure. Your Baseline Week, Journey, Mirror Sessions and Thread are the template the next path is built from.",
    },
  ];

  return (
    <section ref={ref as any} id="app" className="relative border-b border-border/60 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(57,255,106,0.10),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 py-20 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Copy */}
          <div className="lg:col-span-7">
            <div className="fade-up">
              <p className="mono-label mb-4">The experiment · The app</p>
              <h2 className="font-display font-bold tracking-tight leading-[0.95] text-[28px] sm:text-[44px]">
                AN EXPERIMENT <span className="text-muted">ON PURPOSE.</span>
                <br />
                A PRODUCT <span className="text-primary">FOR REAL.</span>
              </h2>
            </div>

            <div className="fade-up fade-up-delay-1 mt-6 max-w-[620px] space-y-4 text-[15px] sm:text-[16px] leading-[1.8] text-muted">
              <p>
                Onliversity doesn&apos;t open ten courses and hope something sticks. We run{" "}
                <strong className="text-foreground">one serious experiment first</strong>: FC Mobile
                Pro, built on the Mirror method. It is the proving ground for the whole platform.
              </p>
              <p>
                But make no mistake — <strong className="text-foreground">it is a proper product.</strong>{" "}
                Not a beta, not a demo, not a teaser. It is fully built, priced, and capped, with real
                coaching, real receipts and real support. We&apos;re just honest about the job it does: it
                proves the method — and it pays for the courses we open next.
              </p>
            </div>

            {/* Points */}
            <div className="fade-up fade-up-delay-2 mt-8 grid sm:grid-cols-3 gap-3">
              {points.map((p) => (
                <div key={p.t} className="glass-card p-4">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-primary">{p.t}</p>
                  <p className="mt-2 text-[12px] leading-[1.6] text-muted">{p.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Download panel */}
          <div className="lg:col-span-5">
            <div className="fade-up fade-up-delay-1 relative">
              <div className="absolute -inset-6 bg-[radial-gradient(ellipse_at_center,rgba(57,255,106,0.08),transparent_65%)] blur-2xl" />
              <div className="hud-border relative rounded-[24px] border border-primary/20 bg-surface-elevated/60 backdrop-blur-xl p-7 sm:p-8 text-center overflow-hidden">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot" /> Season One · Live
                </span>

                <p className="mt-6 font-display font-bold text-[22px] leading-[0.95] tracking-tight">
                  THE APP IS THE MAIN THING.
                </p>
                <p className="mt-3 text-[13px] leading-[1.7] text-muted">
                  Everything lives inside <strong className="text-foreground">ProSeasonAcademy</strong> —
                  Baseline Week, your Journey, the Mirror Sessions. One download starts the experiment
                  that starts everything else.
                </p>

                <div className="mt-7 flex flex-col gap-3">
                  <Link
                    href="/pro-season-academy"
                    className="cta-energy shimmer rounded-xl bg-primary px-7 py-4 font-medium text-background transition-all hover:shadow-[0_0_30px_-6px_rgba(57,255,106,0.55)]"
                  >
                    DOWNLOAD PROSEASONACADEMY
                  </Link>
                  <Link
                    href="/pro-season-academy"
                    className="rounded-xl border border-border bg-background/60 px-7 py-3.5 font-medium text-foreground transition-colors hover:border-primary/40"
                  >
                    START YOUR BASELINE WEEK
                  </Link>
                </div>

                <div className="mt-6 flex items-center justify-center gap-4 font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                  <span>Proper product</span>
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  <span>1,000 seats</span>
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  <span>Free first week</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
