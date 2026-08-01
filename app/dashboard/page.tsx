"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { allCoaches } from "@/components/CoachCharacters";
import { InteractivePreview } from "@/components/InteractivePreview";
import { PitchPattern } from "@/components/PitchPattern";
import { RankProgressCard } from "@/components/RankProgressCard";

export default function DashboardPage() {
  const [username, setUsername] = useState("");
  const [activeCoachId, setActiveCoachId] = useState<string | null>(null);

  useState(() => {
    if (typeof window !== "undefined") {
      const storedUsername = localStorage.getItem("onliversity_username") || "";
      setUsername(storedUsername);
    }
  });

  const activeCoach = activeCoachId
    ? allCoaches.find((c) => c.id === activeCoachId) || null
    : null;

  return (
    <main className="min-h-screen bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <Link href="/" className="group flex items-center gap-2.5 sm:gap-3">
            <div className="transition-transform group-hover:scale-105">
              <Logo size={28} />
            </div>
            <span className="font-display text-base font-bold tracking-tight transition-colors group-hover:text-primary sm:text-lg">
              ONLIVERSITY
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden font-mono text-xs text-muted sm:block">@{username || "player"}</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary bg-primary/10 font-display text-xs font-bold text-primary sm:h-9 sm:w-9 sm:text-sm">
              {(username || "P").slice(0, 1).toUpperCase()}
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-3 py-6 sm:px-6 sm:py-8">
        {/* App Preview Disclaimer */}
        <div className="mb-6 rounded-lg border border-primary/20 bg-primary/5 p-4 text-center sm:p-5">
          <div className="mb-2 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary pulse-dot" />
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
              App Preview — ProSeasonAcademy
            </p>
          </div>
          <p className="text-sm text-muted">
            This is a preview of your Journey inside the app. ProSeasonAcademy is Mirror&apos;s professional development programme for FC Mobile players — your actual programme lives in the Onliversity app. Start your Baseline Week to begin.
          </p>
        </div>

        {/* Rank & Season Progress — gamified HUD */}
        <RankProgressCard />

        {/* ProSeasonAcademy Branding */}
        <div className="relative mb-8 overflow-hidden rounded-lg border border-border bg-surface-elevated/50 p-6">
          <PitchPattern />
          <div className="glow-primary pointer-events-none absolute inset-0" />
          <div className="relative z-10">
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary">
                    FC Mobile · Esports
                  </span>
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
                    Live Course
                  </span>
                </div>
                <h1 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  ProSeasonAcademy
                </h1>
                <p className="mt-1 text-sm text-muted sm:text-base">
                  One coach. One road. One standard. No excuses.
                </p>
              </div>
              <div className="flex gap-4 text-center">
                <div>
                  <p className="font-display text-xl font-bold text-primary">6</p>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-muted">Stages</p>
                </div>
                <div className="w-px bg-border-bright" />
                <div>
                  <p className="font-display text-xl font-bold text-accent">2000</p>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-muted">XP</p>
                </div>
                <div className="w-px bg-border-bright" />
                <div>
                  <p className="font-display text-xl font-bold text-foreground">1</p>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-muted">Cert</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two-Part Learning System */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-primary/20 bg-primary/5 p-5">
            <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-primary">Part 1</p>
            <h3 className="font-display text-lg font-bold text-foreground">The Journey</h3>
            <p className="mt-2 text-sm text-muted">
              Walk a coach's real story, stage by stage. From grassroots to pro — every turning point, every lesson, mapped to your growth.
            </p>
          </div>
          <div className="rounded-lg border border-accent/20 bg-accent/5 p-5">
            <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-accent">Part 2</p>
            <h3 className="font-display text-lg font-bold text-foreground">The Coaching</h3>
            <p className="mt-2 text-sm text-muted">
              Tactics, game mechanics, and how-to-win knowledge — delivered by your coach at each stage. Everything it takes to actually win at FC Mobile.
            </p>
          </div>
        </div>

        <div className="mb-8 rounded-lg border border-border bg-surface-elevated/50 p-4 text-center">
          <p className="text-sm text-muted">
            <strong className="text-foreground">The Mirror records the evidence. You do the seeing.</strong> You set an intention, answer at checkpoints, and watch your thinking sit beside the recording. Only your matches, answers and receipts move your journey forward.{" "}
            <span className="text-primary">Start your Baseline Week to begin.</span>
          </p>
        </div>

        {/* Coach Selection for Preview */}
        <div className="mb-8">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-primary">
            Choose a coach to preview their experience
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {allCoaches.map((coach) => {
              const isActive = activeCoachId === coach.id;
              return (
                <button
                  key={coach.id}
                  onClick={() => setActiveCoachId(coach.id)}
                  className={`rounded-lg border p-4 text-left transition-all ${
                    isActive
                      ? "border-primary/60 bg-primary/10 shadow-[0_0_20px_-4px_rgba(57,255,106,0.2)]"
                      : "border-border bg-surface-elevated/50 hover:border-primary/30"
                  }`}
                >
                  <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
                    "{coach.nickname}"
                  </p>
                  <h3 className="mt-1 font-display text-lg font-bold text-foreground">
                    {coach.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted">{coach.origin}</p>
                  <p className="mt-3 text-sm italic text-muted/80">
                    {coach.id === "king-of-the-pitch"
                      ? "Discipline beats talent when talent doesn't work hard."
                      : "Flair is not for every minute. Pick your moment."}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Preview */}
        {activeCoach && (
          <div className="mb-8 rounded-lg border border-border bg-surface-elevated/30 p-4 sm:p-6">
            <InteractivePreview coach={activeCoach} />
          </div>
        )}

        {/* App Download CTA */}
        <div className="rounded-lg border border-primary/20 bg-primary/5 p-6 text-center">
          <h3 className="font-display text-xl font-bold text-foreground">
            Ready to start for real?
          </h3>
          <p className="mt-2 text-sm text-muted">
            Download the Onliversity app to begin your ProSeasonAcademy journey.
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/pro-season-academy"
              className="shimmer rounded-lg bg-primary px-7 py-3 font-medium text-background transition-all hover:shadow-glow-sm"
            >
              Start your Baseline Week
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 text-center sm:py-10">
          <Logo size={28} />
          <p className="max-w-sm text-xs text-muted sm:text-sm">
            The first digital university built for creative careers.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted/50 sm:text-[11px]">
            © {new Date().getFullYear()} Onliversity
          </p>
          <p className="max-w-sm px-4 text-[10px] text-muted/40 leading-relaxed sm:text-[11px]">
            Chinedu Okafor &amp; Obinna Eze are fictional. The journey they walk is inspired by a real pro's rise — reimagined through them. The learning system, coaching, and certification are real.
          </p>
        </div>
      </footer>
    </main>
  );
}
