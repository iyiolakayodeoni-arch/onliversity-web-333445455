import { ReactNode } from "react";

/**
 * Onliversity brand mark — single continuous infinity loop.
 *
 * Restrained, professional bloom. One unbroken figure-eight in phosphor
 * green with a subtle outer glow (not overdone). Single amber accent dot
 * just inside the upper-left curve near the center crossing.
 *
 * Serious, not flashy. Real brand, not personal project.
 */

const GREEN = "#39FF6A";
const AMBER = "#F2C078";
const BG = "#070d09";

/* ─── Single continuous infinity loop path ─── */
const INFINITY_PATH =
  "M 50 50 C 50 36, 64 26, 76 26 C 88 26, 94 37, 94 50 C 94 63, 88 74, 76 74 C 64 74, 50 64, 50 50 C 50 36, 36 26, 24 26 C 12 26, 6 37, 6 50 C 6 63, 12 74, 24 74 C 36 74, 50 64, 50 50";

/* ─── Amber accent dot — just inside upper-left curve near center crossing ─── */
const DOT_X = 38;
const DOT_Y = 38;
const DOT_R = 2;

/* ─── Reduced bloom — subtle, professional, not flashy ─── */
function GlowDefs({ id = "bloom" }: { id?: string }) {
  return (
    <defs>
      {/* Subtle bloom — only 2 layers, tighter blur. Serious, not overdone. */}
      <filter id={id} x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="b1" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="b2" />
        <feMerge>
          <feMergeNode in="b2" />
          <feMergeNode in="b1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      {/* Even tighter glow for the amber dot */}
      <filter id={`${id}-dot`} x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" result="d1" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="d2" />
        <feMerge>
          <feMergeNode in="d2" />
          <feMergeNode in="d1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  );
}

/* ── Course icons (green, minimal) ─── */
function ProSeasonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true">
      <rect x="3" y="8" width="18" height="10" rx="5" fill="none" stroke={GREEN} strokeWidth="1.5" />
      <line x1="8" y1="11" x2="8" y2="15" stroke={GREEN} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="13" x2="10" y2="13" stroke={GREEN} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="15" cy="11.5" r="1" fill={GREEN} />
      <circle cx="17" cy="13" r="1" fill={GREEN} />
    </svg>
  );
}
function FireRoyaleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true">
      <path d="M12 2 C12 8, 6 9, 6 15 C6 19, 9 22, 12 22 C15 22, 18 19, 18 15 C18 11, 15 11, 15 7 C15 7, 12 8, 12 2 Z" fill={GREEN} />
      <path d="M12 10 C12 14, 9 14.5, 9 18 C9 20, 10.5 21, 12 21 C13.5 21, 15 20, 15 18 C15 15.5, 13.5 15.5, 13.5 13 C13.5 13, 12 13.5, 12 10 Z" fill={BG} opacity="0.5" />
    </svg>
  );
}
function DutySquadIcon() {
  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke={GREEN} strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" fill="none" stroke={GREEN} strokeWidth="1.5" />
      <line x1="12" y1="1" x2="12" y2="5" stroke={GREEN} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="19" x2="12" y2="23" stroke={GREEN} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="1" y1="12" x2="5" y2="12" stroke={GREEN} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="19" y1="12" x2="23" y2="12" stroke={GREEN} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1.5" fill={GREEN} />
    </svg>
  );
}
function ContentCreationIcon() {
  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true">
      <rect x="2" y="7" width="20" height="13" rx="2" fill="none" stroke={GREEN} strokeWidth="1.5" />
      <polygon points="10,3 14,3 12,7" fill="none" stroke={GREEN} strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="12" cy="14" r="4" fill="none" stroke={GREEN} strokeWidth="1.5" />
      <circle cx="12" cy="14" r="1.5" fill={GREEN} />
    </svg>
  );
}
function TechIcon() {
  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true">
      <polyline points="7,8 3,12 7,16" fill="none" stroke={GREEN} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="17,8 21,12 17,16" fill="none" stroke={GREEN} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="14" y1="6" x2="10" y2="18" stroke={GREEN} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* ─── MAIN LOGO — restrained bloom, serious feel ─── */
export function Logo({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" width={size} height={size} className="absolute inset-0" aria-hidden="true">
        <GlowDefs id="bloom" />
        <path d={INFINITY_PATH} fill="none" stroke={GREEN} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" filter="url(#bloom)" />
        <circle cx={DOT_X} cy={DOT_Y} r={DOT_R} fill={AMBER} filter="url(#bloom-dot)" />
      </svg>
    </div>
  );
}

/* ── COURSE LOGO — same restrained mark + small green icon beneath ─── */
export function CourseLogo({ course, size = 44, className = "" }: { course: "pro-season" | "fire-royale" | "duty-squad" | "content-creation" | "tech"; size?: number; className?: string }) {
  const icons: Record<string, ReactNode> = {
    "pro-season": <ProSeasonIcon />,
    "fire-royale": <FireRoyaleIcon />,
    "duty-squad": <DutySquadIcon />,
    "content-creation": <ContentCreationIcon />,
    "tech": <TechIcon />,
  };
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" width={size} height={size} className="absolute inset-0" aria-hidden="true">
        <GlowDefs id="bloom-course" />
        <path d={INFINITY_PATH} fill="none" stroke={GREEN} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" filter="url(#bloom-course)" />
        <circle cx={DOT_X} cy={DOT_Y} r={DOT_R} fill={AMBER} filter="url(#bloom-course-dot)" />
      </svg>
      <div className="absolute flex items-center justify-center" style={{ width: size * 0.28, height: size * 0.28, left: "50%", top: "100%", transform: "translate(-50%, -30%)" }}>
        {icons[course]}
      </div>
    </div>
  );
}

/* ─── SPLASH LOGO — large but still restrained. No excessive glow. ── */
export function LogoSplash({ size = 200 }: { size?: number }) {
  const s = 2;
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg viewBox="0 0 200 200" width={size} height={size} className="absolute inset-0" aria-hidden="true">
        <defs>
          {/* Splash bloom — slightly more than inline but still restrained */}
          <filter id="bloom-lg" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="b1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="b2" />
            <feMerge>
              <feMergeNode in="b2" />
              <feMergeNode in="b1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="bloom-lg-dot" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="d1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="d2" />
            <feMerge>
              <feMergeNode in="d2" />
              <feMergeNode in="d1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Very subtle ambient — barely there */}
        <circle cx="100" cy="100" r="50" fill={GREEN} opacity="0.02" />

        {/* Main loop — clean, no excessive bloom */}
        <path d={INFINITY_PATH.replace(/\d+/g, (m) => String(Math.round(parseInt(m) * s)))} fill="none" stroke={GREEN} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" filter="url(#bloom-lg)" />

        {/* Amber dot — subtle */}
        <circle cx={DOT_X * s} cy={DOT_Y * s} r={DOT_R * s} fill={AMBER} filter="url(#bloom-lg-dot)" />
      </svg>
    </div>
  );
}

export { ProSeasonIcon as EsportsIcon, FireRoyaleIcon, DutySquadIcon, ContentCreationIcon as ContentIcon, TechIcon };
