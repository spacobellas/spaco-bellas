import { Star, Crown, Heart, Sparkles, type LucideIcon } from "lucide-react";

export interface SpaPackage {
  id: string;
  tier: string;
  price: number;
  installment: string;
  cash: string;
  duration: string;
  description: string;
  features: string[];
  featured: boolean;
  color: string;
  icon: LucideIcon;
  badge: string | null;
  badgeColor: string;
  whatsappText: string;
  ctaLabel: string;
  ctaIcon: LucideIcon;
  /**
   * If defined, the CTA navigates to this internal route.
   * If undefined, the CTA opens WhatsApp.
   */
  pageUrl?: string;
}

export const allSpaPackages: SpaPackage[] = [
  {
    id: "individual-basico",
    tier: "Spa Day Individual Básico",
    price: 250,
    installment: "R$ 250,00",
    cash: "R$ 225 à vista no Pix",
    duration: "2h de experiência",
    description: "Seu momento essencial de relaxamento e renovação.",
    features: [
      "Spa dos pés (30 min)",
      "Banheira relaxante com aromaterapia (40 min)",
      "Registro básico (foto ou story)",
    ],
    featured: false,
    color: "from-pink-400 to-rose-500",
    icon: Star,
    badge: null,
    badgeColor: "bg-pink-500",
    whatsappText:
      "Olá! Vim pelo site e tenho interesse no Spa Day Individual Básico!",
    ctaLabel: "Ver detalhes deste pacote",
    ctaIcon: Star,
    pageUrl: "/spa-individual",
  },
  {
    id: "individual-premium",
    tier: "Spa Day Relaxamento Individual Premium",
    price: 397,
    installment: "12x de R$ 39,70",
    cash: "R$ 397 à vista no Pix",
    duration: "2h de experiência",
    description:
      "Ideal para aniversário, se auto presentear ou presentear quem você ama!",
    features: [
      "Spa dos pés (30 min)",
      "Massagem Relaxante (20 min)",
      "Banheira relaxante com aromaterapia (30 min)",
      "Chá especial e frutas",
      "Ambiente aromático e música",
      "Registro básico (foto ou story)",
    ],
    featured: false,
    color: "from-purple-400 to-violet-500",
    icon: Heart,
    badge: "Mais Popular",
    badgeColor: "bg-purple-500",
    whatsappText:
      "Olá! Vim pelo site e tenho interesse no Spa Day Relaxamento Individual Premium!",
    ctaLabel: "Ver detalhes deste pacote",
    ctaIcon: Heart,
    pageUrl: "/spa-individual",
  },
  {
    id: "casal-2h",
    tier: "Spa Day Casal — 2h",
    price: 697,
    installment: "12x de R$ 69,70",
    cash: "R$ 697 à vista no Pix",
    duration: "2h de experiência a dois",
    description: "A experiência perfeita para curtir junto quem você ama.",
    features: [
      "Banheira relaxante com aromaterapia",
      "Quick Massage (20 min)",
      "Registro básico: foto + story do seu dia",
      "Foto personalizada do seu dia",
    ],
    featured: false,
    color: "from-fuchsia-400 to-pink-500",
    icon: Heart,
    badge: null,
    badgeColor: "bg-fuchsia-500",
    whatsappText: "Olá! Vim pelo site e tenho interesse no Spa Day Casal (2h)!",
    ctaLabel: "Ver detalhes deste pacote",
    ctaIcon: Heart,
    pageUrl: "/spa-casal",
  },
  {
    id: "casal-3h30",
    tier: "Spa Day Casal — 3h30",
    price: 897,
    installment: "12x de R$ 89,70",
    cash: "R$ 897 à vista no Pix",
    duration: "3h30 de experiência a dois",
    description:
      "Imersão completa para vocês dois. Relaxamento e conexão em alto nível.",
    features: [
      "Spa dos pés",
      "Banheira relaxante com aromaterapia",
      "Massagem terapêutica com pedras quentes (30 min)",
      "Ambiente aromático e música",
      "Chá especial, sucos ou refrigerante",
      "Tábua de frios, frutas e castanhas",
      "Lembrança personalizada para levar pra casa",
      "Banho com produtos veganos",
      "Escova profissional pós banho",
      "Registro básico: foto + story do seu dia",
      "Foto personalizada do seu dia",
    ],
    featured: true,
    color: "from-purple-500 to-fuchsia-600",
    icon: Crown,
    badge: "Mais Vendido!",
    badgeColor: "bg-purple-600",
    whatsappText:
      "Olá! Vim pelo site e tenho interesse no Spa Day Casal (3h30)!",
    ctaLabel: "Ver detalhes deste pacote",
    ctaIcon: Crown,
    pageUrl: "/spa-casal",
  },
  {
    id: "celebridade",
    tier: "Spa Day Celebridade",
    price: 1497,
    installment: "12x de R$ 149,70",
    cash: "R$ 1.497 à vista no Pix",
    duration: "3h30 de pura celebração",
    description:
      "O luxo completo. Viva seu dia de celebridade e saia transformada.",
    features: [
      "Spa dos pés",
      "Banheira relaxante com aromaterapia",
      "Massagem terapêutica com pedras quentes (30 min)",
      "Ambiente aromático e música",
      "Chá especial, sucos ou refrigerante",
      "Tábua de frios, frutas e castanhas",
      "Lembrança personalizada para levar pra casa",
      "Banho com produtos veganos",
      "Escova profissional pós banho",
      "Registro básico: foto + story do seu dia",
      "Foto personalizada do seu dia",
      "Figurino especial incluído",
      "Presente especial",
      "Mini ensaio fotográfico profissional",
      "Maquiagem social",
      "Making off em vídeo (estilo dia da noiva)",
      "Certificado 'Eu fui Celebridade Bellas 💜'",
      "Garrafa de Champanhe ou Vinho",
      "Tábua Luxo: castanhas, frios, frutas e salgadinho",
      "Sua foto no mural das celebridades!",
    ],
    featured: false,
    color: "from-amber-400 to-orange-500",
    icon: Crown,
    badge: "✨ Experiência Completa",
    badgeColor: "bg-amber-500",
    whatsappText:
      "Olá! Vim pelo site e tenho interesse no Spa Day Celebridade!",
    ctaLabel: "Quero meu Spa Day Celebridade",
    ctaIcon: Sparkles,
  },
  {
    id: "noiva",
    tier: "Spa Dia da Noiva",
    price: 1497,
    installment: "12x de R$ 149,70",
    cash: "R$ 1.497 à vista no Pix",
    duration: "3h30 — O seu grande dia",
    description:
      "Uma experiência única e inesquecível para a noiva mais linda do mundo.",
    features: [
      "Spa dos pés",
      "Banheira relaxante com aromaterapia",
      "Massagem terapêutica com pedras quentes (30 min)",
      "Ambiente aromático e música",
      "Chá especial, sucos ou refrigerante",
      "Tábua de frios, frutas e castanhas",
      "Lembrança personalizada para levar pra casa",
      "Banho com produtos veganos",
      "Escova profissional pós banho",
      "Registro básico: foto + story do seu dia",
      "Foto personalizada do seu dia",
      "Figurino especial incluído",
      "Presente especial",
      "Mini ensaio fotográfico profissional",
      "Maquiagem social",
      "Making off em vídeo (estilo dia da noiva)",
      "Certificado 'Eu fui Celebridade Bellas 💜'",
      "Garrafa de Champanhe ou Vinho",
      "Tábua Luxo: castanhas, frios, frutas e salgadinho",
      "Sua foto no mural das celebridades!",
    ],
    featured: true,
    color: "from-rose-400 to-pink-600",
    icon: Heart,
    badge: "💍 Exclusivo Noiva",
    badgeColor: "bg-rose-500",
    whatsappText: "Olá! Vim pelo site e tenho interesse no Spa Dia da Noiva!",
    ctaLabel: "Quero meu Spa Dia da Noiva",
    ctaIcon: Heart,
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const withWhatsApp = (pkgs: SpaPackage[]): SpaPackage[] =>
  pkgs.map((p) => ({ ...p, pageUrl: undefined }));

// ─── Page Filters ────────────────────────────────────────────────────────

/**
 * /spa-celebridades — overview (4 cards).
 * Cards with pageUrl navigate to the dedicated sub-page.
 * "Celebridade" card (without pageUrl) goes directly to WhatsApp.
 */
export const packagesCelebridades = allSpaPackages.filter((p) =>
  [
    "individual-basico",
    "individual-premium",
    "casal-3h30",
    "celebridade",
  ].includes(p.id),
);

/** /spa-individual — Ideal for a solo relaxation moment. Buttons open WhatsApp. */
export const packagesIndividual = withWhatsApp(
  allSpaPackages.filter((p) =>
    ["individual-basico", "individual-premium", "celebridade"].includes(p.id),
  ),
);

/** /spa-casal — Suitable for couples, mother and daughter, friends... Buttons open WhatsApp. */
export const packagesCasal = withWhatsApp(
  allSpaPackages.filter((p) => ["casal-2h", "casal-3h30"].includes(p.id)),
);

/** /spa-diadanoiva — Bride or bride and bridesmaids. Button opens WhatsApp. */
export const packagesNoiva = withWhatsApp(
  allSpaPackages.filter((p) => p.id === "noiva"),
);
