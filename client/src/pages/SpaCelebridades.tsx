import { HeroSpaDay } from "@/components/sections/HeroSpaDay";
import { SpaDaySection } from "@/components/sections/SpaDaySection";
import { FAQSpaDay } from "@/components/sections/FAQSpaDay";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { packagesCelebridades } from "@/data/spa-packages";

export default function SpaCelebridades() {
  return (
    <>
      <HeroSpaDay
        title="Seu dia de celebridade começa aqui"
        subtitle="Do relaxamento essencial ao luxo completo — escolha a experiência perfeita para o seu momento"
        whatsappText="Olá! Vim pelo site e quero conhecer os pacotes do Spa Day Celebridades!"
        showVSL={true}
      />
      <SpaDaySection packages={packagesCelebridades} />
      <TestimonialsSection />
      <FAQSpaDay />
    </>
  );
}