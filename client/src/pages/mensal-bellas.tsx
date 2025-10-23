// src/pages/mensal-bellas.tsx
import { HeroVip } from "@/components/sections/mensal-bellas/HeroVip";
import { EconomyCompare } from "@/components/sections/mensal-bellas/EconomyCompare";
import { PlansGrid } from "@/components/sections/mensal-bellas/PlansGrid";
import { Workshops } from "@/components/sections/mensal-bellas/Workshops";
import { EscutaSection } from "@/components/sections/mensal-bellas/EscutaSection";
import { TestimonialsVip } from "@/components/sections/mensal-bellas/TestimonialsVip";
import { FAQ } from "@/components/sections/mensal-bellas/FAQ";
import { CTASectionVip } from "@/components/sections/mensal-bellas/CTASectionVip";
import { FooterVip } from "@/components/sections/mensal-bellas/FooterVip";

export default function MensalBellasPage() {
  return (
    <>
      <HeroVip />
      <EconomyCompare />
      <PlansGrid />
      <Workshops />
      <EscutaSection />
      <TestimonialsVip />
      <FAQ />
      <CTASectionVip />
      <FooterVip />
    </>
  );
}
