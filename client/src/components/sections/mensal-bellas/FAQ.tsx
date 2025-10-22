// src/components/sections/mensal-bellas/FAQ.tsx
import { useState } from "react";

const items = [
  {
    q: "Posso cancelar o plano quando quiser?",
    a: "Sim, sem multas. Só pedimos 7 dias de aviso para ajuste de agenda.",
  },
  {
    q: "Tem fidelidade ou multa de cancelamento?",
    a: "Não. Há benefícios de permanência: mimos a cada 3 meses e upgrade gratuito a cada 6 meses.",
  },
  {
    q: "E se eu quiser trocar de profissional?",
    a: "Sem constrangimento. Você pode solicitar trocas a qualquer momento.",
  },
  {
    q: "E se eu não puder ir no mês?",
    a: "Pode remarcar 1 vez por mês com 24h de antecedência (não cumulativo).",
  },
  {
    q: "Posso parcelar o pagamento?",
    a: "Sim: à vista com 5% off; até 3x sem juros; até 6x com pequena taxa.",
  },
  {
    q: "Posso ir com amiga ou familiar?",
    a: "Sim. Há pacotes para duplas. O Royal inclui 1 amiga convidada por mês.",
  },
  {
    q: "O que está incluso em todos os planos?",
    a: "Unhas, cabelo, cuidados faciais, design de sobrancelhas, massagem relaxante, brinde/drink e acesso ao Espaço Escuta.",
  },
  {
    q: "Como funciona o Espaço Escuta Bellas?",
    a: "Sessões de escuta com Luzinete; quando necessário, 30min com psicóloga parceira.",
  },
  {
    q: "O que são os workshops e mentorias?",
    a: "Planos 1–2: Workshop de renda; Planos 3+: Grupo Mulheres de Alto Valor SP.",
  },
  {
    q: "Posso mudar de plano depois?",
    a: "Sim, upgrade a qualquer momento pagando a diferença (com mimo especial).",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section aria-labelledby="faq-title" className="py-10 md:py-14">
      <div className="container mx-auto px-4">
        <h2 id="faq-title" className="text-2xl md:text-3xl font-semibold">
          Dúvidas frequentes
        </h2>
        <ul className="mt-4 divide-y divide-gray-200 rounded-xl bg-white shadow">
          {items.map((it, i) => {
            const expanded = open === i;
            return (
              <li key={i}>
                <button
                  className="w-full text-left px-5 py-4 focus-visible:ring-2 focus-visible:ring-[#8E5BAE]"
                  aria-expanded={expanded}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(expanded ? null : i)}
                >
                  <span className="font-medium">{it.q}</span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  className={`${expanded ? "block" : "hidden"} px-5 pb-4 text-sm opacity-90`}
                >
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
