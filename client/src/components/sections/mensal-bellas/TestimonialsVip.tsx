// src/components/sections/mensal-bellas/TestimonialsVip.tsx
import { useEffect, useRef, useState } from "react";
import { Star, Quote, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

// Paleta do documento
const COLORS = {
  lilacBg: "#F6EDF9",
  gold: "#C7A45C",
  text: "#2F2F2F",
  primary: "#8E5BAE",
};

// Tipagem
type Testimonial = {
  id: string;
  customerName: string;
  content: string;
  tag: "Transformação" | "Economia" | "Pertencimento" | "Humanização";
  rating: number;
  displayOrder: number;
};

// Depoimentos seguindo os 4 pilares do roteiro (transformação, economia, pertencimento, humanização)
const testimonials: Testimonial[] = [
  {
    id: "t1",
    customerName: "Camila, 32",
    content:
      "Eu achava que spa era luxo. Hoje vejo que é necessidade. Eu cheguei cansada e saí me sentindo viva de novo — é muito mais do que beleza.",
    tag: "Transformação",
    rating: 5,
    displayOrder: 1,
  },
  {
    id: "t2",
    customerName: "Patrícia, 41",
    content:
      "Eu gastava mais de R$700 por mês com tudo separado. Aqui pago R$347 no essencial, faço tudo no mesmo lugar e ainda vivo uma experiência completa.",
    tag: "Economia",
    rating: 5,
    displayOrder: 2,
  },
  {
    id: "t3",
    customerName: "Mariana, 28",
    content:
      "O grupo das Mulheres de Alto Valor me deu amigas e novas ideias. Me sinto parte de algo maior, acolhida e inspirada a crescer.",
    tag: "Pertencimento",
    rating: 5,
    displayOrder: 3,
  },
  {
    id: "t4",
    customerName: "Beatriz, 36",
    content:
      "A equipe me acolheu como família. Fui ouvida, respeitada e cuidada em cada detalhe — até me emocionei no Espaço Escuta.",
    tag: "Humanização",
    rating: 5,
    displayOrder: 4,
  },
  {
    id: "t5",
    customerName: "Fernanda, 34",
    content:
      "Saí linda por fora e leve por dentro. Agora todo mês eu reservo esse momento só meu — virou um compromisso com a minha paz.",
    tag: "Transformação",
    rating: 5,
    displayOrder: 5,
  },
  {
    id: "t6",
    customerName: "Rafaela, 39",
    content:
      "Economizo, ganho tempo e sou tratada com carinho. Não é ostentação — é ter um dia pra mim, com tudo pronto e sem correria.",
    tag: "Economia",
    rating: 5,
    displayOrder: 6,
  },
];

// Utilitário: iniciais para avatar
const initials = (name: string) =>
  name
    .replace(/,.*/, "")
    .trim()
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

export function TestimonialsVip() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const autoPlayRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  // Responsivo: detectar mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Animação de entrada via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Autoplay com pausa ao interagir
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = window.setInterval(() => {
        setCurrentIndex((p) => (p + 1) % testimonials.length);
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) window.clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((p) => (p + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((p) => (p - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (i: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(i);
  };

  const visibleCount = isMobile ? 1 : 3;
  const visibleTestimonials = Array.from({ length: visibleCount }).map((_, i) => {
    const idx = (currentIndex + i) % testimonials.length;
    return testimonials[idx];
  });

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "ArrowLeft") goToPrevious();
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 50) goToPrevious();
    if (dx < -50) goToNext();
    touchStartX.current = null;
  };

  return (
    <section
      ref={sectionRef}
      aria-labelledby="testimonials-title"
      className="py-10 lg:py-16"
      style={{ backgroundColor: COLORS.lilacBg, color: COLORS.text }}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="container mx-auto px-4">
        {/* Chip */}
        <div className="flex w-full items-center justify-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs"
            style={{
              backgroundColor: "#FAF8FB",
              color: COLORS.primary,
              border: `1px solid ${COLORS.primary}20`,
            }}
          >
            <Sparkles size={14} />
            Prova social real
          </span>
        </div>

        {/* Header */}
        <header
          className={[
            "mx-auto mt-4 max-w-3xl text-center transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          ].join(" ")}
        >
          <h2
            id="testimonials-title"
            className="text-2xl md:text-3xl font-semibold"
            style={{ color: COLORS.gold }}
          >
            Elas já vivem o Mulheres VIP Bellas
          </h2>
          <p className="mt-2 opacity-90">
            Micro-histórias que mostram transformação, economia e pertencimento — do jeito que a mulher real decide.
          </p>
        </header>

        {/* Navegação desktop (setas laterais) */}
        <div className="relative mt-6">
          {!isMobile && (
            <>
              <button
                onClick={goToPrevious}
                aria-label="Depoimento anterior"
                className="absolute -left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-white p-2 shadow hover:bg-[#FAF8FB] focus-visible:ring-2 focus-visible:ring-[#8E5BAE]"
                style={{ borderColor: `${COLORS.primary}40`, color: COLORS.primary }}
              >
                <ChevronLeft />
              </button>
              <button
                onClick={goToNext}
                aria-label="Próximo depoimento"
                className="absolute -right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-white p-2 shadow hover:bg-[#FAF8FB] focus-visible:ring-2 focus-visible:ring-[#8E5BAE]"
                style={{ borderColor: `${COLORS.primary}40`, color: COLORS.primary }}
              >
                <ChevronRight />
              </button>
            </>
          )}

          {/* Grid de cards (1 no mobile, 3 no desktop) */}
          <div className="grid gap-6 lg:grid-cols-3">
            {visibleTestimonials.map((t) => (
              <article
                key={t.id}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow transition hover:shadow-md border border-transparent"
              >
                {/* Ícone de citação decorativo */}
                <div className="absolute -top-3 -left-2 opacity-10" aria-hidden>
                  <Quote size={80} />
                </div>

                {/* Conteúdo */}
                <div className="relative">
                  {/* Estrelas */}
                  <div className="mb-3 flex items-center gap-0.5" aria-label={`${t.rating} de 5`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < t.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                        aria-hidden
                      />
                    ))}
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    “{t.content}”
                  </p>

                  {/* Cliente */}
                  <div className="mt-5 flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full font-semibold"
                      style={{ backgroundColor: COLORS.lilacBg, color: COLORS.primary }}
                      aria-hidden
                    >
                      {initials(t.customerName)}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{t.customerName}</p>
                      <p className="text-xs opacity-70">{t.tag}</p>
                    </div>
                  </div>
                </div>

                {/* Hover gradient */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-16 opacity-0 transition-opacity group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(203,164,222,0.15) 60%, rgba(203,164,222,0.3) 100%)",
                  }}
                  aria-hidden
                />
              </article>
            ))}
          </div>
        </div>

        {/* Navegação mobile (setas abaixo) */}
        {isMobile && (
          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              onClick={goToPrevious}
              aria-label="Depoimento anterior"
              className="rounded-full border bg-white p-2 shadow hover:bg-[#FAF8FB] focus-visible:ring-2 focus-visible:ring-[#8E5BAE]"
              style={{ borderColor: `${COLORS.primary}40`, color: COLORS.primary }}
            >
              <ChevronLeft />
            </button>
            <button
              onClick={goToNext}
              aria-label="Próximo depoimento"
              className="rounded-full border bg-white p-2 shadow hover:bg-[#FAF8FB] focus-visible:ring-2 focus-visible:ring-[#8E5BAE]"
              style={{ borderColor: `${COLORS.primary}40`, color: COLORS.primary }}
            >
              <ChevronRight />
            </button>
          </div>
        )}

        {/* Dots */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => {
            const active = i === currentIndex;
            return (
              <button
                key={i}
                aria-label={`Ir para depoimento ${i + 1}`}
                onClick={() => goToSlide(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  active ? "w-8" : "w-2 hover:w-4"
                }`}
                style={{ backgroundColor: active ? COLORS.primary : `${COLORS.primary}4D` }}
              />
            );
          })}
        </div>

        {/* Métricas de prova social (mesmo padrão do seu componente atual) */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-white p-4 text-center shadow">
            <p className="text-2xl font-bold" style={{ color: COLORS.primary }}>
              4.9/5
            </p>
            <p className="text-xs opacity-70">Avaliação média</p>
          </div>
          <div className="rounded-2xl bg-white p-4 text-center shadow">
            <p className="text-2xl font-bold" style={{ color: COLORS.primary }}>
              2.500+
            </p>
            <p className="text-xs opacity-70">Clientes satisfeitas</p>
          </div>
          <div className="rounded-2xl bg-white p-4 text-center shadow">
            <p className="text-2xl font-bold" style={{ color: COLORS.primary }}>
              100%
            </p>
            <p className="text-xs opacity-70">Acolhimento e respeito</p>
          </div>
          <div className="rounded-2xl bg-white p-4 text-center shadow">
            <p className="text-2xl font-bold" style={{ color: COLORS.primary }}>
              VIP
            </p>
            <p className="text-xs opacity-70">Experiência mensal completa</p>
          </div>
        </div>
      </div>
    </section>
  );
}
