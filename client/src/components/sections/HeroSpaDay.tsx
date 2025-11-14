import { Button } from "@/components/ui/button";
import { Sparkles, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "@assets/generated_images/herodayspa.png";

const WHATSAPP_NUMBER = "5511976820135";
const WHATSAPP_MESSAGE =
  "Olá!%20Quero%20conhecer%20o%20Spa%20Day%20das%20Celebridades%20e%20viver%20meu%20dia%20de%20estrela!";

// VSL principal (mesmo vídeo usado no SpaDaySection)
const VSL_EMBED_URL =
  "https://www.youtube.com/embed/Fk4GrdnhFyA?si=DBixnEMgddCon8iY";

export function HeroSpaDay() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
          {/* Coluna central limitada para leitura confortável */}
          <div className="space-y-6 sm:space-y-8 max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-white text-sm sm:text-base">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-var--primary-purple" />
              <span className="font-medium">Spa Day das Celebridades</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Viva um dia de princesa
              <br className="hidden md:block" />
              com banheira, massagem e cuidados de celebridade
              <br className="hidden md:block" />
              sem sair de São Paulo
            </h1>

            {/* Subtítulo */}
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
              Transforme o cansaço em brilho com o novo Spa das Celebridades — pacotes
              exclusivos para mulheres que merecem um recomeço.
            </p>

            {/* CTA principal */}
            <div className="pt-4 sm:pt-6 flex justify-center">
              <Button
                onClick={() =>
                  window.open(
                    `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
                    "_blank"
                  )
                }
                className="bg-[var(--primary-purple)] hover:bg-[var(--primary-purple)]/90 text-white font-medium px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                size="lg"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Quero viver minha experiência
              </Button>
            </div>
          </div>

          {/* VSL – versão tablet/desktop (iframe completo) */}
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

          {/* Métricas / prova social */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-4 sm:pt-8 md:pt-10 pb-6 sm:pb-10 max-w-3xl mx-auto">
            <div className="space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-white">2.500+</div>
              <div className="text-sm sm:text-base text-white/80">
                Clientes Satisfeitas
              </div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-white">4.9</div>
              <div className="text-sm sm:text-base text-white/80">
                Avaliação Média
              </div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-white">10 anos</div>
              <div className="text-sm sm:text-base text-white/80">
                De Excelência
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Button – apenas no desktop */}
        <button
          onClick={() =>
            document.getElementById("introduction")?.scrollIntoView({
              behavior: "smooth",
            })
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
