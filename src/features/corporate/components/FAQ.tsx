import { useState } from "react";
import cover from "@/assets/images/membership/plansgrid/luxuryspa.jpeg";

const COLORS = { lilacBg: "#F6EDF9", gold: "#C7A45C" };

const faqItems = [
  {
    q: "É possível contratar para menos de 50 pessoas?",
    a: "Sim, via formato modular com base fixa e módulos extras.",
  },
  {
    q: "A ação pode ser realizada em qualquer local?",
    a: "Sim, desde que haja estrutura básica para montagem do espaço.",
  },
  {
    q: "A empresa precisa fornecer alimentação?",
    a: "Sim, para meio período ou mais (ou acréscimo de R$ 100).",
  },
  {
    q: "Posso escolher o tema da palestra?",
    a: "Sim. São 6 temas disponíveis para diferentes públicos.",
  },
  {
    q: "Há contrato e nota fiscal?",
    a: "Sim. Todo evento é formalizado com NF e documento oficial.",
  },
  {
    q: "Posso incluir fotos/vídeo no pacote Light?",
    a: "Sim. Basta adicionar como módulo extra, com valores transparentes.",
  },
];

/**
 * FAQ section for the Corporate landing page.
 * Addresses common B2B concerns.
 */
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-10 md:py-14"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="container mx-auto px-4">
        <img
          src={cover}
          alt="Luxury Spa Treatment Room"
          className="mx-auto h-28 w-full max-w-3xl rounded-xl object-cover"
          loading="lazy"
        />
        <h2
          className="mt-4 text-2xl md:text-3xl font-semibold text-center"
          style={{ color: COLORS.gold }}
        >
          Perguntas frequentes
        </h2>
        <div className="mt-6 divide-y divide-gray-200 rounded-xl bg-white shadow max-w-3xl mx-auto overflow-hidden border border-gray-100">
          {faqItems.map((item, index) => {
            const isExpanded = openIndex === index;
            return (
              <div key={index}>
                <button
                  className="w-full text-left px-5 py-4 focus-visible:ring-2 focus-visible:ring-[#8E5BAE] transition-colors hover:bg-gray-50 flex justify-between items-center"
                  aria-expanded={isExpanded}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenIndex(isExpanded ? null : index)}
                >
                  <span className="font-medium text-gray-900">{item.q}</span>
                  <span
                    className={`transform transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                  >
                    ▼
                  </span>
                </button>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  className={`px-5 pb-4 text-sm text-gray-600 leading-relaxed ${isExpanded ? "block animate-fade-in" : "hidden"}`}
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
