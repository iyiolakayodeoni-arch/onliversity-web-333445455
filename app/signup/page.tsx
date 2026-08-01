import Link from "next/link";
import { Logo } from "@/components/Logo";
import { EmailCapture } from "@/components/EmailCapture";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 py-6 flex items-center gap-2.5">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo size={28} />
          <span className="font-display font-bold">ONLIVERSITY</span>
        </Link>
      </div>

      <div className="flex-1 mx-auto w-full max-w-[560px] px-4 sm:px-6 py-16 sm:py-24">
        <div className="rounded-[24px] border border-border bg-surface p-8 sm:p-10">
          <p className="mono-label mb-3">Waitlist · Season One</p>
          <h1 className="font-display text-[28px] font-bold leading-[0.95] tracking-tight">
            JOIN THE WAITLIST.
          </h1>
          <p className="mt-4 text-[14px] leading-[1.6] text-muted">
            Season One is live — 1,000 seats, one coach locked permanently. The app isn&apos;t
            sold or hosted on this website, so we removed sign-up from here on purpose: this
            site tells the story, and the app does the work.
            <br/><br/>
            This page does one job — put you on the list. When a seat opens for you (or the
            next wave opens), we email you the app and your seat invite. Your Baseline Week
            starts inside ProSeasonAcademy, where you claim your seat and lock your coach.
            <br/><br/>
            No spam. No surprise payments. Unsubscribe anytime.
          </p>

          <div className="mt-8">
            <EmailCapture ctaLabel="Join the waitlist" />
          </div>

          <Link href="/" className="mt-6 inline-block text-sm text-muted hover:text-foreground">← Back to home</Link>
        </div>
      </div>
    </main>
  );
}
