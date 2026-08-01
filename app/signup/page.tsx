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
          <p className="mono-label mb-3">No sign-up here anymore</p>
          <h1 className="font-display text-[28px] font-bold leading-[0.95] tracking-tight">
            Seat claiming happens inside the app.
          </h1>
          <p className="mt-4 text-[14px] leading-[1.6] text-muted">
            We removed sign-up from the website on purpose. This site is just to tell our story and collect emails for honest updates.
            <br/><br/>
            If you want to join ProSeasonAcademy, start your Baseline Week inside the Onliversity app — you’ll claim your seat and lock your coach there.
            <br/><br/>
            For now, drop your email below. We’ll ping you when things open. No spam.
          </p>

          <div className="mt-8">
            <EmailCapture />
          </div>

          <Link href="/" className="mt-6 inline-block text-sm text-muted hover:text-foreground">← Back to home</Link>
        </div>
      </div>
    </main>
  );
}
