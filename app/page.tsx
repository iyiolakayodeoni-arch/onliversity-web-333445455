import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyDifferent } from "@/components/WhyDifferent";
import { CoursesSection } from "@/components/CoursesSection";
import { Vision } from "@/components/Vision";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <HowItWorks />
      <WhyDifferent />
      <CoursesSection />
      <Vision />
      <Pricing />
      <Footer />
    </main>
  );
}
