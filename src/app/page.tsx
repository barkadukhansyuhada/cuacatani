import { playfair, sourceSans } from "./fonts";
import { dashboardStats } from "@/data";
import { HeroSection } from "@/components/landing/HeroSection";
import { DataStrip } from "@/components/landing/DataStrip";
import { WhyMattersSection } from "@/components/landing/WhyMattersSection";
import { ModeComparisonSection } from "@/components/landing/ModeComparisonSection";
import { DotMapSection } from "@/components/landing/DotMapSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { LandingFooter } from "@/components/landing/LandingFooter";

export const metadata = {
  title: "Petani BMKG \u2014 Prakiraan Musim Kemarau 2026 Indonesia",
  description:
    "65% wilayah Indonesia berisiko kekeringan tinggi di musim kemarau 2026. Cek prakiraan untuk wilayah Anda.",
};

export default function LandingPage() {
  const stats = dashboardStats;

  return (
    <div className={`${playfair.variable} ${sourceSans.variable}`}>
      <HeroSection stats={stats} />
      <DataStrip stats={stats} />
      <WhyMattersSection />
      <ModeComparisonSection />
      <DotMapSection />
      <FeaturesSection />
      <LandingFooter />
    </div>
  );
}
