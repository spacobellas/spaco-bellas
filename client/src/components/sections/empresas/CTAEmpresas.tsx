// src/components/sections/empresas/CTAEmpresas.tsx
import bg from "../mensal-bellas/assets/plansgrid/luxuryspa.jpeg";

const COLORS = { lilacBg: "#F6EDF9", gold: "#C7A45C", text: "#2F2F2F", primary: "#8E5BAE" };
const WHATSAPP_NUMBER = "5511988269196";
const buildWAUrl = (msg: string, utm?: Record<string, string>) => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const p = new URLSearchParams({ text: msg });
  if (utm) Object.entries(utm).forEach(([k, v]) => p.append(k, v));
  return `${base}?${p.toString()}`;
};

export function CTAEmpresas() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden" style={{ backgroundColor: "#F6EDF9", color: "#2F2F2F" }}>
      <div className="absolute inset-0 -z-10">
        <img src={bg} alt="" className="h-full w-full object-cover opacity-10" loading="lazy" />
      </div>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:3xl font-semibold" style={{ color: "#C7A45C" }}>
          Hoje é um ótimo dia para investir em quem faz a sua empresa acontecer.
        </h2>
        <p className="mt-2 opacity-90">Enquanto outras empresas tentam parecer humanas, a sua será lembrada por ser.</p>
        <a
          href={"https://wa.me/5511988269196?text=" + encodeURIComponent("Olá! Quero meu orçamento agora do Bellas Corporativo.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-full max-w-xl items-center justify-center rounded-lg px-6 py-4 text-base font-semibold shadow transition focus-visible:ring-2"
          style={{ backgroundColor: "#16A34A", color: "#FFFFFF" }}
          aria-label="Quero meu orçamento agora"
        >
          Quero meu orçamento agora
        </a>
        <p className="mt-3 text-xs opacity-75">Bellas: onde cuidar de gente é o melhor negócio.</p>
      </div>
    </section>
  );
}
