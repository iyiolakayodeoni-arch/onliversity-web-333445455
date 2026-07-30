"use client";

import { useScrollAnimation } from "./useScrollAnimation";

const features = [
  {
    label: "Film Room",
    desc: "Your coach leads a focused one-way session: the current mechanic, why it matters, practical steps, the coach's rule, and stage objectives. Like being coached — not reading an article.",
  },
  {
    label: "Match Vault",
    desc: "Log real FC Mobile matches: scoreline, mode, opponent style, composure, whether you used the taught mechanic. An honour-system record that makes you notice patterns.",
  },
  {
    label: "Loss Journal",
    desc: "One short line after a loss. Choose a cause — defending, finishing, composure, kickoff gap — add a note, and keep a record. The pattern you write is the pattern he fixes.",
  },
  {
    label: "Match Scan",
    desc: "Stage checkpoint combining your Vault evidence, the coached mechanic (The Eye), your composure and self-awareness (The Mind), and a coach reading. Pass = XP + badge + next stage.",
  },
  {
    label: "Community / The Halls",
    desc: "Academy rooms to celebrate wins, discuss losses, share progress. The founder is visible and responsive. Not an uncontrolled public social network.",
  },
  {
    label: "Founder Contact",
    desc: "A private line to the founder for questions, suggestions, bugs, support, or payment issues. A real line to a real person — not a fake chatbot ticket queue.",
  },
];

export function WhyDifferent() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} id="features" className="relative border-b border-border">
      <div className="ambient-orb ambient-orb-green w-[300px] h-[300px] top-1/3 -left-20 opacity-15" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 md:py-32">
        <div className="text-center mb-12 fade-up">
          <p className="mono-label mb-3">Inside the academy</p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            What you do inside.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted sm:text-lg">
            Every feature exists to make you better at FC Mobile — not to fill
            a screen with content.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.label}
              className={`glass-card p-6 fade-up fade-up-delay-${Math.min(i + 1, 4)}`}
            >
              <h3 className="font-display text-base font-bold text-foreground">
                {f.label}
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
