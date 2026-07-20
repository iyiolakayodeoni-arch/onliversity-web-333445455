import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Space Grotesk: bold geometric sans for headers (Briefing Part 2.3)
const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});

// Inter: plain, readable body copy — structure carries the "university"
// feeling, not decorative type.
const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

// JetBrains Mono: used only for stage numbers and small structural labels —
// the gamified-but-serious feeling comes from restraint, not decoration.
const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Onliversity — The University for Creatives",
  description:
    "A real path. A real coach. A real certification. Starting with Esports.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
