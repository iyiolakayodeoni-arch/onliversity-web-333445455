import { Nav } from "@/components/Nav";
import { HeroNew } from "@/components/HeroNew";
import { StorySection } from "@/components/StorySection";
import { ProductSection } from "@/components/ProductSection";
import { AcademyBento } from "@/components/AcademyBento";
import { RoadmapSection } from "@/components/RoadmapSection";
import { TrustSection } from "@/components/TrustSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <HeroNew />
      <StorySection />
      <ProductSection />
      <AcademyBento />
      <RoadmapSection />
      <TrustSection />
      <Footer />
    </main>
  );
}
