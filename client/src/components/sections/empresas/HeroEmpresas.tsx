// src/components/sections/empresas/HeroEmpresas.tsx
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroImg from "../mensal-bellas/assets/plansgrid/luxuryspa.jpeg";

const COLORS = { lilacBg: "#F6EDF9", gold: "#C7A45C", text: "#2F2F2F", primary: "#8E5BAE" };
const WHATSAPP_NUMBER = "5511988269196";
const buildWAUrl = (msg: string, utm?: Record<string, string>) => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const p = new URLSearchParams({ text: msg });
  if (utm) Object.entries(utm).forEach(([k, v]) => p.append(k, v));
  return `${base}?${p.toString()}`;
};

export function HeroEmpresas() {
  return (
    <section className="relative isolate overflow-hidden" style={{ backgroundColor: COLORS.lilacBg, color: COLORS.text }}>
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="" className="h-full w-full object-cover object-center opacity-30" loading="eager" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(246,237,249,0.9) 0%, rgba(246,237,249,0.7) 40%, rgba(246,237,249,0.95) 100%)" }} />
        <div aria-hidden className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl" style={{ background: COLORS.gold, opacity: 0.15 }} />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex w-full items-center justify-center">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs" style={{ backgroundColor: "#FAF8FB", color: COLORS.primary, border: `1px solid ${COLORS.primary}20` }}>
            <Sparkles size={14} />
            Bem-estar, propósito e alta performance
          </span>
        </div>

        <div className="mx-auto max-w-3xl text-center mt-4">
          <h1 className="font-serif" style={{ color: COLORS.gold, fontSize: "clamp(1.75rem, 5vw, 3rem)" }}>
            Cuidar de quem cuida é o investimento mais inteligente que sua empresa pode fazer.
          </h1>
          <p className="mt-3 text-base md:text-lg opacity-90">
            Empresas que oferecem um dia de relaxamento aumentam em até 32% a produtividade e reduzem a rotatividade em 26%.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="w-full sm:w-auto" style={{ backgroundColor: COLORS.primary, color: "#FFF" }}>
              <a
                href={buildWAUrl("Olá! Quero levar o Bellas Corporativo para minha empresa e entender formatos/valores.", {
                  utm_source: "site",
                  utm_medium: "empresas",
                  utm_content: "hero_whatsapp",
                })}
                aria-label="Quero saber como aplicar na minha empresa"
              >
                Quero saber como aplicar na minha empresa
              </a>
            </Button>
          </div>
          <p className="mt-3 text-xs opacity-75">Tom profissional, emocional e inspirador — cuidando de gente para gerar resultados reais.</p>
        </div>
      </div>
    </section>
  );
}
