// src/data/mensal-bellas.ts
export type PlanId = "essencial" | "relax" | "celebridade" | "royal" | "infinity";
export type Plan = {
  id: PlanId;
  name: string;
  price: number;
  bullets: string[];
  highlight?: boolean;
  badge?: string;
};

export const plans: Plan[] = [
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
  },
  {
    id: "relax",
    name: "Relax Bellas",
    price: 497,
    bullets: [
      "Tudo do Essencial",
      "Banheira aromática (1×/mês) — a partir do plano 2",
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

export const economyCompare = {
  items: [
    { label: "Mão + pé (2×/mês)", avulso: 140, plano: "Incluído" },
    { label: "Escova + hidratação (2×/mês)", avulso: 160, plano: "Incluído" },
    { label: "Skin care + sobrancelha", avulso: 100, plano: "Incluído" },
    { label: "Massagem/relaxamento", avulso: 180, plano: "Incluído" },
    { label: "Banheira aromática", avulso: 180, plano: "Plano 2+" },
  ],
  totalAvulso: 760,
  planoMin: 347,
  economiaMesAte: 400,
};
