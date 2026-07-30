"use client";
import { useScrollAnimation } from "./useScrollAnimation";

export function StorySection() {
  const ref = useScrollAnimation(0.1);
  return (
    <section ref={ref as any} id="story" className="relative border-b border-border/60">
      <div className="ambient-orb ambient-orb-green w-[500px] h-[500px] -top-20 -left-40" />
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-20 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="fade-up sticky top-28">
              <p className="mono-label mb-4">Our story • Why you can trust us</p>
              <h2 className="font-display font-bold text-[32px] sm:text-[44px] leading-[0.96] tracking-tight">
                YouTube taught
                <br /> you tricks.
                <br /> <span className="text-muted">No one taught you how to perform.</span>
              </h2>
              <div className="mt-8 rounded-2xl border border-border bg-surface p-4 flex gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/15 border border-primary/20 grid place-items-center text-primary font-bold">KO</div>
                <div>
                  <p className="text-sm font-medium">Founder</p>
                  <p className="text-[12px] text-muted leading-snug mt-1">“I was tired of watching talented players quit because coaching was either fake, too expensive, or not built for mobile.”</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8 fade-up fade-up-delay-1">
            <div className="space-y-5 text-[15px] leading-[1.7] text-muted">
              <p className="text-foreground text-[18px] leading-[1.6] font-medium">
                Onliversity started with one frustration: FC Mobile has 20M+ players, but no real path to get better. Just algorithm-driven tips that contradict each other.
              </p>
              <p>
                We spent months talking to semi-pro and pro players — not influencers, <strong className="text-foreground">real grinders</strong> — about what actually separates a Division 3 player from someone who wins tournaments. It wasn&apos;t a skill move. It was <strong className="text-foreground">composure, decision loops, and learning to read your own losses.</strong>
              </p>
              <p>
                That&apos;s why we stopped trying to build “another tips app.” We built an <strong className="text-foreground">academy</strong>. The first inside Onliversity is called <strong className="text-foreground">Pro Season Academy</strong>. It&apos;s modeled like a football academy: you enter, you choose a head coach permanently, you do a baseline, you train stage-by-stage through their actual journey from grassroots to pro.
              </p>
            </div>

            {/* Trust grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {[
                { t: "We don't fake data", d: "FC Mobile gives no official API. We tell you that upfront. You log matches honour-system, because reflection is the feature — not data scraping." },
                { t: "We don't sell rank", d: "We never promise you'll hit Legendary. We promise you'll understand your game better, fix repeat mistakes, and have proof of progress." },
                { t: "Real coaches, fictionalized for clarity", d: "Chinedu and Obinna are inspired by a real pro rise, reimagined into two distinct personalities so you actually care which path you choose." },
                { t: "Founder answers", d: "During Season One, the founder lives in The Halls — academy chat. Bugs, feedback, pricing questions go directly to a human. Not a bot ticket." },
              ].map((x) => (
                <div key={x.t} className="glass-card p-5">
                  <p className="font-display font-bold text-[13px]">{x.t}</p>
                  <p className="mt-2 text-[12px] leading-[1.6] text-muted">{x.d}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-primary/10 border border-primary/20 p-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2">The promise</p>
              <p className="text-[14px] leading-[1.6] text-foreground">
                If you log honestly, watch the Film Room properly, and sit with your Loss Journal for 10 minutes a week, you will stop repeating the same three mistakes. That is measurable progress — more honest than any rank badge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
