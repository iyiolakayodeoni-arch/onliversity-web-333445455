"use client";

import { CourseCard } from "./CourseCard";
import { useScrollAnimation } from "./useScrollAnimation";

export function CoursesSection() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} id="courses" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary fade-up sm:text-xs">
          Esports
        </p>
        <h2 className="mt-3 max-w-xl font-display text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl fade-up fade-up-delay-1">
          Choose your journey.
        </h2>
        <p className="mt-2 max-w-lg text-sm text-muted sm:mt-3 sm:text-base fade-up fade-up-delay-2">
          Each academy is a real pro's path — from grassroots to certification. Pick the journey that matches your game.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          <div className="fade-up fade-up-delay-2">
            <CourseCard name="Pro Season Academy" subtitle="Walk the path of an FC Mobile world champion. 6 stages. One real journey." course="pro-season" status="coming-soon" />
          </div>
          <div className="fade-up fade-up-delay-3">
            <CourseCard name="Fire Royale Academy" subtitle="Battle royale to pro. Your journey starts here." course="fire-royale" status="coming-soon" />
          </div>
          <div className="fade-up fade-up-delay-4 sm:col-span-2 lg:col-span-1">
            <CourseCard name="Duty Squad Academy" subtitle="Tactical. Precise. Your path to the top." course="duty-squad" status="coming-soon" />
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 sm:mt-16 sm:pt-10 fade-up fade-up-delay-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted sm:text-xs">
            Also on the way
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">
            <CourseCard name="Content Creation" subtitle="Coming later." course="content-creation" status="coming-soon" size="compact" />
            <CourseCard name="Tech" subtitle="Coming later." course="tech" status="coming-soon" size="compact" />
          </div>
        </div>
      </div>
    </section>
  );
}
