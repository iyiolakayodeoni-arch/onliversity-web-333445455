"use client";
import { useScrollAnimation } from "./useScrollAnimation";

/**
 * FAQ
 */
export function MirrorFaq() {
  const ref = useScrollAnimation(0.08);

  const faqs = [
    {
      q: "WHY ONLY 1,000 SEATS?",
      a: "Because one person can't personally coach a million people. The cap keeps coaching personal — every member can actually be tracked and spoken to. When it's full, it's full. That's the point.",
    },
    {
      q: "CAN I SWITCH COACHES?",
      a: "No. The path lock is permanent — by design. Commitment is the product.",
    },
    {
      q: "DO I NEED TO BE GOOD AT FC MOBILE?",
      a: "No. The baseline week doesn't grade your skill. It maps your behaviour under pressure. That's what we train.",
    },
    {
      q: "IS THIS AN AI COACH?",
      a: "The opposite. The Mirror records the evidence; you do the seeing. No AI verdicts, no automatic lessons, no reading your head.",
    },
    {
      q: "WHERE IS MY MATCH RECORDING STORED?",
      a: "On your phone. Screen capture runs only with your consent, starts only when your match starts, and raw video is never uploaded.",
    },
    {
      q: "WHAT HAPPENS IF I MISS A DAY?",
      a: "Nothing. The next day unlocks 24 hours after the last one seals — lateness is never punished. One task a day is the contract, not a threat.",
    },
    {
      q: "WHAT HAPPENS WHEN SEASON ONE IS FULL?",
      a: "You join the waitlist. You can still train solo — the vault, journey and sessions all work offline. A seat opens when a lapsed one is released.",
    },
    {
      q: "WHAT IS THE STANDARD?",
      a: "The benchmark journey of the best in your path — a composite, never a copy of one person. It shows where disciplined people go. Your evidence decides whether you're doing the work to get there.",
    },
    {
      q: "WILL THIS EVER BE ON GOOGLE PLAY?",
      a: "No. Never. A store is a feed of infinite, anonymous apps — the opposite of everything ProSeasonAcademy is. We handle every seat ourselves, which is exactly how the 1,000-seat cap and the permanent coach lock are enforced. Direct download is not a workaround; it's the point.",
    },
  ];

  return (
    <section ref={ref as any} id="faq" className="relative border-b border-border/60">
      <div className="mx-auto max-w-[860px] px-4 sm:px-6 py-20 sm:py-28">
        <div className="fade-up text-center mb-12">
          <p className="mono-label mb-4">FAQ</p>
          <h2 className="font-display font-bold tracking-tight text-[28px] sm:text-[40px] leading-[0.95]">
            STRAIGHT <span className="text-muted">ANSWERS.</span>
          </h2>
        </div>

        <div className="mt-8 space-y-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className="fade-up group rounded-2xl border border-border bg-surface/50 open:bg-surface open:border-border-bright transition-colors"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6">
                <span className="text-[14px] sm:text-[15px] font-medium leading-snug tracking-tight">
                  {f.q}
                </span>
                <span className="h-7 w-7 rounded-full border border-border bg-background grid place-items-center text-muted group-open:rotate-180 transition-transform">
                  ⌄
                </span>
              </summary>
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-[13px] leading-[1.7] text-muted">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
