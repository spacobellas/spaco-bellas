import { Card } from "@/components/ui/card";
import { Sparkles, Heart, Camera, Clock, Home, Lightbulb, Gift } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const differentials = [
  {
    icon: Home,
    title: "Banheira exclusiva e aromaterapia",
    description: "Ambiente privativo com essências personalizadas para seu total relaxamento.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Heart,
    title: "Atendimento 100% personalizado",
    description: "Cada detalhe pensado especialmente para você, com cuidado humanizado.",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: Camera,
    title: "Espaço instagramável profissional",
    description: "Iluminação e cenário perfeitos para registrar seu dia de estrela.",
    color: "from-purple-600 to-pink-500",
  },
  {
    icon: Lightbulb,
    title: "Registro audiovisual da experiência",
    description: "Leve suas memórias em fotos e vídeos profissionais para sempre.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Clock,
    title: "Atendimento com hora marcada",
    description: "Sem espera, sem pressa. Seu momento é exclusivo e reservado para você.",
    color: "from-teal-500 to-cyan-500",
  },
];

export function DifferentialsSection() {
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
      id="differentials"
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-gradient-to-b from-white to-purple-50/30 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200 rounded-full filter blur-3xl opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-4 sm:px-6 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-[var(--primary-purple)]" />
            <span className="text-sm font-medium text-[var(--primary-purple)]">
              Diferenciais
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
            Por que o Spa das Celebridades é único
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Uma experiência pensada em cada detalhe para você se sentir especial.
          </p>
        </div>

        {/* Differentials Grid - 3 em cima, 2 embaixo centralizados */}
        <div className="mb-12 md:mb-16">
          {/* Primeira linha - 3 cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            {differentials.slice(0, 3).map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card
                  key={index}
                  className={`group relative p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-purple-100 hover:border-[var(--primary-purple)] bg-white cursor-pointer overflow-hidden ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  <div className="flex flex-col items-start space-y-4 relative z-10">
                    {/* Icon with gradient background */}
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                      <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Animated underline on hover */}
                    <div className={`w-0 h-1 bg-gradient-to-r ${item.color} group-hover:w-full transition-all duration-500 rounded-full`} />
                  </div>

                  {/* Sparkle decoration on hover */}
                  <Sparkles className="absolute top-4 right-4 w-5 h-5 text-[var(--primary-purple)] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </Card>
              );
            })}
          </div>

          {/* Segunda linha - 2 cards centralizados */}
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {differentials.slice(3, 5).map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card
                  key={index + 3}
                  className={`group relative p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-purple-100 hover:border-[var(--primary-purple)] bg-white cursor-pointer overflow-hidden ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  <div className="flex flex-col items-start space-y-4 relative z-10">
                    {/* Icon with gradient background */}
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                      <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Animated underline on hover */}
                    <div className={`w-0 h-1 bg-gradient-to-r ${item.color} group-hover:w-full transition-all duration-500 rounded-full`} />
                  </div>

                  {/* Sparkle decoration on hover */}
                  <Sparkles className="absolute top-4 right-4 w-5 h-5 text-[var(--primary-purple)] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </Card>
              );
            })}
          </div>
        </div>

        {/* Elementos "Uau" - Toques emocionais */}
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Toques especiais que fazem a diferença
            </h3>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Detalhes emocionais que transformam sua experiência em algo inesquecível
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-purple-100 hover:border-pink-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Mensagem Surpresa</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Receba uma mensagem especial da sua família durante a experiência</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Certificado Físico</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">"Eu fui Celebridade Bellas" - leve para casa sua memória especial 💜</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-purple-100 hover:border-amber-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Bombom Premium</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Finalização doce e especial para seu dia perfeito</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="relative inline-block px-4">
            <div className="absolute -top-6 -left-2 w-12 h-12 bg-purple-100 rounded-full opacity-50" />
            <div className="absolute -bottom-6 -right-2 w-12 h-12 bg-pink-100 rounded-full opacity-50" />
            
            <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-gray-700 px-4 sm:px-8 relative z-10 leading-relaxed">
              O verdadeiro luxo é cuidar de você com tempo e amor
            </p>
            
            <Sparkles className="absolute -top-4 left-0 w-6 h-6 sm:w-8 sm:h-8 text-[var(--primary-purple)] opacity-30" />
            <Sparkles className="absolute -bottom-4 right-0 w-6 h-6 sm:w-8 sm:h-8 text-pink-500 opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
}
