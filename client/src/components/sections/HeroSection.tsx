import { Button } from "@/components/ui/button";
import { Sparkles, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "@assets/generated_images/Luxury_spa_treatment_room_eeed824b.png";

const WHATSAPP_NUMBER = "5511976820135";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Gostaria de agendar minha experiência no Spaço Bellas.");

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <style>{`
        .hero-section .hero-title {
          color: #ffffff !important;
          text-shadow: 0 4px 40px rgba(140, 0, 130, 0.8), 0 0 80px rgba(140, 0, 130, 0.4) !important;
        }

        .hero-section .hero-text {
          color: #ffffff !important;
          text-shadow: 0 2px 30px rgba(0, 0, 0, 0.95), 0 4px 20px rgba(0, 0, 0, 0.9) !important;
        }

        .hero-section .hero-stats span {
          color: #ffffff !important;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8) !important;
        }

        .hero-section .hero-explore {
          color: #ffffff !important;
        }

        .hero-section .hero-explore span {
          color: #ffffff !important;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8) !important;
        }

        .hero-section .hero-explore svg {
          color: #ffffff !important;
          filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.8)) !important;
        }
      `}</style>

      <section 
        id="home" 
        className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      >
        {/* Imagem de fundo com desfoque */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            filter: 'blur(2px)',
            transform: 'scale(1.05)',
          }}
        ></div>
        
        {/* Overlay mais escuro para melhor contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <h1 className="hero-title text-6xl md:text-8xl lg:text-9xl font-display mb-6 leading-none">
              <span className="block">
                Spaço Bellas
              </span>
            </h1>
            
            <p className="hero-text text-2xl md:text-3xl font-body mb-4 font-light tracking-wide">
              Seu refúgio de luxo e bem-estar em São Paulo
            </p>
            
            <p className="hero-text text-lg md:text-xl font-body mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Descubra uma experiência única de autocuidado e transformação. Day Spa, massagens, tratamentos estéticos e muito mais.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <Button
                asChild
                size="lg"
                className="btn-primary-luxury text-lg h-16 px-12 group"
              >
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Sparkles className="mr-3 h-6 w-6 group-hover:rotate-180 transition-transform duration-500" />
                  Agende sua Experiência
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-body hero-stats">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[var(--accent-gold)]"></div>
                <span>Mais de 2.500 clientes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[var(--accent-gold)]"></div>
                <span>Avaliação 4.9/5</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[var(--accent-gold)]"></div>
                <span>10 anos de excelência</span>
              </div>
            </div>
          </div>
        </div>

        <button 
          onClick={() => {
            document.getElementById("introduction")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="hero-explore absolute bottom-12 left-1/2 -translate-x-1/2 z-10 transition-all duration-300 group"
          aria-label="Rolar para baixo"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-body tracking-wider uppercase">Explore</span>
            <ChevronDown size={32} className="animate-bounce group-hover:translate-y-1 transition-transform" />
          </div>
        </button>
      </section>
    </>
  );
}
