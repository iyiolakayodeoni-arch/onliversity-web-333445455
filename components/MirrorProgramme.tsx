"use client";
import { useScrollAnimation } from "./useScrollAnimation";

/**
 * THE FIRST PROGRAMME — PROSEASONACADEMY
 */
export function MirrorProgramme() {
  const ref = useScrollAnimation(0.08);

  const steps = [
    {
      n: "STEP 1",
      title: "THE BASELINE WEEK",
      body: "Seven days. Five matches — one a day. After each match you watch the recording, name the moments where you failed, and analyse each one in your own words. Day 6 is the week's reflection. Day 7 seals your profile.",
      extra: "The next day unlocks 24 hours after the last one seals — so the thinking has time to land. Nothing is forced. Lateness is never punished.",
    },
    {
      n: "STEP 2",
      title: "YOUR JOURNEY",
      body: "One universal six-stage road: SEE YOURSELF → CONTROL YOURSELF → READ THE GAME → BUILD DISCIPLINE → PERFORM UNDER PRESSURE → PROVE IT.",
      extra: "Your coach walks it with you. Only your evidence moves it forward.",
    },
    {
      n: "STEP 3",
      title: "THE MIRROR SESSION",
      body: "Before each match you set an intention. At half-time and full-time you answer in your own words. You mark your key moments, review them, and watch the versions of your thinking sit beside the evidence — before, half-time, full-time, after review.",
      extra: "The app never thinks for you.",
    },
    {
      n: "STEP 4",
      title: "THE THREAD",
      body: "Every session ends with one lesson you swear into The Thread. Your next session opens by asking how it held — or broke.",
      extra: "A lesson cannot be created and immediately forgotten.",
    },
  ];

  const stages = [
    "SEE YOURSELF",
    "CONTROL YOURSELF",
    "READ THE GAME",
    "BUILD DISCIPLINE",
    "PERFORM UNDER PRESSURE",
    "PROVE IT",
  ];

  return (
    <section ref={ref as any} id="programme" className="relative border-b border-border/60">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-20 sm:py-28 lg:py-32">
        {/* Header */}
        <div className="fade-up max-w-[760px]">
          <p className="mono-label mb-4">The first programme</p>
          <h2 className="font-display font-bold tracking-tight leading-[0.95] text-[30px] sm:text-[46px]">
            THE FIRST PROGRAMME:
            <br />
            <span className="text-primary">PROSEASONACADEMY</span>
          </h2>
          <p className="mt-6 max-w-[680px] text-[15px] sm:text-[16px] leading-[1.8] text-muted">
            ProSeasonAcademy is Mirror&apos;s professional development programme for FC Mobile
            players. It is the first course built on the Mirror method — and the template
            for every course Onliversity will ever run.{" "}
            <strong className="text-foreground">
              If you can take your game this seriously, you can take anything seriously.
            </strong>
          </p>
        </div>

        {/* Four steps */}
        <div className="mt-14 grid md:grid-cols-2 gap-4 sm:gap-5">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="fade-up glass-card tilt-card p-6 sm:p-7 text-left"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary">{s.n}</p>
              <p className="mt-2 font-display font-bold text-[17px] tracking-tight">{s.title}</p>
              <p className="mt-3 text-[13px] leading-[1.7] text-muted">{s.body}</p>
              <div className="mt-4 rounded-xl border border-border bg-background/60 px-4 py-3">
                <p className="text-[12px] leading-[1.6] text-foreground/85">{s.extra}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Two tracks */}
        <div className="fade-up fade-up-delay-1 mt-12 rounded-[24px] border border-border bg-surface/40 overflow-hidden">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="p-6 sm:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-5">
                Your Journey
              </p>
              <p className="font-display font-bold text-[15px] mb-4">STAGE 2 — CONTROL YOURSELF</p>
              <ul className="space-y-3 text-[13px] text-muted">
                <li className="flex gap-2"><span className="text-primary">·</span> Your current evidence</li>
                <li className="flex gap-2"><span className="text-primary">·</span> Your next objective</li>
                <li className="flex gap-2"><span className="text-primary">·</span> Your next Mirror Session</li>
              </ul>
            </div>
            <div className="p-6 sm:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-5">
                The Standard
              </p>
              <p className="font-display font-bold text-[15px] mb-4">STAGE 2 — CONTROL YOURSELF</p>
              <ul className="space-y-3 text-[13px] text-muted">
                <li className="flex gap-2"><span className="text-accent">·</span> What elite players learn here</li>
                <li className="flex gap-2"><span className="text-accent">·</span> The professional behaviour to study</li>
                <li className="flex gap-2"><span className="text-accent">·</span> The standard you are approaching</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Six-stage road */}
        <div className="fade-up fade-up-delay-2 mt-12">
          <p className="mono-label mb-5">The universal road</p>
          <div className="flex flex-wrap gap-2.5">
            {stages.map((s, i) => (
              <div
                key={s}
                className="flex items-center gap-2.5 rounded-full border border-border bg-surface px-4 py-2.5"
              >
                <span className="font-mono text-[10px] text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-foreground">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
