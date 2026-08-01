"use client";
import { useState } from "react";

export function EmailCapture({ variant = "hero", placeholder = "your@email.com", ctaLabel = "Get updates" }: { variant?: "hero" | "inline" | "footer"; placeholder?: string; ctaLabel?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setStatus("loading");
    // Simulate success — wire to your real endpoint / Supabase / Resend
    await new Promise((r) => setTimeout(r, 900));
    setStatus("done");
  };

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 flex items-center gap-3">
        <span className="h-6 w-6 rounded-full bg-primary grid place-items-center text-background">✓</span>
        <div>
          <p className="text-sm font-medium text-foreground">You&apos;re on the list.</p>
          <p className="text-xs text-muted">We&apos;ll email you the app link when your seat opens. No spam — just honest updates.</p>
        </div>
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <form onSubmit={submit} className="flex gap-2 w-full max-w-sm">
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder={placeholder} className="input-pxxl flex-1" required />
        <button disabled={status==="loading"} className="shimmer rounded-xl bg-primary px-5 text-sm font-medium text-background disabled:opacity-60">
          {status==="loading" ? "..." : "Notify me"}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={submit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 p-1.5 rounded-2xl bg-surface border border-border">
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder={placeholder} className="flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted/50" required />
        <button disabled={status==="loading"} className="cta-energy shimmer rounded-xl bg-primary px-6 py-3 text-sm font-medium text-background transition-all hover:shadow-[0_0_28px_-6px_rgba(57,255,106,0.55)] disabled:opacity-60">
          {status==="loading" ? "Adding..." : ctaLabel}
        </button>
      </div>
      <p className="mt-3 text-[11px] leading-relaxed text-muted/80 font-mono">Email only. Updates on Season One, new coaches, academy drops. No spam, unsub anytime. Seat claiming happens inside the app — not here.</p>
    </form>
  );
}
