import type { Config } from "tailwindcss";

// Brand tokens from the Onliversity brand system (Briefing Part 2.2 / 2.3),
// extended with a dimmer structural green and an elevated surface so the
// palette can carry real hierarchy instead of one flat green-on-black.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#070d09",
        surface: "#0f1a13",
        "surface-elevated": "#14241a",
        border: "#1f3826",
        "border-bright": "#2c4d38",
        foreground: "#eef2ec",
        muted: "#8fb89b",
        primary: "#39ff6a",
        "primary-dim": "#1f7a3d",
        accent: "#f2c078",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        DEFAULT: "6px",
      },
      backgroundImage: {
        "grid-texture":
          "linear-gradient(to right, rgba(57,255,106,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(57,255,106,0.045) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
    },
  },
  plugins: [],
};

export default config;
