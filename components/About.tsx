"use client";

import { useScrollAnimation } from "./useScrollAnimation";

export function About() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} id="about" className="relative border-b border-border">
      {/* Ambient orb */}
      <div className="ambient-orb ambient-orb-green w-[300px] h-[300px] top-0 right-0 opacity-20" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 md:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div className="fade-up">
            <p className="mono-label">About Onliversity</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Talent isn&apos;t the problem.
              <br />
              <span className="text-muted">Structure is.</span>
            </h2>
          </div>
          <div className="space-y-5 text-base text-muted leading-relaxed sm:text-lg fade-up fade-up-delay-2">
            <p>
              Kids get selected for real tournaments. They get real sponsorship
              interest, real chances to go pro. And they still get told to put it
              down and focus on their books — not because the talent isn&apos;t
              real, but because nothing around it has ever looked structured
              enough to take seriously.
            </p>
            <p className="text-foreground">
              Onliversity is that structure. We take real pro careers — their
              actual journeys from grassroots to championship — and turn them
              into structured paths you can walk. Stage by stage. With real
              coaching at every step.
            </p>
            <p>Esports is first. It won&apos;t be the only one.</p>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 fade-up fade-up-delay-3">
          {[
            { value: "100%", label: "Career-based" },
            { value: "6", label: "Stages per journey" },
            { value: "Real", label: "Coaching, not quizzes" },
            { value: "80/20", label: "Partner revenue split" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-5 text-center sm:p-6"
            >
              <p className="font-display text-2xl font-bold text-primary stat-display sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
