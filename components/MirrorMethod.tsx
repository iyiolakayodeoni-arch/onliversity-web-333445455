"use client";
import { useScrollAnimation } from "./useScrollAnimation";

/**
 * HOW THE METHOD WORKS — four pillars
 */
export function MirrorMethod() {
  const ref = useScrollAnimation(0.08);

  const pillars = [
    {
      n: "01",
      title: "YOUR JOURNEY IS YOURS",
      body: "Your road is personal. Only your matches, your answers and your receipts move it forward. Nobody can walk it for you.",
    },
    {
      n: "02",
      title: "THE STANDARD GIVES DIRECTION",
      body: "Beside your road runs The Standard — what the best in your path learned at a comparable point. It is a benchmark, not a second track. Read it. Walk your own road.",
    },
    {
      n: "03",
      title: "EVIDENCE BEFORE ADVICE",
      body: "You observe and answer before the app interprets. The machine records the evidence. The player does the seeing.",
    },
    {
      n: "04",
      title: "PROGRESS IS EARNED FROM RECEIPTS",
      body: "Reading, watching or tapping is not improvement. Stages clear only when the evidence says the work was done.",
    },
  ];

  return (
    <section ref={ref as any} id="method" className="relative border-b border-border/60 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(57,255,106,0.06),transparent_50%)]" />
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 py-20 sm:py-28 lg:py-32">
        <div className="fade-up max-w-[820px]">
          <p className="mono-label mb-4">How the method works</p>
          <h2 className="font-display font-bold tracking-tight leading-[1.0] text-[24px] sm:text-[38px]">
            A STRUCTURE THAT MAKES IT DIFFICULT TO KEEP
            <br />
            <span className="text-muted">GIVING YOURSELF CONVENIENT ANSWERS</span>
          </h2>
        </div>

        {/* Four pillars */}
        <div className="mt-14 grid md:grid-cols-2 gap-4 sm:gap-5">
          {pillars.map((p, i) => (
            <div
              key={p.n}
              className="fade-up glass-card tilt-card p-6 sm:p-7 text-left"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-center justify-between">
                <p className="font-mono text-[26px] font-bold text-primary/30">{p.n}</p>
                <div className="h-6 w-6 rounded-full border border-border grid place-items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                </div>
              </div>
              <p className="mt-4 font-display font-bold text-[17px] tracking-tight">{p.title}</p>
              <p className="mt-2 text-[13px] leading-[1.7] text-muted">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div className="fade-up fade-up-delay-1 mt-12 mx-auto max-w-[760px] text-center">
          <p className="font-display font-bold tracking-tight text-[16px] sm:text-[22px] text-muted">
            &ldquo;YOUR JOURNEY IS THE EVIDENCE. THE STANDARD IS THE BENCHMARK.&rdquo;
          </p>
          <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
