import { Header } from "@/components/layout/Header";
import { Hero } from "@/features/spa-day/components/Hero";
import { SpaDayPackages } from "@/features/home/components/SpaDayPackages";
import { FAQ } from "@/features/spa-day/components/FAQ";
import { Testimonials } from "@/components/shared/Testimonials";
import { packagesCelebridades } from "@/data/spa-packages";
import { Footer } from "@/components/layout/Footer";

const navItems = [
  { label: "Início", target: "home" },
  { label: "Pacotes", target: "spa-day" },
  { label: "Depoimentos", target: "testimonials" },
  { label: "FAQ", target: "faq" },
];

/**
 * Spa Celebridades Landing Page.
 * Composes Spa Day specific components and shared sections.
 */
export default function SpaCelebridades() {
  return (
    <>
      <Header navItems={navItems} />
      <main>
        <Hero
          title="Seu dia de celebridade começa aqui"
          subtitle="Do relaxamento essencial ao luxo completo — escolha a experiência perfeita para o seu momento"
          showVSL={true}
        />
        <div id="spa-day">
          <SpaDayPackages packages={packagesCelebridades} />
        </div>
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
