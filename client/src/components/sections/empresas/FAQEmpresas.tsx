// src/components/sections/empresas/FAQEmpresas.tsx
import { useState } from "react";
import cover from "../mensal-bellas/assets/plansgrid/luxuryspa.jpeg";

const COLORS = { lilacBg: "#F6EDF9", gold: "#C7A45C" };

const items = [
  { q: "É possível contratar para menos de 50 pessoas?", a: "Sim, via formato modular com base fixa e módulos extras." },
  { q: "A ação pode ser realizada em qualquer local?", a: "Sim, desde que haja estrutura básica para montagem do espaço." },
  { q: "A empresa precisa fornecer alimentação?", a: "Sim, para meio período ou mais (ou acréscimo de R$ 100)." },
  { q: "Posso escolher o tema da palestra?", a: "Sim. São 6 temas disponíveis para diferentes públicos." },
  { q: "Há contrato e nota fiscal?", a: "Sim. Todo evento é formalizado com NF e documento oficial." },
  { q: "Posso incluir fotos/vídeo no pacote Light?", a: "Sim. Basta adicionar como módulo extra, com valores transparentes." },
];

export function FAQEmpresas() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-10 md:py-14" style={{ backgroundColor: COLORS.lilacBg }}>
      <div className="container mx-auto px-4">
        <img src={cover} alt="" className="mx-auto h-28 w-full max-w-3xl rounded-xl object-cover" loading="lazy" />
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-center" style={{ color: COLORS.gold }}>
          Perguntas frequentes
        </h2>
        <ul className="mt-6 divide-y divide-gray-200 rounded-xl bg-white shadow max-w-3xl mx-auto">
          {items.map((it, i) => {
            const expanded = open === i;
            return (
              <li key={i}>
                <button className="w-full text-left px-5 py-4 focus-visible:ring-2 focus-visible:ring-[#8E5BAE]" aria-expanded={expanded} aria-controls={`faq-panel-${i}`} onClick={() => setOpen(expanded ? null : i)}>
                  <span className="font-medium">{it.q}</span>
                </button>
                <div id={`faq-panel-${i}`} role="region" className={`${expanded ? "block" : "hidden"} px-5 pb-4 text-sm opacity-90`}>
                  {it.a}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
