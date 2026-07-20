"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link href="/" className="group flex items-center gap-2.5 sm:gap-3">
          <div className="transition-transform group-hover:scale-105">
            <Logo size={28} />
          </div>
          <span className="font-display text-base font-bold tracking-tight transition-colors group-hover:text-primary sm:text-lg">
            ONLIVERSITY
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm text-muted lg:flex">
          <a href="#about" className="link-underline transition-colors hover:text-foreground">About</a>
          <a href="#how-it-works" className="link-underline transition-colors hover:text-foreground">How it works</a>
          <a href="#courses" className="link-underline transition-colors hover:text-foreground">Courses</a>
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/signup"
          className="shimmer hidden rounded bg-primary px-4 py-2 text-sm font-medium text-background transition-all hover:opacity-90 lg:block"
        >
          Sign up
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded border border-border text-foreground transition-colors hover:border-primary lg:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-border bg-background/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
          <a href="#about" onClick={() => setMenuOpen(false)} className="rounded px-3 py-2.5 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground">About</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="rounded px-3 py-2.5 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground">How it works</a>
          <a href="#courses" onClick={() => setMenuOpen(false)} className="rounded px-3 py-2.5 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground">Courses</a>
          <Link href="/signup" onClick={() => setMenuOpen(false)} className="mt-2 rounded bg-primary px-3 py-2.5 text-center text-sm font-medium text-background">
            Sign up
          </Link>
        </nav>
      </div>
    </header>
  );
}
