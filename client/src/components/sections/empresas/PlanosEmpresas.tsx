// src/components/sections/empresas/PlanosEmpresas.tsx
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Crown, Stars } from "lucide-react";
import imgLight from "../mensal-bellas/assets/plansgrid/relax.jpg";
import imgPremium from "../mensal-bellas/assets/plansgrid/luxuryspa.jpeg";
import imgCorporate from "../mensal-bellas/assets/plansgrid/royal.jpg";

const COLORS = { lilacBg: "#F6EDF9", gold: "#C7A45C", text: "#2F2F2F", primary: "#8E5BAE" };
const WHATSAPP_NUMBER = "5511988269196";
const buildWAUrl = (msg: string, utm?: Record<string, string>) => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const p = new URLSearchParams({ text: msg });
  if (utm) Object.entries(utm).forEach(([k, v]) => p.append(k, v));
  return `${base}?${p.toString()}`;
};

type P = {
  id: "light" | "premium" | "corporate";
  name: string;
  price: number;
  min: number;
  bullets: string[];
  badge?: "mais escolhido" | "completo";
  cover: string;
};

const PLANS: P[] = [
  {
    id: "light",
    name: "LIGHT – Pausa Produtiva",
    price: 29,
    min: 80,
    bullets: [
      "Massagem relaxante + esfoliação dos pés (sem água quente)",
      "2 massoterapeutas + coordenadora",
      "Aromas, música e cadastro digital + mini pesquisa",
    ],
    cover: imgLight,
  },
  {
    id: "premium",
    name: "PREMIUM – Dia do Bem‑Estar",
    price: 39,
    min: 70,
    bullets: [
      "Tudo do Light",
      "Brinde + respiração/alongamento",
      "10 fotos profissionais + relatório express",
    ],
    badge: "mais escolhido",
    cover: imgPremium,
  },
  {
    id: "corporate",
    name: "CORPORATE EXPERIENCE – Bem‑Estar com Propósito",
    price: 55,
    min: 60,
    bullets: [
      "Tudo do Premium",
      "Palestra (tema à escolha) + videomaker",
      "Relatório completo + mini vídeo + certificado",
    ],
    badge: "completo",
    cover: imgCorporate,
  },
];

const fmt = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

export function PlanosEmpresas() {
  return (
    <section id="pacotes" className="py-10 md:py-14" style={{ backgroundColor: "#FFFFFF", color: "#2F2F2F" }}>
      <div className="container mx-auto px-4">
        <div className="flex w-full items-center justify-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs"
            style={{ backgroundColor: "#FAF8FB", color: COLORS.primary, border: `1px solid ${COLORS.primary}20` }}
          >
            <Sparkles size={14} />
            Escolha o formato ideal
          </span>
        </div>

        <header className="mx-auto max-w-3xl text-center mt-4">
          <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: COLORS.gold }}>
            Pacotes corporativos 2025
          </h2>
          <p className="mt-2 opacity-90">Por menos que um coffee break, entregue o melhor dia do ano para sua equipe.</p>
        </header>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PLANS.map((p) => (
            <article
              key={p.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white/90 p-6 shadow-lg backdrop-blur-sm transition"
              style={{ border: "1px solid rgba(142,91,174,0.10)" }}
            >
              {/* Acento */}
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: "linear-gradient(90deg, #8E5BAE 0%, rgba(199,164,92,0.7) 50%, #8E5BAE 100%)" }}
                aria-hidden
              />

              {/* Capa */}
              <img src={p.cover} alt="" className="mb-4 h-32 w-full rounded-xl object-cover" loading="lazy" />

              {/* Conteúdo (cresce) */}
              <div className="flex flex-col gap-2 flex-grow">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  {p.badge && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#F6EDF9] px-3 py-1 text-xs text-[#8E5BAE]">
                      {p.badge === "mais escolhido" ? <Stars size={14} /> : <Crown size={14} />}
                      {p.badge}
                    </span>
                  )}
                </div>

                <p className="text-2xl font-bold">
                  {fmt(p.price)} <span className="text-sm font-medium">/ pessoa</span>
                </p>
                <p className="text-xs opacity-70">Mínimo: {p.min} participantes</p>

                <ul className="mt-2 space-y-2">
                  {p.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 text-[#8E5BAE]" size={18} aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA fixo na base */}
              <div className="mt-6">
                <Button
                  asChild
                  className="w-full transition hover:brightness-[0.98] focus-visible:ring-2"
                  style={{ backgroundColor: "#16A34A", color: "#FFFFFF" }}
                >
                  <a
                    href={buildWAUrl(`Olá! Quero orçamento do pacote ${p.name}.`, {
                      utm_source: "site",
                      utm_medium: "empresas",
                      utm_content: `plan_${p.id}`,
                    })}
                    aria-label={`Solicitar orçamento do ${p.name}`}
                  >
                    Solicitar orçamento
                  </a>
                </Button>
              </div>

              {/* Glow hover */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                style={{ boxShadow: "0 0 0 3px rgba(142,91,174,0.12) inset" }}
                aria-hidden
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
