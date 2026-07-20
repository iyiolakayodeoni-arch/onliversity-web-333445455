export function PitchPattern() {
  return (
    <svg
      viewBox="0 0 800 400"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full opacity-[0.14]"
      aria-hidden="true"
    >
      {/* Outer pitch boundary */}
      <rect x="20" y="20" width="760" height="360" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" />
      {/* Halfway line */}
      <line x1="400" y1="20" x2="400" y2="380" stroke="var(--color-primary)" strokeWidth="1.5" />
      {/* Center circle */}
      <circle cx="400" cy="200" r="70" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" />
      <circle cx="400" cy="200" r="3" fill="var(--color-primary)" />
      {/* Left penalty box */}
      <rect x="20" y="110" width="120" height="180" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" />
      <rect x="20" y="150" width="50" height="100" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" />
      {/* Right penalty box */}
      <rect x="660" y="110" width="120" height="180" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" />
      <rect x="730" y="150" width="50" height="100" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" />
    </svg>
  );
}
