import { useState } from "react";
import cover from "@/assets/images/membership/Luxury_spa_treatment_room_eeed824b.png";

const COLORS = { lilacBg: "#F6EDF9", gold: "#C7A45C" };

const faqItems = [
  { q: "Posso cancelar o plano quando quiser?", a: "Sim, sem multas. Só pedimos 7 dias de aviso para ajuste de agenda." },
  { q: "Tem fidelidade ou multa de cancelamento?", a: "Não. Há benefícios de permanência: mimos a cada 3 meses e upgrade gratuito a cada 6 meses." },
  { q: "E se eu quiser trocar de profissional?", a: "Sem constrangimento. Você pode solicitar trocas a qualquer momento." },
  { q: "E se eu não puder ir no mês?", a: "Pode remarcar 1 vez por mês com 24h de antecedência (não cumulativo)." },
  { q: "Posso parcelar o pagamento?", a: "Sim: à vista com 5% off; até 3x sem juros; até 6x com pequena taxa." },
  { q: "Posso ir com amiga ou familiar?", a: "Sim. Há pacotes para duplas. O Royal inclui 1 amiga convidada por mês." },
  { q: "O que está incluso em todos os planos?", a: "Unhas, cabelo, cuidados faciais, design de sobrancelhas, massagem relaxante, brinde/drink e acesso ao Espaço Escuta." },
  { q: "Como funciona o Espaço Escuta Bellas?", a: "Sessões de escuta com Luzinete; quando necessário, 30min com psicóloga parceira." },
  { q: "O que são os workshops e mentorias?", a: "Planos 1–2: Workshop de renda; Planos 3+: Grupo Mulheres de Alto Valor SP." },
  { q: "Posso mudar de plano depois?", a: "Sim, upgrade a qualquer momento pagando a diferença (com mimo especial)." },
];

/**
 * FAQ section for the Membership (VIP) landing page.
 * Addresses common subscription and service questions.
 */
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section aria-labelledby="faq-title" className="py-10 md:py-14" style={{ backgroundColor: COLORS.lilacBg }}>
      <div className="container mx-auto px-4">
        <img 
          src={cover} 
          alt="Luxury Spa Treatment Room" 
          className="mx-auto h-28 w-full max-w-3xl rounded-xl object-cover" 
          loading="lazy" 
        />
        <h2 
          id="faq-title" 
          className="mt-4 text-2xl md:text-3xl font-semibold text-center" 
          style={{ color: COLORS.gold }}
        >
          Dúvidas frequentes
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
                  <span className={`transform transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}>
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
