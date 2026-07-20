"use client";

import { Coach } from "./CoachCharacters";

interface CoachPortraitProps {
  coach: Coach;
  size?: number;
  className?: string;
}

const coachImages: Record<string, string> = {
  "king-of-the-pitch": "/coaches/chinedu.jpg",
  "the-flair-merchant": "/coaches/obinna.png",
};

export function CoachPortrait({ coach, size = 120, className = "" }: CoachPortraitProps) {
  const imageSrc = coachImages[coach.id] || "/coaches/chinedu.jpg";

  return (
    <div
      className={`coach-portrait ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={imageSrc}
        alt={coach.name}
        draggable={false}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          borderRadius: "50%",
          border: "2px solid rgba(57, 255, 106, 0.3)",
        }}
      />
    </div>
  );
}
