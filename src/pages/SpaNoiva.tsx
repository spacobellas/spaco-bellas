import { Header } from "@/components/layout/Header";
import { Hero } from "@/features/spa-day/components/Hero";
import { SpaDayPackages } from "@/features/home/components/SpaDayPackages";
import { FAQ } from "@/features/spa-day/components/FAQ";
import { Testimonials } from "@/components/shared/Testimonials";
import { packagesNoiva } from "@/data/spa-packages";
import { Footer } from "@/components/layout/Footer";
import { WHATSAPP_MESSAGES } from "@/config/contacts";

const navItems = [
  { label: "Início", target: "home" },
  { label: "Pacotes", target: "spa-day" },
  { label: "Depoimentos", target: "testimonials" },
  { label: "FAQ", target: "faq" },
];

export default function SpaNoiva() {
  return (
    <>
      <Header navItems={navItems} />
      <main>
        <Hero
          title="O seu grande dia merece ser perfeito"
          subtitle="Uma experiência exclusiva para a noiva mais linda do mundo — e suas madrinhas. Porque esse dia acontece uma vez na vida e precisa ser inesquecível."
          whatsappMessage={WHATSAPP_MESSAGES.SPA_DAY_NOIVA}
          showVSL={true}
        />
        <div id="spa-day">
          <SpaDayPackages packages={packagesNoiva} />
        </div>
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
