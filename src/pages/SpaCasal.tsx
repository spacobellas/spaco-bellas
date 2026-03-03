import { Header } from "@/components/layout/Header";
import { Hero } from "@/features/spa-day/components/Hero";
import { SpaDayPackages } from "@/features/home/components/SpaDayPackages";
import { FAQ } from "@/features/spa-day/components/FAQ";
import { Testimonials } from "@/components/shared/Testimonials";
import { packagesCasal } from "@/data/spa-packages";
import { Footer } from "@/components/layout/Footer";
import { WHATSAPP_MESSAGES } from "@/config/contacts";

const navItems = [
  { label: "Início", target: "home" },
  { label: "Pacotes", target: "spa-day" },
  { label: "Depoimentos", target: "testimonials" },
  { label: "FAQ", target: "faq" },
];

export default function SpaCasal() {
  return (
    <>
      <Header navItems={navItems} />
      <main>
        <Hero
          title="Uma experiência inesquecível a dois"
          subtitle="Para casais, mãe e filha, amigas... porque cuidar de si é ainda mais especial quando compartilhado com quem você ama."
          whatsappMessage={WHATSAPP_MESSAGES.SPA_DAY_CASAL}
          showVSL={true}
        />
        <div id="spa-day">
          <SpaDayPackages
            packages={packagesCasal}
            description="Cada experiência foi pensada para transformar seu momento em algo inesquecível. Ideal também para Mãe e filha, amigas, presentear alguém que ama."
          />
        </div>
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
