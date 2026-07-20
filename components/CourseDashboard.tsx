"use client";

import { useState } from "react";

const stages = [
  { id: 1, name: "Orientation", xp: 0, desc: "Unlock your path", icon: "" },
  { id: 2, name: "Grassroots", xp: 100, desc: "Learn the fundamentals", icon: "" },
  { id: 3, name: "Breakthrough", xp: 350, desc: "Master advanced tactics", icon: "" },
  { id: 4, name: "Pro Season Ready", xp: 750, desc: "AI coach analysis", icon: "" },
  { id: 5, name: "Certified", xp: 1200, desc: "Earn your certification", icon: "" },
  { id: 6, name: "Partner", xp: 2000, desc: "Train others & earn", icon: "", isPartner: true },
];

const quests = [
  { title: "Tactical Awareness", type: "Lesson", xp: 50, duration: "20 min", difficulty: "Beginner" },
  { title: "Match Analysis: Pro Replay", type: "Video", xp: 75, duration: "35 min", difficulty: "Intermediate" },
  { title: "Formation Mastery", type: "Practice", xp: 100, duration: "45 min", difficulty: "Intermediate" },
  { title: "Live Scrimmage Review", type: "Coach Session", xp: 150, duration: "60 min", difficulty: "Advanced" },
];

const achievements = [
  { name: "First Steps", desc: "Complete Orientation", icon: "🌟", unlocked: false },
  { name: "Tactician", desc: "Win 5 tactical quizzes", icon: "", unlocked: false },
  { name: "Undefeated", desc: "10-match win streak", icon: "", unlocked: false },
  { name: "Scholar", desc: "Finish all lessons in a stage", icon: "", unlocked: false },
  { name: "Pro Ready", desc: "Reach Stage 04", icon: "", unlocked: false },
  { name: "Certified Coach", desc: "Complete the full path", icon: "", unlocked: false },
];

const leaderboard = [
  { rank: 1, name: "ProKing_99", xp: 1840, stage: "Partner", trend: "up" },
  { rank: 2, name: "FCMaster", xp: 1620, stage: "Certified", trend: "up" },
  { rank: 3, name: "TacticalGenius", xp: 1450, stage: "Certified", trend: "same" },
  { rank: 4, name: "GoalMachine", xp: 1280, stage: "Pro Ready", trend: "down" },
  { rank: 5, name: "You", xp: 0, stage: "Waiting", trend: "same", isYou: true },
];

function QuestCard({ quest }: { quest: typeof quests[0] }) {
  const diffColor = quest.difficulty === "Beginner" ? "text-primary" : quest.difficulty === "Intermediate" ? "text-accent" : "text-red-400";
  return (
    <div className="group relative overflow-hidden rounded border border-border bg-surface-elevated/60 p-3 transition-all hover:border-primary/40 sm:p-4">
      <div className="absolute top-0 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full" />
      <div className="flex items-start justify-between">
        <div>
          <span className="font-mono text-[9px] uppercase tracking-widest text-primary sm:text-[10px]">{quest.type}</span>
          <h4 className="mt-1 font-display text-xs font-bold text-foreground sm:text-sm">{quest.title}</h4>
        </div>
        <span className={`font-mono text-[9px] font-bold sm:text-[10px] ${diffColor}`}>{quest.difficulty}</span>
      </div>
      <div className="mt-2 flex items-center justify-between sm:mt-3">
        <span className="text-[10px] text-muted sm:text-xs">{quest.duration}</span>
        <span className="font-mono text-[10px] font-bold text-primary sm:text-xs">+{quest.xp} XP</span>
      </div>
    </div>
  );
}

function AchievementBadge({ achievement }: { achievement: typeof achievements[0] }) {
  return (
    <div className={`flex flex-col items-center rounded border p-3 text-center transition-all sm:p-4 ${achievement.unlocked ? "border-accent/40 bg-accent/5" : "border-border bg-surface/30 opacity-50"}`}>
      <span className="text-xl sm:text-2xl">{achievement.icon}</span>
      <span className="mt-1.5 font-display text-[10px] font-bold text-foreground sm:text-xs">{achievement.name}</span>
      <span className="mt-0.5 text-[9px] text-muted sm:text-[10px]">{achievement.desc}</span>
    </div>
  );
}

export function CourseDashboard() {
  const [activeTab, setActiveTab] = useState<"stages" | "quests" | "leaderboard">("stages");
  const totalXP = stages.reduce((sum, s) => sum + s.xp, 0);

  return (
    <div className="mx-auto max-w-6xl px-3 py-6 sm:px-6 sm:py-8">
      {/* Player Stats Bar */}
      <div className="rounded-lg border border-border bg-surface-elevated p-4 shadow-[0_0_30px_-10px_rgba(57,255,106,0.15)] sm:p-6">
        <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-primary/10 font-display text-lg font-bold text-primary shadow-[0_0_16px_rgba(57,255,106,0.2)] sm:h-16 sm:w-16 sm:text-2xl">
              LV.1
            </div>
            <div>
              <p className="font-mono text-[9px] uppercase tracking-widest text-primary sm:text-[10px]">Pro Season Academy</p>
              <h2 className="font-display text-lg font-bold text-foreground sm:text-xl">Your Dashboard</h2>
              <p className="text-[10px] text-muted sm:text-xs">Stage 01 · Orientation</p>
            </div>
          </div>

          <div className="flex-1 lg:mx-8">
            <div className="flex items-center justify-between text-[10px] sm:text-xs">
              <span className="font-mono uppercase tracking-widest text-muted">XP Progress</span>
              <span className="font-mono font-bold text-primary">0 / 100 XP</span>
            </div>
            <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-surface sm:h-3">
              <div className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60 bar-shimmer" style={{ width: "0%" }} />
            </div>
            <p className="mt-1 text-[9px] text-muted sm:text-[10px]">100 XP to next level</p>
          </div>

          <div className="flex gap-4 sm:gap-6">
            {[{ v: "0", l: "Matches", c: "text-primary" }, { v: "0", l: "Streak", c: "text-accent" }, { v: "0", l: "Badges", c: "text-foreground" }].map((s) => (
              <div key={s.l} className="text-center">
                <p className={`font-display text-base font-bold sm:text-lg ${s.c}`}>{s.v}</p>
                <p className="font-mono text-[8px] uppercase tracking-widest text-muted sm:text-[9px]">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Launch Banner */}
      <div className="mt-4 rounded-lg border border-accent/30 bg-accent/5 p-3 text-center sm:mt-6 sm:p-4">
        <p className="font-mono text-[10px] uppercase tracking-widest text-accent sm:text-xs">App Launches January 1, 2027</p>
        <p className="mt-1 text-xs text-muted sm:text-sm">Your dashboard will go live when the app launches.</p>
      </div>

      {/* Tab Navigation — scrollable on mobile */}
      <div className="mt-4 flex gap-1 overflow-x-auto border-b border-border sm:mt-6 sm:gap-2">
        {(["stages", "quests", "leaderboard"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`shrink-0 border-b-2 px-3 py-2 font-mono text-[10px] uppercase tracking-widest transition-colors sm:px-4 sm:py-2.5 sm:text-xs ${activeTab === tab ? "border-primary text-primary" : "border-transparent text-muted hover:text-foreground"}`}
          >
            {tab === "stages" ? "Stages" : tab === "quests" ? "Quests" : "Leaderboard"}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4 sm:mt-6">
        {activeTab === "stages" && (
          <div>
            <div className="mb-4 sm:mb-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary sm:text-xs">Your Journey Roadmap</p>
              <h3 className="mt-1 font-display text-base font-bold text-foreground sm:text-lg">6 Stages to Certification</h3>
              <p className="mt-1 text-xs text-muted sm:text-sm">Walk the real path a pro took.</p>
            </div>

            {/* Mobile: vertical list */}
            <div className="flex flex-col gap-3 rounded-lg border border-border bg-surface-elevated/40 p-4 sm:hidden">
              {stages.map((stage) => (
                <div key={stage.id} className={`flex items-center gap-3 rounded p-3 ${"isPartner" in stage ? "bg-accent/5 border border-accent/20" : "border border-border/50"}`}>
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border font-mono text-xs ${"isPartner" in stage ? "border-accent bg-accent/10 text-accent" : "border-primary bg-background text-primary"}`}>
                    {String(stage.id).padStart(2, "0")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-xs font-bold text-foreground truncate">{stage.name}</span>
                      <span className="font-mono text-[9px] text-primary shrink-0 ml-2">{stage.xp} XP</span>
                    </div>
                    <p className="text-[10px] text-muted truncate">{stage.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: horizontal */}
            <div className="hidden rounded-lg border border-border bg-surface-elevated/40 p-6 sm:block">
              <div className="grid grid-cols-3 gap-4 md:grid-cols-6 md:gap-3">
                {stages.map((stage) => (
                  <div key={stage.id} className="flex flex-col items-center text-center">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full border font-mono text-xs transition-transform hover:scale-110 ${"isPartner" in stage ? "border-accent bg-accent/10 text-accent" : "border-primary bg-background text-primary"}`}>
                      {String(stage.id).padStart(2, "0")}
                    </div>
                    <span className="mt-2 font-display text-xs font-bold text-foreground sm:text-sm">{stage.name}</span>
                    <span className="font-mono text-[9px] text-primary">{stage.xp} XP</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats grid */}
            <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-6 sm:grid-cols-4 sm:gap-4">
              {[{ v: stages.length, l: "Total Stages", c: "text-primary" }, { v: totalXP, l: "Total XP", c: "text-accent" }, { v: "~8", l: "Weeks", c: "text-foreground" }, { v: "1", l: "Certificate", c: "text-primary" }].map((s) => (
                <div key={s.l} className="rounded-lg border border-border bg-surface-elevated/40 p-3 text-center sm:p-4">
                  <p className={`font-display text-xl font-bold sm:text-2xl ${s.c}`}>{s.v}</p>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-muted sm:text-[10px]">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "quests" && (
          <div>
            <div className="mb-4 sm:mb-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary sm:text-xs">Weekly Quests</p>
              <h3 className="mt-1 font-display text-base font-bold text-foreground sm:text-lg">Complete quests to earn XP</h3>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {quests.map((q) => <QuestCard key={q.title} quest={q} />)}
            </div>
            <div className="mt-4 rounded-lg border border-border bg-surface-elevated/40 p-4 sm:mt-6 sm:p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display text-xs font-bold text-foreground sm:text-sm">Weekly XP Available</p>
                  <p className="text-[10px] text-muted sm:text-xs">Complete all quests</p>
                </div>
                <div className="text-right">
                  <p className="font-display text-xl font-bold text-primary sm:text-2xl">+{quests.reduce((s, q) => s + q.xp, 0)} XP</p>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-muted sm:text-[10px]">per week</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "leaderboard" && (
          <div>
            <div className="mb-4 sm:mb-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary sm:text-xs">Season Rankings</p>
              <h3 className="mt-1 font-display text-base font-bold text-foreground sm:text-lg">Top players this season</h3>
            </div>

            {/* Desktop table */}
            <div className="hidden overflow-hidden rounded-lg border border-border sm:block">
              <div className="grid grid-cols-12 gap-4 border-b border-border bg-surface px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-muted">
                <span className="col-span-1">Rank</span>
                <span className="col-span-4">Player</span>
                <span className="col-span-3">Stage</span>
                <span className="col-span-2 text-right">XP</span>
                <span className="col-span-2 text-right">Trend</span>
              </div>
              {leaderboard.map((entry) => (
                <div key={entry.rank} className={`grid grid-cols-12 gap-4 border-b border-border/50 px-4 py-3 text-sm last:border-b-0 ${entry.isYou ? "bg-primary/5" : entry.rank <= 3 ? "bg-surface-elevated/30" : ""}`}>
                  <span className="col-span-1 font-mono font-bold text-foreground">{entry.rank <= 3 ? ["", "", ""][entry.rank - 1] : `#${entry.rank}`}</span>
                  <span className={`col-span-4 font-display font-bold truncate ${entry.isYou ? "text-primary" : "text-foreground"}`}>{entry.name}</span>
                  <span className="col-span-3 text-muted">{entry.stage}</span>
                  <span className="col-span-2 text-right font-mono font-bold text-primary">{entry.xp.toLocaleString()}</span>
                  <span className="col-span-2 text-right">{entry.trend === "up" ? "" : entry.trend === "down" ? "" : ""}</span>
                </div>
              ))}
            </div>

            {/* Mobile card list */}
            <div className="overflow-hidden rounded-lg border border-border sm:hidden">
              {leaderboard.map((entry) => (
                <div key={entry.rank} className={`flex items-center gap-3 border-b border-border/50 px-4 py-3 last:border-b-0 ${entry.isYou ? "bg-primary/5" : entry.rank <= 3 ? "bg-surface-elevated/30" : ""}`}>
                  <span className="w-7 text-center font-mono text-sm font-bold text-foreground">{entry.rank <= 3 ? ["", "", ""][entry.rank - 1] : `#${entry.rank}`}</span>
                  <div className="flex-1 min-w-0">
                    <p className={`truncate font-display text-sm font-bold ${entry.isYou ? "text-primary" : "text-foreground"}`}>{entry.name}</p>
                    <p className="text-[10px] text-muted">{entry.stage}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-mono text-sm font-bold text-primary">{entry.xp.toLocaleString()}</p>
                    <p className="text-[10px]">{entry.trend === "up" ? "" : entry.trend === "down" ? "" : ""}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-lg border border-accent/30 bg-accent/5 p-3 text-center sm:mt-6 sm:p-4">
              <p className="text-xs text-muted sm:text-sm">Season 1 begins January 1, 2027.</p>
            </div>
          </div>
        )}
      </div>

      {/* Achievements */}
      <div className="mt-8 sm:mt-10">
        <div className="mb-4 sm:mb-6">
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary sm:text-xs">Achievements</p>
          <h3 className="mt-1 font-display text-base font-bold text-foreground sm:text-lg">Unlock badges as you progress</h3>
        </div>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-3 sm:gap-4 md:grid-cols-6">
          {achievements.map((a) => <AchievementBadge key={a.name} achievement={a} />)}
        </div>
      </div>

      {/* Partnership */}
      <div className="mt-6 rounded-lg border border-accent/40 bg-accent/5 p-4 sm:mt-10 sm:p-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent sm:text-xs">The Onliversity Partnership</p>
            <p className="mt-1.5 max-w-md text-xs text-muted sm:text-sm">Once certified, train the next generation and keep 80% of every session.</p>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="text-center">
              <p className="font-display text-xl font-bold text-accent sm:text-2xl">80%</p>
              <p className="font-mono text-[8px] uppercase tracking-widest text-muted sm:text-[9px]">You keep</p>
            </div>
            <div className="h-6 w-px bg-border-bright sm:h-8" />
            <div className="text-center">
              <p className="font-display text-xl font-bold text-muted sm:text-2xl">20%</p>
              <p className="font-mono text-[8px] uppercase tracking-widest text-muted sm:text-[9px]">Onliversity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
