import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Sparkles, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

import depoimento01 from "@/assets/images/testimonials/depoimento-01.png";
import depoimento02 from "@/assets/images/testimonials/depoimento-02.png";
import depoimento03 from "@/assets/images/testimonials/depoimento-03.png";
import depoimento04 from "@/assets/images/testimonials/depoimento-04.png";
import depoimento05 from "@/assets/images/testimonials/depoimento-05.png";
import depoimento06 from "@/assets/images/testimonials/depoimento-06.png";
import depoimento07 from "@/assets/images/testimonials/depoimento-07.png";
import depoimento08 from "@/assets/images/testimonials/depoimento-08.png";

interface Testimonial {
  id: string;
  imageSrc: string;
  imageAlt: string;
}

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  { id: "1", imageSrc: depoimento01, imageAlt: "Testimonial screenshot 1" },
  { id: "2", imageSrc: depoimento02, imageAlt: "Testimonial screenshot 2" },
  { id: "3", imageSrc: depoimento03, imageAlt: "Testimonial screenshot 3" },
  { id: "4", imageSrc: depoimento04, imageAlt: "Testimonial screenshot 4" },
  { id: "5", imageSrc: depoimento05, imageAlt: "Testimonial screenshot 5" },
  { id: "6", imageSrc: depoimento06, imageAlt: "Testimonial screenshot 6" },
  { id: "7", imageSrc: depoimento07, imageAlt: "Testimonial screenshot 7" },
  { id: "8", imageSrc: depoimento08, imageAlt: "Testimonial screenshot 8" },
];

interface TestimonialsProps {
  id?: string;
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
}

/**
 * A generic, reusable Testimonials section with a carousel.
 * Displays screenshots of customer feedback.
 */
export function Testimonials({
  id = "testimonials",
  title = "Sorrisos que contam a nossa história",
  subtitle = "Registros reais — com a mesma energia e carinho do Spa Day",
  testimonials = DEFAULT_TESTIMONIALS,
}: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, testimonials.length]);

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

  const getVisible = () => {
    const count = isMobile ? 1 : 3;
    const visible: Testimonial[] = [];
    for (let i = 0; i < count; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section
      id={id}
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* Subtle decorative elements */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-purple-300/10 blur-3xl" />
        <div className="absolute -right-24 bottom-8 h-72 w-72 rounded-full bg-pink-300/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-1 text-sm font-medium uppercase tracking-[0.2em] text-purple-600 sm:text-base">
            <Sparkles className="h-4 w-4" />
            Depoimentos reais
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-base text-gray-600 sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Carousel */}
        <div className="mt-12 flex items-center justify-between gap-2 sm:gap-3 lg:justify-center lg:gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            aria-label="Anterior"
            className="rounded-full border-purple-200 bg-white text-purple-600 shadow-sm hover:bg-purple-50 shrink-0"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="flex-1 max-w-6xl overflow-hidden">
            <div className="grid grid-cols-1 place-items-center gap-6 lg:grid-cols-3 lg:gap-8">
              {getVisible().map((item) => (
                <Card
                  key={item.id}
                  className="group relative w-full overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-purple-200 hover:shadow-2xl"
                >
                  <div className="relative w-full overflow-hidden bg-white">
                    <div className="block pt-[56.25%]" /> {/* 16:9 aspect ratio */}
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      className="absolute inset-0 h-full w-full object-contain"
                      draggable={false}
                    />
                  </div>

                  <div className="pointer-events-none absolute right-4 top-4">
                    <div className="rounded-full bg-purple-100/80 p-2 backdrop-blur">
                      <Quote className="h-5 w-5 text-purple-600" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            aria-label="Próximo"
            className="rounded-full border-purple-200 bg-white text-purple-600 shadow-sm hover:bg-purple-50 shrink-0"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation dots */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Ir para slide ${index + 1}`}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-10 bg-purple-600"
                  : "w-3 bg-purple-300 hover:bg-purple-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
