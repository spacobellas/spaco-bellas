import { useState } from "react";
import {
  ChevronDown,
  Heart,
  Sparkles,
  Shield,
  Clock,
  Gift,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

const faqData: FAQItem[] = [
  {
    question: "Como sei qual pacote escolher?",
    answer: (
      <div className="space-y-4">
        <p className="text-base text-gray-600 sm:text-lg">
          Escolha com o coração, linda! Cada pacote foi pensado para um momento diferente da sua vida:
        </p>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start gap-3 text-base sm:text-lg">
            <Heart className="mt-1 h-5 w-5 text-purple-500" />
            <span>
              <strong>Relaxamento Básico ou Premium</strong> — Para aquele dia em que você precisa de um cuidado essencial e renovador, sozinha ou para presentear alguém especial.
            </span>
          </li>
          <li className="flex items-start gap-3 text-base sm:text-lg">
            <Heart className="mt-1 h-5 w-5 text-purple-500" />
            <span>
              <strong>Experiências a Dois</strong> — Quando o momento pede conexão: casal, mãe e filha ou amigas que merecem se cuidar juntas.
            </span>
          </li>
          <li className="flex items-start gap-3 text-base sm:text-lg">
            <Heart className="mt-1 h-5 w-5 text-purple-500" />
            <span>
              <strong>Celebridade ou Dia da Noiva</strong> — Para o dia em que você merece viver o mais alto nível de luxo, atenção e cuidado do início ao fim.
            </span>
          </li>
        </ul>
        <p className="text-base font-medium text-purple-600 sm:text-lg">
          Não se preocupe — nossa equipe te ajuda a escolher o pacote perfeito no WhatsApp!
        </p>
      </div>
    ),
  },
  {
    question: "Quanto tempo dura cada experiência?",
    answer: (
      <div className="space-y-4">
        <p className="text-base text-gray-600 sm:text-lg">
          Tempo de qualidade para cuidar de você, sem pressa:
        </p>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-center gap-3 text-base sm:text-lg">
            <Clock className="h-5 w-5 text-pink-500" />
            <span>
              <strong>Pacotes de Relaxamento (Básico e Premium):</strong> 2 horas de puro cuidado
            </span>
          </li>
          <li className="flex items-center gap-3 text-base sm:text-lg">
            <Clock className="h-5 w-5 text-pink-500" />
            <span>
              <strong>Experiência a Dois (Casal 2h):</strong> 2 horas de conexão e relaxamento
            </span>
          </li>
          <li className="flex items-center gap-3 text-base sm:text-lg">
            <Clock className="h-5 w-5 text-pink-500" />
            <span>
              <strong>Experiências Premium (Casal 3h30, Celebridade, Dia da Noiva):</strong> 3h30 de experiência completa
            </span>
          </li>
        </ul>
        <p className="text-base text-gray-500 sm:text-lg">
          Lembre-se: cada minuto é seu. Aproveite cada segundo dessa jornada de autocuidado.
        </p>
      </div>
    ),
  },
  {
    question: "Posso presentear alguém especial?",
    answer: (
      <div className="space-y-4">
        <p className="text-base text-gray-600 sm:text-lg">
          Que amor! Presentear uma mulher especial com um Spa Day é uma das formas mais lindas de dizer "eu te amo" ou "você merece ser cuidada".
        </p>
        <div className="rounded-2xl border border-purple-200 bg-purple-50 p-5">
          <p className="text-base text-purple-700 sm:text-lg">
            <strong>Dica especial:</strong> Cada voucher vem com uma mensagem personalizada escrita à mão. É emocionante ver o brilho nos olhos daquela pessoa que você ama!
          </p>
        </div>
        <p className="text-base text-gray-600 sm:text-lg">
          Basta falar com nossa equipe no WhatsApp que cuidamos de tudo para você.
        </p>
      </div>
    ),
  },
  {
    question: "E se eu precisar remarcar?",
    answer: (
      <div className="space-y-4">
        <p className="text-base text-gray-600 sm:text-lg">
          A vida da mulher moderna é cheia de surpresas, e nós entendemos perfeitamente!
        </p>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-center gap-3 text-base sm:text-lg">
            <Shield className="h-5 w-5 text-purple-500" />
            <span>Remarque com até 24h de antecedência, sem custo</span>
          </li>
          <li className="flex items-center gap-3 text-base sm:text-lg">
            <Shield className="h-5 w-5 text-purple-500" />
            <span>Nossa equipe te ajuda a encontrar o melhor novo horário</span>
          </li>
          <li className="flex items-center gap-3 text-base sm:text-lg">
            <Shield className="h-5 w-5 text-purple-500" />
            <span>Seu bem-estar vem sempre em primeiro lugar</span>
          </li>
        </ul>
        <p className="text-base font-medium text-pink-600 sm:text-lg">
          Não se sinta mal por remarcar. Cuidar de você também significa ter flexibilidade.
        </p>
      </div>
    ),
  },
  {
    question: "O que preciso levar no dia?",
    answer: (
      <div className="space-y-4">
        <p className="text-base text-gray-600 sm:text-lg">
          Apenas você, sua energia positiva e vontade de ser cuidada!
        </p>
        <div className="rounded-2xl border border-pink-200 bg-pink-50 p-5">
          <p className="text-base text-pink-700 sm:text-lg">
            <strong>Tudo incluso:</strong> Toalhas, produtos de qualidade, chá aromático, água infusa e aquele carinho que só nós sabemos dar.
          </p>
        </div>
        <p className="text-base text-gray-600 sm:text-lg">
          Se quiser, pode trazer sua playlist favorita ou um livro para ler durante o spa dos pés. Mas lembre-se: o objetivo é você desligar e se entregar ao momento.
        </p>
      </div>
    ),
  },
  {
    question: "Quais formas de pagamento vocês aceitam?",
    answer: (
      <div className="space-y-4">
        <p className="text-base text-gray-600 sm:text-lg">
          Facilitamos para que você não precise se preocupar com nada:
        </p>
        <ul className="grid grid-cols-1 gap-3 text-gray-600 sm:grid-cols-2">
          <li className="flex items-center gap-3 text-base sm:text-lg">
            <Sparkles className="h-5 w-5 text-purple-500" />
            <span>Cartão de crédito (até 12x)</span>
          </li>
          <li className="flex items-center gap-3 text-base sm:text-lg">
            <Sparkles className="h-5 w-5 text-purple-500" />
            <span>Pix (com desconto especial)</span>
          </li>
          <li className="flex items-center gap-3 text-base sm:text-lg">
            <Sparkles className="h-5 w-5 text-purple-500" />
            <span>Dinheiro</span>
          </li>
          <li className="flex items-center gap-3 text-base sm:text-lg">
            <Sparkles className="h-5 w-5 text-purple-500" />
            <span>Cartão de débito</span>
          </li>
        </ul>
        <p className="text-base font-medium text-purple-600 sm:text-lg">
          💰 O Pix tem 10% de desconto à vista — porque você merece ser reconhecida por cuidar de si!
        </p>
      </div>
    ),
  },
  {
    question: "Posso trazer minha filha, amiga ou madrinha?",
    answer: (
      <div className="space-y-4">
        <p className="text-base text-gray-600 sm:text-lg">
          Claro que sim! Cuidar de si é ainda mais especial quando compartilhamos com quem amamos.
        </p>
        <div className="rounded-2xl border border-purple-200 bg-purple-50 p-5">
          <p className="text-base text-purple-700 sm:text-lg">
            <strong>Programa Duas Bellas:</strong> Quando você agenda junto com uma amiga ou filha (a partir de 12 anos), cada uma ganha um spa dos pés bônus para usar depois. É nossa forma de celebrar a conexão feminina!
          </p>
        </div>
        <p className="text-base text-gray-600 sm:text-lg">
          Converse com nossa equipe no WhatsApp para agendar juntas e receber o benefício. Também temos pacotes especiais para grupos de noiva e madrinhas!
        </p>
      </div>
    ),
  },
];

export function FAQSpaDay() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-purple-100 py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-8 h-64 w-64 rounded-full bg-purple-300/20 blur-3xl" />
        <div className="absolute -right-24 bottom-8 h-64 w-64 rounded-full bg-pink-300/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-1 text-sm font-medium uppercase tracking-[0.2em] text-purple-600 sm:text-base">
            <Shield className="h-4 w-4" />
            Tudo que você precisa saber
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Dúvidas que toda bellinha tem
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-base text-gray-600 sm:text-lg">
            Respostas com carinho para que você se sinta segura e acolhida
          </p>
        </div>

        <div className="mt-10 space-y-5">
          {faqData.map((item, index) => (
            <Card
              key={index}
              className={`overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md ${
                openIndex === index ? "border-purple-300" : ""
              }`}
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-semibold text-gray-900 sm:text-xl">
                  {item.question}
                </span>
                <div
                  className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600 transition-all duration-300 sm:h-10 sm:w-10 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown className="h-5 w-5" />
                </div>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="px-5 pb-6 pt-0 sm:px-6">{item.answer}</div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-purple-200 bg-white p-6 text-center sm:p-8">
          <Gift className="mx-auto mb-4 h-12 w-12 text-purple-500 sm:h-14 sm:w-14" />
          <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Ainda tem alguma dúvida especial?
          </h3>
          <p className="mx-auto mt-2 max-w-md text-base text-gray-600 sm:text-lg">
            Nossa equipe está aqui para te acolher e responder com todo carinho do mundo
          </p>
          <Button
            variant="outline"
            className="mt-4 rounded-full bg-purple-600 px-6 py-3 text-base text-white hover:bg-purple-700 sm:mt-6 sm:px-8"
            onClick={() =>
              window.open(
                "https://wa.me/5511976820135?text=" +
                  encodeURIComponent("Olá! Tenho uma dúvida sobre o Spa Day"),
                "_blank"
              )
            }
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}