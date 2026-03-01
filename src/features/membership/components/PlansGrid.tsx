import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Crown, Sparkles } from "lucide-react";
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from "@/config/contacts";

// Local images per plan
import imgEssencial from "@/assets/images/membership/plansgrid/essencial.jpg";
import imgRelax from "@/assets/images/membership/plansgrid/relax.jpg";
import imgCelebridade from "@/assets/images/membership/plansgrid/luxuryspa.jpeg";
import imgRoyal from "@/assets/images/membership/plansgrid/royal.jpg";
import imgInfinity from "@/assets/images/membership/plansgrid/infinity.jpg";

const COLORS = {
  lilacBg: "#F6EDF9",
  gold: "#C7A45C",
  text: "#2F2F2F",
  primary: "#8E5BAE",
  green: "#16A34A",
};

type PlanId = "essencial" | "relax" | "celebridade" | "royal" | "infinity";

interface Plan {
  id: PlanId;
  name: string;
  price: number;
  bullets: string[];
  highlight?: boolean;
  badge?: string;
  note?: string;
}

// Image mapping per plan
const PLAN_IMAGES: Record<PlanId, string> = {
  essencial: imgEssencial,
  relax: imgRelax,
  celebridade: imgCelebridade,
  royal: imgRoyal,
  infinity: imgInfinity,
};

const PLANS: Plan[] = [
  {
    id: "essencial",
    name: "Essencial Bellas",
    price: 347,
    bullets: [
      "2× Mão + Pé ou 2× Escova + Hidratação leve",
      "2× Skin Care + 2× Design de Sobrancelhas",
      "Massagem leve (20min) + Drink Bellas",
      "Um dia pra sair linda e confiante",
    ],
    badge: "porta de entrada",
    note: "Até 2×/mês em unhas/cabelo para manter operação equilibrada",
  },
  {
    id: "relax",
    name: "Relax Bellas",
    price: 497,
    bullets: [
      "Tudo do Essencial",
      "Banheira aromática (1×/mês)",
      "Massagem relaxante completa (40min)",
      "Brinde mensal Bellas",
    ],
    highlight: true,
    badge: "mais escolhido",
  },
  {
    id: "celebridade",
    name: "Celebridade Bellas",
    price: 997,
    bullets: [
      "Tudo do Relax",
      "Spa facial completo + Hidratação capilar premium",
      "Flores e roupão personalizado + Vídeo lembrança",
      "Sessão Escuta Bellas + Grupo Mulheres de Alto Valor SP",
    ],
    badge: "VIP",
  },
  {
    id: "royal",
    name: "Royal Experience",
    price: 1497,
    bullets: [
      "Tudo do Celebridade",
      "2ª Banheira no mês + 2 massagens",
      "Consultoria de imagem + Ensaio fotográfico",
      "Voucher-presente para 1 amiga",
    ],
  },
  {
    id: "infinity",
    name: "Infinity Bellas",
    price: 4997,
    bullets: [
      "Acesso total a todos os serviços + drinks premium",
      "Sessão fotográfica trimestral + 2 acompanhantes/mês",
      "Motorista parceiro + convites VIP vitalícios",
      "O Bellas é todo seu",
    ],
  },
];

const formatCurrency = (value: number) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });

/**
 * Plans Grid component for the Membership feature.
 * Displays all available subscription tiers.
 */
export function PlansGrid() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const firstRow = PLANS.slice(0, 3);
  const secondRow = PLANS.slice(3, 5);

  const PlanCard = (plan: Plan) => {
    const whatsappUrl = buildWhatsAppUrl(
      `${WHATSAPP_MESSAGES.MENSAL_VIP} | plano=${plan.id}`,
      {
        utm_source: "site",
        utm_medium: "mensal-bellas",
        utm_content: `plan_${plan.id}`,
      },
    );

    return (
      <article
        key={plan.id}
        className={[
          "flex flex-col rounded-2xl bg-white p-6 shadow border transition",
          plan.highlight
            ? "ring-2 ring-[#8E5BAE]"
            : "border-transparent hover:shadow-md",
        ].join(" ")}
        aria-label={`Plano ${plan.name}`}
      >
        <img
          src={PLAN_IMAGES[plan.id]}
          alt=""
          className="mb-4 h-32 w-full rounded-xl object-cover"
          loading="lazy"
        />
        <header className="mb-4">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            {plan.badge && (
              <span className="inline-flex items-center gap-1 rounded-full bg-[#F6EDF9] px-3 py-1 text-xs text-[#8E5BAE]">
                {plan.badge === "VIP" ? <Crown size={14} /> : null}
                {plan.badge}
              </span>
            )}
          </div>
          <p className="mt-2 text-3xl font-bold">
            {formatCurrency(plan.price)}
            <span className="text-base font-medium">/mês</span>
          </p>
        </header>

        <ul className="space-y-2 flex-grow">
          {plan.bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check
                className="mt-1 text-[#8E5BAE] flex-shrink-0"
                size={18}
                aria-hidden
              />
              <span className="text-sm">{bullet}</span>
            </li>
          ))}
        </ul>

        {plan.note && <p className="mt-3 text-xs opacity-70">{plan.note}</p>}

        <Button
          asChild
          className="mt-6 w-full hover:opacity-90 active:scale-[0.98] transition-all"
          style={{ backgroundColor: COLORS.green, color: "#FFFFFF" }}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Quero o plano ${plan.name}`}
          >
            Quero este plano
          </a>
        </Button>
      </article>
    );
  };

  return (
    <section
      id="planos"
      aria-labelledby="planos-title"
      className="py-10 md:py-14"
      style={{ backgroundColor: COLORS.lilacBg, color: COLORS.text }}
    >
      <div className="container mx-auto px-4">
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
            Escolha seu momento VIP
          </span>
        </div>

        <header
          className={[
            "mx-auto max-w-3xl text-center mt-4 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          ].join(" ")}
        >
          <h2
            id="planos-title"
            className="text-2xl md:text-3xl font-semibold"
            style={{ color: COLORS.gold }}
          >
            Planos mensais que cuidam de você por inteiro
          </h2>
          <p className="mt-2 opacity-90">
            Todos incluem beleza, relaxamento, cuidados faciais e design — com
            economia real e experiência completa.
          </p>
        </header>

        <div className="mt-6 max-w-7xl mx-auto">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-6">
            {firstRow.map(PlanCard)}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            {secondRow.map(PlanCard)}
          </div>
        </div>

        <div className="mt-6 text-xs opacity-80 text-center max-w-3xl mx-auto">
          <p>
            Banheira aromática incluída a partir do Plano 2; sábados com taxa
            premium, seg–qui com bônus para melhor experiência e fluxo.
          </p>
        </div>
      </div>
    </section>
  );
}
