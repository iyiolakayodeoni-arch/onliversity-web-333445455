"use client";

import { Coach, CoachJourney } from "./CoachCharacters";

interface CinematicJourneyProps {
  coach: Coach;
  learnerStage: number; // 0 = not started, 1-6 = current stage
}

export function CinematicJourney({ coach, learnerStage }: CinematicJourneyProps) {
  return (
    <div className="relative">
      {/* Journey Path Container */}
      <div className="relative mx-auto max-w-4xl">
        {/* Winding Path Background */}
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent" />

        {/* Stage Nodes */}
        <div className="relative space-y-12">
          {coach.journey.map((stage, index) => {
            const stageNumber = index + 1;
            const isReached = learnerStage >= stageNumber;
            const isCurrent = learnerStage === stageNumber;
            const isLocked = learnerStage < stageNumber;

            return (
              <div
                key={stage.stage}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Stage Card */}
                <div
                  className={`w-5/12 rounded-lg border p-5 transition-all ${
                    isReached
                      ? "border-primary/40 bg-surface-elevated shadow-[0_0_20px_-5px_rgba(57,255,106,0.15)]"
                      : isLocked
                      ? "border-border bg-surface/30 opacity-50"
                      : "border-primary/60 bg-surface-elevated shadow-[0_0_30px_-5px_rgba(57,255,106,0.25)]"
                  }`}
                >
                  {/* Stage Header */}
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-primary">
                      Stage {stage.stage}
                    </span>
                    <span className="font-mono text-xs text-muted">{stage.year}</span>
                  </div>

                  {/* Stage Title */}
                  <h3 className="mb-2 font-display text-lg font-bold text-foreground">
                    {stage.title}
                  </h3>

                  {/* Stage Description */}
                  <p className="text-sm text-muted">{stage.description}</p>

                  {/* Current Stage Indicator */}
                  {isCurrent && (
                    <div className="mt-4 flex items-center gap-2">
                      <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                      <span className="font-mono text-xs uppercase tracking-widest text-primary">
                        You are here
                      </span>
                    </div>
                  )}

                  {/* Locked Stage Indicator */}
                  {isLocked && (
                    <div className="mt-4 flex items-center gap-2">
                      <svg className="h-4 w-4 text-muted/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span className="font-mono text-xs text-muted/50">Complete previous stage to unlock</span>
                    </div>
                  )}
                </div>

                {/* Center Node */}
                <div className="absolute left-1/2 -translate-x-1/2">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all ${
                      isReached
                        ? "border-primary bg-primary/10 text-primary"
                        : isLocked
                        ? "border-border bg-surface text-muted/30"
                        : "border-primary bg-primary/20 text-primary shadow-[0_0_20px_rgba(57,255,106,0.4)]"
                    }`}
                  >
                    <span className="font-mono text-sm font-bold">{stage.stage}</span>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="w-5/12" />
              </div>
            );
          })}
        </div>

        {/* Final Milestone - Certification */}
        <div className="mt-16 flex justify-center">
          <div className="rounded-lg border border-accent/40 bg-accent/5 p-6 text-center shadow-[0_0_30px_-5px_rgba(242,192,120,0.2)]">
            <div className="mb-3 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent bg-accent/10">
                <svg className="h-8 w-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 font-display text-xl font-bold text-accent">Certified & Partner</h3>
            <p className="text-sm text-muted">
              Complete the journey to earn your certification and unlock the 80/20 partnership — train the next generation and keep 80% of every session.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
