"use client";

import Link from "next/link";
import { useScrollAnimation } from "./useScrollAnimation";

const tiers = [
  {
    name: "Explorer",
    price: "Free",
    description: "Perfect for getting started and exploring what Onliversity offers.",
    features: [
      "Browse all coach profiles",
      "Preview 1 journey stage",
      "Community access",
      "Match scanner (3 matches)",
    ],
    cta: "Start Free",
    featured: false,
  },
  {
    name: "Student",
    price: "₦5,000",
    period: "/month",
    description: "Full access to walk one complete journey with a real coach.",
    features: [
      "Full journey access (6 stages)",
      "Unlimited coaching moments",
      "Match scanner (unlimited)",
      "Progress tracking & stats",
      "Certification on completion",
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Partner",
    price: "80/20",
    period: "split",
    description: "Graduate, get certified, and train the next generation.",
    features: [
      "Everything in Student",
      "Official certification",
      "Coach under Onliversity",
      "Keep 80% of session fees",
      "Your own coaching profile",
    ],
    cta: "Complete First",
    featured: false,
  },
];

export function Pricing() {
  const ref = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="pricing"
      className="relative border-b border-border"
    >
      <div className="ambient-orb ambient-orb-green w-[400px] h-[400px] top-1/4 -right-40 opacity-10" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 md:py-32">
        <div className="text-center mb-12 fade-up">
          <p className="mono-label mb-3">Pricing</p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Start free. Go further.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg">
            Every path starts with exploration. Pay when you&apos;re ready to
            walk the full journey.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`pricing-card fade-up fade-up-delay-${i + 1} ${
                tier.featured ? "featured" : ""
              }`}
            >
              {tier.featured && (
                <div className="mb-4">
                  <span className="inline-block rounded-lg bg-primary/10 border border-primary/20 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary">
                    Most popular
                  </span>
                </div>
              )}
              <p className="mono-label">{tier.name}</p>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold text-foreground stat-display">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="font-mono text-sm text-muted">
                    {tier.period}
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                {tier.description}
              </p>

              <div className="mt-6 divider-glow" />

              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/signup"
                className={`mt-8 block w-full rounded-lg py-3 text-center text-sm font-medium transition-all ${
                  tier.featured
                    ? "bg-primary text-background hover:shadow-glow-sm shimmer"
                    : "border border-border-bright text-foreground hover:border-primary/40"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
