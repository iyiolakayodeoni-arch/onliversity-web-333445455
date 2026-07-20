"use client";

import { useScrollAnimation } from "./useScrollAnimation";

export function About() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} id="about" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <div className="fade-up">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary sm:text-xs">
              About Onliversity
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Talent isn&apos;t the problem.
              <br className="hidden sm:block" />
              Structure is.
            </h2>
          </div>
          <div className="space-y-4 text-sm text-muted sm:space-y-5 sm:text-base fade-up fade-up-delay-2">
            <p>
              Kids get selected for real tournaments. They get real sponsorship
              interest, real chances to go pro. And they still get told to put
              it down and focus on their books — not because the talent
              isn&apos;t real, but because nothing around it has ever looked
              structured enough to take seriously.
            </p>
            <p className="text-foreground">
              Onliversity is that structure. We take real pro careers — their actual journeys from grassroots to championship — and turn them into structured paths you can walk. Stage by stage. With real coaching at every step.
            </p>
            <p>
              Esports is first. It won&apos;t be the only one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
