"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { useScrollAnimation } from "./useScrollAnimation";

const faqs = [
  {
    q: "What is Onliversity?",
    a: "Onliversity is a digital university for creatives. We take real pro careers — their actual journeys from grassroots to championship — and turn them into structured paths you can walk. Stage by stage, with real coaching at every step.",
  },
  {
    q: "How does the coach system work?",
    a: "After your 5 placement matches, you choose between two coaches. Each coach is based on a real pro's career. You walk their exact journey — 6 stages from grassroots to the top — with AI-powered coaching moments drawn from their actual experience.",
  },
  {
    q: "Is the certification real?",
    a: "Yes. When you complete all 6 stages, you receive a dated, verifiable certification from Onliversity. It records exactly how you developed — not just that you showed up.",
  },
  {
    q: "How does the 80/20 partnership work?",
    a: "After certification, you can apply to become an Onliversity coach. You train the next generation of learners under the Onliversity name and keep 80% of every session fee.",
  },
  {
    q: "Which games are supported?",
    a: "We're starting with Esports — FC Mobile, Free Fire, and Call of Duty are first. Content Creation and Tech academies are planned for later. The model works for any career with a clear progression path.",
  },
];

function FAQSection() {
  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <details
          key={i}
          className="glass-card group overflow-hidden"
        >
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

function Newsletter() {
  return (
    <div className="glass-card p-8 text-center sm:p-10">
      <p className="mono-label mb-3">Newsletter</p>
      <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
        Stay in the loop
      </h3>
      <p className="mt-3 text-sm text-muted sm:text-base">
        Weekly insights on esports coaching, new academy launches, and platform
        updates.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:max-w-md sm:mx-auto">
        <input
          type="email"
          placeholder="your@email.com"
          className="input-glass flex-1"
        />
        <button className="shimmer rounded-lg bg-primary px-6 py-3 text-sm font-medium text-background transition-all hover:shadow-glow-sm">
          Subscribe
        </button>
      </div>
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

      {/* Newsletter */}
      <div className="relative mx-auto max-w-3xl px-4 pb-16 sm:px-6 sm:pb-20 fade-up">
        <Newsletter />
      </div>

      {/* Footer bottom */}
      <div className="relative border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 text-center sm:px-6 sm:py-16">
          <div className="transition-transform hover:scale-105">
            <Logo size={32} />
          </div>
          <p className="max-w-sm text-sm text-muted">
            Walk a real pro&apos;s path. Stage by stage. Certified at the end.
          </p>
          <Link
            href="/signup"
            className="shimmer rounded-lg bg-primary px-6 py-3 text-sm font-medium text-background transition-all hover:shadow-glow-sm"
          >
            Start your journey
          </Link>

          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="#about" className="link-underline hover:text-foreground">
              About
            </a>
            <a
              href="#how-it-works"
              className="link-underline hover:text-foreground"
            >
              How it works
            </a>
            <a href="#courses" className="link-underline hover:text-foreground">
              Courses
            </a>
            <a href="#pricing" className="link-underline hover:text-foreground">
              Pricing
            </a>
          </div>

          <div className="divider-glow w-full max-w-xs" />

          <p className="font-mono text-[10px] uppercase tracking-widest text-muted/60">
            © {new Date().getFullYear()} Onliversity
          </p>
          <p className="max-w-md text-[10px] text-muted/40 leading-relaxed sm:text-[11px]">
            Chinedu Okafor &amp; Obinna Eze are fictional. The journey they
            walk is inspired by a real pro&apos;s rise — reimagined through
            them. The learning system, coaching, and certification are real.
          </p>
        </div>
      </div>
    </footer>
  );
}
