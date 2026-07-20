/**
 * Game-specific illustrations for course cards.
 * Each illustration captures the essence of the game without using copyrighted assets.
 * Designed to feel immersive — like you're about to enter the game.
 */

/* ─── FC Mobile / Pro Season Academy — Football pitch atmosphere ─── */
export function FCMobileIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full opacity-20 transition-opacity group-hover:opacity-30" aria-hidden="true">
      <defs>
        <linearGradient id="pitch-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#39FF6A" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#39FF6A" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Stadium atmosphere */}
      <rect width="400" height="300" fill="url(#pitch-gradient)" />
      {/* Pitch lines */}
      <line x1="50" y1="280" x2="350" y2="280" stroke="#39FF6A" strokeWidth="1" opacity="0.4" />
      <line x1="200" y1="280" x2="200" y2="100" stroke="#39FF6A" strokeWidth="1" opacity="0.3" />
      <circle cx="200" cy="190" r="40" fill="none" stroke="#39FF6A" strokeWidth="1" opacity="0.3" />
      {/* Goal posts */}
      <rect x="160" y="260" width="80" height="20" fill="none" stroke="#39FF6A" strokeWidth="1.5" opacity="0.5" />
      {/* Player silhouette */}
      <g transform="translate(200, 200)">
        <circle cx="0" cy="-30" r="8" fill="#39FF6A" opacity="0.6" />
        <path d="M -15 -20 L 15 -20 L 20 10 L 10 40 L -10 40 L -20 10 Z" fill="#39FF6A" opacity="0.4" />
        <path d="M -20 -10 L -35 5" stroke="#39FF6A" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <path d="M 20 -10 L 35 5" stroke="#39FF6A" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      </g>
      {/* Ball */}
      <circle cx="240" cy="250" r="6" fill="#F2C078" opacity="0.7" />
      {/* Crowd silhouettes */}
      <g opacity="0.15">
        <circle cx="50" cy="80" r="4" fill="#39FF6A" />
        <circle cx="70" cy="75" r="4" fill="#39FF6A" />
        <circle cx="90" cy="78" r="4" fill="#39FF6A" />
        <circle cx="110" cy="72" r="4" fill="#39FF6A" />
        <circle cx="130" cy="76" r="4" fill="#39FF6A" />
        <circle cx="270" cy="76" r="4" fill="#39FF6A" />
        <circle cx="290" cy="72" r="4" fill="#39FF6A" />
        <circle cx="310" cy="78" r="4" fill="#39FF6A" />
        <circle cx="330" cy="75" r="4" fill="#39FF6A" />
        <circle cx="350" cy="80" r="4" fill="#39FF6A" />
      </g>
    </svg>
  );
}

/* ─── Free Fire / Fire Royale Academy — Battle royale island atmosphere ─── */
export function FreeFireIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full opacity-20 transition-opacity group-hover:opacity-30" aria-hidden="true">
      <defs>
        <linearGradient id="sky-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F2C078" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#39FF6A" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#070d09" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Sky atmosphere */}
      <rect width="400" height="300" fill="url(#sky-gradient)" />
      {/* Island/terrain */}
      <path d="M 0 250 Q 100 230 200 240 T 400 250 L 400 300 L 0 300 Z" fill="#39FF6A" opacity="0.1" />
      <path d="M 50 260 Q 150 240 250 250 T 400 260 L 400 300 L 50 300 Z" fill="#39FF6A" opacity="0.15" />
      {/* Parachute */}
      <g transform="translate(200, 80)">
        <path d="M -30 0 Q 0 -20 30 0 L 20 10 L 0 5 L -20 10 Z" fill="#F2C078" opacity="0.6" />
        <line x1="-20" y1="10" x2="-10" y2="30" stroke="#F2C078" strokeWidth="1" opacity="0.5" />
        <line x1="0" y1="5" x2="0" y2="30" stroke="#F2C078" strokeWidth="1" opacity="0.5" />
        <line x1="20" y1="10" x2="10" y2="30" stroke="#F2C078" strokeWidth="1" opacity="0.5" />
        <circle cx="0" cy="35" r="5" fill="#39FF6A" opacity="0.7" />
      </g>
      {/* Character silhouette */}
      <g transform="translate(200, 220)">
        <circle cx="0" cy="-25" r="6" fill="#39FF6A" opacity="0.6" />
        <path d="M -12 -18 L 12 -18 L 15 5 L 10 30 L -10 30 L -15 5 Z" fill="#39FF6A" opacity="0.5" />
        <path d="M -15 -8 L -25 5" stroke="#39FF6A" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M 15 -8 L 25 5" stroke="#39FF6A" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </g>
      {/* Trees/structures */}
      <g opacity="0.3">
        <rect x="80" y="220" width="8" height="40" fill="#39FF6A" />
        <circle cx="84" cy="215" r="12" fill="#39FF6A" opacity="0.4" />
        <rect x="300" y="230" width="10" height="30" fill="#39FF6A" />
        <circle cx="305" cy="225" r="10" fill="#39FF6A" opacity="0.4" />
      </g>
      {/* Zone circle */}
      <circle cx="200" cy="250" r="80" fill="none" stroke="#39FF6A" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />
    </svg>
  );
}

/* ─── Call of Duty / Duty Squad Academy — Tactical military atmosphere ─── */
export function CallOfDutyIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full opacity-20 transition-opacity group-hover:opacity-30" aria-hidden="true">
      <defs>
        <linearGradient id="tactical-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#39FF6A" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#39FF6A" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Tactical atmosphere */}
      <rect width="400" height="300" fill="url(#tactical-gradient)" />
      {/* Grid overlay */}
      <g opacity="0.15">
        <line x1="0" y1="50" x2="400" y2="50" stroke="#39FF6A" strokeWidth="0.5" />
        <line x1="0" y1="100" x2="400" y2="100" stroke="#39FF6A" strokeWidth="0.5" />
        <line x1="0" y1="150" x2="400" y2="150" stroke="#39FF6A" strokeWidth="0.5" />
        <line x1="0" y1="200" x2="400" y2="200" stroke="#39FF6A" strokeWidth="0.5" />
        <line x1="0" y1="250" x2="400" y2="250" stroke="#39FF6A" strokeWidth="0.5" />
        <line x1="50" y1="0" x2="50" y2="300" stroke="#39FF6A" strokeWidth="0.5" />
        <line x1="100" y1="0" x2="100" y2="300" stroke="#39FF6A" strokeWidth="0.5" />
        <line x1="150" y1="0" x2="150" y2="300" stroke="#39FF6A" strokeWidth="0.5" />
        <line x1="200" y1="0" x2="200" y2="300" stroke="#39FF6A" strokeWidth="0.5" />
        <line x1="250" y1="0" x2="250" y2="300" stroke="#39FF6A" strokeWidth="0.5" />
        <line x1="300" y1="0" x2="300" y2="300" stroke="#39FF6A" strokeWidth="0.5" />
        <line x1="350" y1="0" x2="350" y2="300" stroke="#39FF6A" strokeWidth="0.5" />
      </g>
      {/* Crosshair */}
      <g transform="translate(200, 150)">
        <circle cx="0" cy="0" r="40" fill="none" stroke="#39FF6A" strokeWidth="1" opacity="0.4" />
        <circle cx="0" cy="0" r="20" fill="none" stroke="#39FF6A" strokeWidth="1" opacity="0.5" />
        <line x1="-50" y1="0" x2="-25" y2="0" stroke="#39FF6A" strokeWidth="1.5" opacity="0.6" />
        <line x1="25" y1="0" x2="50" y2="0" stroke="#39FF6A" strokeWidth="1.5" opacity="0.6" />
        <line x1="0" y1="-50" x2="0" y2="-25" stroke="#39FF6A" strokeWidth="1.5" opacity="0.6" />
        <line x1="0" y1="25" x2="0" y2="50" stroke="#39FF6A" strokeWidth="1.5" opacity="0.6" />
        <circle cx="0" cy="0" r="3" fill="#F2C078" opacity="0.8" />
      </g>
      {/* Soldier silhouette */}
      <g transform="translate(200, 220)">
        <circle cx="0" cy="-30" r="7" fill="#39FF6A" opacity="0.6" />
        <path d="M -14 -22 L 14 -22 L 18 10 L 12 35 L -12 35 L -18 10 Z" fill="#39FF6A" opacity="0.5" />
        {/* Weapon */}
        <path d="M -25 5 L -40 10" stroke="#39FF6A" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <path d="M 25 5 L 40 10" stroke="#39FF6A" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      </g>
      {/* HUD elements */}
      <g opacity="0.3">
        <rect x="20" y="20" width="60" height="3" fill="#39FF6A" />
        <rect x="20" y="28" width="40" height="3" fill="#39FF6A" opacity="0.6" />
        <rect x="320" y="20" width="60" height="3" fill="#39FF6A" />
        <text x="30" y="50" fill="#39FF6A" fontSize="8" fontFamily="monospace" opacity="0.5">TACTICAL VIEW</text>
      </g>
      {/* Target markers */}
      <g opacity="0.4">
        <circle cx="100" cy="100" r="3" fill="#F2C078" />
        <circle cx="300" cy="120" r="3" fill="#F2C078" />
        <circle cx="150" cy="200" r="3" fill="#F2C078" />
      </g>
    </svg>
  );
}
