"use client";

import { useScrollAnimation } from "./useScrollAnimation";

export function About() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} id="about" className="relative border-b border-border">
      <div className="ambient-orb ambient-orb-green w-[300px] h-[300px] top-0 right-0 opacity-20" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 md:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div className="fade-up">
            <p className="mono-label">What this is</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              A private academy.
              <br />
              <span className="text-muted">Not an app store download.</span>
            </h2>
          </div>
          <div className="space-y-5 text-base text-muted leading-relaxed sm:text-lg fade-up fade-up-delay-2">
            <p>
              Pro Season Academy is a <strong className="text-foreground">private FC Mobile performance academy</strong>{" "}
              inside the Onliversity ecosystem. It is not a public game-tips app,
              an open chat group, or a content library.
            </p>
            <p>
              You enter through a controlled door. You choose{" "}
              <strong className="text-foreground">one coach</strong> and commit
              permanently. You complete a serious five-match baseline assessment.
              You train through a staged coaching journey. You log and reflect on
              real FC Mobile matches. You prove progress through structured scans.
            </p>
            <p className="text-foreground">
              Season One has 1,000 seats. That&apos;s deliberate, fair, and
              real — not fake scarcity. A seat gives you entry to a serious
              academy and direct founder proximity.
            </p>
            <p>
              Pro Season Academy is the <strong className="text-foreground">first academy</strong> inside
              Onliversity. It&apos;s the foundation — the model that proves this works.
              Music, content creation, software engineering, and more esports academies are all planned.
              This is just the beginning.
            </p>
          </div>
        </div>

        {/* What you do inside */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 fade-up fade-up-delay-3">
          {[
            {
              icon: "🎯",
              title: "Choose your coach",
              desc: "One permanent choice. Two distinct worlds. No hopping.",
            },
            {
              icon: "📊",
              title: "5-match baseline",
              desc: "A real starting assessment — composure, reflection, ambition.",
            },
            {
              icon: "🏟️",
              title: "Walk 6 stages",
              desc: "Your coach's real journey from grassroots to championship.",
            },
            {
              icon: "🎥",
              title: "Log real matches",
              desc: "Match Vault, Loss Journal, Match Scan — prove your progress.",
            },
          ].map((item) => (
            <div key={item.title} className="glass-card p-5 sm:p-6">
              <p className="text-2xl mb-3">{item.icon}</p>
              <h3 className="font-display text-sm font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-xs text-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
