import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, ChevronDown } from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "5511976820135";

const FAQ_WHATSAPP_LINK =
  "https://wa.me/5511976820135?text=Ol%C3%A1!%20Quero%20meu%20dia%20de%20princesa%20no%20Spa%20das%20Celebridades!";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "POSSO IR EM DUAS PESSOAS?",
    answer:
      "Sim, a segunda pessoa paga 50% do valor para irem juntas.",
  },
  {
    question: "POSSO IR EM CASAL? POSSO LEVAR QUEM?",
    answer:
      "Sim! É livre, geralmente entre casal, mãe e filha, irmãs e amigas.",
  },
  {
    question: "POSSO IR APÓS O HORÁRIO DE TRABALHO, TEM FLEXIBILIDADE?",
    answer:
      "Sim! Combine previamente e podemos estender o horário de funcionamento.",
  },
  {
    question: "POSSO PRESENTEAR ALGUÉM COM O SPA?",
    answer:
      "Sim, é ótimo para presentear alguém e a pessoa terá até 90 dias para fazer uso.",
  },
  {
    question: "ALÉM DO SPA, POSSO FAZER O DIA DA NOIVA NO SPAÇO BELLAS?",
    answer:
      "Sim! No Spaço Bellas você tem total liberdade para vir com suas noivas e passar o dia relaxando antes do casamento.",
  },
];

export function FAQSpaDay() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq-spa-day"
      className="relative py-16 md:py-24 bg-white overflow-hidden"
    >
      {/* Fundo suave para manter estilo visual */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-20 -translate-x-10 -translate-y-16" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-100 rounded-full filter blur-3xl opacity-20 translate-x-10 translate-y-16" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-4 sm:px-6 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-[var(--primary-purple)]" />
            <span className="text-sm font-medium text-[var(--primary-purple)]">
              Dúvidas sobre o Spa das Celebridades
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas frequentes e benefícios especiais
          </h2>

          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            As 10 primeiras pessoas que fecharem em novembro vão ganhar design
            de sobrancelhas + 1 spa dos pés adicional para usar em até 30 dias
            ou presentear alguém.
          </p>
          <p className="text-xs sm:text-sm text-gray-500 max-w-3xl mx-auto mt-2">
            Além disso, você garante 10% de desconto na próxima vez que vier ou
            pode liberar o voucher para você ou uma amiga. Válido por 30 dias
            para marcação, não precisa consumir nesse prazo, mas é necessário
            deixar marcado com sinal de 20%.
          </p>

          <div className="mt-6 flex justify-center">
            <Button
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-6 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              size="lg"
              asChild
            >
              <a
                href={FAQ_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero meu dia de princesa
              </a>
            </Button>
          </div>
        </div>

        {/* FAQ list */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <Card
                key={index}
                className={`border border-[var(--primary-purple)]/15 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer ${
                  isOpen ? "bg-purple-50/40" : "bg-white/80"
                }`}
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 text-left">
                      {item.question}
                    </h3>
                    <div
                      className={`flex items-center justify-center w-8 h-8 rounded-full border border-[var(--primary-purple)]/30 text-[var(--primary-purple)] bg-white transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>

                  {isOpen && (
                    <p className="mt-3 text-xs sm:text-sm text-gray-700 text-left leading-relaxed">
                      {item.answer}
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
