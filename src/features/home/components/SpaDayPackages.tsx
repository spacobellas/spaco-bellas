import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Check,
  Sparkles,
  ArrowRight,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Plus,
} from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";
import { useLocation } from "wouter";
import type { SpaPackage } from "@/data/spa-packages";

const WHATSAPP_NUMBER = "5511976820135";

interface SpaDaySectionProps {
  packages: SpaPackage[];
}

export function SpaDayPackages({ packages }: { packages: SpaPackage[] }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [scrollStartX, setScrollStartX] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [, navigate] = useLocation();

  // ── Fade-in on viewport entry ─────────────────────────────────────────
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ── Check if carousel requires scrolling ──────────────────────
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const checkScrollable = () => {
      setIsScrollable(track.scrollWidth > track.clientWidth);
    };

    checkScrollable();
    const observer = new ResizeObserver(checkScrollable);
    observer.observe(track);

    return () => observer.disconnect();
  }, [packages.length]);

  // ── Sync active dot with real scroll position ───────────────────────────────
  const syncIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.firstElementChild as HTMLElement | null;
    if (!first) return;
    const cardWidth = first.clientWidth;
    const gap = 24; // gap-6 = 1.5rem = 24px
    setActiveIndex(Math.round(track.scrollLeft / (cardWidth + gap)));
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", syncIndex, { passive: true });
    return () => track.removeEventListener("scroll", syncIndex);
  }, [syncIndex]);

  // ── Programmatic scroll to index ────────────────────────────────────
  const scrollTo = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;
      const clamped = Math.max(0, Math.min(index, packages.length - 1));
      const first = track.firstElementChild as HTMLElement | null;
      if (!first) return;
      const cardWidth = first.clientWidth;
      const gap = 24;
      track.scrollTo({ left: clamped * (cardWidth + gap), behavior: "smooth" });
      setActiveIndex(clamped);
    },
    [packages.length],
  );

  const prev = () => scrollTo(activeIndex - 1);
  const next = () => scrollTo(activeIndex + 1);

  // ── Desktop drag-to-scroll ─────────────────────────────────────────────
  const onMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    if (trackRef.current.scrollWidth <= trackRef.current.clientWidth) return;

    setIsDragging(true);
    setDragStartX(e.clientX);
    setScrollStartX(trackRef.current.scrollLeft);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    trackRef.current.scrollLeft = scrollStartX - (e.clientX - dragStartX);
  };
  const onMouseUp = () => setIsDragging(false);

  // ── CTA Action ───────────────────────────────────────────────────────────
  const handleCtaClick = (pkg: SpaPackage) => {
    if (pkg.pageUrl) {
      navigate(pkg.pageUrl);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const encoded = encodeURIComponent(pkg.whatsappText);
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`,
        "_blank",
        "noopener,noreferrer",
      );
    }
  };

  // ── Logic to center and hide controls if items fit ─────
  let carouselControlsClass = "flex";
  let trackJustifyClass = "";

  if (packages.length === 1) {
    carouselControlsClass = "hidden";
    trackJustifyClass = "justify-center";
  } else if (packages.length === 2) {
    carouselControlsClass = "flex lg:hidden";
    trackJustifyClass = "lg:justify-center";
  } else if (packages.length === 3) {
    carouselControlsClass = "flex xl:hidden";
    trackJustifyClass = "xl:justify-center";
  }

  return (
    <section
      id="spa-day"
      ref={sectionRef}
      className="relative overflow-hidden py-16 md:py-24"
      style={{ backgroundColor: "#faebff" }}
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-purple-300/25 blur-3xl" />
        <div className="absolute -right-32 -bottom-32 h-80 w-80 rounded-full bg-pink-300/25 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-200/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-purple-700">
            <Sparkles className="h-4 w-4" />
            Pacotes especiais
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Escolha o seu dia perfeito
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Cada experiência foi pensada para transformar seu momento em algo
            inesquecível
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left button */}
          <button
            onClick={prev}
            disabled={activeIndex === 0}
            aria-label="Pacote anterior"
            className={`
              ${carouselControlsClass}
              absolute -left-3 top-1/2 z-20 -translate-y-1/2
              h-11 w-11 items-center justify-center
              rounded-full border border-purple-200 bg-white text-purple-600 shadow-lg
              transition-all duration-200
              hover:bg-purple-600 hover:text-white hover:shadow-xl hover:shadow-purple-300/40
              disabled:pointer-events-none disabled:opacity-25
              sm:-left-5 lg:-left-8
            `}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Right button */}
          <button
            onClick={next}
            disabled={activeIndex === packages.length - 1}
            aria-label="Próximo pacote"
            className={`
              ${carouselControlsClass}
              absolute -right-3 top-1/2 z-20 -translate-y-1/2
              h-11 w-11 items-center justify-center
              rounded-full border border-purple-200 bg-white text-purple-600 shadow-lg
              transition-all duration-200
              hover:bg-purple-600 hover:text-white hover:shadow-xl hover:shadow-purple-300/40
              disabled:pointer-events-none disabled:opacity-25
              sm:-right-5 lg:-right-8
            `}
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Track */}
          <div
            ref={trackRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            className={`
              flex gap-6 overflow-x-auto scroll-smooth
              snap-x snap-mandatory items-stretch
              px-1 pb-6 pt-4 ${trackJustifyClass}
              ${
                isScrollable
                  ? isDragging
                    ? "cursor-grabbing select-none"
                    : "cursor-grab"
                  : ""
              }
            `}
          >
            {packages.map((pkg, index) => {
              const IconComponent = pkg.icon;
              const isNav = !!pkg.pageUrl;
              const isActive = index === activeIndex;

              return (
                <div
                  key={pkg.id}
                  className={`
                    snap-center shrink-0 flex
                    w-[82vw] sm:w-[340px] md:w-[360px] lg:w-[380px]
                    transition-all duration-500
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                  `}
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <Card
                    className={`
                      group relative flex w-full flex-col overflow-hidden rounded-3xl border-0 bg-white
                      transition-all duration-300
                      ${
                        isActive
                          ? "shadow-2xl shadow-purple-200/60 scale-[1.02]"
                          : "shadow-md hover:shadow-xl hover:scale-[1.01]"
                      }
                      ${
                        pkg.featured
                          ? "ring-2 ring-purple-500 ring-offset-2 ring-offset-[#faebff]"
                          : ""
                      }
                    `}
                  >
                    {/* Top color strip */}
                    <div
                      className={`h-2 w-full shrink-0 bg-gradient-to-r ${pkg.color}`}
                    />

                    <CardContent className="flex flex-col flex-1 gap-5 p-6 sm:p-8">
                      {/* Icon and Badge */}
                      <div className="flex items-start justify-between gap-3">
                        <div
                          className={`
                            flex h-12 w-12 shrink-0 items-center justify-center
                            rounded-2xl bg-gradient-to-br ${pkg.color} shadow-lg
                            transition-transform duration-300 group-hover:scale-110
                          `}
                        >
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        {pkg.badge && (
                          <span
                            className={`${pkg.badgeColor} shrink-0 rounded-full px-3 py-1 text-xs font-bold text-white shadow-sm`}
                          >
                            {pkg.badge}
                          </span>
                        )}
                      </div>

                      {/* Title, duration, and description */}
                      <div className="space-y-1">
                        <h3 className="text-lg font-bold leading-snug text-gray-900 sm:text-xl">
                          {pkg.tier}
                        </h3>
                        <p className="text-sm font-semibold text-purple-600">
                          {pkg.duration}
                        </p>
                        <p className="text-sm leading-relaxed text-gray-500">
                          {pkg.description}
                        </p>
                      </div>

                      {/* Pricing */}
                      <div className="rounded-2xl bg-gray-50 px-4 py-4">
                        <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                          {pkg.installment}
                        </p>
                        <p className="mt-0.5 text-xs text-gray-400">
                          ou{" "}
                          <span className="font-medium text-gray-500">
                            {pkg.cash}
                          </span>
                        </p>
                      </div>

                      {/* Features */}
                      <ul className="space-y-2.5 mb-6">
                        {pkg.features.map((feature, idx) => {
                          // Visual cue: if feature starts with "Tudo do", use a "Plus" icon instead of "Check" for emphasis.
                          const isIncludes = feature
                            .toLowerCase()
                            .startsWith("tudo do");

                          return (
                            <li key={idx} className="flex items-start gap-2.5">
                              {isIncludes ? (
                                <Plus className="mt-0.5 h-4 w-4 shrink-0 text-purple-600 font-bold" />
                              ) : (
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                              )}
                              <span
                                className={`text-sm leading-relaxed ${isIncludes ? "font-semibold text-purple-700" : "text-gray-700"}`}
                              >
                                {feature}
                              </span>
                            </li>
                          );
                        })}
                      </ul>

                      {/* CTA pushed to bottom by mt-auto */}
                      <Button
                        size="lg"
                        className={`
                          mt-auto w-full rounded-2xl font-semibold shadow-md transition-all duration-300
                          ${
                            isNav
                              ? "bg-purple-600 text-white hover:bg-purple-700"
                              : "bg-emerald-500 text-white hover:bg-emerald-600"
                          }
                        `}
                        onClick={() => handleCtaClick(pkg)}
                      >
                        {isNav ? (
                          <>
                            {pkg.ctaLabel}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        ) : (
                          <>
                            <MessageCircle className="mr-2 h-4 w-4" />
                            {pkg.ctaLabel}
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Dots */}
          {packages.length > 1 && (
            <div
              className={`mt-3 items-center justify-center gap-2 ${carouselControlsClass}`}
            >
              {packages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  aria-label={`Ir para o pacote ${i + 1}`}
                  className={`
                    rounded-full transition-all duration-300
                    ${
                      i === activeIndex
                        ? "h-2.5 w-8 bg-purple-600"
                        : "h-2.5 w-2.5 bg-purple-200 hover:bg-purple-400"
                    }
                  `}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mx-auto mt-12 max-w-2xl text-center text-gray-500">
          <p className="flex flex-wrap items-center justify-center gap-1.5 text-sm sm:text-base">
            <Sparkles className="h-4 w-4 text-purple-500" />
            Todos os pacotes incluem roupão personalizado e ambiente exclusivo.
          </p>
          <p className="mt-1 text-xs text-gray-400 sm:text-sm">
            Roupão disponível para uso durante a experiência (não incluso para
            levar). Agendamento via WhatsApp 💜
          </p>
        </div>
      </div>
    </section>
  );
}
