import { Nav } from "@/components/Nav";
import { MirrorHero } from "@/components/MirrorHero";
import { Marquee } from "@/components/Marquee";
import { MirrorPhilosophy } from "@/components/MirrorPhilosophy";
import { MirrorMethod } from "@/components/MirrorMethod";
import { MirrorProgramme } from "@/components/MirrorProgramme";
import { MirrorInside } from "@/components/MirrorInside";
import { MirrorTill } from "@/components/MirrorTill";
import { MirrorWhyDifferent } from "@/components/MirrorWhyDifferent";
import { MirrorPlatform } from "@/components/MirrorPlatform";
import { MirrorFaq } from "@/components/MirrorFaq";
import { MirrorCta } from "@/components/MirrorCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Nav />
      <MirrorHero />

      <div className="relative border-b border-border/60 py-2">
        <Marquee
          items={[
            "Mirror · Pro Season",
            "The first programme · FC Mobile Pro",
            "1,000 seats only",
            "One coach · locked permanently",
            "Your journey is the evidence",
            "The Standard is the benchmark",
            "The Mirror does not think for you",
          ]}
        />
      </div>

      <MirrorPhilosophy />
      <MirrorMethod />

      <div className="relative border-y border-border/60 py-2">
        <Marquee
          reverse
          speed="fast"
          items={[
            "SEE YOURSELF → CONTROL YOURSELF → READ THE GAME → BUILD DISCIPLINE → PERFORM UNDER PRESSURE → PROVE IT",
            "Evidence before advice",
            "Progress is earned from receipts",
            "Baseline week → journey → mirror session → thread",
          ]}
        />
      </div>

      <MirrorProgramme />
      <MirrorInside />
      <MirrorTill />
      <MirrorWhyDifferent />
      <MirrorPlatform />
      <MirrorFaq />
      <MirrorCta />
      <Footer />
    </main>
  );
}
