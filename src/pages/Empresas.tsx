import { Header } from "@/components/layout/Header";
import { Hero } from "@/features/corporate/components/Hero";
import { Benefits } from "@/features/corporate/components/Benefits";
import { HowItWorks } from "@/features/corporate/components/HowItWorks";
import { Plans } from "@/features/corporate/components/Plans";
import { Differentials } from "@/features/corporate/components/Differentials";
import { Results } from "@/features/corporate/components/Results";
import { Testimonials } from "@/features/corporate/components/Testimonials";
import { FAQ } from "@/features/corporate/components/FAQ";
import { CTA } from "@/features/corporate/components/CTA";
import { Footer } from "@/features/corporate/components/Footer";

const navItems = [
  { label: "Início", target: "home" },
  { label: "Benefícios", target: "beneficios" },
  { label: "Como Funciona", target: "como-funciona" },
  { label: "Planos", target: "pacotes" },
  { label: "Resultados", target: "resultados" },
  { label: "FAQ", target: "faq" },
];

/**
 * Corporate Landing Page.
 * Composes the components from the corporate feature.
 */
export default function Empresas() {
  return (
    <>
      <Header navItems={navItems} />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <Plans />
        <Differentials />
        <Results />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
