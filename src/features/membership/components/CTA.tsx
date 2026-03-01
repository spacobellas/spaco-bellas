import { useEffect, useState } from "react";
import { Sparkles, ShieldCheck, Clock3, Heart, Bath } from "lucide-react";
import bg from "@/assets/images/membership/Luxury_spa_treatment_room_eeed824b.png";
import {
  CONTACT_CONFIG,
  buildWhatsAppUrl,
  WHATSAPP_MESSAGES,
} from "@/config/contacts";

const COLORS = {
  lilacBg: "#F6EDF9",
  gold: "#C7A45C",
  text: "#2F2F2F",
  primary: "#8E5BAE",
};

const CTA_GREEN = "#16A34A";

interface CTAProps {
  title?: string;
  subtitle?: string;
  whatsappMessage?: string;
}

/**
 * Call to Action section for the Membership (VIP) landing page.
 * Highlights membership-specific benefits like no fidelity and smart scheduling.
 */
export function CTA({
  title = "Sua melhor versão começa com um momento só seu.",
  subtitle = "Deixe o Bellas cuidar de você — dos pés à alma. Escolha seu plano e viva a experiência completa todos os meses.",
  whatsappMessage = WHATSAPP_MESSAGES.MENSAL_VIP,
}: CTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const whatsappUrl = buildWhatsAppUrl(whatsappMessage);

  return (
    <section
      aria-labelledby="cta-vip-title"
      className="py-12 md:py-16 relative overflow-hidden"
      style={{ backgroundColor: COLORS.lilacBg, color: COLORS.text }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <img
          src={bg}
          alt=""
          className="h-full w-full object-cover opacity-10"
          loading="lazy"
        />
      </div>

      <div className="container mx-auto px-4 relative">
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

        <div className="mx-auto mt-6 grid max-w-4xl gap-4 sm:grid-cols-2">
          <article className="rounded-2xl bg-white p-5 shadow border border-transparent hover:shadow-md transition">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-emerald-600" size={18} aria-hidden />
              <h3 className="text-sm font-semibold">Sem fidelidade</h3>
            </div>
            <p className="mt-2 text-sm opacity-90">
              Cancelamento sem multa — apenas 7 dias de aviso para ajuste de
              agenda.
            </p>
          </article>

          <article className="rounded-2xl bg-white p-5 shadow border border-transparent hover:shadow-md transition">
            <div className="flex items-center gap-2">
              <Clock3 className="text-[#8E5BAE]" size={18} aria-hidden />
              <h3 className="text-sm font-semibold">Fluxo inteligente</h3>
            </div>
            <p className="mt-2 text-sm opacity-90">
              Bônus seg–qui para melhor experiência; sábados com taxa premium e
              vagas limitadas.
            </p>
          </article>

          <article className="rounded-2xl bg-white p-5 shadow border border-transparent hover:shadow-md transition">
            <div className="flex items-center gap-2">
              <Bath className="text-sky-700" size={18} aria-hidden />
              <h3 className="text-sm font-semibold">Banheira aromática</h3>
            </div>
            <p className="mt-2 text-sm opacity-90">
              Disponível a partir do Plano 2 (Relax) — sem gargalo e com
              experiência premium.
            </p>
          </article>

          <article className="rounded-2xl bg-white p-5 shadow border border-transparent hover:shadow-md transition">
            <div className="flex items-center gap-2">
              <Heart className="text-rose-600" size={18} aria-hidden />
              <h3 className="text-sm font-semibold">Acolhimento real</h3>
            </div>
            <p className="mt-2 text-sm opacity-90">
              Espaço Escuta Bellas e equipe que cuida de você de verdade, em
              cada detalhe.
            </p>
          </article>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full max-w-xl items-center justify-center rounded-lg px-6 py-4 text-base font-semibold shadow transition focus-visible:ring-2 hover:opacity-90 active:scale-[0.98]"
            style={{ backgroundColor: CTA_GREEN, color: "#FFFFFF" }}
            aria-label="Quero viver o meu dia de estrela — entrar no Grupo VIP no WhatsApp"
          >
            Quero viver o meu dia de estrela
          </a>
        </div>

        <p className="mx-auto mt-4 max-w-3xl text-center text-xs opacity-75">
          Faça tudo em um só lugar, com economia real e pertinho de você —
          beleza completa, relaxamento e pertencimento todos os meses.
        </p>
      </div>
    </section>
  );
}
