"use client";

import { CourseCard } from "./CourseCard";
import { useScrollAnimation } from "./useScrollAnimation";

export function CoursesSection() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} id="courses" className="relative border-b border-border">
      <div className="ambient-orb ambient-orb-green w-[400px] h-[400px] top-0 right-0 opacity-10" />
      <div className="ambient-orb ambient-orb-amber w-[200px] h-[200px] bottom-1/4 left-1/4 opacity-10" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 md:py-32">
        <div className="text-center mb-12 fade-up">
          <p className="mono-label mb-3">Esports</p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Choose your journey.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted sm:text-lg">
            Each academy is a real pro&apos;s path — from grassroots to
            certification. Pick the journey that matches your game.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="fade-up fade-up-delay-1">
            <CourseCard
              name="Pro Season Academy"
              subtitle="Walk the path of an FC Mobile world champion. 6 stages. One real journey."
              course="pro-season"
              status="coming-soon"
            />
          </div>
          <div className="fade-up fade-up-delay-2">
            <CourseCard
              name="Fire Royale Academy"
              subtitle="Battle royale to pro. Your journey starts here."
              course="fire-royale"
              status="coming-soon"
            />
          </div>
          <div className="fade-up fade-up-delay-3 sm:col-span-2 lg:col-span-1">
            <CourseCard
              name="Duty Squad Academy"
              subtitle="Tactical. Precise. Your path to the top."
              course="duty-squad"
              status="coming-soon"
            />
          </div>
        </div>

        <div className="mt-12 divider-glow fade-up fade-up-delay-3" />

        <div className="mt-8 fade-up fade-up-delay-4">
          <p className="mono-label mb-5">Also on the way</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <CourseCard
              name="Content Creation"
              subtitle="Coming later."
              course="content-creation"
              status="coming-soon"
              size="compact"
            />
            <CourseCard
              name="Tech"
              subtitle="Coming later."
              course="tech"
              status="coming-soon"
              size="compact"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
