import { HeroSpaDay } from "@/components/sections/HeroSpaDay";
import { SpaDaySection } from "@/components/sections/SpaDaySection";
import { FAQSpaDay } from "@/components/sections/FAQSpaDay";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { packagesIndividual } from "@/data/spa-packages";

export default function SpaIndividual() {
  return (
    <>
      <HeroSpaDay
        title="Seu momento de cuidado — só para você"
        subtitle="Do relaxamento essencial ao dia de celebridade completo. Ideal para se auto presentear, comemorar seu aniversário ou ganhar de presente de quem te ama."
        whatsappText="Olá! Vim pelo site e quero conhecer os pacotes de Spa Day Individual!"
        showVSL={true}
      />
      <SpaDaySection packages={packagesIndividual} />
      <TestimonialsSection />
      <FAQSpaDay />
    </>
  );
}