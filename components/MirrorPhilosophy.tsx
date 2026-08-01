"use client";
import { useScrollAnimation } from "./useScrollAnimation";

/**
 * THE PHILOSOPHY — WHY MIRROR EXISTS
 */
export function MirrorPhilosophy() {
  const ref = useScrollAnimation(0.1);

  const cards = [
    {
      n: "01",
      title: "THE GAP",
      body: "You say you want to be exceptional. Your daily process is unserious. Structure closes the gap.",
    },
    {
      n: "02",
      title: "THE LIE",
      body: "Blaming lag, luck and opponents is comfortable — and it's the reason nothing changes.",
    },
    {
      n: "03",
      title: "THE MIRROR",
      body: "The app preserves what you intended, felt, believed and reviewed. You see the inconsistencies yourself.",
    },
  ];

  return (
    <section ref={ref as any} id="philosophy" className="relative border-b border-border/60">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-20 sm:py-28 lg:py-32">
        <div className="fade-up max-w-[860px] mx-auto text-center">
          <p className="mono-label mb-5">The philosophy · Why Mirror exists</p>
          <h2 className="font-display font-bold tracking-tight leading-[0.95] text-[26px] sm:text-[40px]">
            WE CANNOT MAKE YOU BETTER.
            <br />
            WE CAN ONLY HELP YOU SEE YOURSELF CLEARLY ENOUGH
            <br />
            <span className="text-muted">TO DO THE WORK YOURSELF.</span>
          </h2>
        </div>

        <div className="mt-14 max-w-[760px] mx-auto space-y-5 text-[15px] sm:text-[16px] leading-[1.8] text-muted fade-up fade-up-delay-1">
          <p>
            Onliversity gives creatives one thing the internet never will:{" "}
            <strong className="text-foreground">structure and discipline</strong>. Most people say
            they want a professional outcome while behaving casually every day. They play without
            purpose. They don&apos;t review their decisions. They blame the game, the lag, the
            opponent, the luck. They repeat the same behaviour and call it bad luck.
          </p>
          <p>
            We can build an AI to hand you all the data you want. But you will not learn the
            lesson if you don&apos;t analyse it yourself. The data is the mirror. The analysis is
            the change. So we give you that mirror — you see yourself — and we make it very hard
            for you to lie to yourself, because the truth is placed beside your behaviour and{" "}
            <strong className="text-foreground">reminded to you regularly</strong>.
          </p>
          <p>
            Mirror closes the gap between ambition and behaviour. It records the evidence,
            preserves your own thinking, and places your intentions, your feelings, your memory
            and the recording beside one another — until self-deception becomes difficult to
            maintain.
          </p>
          <p>
            <strong className="text-foreground">Mirror does not accuse you of lying.</strong> It just
            refuses to let you forget the sequence. We tell you that truth constantly throughout
            your time with us —{" "}
            <strong className="text-foreground">even after you eventually leave.</strong>
          </p>
        </div>

        {/* Pull quote */}
        <div className="fade-up fade-up-delay-2 mt-14 mx-auto max-w-[820px] text-center">
          <div className="relative rounded-[24px] border border-border bg-surface/40 px-8 py-10">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-border bg-background px-3 py-0.5 font-mono text-[9px] uppercase tracking-widest text-muted">
              The Mirror
            </span>
            <p className="font-display font-bold tracking-tight leading-[1.1] text-[18px] sm:text-[26px]">
              &ldquo;MIRROR IS NOT AN ANSWER MACHINE.
              <br />
              IT IS A STRUCTURE THAT MAKES IT DIFFICULT
              <br />
              TO KEEP GIVING YOURSELF CONVENIENT ANSWERS.&rdquo;
            </p>
          </div>
        </div>

        {/* Three problem cards */}
        <div className="mt-12 grid sm:grid-cols-3 gap-4 sm:gap-5">
          {cards.map((c, i) => (
            <div
              key={c.n}
              className={`fade-up glass-card tilt-card p-6 sm:p-7 text-left ${i === 2 ? "!border-primary/20" : ""}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <p className="font-mono text-[11px] text-primary">{c.n}</p>
              <p className="mt-3 font-display font-bold text-[16px] tracking-tight">{c.title}</p>
              <p className="mt-2 text-[13px] leading-[1.7] text-muted">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
