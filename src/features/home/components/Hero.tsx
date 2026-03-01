import { Button } from "@/components/ui/button";
import { Sparkles, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "@/assets/images/membership/Luxury_spa_treatment_room_eeed824b.png";
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from "@/config/contacts";

/**
 * Main Hero section for the Landing Page.
 * Focuses on the "Celebrity Day" experience.
 */
export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const whatsappUrl = buildWhatsAppUrl(WHATSAPP_MESSAGES.SPA_DAY_CELEBRIDADES);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-0">
        <div
          className={`space-y-6 md:space-y-8 transition-all duration-1000 text-center ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-white text-sm sm:text-base">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--primary-purple)]" />
            <span className="font-medium">Spa Day das Celebridades</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Toda mulher merece<br />um dia de estrela
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
            Uma experiência única que combina beleza, relaxamento e o luxo que você merece.
          </p>

          {/* CTA Button */}
          <div className="pt-2 flex justify-center">
            <Button
              onClick={() => window.open(whatsappUrl, "_blank")}
              className="bg-[var(--primary-purple)] hover:bg-[var(--primary-purple)]/90 text-white font-medium px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 max-w-sm sm:max-w-none"
              size="lg"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Quero viver minha experiência
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 sm:pt-12 max-w-3xl mx-auto">
            <div className="space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-white">2.500+</div>
              <div className="text-sm sm:text-base text-white/80">Clientes Satisfeitas</div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-white">4.9/5</div>
              <div className="text-sm sm:text-base text-white/80">Avaliação Média</div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-white">10 anos</div>
              <div className="text-sm sm:text-base text-white/80">De Excelência</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Button - Hidden on mobile */}
      <button
        onClick={() => {
          document.getElementById("introduction")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="hidden md:flex absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 text-white/80 hover:text-white transition-all duration-300 group"
        aria-label="Rolar para baixo"
      >
        <span className="text-sm font-medium">Explore</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
}
