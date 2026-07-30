"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { useScrollAnimation } from "./useScrollAnimation";

const faqs = [
  {
    q: "What is Pro Season Academy?",
    a: "A private FC Mobile performance academy inside Onliversity. Not a public tips app or open chat group — a structured academy where invited players train under a chosen coach, reflect on real matches, and prove progress through structured scans.",
  },
  {
    q: "How does Season One work?",
    a: "Season One has 1,000 seats. Members enter through a controlled door, choose one permanent coach, complete a 5-match baseline assessment, and train through a 6-stage coaching journey. The first period is Founder's Week — free access while you help shape the academy.",
  },
  {
    q: "Is there a cost?",
    a: "Not during Founder's Week. You use the full academy for free, speak with the founder and community about features and pricing, and paid access begins openly after consultation. No surprise payments, no hidden walls.",
  },
  {
    q: "What happens if my paid access lapses?",
    a: "Nothing has been deleted. Your XP, journey, Match Vault, Loss Journal, and badges still belong to your story. There's a grace period and a human route to resolve payment issues. Talk to the founder.",
  },
  {
    q: "How does the Match Vault work?",
    a: "FC Mobile doesn't give us an official match data feed. We're honest about that. You log real matches manually — scoreline, composure, whether you used the taught mechanic. The value is making you notice patterns, not pretending to have impossible data.",
  },
  {
    q: "Can I switch coaches?",
    a: "No. Coach selection is a permanent lock. The commitment makes the relationship, journey language, and earned progress mean something. Choose carefully — both coaches lead different worlds.",
  },
];

function FAQSection() {
  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <details key={i} className="glass-card group overflow-hidden">
          <summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-medium text-foreground transition-colors hover:text-primary sm:p-6 sm:text-base">
            {faq.q}
            <svg
              className="ml-4 h-4 w-4 flex-shrink-0 text-muted transition-transform group-open:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <div className="px-5 pb-5 text-sm text-muted leading-relaxed sm:px-6 sm:pb-6">
            {faq.a}
          </div>
        </details>
      ))}
    </div>
  );
}

export function Footer() {
  const ref = useScrollAnimation();

  return (
    <footer ref={ref} className="relative border-b border-border">
      <div className="ambient-orb ambient-orb-green w-[400px] h-[400px] bottom-0 left-1/2 -translate-x-1/2 opacity-10" />

      {/* FAQ Section */}
      <div className="relative mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="text-center mb-10 fade-up">
          <p className="mono-label mb-3">FAQ</p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="fade-up fade-up-delay-1">
          <FAQSection />
        </div>
      </div>

      {/* Founder's Week CTA */}
      <div className="relative mx-auto max-w-3xl px-4 pb-16 sm:px-6 sm:pb-20 fade-up">
        <div className="glass-card p-8 text-center sm:p-10">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-accent pulse-dot" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                Founder&apos;s Week — Active
              </span>
            </span>
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Your seat is waiting.
          </h3>
          <p className="mt-3 text-sm text-muted max-w-md mx-auto">
            1,000 seats. Free founder period. The founder is in the halls
            listening. Pricing will be explained openly — no surprises.
          </p>
          <Link
            href="/signup"
            className="mt-6 inline-block shimmer rounded-lg bg-primary px-8 py-3.5 text-sm font-medium text-background transition-all hover:shadow-glow-sm"
          >
            Claim your free seat
          </Link>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="relative border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 text-center sm:px-6 sm:py-16">
          <div className="transition-transform hover:scale-105">
            <Logo size={32} />
          </div>
          <p className="max-w-sm text-sm text-muted">
            A private FC Mobile performance academy. Serious coaching. Real
            progress.
          </p>

          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="#about" className="link-underline hover:text-foreground">
              About
            </a>
            <a href="#journey" className="link-underline hover:text-foreground">
              Journey
            </a>
            <a href="#features" className="link-underline hover:text-foreground">
              Features
            </a>
            <a href="#pricing" className="link-underline hover:text-foreground">
              Pricing
            </a>
            <a href="#download" className="link-underline hover:text-foreground">
              Download
            </a>
          </div>

          <div className="divider-glow w-full max-w-xs" />

          <p className="font-mono text-[10px] uppercase tracking-widest text-muted/60">
            © {new Date().getFullYear()} Onliversity
          </p>
          <p className="max-w-md text-[10px] text-muted/40 leading-relaxed sm:text-[11px]">
            Chinedu Okafor &amp; Obinna Eze are fictional coaches created for
            Onliversity. The stages they walk are inspired by a real pro&apos;s
            rise — reimagined through them. The learning system, coaching, and
            certification are real.
          </p>
        </div>
      </div>
    </footer>
  );
}
