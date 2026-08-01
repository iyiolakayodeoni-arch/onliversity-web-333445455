"use client";
import { useScrollAnimation } from "./useScrollAnimation";

/**
 * INSIDE THE APP — WHAT A MEMBER GETS
 */
export function MirrorInside() {
  const ref = useScrollAnimation(0.05);

  const features = [
    {
      t: "ONE COACH, PERMANENTLY",
      d: "Your lock-in is the first commitment. The app never offers a way back — on purpose.",
    },
    {
      t: "THE BASELINE WEEK",
      d: "Seven days, five matches, honest analysis. Your profile seals before the road opens.",
    },
    {
      t: "YOUR JOURNEY",
      d: "Six universal stages, machine-graded from your real receipts. No painted percentages.",
    },
    {
      t: "THE STANDARD",
      d: "The benchmark journey of the best in the path, revealed as you advance. Direction, not a task.",
    },
    {
      t: "THE MIRROR SESSION",
      d: "Intention → checkpoints → your key moments → comparison → one sworn lesson. You do the seeing.",
    },
    {
      t: "THE THREAD",
      d: "Your lesson loop. Every session asks how the last lesson held or broke.",
    },
    {
      t: "MATCH VAULT",
      d: "Every match logged in ~15 seconds. The receipt your stages are graded from.",
    },
    {
      t: "LOSS JOURNAL",
      d: "One honest line per loss. The pattern you write is the pattern he fixes.",
    },
    {
      t: "THE CLUBHOUSE",
      d: "Channels, DMs, reactions, squads. Real-time. The founder reads the serious stuff himself.",
    },
    {
      t: "LOCAL RECORDING",
      d: "Screen capture with your consent. Raw video stays on your phone — never uploaded.",
    },
  ];

  return (
    <section ref={ref as any} id="inside" className="relative border-b border-border/60 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_90%,rgba(57,255,106,0.06),transparent_55%)]" />
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 py-20 sm:py-28 lg:py-32">
        <div className="fade-up flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <p className="mono-label mb-3">Inside the app · What a member gets</p>
            <h2 className="font-display font-bold text-[32px] sm:text-[44px] leading-[0.95] tracking-tight">
              INSIDE <span className="text-muted">THE ACADEMY</span>
            </h2>
          </div>
          <p className="max-w-[420px] text-[14px] leading-[1.7] text-muted">
            Every tool exists for one reason: to place your own thinking beside the
            evidence until self-deception stops working.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {features.map((f, i) => (
            <div
              key={f.t}
              className={`fade-up glass-card tilt-card p-6 sm:p-6 text-left ${i === 0 ? "!border-primary/20" : ""}`}
              style={{ transitionDelay: `${Math.min(i * 0.05, 0.3)}s` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-[10px] text-primary/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="font-display font-bold text-[15px] tracking-tight">{f.t}</p>
              <p className="mt-2 text-[13px] leading-[1.7] text-muted">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
