"use client";

import Link from "next/link";
import { useScrollAnimation } from "./useScrollAnimation";

export function Pricing() {
  const ref = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="pricing"
      className="relative border-b border-border"
    >
      <div className="ambient-orb ambient-orb-green w-[400px] h-[400px] top-1/4 -right-40 opacity-10" />

      <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28 md:py-32">
        <div className="text-center mb-12 fade-up">
          <p className="mono-label mb-3">Pricing</p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            No surprises. Ever.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg">
            Season One starts with a free founder period. Use the academy
            properly. Tell us what helps and what should go.
          </p>
        </div>

        {/* Founder's Week card */}
        <div className="glass-card p-8 sm:p-10 text-center fade-up fade-up-delay-1">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-accent pulse-dot" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                Founder&apos;s Week — Active
              </span>
            </span>
          </div>

          <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Free to start. Free to explore.
          </h3>

          <p className="mt-4 max-w-lg mx-auto text-base text-muted leading-relaxed">
            Enter the academy. Choose your coach. Complete your baseline. Walk
            the first stages. Talk to the founder in the community. Say what
            helps, what&apos;s missing, what should go.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                title: "Founder&apos;s Week",
                price: "Free",
                desc: "Full academy access. No payment required. No hidden walls.",
                featured: true,
              },
              {
                title: "After consultation",
                price: "TBD",
                desc: "Pricing decided openly with founding members. No surprise changes.",
                featured: false,
              },
              {
                title: "Partner path",
                price: "80/20",
                desc: "Complete the journey, get certified, train the next generation. You keep 80%.",
                featured: false,
              },
            ].map((tier) => (
              <div
                key={tier.title}
                className={`glass-card p-5 text-left ${
                  tier.featured ? "!border-accent/30 !bg-accent/5" : ""
                }`}
              >
                <p className="mono-label text-xs" dangerouslySetInnerHTML={{ __html: tier.title }} />
                <p className="mt-2 font-display text-3xl font-bold text-foreground stat-display">
                  {tier.price}
                </p>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {tier.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 divider-glow" />

          <div className="mt-8 space-y-4 text-sm text-muted max-w-lg mx-auto">
            <p>
              <strong className="text-foreground">How it works:</strong> The founder
              is in the halls listening during Founder&apos;s Week. Before paid
              passes begin, pricing and access will be explained openly. No
              surprises, no hidden change of deal.
            </p>
            <p>
              <strong className="text-foreground">Why it becomes paid:</strong>{" "}
              Seats are limited and should go to committed players. The academy
              is a coached environment, not a disposable free feed. Paid
              membership supports the attention, content, and improvements that
              make it valuable.
            </p>
            <p>
              <strong className="text-foreground">If access lapses:</strong>{" "}
              Nothing has been deleted. Your XP, journey, Match Vault, Loss
              Journal, and badges still belong to your story. There&apos;s a
              grace period and a human route to resolve payment issues.
            </p>
          </div>

          <div className="mt-10">
            <Link
              href="/signup"
              className="shimmer inline-block rounded-lg bg-primary px-8 py-3.5 font-medium text-background transition-all hover:shadow-glow-sm"
            >
              Claim your free seat
            </Link>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted/60">
              Season One · 1,000 seats · Founder&apos;s Week active
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
