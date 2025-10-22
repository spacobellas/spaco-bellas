import { HeroSection } from "../components/sections/HeroSection";
import { SpaDaySection } from "../components/sections/SpaDaySection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { CTASection } from "../components/sections/CTASection";
import { Footer } from "@/components/layout/Footer";

export default function SpaCelebridades() {
  return (
    <div className="min-h-screen bg-white">
      <SpaDaySection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
