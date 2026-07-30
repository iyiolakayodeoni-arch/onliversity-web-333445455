"use client";
import { useScrollAnimation } from "./useScrollAnimation";
import { EmailCapture } from "./EmailCapture";

const faqs = [
  { q: "Is this just another FC Mobile tips app?", a: "No. Tips apps give you 30 contradicting videos. We give you one coach, one journey, and you must log real matches. The film room is short, the Match Vault forces you to notice your own patterns. It's an academy, not a feed." },
  { q: "Are Chinedu and Obinna real people?", a: "They are fictional coaches inspired by a real pro rise — reimagined into two distinct personalities so the choice actually changes dialogue, tasks, and metaphors. The coaching system, scans, certification, and founder contact are real." },
  { q: "Why should I trust Onliversity?", a: "Because we tell you what we can't do. FC Mobile has no official API — we don't fake data. We don't promise Legend rank. We don't hide pricing. Founder is reachable in The Halls, and during Season One we are in consultation — no hidden paywalls." },
  { q: "Why email only? Where is sign-up?", a: "Seat claiming, coach lock, baseline assessment — all that lives inside the Onliversity app, not this marketing site. This site is just to tell our story and collect emails for honest updates. No funnels, no spam." },
  { q: "What happens after I give my email?", a: "You get updates when Season One opens, new Film Room drops, new coaches are added, or roadmap changes. You can unsubscribe anytime. We don't sell your email. Ever." },
  { q: "How much will it cost later?", a: "Season One starts with a free Founder Week so you use it properly and tell us what helps. Pricing after that will be decided openly with founding members — no surprise subscriptions. If your paid access ever lapses, nothing is deleted: your XP, Vault, Loss Journal, badges stay." },
];

export function TrustSection() {
  const ref = useScrollAnimation(0.08);
  return (
    <section ref={ref as any} id="updates" className="relative border-b border-border/60">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-20 sm:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10">
          {/* Email box */}
          <div className="lg:col-span-5">
            <div className="fade-up rounded-[24px] border border-primary/20 bg-primary/[0.06] p-6 sm:p-8 sticky top-24">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-2 w-2 rounded-full bg-primary pulse-dot" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary">Email-only • No account needed</span>
              </div>
              <h3 className="font-display font-bold text-[26px] leading-[0.95]">Get honest updates. <br/><span className="text-muted">No spam.</span></h3>
              <p className="mt-3 text-[13px] leading-[1.6] text-muted">We’ll email you when Pro Season Season One news drops, new coaches enter the academy, and future academies open. That’s it.</p>
              <div className="mt-6">
                <EmailCapture variant="hero" placeholder="you@football.com" />
              </div>
              <div className="mt-6 rounded-xl bg-background border border-border p-3 flex gap-3">
                <span className="text-lg">🛡️</span>
                <p className="text-[11px] leading-[1.5] text-muted">Your email is just for updates. We don’t sell, swap, or spam. Seat claiming and coaching happens inside the app — this site has no sign-up wall on purpose.</p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="lg:col-span-7">
            <div className="fade-up">
              <p className="mono-label mb-3">Trust & FAQ</p>
              <h2 className="font-display font-bold text-[28px] sm:text-[36px] leading-[0.95]">Built to earn your time, not steal it.</h2>
            </div>

            <div className="mt-8 space-y-3">
              {faqs.map((f, i) => (
                <details key={f.q} className="fade-up group rounded-2xl border border-border bg-surface/60 open:bg-surface open:border-border-bright transition-colors" style={{ transitionDelay: `${i*0.05}s`}}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6">
                    <span className="text-[14px] sm:text-[15px] font-medium leading-snug">{f.q}</span>
                    <span className="h-7 w-7 rounded-full border border-border bg-background grid place-items-center text-muted group-open:rotate-180 transition-transform">⌄</span>
                  </summary>
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-[13px] leading-[1.6] text-muted">{f.a}</div>
                </details>
              ))}
            </div>

            <div className="fade-up mt-8 rounded-2xl border border-border bg-surface p-5 flex items-center gap-4">
              <div className="hidden sm:grid h-10 w-10 place-items-center rounded-full bg-background border border-border">⚽</div>
              <div>
                <p className="text-[13px] font-medium">Try before you trust our words.</p>
                <p className="text-[12px] text-muted mt-1">Download the Onliversity app when Season One opens, pick a coach, log 5 honest matches. If the Loss Journal doesn’t show you a pattern in a week, unsubscribe — no hard feelings.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
