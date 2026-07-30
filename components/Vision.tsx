"use client";

import Link from "next/link";
import { useScrollAnimation } from "./useScrollAnimation";

const academies = [
  {
    name: "Pro Season Academy",
    category: "Esports — FC Mobile",
    status: "live",
    statusLabel: "Season One — Live",
    desc: "Walk a real FC Mobile champion's path. 6 stages. Permanent coach. Match Vault. Loss Journal. Match Scan. The full academy experience.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
        <rect x="3" y="8" width="18" height="10" rx="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <line x1="8" y1="11" x2="8" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="6" y1="13" x2="10" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="15" cy="11.5" r="1" fill="currentColor" />
        <circle cx="17" cy="13" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Fire Royale Academy",
    category: "Esports — Free Fire",
    status: "building",
    statusLabel: "Building",
    desc: "Battle royale to pro. Your journey from casual drops to competitive Fire Royale. Same academy structure — real coaches, real stages, real progress.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
        <path d="M12 2 C12 8, 6 9, 6 15 C6 19, 9 22, 12 22 C15 22, 18 19, 18 15 C18 11, 15 11, 15 7 C15 7, 12 8, 12 2 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 10 C12 14, 9 14.5, 9 18 C9 20, 10.5 21, 12 21 C13.5 21, 15 20, 15 18 C15 15.5, 13.5 15.5, 13.5 13 C13.5 13, 12 13.5, 12 10 Z" fill="currentColor" opacity="0.2" />
      </svg>
    ),
  },
  {
    name: "Duty Squad Academy",
    category: "Esports — Call of Duty",
    status: "planned",
    statusLabel: "Planned",
    desc: "Tactical. Precise. Your path from casual matches to competitive Call of Duty. Structured coaching, real progression, real certification.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <line x1="12" y1="1" x2="12" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="1" y1="12" x2="5" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="19" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Music & Rapping",
    category: "Creative Arts",
    status: "planned",
    statusLabel: "Planned",
    desc: "Learn the craft from real artists. Songwriting, flow, production, performance — structured like a real journey from bedroom sessions to the stage.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
        <circle cx="7" cy="17" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17" cy="15" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <line x1="10" y1="17" x2="10" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="15" x2="20" y2="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="5" x2="20" y2="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Content Creation",
    category: "Creative Arts",
    status: "planned",
    statusLabel: "Planned",
    desc: "From first upload to real audience. Editing, storytelling, platform strategy, brand building — coached by creators who've actually done it.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
        <rect x="2" y="7" width="20" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <polygon points="10,3 14,3 12,7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="12" cy="14" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="14" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Software Engineering",
    category: "Technology",
    status: "planned",
    statusLabel: "Planned",
    desc: "Code as an art form. Not bootcamp shortcuts — a structured path from first line of code to building real things. Craft, architecture, and thinking like an engineer.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
        <polyline points="7,8 3,12 7,16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="17,8 21,12 17,16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="14" y1="6" x2="10" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

function StatusBadge({ status }: { status: string }) {
  if (status === "live") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5">
        <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot" />
        <span className="font-mono text-[9px] uppercase tracking-widest text-primary">
          Live
        </span>
      </span>
    );
  }
  if (status === "building") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5">
        <span className="font-mono text-[9px] uppercase tracking-widest text-accent">
          Building
        </span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-0.5">
      <span className="font-mono text-[9px] uppercase tracking-widest text-muted">
        Planned
      </span>
    </span>
  );
}

export function Vision() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} id="vision" className="relative border-b border-border">
      <div className="ambient-orb ambient-orb-green w-[500px] h-[500px] top-1/4 -left-60 opacity-10" />
      <div className="ambient-orb ambient-orb-amber w-[300px] h-[300px] bottom-0 right-1/4 opacity-10" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 md:py-32">
        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <p className="mono-label mb-3">The bigger picture</p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            This is just the beginning.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted leading-relaxed sm:text-lg">
            Onliversity is a <strong className="text-foreground">digital university for creatives</strong>.
            Pro Season Academy is the first app — the foundation that proves the model works.
            More academies are coming, each one structured around a real creative career path.
          </p>
        </div>

        {/* Academy grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {academies.map((academy, i) => (
            <div
              key={academy.name}
              className={`glass-card p-6 fade-up fade-up-delay-${Math.min(i + 1, 4)} ${
                academy.status === "live" ? "!border-primary/20" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`${
                    academy.status === "live"
                      ? "text-primary"
                      : academy.status === "building"
                      ? "text-accent"
                      : "text-muted"
                  }`}
                >
                  {academy.icon}
                </div>
                <StatusBadge status={academy.status} />
              </div>
              <p
                className={`font-mono text-[10px] uppercase tracking-widest mb-1 ${
                  academy.status === "live"
                    ? "text-primary"
                    : academy.status === "building"
                    ? "text-accent"
                    : "text-muted"
                }`}
              >
                {academy.category}
              </p>
              <h3 className="font-display text-lg font-bold text-foreground">
                {academy.name}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {academy.desc}
              </p>
              {academy.status === "live" && (
                <Link
                  href="/signup"
                  className="mt-4 inline-block font-mono text-[10px] uppercase tracking-widest text-primary hover:underline"
                >
                  Join Season One →
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-16 glass-card p-8 text-center fade-up fade-up-delay-4">
          <p className="font-display text-xl font-bold text-foreground sm:text-2xl">
            One model. Many creative careers.
          </p>
          <p className="mt-3 max-w-lg mx-auto text-sm text-muted leading-relaxed sm:text-base">
            Every academy follows the same structure: choose a real coach, walk
            their actual journey, prove your progress, get certified. The
            coaches change. The career changes. The seriousness doesn&apos;t.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {["Esports", "Music", "Content", "Tech"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest text-muted"
              >
                {tag}
              </span>
            ))}
            <span className="rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest text-primary">
              More coming
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
