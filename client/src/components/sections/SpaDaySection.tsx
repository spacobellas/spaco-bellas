import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Crown, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_NUMBER = "5511976820135";

const packages = [
  {
    id: "bronze",
    tier: "Bronze",
    price: "195,00",
    description: "Um cuidado essencial para você relaxar e sair renovada.",
    features: [
      "Spa dos Pés (30 min)",
      "Hidromassagem (30 min)",
      "Massagem Relaxante (50 min)",
      "Chá e frutas",
    ],
    featured: false,
    color: "from-amber-700 to-amber-900",
    icon: Star,
  },
  {
    id: "prata",
    tier: "Prata",
    price: "360,00",
    description: "Mais completo, inclui relaxamento profundo e cuidados extras.",
    features: [
      "Tudo do Bronze",
      "Drenagem Linfática (50 min)",
      "Esfoliação Corporal",
      "Hidratação Facial",
      "Aromaterapia personalizada",
    ],
    featured: false,
    color: "from-gray-400 to-gray-600",
    icon: Star,
  },
  {
    id: "ouro",
    tier: "Ouro",
    price: "520,00",
    description: "A experiência premium com tratamentos exclusivos.",
    features: [
      "Tudo do Prata",
      "Massagem com Pedras Quentes (70 min)",
      "Tratamento Facial Completo",
      "Reflexologia Podal",
      "Lanche gourmet",
    ],
    featured: true,
    color: "from-yellow-400 to-yellow-600",
    icon: Crown,
  },
  {
    id: "diamante",
    tier: "Diamante",
    price: "650,00",
    description: "O máximo em luxo e bem-estar, uma verdadeira transformação.",
    features: [
      "Tudo do Ouro",
      "Massagem Ayurvédica (90 min)",
      "Spa Facial Luminosidade",
      "Ritual de Bambuterapia",
      "Day Use Completo",
      "Jantar especial incluso",
    ],
    featured: true,
    color: "from-cyan-400 to-blue-600",
    icon: Crown,
  },
];

export function SpaDaySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
      id="spa-day" 
      ref={sectionRef}
      className="py-32 relative overflow-hidden bg-gradient-to-b from-white via-[var(--neutral-beige-light)] to-white"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[var(--primary-purple)] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[var(--accent-gold)] rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg mb-6">
            <Sparkles className="h-4 w-4 text-[var(--primary-purple)]" />
            <span className="text-sm font-body font-semibold text-[var(--primary-purple)] tracking-wide">
              EXPERIÊNCIAS DAY SPA
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-display text-[var(--primary-purple)] mb-6">
            Seu Dia de Renovação
          </h2>
          
          <p className="text-xl font-body text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Escolha o pacote perfeito e mergulhe em uma jornada de bem-estar completa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={pkg.id}
              className={`relative transition-all duration-700 group ${
                pkg.featured 
                  ? 'lg:scale-105 lg:-translate-y-6 shadow-2xl' 
                  : 'hover:scale-105'
              } ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                background: pkg.featured 
                  ? 'linear-gradient(135deg, #ffffff 0%, #faf8f3 50%, #f5e6f3 100%)'
                  : 'linear-gradient(135deg, #ffffff 0%, #faf8f3 100%)',
                border: pkg.featured ? '2px solid var(--primary-purple)' : '1px solid rgba(140, 0, 130, 0.1)',
                borderRadius: '32px',
                boxShadow: pkg.featured 
                  ? '0 20px 60px rgba(140, 0, 130, 0.2), 0 0 0 1px rgba(140, 0, 130, 0.1)'
                  : '0 4px 24px rgba(140, 0, 130, 0.08)'
              }}
            >
              {pkg.featured && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-6 py-2 rounded-full bg-gradient-to-r from-[var(--primary-purple)] to-[var(--primary-purple-light)] shadow-xl">
                    <span className="text-white text-xs font-body font-bold tracking-wider uppercase flex items-center gap-2">
                      <pkg.icon className="w-4 h-4" />
                      Mais Popular
                    </span>
                  </div>
                </div>
              )}

              <div className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none">
                <div className={`w-full h-full rounded-full bg-gradient-to-br ${pkg.color} blur-3xl`}></div>
              </div>
              
              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${pkg.color} shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <pkg.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-display text-[var(--primary-purple)] mb-3">
                    {pkg.tier}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="text-sm font-body text-[var(--text-muted)]">A partir de</span>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-2xl font-body text-[var(--text-secondary)]">R$</span>
                      <span className="text-5xl font-display text-[var(--primary-purple)]">
                        {pkg.price.split(',')[0]}
                      </span>
                      <span className="text-2xl font-body text-[var(--text-secondary)]">,{pkg.price.split(',')[1]}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm font-body text-[var(--text-secondary)] leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[var(--primary-purple)] to-[var(--primary-purple-light)] flex items-center justify-center mt-0.5 shadow-sm group-hover/item:scale-110 transition-transform">
                        <Check className="h-4 w-4 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-sm font-body text-[var(--text-primary)] leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                <Button
                  asChild
                  className={pkg.featured ? 'btn-primary-luxury w-full' : 'btn-outline-luxury w-full'}
                >
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      `Olá! Tenho interesse no pacote Day Spa ${pkg.tier}. Gostaria de agendar.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {pkg.featured ? 'Reservar Agora' : 'Saiba Mais'}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-base font-body text-[var(--text-muted)] italic">
            Todos os pacotes incluem acesso às instalações do spa • Agendamento flexível • Garantia de satisfação
          </p>
        </div>
      </div>
    </section>
  );
}
