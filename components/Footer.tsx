"use client";
import { Logo } from "./Logo";
import { EmailCapture } from "./EmailCapture";

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
            <p className="mt-4 max-w-[360px] text-[13px] leading-[1.6] text-muted">
              A real university for creatives. Starting with football. Pro Season Academy is a private FC Mobile performance academy — not a tips app.
            </p>
            <div className="mt-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-2">Get updates — email only</p>
              <EmailCapture variant="footer" placeholder="your@email.com" />
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-4">Navigate</p>
              <ul className="space-y-2.5 text-[13px] text-muted">
                <li><a href="#story" className="hover:text-foreground">Our story</a></li>
                <li><a href="#product" className="hover:text-foreground">Product</a></li>
                <li><a href="#inside" className="hover:text-foreground">Inside</a></li>
                <li><a href="#future" className="hover:text-foreground">Roadmap</a></li>
                <li><a href="#updates" className="hover:text-foreground">Get updates</a></li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-4">Product</p>
              <ul className="space-y-2.5 text-[13px] text-muted">
                <li>Pro Season Academy (Live)</li>
                <li>Fire Royale (Building)</li>
                <li>Creator Academy (Planned)</li>
                <li>Code Academy (Planned)</li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-4">Trust</p>
              <ul className="space-y-2.5 text-[13px] text-muted">
                <li>No fake data promise</li>
                <li>Founder in The Halls</li>
                <li>Permanent coach choice</li>
                <li>Honor-system logging</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted/60">© {new Date().getFullYear()} Onliversity • Built for players who actually want to improve</p>
          <p className="max-w-[520px] text-[10px] leading-relaxed text-muted/50 text-center sm:text-right">
            Chinedu Okafor & Obinna Eze are fictional coaches inspired by a real pro rise — reimagined for coaching clarity. The learning system, certification, and academy structure are real. FC Mobile is a trademark of Electronic Arts.
          </p>
        </div>
      </div>
    </footer>
  );
}
