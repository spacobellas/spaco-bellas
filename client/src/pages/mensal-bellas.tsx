// src/pages/mensal-bellas.tsx
import { Footer } from "@/components/layout/Footer";
import { TestimonialsVip } from "@/components/sections/mensal-bellas/TestimonialsVip";
import { CTASectionVip } from "@/components/sections/mensal-bellas/CTASectionVip";
import { HeroVip } from "@/components/sections/mensal-bellas/HeroVip";
import { EconomyCompare } from "@/components/sections/mensal-bellas/EconomyCompare";
import { PlansGrid } from "@/components/sections/mensal-bellas/PlansGrid";
import { Workshops } from "@/components/sections/mensal-bellas/Workshops";
import { EscutaSection } from "@/components/sections/mensal-bellas/EscutaSection";
import { FAQ } from "@/components/sections/mensal-bellas/FAQ";

export default function MensalBellasPage() {
  return (
    <main className="bg-[#F6EDF9] text-[#2F2F2F]">
      <HeroVip />
      <EconomyCompare />
      <PlansGrid />
      <Workshops />
      <EscutaSection />
      <TestimonialsVip />
      <FAQ />
      <CTASectionVip />
      <Footer />
    </main>
  );
}
