import { Card, CardContent } from "@/components/ui/card";
import { Star, Loader2, Quote, Sparkles } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";

interface Testimonial {
  id: string;
  customerName: string;
  content: string;
  service: string;
  rating: number;
  displayOrder: number;
}

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(true);
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

  const { data: testimonials, isLoading, error } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  if (isLoading) {
    return (
      <section id="testimonials" className="py-32 bg-gradient-to-b from-[var(--neutral-beige-light)] to-white relative z-10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center py-16 gap-4">
            <Loader2 className="h-16 w-16 animate-spin text-[var(--primary-purple)]" />
            <p className="text-lg font-body" style={{ color: 'var(--text-secondary)' }}>
              Carregando depoimentos...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="testimonials" className="py-32 bg-gradient-to-b from-[var(--neutral-beige-light)] to-white relative z-10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center font-body text-lg" style={{ color: '#dc2626' }}>
            Não foi possível carregar os depoimentos. Por favor, tente novamente mais tarde.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-[var(--neutral-beige-light)] to-white relative overflow-hidden z-10"
      style={{ position: 'relative', isolation: 'isolate' }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[var(--primary-purple)] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-[var(--accent-rose-gold)] rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary-purple-ultra-light)] mb-6">
            <Sparkles className="h-4 w-4 text-[var(--primary-purple)]" />
            <span className="text-sm font-body font-semibold tracking-wide uppercase" style={{ color: 'var(--primary-purple)' }}>
              Depoimentos
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-display mb-6" style={{ color: 'var(--primary-purple)' }}>
            Histórias de Transformação
          </h2>
          
          <p className="text-xl font-body max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Veja o que nossas clientes dizem sobre suas experiências no Spaço Bellas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {testimonials?.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`bg-white group relative overflow-hidden transition-all duration-700 hover:shadow-2xl border border-[var(--primary-purple)]/10 shadow-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                borderRadius: '24px'
              }}
            >
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[var(--primary-purple)]/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="h-24 w-24 text-[var(--primary-purple)]" strokeWidth={1} />
              </div>
              
              <CardContent className="p-8 relative z-10">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 transition-all duration-300 ${
                        i < testimonial.rating
                          ? 'fill-[var(--accent-gold)] text-[var(--accent-gold)] scale-110'
                          : 'text-gray-300'
                      }`}
                      strokeWidth={i < testimonial.rating ? 2 : 1}
                    />
                  ))}
                </div>

                <p className="text-base font-body leading-relaxed mb-8 italic min-h-[120px]" style={{ color: 'var(--text-secondary)' }}>
                  "{testimonial.content}"
                </p>

                <div className="pt-6 border-t-2 border-[var(--primary-purple)]/10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--primary-purple)] to-[var(--primary-purple-light)] flex items-center justify-center shadow-lg flex-shrink-0">
                      <span className="text-white font-display text-lg">
                        {testimonial.customerName.split(' ').map(n => n[0]).slice(0, 2).join('')}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-xl leading-tight truncate" style={{ color: 'var(--primary-purple)' }}>
                        {testimonial.customerName}
                      </p>
                      <p className="text-sm font-body mt-1 truncate" style={{ color: 'var(--text-muted)' }}>
                        {testimonial.service}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {testimonials && testimonials.length > 0 && (
          <div className={`flex justify-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Card 
              className="bg-white shadow-xl border border-[var(--primary-purple)]/10 hover:shadow-2xl transition-shadow duration-300"
              style={{ borderRadius: '24px' }}
            >
              <CardContent className="px-12 py-8">
                <div className="flex flex-col sm:flex-row items-center gap-8">
                  <div className="text-center">
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span className="text-6xl font-display leading-none" style={{ color: 'var(--primary-purple)' }}>4.9</span>
                      <span className="text-3xl font-body" style={{ color: 'var(--text-secondary)' }}>/5</span>
                    </div>
                    <div className="flex gap-1 justify-center mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-6 w-6 fill-[var(--accent-gold)] text-[var(--accent-gold)]"
                        />
                      ))}
                    </div>
                    <p className="text-sm font-body" style={{ color: 'var(--text-muted)' }}>
                      Avaliação Média
                    </p>
                  </div>
                  
                  <div className="h-20 w-px bg-gradient-to-b from-transparent via-[var(--primary-purple)]/30 to-transparent hidden sm:block"></div>
                  <div className="h-px w-20 bg-gradient-to-r from-transparent via-[var(--primary-purple)]/30 to-transparent sm:hidden"></div>
                  
                  <div className="text-center">
                    <div className="text-6xl font-display mb-2 leading-none" style={{ color: 'var(--primary-purple)' }}>
                      500+
                    </div>
                    <p className="text-sm font-body" style={{ color: 'var(--text-muted)' }}>
                      Clientes Satisfeitas
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
