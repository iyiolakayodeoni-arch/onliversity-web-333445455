"use client";
import { useScrollAnimation } from "./useScrollAnimation";

/**
 * WHY WE'RE DIFFERENT — comparison grid (They / We)
 */
export function MirrorWhyDifferent() {
  const ref = useScrollAnimation(0.08);

  const rows = [
    {
      theyT: "THEY TEACH THE GAME",
      theyD: "\"The mechanic that works\" is the whole product.",
      weT: "WE MAKE YOU SEE YOURSELF",
      weD: "The mechanic is a side note. Your matches, your moments, your contradictions are the main quest.",
    },
    {
      theyT: "AI COACHES THINK FOR YOU",
      theyD: "\"AI watched your match — here's what you did wrong.\"",
      weT: "THE MIRROR REFUSES TO",
      weD: "The machine records the evidence. The player does the seeing. A verdict you agree with is a verdict you forget.",
    },
    {
      theyT: "OPEN DISCORDS, NO STAKES",
      theyD: "Free, infinite, anonymous. Nothing is on the line.",
      weT: "ONE SEAT, ONE COACH, ONE STANDARD",
      weD: "1,000 seats. A permanent lock. A trial that converts or removes. The cap is the product.",
    },
    {
      theyT: "STAT TRACKERS COUNT",
      theyD: "W/D/L and pass accuracy.",
      weT: "WE CAPTURE THE GAP",
      weD: "What you intended, felt, believed — and where the recording disagreed. Nobody else builds that.",
    },
  ];

  return (
    <section ref={ref as any} id="difference" className="relative border-b border-border/60">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-20 sm:py-28 lg:py-32">
        <div className="fade-up max-w-[860px]">
          <p className="mono-label mb-4">Why we're different</p>
          <h2 className="font-display font-bold tracking-tight leading-[1.0] text-[24px] sm:text-[40px]">
            EVERYONE ELSE SELLS ANSWERS.
            <br />
            <span className="text-muted">WE MAKE YOUR CONVENIENT ANSWERS STOP WORKING.</span>
          </h2>
        </div>

        {/* Comparison grid */}
        <div className="mt-14 space-y-4">
          {rows.map((r, i) => (
            <div
              key={r.theyT}
              className="fade-up grid md:grid-cols-2 gap-4 sm:gap-5"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* They */}
              <div className="glass-card p-6 sm:p-7 opacity-80">
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-danger" />
                  <p className="font-mono text-[10px] uppercase tracking-widest text-danger/80">{r.theyT}</p>
                </div>
                <p className="text-[13px] leading-[1.7] text-muted">{r.theyD}</p>
              </div>
              {/* We */}
              <div className="glass-card !border-primary/20 p-6 sm:p-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <p className="font-mono text-[10px] uppercase tracking-widest text-primary">{r.weT}</p>
                </div>
                <p className="text-[13px] leading-[1.7] text-foreground/90">{r.weD}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div className="fade-up fade-up-delay-1 mt-14 text-center">
          <p className="font-display font-bold tracking-tight text-[18px] sm:text-[28px]">
            &ldquo;YOU CANNOT OUTRUN <span className="text-primary">YOUR RECEIPTS.</span>&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
