"use client";

import { useScrollAnimation } from "./useScrollAnimation";

const rows = [
  {
    theirs: "One curriculum for everyone",
    ours: "A path built from one real person's actual career",
  },
  {
    theirs: "Grades and exams",
    ours: "Stages you actually clear, watched over as you go",
  },
  {
    theirs: "A degree that says you attended",
    ours: "A certification that shows exactly how you developed",
  },
  {
    theirs: "You graduate and you're on your own",
    ours: "You graduate, get certified, and can get paid to train the next wave",
  },
];

export function WhyDifferent() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="relative border-b border-border">
      <div className="ambient-orb ambient-orb-green w-[300px] h-[300px] top-1/3 -left-20 opacity-15" />

      <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28 md:py-32">
        <p className="mono-label fade-up">Being honest about it</p>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl fade-up fade-up-delay-1">
          How this is actually different
          <br className="hidden md:block" />{" "}
          <span className="text-muted">from traditional education.</span>
        </h2>

        {/* Desktop: table */}
        <div className="mt-12 hidden overflow-hidden rounded-xl glass-card md:block fade-up fade-up-delay-2">
          <div className="grid grid-cols-2 border-b border-border bg-surface/30">
            <div className="px-6 py-4 font-mono text-xs uppercase tracking-widest text-muted">
              Traditional education
            </div>
            <div className="px-6 py-4 font-mono text-xs uppercase tracking-widest text-primary">
              Onliversity
            </div>
          </div>
          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 transition-colors hover:bg-surface/30 ${
                i !== rows.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="px-6 py-5 text-sm text-muted">{row.theirs}</div>
              <div className="px-6 py-5 text-sm text-foreground font-medium">
                {row.ours}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: stacked cards */}
        <div className="mt-8 space-y-3 md:hidden fade-up fade-up-delay-2">
          {rows.map((row, i) => (
            <div
              key={i}
              className="glass-card p-5"
            >
              <p className="font-mono text-[9px] uppercase tracking-widest text-muted">
                Traditional
              </p>
              <p className="mt-1 text-sm text-muted">{row.theirs}</p>
              <div className="my-3 divider-glow" />
              <p className="font-mono text-[9px] uppercase tracking-widest text-primary">
                Onliversity
              </p>
              <p className="mt-1 text-sm text-foreground font-medium">
                {row.ours}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
