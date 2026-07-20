"use client";

import { useState } from "react";
import { Coach } from "./CoachCharacters";
import { CoachPortrait } from "./CoachPortrait";

const sampleCoachingTips: Record<string, Record<number, string>> = {
  "king-of-the-pitch": {
    1: "This is where I started — just playing with friends. No pressure. Master the basics here: passing, positioning, and reading the game. Everything else builds on this.",
    2: "My first tournament. The nerves are real. Focus on what you've practiced, not the crowd. Control your breathing. Play YOUR game, not the one they expect.",
    3: "High-pressure live event. This is where champions separate from contenders. Stay calm, stay disciplined. Every decision matters.",
    4: "World Cup final. This is everything you've worked toward. Trust your preparation. Stay composed. The moment is yours.",
    5: "Defending a title is harder than winning it. Everyone wants to beat the champion. Evolve. Stay hungry.",
    6: "Build something bigger than yourself. This is where the journey becomes legacy.",
  },
  "the-flair-merchant": {
    1: "Started in GRA with my cousins. Mum noticed I was beating everyone. That's when it clicked — I had something special. Play with joy here.",
    2: "First tournament at 16. Won in my debut. The secret? Play YOUR style. Don't copy anyone. Your flair is your weapon.",
    3: "Signed by F2 Freestylers. Blend entertainment with competition. The crowd loves a show — give them one, but win while doing it.",
    4: "Team changes taught me the hard way. Talent alone won't cut it. Add discipline to your instinct. That's when you become dangerous.",
    5: "eChampions League champion. Proved I could win on the biggest stage. Flair + focus = unstoppable.",
    6: "Still chasing the world title. Every day is a chance to get better. Stay loud, stay hungry.",
  },
};

const sampleChatQuestions = [
  "How do I handle nerves before a big match?",
  "What's the most important skill to master first?",
  "How do I recover from a bad loss?",
  "What formation do you recommend?",
];

const sampleChatResponses: Record<string, Record<string, string>> = {
  "king-of-the-pitch": {
    "How do I handle nerves before a big match?":
      "Control your breathing. Slow it down. The game rewards patience, not panic. Play what you've practiced — don't invent on the day. And remember: the other player is nervous too.",
    "What's the most important skill to master first?":
      "Positioning. Everything else builds on it. If you're in the right place at the right time, the game becomes easier. Master that first, then add the rest.",
    "How do I recover from a bad loss?":
      "Watch the replay. Find the moment it went wrong — not to punish yourself, but to learn. One bad match doesn't define you. The next one does.",
    "What formation do you recommend?":
      "Start with 4-4-2. Balanced, structured, no gaps. Master the basics before you experiment. Once you understand the shape, then you can adapt.",
  },
  "the-flair-merchant": {
    "How do I handle nerves before a big match?":
      "Put on your pre-match anthem. For me it's Burna Boy. Get the energy right. Nerves are just excitement with nowhere to go — channel it into your first touch.",
    "What's the most important skill to master first?":
      "Your first touch. If you can control the ball under pressure, everything else becomes possible. Practice it every day. 10 minutes, minimum.",
    "How do I recover from a bad loss?":
      "Eat something good. Talk to someone you trust. Then come back the next day and play again. Don't let one match live in your head. Next one's already waiting.",
    "What formation do you recommend?":
      "4-3-3 attacking. Gives you width, creativity, and numbers forward. But here's the thing — play what feels natural to YOU. If 4-2-3-1 suits your style better, use that. Your comfort matters more than the meta.",
  },
};

interface InteractivePreviewProps {
  coach: Coach;
}

export function InteractivePreview({ coach }: InteractivePreviewProps) {
  const [selectedStage, setSelectedStage] = useState<number | null>(null);
  const [chatQuestion, setChatQuestion] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);

  const coachingTips = sampleCoachingTips[coach.id] || {};
  const chatResponses = sampleChatResponses[coach.id] || {};

  function handleStageClick(stageNum: number) {
    setSelectedStage(selectedStage === stageNum ? null : stageNum);
    setChatQuestion(null);
  }

  function handleChatClick(question: string) {
    setChatQuestion(null);
    setIsTyping(true);
    setTimeout(() => {
      setChatQuestion(question);
      setIsTyping(false);
    }, 800);
  }

  return (
    <div className="space-y-8">
      {/* Coach Header */}
      <div className="flex items-center gap-4">
        <CoachPortrait coach={coach} size={64} />
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
            Interactive Preview — {coach.name}
          </p>
          <h3 className="font-display text-lg font-bold text-foreground">
            Tap around to explore
          </h3>
          <p className="text-xs text-muted">
            This is a pre-scripted demo. The real app experience is even deeper.
          </p>
        </div>
      </div>

      {/* Interactive Journey Path */}
      <div>
        <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-primary">
          Tap a stage to see coaching tips
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {coach.journey.map((stage) => {
            const isActive = selectedStage === parseInt(stage.stage);
            return (
              <button
                key={stage.stage}
                onClick={() => handleStageClick(parseInt(stage.stage))}
                className={`rounded-lg border p-3 text-left transition-all ${
                  isActive
                    ? "border-primary/60 bg-primary/10 shadow-[0_0_16px_-4px_rgba(57,255,106,0.3)]"
                    : "border-border bg-surface-elevated/50 hover:border-primary/30"
                }`}
              >
                <span className="font-mono text-xs font-bold text-primary">
                  Stage {stage.stage}
                </span>
                <p className="mt-1 text-xs font-bold text-foreground leading-tight">
                  {stage.title.split("—")[0].trim().split(" ").slice(0, 3).join(" ")}
                </p>
                <span className="mt-1 font-mono text-[9px] text-muted">{stage.year}</span>
              </button>
            );
          })}
        </div>

        {/* Coaching tip reveal */}
        {selectedStage && coachingTips[selectedStage] && (
          <div className="mt-4 rounded-lg border border-primary/30 bg-primary/5 p-4">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-primary">
              {coach.name} on Stage {selectedStage}
            </p>
            <p className="text-sm italic text-foreground leading-relaxed">
              &ldquo;{coachingTips[selectedStage]}&rdquo;
            </p>
          </div>
        )}
      </div>

      {/* Mock Coach Chat */}
      <div>
        <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-primary">
          Ask your coach — tap a question
        </p>
        <div className="rounded-lg border border-border bg-surface-elevated/50 p-4">
          {/* Chat questions */}
          <div className="flex flex-wrap gap-2">
            {sampleChatQuestions.map((q) => (
              <button
                key={q}
                onClick={() => handleChatClick(q)}
                className={`rounded-full border px-3 py-1.5 text-xs transition-all ${
                  chatQuestion === q
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border/50 bg-surface text-muted hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Chat response */}
          {isTyping && (
            <div className="mt-4 flex items-center gap-2">
              <div className="flex gap-1">
                <span className="h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: "0ms" }} />
                <span className="h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: "150ms" }} />
                <span className="h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: "300ms" }} />
              </div>
              <span className="text-xs text-muted">{coach.name} is typing...</span>
            </div>
          )}

          {chatQuestion && !isTyping && chatResponses[chatQuestion] && (
            <div className="mt-4 rounded-lg border border-border/50 bg-background/50 p-4">
              <div className="mb-2 flex items-center gap-2">
                <CoachPortrait coach={coach} size={24} />
                <span className="text-xs font-bold text-foreground">{coach.nickname}</span>
              </div>
              <p className="text-sm text-foreground leading-relaxed">
                {chatResponses[chatQuestion]}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Tactics Preview */}
      <div>
        <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-primary">
          Sample coaching data — hover to explore
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            { title: "Defensive Shape", tip: coach.id === "king-of-the-pitch" ? "Hold a compact mid-block. Don't chase the ball — let them come to you." : "Press high but stay connected. If one goes, all go." },
            { title: "Attack Transitions", tip: coach.id === "king-of-the-pitch" ? "Build from the back. Patience in the first 10 seconds after winning the ball." : "Counter fast. First pass forward, not sideways. Catch them before they reset." },
            { title: "Set Pieces", tip: coach.id === "king-of-the-pitch" ? "Organized zonal marking. Every player has a zone. No switching." : "Mix it up. Sometimes near post, sometimes far. Keep them guessing." },
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-lg border border-border bg-surface-elevated/50 p-4 transition-all hover:border-primary/30 hover:bg-primary/5"
            >
              <p className="font-display text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </p>
              <p className="mt-2 text-xs text-muted group-hover:text-foreground transition-colors">
                {item.tip}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
