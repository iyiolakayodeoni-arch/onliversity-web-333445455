import { Nav } from "@/components/Nav";
import { HeroNew } from "@/components/HeroNew";
import { Marquee } from "@/components/Marquee";
import { StorySection } from "@/components/StorySection";
import { ProductSection } from "@/components/ProductSection";
import { AcademyBento } from "@/components/AcademyBento";
import { RoadmapSection } from "@/components/RoadmapSection";
import { TrustSection } from "@/components/TrustSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Nav />
      <HeroNew />

      <div className="relative border-b border-border/60 bg-surface/40 py-2">
        <Marquee
          items={[
            "Pro Season Academy • Season One LIVE",
            "6 stages from grassroots to champion",
            "Real coaches • Real journeys",
            "Match Vault + Loss Journal",
            "Earn XP • Unlock badges • Get certified",
            "No fake data • Honor-system logging",
            "1000 seats • Founder in The Halls",
          ]}
        />
      </div>

      <StorySection />
      <ProductSection />

      <div className="relative border-y border-border/60 bg-surface/40 py-2">
        <Marquee
          reverse
          speed="fast"
          items={[
            "Film Room • 4-7 min sessions",
            "Stage 1 Grassroots → Stage 6 Champion Mind",
            "Chinedu 'The King' • Obinna 'Tekkerz'",
            "Composure • Decision loops • Mechanic mastery",
            "Pass the scan • Bank the XP",
            "Pro Season Certified • 80/20 partner split",
          ]}
        />
      </div>

      <AcademyBento />
      <RoadmapSection />
      <TrustSection />
      <Footer />
    </main>
  );
}
