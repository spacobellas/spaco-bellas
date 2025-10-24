// src/components/sections/mensal-bellas/HeroVip.tsx
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, ChevronDown } from "lucide-react";
import heroImage from "@assets/generated_images/Luxury_spa_treatment_room_eeed824b.png";

const COLORS = {
  lilacBg: "#F6EDF9",
  gold: "#C7A45C",
  text: "#2F2F2F",
  primary: "#8E5BAE",
};

const CTA_GREEN = "#16A34A"

const WHATSAPP_NUMBER = "5511976820135";
const buildWAUrl = (msg: string, utm?: Record<string, string>) => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const params = new URLSearchParams({ text: msg });
  if (utm) Object.entries(utm).forEach(([k, v]) => params.append(k, v));
  return `${base}?${params.toString()}`;
};

const DEFAULT_TITLE =
  "Toda mulher merece um dia só pra ela — e o seu começa agora.";
const DEFAULT_SUBTITLE =
  "O Mulheres VIP Bellas une beleza, bem-estar e propósito em uma experiência mensal — com economia real, acolhimento e pertencimento.";

type HeroVipProps = {
  title?: string;
  subtitle?: string;
  whatsappMsg?: string;
};

export function HeroVip({
  title = DEFAULT_TITLE,
  subtitle = DEFAULT_SUBTITLE,
  whatsappMsg = "Olá! Quero conhecer o Programa Mulheres VIP Bellas e ver os planos.",
}: HeroVipProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      aria-labelledby="hero-vip-title"
      className="relative isolate overflow-hidden"
      style={{ backgroundColor: COLORS.lilacBg }}
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt=""
          className="h-full w-full object-cover object-center opacity-30"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(246,237,249,0.9) 0%, rgba(246,237,249,0.7) 40%, rgba(246,237,249,0.95) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: COLORS.gold, opacity: 0.15 }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex w-full items-center justify-center pt-8">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs"
            style={{
              backgroundColor: "#FAF8FB",
              color: COLORS.primary,
              border: `1px solid ${COLORS.primary}20`,
            }}
          >
            <Sparkles size={14} />
            Luxo acessível • Beleza completa • Acolhimento emocional
          </span>
        </div>

        <div
          className={[
            "mx-auto max-w-3xl py-12 md:py-20 text-center transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          ].join(" ")}
        >
          <h1
            id="hero-vip-title"
            className="font-serif leading-tight"
            style={{
              color: COLORS.gold,
              fontSize: "clamp(1.75rem, 5vw, 3rem)",
            }}
          >
            {title}
          </h1>

          <p
            className="mt-4 text-base md:text-lg"
            style={{ color: COLORS.text, opacity: 0.9 }}
          >
            {subtitle}
          </p>

          <a
            href={buildWAUrl(whatsappMsg, { utm_source: "site", utm_medium: "vip", utm_content: "hero_cta" })}
            className="mt-7 inline-flex w-full max-w-xl items-center justify-center rounded-lg px-6 py-4 text-base font-semibold shadow transition focus-visible:ring-2"
            style={{ backgroundColor: CTA_GREEN, color: "#FFFFFF" }}
            aria-label="Quero viver o meu dia de estrela"
          >
            Quero viver o meu dia de estrela
          </a>

          <p className="mt-4 text-sm opacity-80" style={{ color: COLORS.text }}>
            Um único lugar para fazer tudo com carinho e sair se sentindo você por inteiro.
          </p>
        </div>

        <div className="pb-8 md:pb-12">
          <div className="flex items-center justify-center">
            <a
              href="#planos"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border"
              style={{
                borderColor: `${COLORS.primary}40`,
                color: COLORS.primary,
              }}
              aria-label="Rolar para ver os planos"
            >
              <ChevronDown />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
