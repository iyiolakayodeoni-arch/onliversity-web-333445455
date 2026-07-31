"use client";
import { useEffect, useState } from "react";
import { EmailCapture } from "./EmailCapture";
import { useScrollAnimation } from "./useScrollAnimation";
import { useCountUp } from "./useCountUp";

function FUTCard({ name, rating, role, accent }: { name: string; rating: string; role: string; accent: string }) {
  return (
    <div className="fut-card w-[160px] p-3">
      <div className="fut-card-shine" />
      <div className="relative flex justify-between items-start">
        <div>
          <p className="font-display text-[22px] font-bold leading-none neon-glow" style={{ color: accent }}>{rating}</p>
          <p className="font-mono text-[9px] uppercase tracking-widest text-muted mt-0.5">{role}</p>
        </div>
        <div className="h-7 w-7 rounded-full bg-surface border border-border grid place-items-center">
          <span className="text-[12px]">⚽</span>
        </div>
      </div>
      <div className="mt-4 h-[74px] rounded-xl bg-gradient-to-b from-primary/15 to-transparent border border-primary/10 grid place-items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_0%,rgba(57,255,106,0.35),transparent_60%)]" />
        <span className="relative text-lg">🎮</span>
      </div>
      <p className="mt-3 font-display font-bold text-[13px] leading-tight">{name}</p>
      <p className="font-mono text-[8px] uppercase tracking-widest text-muted">PRO COACH • VERIFIED</p>
      <div className="mt-2 flex gap-1">
        <span className="h-1 flex-1 rounded-full bg-primary" />
        <span className="h-1 flex-1 rounded-full bg-primary/60" />
        <span className="h-1 flex-1 rounded-full bg-border" />
      </div>
    </div>
  );
}

function StatHUD({ active }: { active: boolean }) {
  const coaches = useCountUp(2, active, 1000);
  const stages = useCountUp(6, active, 1200);
  const xp = useCountUp(640, active, 1500);
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-3">
      {[
        { label: "Pro coaches", value: coaches, suffix: "" },
        { label: "Stages", value: stages, suffix: "" },
        { label: "XP to unlock", value: xp, suffix: "" },
      ].map((s) => (
        <div key={s.label} className="rounded-xl border border-border bg-surface/60 backdrop-blur px-3 py-2.5 text-center chip-glow">
          <p className="font-display font-bold text-[20px] sm:text-[22px] leading-none text-primary stat-display">{s.value}{s.suffix}</p>
          <p className="mt-1 font-mono text-[8px] sm:text-[9px] uppercase tracking-widest text-muted">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

function AcademyPreview() {
  return (
    <div className="relative w-full max-w-[520px]">
      {/* Pitch aura */}
      <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_center,rgba(57,255,106,0.10),transparent_60%)] blur-2xl" />
      {/* Main terminal */}
      <div className="hud-border relative rounded-[24px] border border-border bg-surface-elevated/80 backdrop-blur-xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7)]">
        {/* broadcast header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-border/60 bg-surface/60">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-[10px] text-muted/60">onliversity — pro-season-academy</span>
          </div>
          <span className="font-mono text-[10px] text-danger flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-danger live-dot" />LIVE
          </span>
        </div>

        {/* moving scanline */}
        <div className="pointer-events-none absolute inset-x-0 top-12 h-16 bg-gradient-to-b from-primary/10 to-transparent scan-sweep" />

        <div className="relative p-5 sm:p-6">
          {/* Coach line */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-primary/15 border border-primary/20 grid place-items-center font-display font-bold text-primary text-sm">C</div>
              <div>
                <p className="text-sm font-medium">Chinedu • Stage 3 unlock</p>
                <p className="text-[11px] text-muted">Finishing under pressure</p>
              </div>
            </div>
            <span className="rounded-full bg-primary/10 border border-primary/20 px-2.5 py-1 font-mono text-[9px] text-primary">640 XP</span>
          </div>

          {/* Mini pitch */}
          <div className="mt-5 rounded-2xl border border-border bg-background/80 p-3 field-bg relative overflow-hidden">
            <div className="absolute inset-3 rounded-[14px] border border-white/[0.07]" />
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white/[0.06]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 rounded-full border border-white/[0.07]" />
            <div className="relative grid grid-cols-6 gap-2 py-6">
              {[
                { s: "GS", stage: "Grassroots" },
                { s: "GR", stage: "Grind" },
                { s: "BR", stage: "Breakthrough" },
                { s: "ST", stage: "Setbacks" },
                { s: "PR", stage: "Pro", active: true },
                { s: "CH", stage: "Champion" },
              ].map((n) => (
                <div key={n.s} className="flex flex-col items-center gap-1.5">
                  <div className={`h-7 w-7 rounded-full grid place-items-center font-mono text-[9px] border transition-all hover:scale-110 ${n.active ? "bg-primary text-background border-primary shadow-[0_0_14px_rgba(57,255,106,0.6)]" : "bg-surface border-border text-muted"}`}>{n.s}</div>
                  <span className="font-mono text-[7px] text-muted/70">{n.stage}</span>
                </div>
              ))}
            </div>
          </div>

          <XPBarFromParent />

          {/* Log */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-background border border-border p-3">
              <p className="font-mono text-[9px] uppercase tracking-widest text-muted">Match Vault</p>
              <p className="mt-1 text-xs">W 3-1 • Composure 8/10</p>
              <p className="text-[11px] text-muted">Used heel-to-heel • film room</p>
            </div>
            <div className="rounded-xl bg-background border border-border p-3">
              <p className="font-mono text-[9px] uppercase tracking-widest text-muted">Loss Journal</p>
              <p className="mt-1 text-xs">L 0-2 • Defending</p>
              <p className="text-[11px] text-muted">Tracked tackle timing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating FUT cards */}
      <div className="hidden lg:block absolute -right-10 -top-8 rotate-6 float">
        <FUTCard name="Obinna Tekkerz" rating="91" role="CAM • Playmaker" accent="#39ff6a" />
      </div>
      <div className="hidden lg:block absolute -left-10 -bottom-10 -rotate-6 float" style={{ animationDelay: "1s" }}>
        <FUTCard name="Chinedu King" rating="93" role="ST • Finisher" accent="#f2c078" />
      </div>
    </div>
  );
}

/** XP bar variant inside the preview window. */
function XPBarFromParent() {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-muted mb-1.5">
        <span className="text-primary">Stage 3 progress</span>
        <span>64%</span>
      </div>
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-background border border-border">
        <div
          className="h-full rounded-full"
          style={{ width: "64%", background: "linear-gradient(90deg, var(--color-primary), var(--color-electric))", boxShadow: "0 0 12px rgba(57,255,106,0.5)" }}
        />
      </div>
    </div>
  );
}

export function HeroNew() {
  const ref = useScrollAnimation(0.1);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section ref={ref as any} className="relative overflow-hidden border-b border-border/60">
      {/* local glow accents layered over the global background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(57,255,106,0.14),transparent_60%)] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(242,192,120,0.08),transparent_60%)] blur-2xl pointer-events-none" />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 py-14 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-10 items-center">
          <div>
            {/* Broadcast status row */}
            <div className="fade-up flex flex-wrap gap-2 mb-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary">Season One • Live</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted">
                <span>🎮</span> Built for FC Mobile grinders
              </span>
            </div>

            <h1 className="fade-up fade-up-delay-1 font-display font-bold tracking-tight text-[40px] sm:text-[54px] lg:text-[64px] leading-[0.9]">
              The Structure
              <br />
              <span className="text-muted">Esports</span>
              <br />
              <span className="relative inline-block glitch">
                <span className="neon-text neon-glow">Need.</span>
              </span>
            </h1>

            <p className="fade-up fade-up-delay-2 mt-6 max-w-[560px] text-[15px] sm:text-[17px] leading-[1.6] text-muted">
              A structured <strong className="text-foreground">6-stage esports academy</strong> for FC Mobile. Real coaches. Real journeys. Real progress tracking — not another tips feed.
            </p>

            {/* Animated stat HUD */}
            <div className="fade-up fade-up-delay-2 mt-7 max-w-[420px]">
              <StatHUD active={mounted} />
            </div>

            <div className="fade-up fade-up-delay-3 mt-7 max-w-[480px]">
              <EmailCapture />
              <div className="mt-4 flex items-center gap-4 text-[11px] font-mono text-muted/70">
                <span className="flex items-center gap-1.5"><span className="text-primary">✓</span> No spam</span>
                <span className="flex items-center gap-1.5"><span className="text-primary">✓</span> Unsub anytime</span>
                <span className="flex items-center gap-1.5"><span className="text-primary">✓</span> Real updates</span>
              </div>
            </div>

            <div className="fade-up fade-up-delay-4 mt-8 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1,2].map(i=>(
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-surface grid place-items-center text-[11px] font-bold">{i===1 ? "C":"O"}</div>
                ))}
              </div>
              <p className="text-[12px] leading-snug text-muted"><strong className="text-foreground">2 verified pro coaches</strong> with real journeys.<br/>6 stages. Match Vault + Loss Journal. Certification.</p>
            </div>
          </div>

          <div className="fade-up fade-up-delay-2 flex justify-center lg:justify-end">
            <AcademyPreview />
          </div>
        </div>

        {/* Social strip */}
        <div className="fade-up mt-14 sm:mt-20 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-surface/60 px-5 py-4 backdrop-blur">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted/80">Why players trust the model</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-muted">
            <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-primary" /> No fake match data — honest logging</span>
            <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-primary" /> Coach = permanent choice</span>
            <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-primary" /> Founder in the halls</span>
          </div>
        </div>
      </div>
    </section>
  );
}
