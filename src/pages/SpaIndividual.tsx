import { Header } from "@/components/layout/Header";
import { Hero } from "@/features/spa-day/components/Hero";
import { SpaDayPackages } from "@/features/home/components/SpaDayPackages";
import { FAQ } from "@/features/spa-day/components/FAQ";
import { Testimonials } from "@/components/shared/Testimonials";
import { packagesIndividual } from "@/data/spa-packages";
import { Footer } from "@/components/layout/Footer";
import { WHATSAPP_MESSAGES } from "@/config/contacts";

const navItems = [
  { label: "Início", target: "home" },
  { label: "Pacotes", target: "spa-day" },
  { label: "Depoimentos", target: "testimonials" },
  { label: "FAQ", target: "faq" },
];

export default function SpaIndividual() {
  return (
    <>
      <Header navItems={navItems} />
      <main>
        <Hero
          title="Seu momento de cuidado — só para você"
          subtitle="Do relaxamento essencial ao dia de celebridade completo. Ideal para se auto presentear, comemorar seu aniversário ou ganhar de presente de quem te ama."
          whatsappMessage={WHATSAPP_MESSAGES.SPA_DAY_INDIVIDUAL}
          showVSL={true}
        />
        <div id="spa-day">
          <SpaDayPackages packages={packagesIndividual} />
        </div>
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
