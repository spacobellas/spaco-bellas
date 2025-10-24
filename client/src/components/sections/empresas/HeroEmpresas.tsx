// src/components/sections/empresas/HeroEmpresas.tsx
import { Sparkles } from "lucide-react";
import heroImg from "../mensal-bellas/assets/plansgrid/luxuryspa.jpeg";

const COLORS = {
  lilacBg: "#F6EDF9",
  gold: "#C7A45C",
  text: "#2F2F2F",
  ctaGreen: "#16A34A",
};

const WHATSAPP_NUMBER = "5511988269196";
const wa = (t: string) => `https://wa.me/${WHATSAPP_NUMBER}?${new URLSearchParams({ text: t }).toString()}`;

export function HeroEmpresas() {
  return (
    <section className="relative isolate overflow-hidden" style={{ backgroundColor: COLORS.lilacBg }}>
      <img src={heroImg} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(180deg, rgba(246,237,249,0.9) 0%, rgba(246,237,249,0.7) 40%, rgba(246,237,249,0.95) 100%)" }} />
      <div className="container mx-auto px-4 py-12 md:py-16 text-center">
        <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs" style={{ backgroundColor: "#FAF8FB", color: "#8E5BAE", border: "1px solid rgba(142,91,174,0.12)" }}>
          <Sparkles size={14} /> Bem‑estar, propósito e alta performance
        </span>
        <h1 className="mt-4 font-serif" style={{ color: COLORS.gold, fontSize: "clamp(2rem, 5.5vw, 3.25rem)", lineHeight: 1.1 }}>
          Cuidar de quem cuida é o investimento mais inteligente que a sua empresa pode fazer.
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-base opacity-90">
          Um único dia de bem‑estar real pode mudar produtividade, clima e imagem da marca — com dados e provas.
        </p>
        <a
          href={wa("Olá! Quero levar o Bellas Corporativo para minha empresa e entender formatos/valores.")}
          className="mt-7 inline-flex w-full max-w-xl items-center justify-center rounded-lg px-6 py-4 text-base font-semibold shadow transition focus-visible:ring-2"
          style={{ backgroundColor: COLORS.ctaGreen, color: "#FFFFFF" }}
          aria-label="Quero meu orçamento agora"
        >
          Quero meu orçamento agora
        </a>
      </div>
    </section>
  );
}
