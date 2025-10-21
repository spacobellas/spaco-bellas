import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroductionSection } from "@/components/sections/IntroductionSection";
import { SpaDaySection } from "@/components/sections/SpaDaySection";
import { MensalBellasSection } from "@/components/sections/MensalBellasSection";
import { EmpresasSection } from "@/components/sections/EmpresasSection";
import { FullMenuSection } from "@/components/sections/FullMenuSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <IntroductionSection />
        <SpaDaySection />
        <MensalBellasSection />
        <EmpresasSection />
        <FullMenuSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
