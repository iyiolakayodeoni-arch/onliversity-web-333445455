"use client";

import { useState } from "react";
import { Coach, allCoaches } from "./CoachCharacters";
import { CoachStatCard } from "./CoachStatCard";
import { CinematicJourney } from "./CinematicJourney";

const coachImages: Record<string, string> = {
  "king-of-the-pitch": "/coaches/chinedu.jpg",
  "the-flair-merchant": "/coaches/obinna.png",
};

interface CoachSelectionProps {
  selectedCoach?: Coach | null;
}

export function CoachSelection({ selectedCoach }: CoachSelectionProps) {
  const [previewCoach, setPreviewCoach] = useState<Coach | null>(null);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">
          Meet Your Coaches
        </p>
        <h2 className="mb-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Two paths. Both real.
        </h2>
        <p className="mx-auto max-w-2xl text-base text-muted">
          Preview both coaches below. Tap a card to explore their journey stages. Coach selection happens inside the app after you complete your 5 placement matches.
        </p>
      </div>

      {/* Coach Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {allCoaches.map((coach) => (
          <div key={coach.id} className="relative">
            <CoachStatCard
              coach={coach}
              imageSrc={coachImages[coach.id]}
            />
          </div>
        ))}
      </div>

      {/* Journey Preview */}
      {previewCoach && (
        <div className="mt-12">
          <div className="mb-8 text-center">
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">
              Preview: {previewCoach.nickname}'s Path
            </p>
            <h3 className="mb-2 font-display text-2xl font-bold text-foreground">
              Stage by stage
            </h3>
            <p className="text-sm text-muted">
              This is what your journey looks like inside the app.
            </p>
          </div>
          <CinematicJourney coach={previewCoach} learnerStage={1} />
        </div>
      )}

      {/* Fictional Character Disclaimer */}
      <div className="mt-12 rounded-lg border border-border/40 bg-surface/20 p-5 text-center">
        <p className="text-xs text-muted leading-relaxed">
          <strong className="text-foreground">A quick note:</strong>{" "}
          Chinedu Okafor and Obinna Eze are <em>fictional coaches</em> created for Onliversity — they are not real FC Mobile professional players. The stages you'll walk are inspired by the real rise of a current professional player — reimagined through a fictional character, since we can't use a real pro's name or likeness. But the Journey, the match coaching, the skill checkpoints, and the certification you earn at the end are all{" "}
          <strong className="text-primary">100% real</strong>. The path is real. The character is not.
        </p>
      </div>
    </div>
  );
}
