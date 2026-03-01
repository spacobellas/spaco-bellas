import { Sparkles, Instagram, Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import {
  CONTACT_CONFIG,
  buildWhatsAppUrl,
  WHATSAPP_MESSAGES,
} from "@/config/contacts";

const COLORS = {
  darkBg: "#1F1F1F",
  lilac: "#CBA4DE",
  gold: "#C7A45C",
  text: "#F5F5F5",
  textLight: "#E0E0E0",
};

/**
 * Footer component specifically for the Membership (VIP) landing page.
 * Uses a dark theme and VIP-focused navigation.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = buildWhatsAppUrl(WHATSAPP_MESSAGES.MENSAL_VIP);

  return (
    <footer
      className="py-10 md:py-14"
      style={{ backgroundColor: COLORS.darkBg }}
    >
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Purpose */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={20} style={{ color: COLORS.lilac }} />
              <h3
                className="text-lg font-semibold"
                style={{ color: COLORS.gold }}
              >
                Spaço Bellas
              </h3>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: COLORS.textLight }}
            >
              Programa VIP Bellas: beleza completa, bem-estar e acolhimento
              emocional em um único lugar — com economia real e pertencimento.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-base font-semibold mb-4"
              style={{ color: COLORS.gold }}
            >
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#planos"
                  className="hover:opacity-80 transition"
                  style={{ color: COLORS.textLight }}
                >
                  Ver planos
                </a>
              </li>
              <li>
                <a
                  href="#workshops"
                  className="hover:opacity-80 transition"
                  style={{ color: COLORS.textLight }}
                >
                  Workshops e Networking
                </a>
              </li>
              <li>
                <a
                  href="#escuta"
                  className="hover:opacity-80 transition"
                  style={{ color: COLORS.textLight }}
                >
                  Espaço Escuta Bellas
                </a>
              </li>
              <li>
                <a
                  href="/spa-celebridades"
                  className="hover:opacity-80 transition"
                  style={{ color: COLORS.textLight }}
                >
                  Spa Day das Celebridades
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:opacity-80 transition"
                  style={{ color: COLORS.textLight }}
                >
                  Início
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-base font-semibold mb-4"
              style={{ color: COLORS.gold }}
            >
              Fale Conosco
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone
                  size={16}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: COLORS.lilac }}
                />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition"
                  style={{ color: COLORS.textLight }}
                >
                  {CONTACT_CONFIG.PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail
                  size={16}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: COLORS.lilac }}
                />
                <a
                  href="mailto:contato@spacobellas.com.br"
                  className="hover:opacity-80 transition"
                  style={{ color: COLORS.textLight }}
                >
                  contato@spacobellas.com.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin
                  size={16}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: COLORS.lilac }}
                />
                <span style={{ color: COLORS.textLight }}>
                  {CONTACT_CONFIG.ADDRESS}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock
                  size={16}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: COLORS.lilac }}
                />
                <span style={{ color: COLORS.textLight }}>
                  Seg - Sáb: 9h às 19h • Dom: Fechado
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter & Socials */}
          <div>
            <h4
              className="text-base font-semibold mb-4"
              style={{ color: COLORS.gold }}
            >
              Receba Novidades 💜
            </h4>
            <p className="text-xs mb-3" style={{ color: COLORS.textLight }}>
              Cadastre-se para receber promoções especiais e dicas de
              autocuidado.
            </p>
            <form className="flex flex-col gap-2 mb-4">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="rounded-md bg-white/10 border border-white/20 px-3 py-2 text-sm placeholder:text-white/60 focus:outline-none focus:ring-2"
                style={{
                  color: COLORS.text,
                  borderColor: "rgba(255,255,255,0.2)",
                }}
              />
              <button
                type="submit"
                className="rounded-md px-4 py-2 text-sm font-medium transition hover:opacity-90 active:scale-[0.98]"
                style={{ backgroundColor: COLORS.lilac, color: "#FFFFFF" }}
              >
                Enviar
              </button>
            </form>
            <div className="flex items-center gap-3">
              <a
                href={
                  CONTACT_CONFIG.INSTAGRAM_HANDLE.startsWith("@")
                    ? `https://instagram.com/${CONTACT_CONFIG.INSTAGRAM_HANDLE.slice(1)}`
                    : `https://instagram.com/${CONTACT_CONFIG.INSTAGRAM_HANDLE}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-all hover:scale-110"
                style={{ color: COLORS.text }}
                aria-label="Instagram do Spaço Bellas"
              >
                <Instagram size={18} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-all hover:scale-110"
                style={{ color: COLORS.text }}
                aria-label="WhatsApp do Spaço Bellas"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-6">
          <div
            className="flex flex-col items-center justify-center gap-2 text-center text-xs"
            style={{ color: COLORS.textLight, opacity: 0.8 }}
          >
            <p>© {currentYear} Spaço Bellas</p>
            <p>
              Feito com 💜 por{" "}
              <a
                href="https://starttecnologico.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
                style={{ color: COLORS.lilac }}
              >
                Start Tecnológico
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
