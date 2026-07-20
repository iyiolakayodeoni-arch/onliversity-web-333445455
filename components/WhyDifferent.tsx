"use client";

import { useScrollAnimation } from "./useScrollAnimation";

const rows = [
  { theirs: "One curriculum for everyone", ours: "A path built from one real person's actual career" },
  { theirs: "Grades and exams", ours: "Stages you actually clear, watched over as you go" },
  { theirs: "A degree that says you attended", ours: "A certification that shows exactly how you developed" },
  { theirs: "You graduate and you're on your own", ours: "You graduate, get certified, and can get paid to train the next wave" },
];

export function WhyDifferent() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="border-b border-border">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary fade-up sm:text-xs">
          Being honest about it
        </p>
        <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl fade-up fade-up-delay-1">
          How this is actually different
          <br className="hidden md:block" /> from traditional education.
        </h2>

        {/* Desktop: table */}
        <div className="mt-10 hidden overflow-hidden rounded border border-border md:block fade-up fade-up-delay-2">
          <div className="grid grid-cols-2 border-b border-border bg-surface">
            <div className="px-6 py-4 font-mono text-xs uppercase tracking-widest text-muted">Traditional education</div>
            <div className="px-6 py-4 font-mono text-xs uppercase tracking-widest text-primary">Onliversity</div>
          </div>
          {rows.map((row, i) => (
            <div key={i} className={`grid grid-cols-2 transition-colors hover:bg-surface/50 ${i !== rows.length - 1 ? "border-b border-border" : ""}`}>
              <div className="px-6 py-5 text-sm text-muted">{row.theirs}</div>
              <div className="px-6 py-5 text-sm text-foreground">{row.ours}</div>
            </div>
          ))}
        </div>

        {/* Mobile: stacked cards */}
        <div className="mt-8 space-y-3 md:hidden fade-up fade-up-delay-2">
          {rows.map((row, i) => (
            <div key={i} className="rounded border border-border bg-surface/30 p-4 transition-colors hover:bg-surface/50">
              <p className="font-mono text-[9px] uppercase tracking-widest text-muted">Traditional</p>
              <p className="mt-1 text-sm text-muted">{row.theirs}</p>
              <div className="my-3 h-px bg-border" />
              <p className="font-mono text-[9px] uppercase tracking-widest text-primary">Onliversity</p>
              <p className="mt-1 text-sm text-foreground">{row.ours}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
