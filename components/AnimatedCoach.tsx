"use client";

import { useEffect, useState } from "react";

interface AnimatedCoachProps {
  coachId: string;
  animation: "idle" | "hype" | "disappointed" | "thinking" | "talking";
  size?: number;
}

export function AnimatedCoach({ coachId, animation, size = 200 }: AnimatedCoachProps) {
  const isChinedu = coachId === "king-of-the-pitch";

  // Character colors
  const skinColor = isChinedu ? "#8B6F47" : "#6B4423";
  const primaryColor = isChinedu ? "#1a1a1a" : "#ff6b35";
  const accentColor = isChinedu ? "#d4af37" : "#ffd700";

  return (
    <svg
      viewBox="0 0 200 300"
      width={size}
      height={size * 1.5}
      className="coach-character"
      style={{ overflow: "visible" }}
    >
      <defs>
        {/* Shadow */}
        <filter id="shadow">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Shadow on ground */}
      <ellipse
        cx="100"
        cy="290"
        rx="40"
        ry="8"
        fill="rgba(0,0,0,0.2)"
        className="shadow-pulse"
      />

      {/* Character Group */}
      <g className={`coach-body ${animation}`}>
        {/* Legs */}
        <g className="legs">
          {/* Left Leg */}
          <rect
            x="85"
            y="220"
            width="12"
            height="60"
            rx="6"
            fill={isChinedu ? "#2c2c2c" : "#1a1a1a"}
          />
          {/* Right Leg */}
          <rect
            x="103"
            y="220"
            width="12"
            height="60"
            rx="6"
            fill={isChinedu ? "#2c2c2c" : "#1a1a1a"}
          />
          {/* Shoes */}
          <ellipse cx="91" cy="280" rx="8" ry="4" fill="#ffffff" />
          <ellipse cx="109" cy="280" rx="8" ry="4" fill="#ffffff" />
        </g>

        {/* Body/Torso */}
        <g className="torso">
          {/* Jersey */}
          <path
            d="M 75 140 L 75 220 L 125 220 L 125 140 Z"
            fill={primaryColor}
            stroke="#000"
            strokeWidth="2"
          />
          {/* Jersey Details */}
          {isChinedu ? (
            <>
              {/* Gold trim */}
              <rect x="75" y="140" width="50" height="4" fill={accentColor} />
              <rect x="75" y="216" width="50" height="4" fill={accentColor} />
              {/* Number */}
              <text x="100" y="185" textAnchor="middle" fill={accentColor} fontSize="24" fontWeight="bold" fontFamily="monospace">
                10
              </text>
            </>
          ) : (
            <>
              {/* Orange accents */}
              <path d="M 75 140 L 100 160 L 125 140" fill="none" stroke={accentColor} strokeWidth="3" />
              {/* Flame design */}
              <circle cx="100" cy="180" r="8" fill={accentColor} />
            </>
          )}
        </g>

        {/* Arms */}
        <g className="arms">
          {/* Left Arm */}
          <g className="left-arm">
            <rect
              x="60"
              y="145"
              width="15"
              height="50"
              rx="7"
              fill={skinColor}
              stroke="#000"
              strokeWidth="1.5"
            />
            {/* Hand */}
            <circle cx="67.5" cy="200" r="8" fill={skinColor} stroke="#000" strokeWidth="1.5" />
          </g>

          {/* Right Arm */}
          <g className="right-arm">
            <rect
              x="125"
              y="145"
              width="15"
              height="50"
              rx="7"
              fill={skinColor}
              stroke="#000"
              strokeWidth="1.5"
            />
            {/* Hand */}
            <circle cx="132.5" cy="200" r="8" fill={skinColor} stroke="#000" strokeWidth="1.5" />
          </g>
        </g>

        {/* Head */}
        <g className="head">
          {/* Neck */}
          <rect x="92" y="120" width="16" height="25" fill={skinColor} stroke="#000" strokeWidth="1.5" />

          {/* Face */}
          <ellipse
            cx="100"
            cy="100"
            rx="35"
            ry="40"
            fill={skinColor}
            stroke="#000"
            strokeWidth="2"
          />

          {/* Hair */}
          {isChinedu ? (
            // Short, neat haircut
            <path
              d="M 65 85 Q 100 60 135 85 L 135 95 Q 100 70 65 95 Z"
              fill="#1a1a1a"
              stroke="#000"
              strokeWidth="1.5"
            />
          ) : (
            // Textured/styled hair
            <path
              d="M 65 90 Q 70 60 100 55 Q 130 60 135 90 L 135 100 Q 100 75 65 100 Z"
              fill="#2c1810"
              stroke="#000"
              strokeWidth="1.5"
            />
          )}

          {/* Eyes */}
          <g className="eyes">
            {/* Left Eye */}
            <ellipse cx="85" cy="95" rx="6" ry="8" fill="#ffffff" stroke="#000" strokeWidth="1.5" />
            <circle cx="85" cy="95" r="3" fill="#000" className="pupil" />

            {/* Right Eye */}
            <ellipse cx="115" cy="95" rx="6" ry="8" fill="#ffffff" stroke="#000" strokeWidth="1.5" />
            <circle cx="115" cy="95" r="3" fill="#000" className="pupil" />
          </g>

          {/* Eyebrows */}
          <g className="eyebrows">
            <path d="M 78 85 Q 85 82 92 85" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M 108 85 Q 115 82 122 85" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </g>

          {/* Nose */}
          <path
            d="M 100 95 L 97 105 L 103 105 Z"
            fill={skinColor}
            stroke="#000"
            strokeWidth="1"
            opacity="0.6"
          />

          {/* Mouth */}
          <g className="mouth">
            {animation === "talking" ? (
              <ellipse cx="100" cy="115" rx="8" ry="6" fill="#000" className="talking-mouth" />
            ) : animation === "hype" ? (
              <path d="M 88 110 Q 100 125 112 110" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            ) : animation === "disappointed" ? (
              <path d="M 88 120 Q 100 110 112 120" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            ) : (
              <line x1="92" y1="115" x2="108" y2="115" stroke="#000" strokeWidth="2" strokeLinecap="round" />
            )}
          </g>

          {/* Accessories */}
          {isChinedu && (
            <>
              {/* Gold chain */}
              <path
                d="M 85 125 Q 100 135 115 125"
                stroke={accentColor}
                strokeWidth="2"
                fill="none"
              />
              <circle cx="100" cy="132" r="3" fill={accentColor} />
            </>
          )}

          {!isChinedu && (
            <>
              {/* Cap */}
              <ellipse cx="100" cy="75" rx="38" ry="8" fill={primaryColor} stroke="#000" strokeWidth="2" />
              <path
                d="M 62 75 Q 100 65 138 75"
                fill={primaryColor}
                stroke="#000"
                strokeWidth="2"
              />
              {/* Cap logo */}
              <circle cx="100" cy="72" r="5" fill={accentColor} />
            </>
          )}
        </g>
      </g>
    </svg>
  );
}
