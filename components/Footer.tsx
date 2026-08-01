"use client";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-surface/30">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-14 sm:py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <Logo size={28} />
              <span className="font-display font-bold">ONLIVERSITY</span>
            </div>
            <p className="mt-4 max-w-[400px] text-[13px] leading-[1.6] text-muted">
              Mirror is the method. ProSeasonAcademy is the first programme — and the template
              every future Onliversity course is built from.
            </p>
            <div className="mt-6 space-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted/70">
              <p>YOUR ROAD. THE STANDARD. NO EXCUSES.</p>
              <p>SEE YOURSELF. DO THE WORK.</p>
              <p className="text-muted/50">THE STANDARD SHOWS THE WAY. YOUR EVIDENCE MOVES YOU.</p>
              <p className="text-primary/70">MIRROR DOES NOT THINK FOR YOU.</p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-4">Navigate</p>
              <ul className="space-y-2.5 text-[13px] text-muted">
                <li><a href="#philosophy" className="hover:text-foreground">Philosophy</a></li>
                <li><a href="#method" className="hover:text-foreground">Method</a></li>
                <li><a href="#programme" className="hover:text-foreground">Programme</a></li>
                <li><a href="#inside" className="hover:text-foreground">Inside</a></li>
                <li><a href="#till" className="hover:text-foreground">Pricing</a></li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-4">Product</p>
              <ul className="space-y-2.5 text-[13px] text-muted">
                <li><a href="/pro-season-academy" className="hover:text-foreground">ProSeasonAcademy (Live)</a></li>
                <li>Next paths (Coming soon)</li>
                <li>One method · any craft</li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-4">Trust</p>
              <ul className="space-y-2.5 text-[13px] text-muted">
                <li>1,000 seats only</li>
                <li>One coach · permanent lock</li>
                <li>Evidence before advice</li>
                <li>Receipts, not promises</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border/60 flex flex-col items-center gap-4 text-center">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted/70">
            © 2026 Onliversity · Mirror · ProSeasonAcademy — an Onliversity programme
          </p>
          <p className="max-w-[760px] text-[11px] leading-relaxed text-muted/60">
            ProSeasonAcademy is a development programme, not a gaming service, and is not
            affiliated with or endorsed by EA Sports or FC Mobile.
          </p>
        </div>
      </div>
    </footer>
  );
}
