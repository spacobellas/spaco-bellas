import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Clock, Gift, Crown, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_NUMBER = "5511976820135";
const WHATSAPP_MESSAGE = "Olá!%20Quero%20garantir%20minha%20vaga%20no%20pré-lançamento%20do%20Spa%20Day%20das%20Celebridades!";

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-gradient-to-b from-purple-50/30 to-white overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200 rounded-full filter blur-3xl opacity-10" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Alert Badge */}
        <div
          className={`flex justify-center mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-amber-50 border-2 border-amber-200 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-amber-900">
              ⚠️ VAGAS LIMITADAS PARA O PRÉ-LANÇAMENTO
            </span>
          </div>
        </div>

        {/* Main content */}
        <div
          className={`text-center mb-10 md:mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight px-4">
            Viva seu Dia de Estrela<br />
            <span className="text-[var(--primary-purple)]">no Spa das Celebridades</span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8 px-4">
            As 10 primeiras clientes do pré-lançamento ganham benefícios exclusivos!
          </p>
        </div>

        {/* Benefits cards */}
        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 md:mb-12 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="group p-6 sm:p-8 bg-white border-2 border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
            <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Gift className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900">
                Upgrade Essencial → Luxo
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Compre o Dia de Estrela e ganhe o Dia de Rainha
              </p>
            </div>
          </Card>

          <Card className="group p-6 sm:p-8 bg-white border-2 border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
            <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Crown className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900">
                Upgrade Luxo → Celebridade
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Compre o Dia de Rainha e ganhe o Dia de Diva
              </p>
            </div>
          </Card>

          <Card className="group p-6 sm:p-8 bg-white border-2 border-amber-100 hover:border-amber-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900">
                Desconto Celebridade
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Compre o Dia de Diva por R$ 997 (em vez de R$ 1.497)
              </p>
            </div>
          </Card>
        </div>

        {/* CTA Button */}
        <div
          className={`flex flex-col items-center gap-4 sm:gap-6 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <Button
            onClick={() =>
              window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank")
            }
            className="group bg-gradient-to-r from-[var(--primary-purple)] to-pink-600 hover:from-[var(--primary-purple)]/90 hover:to-pink-600/90 text-white font-bold px-8 sm:px-12 py-6 sm:py-8 text-lg sm:text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 cursor-pointer max-w-md w-full sm:w-auto"
            size="lg"
          >
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
            Entrar no Grupo VIP Agora
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform" />
          </Button>

          <div className="flex items-center gap-2 sm:gap-3 text-gray-600">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--primary-purple)]" />
            <span className="text-xs sm:text-sm font-medium">
              Apenas 10 vagas com benefícios exclusivos
            </span>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-500 pt-4 sm:pt-6 px-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--primary-purple)]" />
              <span>Atendimento VIP</span>
            </div>
            <span className="text-gray-300 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--primary-purple)]" />
              <span>Grupo Exclusivo WhatsApp</span>
            </div>
            <span className="text-gray-300 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--primary-purple)]" />
              <span>Experiência Garantida</span>
            </div>
          </div>
        </div>

        {/* Final quote */}
        <div
          className={`text-center mt-12 md:mt-16 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-gray-700 px-4 sm:px-8 leading-relaxed">
            "Hoje você foi celebridade. E o melhor: não precisou ser famosa para brilhar." 💜
          </p>
        </div>
      </div>
    </section>
  );
}
