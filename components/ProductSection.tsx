"use client";
import { useScrollAnimation } from "./useScrollAnimation";

const stages = [
  { n: "01", title: "Grassroots", coach: "First ball, first doubt", metric: "Composure 4.2 → 6.1 avg" },
  { n: "02", title: "The Grind", coach: "Playing every night after school/work", metric: "Film Room: Heel-to-heel" },
  { n: "03", title: "Breakthrough", coach: "First tournament win", metric: "Loss causes mapped" },
  { n: "04", title: "Setbacks", coach: "Injuries, tilt, losing streaks", metric: "Match Vault 20+ logs" },
  { n: "05", title: "Pro Season", coach: "Training like it's a job", metric: "Mechanic mastery scan" },
  { n: "06", title: "Champion Mind", coach: "Winning when it matters", metric: "Certification unlocked" },
];

export function ProductSection() {
  const ref = useScrollAnimation(0.08);
  return (
    <section ref={ref as any} id="product" className="relative border-b border-border/60 overflow-hidden">
      <div className="absolute inset-0 field-bg opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 py-20 sm:py-28 lg:py-32">
        {/* Header */}
        <div className="fade-up max-w-[720px]">
          <p className="mono-label mb-4">The product • Pro Season Academy</p>
          <h2 className="font-display font-bold text-[32px] sm:text-[48px] leading-[0.95] tracking-tight">
            Not a tips feed.<br/> <span className="text-primary">A real academy you walk through.</span>
          </h2>
          <p className="mt-5 text-[15px] sm:text-[16px] leading-[1.6] text-muted">
            Inside the Onliversity app, you don&apos;t scroll. You train. Pro Season Academy gives you a head coach, a 6-stage path modeled on a real pro journey, and tools that make you confront your actual gameplay — not someone else&apos;s highlights.
          </p>
        </div>

        {/* Two coaches comparison */}
        <div className="mt-12 grid lg:grid-cols-2 gap-6 fade-up fade-up-delay-1">
          {[
            {
              name: "Chinedu 'The King'",
              tag: "ST • Finisher • Ice in the box",
              desc: "Direct, demanding. Believes finishing is composure + positioning, not power. His journey is about turning chaos into calm.",
              color: "#f2c078",
              personality: "Demanding but warm. Will call you out.",
            },
            {
              name: "Obinna 'Tekkerz'",
              tag: "CAM • Playmaker • The brain",
              desc: "Patient, technical. obsessed with scanning, first touch, and creating space where there is none. Thinks football is chess at sprint speed.",
              color: "#39ff6a",
              personality: "Calm, detailed. Makes you think.",
            },
          ].map((c) => (
            <div key={c.name} className="tilt-card rounded-[22px] border border-border bg-surface/80 p-6 sm:p-7 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[160px] h-[160px] rounded-full blur-3xl opacity-20" style={{ background: c.color }} />
              <div className="relative flex gap-4">
                <div className="h-12 w-12 rounded-full border bg-background grid place-items-center font-display font-bold" style={{ borderColor: c.color, color: c.color }}>{c.name[0]}</div>
                <div>
                  <p className="font-display font-bold text-[16px]">{c.name}</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted mt-1">{c.tag}</p>
                </div>
              </div>
              <p className="relative mt-4 text-[13px] leading-[1.6] text-muted">{c.desc}</p>
              <div className="relative mt-4 inline-flex rounded-full bg-background border border-border px-3 py-1 text-[11px] text-muted">“{c.personality}”</div>
              <div className="relative mt-5 flex gap-2">
                <span className="rounded-full bg-primary/10 border border-primary/20 px-2.5 py-1 font-mono text-[9px] text-primary">Permanent choice</span>
                <span className="rounded-full bg-surface border border-border px-2.5 py-1 font-mono text-[9px] text-muted">Different dialogue • Same certification path</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stages - Pxxl style timeline */}
        <div className="mt-16 rounded-[24px] border border-border bg-surface-elevated/70 overflow-hidden fade-up fade-up-delay-2">
          <div className="border-b border-border/60 px-6 sm:px-8 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary pulse-dot" />
              <p className="font-mono text-[11px] uppercase tracking-widest">6 stages • Walk their real path</p>
            </div>
            <p className="hidden sm:block font-mono text-[10px] text-muted">~30-45 mins per stage • Film + Task + Scan</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/50">
            {stages.map((s) => (
              <div key={s.n} className="p-6 sm:p-7 group hover:bg-surface/50 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-primary">{s.n}</span>
                  <span className="font-mono text-[9px] text-muted/70">{s.metric}</span>
                </div>
                <p className="mt-3 font-display font-bold text-[18px] leading-tight group-hover:text-primary transition-colors">{s.title}</p>
                <p className="mt-1 text-[12px] text-muted">{s.coach}</p>
                <div className="mt-4 h-[3px] w-full bg-border rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-0 group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Micro copy */}
        <p className="mt-6 text-center font-mono text-[11px] text-muted/60">You can&apos;t skip stages. You earn the next one by logging proof you tried the mechanic in real matches. That&apos;s the difference.</p>
      </div>
    </section>
  );
}
