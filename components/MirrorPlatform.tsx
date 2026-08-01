"use client";
import { useScrollAnimation } from "./useScrollAnimation";

/**
 * THE PLATFORM — MORE THAN ONE GAME
 * ProSeasonAcademy is the template every future Onliversity course is built from.
 */
export function MirrorPlatform() {
  const ref = useScrollAnimation(0.08);

  const crafts = ["competitive gaming", "music", "writing", "business", "art"];

  return (
    <section ref={ref as any} id="platform" className="relative border-b border-border/60 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(57,255,106,0.06),transparent_55%)]" />
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 py-20 sm:py-28 lg:py-32">
        <div className="fade-up max-w-[820px] mx-auto text-center">
          <p className="mono-label mb-4">The platform · More than one game</p>
          <h2 className="font-display font-bold tracking-tight leading-[0.95] text-[32px] sm:text-[50px]">
            ONE METHOD. <span className="text-muted">ANY CRAFT.</span>
          </h2>
          <p className="mt-6 max-w-[720px] mx-auto text-[15px] sm:text-[16px] leading-[1.8] text-muted">
            ProSeasonAcademy is the proof. The Mirror method was built to travel. Any serious
            pursuit — {crafts.join(", ")} — runs on the same engine: record the evidence,
            preserve your own thinking, place intention beside outcome, and make
            self-deception difficult to maintain.{" "}
            <strong className="text-foreground">The coach changes. The craft changes. The structure stays.</strong>
          </p>
          <p className="mt-4 text-[14px] leading-[1.7] text-foreground/85">
            If ProSeasonAcademy can make FC Mobile players behave like professionals, imagine what
            it does for the rest of your ambitions.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid sm:grid-cols-2 gap-4 sm:gap-5">
          <div className="fade-up glass-card !border-primary/20 p-6 sm:p-8 text-left">
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-1">
              The first programme — live now
            </p>
            <p className="font-display font-bold text-[22px] tracking-tight">
              PROSEASONACADEMY
            </p>
            <p className="mt-3 text-[14px] leading-[1.7] text-muted">
              Season One is open. 1,000 seats. One road, one standard, no excuses.
            </p>
          </div>
          <div className="fade-up glass-card p-6 sm:p-8 text-left fade-up-delay-1">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-1">
              Next path · coming soon
            </p>
            <p className="font-display font-bold text-[22px] tracking-tight">
              EVERY FUTURE COURSE WALKS THE SAME ROAD
            </p>
            <p className="mt-3 text-[14px] leading-[1.7] text-muted">
              Baseline week → your journey → the mirror session → the thread → proof.
              ProSeasonAcademy is the template every future Onliversity course is built from.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
