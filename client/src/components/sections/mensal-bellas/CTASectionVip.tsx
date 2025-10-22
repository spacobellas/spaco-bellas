// src/components/sections/mensal-bellas/CTASectionVip.tsx
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock3,
  Heart,
  Bath,
} from "lucide-react";

// Paleta do documento
const COLORS = {
  lilacBg: "#F6EDF9",
  gold: "#C7A45C",
  text: "#2F2F2F",
  primary: "#8E5BAE",
};

// Padrão adotado no projeto (mesmo modelo do Hero/CTA original)
const WHATSAPP_NUMBER = "5511976820135";
const buildWAUrl = (msg: string, utm?: Record<string, string>) => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const params = new URLSearchParams({ text: msg });
  if (utm) Object.entries(utm).forEach(([k, v]) => params.append(k, v));
  return `${base}?${params.toString()}`;
};

type CTASectionVipProps = {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  whatsappMessage?: string;
};

export function CTASectionVip({
  title = "Sua melhor versão começa com um momento só seu.",
  subtitle = "Deixe o Bellas cuidar de você — dos pés à alma. Escolha seu plano e viva a experiência completa todos os meses.",
  primaryLabel = "Falar no WhatsApp",
  secondaryLabel = "Ver planos",
  whatsappMessage = "Olá! Quero assinar o Programa Mulheres VIP Bellas e conhecer os planos.",
}: CTASectionVipProps) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  return (
    <section
      aria-labelledby="cta-vip-title"
      className="py-12 md:py-16"
      style={{ backgroundColor: COLORS.lilacBg, color: COLORS.text }}
    >
      <div className="container mx-auto px-4">
        {/* Chip no padrão visual do projeto */}
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
            Pronta para viver seu momento VIP?
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
            id="cta-vip-title"
            className="text-2xl md:text-3xl font-semibold"
            style={{ color: COLORS.gold }}
          >
            {title}
          </h2>
          <p className="mt-2 opacity-90">{subtitle}</p>
        </header>

        {/* Benefícios/observações em cards (identidade do CTA original) */}
        <div className="mx-auto mt-6 grid max-w-4xl gap-4 sm:grid-cols-2">
          <article className="rounded-2xl bg-white p-5 shadow border border-transparent hover:shadow-md transition">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-emerald-600" size={18} aria-hidden />
              <h3 className="text-sm font-semibold">Sem fidelidade</h3>
            </div>
            <p className="mt-2 text-sm opacity-90">
              Cancelamento sem multa — apenas 7 dias de aviso para ajuste de agenda.
            </p>
          </article>

          <article className="rounded-2xl bg-white p-5 shadow border border-transparent hover:shadow-md transition">
            <div className="flex items-center gap-2">
              <Clock3 className="text-[#8E5BAE]" size={18} aria-hidden />
              <h3 className="text-sm font-semibold">Fluxo inteligente</h3>
            </div>
            <p className="mt-2 text-sm opacity-90">
              Bônus seg–qui para melhor experiência; sábados com taxa premium e vagas limitadas.
            </p>
          </article>

          <article className="rounded-2xl bg-white p-5 shadow border border-transparent hover:shadow-md transition">
            <div className="flex items-center gap-2">
              <Bath className="text-sky-700" size={18} aria-hidden />
              <h3 className="text-sm font-semibold">Banheira aromática</h3>
            </div>
            <p className="mt-2 text-sm opacity-90">
              Disponível a partir do Plano 2 (Relax) — sem gargalo e com experiência premium.
            </p>
          </article>

          <article className="rounded-2xl bg-white p-5 shadow border border-transparent hover:shadow-md transition">
            <div className="flex items-center gap-2">
              <Heart className="text-rose-600" size={18} aria-hidden />
              <h3 className="text-sm font-semibold">Acolhimento real</h3>
            </div>
            <p className="mt-2 text-sm opacity-90">
              Espaço Escuta Bellas e equipe que cuida de você de verdade, em cada detalhe.
            </p>
          </article>
        </div>

        {/* CTAs */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            className="w-full sm:w-auto"
            style={{ backgroundColor: COLORS.primary, color: "#FFFFFF" }}
          >
            <a
              href={buildWAUrl(whatsappMessage, {
                utm_source: "site",
                utm_medium: "mensal-bellas",
                utm_content: "cta_whatsapp",
              })}
              aria-label="Falar no WhatsApp para assinar o Programa Mulheres VIP Bellas"
            >
              {primaryLabel}
              <ArrowRight className="ml-2" size={16} />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto border"
            style={{
              borderColor: COLORS.primary,
              color: COLORS.primary,
              backgroundColor: "#FFFFFF",
            }}
          >
            <a href="#planos" aria-label="Ver os planos do Programa Mulheres VIP Bellas">
              {secondaryLabel}
            </a>
          </Button>
        </div>

        {/* Rodapé informativo curto */}
        <p className="mx-auto mt-4 max-w-3xl text-center text-xs opacity-75">
          Faça tudo em um só lugar, com economia real e pertinho de você — beleza completa, relaxamento e pertencimento todos os meses.
        </p>
      </div>
    </section>
  );
}
