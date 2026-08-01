"use client";
import { useScrollAnimation } from "./useScrollAnimation";

/**
 * PRICING — THE TILL
 * Pricing tiers shown per the copy pack. The final division of seats
 * and any price split is confirmed during Founding Week.
 */
export function MirrorTill() {
  const ref = useScrollAnimation(0.08);

  const africa = [
    { id: "NG-MID-90", price: "₦3,900" },
    { id: "NG-PRO-90", price: "₦7,800" },
    { id: "NG-PRO-365", price: "₦25,000" },
  ];
  const world = [
    { id: "WD-MID-90", price: "£7.99" },
    { id: "WD-PRO-90", price: "£15.99" },
    { id: "WD-PRO-365", price: "£47.99" },
  ];

  const cards = [
    { t: "14-DAY TRIAL", d: "Try before you pay." },
    { t: "FULL REFUNDS", d: "Time not used = money back." },
    { t: "1000 SEATS ONLY", d: "When Season One is full, it's full. That's the point." },
  ];

  return (
    <section ref={ref as any} id="till" className="relative border-b border-border/60">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-20 sm:py-28 lg:py-32">
        <div className="fade-up max-w-[760px]">
          <p className="mono-label mb-4">Pricing · The Till</p>
          <h2 className="font-display font-bold tracking-tight leading-[0.95] text-[30px] sm:text-[46px]">
            YOUR SEAT. <span className="text-muted">YOUR TERMS.</span>
          </h2>
          <p className="mt-6 max-w-[680px] text-[15px] sm:text-[16px] leading-[1.8] text-muted">
            Pro Season is paid-only after the trial, because anything free is taken for
            granted. <strong className="text-foreground">14-day trial.</strong>{" "}
            <strong className="text-foreground">3-day grace</strong> after expiry.{" "}
            <strong className="text-foreground">Refunds for time not used.</strong> Season One
            is capped at 1,000 seats — enforced by the database, not by a button. When the
            season is full, new players join the waitlist and can keep training solo in the
            meantime.
          </p>
        </div>

        {/* Pricing table */}
        <div className="fade-up fade-up-delay-1 mt-12 grid lg:grid-cols-2 gap-4 sm:gap-5">
          <div className="glass-card p-6 sm:p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-1">
              Africa · credit packs
            </p>
            <p className="text-[12px] text-muted mb-6">Priced for where you are, not where we are.</p>
            <div className="space-y-3">
              {africa.map((r) => (
                <div key={r.id} className="flex items-center justify-between rounded-xl border border-border bg-background/60 px-5 py-4">
                  <span className="font-mono text-[11px] text-muted">{r.id}</span>
                  <span className="font-display font-bold text-[20px] text-foreground">{r.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 sm:p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-1">
              World · subscription
            </p>
            <p className="text-[12px] text-muted mb-6">Same programme, same standard.</p>
            <div className="space-y-3">
              {world.map((r) => (
                <div key={r.id} className="flex items-center justify-between rounded-xl border border-border bg-background/60 px-5 py-4">
                  <span className="font-mono text-[11px] text-muted">{r.id}</span>
                  <span className="font-display font-bold text-[20px] text-foreground">{r.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subsidy line */}
        <div className="fade-up fade-up-delay-2 mt-10 rounded-[20px] border border-primary/20 bg-primary/[0.06] px-6 sm:px-8 py-6 text-center">
          <p className="text-[14px] sm:text-[15px] leading-[1.7] text-foreground">
            <strong className="text-primary">Africa pays ~28% of the world price, on purpose.</strong>{" "}
            Same programme, same standard, same receipts — priced for where you are, not where we are.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid sm:grid-cols-3 gap-4 sm:gap-5">
          {cards.map((c, i) => (
            <div key={c.t} className="fade-up glass-card tilt-card p-6 text-center" style={{ transitionDelay: `${i * 0.08}s` }}>
              <p className="font-display font-bold text-[16px] tracking-tight">{c.t}</p>
              <p className="mt-2 text-[13px] leading-[1.6] text-muted">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
