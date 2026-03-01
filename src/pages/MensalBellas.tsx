import { Header } from "@/components/layout/Header";
import { Hero } from "@/features/membership/components/Hero";
import { EconomyComparison } from "@/features/membership/components/EconomyComparison";
import { PlansGrid } from "@/features/membership/components/PlansGrid";
import { Workshops } from "@/features/membership/components/Workshops";
import { Introduction } from "@/features/membership/components/Introduction";
import { Testimonials } from "@/features/membership/components/Testimonials";
import { FAQ } from "@/features/membership/components/FAQ";
import { CTA } from "@/features/membership/components/CTA";
import { Footer } from "@/features/membership/components/Footer";

const navItems = [
  { label: "Início", target: "home" },
  { label: "Planos", target: "planos" },
  { label: "Workshops", target: "workshops" },
  { label: "Escuta", target: "escuta" },
  { label: "FAQ", target: "faq-title" },
];

/**
 * Membership (Mensal Bellas VIP) Landing Page.
 * Composes the components from the membership feature.
 */
export default function MensalBellas() {
  return (
    <>
      <Header navItems={navItems} />
      <main>
        <Hero />
        <EconomyComparison />
        <PlansGrid />
        <Workshops />
        <Introduction />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
