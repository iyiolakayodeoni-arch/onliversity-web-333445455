"use client";
import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-[60] border-b border-border/60 backdrop-blur-xl bg-background/80 hud-border">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 sm:px-6 h-[64px]">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="transition-transform duration-300 group-hover:scale-110">
            <Logo size={28} />
          </span>
          <span className="font-display font-bold tracking-tight text-[15px]">ONLIVERSITY</span>
          <span className="hidden sm:inline-flex ml-2 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-primary">
            Mirror · ProSeasonAcademy
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {[
            ["Philosophy", "#philosophy"],
            ["Method", "#method"],
            ["Programme", "#programme"],
            ["Inside", "#inside"],
            ["Pricing", "#till"],
          ].map(([label, href]) => (
            <a key={label} href={href} className="group relative text-[13px] text-muted hover:text-foreground transition-colors">
              {label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/pro-season-academy" className="text-[13px] text-muted hover:text-foreground transition-colors">
            The app →
          </Link>
          <Link
            href="/pro-season-academy"
            className="cta-energy shimmer rounded-full bg-primary px-4 py-2 text-[13px] font-medium text-background hover:shadow-[0_0_22px_-4px_rgba(57,255,106,0.6)] transition-all"
          >
            Start Baseline Week
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden h-9 w-9 grid place-items-center rounded-full border border-border text-muted">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl px-4 py-4">
          <nav className="flex flex-col gap-1">
            {[
              ["Philosophy", "#philosophy"],
              ["Method", "#method"],
              ["Programme", "#programme"],
              ["Inside the academy", "#inside"],
              ["Pricing", "#till"],
              ["FAQ", "#faq"],
            ].map(([l, h]) => (
              <a key={l} href={h} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm text-muted hover:bg-surface hover:text-foreground">
                {l}
              </a>
            ))}
            <Link href="/pro-season-academy" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-primary px-4 py-3 text-center text-sm font-medium text-background">
              Start Baseline Week
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
