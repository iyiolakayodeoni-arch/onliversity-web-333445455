"use client";

import { useRef, useState, type MouseEvent, type TouchEvent } from "react";
import { Coach } from "./CoachCharacters";

interface CoachCardProps {
  coach: Coach;
  imageSrc: string;
}

export function CoachCard({ coach, imageSrc }: CoachCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glowIntensity, setGlowIntensity] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  // Mouse move handler for 3D tilt
  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!cardRef.current || isExpanded) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTilt({ x: rotateX, y: rotateY });
    setGlowIntensity(0.6);
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
    setGlowIntensity(0);
  }

  // Touch handler for mobile
  function handleTouchMove(e: TouchEvent<HTMLDivElement>) {
    if (!cardRef.current || isExpanded) return;
    const touch = e.touches[0];
    const rect = cardRef.current.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTilt({ x: rotateX, y: rotateY });
    setGlowIntensity(0.6);
  }

  function handleTouchEnd() {
    setTilt({ x: 0, y: 0 });
    setGlowIntensity(0);
  }

  return (
    <div
      className="coach-card-wrapper"
      style={{ perspective: "1000px" }}
    >
      <div
        ref={cardRef}
        className="coach-card-inner"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.15s ease-out",
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Glow border */}
        <div
          className="coach-card-glow"
          style={{
            boxShadow: `0 0 ${20 + glowIntensity * 20}px rgba(57, 255, 106, ${0.2 + glowIntensity * 0.3}), inset 0 0 ${10 + glowIntensity * 10}px rgba(57, 255, 106, ${0.1 + glowIntensity * 0.15})`,
            transition: "box-shadow 0.2s ease",
          }}
        />

        {/* Light sweep effect */}
        <div
          className="coach-card-shine"
          style={{
            background: `linear-gradient(${105 + tilt.y * 2}deg, transparent 40%, rgba(57, 255, 106, ${0.05 + glowIntensity * 0.1}) 48%, rgba(57, 255, 106, ${0.08 + glowIntensity * 0.12}) 50%, rgba(57, 255, 106, ${0.05 + glowIntensity * 0.1}) 52%, transparent 60%)`,
            transition: "background 0.15s ease",
          }}
        />

        {/* Character image */}
        <div className="coach-card-image">
          <img
            src={imageSrc}
            alt={coach.name}
            draggable={false}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />
        </div>

        {/* Bottom info */}
        <div className="coach-card-info">
          <p className="coach-card-nickname">"{coach.nickname}"</p>
          <h3 className="coach-card-name">{coach.name}</h3>
          <p className="coach-card-origin">{coach.origin}</p>
          <button
            className="coach-card-preview-btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Close preview" : "Preview this path →"}
          </button>
        </div>
      </div>

      {/* Expanded preview panel */}
      {isExpanded && (
        <div className="coach-card-preview-panel">
          <div className="coach-card-preview-content">
            <p className="coach-card-preview-label">{coach.name}'s Journey</p>

            <div className="coach-card-preview-stages">
              {coach.journey.map((stage) => (
                <div key={stage.stage} className="coach-card-preview-stage">
                  <span className="coach-card-preview-stage-num">Stage {stage.stage}</span>
                  <span className="coach-card-preview-stage-title">{stage.title}</span>
                  <span className="coach-card-preview-stage-year">{stage.year}</span>
                </div>
              ))}
            </div>

            <div className="coach-card-preview-divider" />

            <p className="coach-card-preview-voice">
              {coach.id === "king-of-the-pitch"
                ? "Control the tempo. The game rewards patience, not panic."
                : "That skill move was filthy! But pick your moment."}
            </p>

            <p className="coach-card-preview-note">
              Coach selection happens inside the app after you complete 5 placement matches.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
