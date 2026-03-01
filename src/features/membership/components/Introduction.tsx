import { useEffect, useState } from "react";
import { Sparkles, HeartHandshake, MessageCircle } from "lucide-react";

import imgAcolhedor from "@/assets/images/membership/escuta/acolhedor.jpg";

const COLORS = { 
  lilacBg: "#F6EDF9", 
  gold: "#C7A45C", 
  text: "#2F2F2F", 
  primary: "#8E5BAE" 
};

/**
 * Introduction section for the Membership program.
 * Formerly known as EscutaSection, it focuses on the emotional support aspect.
 */
export function Introduction() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="escuta"
      aria-labelledby="escuta-title"
      className="py-10 md:py-14"
      style={{ backgroundColor: COLORS.lilacBg, color: COLORS.text }}
    >
      <div className="container mx-auto px-4">
        <div className="flex w-full items-center justify-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs"
            style={{ 
              backgroundColor: "#FAF8FB", 
              color: COLORS.primary, 
              border: `1px solid ${COLORS.primary}20` 
            }}
          >
            <Sparkles size={14} />
            Acolhimento que abraça
          </span>
        </div>

        <header
          className={[
            "mx-auto mt-4 max-w-3xl text-center transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          ].join(" ")}
        >
          <h2
            id="escuta-title"
            className="text-2xl md:text-3xl font-semibold"
            style={{ color: COLORS.gold }}
          >
            Espaço Escuta Bellas
          </h2>
          <p className="mt-2 opacity-90">
            Um ambiente para conversar, desabafar e se reconectar — com escuta empática e sem julgamentos.
          </p>
        </header>

        <article className="mt-6 rounded-2xl bg-white shadow border border-transparent overflow-hidden">
          <div className="grid md:grid-cols-2">
            <img
              src={imgAcolhedor}
              alt="Ambiente acolhedor do Espaço Escuta"
              className="h-56 w-full object-cover md:h-full"
              loading="lazy"
            />
            <div className="p-6">
              <div className="flex items-center gap-3">
                <div
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#F6EDF9", color: COLORS.primary }}
                >
                  <HeartHandshake size={22} />
                </div>
                <h3 className="text-lg font-semibold">Acolhimento de verdade</h3>
              </div>

              <p className="mt-2 text-sm opacity-90">
                Cada assinante tem acesso à escuta empática com a Luzinete ou uma colaboradora do Bellas, em um espaço reservado e seguro.
              </p>

              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                <li className="flex items-start gap-2">
                  <MessageCircle size={18} className="mt-0.5 text-[#8E5BAE]" aria-hidden />
                  <span className="text-sm">
                    Quando necessário, você ganha 30 minutos com psicóloga parceira — totalmente gratuito.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <MessageCircle size={18} className="mt-0.5 text-[#8E5BAE]" aria-hidden />
                  <span className="text-sm">
                    Acolhimento emocional faz parte do autocuidado: aqui, você é ouvida com carinho e respeito.
                  </span>
                </li>
              </ul>

              <p className="mt-4 text-xs opacity-75">
                Agende sua sessão de escuta junto com seu horário do mês e viva a experiência completa de cuidado.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
