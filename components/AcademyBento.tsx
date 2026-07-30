"use client";
import { useScrollAnimation } from "./useScrollAnimation";

const bento = [
  {
    label: "01 • Film Room",
    title: "Like being coached, not reading an article.",
    desc: "Each stage is a one-way session: the mechanic, why it matters, practical steps, the coach's rule, and your stage objectives. 4-7 min, no fluff. You then have to use it.",
    visual: (
      <div className="mt-4 rounded-xl border border-border bg-background p-3">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-primary/15 grid place-items-center text-[10px]">▶</div>
          <span className="text-[11px] font-medium">Stage 3 Film • Composed finishing</span>
          <span className="ml-auto font-mono text-[9px] text-muted">04:22</span>
        </div>
        <div className="mt-3 h-1.5 w-full bg-border rounded-full overflow-hidden">
          <div className="h-full w-[72%] bg-primary" />
        </div>
        <p className="mt-2 font-mono text-[9px] text-muted">Coach rule: “If you’re rushing, you’re missing.”</p>
      </div>
    ),
    span: "lg:col-span-7",
  },
  {
    label: "02 • Match Vault",
    title: "Log real games. Notice patterns.",
    desc: "FC Mobile doesn't give us API. We tell you that. You log scoreline, mode, composure, whether you used the mechanic. The value is the honesty.",
    visual: (
      <div className="mt-4 space-y-2">
        <div className="rounded-xl bg-background border border-border p-3 flex justify-between">
          <span className="text-xs">W 2-1 vs parked bus • Used heel-to-heel</span>
          <span className="font-mono text-[10px] text-primary">8/10 comp</span>
        </div>
        <div className="rounded-xl bg-background border border-border p-3 flex justify-between opacity-70">
          <span className="text-xs">L 1-2 • Rushed in box</span>
          <span className="font-mono text-[10px] text-muted">5/10</span>
        </div>
      </div>
    ),
    span: "lg:col-span-5",
  },
  {
    label: "03 • Loss Journal",
    title: "One line after a loss. That's it.",
    desc: "Choose a cause — defending, finishing, composure, kickoff gap — add a one-line note. Over 20 losses you see your actual weakness, not what YouTube says.",
    visual: (
      <div className="mt-4 rounded-xl border border-accent/20 bg-accent/5 p-3">
        <p className="font-mono text-[9px] uppercase tracking-widest text-accent">Cause analysis</p>
        <p className="mt-1 text-xs text-foreground">“Lost because I over-committed fullbacks at 70'”</p>
        <div className="mt-3 flex gap-1.5">
          {["Defending","Composure","Finishing"].map(t=>(
            <span key={t} className="rounded-full border border-border px-2 py-0.5 text-[9px] text-muted">{t}</span>
          ))}
        </div>
      </div>
    ),
    span: "lg:col-span-5",
  },
  {
    label: "04 • Match Scan",
    title: "Prove you did the work.",
    desc: "Checkpoint combining your Vault evidence, mechanic usage (The Eye), your self-awareness (The Mind), and coach reading. Pass = XP + badge + next stage.",
    visual: (
      <div className="mt-4 rounded-xl border border-primary/20 bg-primary/10 p-3 flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-primary">Stage 2 Scan • PASSED</p>
          <p className="text-[11px] text-muted">Eye 8/10 • Mind 7/10 • 120 XP</p>
        </div>
        <div className="h-8 w-8 rounded-full bg-primary grid place-items-center text-background font-bold">✓</div>
      </div>
    ),
    span: "lg:col-span-7",
  },
  {
    label: "05 • The Halls",
    title: "Community without the toxicity.",
    desc: "Academy rooms to celebrate, ask, share Match Vault progress. Founder is visible daily. Not a public Discord where you get drowned.",
    visual: (
      <div className="mt-4 flex gap-2">
        <span className="rounded-full bg-surface border border-border px-3 py-1 text-[11px]">#wins</span>
        <span className="rounded-full bg-surface border border-border px-3 py-1 text-[11px]">#loss-review</span>
        <span className="rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-[11px] text-primary">#founder-ama</span>
      </div>
    ),
    span: "lg:col-span-5",
  },
  {
    label: "06 • Certification",
    title: "A certificate that means something.",
    desc: "Complete all 6 stages, pass scans, log 40+ real matches. You get a Pro Season certificate + partner track. You keep 80% when you coach others.",
    visual: (
      <div className="mt-4 rounded-xl bg-background border border-border p-3 flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-foreground text-background grid place-items-center font-bold text-sm">ON</div>
        <div>
          <p className="text-xs font-bold">Pro Season Certified</p>
          <p className="text-[11px] text-muted">Partner eligible • 80/20 split</p>
        </div>
      </div>
    ),
    span: "lg:col-span-7",
  },
];

export function AcademyBento() {
  const ref = useScrollAnimation(0.05);
  return (
    <section ref={ref as any} id="inside" className="relative border-b border-border/60">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-20 sm:py-28">
        <div className="fade-up flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <p className="mono-label mb-3">Inside the academy • Pxxl-style deep dive</p>
            <h2 className="font-display font-bold text-[32px] sm:text-[44px] leading-[0.95] tracking-tight">Every screen makes you <span className="text-muted">better at the game.</span></h2>
          </div>
          <p className="max-w-[420px] text-[14px] leading-[1.6] text-muted">No daily streak shaming. No loot boxes. Just tools that make you stop lying to yourself about why you lost.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-4 sm:gap-5">
          {bento.map((b, i) => (
            <div key={b.label} className={`fade-up glass-card p-6 sm:p-7 ${b.span}`} style={{ transitionDelay: `${Math.min(i*0.06,0.24)}s`}}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary">{b.label}</p>
              <p className="mt-3 font-display font-bold text-[18px] sm:text-[20px] leading-[1.15]">{b.title}</p>
              <p className="mt-2 text-[13px] leading-[1.6] text-muted">{b.desc}</p>
              {b.visual}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
