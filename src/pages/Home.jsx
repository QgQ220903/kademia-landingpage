import CtaSection from "../components/homepage/CtaSection";
import DigitalCapabilities from "../components/homepage/DigitalCapabilities";
import FeaturesSection from "../components/homepage/FeatureSection";
import HeroSection from "../components/homepage/HeroSection";


export default function Home() {
  return (
    <div className="bg-darkblue text-white">
      <HeroSection />
      <FeaturesSection />
      <DigitalCapabilities />
      <CtaSection />
    </div>
  );
}