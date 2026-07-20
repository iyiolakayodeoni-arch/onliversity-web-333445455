"use client";

import { Coach } from "./CoachCharacters";
import { CoachCard } from "./CoachCard";

interface CoachStatCardProps {
  coach: Coach;
  imageSrc: string;
}

export function CoachStatCard({ coach, imageSrc }: CoachStatCardProps) {
  return (
    <CoachCard
      coach={coach}
      imageSrc={imageSrc}
    />
  );
}
