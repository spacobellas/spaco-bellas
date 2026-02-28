import { HeroSpaDay } from "@/components/sections/HeroSpaDay";
import { SpaDaySection } from "@/components/sections/SpaDaySection";
import { FAQSpaDay } from "@/components/sections/FAQSpaDay";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { packagesNoiva } from "@/data/spa-packages";

export default function SpaNoiva() {
  return (
    <>
      <HeroSpaDay
        title="O seu grande dia merece ser perfeito"
        subtitle="Uma experiência exclusiva para a noiva mais linda do mundo — e suas madrinhas. Porque esse dia acontece uma vez na vida e precisa ser inesquecível."
        whatsappText="Olá! Vim pelo site e quero conhecer o Spa Dia da Noiva!"
        showVSL={true}
      />
      <SpaDaySection packages={packagesNoiva} />
      <TestimonialsSection />
      <FAQSpaDay />
    </>
  );
}