"use client";
import { useScrollAnimation } from "./useScrollAnimation";

const academies = [
  {
    name: "Pro Season Academy",
    status: "LIVE • Season One",
    statusColor: "text-primary border-primary/30 bg-primary/10",
    category: "Esports • Football",
    desc: "FC Mobile performance academy. The foundation that proves our model: choose coach, walk journey, prove progress, get certified.",
    icon: "⚽",
  },
  {
    name: "Fire Royale Academy",
    status: "Building",
    statusColor: "text-accent border-accent/30 bg-accent/10",
    category: "Esports • BR",
    desc: "Suppression, rotations, clutch-logic. Coached by BR players who survived Zone 7 with white armor.",
    icon: "🔥",
  },
  {
    name: "Creator Academy",
    status: "Planned • 2026",
    statusColor: "text-muted border-border bg-surface",
    category: "Creative • Content",
    desc: "From first upload to real audience. Editing, storytelling, platform strategy — coached by creators who actually built.",
    icon: "🎥",
  },
  {
    name: "Beat Academy",
    status: "Planned",
    statusColor: "text-muted border-border bg-surface",
    category: "Music • Production",
    desc: "Make music people feel. Not loop packs — coached by producers with placements, from first melody to finished mix.",
    icon: "🎵",
  },
  {
    name: "Code Academy",
    status: "Planned",
    statusColor: "text-muted border-border bg-surface",
    category: "Technology • Engineering",
    desc: "Code as craft. Not bootcamp shortcuts — learn architecture, thinking, and shipping real things users love.",
    icon: "⌨️",
  },
  {
    name: "More academies",
    status: "You tell us",
    statusColor: "text-muted border-border bg-surface",
    category: "Onliversity",
    desc: "Design, duty-squad tactics, sales, fitness — same model: real coach, real journey, real proof. Vote inside app.",
    icon: "∞",
  },
];

export function RoadmapSection() {
  const ref = useScrollAnimation(0.08);
  return (
    <section ref={ref as any} id="future" className="relative border-b border-border/60">
      <div className="ambient-orb ambient-orb-green w-[600px] h-[600px] top-10 -right-40 opacity-20" />
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-20 sm:py-28 lg:py-32">
        <div className="fade-up max-w-[760px] mx-auto text-center">
          <p className="mono-label mb-4">The bigger picture • Where we’re going</p>
          <h2 className="font-display font-bold text-[32px] sm:text-[50px] leading-[0.95] tracking-tight">One model.<br/> Many creative careers.</h2>
          <p className="mt-5 text-[15px] sm:text-[17px] leading-[1.6] text-muted">
            Onliversity is a <strong className="text-foreground">digital university for creatives</strong>. Not courses. <strong className="text-foreground">Academies</strong>. Each academy follows the same structure: choose a real coach, walk their actual journey, prove your progress, get certified — and then get paid to coach the next generation.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-primary pulse-dot" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Pro Season Academy is the first proof that it works</span>
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {academies.map((a, i) => (
            <div key={a.name} className={`fade-up glass-card p-6 text-left ${i===0 ? "!border-primary/20" : ""}`} style={{ transitionDelay: `${Math.min(i*0.08,0.32)}s` }}>
              <div className="flex items-start justify-between mb-4">
                <div className="h-10 w-10 rounded-xl bg-background border border-border grid place-items-center text-lg">{a.icon}</div>
                <span className={`rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest ${a.statusColor}`}>{a.status}</span>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted">{a.category}</p>
              <p className="mt-1 font-display font-bold text-[16px]">{a.name}</p>
              <p className="mt-2 text-[13px] leading-[1.6] text-muted">{a.desc}</p>
            </div>
          ))}
        </div>

        <div className="fade-up mt-12 rounded-[24px] border border-border bg-surface/80 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display font-bold text-[20px] sm:text-[22px]">This is a long-term project. We’re not in a rush to be everywhere.</p>
            <p className="mt-2 max-w-[520px] text-[13px] leading-[1.6] text-muted">We’d rather do one academy right than five badly. Season One is 1,000 seats on purpose — so the founder can still know your name. When we open Season Two, it’s because Season One players told us we got it right.</p>
          </div>
          <div className="flex gap-2">
            {["Esports","Music","Content","Tech"].map(t=>(
              <span key={t} className="rounded-full border border-border bg-background px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-muted">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
