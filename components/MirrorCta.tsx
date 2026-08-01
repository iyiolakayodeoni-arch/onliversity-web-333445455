"use client";
import Link from "next/link";
import { useScrollAnimation } from "./useScrollAnimation";

/**
 * Closing CTA band
 */
export function MirrorCta() {
  const ref = useScrollAnimation(0.1);
  return (
    <section ref={ref as any} className="relative border-b border-border/60 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(57,255,106,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-[900px] px-4 sm:px-6 py-20 sm:py-28 text-center">
        <p className="fade-up mono-label mb-5">Season One · 1,000 seats</p>
        <h2 className="fade-up fade-up-delay-1 font-display font-bold tracking-tight leading-[0.95] text-[32px] sm:text-[52px]">
          YOUR ROAD. THE STANDARD.
          <br />
          <span className="text-muted">NO EXCUSES.</span>
        </h2>
        <p className="fade-up fade-up-delay-2 mt-6 max-w-[560px] mx-auto text-[15px] leading-[1.7] text-muted">
          Download the app and start your Baseline Week. One coach. One road. One
          standard. The Mirror does not think for you — and that is exactly the point.
        </p>
        <div className="fade-up fade-up-delay-3 mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/download"
            className="cta-energy shimmer rounded-xl bg-primary px-8 py-4 font-medium text-background transition-all hover:shadow-[0_0_30px_-6px_rgba(57,255,106,0.55)]"
          >
            DOWNLOAD PROSEASONACADEMY
          </Link>
          <a
            href="#faq"
            className="rounded-xl border border-border bg-surface px-8 py-4 font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-surface/60"
          >
            READ THE FAQ
          </a>
        </div>
      </div>
    </section>
  );
}
