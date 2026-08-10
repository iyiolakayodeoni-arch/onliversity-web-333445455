"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { LogoSplash } from "./Logo";
import { useCountUp } from "./useCountUp";

/**
 * Minimum time the splash stays on screen, even if the page loads instantly.
 * Prevents the flash-of-splash feeling that cheapens loaders.
 */
const MIN_SPLASH_MS = 900;
/** Maximum wait — safety net so a stuck asset never traps the user. */
const MAX_SPLASH_MS = 4500;
/** How long the exit animation runs (curtain lift + content fade). */
const EXIT_MS = 950;
/**
 * For client-side navigations: how long after the commit to wait for any
 * pending images/fonts to settle before dismissing. Gives the page a chance
 * to paint its above-the-fold content instead of flashing a skeleton.
 */
const NAV_SETTLE_MS = 350;

/**
 * Per-route loading context (purely cosmetic label under the bar).
 * The router has no official route-name API, so we map known paths.
 */
function routeLabel(pathname: string): string {
  if (pathname === "/") return "Loading Season One";
  if (pathname.startsWith("/dashboard")) return "Entering the Arena";
  if (pathname.startsWith("/signup") || pathname.startsWith("/waitlist")) return "Joining Waitlist";
  if (pathname.startsWith("/download")) return "Preparing Download";
  if (pathname.startsWith("/courses/pro-season") || pathname.startsWith("/pro-season-academy"))
    return "Loading ProSeasonAcademy";
  // strip leading/trailing slashes, humanize
  const seg = pathname.replace(/^\/+|\/+$/g, "").split("/")[0];
  if (!seg) return "Loading Season One";
  return `Loading ${seg.replace(/-/g, " ")}`;
}

/**
 * Hook that fires a "ready" signal:
 *   - On the FIRST load: when the browser's `load` event has fired (images, fonts,
 *     stylesheets all ready) AND the minimum splash time has elapsed.
 *   - On CLIENT-SIDE route changes: after a short NAV_SETTLE_MS settle window
 *     (one rAF tick for the new tree + a breath for images to begin decoding)
 *     plus the minimum splash time.
 *   - Always capped at MAX_SPLASH_MS as a safety net.
 */
function usePageReady(activeKey: string) {
  const [ready, setReady] = useState(false);
  const startedAtRef = useRef<number>(0);
  const isFirstLoadRef = useRef(true);
  const timersRef = useRef<number[]>([]);

  const clearTimers = () => {
    timersRef.current.forEach((t) => window.clearTimeout(t));
    timersRef.current = [];
  };
  const pushTimer = (id: number) => {
    timersRef.current.push(id);
    return id;
  };

  useEffect(() => {
    setReady(false);
    startedAtRef.current = performance.now();
    let cancelled = false;

    const finish = () => {
      if (cancelled) return;
      const elapsed = performance.now() - startedAtRef.current;
      const wait = Math.max(0, MIN_SPLASH_MS - elapsed);
      pushTimer(
        window.setTimeout(() => {
          if (cancelled) return;
          setReady(true);
          isFirstLoadRef.current = false;
        }, wait),
      );
    };

    // ── Safety cap: never trap the user ──
    pushTimer(window.setTimeout(finish, MAX_SPLASH_MS));

    if (isFirstLoadRef.current) {
      // First entry: wait for the browser's full load event so fonts/images are in.
      if (document.readyState === "complete") {
        // Already loaded (e.g. bfcache / fast resume) → short beat, still honor MIN.
        pushTimer(window.setTimeout(finish, 80));
      } else {
        const onLoad = () => finish();
        window.addEventListener("load", onLoad, { once: true });
        pushTimer(
          window.setTimeout(() => {
            // Defensive: if load hasn't fired by then, unblock anyway (max will too).
            window.removeEventListener("load", onLoad);
            finish();
          }, MAX_SPLASH_MS - 200),
        );
      }
    } else {
      // Client-side navigation: give Next/React a paint cycle to commit the new
      // route, then wait NAV_SETTLE_MS so above-the-fold images/fonts can decode.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          pushTimer(window.setTimeout(finish, NAV_SETTLE_MS));
        });
      });
    }

    return () => {
      cancelled = true;
      clearTimers();
    };
  }, [activeKey]);

  return ready;
}

/**
 * Internal component that uses navigation hooks (needs Suspense boundary in Next 14).
 */
function BootScreenInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // Key changes on every route change — including search params, so query navs also get it.
  const routeKey = `${pathname}?${searchParams?.toString() ?? ""}`;

  const [unmount, setUnmount] = useState(false);
  const [pctActive, setPctActive] = useState(true);

  // Reset splash + counter state whenever a new route starts.
  useEffect(() => {
    setUnmount(false);
    setPctActive(false);
    const id = requestAnimationFrame(() => setPctActive(true));
    return () => cancelAnimationFrame(id);
  }, [routeKey]);

  const ready = usePageReady(routeKey);

  // After ready, trigger exit + unmount
  useEffect(() => {
    if (!ready) return;
    const t = window.setTimeout(() => setUnmount(true), EXIT_MS);
    return () => window.clearTimeout(t);
  }, [ready]);

  // Scroll lock + scrollbar-gutter compensation while booting
  useEffect(() => {
    if (typeof document === "undefined") return;
    const body = document.body;
    const html = document.documentElement;
    if (!ready) {
      const scrollbarW = window.innerWidth - html.clientWidth;
      body.style.overflow = "hidden";
      if (scrollbarW > 0) {
        body.style.paddingRight = `${scrollbarW}px`;
      }
      // Guarantee the background covers the full viewport during the splash too
      body.style.minHeight = "100dvh";
    } else {
      body.style.overflow = "";
      body.style.paddingRight = "";
      body.style.minHeight = "";
    }
    return () => {
      body.style.overflow = "";
      body.style.paddingRight = "";
      body.style.minHeight = "";
    };
  }, [ready]);

  const pct = useCountUp(100, pctActive, 1100);
  const label = routeLabel(pathname ?? "/");

  // After the first successful boot + unmount, don't render any of the overlay machinery again
  // until a new navigation happens. We still render children of course.
  const showOverlay = !unmount;

  return (
    <>
      {/* Page content — opacity-only fade so sticky nav / fixed background keep working.
          Inline style (not Tailwind) so it's identical on SSR and hydration. */}
      <div
        style={{
          opacity: ready ? 1 : 0,
          transition: `opacity ${EXIT_MS - 150}ms cubic-bezier(0.16,1,0.3,1)`,
          pointerEvents: ready ? "auto" : "none",
          minHeight: "100dvh",
        }}
      >
        {children}
      </div>

      {showOverlay && (
        <div
          aria-hidden={ready}
          aria-label="Loading"
          className={
            "fixed inset-0 z-[100] flex flex-col items-center justify-center " +
            "overflow-hidden "
          }
          style={{
            transform: ready ? "translateY(-100%)" : "translateY(0)",
            opacity: ready ? 0 : 1,
            transition:
              "transform 900ms cubic-bezier(0.76,0,0.24,1), opacity 600ms ease",
            background:
              // Deep cinematic gradient — not pure black; lifts the brand marks off.
              "radial-gradient(1200px 800px at 50% 40%, rgba(14,40,22,0.55) 0%, rgba(7,13,9,0.85) 55%, #05080a 100%)",
          }}
        >
          {/* ─── Background: arena grid (same density as AnimatedBackground) ─── */}
          <div
            className="absolute inset-0 arena-grid"
            style={{ opacity: 0.35 }}
            aria-hidden
          />
          {/* Soft top/bottom vignette for contrast */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#05080a] to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#05080a] to-transparent"
            aria-hidden
          />

          {/* ─── Aurora orbs — same palette but larger/blurrier so no vertical crop ─── */}
          <div
            className="pointer-events-none absolute aurora-a"
            style={{
              top: "-18%",
              left: "-12%",
              width: "min(900px, 90vw)",
              height: "min(900px, 90vw)",
              borderRadius: "9999px",
              filter: "blur(140px)",
              background:
                "radial-gradient(circle, rgba(57,255,106,0.22), transparent 65%)",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute aurora-b"
            style={{
              top: "10%",
              right: "-18%",
              width: "min(900px, 90vw)",
              height: "min(900px, 90vw)",
              borderRadius: "9999px",
              filter: "blur(150px)",
              background:
                "radial-gradient(circle, rgba(160,107,255,0.18), transparent 65%)",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute aurora-c"
            style={{
              bottom: "-18%",
              left: "20%",
              width: "min(820px, 85vw)",
              height: "min(820px, 85vw)",
              borderRadius: "9999px",
              filter: "blur(140px)",
              background:
                "radial-gradient(circle, rgba(33,230,193,0.17), transparent 65%)",
            }}
            aria-hidden
          />

          {/* Central glow — crisper halo behind the mark, the "premium" pop */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: "min(620px, 70vw)",
              height: "min(620px, 70vw)",
              borderRadius: "9999px",
              background:
                "radial-gradient(circle, rgba(57,255,106,0.20) 0%, rgba(57,255,106,0.06) 35%, transparent 70%)",
              filter: "blur(40px)",
            }}
            aria-hidden
          />
          {/* Thin conic ring around the halo for a "powering on" HUD feel */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: "min(440px, 68vw)",
              height: "min(440px, 68vw)",
              borderRadius: "9999px",
              border: "1px solid rgba(57,255,106,0.12)",
              boxShadow:
                "0 0 40px -10px rgba(57,255,106,0.25), inset 0 0 40px -10px rgba(57,255,106,0.18)",
            }}
            aria-hidden
          />

          {/* Scan-sweep — the horizontal radar line */}
          <div
            className="pointer-events-none absolute left-0 right-0 h-[140px] scan-sweep"
            style={{
              top: 0,
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(57,255,106,0.06) 45%, rgba(57,255,106,0.12) 50%, rgba(57,255,106,0.06) 55%, transparent 100%)",
              filter: "blur(2px)",
            }}
            aria-hidden
          />

          {/* Fine noise grain for film/premium feel */}
          <div
            className="pointer-events-none absolute inset-0 noise"
            aria-hidden
          />

          {/* ─── Foreground content ─── */}
          <div className="loader-pop relative z-10 flex flex-col items-center px-6">
            <div className="float relative">
              <LogoSplash size={148} />
            </div>

            <h1
              className="mt-8 font-display text-[26px] sm:text-[30px] font-bold tracking-[0.28em] text-foreground"
              style={{
                textShadow:
                  "0 0 18px rgba(57,255,106,0.25), 0 0 2px rgba(238,242,236,0.35)",
              }}
            >
              ONLIVERSITY
            </h1>
            <p
              className="mt-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.42em]"
              style={{ color: "rgba(143,184,155,0.9)" }}
            >
              Esports &nbsp;·&nbsp; Academy
            </p>

            {/* Progress */}
            <div className="mt-10 w-[260px] max-w-[78vw]">
              <div className="mb-2.5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em]">
                <span className="text-primary/90">{label}</span>
                <span className="stat-display tabular-nums text-primary/90">
                  {pct}
                  <span className="opacity-60">%</span>
                </span>
              </div>
              <div
                className="relative h-[3px] w-full overflow-hidden rounded-full"
                style={{
                  background: "rgba(57,255,106,0.12)",
                  boxShadow: "inset 0 0 0 1px rgba(57,255,106,0.08)",
                }}
              >
                <div
                  className="h-full rounded-full xp-shine relative"
                  style={{
                    width: `${pct}%`,
                    background:
                      "linear-gradient(90deg, #39ff6a 0%, #7bffb0 40%, #21e6c1 100%)",
                    boxShadow:
                      "0 0 14px rgba(57,255,106,0.75), 0 0 30px -6px rgba(33,230,193,0.65)",
                    transition: "width 0.08s linear",
                  }}
                />
                {/* Blinking "live" dot at the leading edge */}
                <div
                  className="pointer-events-none absolute top-1/2 -translate-y-1/2 h-[7px] w-[7px] rounded-full bg-white"
                  style={{
                    left: `calc(${pct}% - 3.5px)`,
                    boxShadow:
                      "0 0 10px rgba(255,255,255,0.9), 0 0 18px rgba(57,255,106,0.9)",
                    opacity: pct > 0 && pct < 100 ? 1 : 0,
                    transition: "opacity 0.2s ease",
                  }}
                  aria-hidden
                />
              </div>

              {/* Status ticker */}
              <div className="mt-3 flex items-center justify-center gap-2 font-mono text-[9px] uppercase tracking-[0.3em]"
                   style={{ color: "rgba(143,184,155,0.6)" }}>
                <span
                  className="inline-block h-[6px] w-[6px] rounded-full bg-primary pulse-dot"
                  style={{ boxShadow: "0 0 8px rgba(57,255,106,0.9)" }}
                />
                <span>System online</span>
              </div>
            </div>
          </div>

          {/* Corner HUD marks */}
          <CornerMarks />
        </div>
      )}
    </>
  );
}

/** Decorative L-shaped corner brackets to sell the HUD/premium feel. */
function CornerMarks() {
  const base =
    "pointer-events-none absolute h-8 w-8";
  const stroke = "rgba(57,255,106,0.35)";
  return (
    <>
      {/* top-left */}
      <svg className={`${base} top-5 left-5 sm:top-8 sm:left-8`} viewBox="0 0 32 32" aria-hidden>
        <path d="M2 12 V2 H12" stroke={stroke} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
      {/* top-right */}
      <svg className={`${base} top-5 right-5 sm:top-8 sm:right-8`} viewBox="0 0 32 32" aria-hidden>
        <path d="M20 2 H30 V12" stroke={stroke} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
      {/* bottom-left */}
      <svg className={`${base} bottom-5 left-5 sm:bottom-8 sm:left-8`} viewBox="0 0 32 32" aria-hidden>
        <path d="M2 20 V30 H12" stroke={stroke} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
      {/* bottom-right */}
      <svg className={`${base} bottom-5 right-5 sm:bottom-8 sm:right-8`} viewBox="0 0 32 32" aria-hidden>
        <path d="M20 30 H30 V20" stroke={stroke} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    </>
  );
}

/**
 * Public BootScreen — wraps the inner (hook-using) component in a Suspense
 * boundary because useSearchParams() needs one in Next 14's App Router when
 * running during static-generation / bailout.
 */
export function BootScreen({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={null}>
      <BootScreenInner>{children}</BootScreenInner>
    </Suspense>
  );
}
