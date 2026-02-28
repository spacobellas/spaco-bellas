import { HeroSpaDay } from "@/components/sections/HeroSpaDay";
import { SpaDaySection } from "@/components/sections/SpaDaySection";
import { FAQSpaDay } from "@/components/sections/FAQSpaDay";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { packagesCasal } from "@/data/spa-packages";

export default function SpaCasal() {
  return (
    <>
      <HeroSpaDay
        title="Uma experiência inesquecível a dois"
        subtitle="Para casais, mãe e filha, amigas... porque cuidar de si é ainda mais especial quando compartilhado com quem você ama."
        whatsappText="Olá! Vim pelo site e quero conhecer os pacotes de Spa Day Casal!"
        showVSL={true}
      />
      <SpaDaySection packages={packagesCasal} />
      <TestimonialsSection />
      <FAQSpaDay />
    </>
  );
}