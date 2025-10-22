import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Crown, Star, Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_NUMBER = "5511976820135";

// Pacotes do Spa Day das Celebridades
const packages = [
  {
    id: "estrela",
    tier: "Dia de Estrela",
    price: "297,00",
    duration: "1h30 de experiência",
    description: "Seu momento de cuidado e renovação essencial.",
    features: [
      "Spa dos pés relaxante",
      "Banheira relaxante com aromaterapia",
      "Massagem relaxante (50 min)",
      "Chá especial e frutas",
      "Roupão personalizado",
      "Ambiente aromático e música",
      "Registro básico (foto ou story)",
    ],
    featured: false,
    color: "from-pink-400 to-pink-600",
    icon: Star,
    badge: null,
    badgeColor: "bg-pink-500",
  },
  {
    id: "rainha",
    tier: "Dia de Rainha",
    price: "697,00",
    duration: "2h30 de experiência",
    description: "A experiência completa para você se sentir especial.",
    features: [
      "Tudo do Dia de Estrela",
      "Escova profissional",
      "Registro em vídeo",
      "Drink especial com mensagem",
      "Lembrança personalizada",
      "Atendimento VIP exclusivo",
      "Acesso a área premium",
    ],
    featured: true,
    color: "from-purple-400 to-purple-600",
    icon: Crown,
    badge: "Mais Popular",
    badgeColor: "bg-[var(--primary-purple)]",
  },
  {
    id: "diva",
    tier: "Dia de Diva",
    price: "1.497,00",
    duration: "3h30 de experiência",
    description: "O luxo completo. Viva seu dia de celebridade.",
    features: [
      "Tudo do Dia de Rainha",
      "Figurino especial incluído",
      "Buquê de flores premium",
      "Mini ensaio fotográfico profissional",
      "Maquiagem completa",
      "Vídeo profissional editado",
      "Certificado 'Eu fui Celebridade Bellas 💜'",
    ],
    featured: false,
    color: "from-amber-400 to-amber-600",
    icon: Crown,
    badge: null,
    badgeColor: "bg-amber-500",
  },
];

export function SpaDaySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPackage, setHoveredPackage] = useState<string | null>(null);
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

  const handleWhatsAppClick = (packageName: string, price: string) => {
    const message = `Olá!%20Quero%20reservar%20o%20${packageName}%20(R$%20${price})%20e%20viver%20meu%20dia%20de%20celebridade!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section
      id="spa-day"
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-gradient-to-b from-purple-50/30 to-white overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-4 sm:px-6 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-[var(--primary-purple)]" />
            <span className="text-sm font-medium text-[var(--primary-purple)]">
              Spa Day das Celebridades
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
            Escolha sua experiência
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Três níveis de experiência criados para você viver seu dia de estrela. 
            Todos incluem cuidado personalizado, ambiente exclusivo e momentos inesquecíveis.
          </p>
        </div>

        {/* Packages grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <Card
                key={pkg.id}
                onMouseEnter={() => setHoveredPackage(pkg.id)}
                onMouseLeave={() => setHoveredPackage(null)}
                className={`group relative overflow-hidden transition-all duration-500 cursor-pointer ${
                  pkg.featured
                    ? "border-2 border-[var(--primary-purple)] shadow-2xl md:scale-105 lg:scale-110"
                    : "border border-[var(--primary-purple)]/20 shadow-lg hover:shadow-2xl hover:scale-105 hover:border-[var(--primary-purple)]"
                } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 sm:p-8 relative z-10">
                  {/* Badge */}
                  {pkg.badge && (
                    <div
                      className={`absolute top-4 right-4 ${pkg.badgeColor} px-3 sm:px-4 py-1 rounded-full text-xs font-bold text-white shadow-lg`}
                    >
                      {pkg.badge}
                    </div>
                  )}

                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${pkg.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>

                  {/* Tier name */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{pkg.tier}</h3>

                  <p className="text-xs sm:text-sm text-[var(--primary-purple)] font-medium mb-4">
                    {pkg.duration}
                  </p>

                  <p className="text-sm sm:text-base text-gray-600 mb-6 min-h-[3rem]">{pkg.description}</p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <div className="text-xs sm:text-sm text-gray-500 mb-1">A partir de</div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl sm:text-2xl font-bold text-gray-900">R$</span>
                      <span className="text-4xl sm:text-5xl font-bold text-gray-900">
                        {pkg.price.split(",")[0]}
                      </span>
                      <span className="text-xl sm:text-2xl font-bold text-gray-900">
                        ,{pkg.price.split(",")[1]}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check
                          className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 ${
                            pkg.featured ? "text-[var(--primary-purple)]" : "text-pink-500"
                          }`}
                        />
                        <span className="text-xs sm:text-sm text-gray-700 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    onClick={() => handleWhatsAppClick(pkg.tier, pkg.price)}
                    className={`w-full font-medium shadow-lg transition-all duration-300 cursor-pointer ${
                      pkg.featured
                        ? `bg-gradient-to-r ${pkg.color} hover:shadow-2xl hover:scale-105 text-white`
                        : "bg-white border-2 border-[var(--primary-purple)] text-[var(--primary-purple)] hover:bg-[var(--primary-purple)] hover:text-white"
                    }`}
                    size="lg"
                  >
                    {pkg.featured ? (
                      <>
                        <Heart className="w-4 h-4 mr-2" />
                        Quero ser Rainha
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Reservar Agora
                      </>
                    )}
                  </Button>

                  {/* Animated border on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--primary-purple)]/30 rounded-lg transition-colors duration-300 pointer-events-none" />
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional info */}
        <div className="text-center text-gray-600 text-xs sm:text-sm px-4">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            <Sparkles className="w-4 h-4 text-[var(--primary-purple)]" />
            Todos os pacotes incluem roupão personalizado e ambiente exclusivo
            <span className="text-gray-400">•</span>
            Agendamento via WhatsApp
            <span className="text-gray-400">•</span>
            Experiência inesquecível garantida 💜
          </p>
        </div>
      </div>
    </section>
  );
}
