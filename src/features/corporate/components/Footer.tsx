import { Building2, Phone, Mail, MapPin, Clock, Sparkles, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { CONTACT_CONFIG } from "@/config/contacts";

const COLORS = {
  darkBg: "#1F1F1F",
  lilac: "#CBA4DE",
  gold: "#C7A45C",
  text: "#F5F5F5",
  textLight: "#E0E0E0",
};

// B2B specific contacts
const WHATSAPP_COMERCIAL = "5511988269196";
const CORPORATE_EMAIL = "contato@spacobellas.com.br";

const waUrl = (text: string) =>
  `https://wa.me/${WHATSAPP_COMERCIAL}?${new URLSearchParams({ text }).toString()}`;

/**
 * Footer component specifically for the Corporate landing page.
 * Uses a darker theme and B2B focused links.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 md:py-14" style={{ backgroundColor: COLORS.darkBg }}>
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Purpose */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Sparkles size={20} style={{ color: COLORS.lilac }} />
              <h3 className="text-lg font-semibold" style={{ color: COLORS.gold }}>
                Spaço Bellas
              </h3>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: COLORS.textLight }}>
              Bem‑estar, propósito e alta performance para empresas, escolas e condomínios — cuidado humano com entregas mensuráveis para decisões de gestão. 
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-base font-semibold" style={{ color: COLORS.gold }}>
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#pacotes" className="hover:opacity-80 transition-opacity" style={{ color: COLORS.textLight }}>Pacotes</a></li>
              <li><a href="#como-funciona" className="hover:opacity-80 transition-opacity" style={{ color: COLORS.textLight }}>Como funciona</a></li>
              <li><a href="#resultados" className="hover:opacity-80 transition-opacity" style={{ color: COLORS.textLight }}>Resultados</a></li>
              <li><a href="#faq" className="hover:opacity-80 transition-opacity" style={{ color: COLORS.textLight }}>FAQ</a></li>
              <li><a href="/" className="hover:opacity-80 transition-opacity" style={{ color: COLORS.textLight }}>Início</a></li>
            </ul>
          </div>

          {/* B2B Commercial */}
          <div>
            <h4 className="mb-4 text-base font-semibold" style={{ color: COLORS.gold }}>
              Fale com o Comercial
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5" style={{ color: COLORS.lilac }} />
                <a 
                  href={waUrl("Olá! Quero levar o Bellas Corporativo para minha empresa.")} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity" 
                  style={{ color: COLORS.textLight }}
                >
                  WhatsApp Comercial
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5" style={{ color: COLORS.lilac }} />
                <a href={`mailto:${CORPORATE_EMAIL}`} className="hover:opacity-80 transition-opacity" style={{ color: COLORS.textLight }}>
                  {CORPORATE_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5" style={{ color: COLORS.lilac }} />
                <span style={{ color: COLORS.textLight }}>
                  {CONTACT_CONFIG.ADDRESS}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-0.5" style={{ color: COLORS.lilac }} />
                <span style={{ color: COLORS.textLight }}>
                  Atendimento: Seg–Sáb, 9h–19h
                </span>
              </li>
            </ul>
          </div>

          {/* CTA & Socials */}
          <div>
            <h4 className="mb-4 text-base font-semibold" style={{ color: COLORS.gold }}>
              Proposta em 24h úteis
            </h4>
            <a
              href={waUrl("Olá! Quero meu orçamento do Bellas Corporativo (pacote e datas).")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition hover:opacity-90 active:scale-[0.98]"
              style={{ backgroundColor: COLORS.lilac, color: "#FFFFFF" }}
            >
              Solicitar orçamento agora
            </a>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={CONTACT_CONFIG.INSTAGRAM_HANDLE.startsWith('@') ? `https://instagram.com/${CONTACT_CONFIG.INSTAGRAM_HANDLE.slice(1)}` : `https://instagram.com/${CONTACT_CONFIG.INSTAGRAM_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-all hover:scale-110"
                style={{ color: COLORS.text }}
                aria-label="Instagram do Spaço Bellas"
              >
                <Instagram size={18} />
              </a>
              <a 
                href={waUrl("Olá! Quero conhecer o Programa Mulheres VIP Bellas.")} 
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

        <div className="mt-8 border-t border-white/10 pt-6">
          <div className="text-center text-xs" style={{ color: COLORS.textLight, opacity: 0.85 }}>
            <p>© {currentYear} Spaço Bellas</p>
            <p>Feito com 💜 por <a href="https://starttecnologico.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition" style={{ color: COLORS.lilac }}>Start Tecnológico</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
