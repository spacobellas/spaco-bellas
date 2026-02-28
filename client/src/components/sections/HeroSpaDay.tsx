import { Button } from "@/components/ui/button";
import { Sparkles, ChevronDown, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "@assets/generated_images/herodayspa.png";

const WHATSAPP_NUMBER = "5511976820135";

// VSL principal
const VSL_EMBED_URL = "https://www.youtube.com/embed/Fk4GrdnhFyA?si=DBixnEMgddCon8iY";

interface HeroSpaDayProps {
  title?: string;
  subtitle?: string;
  whatsappText?: string;
  showVSL?: boolean;
}

export function HeroSpaDay({
  title = "Seu dia de celebridade começa aqui",
  subtitle = "Pacotes exclusivos para mulheres que querem se sentir poderosas, renovadas e cuidadas como celebridades",
  whatsappText = "Olá! Quero conhecer os pacotes de Spa Day do Spaço Bellas!",
  showVSL = true,
}: HeroSpaDayProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const encodedText = encodeURIComponent(whatsappText);

  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        <div
          className={`transition-all duration-1000 text-center ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-6 sm:space-y-8 max-w-3xl mx-auto">
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {title}
            </h1>

            {/* Subtítulo */}
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
              {subtitle}
            </p>

            {/* CTA principal */}
            <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
              <Button
                size="lg"
                className="w-full rounded-full bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-5 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:from-purple-700 hover:to-purple-800 hover:shadow-2xl sm:w-auto sm:px-8 sm:py-6"
                onClick={() =>
                  window.open(
                    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`,
                    "_blank"
                  )
                }
              >
                <Heart className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Quero meu Spa Day
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full rounded-full border-2 border-white bg-white/10 px-6 py-5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 sm:w-auto sm:px-8 sm:py-6"
                onClick={() =>
                  document.getElementById("spa-day")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Sparkles className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Ver pacotes
              </Button>
            </div>
          </div>

          {/* VSL */}
          {showVSL && (
            <div className="mt-6 sm:mt-8 md:mt-10 mb-8 md:mb-10 max-w-md sm:max-w-xl md:max-w-3xl mx-auto">
              <div className="aspect-video rounded-2xl border border-purple-100 bg-white/60 backdrop-blur-sm shadow-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={VSL_EMBED_URL}
                  title="Spa das Celebridades - VSL"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* Métricas / prova social */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-4 sm:pt-8 md:pt-10 pb-6 sm:pb-10 max-w-3xl mx-auto">
            <div className="space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-white">2.500+</div>
              <div className="text-sm sm:text-base text-white/80">Clientes Satisfeitas</div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-white">4.9</div>
              <div className="text-sm sm:text-base text-white/80">Avaliação Média</div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-white">10 anos</div>
              <div className="text-sm sm:text-base text-white/80">De Excelência</div>
            </div>
          </div>
        </div>

        {/* Scroll Down Button – apenas no desktop */}
        <button
          onClick={() =>
            document.getElementById("introduction")?.scrollIntoView({ behavior: "smooth" })
          }
          className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 text-white/80 hover:text-white transition-all duration-300 group"
          aria-label="Rolar para baixo"
        >
          <span className="text-sm font-medium">Explore</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </div>
    </div>
  );
}