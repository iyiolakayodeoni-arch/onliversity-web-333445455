"use client";

import { useEffect, useState } from "react";

interface Coach2DProps {
  coachId: string;
  size?: number;
  animation?: "idle" | "talking" | "hype";
}

export function Coach2D({ coachId, size = 200, animation = "idle" }: Coach2DProps) {
  const isChinedu = coachId === "king-of-the-pitch";

  return (
    <div
      className="coach-2d-container"
      style={{ width: size, height: size * 1.2 }}
    >
      <svg
        viewBox="0 0 200 240"
        width="100%"
        height="100%"
        style={{ overflow: "visible" }}
      >
        <defs>
          {/* Simple shadow */}
          <filter id="shadow-2d">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3" />
          </filter>
        </defs>

        {isChinedu ? (
          <Chinedu2D animation={animation} />
        ) : (
          <Obinna2D animation={animation} />
        )}
      </svg>
    </div>
  );
}

/**
 * Chinedu - Yoruba from Ibadan
 * 2D Naija animation style: bold outlines, simple shapes, expressive
 */
function Chinedu2D({ animation }: { animation: string }) {
  return (
    <g className="character-2d">
      {/* Shadow on ground */}
      <ellipse cx="100" cy="235" rx="35" ry="6" fill="rgba(0,0,0,0.2)" />

      {/* LEGS - Black joggers */}
      <rect x="82" y="180" width="14" height="45" rx="3" fill="#2c2c2c" stroke="#000" strokeWidth="2" />
      <rect x="104" y="180" width="14" height="45" rx="3" fill="#2c2c2c" stroke="#000" strokeWidth="2" />

      {/* White sneakers */}
      <rect x="80" y="220" width="18" height="10" rx="3" fill="#ffffff" stroke="#000" strokeWidth="2" />
      <rect x="102" y="220" width="18" height="10" rx="3" fill="#ffffff" stroke="#000" strokeWidth="2" />

      {/* TORSO - Black jersey */}
      <rect x="75" y="120" width="50" height="65" rx="4" fill="#1a1a1a" stroke="#000" strokeWidth="2" />

      {/* Gold trim */}
      <rect x="75" y="125" width="50" height="4" fill="#d4af37" />
      <rect x="75" y="180" width="50" height="4" fill="#d4af37" />

      {/* Number 10 */}
      <text x="100" y="160" textAnchor="middle" fill="#d4af37" fontSize="20" fontWeight="bold" fontFamily="monospace">
        10
      </text>

      {/* ARMS - Skin visible */}
      <rect x="60" y="125" width="12" height="45" rx="6" fill="#8B6239" stroke="#000" strokeWidth="2" />
      <rect x="128" y="125" width="12" height="45" rx="6" fill="#8B6239" stroke="#000" strokeWidth="2" />

      {/* Hands */}
      <circle cx="66" cy="173" r="7" fill="#8B6239" stroke="#000" strokeWidth="2" />
      <circle cx="134" cy="173" r="7" fill="#8B6239" stroke="#000" strokeWidth="2" />

      {/* NECK */}
      <rect x="92" y="108" width="16" height="15" fill="#8B6239" stroke="#000" strokeWidth="2" />

      {/* HEAD - Yoruba features */}
      <ellipse cx="100" cy="90" rx="28" ry="32" fill="#8B6239" stroke="#000" strokeWidth="2" />

      {/* HAIR - Low taper fade */}
      <path d="M 72 75 Q 100 60 128 75 L 128 82 Q 100 68 72 82 Z" fill="#1a1a1a" stroke="#000" strokeWidth="1.5" />

      {/* FACE FEATURES */}
      {/* Eyes - almond shaped */}
      <ellipse cx="88" cy="88" rx="4" ry="5" fill="#ffffff" stroke="#000" strokeWidth="1.5" />
      <ellipse cx="112" cy="88" rx="4" ry="5" fill="#ffffff" stroke="#000" strokeWidth="1.5" />
      <circle cx="88" cy="88" r="2" fill="#2d1810" />
      <circle cx="112" cy="88" r="2" fill="#2d1810" />

      {/* Eyebrows - strong */}
      <path d="M 84 82 Q 88 80 92 82" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M 108 82 Q 112 80 116 82" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Nose - broader */}
      <path d="M 100 90 L 97 98 L 103 98 Z" fill="#8B6239" stroke="#000" strokeWidth="1" />

      {/* Mouth - slight smile */}
      <path d="M 93 102 Q 100 106 107 102" stroke="#6B4423" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Gold chain */}
      <path d="M 90 115 Q 100 120 110 115" stroke="#d4af37" strokeWidth="2" fill="none" />
      <circle cx="100" cy="118" r="2" fill="#d4af37" />
    </g>
  );
}

/**
 * Obinna - Igbo from Port Harcourt
 * 2D Naija style: energetic, bold colors
 */
function Obinna2D({ animation }: { animation: string }) {
  return (
    <g className="character-2d">
      {/* Shadow */}
      <ellipse cx="100" cy="235" rx="32" ry="6" fill="rgba(0,0,0,0.2)" />

      {/* LEGS - Black joggers */}
      <rect x="83" y="180" width="13" height="45" rx="3" fill="#1a1a1a" stroke="#000" strokeWidth="2" />
      <rect x="104" y="180" width="13" height="45" rx="3" fill="#1a1a1a" stroke="#000" strokeWidth="2" />

      {/* Sneakers with orange accent */}
      <rect x="81" y="220" width="17" height="10" rx="3" fill="#ffffff" stroke="#000" strokeWidth="2" />
      <rect x="83" y="222" width="13" height="4" fill="#ff6b35" />
      <rect x="102" y="220" width="17" height="10" rx="3" fill="#ffffff" stroke="#000" strokeWidth="2" />
      <rect x="104" y="222" width="13" height="4" fill="#ff6b35" />

      {/* TORSO - Orange jersey */}
      <rect x="76" y="120" width="48" height="63" rx="4" fill="#ff6b35" stroke="#000" strokeWidth="2" />

      {/* Flame design */}
      <circle cx="100" cy="150" r="10" fill="#ffd700" stroke="#000" strokeWidth="1.5" />
      <path d="M 100 145 L 103 150 L 100 155 L 97 150 Z" fill="#ff6b35" />

      {/* ARMS */}
      <rect x="61" y="125" width="12" height="43" rx="6" fill="#6B4423" stroke="#000" strokeWidth="2" />
      <rect x="127" y="125" width="12" height="43" rx="6" fill="#6B4423" stroke="#000" strokeWidth="2" />

      {/* Hands */}
      <circle cx="67" cy="171" r="7" fill="#6B4423" stroke="#000" strokeWidth="2" />
      <circle cx="133" cy="171" r="7" fill="#6B4423" stroke="#000" strokeWidth="2" />

      {/* NECK */}
      <rect x="93" y="108" width="14" height="14" fill="#6B4423" stroke="#000" strokeWidth="2" />

      {/* HEAD - Igbo features: leaner face */}
      <ellipse cx="100" cy="90" rx="26" ry="30" fill="#6B4423" stroke="#000" strokeWidth="2" />

      {/* HAIR - 360 waves */}
      <path d="M 74 75 Q 100 62 126 75 L 126 80 Q 100 68 74 80 Z" fill="#1a1a1a" stroke="#000" strokeWidth="1.5" />

      {/* CAP - Backwards */}
      <rect x="74" y="72" width="52" height="8" rx="2" fill="#ff6b35" stroke="#000" strokeWidth="1.5" />
      <rect x="76" y="68" width="48" height="6" rx="2" fill="#ff6b35" stroke="#000" strokeWidth="1.5" />

      {/* FACE FEATURES */}
      {/* Eyes */}
      <ellipse cx="89" cy="88" rx="3.5" ry="4.5" fill="#ffffff" stroke="#000" strokeWidth="1.5" />
      <ellipse cx="111" cy="88" rx="3.5" ry="4.5" fill="#ffffff" stroke="#000" strokeWidth="1.5" />
      <circle cx="89" cy="88" r="2" fill="#1a0f0a" />
      <circle cx="111" cy="88" r="2" fill="#1a0f0a" />

      {/* Eyebrows - arched, expressive */}
      <path d="M 85 82 Q 89 79 93 82" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M 107 82 Q 111 79 115 82" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Nose - narrower */}
      <path d="M 100 90 L 98 97 L 102 97 Z" fill="#6B4423" stroke="#000" strokeWidth="1" />

      {/* Mouth */}
      <path d="M 94 102 Q 100 105 106 102" stroke="#5a3520" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* High cheekbones */}
      <circle cx="78" cy="92" r="4" fill="#6B4423" opacity="0.6" />
      <circle cx="122" cy="92" r="4" fill="#6B4423" opacity="0.6" />

      {/* Wristband */}
      <rect x="127" y="155" width="12" height="4" fill="#ff6b35" stroke="#000" strokeWidth="1" />
    </g>
  );
}
