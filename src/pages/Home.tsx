import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/features/home/components/Hero";
import { Introduction } from "@/features/home/components/Introduction";
import { SpaDayPackages } from "@/features/home/components/SpaDayPackages";
import { Differentials } from "@/features/home/components/Differentials";
import { Testimonials } from "@/components/shared/Testimonials";
import { CTA } from "@/components/shared/CTA";

import { packagesCelebridades } from "@/data/spa-packages";

/**
 * Institutional Home Page.
 * Composes shared components and the main home feature.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero - Experience your star day */}
        <Hero />

        {/* 2. Introduction - An experience crafted for you */}
        <Introduction />

        {/* 3. Packages - Star, Queen, and Diva Day */}
        <SpaDayPackages packages={packagesCelebridades} />

        {/* 4. Differentials - What makes Spa das Celebridades unique */}
        <Differentials />

        {/* 5. Testimonials - Stories of transformation */}
        <Testimonials />

        {/* 6. Final CTA - Urgency and VIP Group */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
