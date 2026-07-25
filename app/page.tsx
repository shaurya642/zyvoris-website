import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { TechnologySection } from "@/components/technology-section";
import { TrustBar } from "@/components/trust-bar";
import { StatisticsSection } from "@/components/statistics-section";
import { ServicesSection } from "@/components/services-section";
import { ProcessSection } from "@/components/process-section";
import { IndustriesSection } from "@/components/industries-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TechnologySection />
      <TrustBar />
      <StatisticsSection />
      <ServicesSection />
      <ProcessSection />
      <IndustriesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
