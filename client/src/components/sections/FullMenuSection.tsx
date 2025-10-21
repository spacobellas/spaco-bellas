import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Loader2, Clock, Sparkles, ChevronDown } from "lucide-react";

const WHATSAPP_NUMBER = "5511976820135";

interface ServiceWithCategory {
  id: string;
  slug: string;
  name: string;
  displayOrder: number;
  services: {
    id: string;
    name: string;
    price: string;
    maintenancePrice: string | null;
    description: string | null;
    duration: string | null;
  }[];
}

export function FullMenuSection() {
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { data: serviceCategories, isLoading, error } = useQuery<ServiceWithCategory[]>({
    queryKey: ["/api/services/grouped"],
  });

  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

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

  useEffect(() => {
    if (serviceCategories && serviceCategories.length > 0) {
      setExpandedCategories(new Set([serviceCategories[0].id]));
    }
  }, [serviceCategories]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  if (isLoading) {
    return (
      <section id="menu" className="py-32 bg-[var(--neutral-beige-light)] relative z-10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center py-20 gap-6">
            <Loader2 className="h-16 w-16 animate-spin text-[var(--primary-purple)]" />
            <p className="text-lg font-body" style={{ color: 'var(--text-secondary)' }}>
              Carregando catálogo de serviços...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="menu" className="py-32 bg-[var(--neutral-beige-light)] relative z-10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center font-body text-lg" style={{ color: '#dc2626' }}>
            Erro ao carregar serviços. Por favor, tente novamente mais tarde.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="menu" 
      ref={sectionRef}
      className="py-32 bg-[var(--neutral-beige-light)] relative overflow-hidden z-10"
      style={{ position: 'relative', isolation: 'isolate' }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[var(--primary-purple)] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[var(--accent-gold)] rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary-purple-ultra-light)] mb-6">
            <Sparkles className="h-4 w-4 text-[var(--primary-purple)]" />
            <span className="text-sm font-body font-semibold tracking-wide uppercase" style={{ color: 'var(--primary-purple)' }}>
              Nossos Serviços
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-display mb-6" style={{ color: 'var(--primary-purple)' }}>
            Catálogo Completo
          </h2>
          
          <p className="text-xl font-body max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Explore nossa ampla variedade de tratamentos e serviços de bem-estar
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          {serviceCategories?.map((category, idx) => (
            <Card 
              key={category.id} 
              className={`overflow-hidden transition-all duration-700 bg-white shadow-lg hover:shadow-2xl border border-[var(--primary-purple)]/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                transitionDelay: `${idx * 100}ms`,
                borderRadius: '24px'
              }}
            >
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full text-left transition-all duration-300 hover:bg-[var(--primary-purple-ultra-light)]/50"
              >
                <div className="p-8 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary-purple)] to-[var(--primary-purple-light)] flex items-center justify-center shadow-xl flex-shrink-0">
                      <span className="text-white font-display text-2xl">
                        {idx + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-display mb-1" style={{ color: 'var(--primary-purple)' }}>
                        {category.name}
                      </h3>
                      <p className="text-sm font-body" style={{ color: 'var(--text-muted)' }}>
                        {category.services.length} {category.services.length === 1 ? 'serviço disponível' : 'serviços disponíveis'}
                      </p>
                    </div>
                  </div>
                  <div className={`transition-transform duration-300 flex-shrink-0 ${expandedCategories.has(category.id) ? 'rotate-180' : ''}`}>
                    <ChevronDown className="h-8 w-8 text-[var(--primary-purple)]" />
                  </div>
                </div>
              </button>

              <div 
                className={`transition-all duration-500 ease-in-out ${
                  expandedCategories.has(category.id) 
                    ? 'max-h-[10000px] opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
                style={{ 
                  overflow: expandedCategories.has(category.id) ? 'visible' : 'hidden' 
                }}
              >
                <div className="px-8 pb-8">
                  <div className="h-px bg-gradient-to-r from-transparent via-[var(--primary-purple)]/20 to-transparent mb-6"></div>
                  
                  <div className="space-y-4">
                    {category.services.map((service) => (
                      <div 
                        key={service.id}
                        className="group p-6 rounded-2xl bg-gradient-to-r from-white to-[var(--neutral-cream)] hover:from-[var(--primary-purple-ultra-light)] hover:to-[var(--neutral-beige-light)] transition-all duration-300 border border-transparent hover:border-[var(--primary-purple)]/20 shadow-sm hover:shadow-md"
                      >
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xl font-body font-semibold mb-2 group-hover:text-[var(--primary-purple)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                              {service.name}
                            </h4>
                            {service.description && (
                              <p className="text-sm font-body mb-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                {service.description}
                              </p>
                            )}
                            {service.duration && (
                              <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                                <Clock className="h-4 w-4 flex-shrink-0" />
                                <span className="font-body">{service.duration}</span>
                              </div>
                            )}
                          </div>
                          
                          <div className="flex flex-col items-end gap-3 lg:min-w-[240px] flex-shrink-0">
                            <div className="text-right">
                              <div className="flex items-baseline gap-1 justify-end">
                                <span className="text-lg font-body" style={{ color: 'var(--text-secondary)' }}>R$</span>
                                <span className="text-4xl font-display leading-none" style={{ color: 'var(--primary-purple)' }}>
                                  {service.price}
                                </span>
                              </div>
                              {service.maintenancePrice && (
                                <p className="text-sm font-body mt-1" style={{ color: 'var(--text-muted)' }}>
                                  Manutenção: R$ {service.maintenancePrice}
                                </p>
                              )}
                            </div>
                            <Button
                              asChild
                              className="btn-outline-luxury w-full lg:w-auto"
                            >
                              <a
                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                                  `Olá! Tenho interesse no serviço: ${service.name}. Gostaria de agendar.`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Agendar
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
