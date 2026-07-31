import type { Config } from "tailwindcss";

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
        electric: "#21e6c1",
        violet: "#a06bff",
        magenta: "#ff3df0",
        gold: "#ffd23f",
        danger: "#ff3d51",
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
      boxShadow: {
        "glow-sm": "0 0 16px -4px rgba(57, 255, 106, 0.2)",
        "glow-md": "0 0 24px -6px rgba(57, 255, 106, 0.25)",
        "glow-lg": "0 0 40px -10px rgba(57, 255, 106, 0.15)",
        "glow-amber": "0 0 24px -6px rgba(242, 192, 120, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
