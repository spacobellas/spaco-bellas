import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingDown, Sparkles, Heart, Calendar, Gift, Infinity, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_NUMBER = "5511976820135";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Tenho interesse no plano Mensal Bellas. Gostaria de saber mais detalhes e valores."
);

const benefits = [
  {
    icon: TrendingDown,
    title: "Economia Garantida",
    description: "Até 30% de desconto em todos os serviços com o plano mensal",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Calendar,
    title: "Prioridade de Agendamento",
    description: "Horários exclusivos e prioridade na agenda para assinantes",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: Gift,
    title: "Bônus Mensais",
    description: "Brindes exclusivos e serviços especiais todos os meses",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: Heart,
    title: "Autocuidado Constante",
    description: "Crie o hábito de cuidar de você com regularidade e qualidade",
    gradient: "from-red-500 to-pink-600",
  },
];

export function MensalBellasSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [savingsCount, setSavingsCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          let count = 0;
          const target = 450;
          const duration = 2000;
          const increment = target / (duration / 16);
          
          const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
              setSavingsCount(target);
              clearInterval(timer);
            } else {
              setSavingsCount(Math.floor(count));
            }
          }, 16);
          
          return () => clearInterval(timer);
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
      id="mensal-bellas" 
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-br from-[var(--neutral-beige)] via-white to-[var(--neutral-beige-light)] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[var(--primary-purple)] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[var(--accent-rose-gold)] rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card shadow-lg mb-6">
            <Infinity className="h-4 w-4 text-[var(--primary-purple)]" />
            <span className="text-sm font-body font-semibold text-[var(--primary-purple)] tracking-wide">
              PLANO DE ASSINATURA
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-display text-[var(--primary-purple)] mb-6">
            Mensal Bellas
          </h2>
          
          <p className="text-xl font-body text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed mb-8">
            Torne o autocuidado parte da sua rotina mensal e economize
          </p>
          
          <div className={`inline-block transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="glass-card px-12 py-8 rounded-3xl shadow-2xl">
              <p className="text-sm font-body text-[var(--text-muted)] uppercase tracking-widest mb-2">
                Você economiza por ano
              </p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-3xl font-body text-[var(--primary-purple)]">R$</span>
                <span className="text-7xl font-display bg-gradient-to-r from-[var(--primary-purple)] to-[var(--accent-rose-gold)] bg-clip-text text-transparent">
                  {savingsCount}
                </span>
              </div>
              <p className="text-sm font-body text-[var(--text-muted)] mt-2">
                *Baseado em 2 visitas mensais
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className={`premium-card group overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <CardContent className="p-8 relative z-10">
                <div className="mb-6 relative">
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <benefit.icon className="h-10 w-10 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-purple)] to-transparent opacity-20 blur-2xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700"></div>
                </div>
                
                <h3 className="text-2xl font-display text-[var(--primary-purple)] mb-4 text-center group-hover:scale-105 transition-transform">
                  {benefit.title}
                </h3>
                
                <p className="text-sm font-body text-[var(--text-secondary)] leading-relaxed text-center">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="premium-card overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--accent-gold)]/20 to-transparent rounded-full blur-3xl"></div>
            
            <CardContent className="p-12 text-center relative z-10">
              <Award className="h-16 w-16 text-[var(--primary-purple)] mx-auto mb-6" />
              
              <h3 className="text-3xl font-display text-[var(--primary-purple)] mb-4">
                Benefícios Exclusivos para Assinantes
              </h3>
              
              <p className="text-lg font-body text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto leading-relaxed">
                Além da economia, você terá acesso a serviços premium, eventos exclusivos e um programa de fidelidade com recompensas especiais.
              </p>
              
              <Button
                asChild
                size="lg"
                className="btn-primary-luxury text-lg h-16 px-12"
              >
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Heart className="mr-3 h-6 w-6" />
                  Quero Fazer Parte
                </a>
              </Button>
              
              <p className="mt-6 text-sm font-body text-[var(--text-muted)]">
                Sem fidelidade • Cancele quando quiser • Primeiro mês com 50% de desconto
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
