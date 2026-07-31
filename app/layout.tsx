import type { Metadata } from "next";
import "./globals.css";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { BootScreen } from "@/components/BootScreen";

export const metadata: Metadata = {
  title: "Onliversity — The Esports Academy FC Mobile Needed",
  description:
    "Onliversity is a real esports academy for FC Mobile. No fake gurus, no rank scams. Pick a pro coach, walk their real journey from grassroots to pro, log your matches, level up stage-by-stage. Get updates — email only.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ 
      // @ts-ignore
      "--font-display": "'Space Grotesk', system-ui, sans-serif",
      "--font-body": "'Inter', system-ui, sans-serif",
      "--font-mono": "'JetBrains Mono', monospace",
    } as any}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Fallback system fonts if Google blocked — we load via link as progressive enhance */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <AnimatedBackground />
        <BootScreen>{children}</BootScreen>
      </body>
    </html>
  );
}
