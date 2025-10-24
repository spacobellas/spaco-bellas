import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

// Depoimentos reais focados na experiência emocional do Spa Day das Celebridades
const testimonials = [
  {
    id: "1",
    customerName: "Mariana Silva",
    content: "Nunca tinha me sentido tão especial na vida. Entrei cansada e saí outra mulher. A massagem, a banheira com aromas, o roupão personalizado... cada detalhe feito com carinho. Foi muito mais que relaxamento, foi um momento de reconexão comigo mesma.",
    service: "Dia de Rainha",
    rating: 5,
    displayOrder: 1,
  },
  {
    id: "2",
    customerName: "Juliana Costa",
    content: "A experiência no Spa das Celebridades superou tudo que eu esperava. O drink com mensagem, as flores, a música... me senti literalmente uma celebridade. Chorei de emoção quando recebi a mensagem surpresa da minha família. Valeu cada segundo.",
    service: "Dia de Diva",
    rating: 5,
    displayOrder: 2,
  },
  {
    id: "3",
    customerName: "Fernanda Oliveira",
    content: "Foi o melhor presente que já dei pra mim mesma. O Dia de Estrela é perfeito para quem nunca viveu uma experiência assim. O ambiente, a energia, o cuidado... saí de lá renovada e com vontade de voltar todo mês!",
    service: "Dia de Estrela",
    rating: 5,
    displayOrder: 3,
  },
  {
    id: "4",
    customerName: "Patricia Santos",
    content: "Descobri o que é verdadeiro autocuidado. Não é só sobre beleza, é sobre sentimento. Desde o momento que cheguei até a despedida, me senti acolhida, ouvida e cuidada. O Spaço Bellas entende o que uma mulher precisa.",
    service: "Dia de Rainha",
    rating: 5,
    displayOrder: 4,
  },
  {
    id: "5",
    customerName: "Camila Rodrigues",
    content: "A experiência completa no Dia de Diva foi inesquecível! O ensaio fotográfico, a maquiagem, o figurino... me senti no meu próprio filme. Virei cliente VIP porque não quero mais viver sem esse cuidado.",
    service: "Dia de Diva",
    rating: 5,
    displayOrder: 5,
  },
  {
    id: "6",
    customerName: "Beatriz Almeida",
    content: "Toda mulher precisa viver isso pelo menos uma vez na vida. É um investimento em você, na sua energia, na sua autoestima. Saí de lá me sentindo poderosa e linda. O certificado 'Eu fui Celebridade Bellas' está na minha parede 💜",
    service: "Dia de Diva",
    rating: 5,
    displayOrder: 6,
  },
  {
    id: "7",
    customerName: "Amanda Ferreira",
    content: "O ambiente instagramável é lindo, mas o que realmente marca é o carinho. A equipe faz você se sentir única. O spa dos pés, a banheira, a massagem relaxante... tudo perfeito. Já indiquei pra todas as minhas amigas!",
    service: "Dia de Estrela",
    rating: 5,
    displayOrder: 7,
  },
  {
    id: "8",
    customerName: "Rafaela Lima",
    content: "Quando você vive o Spa das Celebridades, entende que luxo de verdade não é ostentação — é ter tempo pra si mesma. Foi um dia que eu não conto, eu sinto. Obrigada por essa experiência transformadora.",
    service: "Dia de Rainha",
    rating: 5,
    displayOrder: 8,
  },
];

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  // Get visible testimonials (1 on mobile, 3 on desktop)
  const getVisibleTestimonials = () => {
    const visible = [];
    const count = isMobile ? 1 : 3;
    for (let i = 0; i < count; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-gradient-to-b overflow-hidden"
      style={{backgroundColor: "#F6EDF9"}}
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
              Depoimentos
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
            Histórias de Transformação
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Veja o que nossas clientes dizem sobre o Spa Day das Celebridades e como essa experiência transformou seus dias
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation buttons - Mobile: Inside cards, Desktop: Outside */}
          <div className="md:flex hidden absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between pointer-events-none z-10">
            <Button
              onClick={goToPrevious}
              variant="outline"
              size="icon"
              className="pointer-events-auto -ml-4 bg-white/90 hover:bg-white shadow-xl border-2 border-purple-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              onClick={goToNext}
              variant="outline"
              size="icon"
              className="pointer-events-auto -mr-4 bg-white/90 hover:bg-white shadow-xl border-2 border-purple-100"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Testimonials grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className={`relative overflow-hidden border-2 border-purple-100 hover:border-[var(--primary-purple)] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 sm:p-8 relative z-10">
                  {/* Glass effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Quote icon */}
                  <Quote className="w-8 sm:w-10 h-8 sm:h-10 text-[var(--primary-purple)]/20 mb-4" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 sm:w-4 sm:h-4 fill-[var(--primary-purple)] text-[var(--primary-purple)]"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 relative z-10 min-h-[160px] sm:min-h-[180px]">
                    "{testimonial.content}"
                  </p>

                  {/* Customer info */}
                  <div className="flex items-center gap-3 sm:gap-4 relative z-10">
                    {/* Avatar */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[var(--primary-purple)] to-pink-500 flex items-center justify-center text-white font-bold text-sm sm:text-base flex-shrink-0">
                      {testimonial.customerName
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>

                    <div>
                      <div className="font-bold text-gray-900 text-sm sm:text-base">
                        {testimonial.customerName}
                      </div>
                      <div className="text-xs sm:text-sm text-[var(--primary-purple)]">
                        {testimonial.service}
                      </div>
                    </div>
                  </div>

                  {/* Hover gradient */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--primary-purple)]/30 rounded-lg transition-colors duration-300 pointer-events-none" />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile navigation buttons */}
          <div className="flex md:hidden justify-center gap-4 mb-8">
            <Button
              onClick={goToPrevious}
              variant="outline"
              size="icon"
              className="bg-white shadow-lg border-2 border-purple-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              onClick={goToNext}
              variant="outline"
              size="icon"
              className="bg-white shadow-lg border-2 border-purple-100"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mb-8 md:mb-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-[var(--primary-purple)]"
                    : "w-2 bg-[var(--primary-purple)]/30 hover:bg-[var(--primary-purple)]/50"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto px-4">
          <Card className="p-6 sm:p-8 text-center border-2 border-purple-100 bg-gradient-to-br from-white to-purple-50/30">
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 sm:w-6 sm:h-6 fill-[var(--primary-purple)] text-[var(--primary-purple)]"
                />
              ))}
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              4.9<span className="text-xl sm:text-2xl text-gray-600">/5</span>
            </div>
            <div className="text-sm sm:text-base text-gray-600">Avaliação Média</div>
          </Card>

          <Card className="p-6 sm:p-8 text-center border-2 border-purple-100 bg-gradient-to-br from-white to-pink-50/30">
            <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--primary-purple)] mx-auto mb-4" />
            <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">2.500+</div>
            <div className="text-sm sm:text-base text-gray-600">Clientes Satisfeitas</div>
          </Card>
        </div>
      </div>
    </section>
  );
}
