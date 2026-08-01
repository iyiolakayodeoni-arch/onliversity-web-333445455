"use client";
import { useScrollAnimation } from "./useScrollAnimation";

/**
 * THE ROAD — PROSEASONACADEMY, SEASON ONE & SEASON TWO
 * We stay focused: only ProSeasonAcademy. Season One builds the mirror.
 * Season Two turns it into tournament shape — coming soon.
 */
export function MirrorPlatform() {
  const ref = useScrollAnimation(0.08);

  return (
    <section ref={ref as any} id="next" className="relative border-b border-border/60 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(57,255,106,0.06),transparent_55%)]" />
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 py-20 sm:py-28 lg:py-32">
        <div className="fade-up max-w-[820px] mx-auto text-center">
          <p className="mono-label mb-4">The road · ProSeasonAcademy</p>
          <h2 className="font-display font-bold tracking-tight leading-[0.95] text-[32px] sm:text-[50px]">
            ONE ROAD. <span className="text-muted">TWO SEASONS.</span>
          </h2>
          <p className="mt-6 max-w-[720px] mx-auto text-[15px] sm:text-[16px] leading-[1.8] text-muted">
            We stay focused on one programme and one road. Season One is where you build the
            mirror — structure, discipline, evidence, receipts.{" "}
            <strong className="text-foreground">
              Season Two is where that becomes tournament shape.
            </strong>{" "}
            That is the whole plan, and we are not chasing anything else yet.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid sm:grid-cols-2 gap-4 sm:gap-5">
          <div className="fade-up glass-card !border-primary/20 p-6 sm:p-8 text-left">
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-1">
              Season One · Live now
            </p>
            <p className="font-display font-bold text-[22px] tracking-tight">
              THE MIRROR
            </p>
            <p className="mt-3 text-[14px] leading-[1.7] text-muted">
              Build the structure. Baseline Week, your Journey, the Mirror Sessions, the
              Thread. 1,000 seats. One coach, locked permanently. One standard, no excuses.
            </p>
          </div>
          <div className="fade-up glass-card p-6 sm:p-8 text-left fade-up-delay-1">
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1">
              Season Two · Coming soon
            </p>
            <p className="font-display font-bold text-[22px] tracking-tight">
              THE TOURNAMENT SHAPE
            </p>
            <p className="mt-3 text-[14px] leading-[1.7] text-muted">
              When Season One earns it, Season Two starts preparing you for the tournaments:
              the research, the preparation, the psychology. That is where discipline becomes
              results. Coming soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
