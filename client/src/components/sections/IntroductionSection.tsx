import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Heart, Building2, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const offerings = [
  {
    icon: Calendar,
    title: "Day Spa",
    description: "Pacotes exclusivos de bem-estar para você relaxar e se renovar completamente em um dia de puro luxo.",
    target: "spa-day",
    highlight: "A partir de R$ 195",
    gradient: "from-purple-500/10 to-purple-600/5",
  },
  {
    icon: Heart,
    title: "Mensal Bellas",
    description: "Plano de assinatura mensal para cuidar de você todos os meses com economia e exclusividade.",
    target: "mensal-bellas",
    highlight: "Economize até 30%",
    gradient: "from-rose-500/10 to-rose-600/5",
  },
  {
    icon: Building2,
    title: "Empresas",
    description: "Programas corporativos de bem-estar para sua equipe e colaboradores com pacotes personalizados.",
    target: "empresas",
    highlight: "Soluções Personalizadas",
    gradient: "from-amber-500/10 to-amber-600/5",
  },
];

export function IntroductionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const smoothScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="introduction" 
      ref={sectionRef}
      className="relative py-32 bg-white overflow-hidden"
    >
      <div className="ornament-corner ornament-corner-tl"></div>
      <div className="ornament-corner ornament-corner-br"></div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--primary-purple)] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent-gold)] rounded-full opacity-5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary-purple-ultra-light)] mb-6">
            <Sparkles className="h-4 w-4 text-[var(--primary-purple)]" />
            <span className="text-sm font-body font-semibold text-[var(--primary-purple)] tracking-wide">
              ESCOLHA SUA JORNADA
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-display text-[var(--primary-purple)] mb-6">
            Experiências Transformadoras
          </h2>
          
          <p className="text-xl font-body text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Descubra o caminho perfeito para o seu momento de autocuidado e bem-estar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {offerings.map((offering, index) => (
            <Card
              key={offering.target}
              className={`premium-card cursor-pointer group relative overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                animationDelay: `${index * 200}ms`,
                transitionDelay: `${index * 150}ms`
              }}
              onClick={() => smoothScrollTo(offering.target)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${offering.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--accent-gold)]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardContent className="p-10 relative z-10">
                <div className="mb-8 relative">
                  <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-[var(--primary-purple)] to-[var(--primary-purple-light)] flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <offering.icon className="h-12 w-12 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="absolute inset-0 bg-[var(--primary-purple)] opacity-20 blur-2xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700"></div>
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-display text-[var(--primary-purple)] mb-4 group-hover:scale-105 transition-transform duration-300">
                    {offering.title}
                  </h3>
                  
                  <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[var(--primary-purple-ultra-light)] to-[var(--neutral-beige-light)] mb-6">
                    <span className="text-sm font-body font-bold text-[var(--primary-purple)]">
                      {offering.highlight}
                    </span>
                  </div>
                </div>
                
                <p className="text-base font-body text-[var(--text-secondary)] leading-relaxed mb-8 text-center">
                  {offering.description}
                </p>
                
                <div className="flex items-center justify-center gap-2 text-[var(--primary-purple)] font-body font-semibold group-hover:gap-4 transition-all duration-300">
                  <span>Explorar</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`mt-20 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg font-body text-[var(--text-muted)] italic">
            "Cada experiência é cuidadosamente projetada para proporcionar momentos únicos de relaxamento e renovação"
          </p>
        </div>
      </div>
    </section>
  );
}
