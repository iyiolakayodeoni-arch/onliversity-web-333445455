"use client";

import { useState, useEffect } from "react";
import { Coach, CoachJourney, JourneyTask } from "./CoachCharacters";
import { CoachPortrait } from "./CoachPortrait";
import { CinematicJourney } from "./CinematicJourney";

interface JourneyDashboardProps {
  coach: Coach;
  currentStage: number;
  username: string;
}

export function JourneyDashboard({ coach, currentStage, username }: JourneyDashboardProps) {
  const [currentJourneyStage, setCurrentJourneyStage] = useState<CoachJourney | null>(null);
  const [showJourney, setShowJourney] = useState(false);

  useEffect(() => {
    const stage = coach.journey[currentStage - 1];
    if (stage) {
      setCurrentJourneyStage(stage);
    }
  }, [coach, currentStage]);

  if (!currentJourneyStage) {
    return (
      <div className="mx-auto max-w-6xl px-3 py-6 sm:px-6 sm:py-8">
        <div className="rounded-lg border border-border bg-surface-elevated p-8 text-center">
          <p className="text-muted">Loading your journey...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-3 py-6 sm:px-6 sm:py-8">
      {/* Header with Coach Character */}
      <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6">
        {/* Coach Portrait */}
        <div className="flex-shrink-0">
          <CoachPortrait coach={coach} size={120} />
        </div>

        {/* Coach Message */}
        <div className="flex-1">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-primary">
            {coach.nickname} says
          </p>
          <div className="rounded-lg border border-border/50 bg-surface-elevated/50 p-4">
            <p className="text-sm italic text-foreground">
              &ldquo;{getCoachMessageForStage(coach, currentStage)}&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Current Stage Title */}
      <div className="mb-8">
        <p className="mb-1 font-mono text-xs uppercase tracking-widest text-primary">
          Stage {currentJourneyStage.stage} · {currentJourneyStage.year}
        </p>
        <h2 className="mb-2 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {currentJourneyStage.title}
        </h2>
        <p className="text-sm text-muted sm:text-base">{currentJourneyStage.description}</p>
      </div>

      {/* Cinematic Journey Path */}
      <div className="mb-8">
        <CinematicJourney coach={coach} learnerStage={currentStage} />
      </div>

      {/* Next Moment - Tasks for Current Stage */}
      <div className="mb-8">
        <div className="mb-4 flex items-center gap-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            Your Next Moment on {coach.nickname}&rsquo;s Path
          </p>
        </div>

        <div className="space-y-3">
          {getTasksForStage(coach, currentStage).map((task, index) => (
            <JourneyTaskCard key={index} task={task} coach={coach} />
          ))}
        </div>
      </div>

      {/* Journey-Aware Coaching */}
      <div className="rounded-lg border border-primary/20 bg-surface-elevated p-6">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
          From {coach.nickname}&rsquo;s Playbook
        </p>
        <p className="text-sm text-muted">
          {getCoachingForStage(coach, currentStage)}
        </p>
      </div>
    </div>
  );
}

function JourneyTaskCard({ task, coach }: { task: JourneyTask; coach: Coach }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-surface-elevated/50 p-4 transition-all hover:border-primary/40">
      <div className="absolute top-0 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full" />
      <div className="flex items-start justify-between">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
            {task.type}
          </span>
          <h4 className="mt-1 font-display text-sm font-bold text-foreground">
            {task.title}
          </h4>
          <p className="mt-1 text-xs text-muted">{task.description}</p>
        </div>
        <span className="font-mono text-xs text-muted">{task.duration}</span>
      </div>
    </div>
  );
}

function getCoachMessageForStage(coach: Coach, stage: number): string {
  const messages: Record<number, string> = {
    1: "Welcome to the journey, boss. This is where it all started for me — just playing with friends, no pressure. Take your time here. Master the basics.",
    2: "First tournament energy. I remember this — the nerves, the excitement. You'll learn more in one tournament than in ten practice sessions. Let's get you ready.",
    3: "This is where I learned what high-pressure really means. The crowd, the stakes, everything on the line. You'll face your version of this. I'll make sure you're ready.",
    4: "The big one. World champion stage. This is where discipline meets opportunity. Everything you've built so far converges here. No shortcuts, chairman.",
    5: "Back-to-back. The pressure of defending a title is different from winning it. This stage is about mental strength, not just skill. We'll work on both.",
    6: "The final chapter. Building something bigger than yourself. This is where the journey becomes legacy. Let's finish strong.",
  };

  return messages[stage] || messages[1];
}

function getTasksForStage(coach: Coach, stage: number): JourneyTask[] {
  const tasksByStage: Record<number, JourneyTask[]> = {
    1: [
      {
        title: "Master the Basics",
        type: "Lesson",
        duration: "20 min",
        description: "Learn fundamental controls, formations, and decision-making patterns.",
      },
      {
        title: "Play 3 Practice Matches",
        type: "Match",
        duration: "30 min",
        description: "Apply what you've learned in low-pressure matches. Focus on possession, not winning.",
      },
      {
        title: "Watch: Chinedu's First Match Replay",
        type: "Video",
        duration: "15 min",
        description: "See how I played when I was just starting. Notice the patience, the positioning.",
      },
    ],
    2: [
      {
        title: "Tournament Mindset",
        type: "Lesson",
        duration: "25 min",
        description: "How to handle nerves, pressure, and the unique energy of live competition.",
      },
      {
        title: "Win 5 Competitive Matches",
        type: "Match",
        duration: "60 min",
        description: "Treat each match like a tournament game. No casual play. Full focus.",
      },
      {
        title: "Post-Match Analysis",
        type: "Coach Session",
        duration: "20 min",
        description: "We'll review your matches together. I'll show you what I saw and what you missed.",
      },
    ],
    3: [
      {
        title: "Advanced Positioning",
        type: "Lesson",
        duration: "30 min",
        description: "Learn to read the game three moves ahead. This is where champions separate from contenders.",
      },
      {
        title: "High-Pressure Simulation",
        type: "Practice",
        duration: "45 min",
        description: "Simulated tournament scenarios with crowd noise, time pressure, and high stakes.",
      },
      {
        title: "Mental Reset Technique",
        type: "Coach Session",
        duration: "15 min",
        description: "How to recover from mistakes mid-match. This skill alone will win you tournaments.",
      },
    ],
    4: [
      {
        title: "World-Class Preparation",
        type: "Lesson",
        duration: "40 min",
        description: "The exact routine I used before the World Cup final. Every detail matters.",
      },
      {
        title: "10 Match Win Streak Challenge",
        type: "Match",
        duration: "120 min",
        description: "Win 10 matches in a row. This is your test. Everything you've learned converges here.",
      },
      {
        title: "Pre-Match Ritual Design",
        type: "Coach Session",
        duration: "20 min",
        description: "Build your own pre-match ritual. This is what separates prepared players from lucky ones.",
      },
    ],
    5: [
      {
        title: "Defending a Title",
        type: "Lesson",
        duration: "35 min",
        description: "The psychology of being the champion everyone wants to beat. How to stay hungry.",
      },
      {
        title: "Adaptation Training",
        type: "Practice",
        duration: "50 min",
        description: "Learn to adapt mid-match when your opponent figures out your style. This is advanced-level play.",
      },
      {
        title: "Legacy Mindset",
        type: "Coach Session",
        duration: "25 min",
        description: "What does it mean to build something bigger than yourself? Let's talk about your 'why.'",
      },
    ],
    6: [
      {
        title: "Certification Preparation",
        type: "Lesson",
        duration: "45 min",
        description: "Final review of everything. This is where you prove you've mastered the journey.",
      },
      {
        title: "Certification Match",
        type: "Match",
        duration: "90 min",
        description: "Your final test. Win this, and you're certified. This is your World Cup moment.",
      },
      {
        title: "Partnership Path",
        type: "Coach Session",
        duration: "30 min",
        description: "You've completed the journey. Now let's talk about training the next generation. The 80/20 partnership.",
      },
    ],
  };

  return tasksByStage[stage] || tasksByStage[1];
}

function getCoachingForStage(coach: Coach, stage: number): string {
  const coaching: Record<number, string> = {
    1: "This is where I learned that discipline beats talent. I wasn't the most skilled player, but I was the most consistent. That's what got me to the next level. Focus on showing up every day, not on being perfect.",
    2: "I won my first tournament without losing a single match. Not because I was the best — because I was the most prepared. Your opponents will have better skills. Make sure you have better preparation.",
    3: "The crowd, the pressure, the stakes — this is where most players crack. I learned to use pressure as fuel, not as a weight. You'll face your version of this. I'll make sure you're ready.",
    4: "World champion. That moment wasn't about skill — it was about everything leading up to it. The thousands of hours of practice, the discipline, the mental strength. This is where it all pays off.",
    5: "Defending a title is harder than winning it. Everyone wants to beat the champion. You have to evolve, adapt, stay hungry. This is where champions become legends.",
    6: "Building something bigger than yourself — that's the real victory. The trophies fade. The legacy remains. You've walked this journey. Now it's time to guide others through it.",
  };

  return coaching[stage] || coaching[1];
}
