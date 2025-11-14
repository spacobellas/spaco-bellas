import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Crown, Star, Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_NUMBER = "5511976820135";

const WHATSAPP_LINKS: Record<string, string> = {
  estrela:
    "https://wa.me/5511976820135?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20tenho%20interesse%20no%20Dia%20de%20Estrela!",
  diva:
    "https://wa.me/5511976820135?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20tenho%20interesse%20no%20Dia%20de%20Diva!",
  rainha:
    "https://wa.me/5511976820135?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20tenho%20interesse%20no%20Dia%20de%20Rainha!",
};

// Pacotes do Spa Day das Celebridades
const packages = [
  {
    id: "estrela",
    tier: "Dia de Estrela",
    installment: "12x de R$ 39,70",
    cash: "R$ 397 à vista no Pix",
    duration: "2h de experiência",
    description: "Seu momento de cuidado e renovação essencial.",
    features: [
      "Spa dos pés (30 min)",
      "Quick massage (20 min)",
      "Banheira relaxante com aromaterapia (30 min)",
      "Chá especial e frutas",
      "Roupão personalizado",
      "Ambiente aromático e música",
      "Registro básico (foto ou story)",
    ],
    featured: false,
    color: "from-pink-400 to-pink-600",
    icon: Star,
    badge: null as string | null,
    badgeColor: "bg-pink-500",
  },
  {
    id: "rainha",
    tier: "Dia de Rainha",
    installment: "12x de R$ 69,70",
    cash: "R$ 697 à vista no Pix",
    duration: "3h de experiência",
    description: "A experiência completa para você se sentir uma verdadeira rainha.",
    features: [
      "Spa dos pés",
      "Banheira relaxante com aromaterapia",
      "Massagem terapêutica com pedras quentes (50 min)",
      "Acesso ao Camarim das Celebridades",
      "Roupão personalizado",
      "Ambiente aromático e música",
      "Chá especial, sucos ou refrigerante",
      "Tábua de frios, frutas e castanhas",
      "Lembrança personalizada para levar pra casa",
      "Banho com produtos veganos",
      "Escova profissional pós banho",
      "Registro básico: foto + story do seu dia",
      "Foto personalizada do seu dia",
    ],
    featured: true,
    color: "from-purple-400 to-purple-600",
    icon: Crown,
    badge: "Mais vendido!",
    badgeColor: "bg-[var(--primary-purple)]",
  },
  {
    id: "diva",
    tier: "Dia de Diva",
    installment: "12x de R$ 149,69",
    cash: "R$ 1.497,00 à vista no Pix",
    duration: "3h30 de experiência",
    description: "O luxo completo. Viva seu dia de celebridade.",
    features: [
      "Tudo do Dia de Rainha",
      "Figurino especial incluído",
      "Buquê de flores + chocolates",
      "Mini ensaio fotográfico profissional",
      "Maquiagem social",
      "Making off em vídeo (estilo dia da noiva)",
      "Certificado 'Eu fui Celebridade Bellas 💜'",
      "Garrafa de Champanhe ou Vinho",
      "Tábua Luxo: castanhas, frios, frutas e salgadinho",
      "Sua foto no mural das celebridades!",
    ],
    featured: false,
    color: "from-amber-400 to-amber-600",
    icon: Crown,
    badge: null as string | null,
    badgeColor: "bg-amber-500",
  },
];

export function SpaDaySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPackage, setHoveredPackage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

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

  const handleWhatsAppClick = (id: string) => {
    const url = WHATSAPP_LINKS[id];
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="spa-day"
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-gradient-to-b overflow-hidden"
      style={{ backgroundColor: "#faebff" }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20 -translate-x-12 -translate-y-12" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200 rounded-full filter blur-3xl opacity-20 translate-x-12 translate-y-12" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-20 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-4 sm:px-6 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-[var(--primary-purple)]" />
            <span className="text-sm font-medium text-[var(--primary-purple)]">
              Spa Day das Celebridades
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
            Viva um dia de princesa com banheira, massagem e cuidados de
            celebridade — tudo sem sair de São Paulo 💜
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Transforme o cansaço em brilho com o novo Spa das Celebridades —
            pacotes exclusivos para mulheres que merecem um recomeço.
          </p>

          {/* CTA principal do hero */}
          <div className="mt-8 flex justify-center">
            <Button
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              size="lg"
              asChild
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Quero%20relaxar%20agora%20no%20Spa%20das%20Celebridades!`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero relaxar agora!
              </a>
            </Button>
          </div>

          {/* Destaque para o vídeo estilo VSL */}
          <div className="mt-10 mb-20 md:mb-24 max-w-3xl mx-auto">
            <div className="aspect-video rounded-2xl border border-purple-100 bg-white/60 backdrop-blur-sm shadow-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/LXb3EKWsInQ?si=akjU1MXZr8ODjoSE"
                title="Spa das Celebridades - VSL"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Packages grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-4 mb-12 md:mb-16">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;

            return (
              <Card
                key={pkg.id}
                onMouseEnter={() => setHoveredPackage(pkg.id)}
                onMouseLeave={() => setHoveredPackage(null)}
                className={`group relative overflow-hidden transition-all duration-500 cursor-pointer h-full ${
                  pkg.featured
                    ? "border-2 border-[var(--primary-purple)] shadow-2xl md:scale-105 lg:scale-110"
                    : "border border-[var(--primary-purple)]/20 shadow-lg hover:shadow-2xl hover:scale-105 hover:border-[var(--primary-purple)]"
                } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 sm:p-8 relative z-10 flex flex-col h-full">
                  {/* Badge */}
                  {pkg.badge && (
                    <div className="absolute top-4 right-4">
                      <div
                        className={`${pkg.badgeColor} px-3 sm:px-4 py-1 rounded-full text-xs font-bold text-white shadow-lg`}
                      >
                        {pkg.badge}
                      </div>
                    </div>
                  )}

                  {/* Gradient background hover */}
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" />

                  {/* Icon */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <div className={`w-full h-full rounded-full bg-gradient-to-br ${pkg.color} flex items-center justify-center`}>
                      <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                  </div>

                  {/* Tier name */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {pkg.tier}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--primary-purple)] font-medium mb-4">
                    {pkg.duration}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 mb-6 min-h-[3rem]">
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-gray-200">

                    {/* Parcelado bem grande */}
                    <div className="flex flex-col items-start gap-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                          {pkg.installment}
                        </span>
                      </div>

                      {/* À vista bem pequeno */}
                      <div className="flex items-baseline gap-2">
                        <span className="text-xs sm:text-sm text-gray-500">
                          ou
                        </span>
                        <span className="text-[0.7rem] sm:text-xs text-gray-600">
                          {pkg.cash}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3"
                      >
                        <Check
                          className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 ${
                            pkg.featured
                              ? "text-[var(--primary-purple)]"
                              : "text-pink-500"
                          }`}
                        />
                        <span className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button fixado na base */}
                  <div className="mt-auto pt-2">
                    <Button
                      asChild
                      className="w-full font-medium shadow-lg transition-all duration-300 cursor-pointer pointer-events-auto relative z-50 bg-emerald-500 hover:bg-emerald-600 text-white border-2 border-emerald-500 hover:border-emerald-600"
                      size="lg"
                      onClick={() => handleWhatsAppClick(pkg.id)}
                    >
                      <div className="flex items-center justify-center">
                        {pkg.id === "rainha" ? (
                          <>
                            <Heart className="w-4 h-4 mr-2" />
                            <span>Quero meu dia de rainha</span>
                          </>
                        ) : pkg.id === "diva" ? (
                          <>
                            <Crown className="w-4 h-4 mr-2" />
                            <span>Quero meu dia de diva</span>
                          </>
                        ) : (
                          <>
                            <Star className="w-4 h-4 mr-2" />
                            <span>Quero meu dia de estrela</span>
                          </>
                        )}
                      </div>
                    </Button>
                  </div>

                  {/* Animated border on hover */}
                  <div className="pointer-events-none absolute inset-0 border-2 border-transparent group-hover:border-[var(--primary-purple)]/30 rounded-lg transition-colors duration-300" />
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional info + disclaimer do roupão */}
        <div className="text-center text-gray-600 text-xs sm:text-sm px-4 mt-4">
          <p className="flex items-center justify-center gap-2 flex-wrap mb-2">
            <Sparkles className="w-4 h-4 text-[var(--primary-purple)]" />
            <span>
              Todos os pacotes incluem roupão personalizado e ambiente exclusivo.
            </span>
          </p>
          <p className="text-[0.7rem] sm:text-xs text-gray-500 mb-1">
            Roupão personalizado disponível para uso durante a experiência (não
            incluso para levar embora).
          </p>
          <p className="text-[0.75rem] sm:text-xs text-gray-500 mt-1">
            Agendamento via WhatsApp • Experiência inesquecível garantida 💜
          </p>
        </div>
      </div>
    </section>
  );
}
