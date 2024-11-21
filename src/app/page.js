import HeroSection from "@/components/HeroSection";
import MetricsSection from "@/components/MetricsSection";
import LocationSection from "@/components/LocationSection";
import Projects from "@/components/Projects";
import UnitsSection from "@/components/UnitsSection";
import PhotosVideosSection from "@/components/PhotosVideosSections";
import FinishesSection from "@/components/FinishesSection";
import BannerCTA from "@/components/BannerCTA";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MetricsSection />
      <LocationSection />
      <Projects />
      <UnitsSection />
      <PhotosVideosSection />
      <FinishesSection />
      <BannerCTA />
    </main>
  );
}
