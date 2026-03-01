import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/features/home/components/Hero";
import { Introduction } from "@/features/home/components/Introduction";
import { SpaDayPackages } from "@/features/home/components/SpaDayPackages";
import { Differentials } from "@/features/home/components/Differentials";
import { Testimonials } from "@/components/shared/Testimonials";
import { CTA } from "@/components/shared/CTA";

import { packagesCelebridades } from "@/data/spa-packages";

/**
 * Institutional Home Page.
 * Composes shared components and the main home feature.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero - Viva o seu dia de estrela */}
        <Hero />
        
        {/* 2. Apresentação Emocional - Uma experiência criada para você */}
        <Introduction />
        
        {/* 3. Pacotes - Dia de Estrela, Rainha e Diva */}
        <SpaDayPackages packages={packagesCelebridades} />
        
        {/* 4. Differentials - Por que o Spa das Celebridades é único */}
        <Differentials />
        
        {/* 5. Depoimentos - Histórias de Transformação */}
        <Testimonials />
        
        {/* 6. CTA Final - Escassez e Grupo VIP */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
