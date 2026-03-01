import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Lightbulb, Users2, ArrowRight } from "lucide-react";
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from "@/config/contacts";

// Local images
import imgSpaDay from "@/assets/images/membership/workshops/spaday.jpeg";
import imgWaiting from "@/assets/images/membership/workshops/waiting.jpg";

const COLORS = {
  lilacBg: "#F6EDF9",
  gold: "#C7A45C",
  text: "#2F2F2F",
  primary: "#8E5BAE",
};

/**
 * Workshops and Networking section for the Membership feature.
 * Highlights the educational and community aspects of the program.
 */
export function Workshops() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="workshops"
      aria-labelledby="wk-title"
      className="py-10 md:py-14"
      style={{ backgroundColor: "#fefbffff", color: COLORS.text }}
    >
      <div className="container mx-auto px-4">
        <div className="flex w-full items-center justify-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs"
            style={{
              backgroundColor: "#FAF8FB",
              color: COLORS.primary,
              border: `1px solid ${COLORS.primary}20`,
            }}
          >
            <Sparkles size={14} />
            Cresça com outras mulheres
          </span>
        </div>

        <header
          className={[
            "mx-auto mt-4 max-w-3xl text-center transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          ].join(" ")}
        >
          <h2
            id="wk-title"
            className="text-2xl md:text-3xl font-semibold"
            style={{ color: COLORS.gold }}
          >
            Workshops e Networking
          </h2>
          <p className="mt-2 opacity-90">
            Componente educacional e de pertencimento para impulsionar a sua
            vida e fortalecer sua rede.
          </p>
        </header>

        <div className="mt-6 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Card 1 - Plans 1 and 2 */}
          <article className="rounded-2xl bg-white p-0 shadow border border-transparent hover:shadow-md transition overflow-hidden">
            <img
              src={imgSpaDay}
              alt="Spa Day Workshop"
              className="h-40 w-full object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <div className="flex items-center gap-2">
                <div
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#F6EDF9", color: COLORS.primary }}
                  aria-hidden
                >
                  <Lightbulb size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Planos 1 e 2</h3>
                  <p className="text-xs opacity-70">Essencial e Relax</p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <p className="font-medium">
                  Workshop "Como fazer R$ 5.000/mês com Spa dos Pés e Massagens
                  Bellas".
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Aprendizado prático com foco em renda e autonomia.</li>
                  <li>
                    Pertencimento e apoio entre mulheres da comunidade Bellas.
                  </li>
                </ul>
              </div>

              <div className="mt-5">
                <Button
                  asChild
                  className="w-full md:w-auto hover:opacity-90 active:scale-[0.98] transition-all"
                  style={{ backgroundColor: COLORS.primary, color: "#FFFFFF" }}
                >
                  <a
                    href={buildWhatsAppUrl(
                      "Olá! Quero participar do workshop do Programa Mulheres VIP Bellas (Planos 1 e 2).",
                      {
                        utm_source: "site",
                        utm_medium: "mensal-bellas",
                        utm_content: "workshop_p12",
                      },
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Quero participar do workshop (Planos 1 e 2)"
                  >
                    Quero o workshop
                    <ArrowRight className="ml-2" size={16} />
                  </a>
                </Button>
              </div>
            </div>
          </article>

          {/* Card 2 - Plans 3+ */}
          <article className="rounded-2xl bg-white p-0 shadow border border-transparent hover:shadow-md transition overflow-hidden">
            <img
              src={imgWaiting}
              alt="Networking Group"
              className="h-40 w-full object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <div className="flex items-center gap-2">
                <div
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#F6EDF9", color: COLORS.primary }}
                  aria-hidden
                >
                  <Users2 size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Planos 3+</h3>
                  <p className="text-xs opacity-70">
                    Celebridade, Royal e Infinity
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <p className="font-medium">
                  Grupo "Mulheres de Alto Valor SP".
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Networking, mentorias e eventos exclusivos.</li>
                  <li>Ambiente de alto valor, acolhedor e inspirador.</li>
                </ul>
              </div>

              <div className="mt-5">
                <Button
                  asChild
                  variant="outline"
                  className="w-full md:w-auto border hover:bg-purple-50 active:scale-[0.98] transition-all"
                  style={{
                    borderColor: COLORS.primary,
                    color: COLORS.primary,
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  <a
                    href={buildWhatsAppUrl(
                      "Olá! Quero entrar no Grupo Mulheres de Alto Valor SP (Planos 3+).",
                      {
                        utm_source: "site",
                        utm_medium: "mensal-bellas",
                        utm_content: "grupo_3plus",
                      },
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Quero entrar no Grupo Mulheres de Alto Valor SP (Planos 3+)"
                  >
                    Entrar no grupo VIP
                    <ArrowRight className="ml-2" size={16} />
                  </a>
                </Button>
              </div>
            </div>
          </article>
        </div>

        <p className="mt-6 text-xs opacity-80 text-center max-w-3xl mx-auto">
          Acesso conforme o plano ativo (Workshop: Planos 1–2 • Grupo Mulheres
          de Alto Valor SP: Planos 3+).
        </p>
      </div>
    </section>
  );
}
