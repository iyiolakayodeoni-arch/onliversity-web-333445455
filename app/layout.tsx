import type { Metadata } from "next";
import "./globals.css";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { BootScreen } from "@/components/BootScreen";

export const metadata: Metadata = {
  title: "Onliversity — Mirror · ProSeasonAcademy · See Yourself. Do the Work.",
  description:
    "Mirror is the method. ProSeasonAcademy is the first programme — a professional development programme for FC Mobile players. One coach. One road. One standard. No excuses. The Mirror does not think for you.",
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
