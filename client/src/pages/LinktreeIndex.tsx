import React from "react";
import { Link } from "wouter";
import spacoBellasLogo from "./spacobellaslogo.jpg";
import spacoBellasBackground from "./spaco.png";
import { FaBuilding, FaStar, FaCrown, FaWhatsapp, FaGem } from "react-icons/fa";
import { Building2 } from "lucide-react";

interface LinkItem {
  id: string;
  title: string;
  subtitle?: string;
  href: string;
  external?: boolean;
  backgroundImage: string;
  textPosition: "left" | "right";
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  kind?: "whatsapp" | "instagram" | "spa" | "blog" | "agenda" | "default";
}

const PALETTE_BY_ID: Record<string, { base: string; accent: string }> = {
  institucional:   { base: "#7C3AED", accent: "#A78BFA" }, // roxo
  "mensal-bellas": { base: "#D97706", accent: "#F59E0B" }, // âmbar
  celebridades:    { base: "#06B6D4", accent: "#22D3EE" }, // ciano
  vip:             { base: "#E11D48", accent: "#FB7185" }, // rosa
  empresas:        { base: "#0EA5E9", accent: "#38BDF8" }, // azul
  whatsapp:        { base: "#16A34A", accent: "#22C55E" }, // verde
  crm: { base: "#111827", accent: "#06B6D4" },
};
const paletteOf = (id: string) =>
  PALETTE_BY_ID[id] ?? { base: "#334155", accent: "#64748B" };


const links: LinkItem[] = [
  {
    id: "institucional",
    title: "INSTITUCIONAL",
    subtitle: "Conheça o Spaço Bellas",
    href: "/institucional",
    backgroundImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=400&fit=crop",
    textPosition: "left",
    Icon: FaBuilding,
  },
  {
    id: "mensal-bellas",
    title: "PROGRAMA VIP BELLAS",
    subtitle: "Planos Mensais Exclusivos",
    href: "/mensal-bellas",
    backgroundImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=400&fit=crop",
    textPosition: "right",
    Icon: FaGem,
  },
  {
    id: "celebridades",
    title: "SPA DAS CELEBRIDADES",
    subtitle: "Viva seu Dia de Estrela",
    href: "/celebridades",
    backgroundImage: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=400&fit=crop",
    textPosition: "left",
    Icon: FaStar,
  },
  {
    id: "vip",
    title: "GRUPO VIP",
    subtitle: "Pré-Lançamento com Bônus Exclusivo",
    href: "/whatsapp/grupo-vip",
    backgroundImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=400&fit=crop",
    textPosition: "right",
    Icon: FaCrown,
  },
  {
    id: "empresas",
    title: "BELLA EMPRESAS",
    subtitle: "Bem‑estar, Propósito e Alta Performance no Seu Time",
    href: "/empresas",
    backgroundImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=400&fit=crop",
    textPosition: "left",
    Icon: Building2,
  },
  {
    id: "whatsapp",
    title: "ATENDIMENTO",
    subtitle: "WhatsApp Direto",
    href: "/whatsapp",
    backgroundImage: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&h=400&fit=crop",
    textPosition: "right",
    Icon: FaWhatsapp,
  },
  {
    id: "crm",
    title: "CRM (Restrito)",
    subtitle: "Acesso para colaboradores",
    href: "https://bella-gestor.vercel.app", // se já é público com login
    textPosition: "left",
    backgroundImage: "none",
    Icon: FaBuilding,
    external: true, // abre em nova aba
  },
];

export default function LinktreeLanding() {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 flex flex-col items-center font-sans">
      {/* Hero Section com Background */}
      <div className="relative w-full mb-4">
        {/* Background Image Layer */}
        <div className="absolute inset-0 h-[500px] overflow-hidden">
          <img
            src={spacoBellasBackground}
            alt=""
            className="w-full h-full object-cover blur-[8px] scale-110"
          />
          {/* Overlay Gradiente - Transição suave */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 via-pink-900/60 to-pink-50"></div>
        </div>
        
        {/* Content Layer */}
        <div className="relative z-10 flex flex-col items-center pt-16 pb-6">
          <div className="w-36 h-36 rounded-full overflow-hidden mb-5 ring-4 ring-white shadow-2xl">
            <img
              src={spacoBellasLogo}
              alt="Spaço Bellas"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-2 text-white drop-shadow-2xl">
            Spaço Bellas
          </h1>
          <p className="text-pink-100 text-center text-lg font-semibold drop-shadow-lg">
            Especialista em Beleza e Bem-Estar!
          </p>
        </div>
      </div>

      {/* Banners Section */}
      <div className="-mt-2 w-full max-w-md space-y-6 mb-16">
        {links.map((link) => {
          const LinkComponent: React.ElementType = link.external ? "a" : Link;
          const linkProps = link.external
            ? { href: link.href, target: "_blank", rel: "noopener noreferrer" }
            : { href: link.href };

          const pal = paletteOf(link.id);

          return (
            <LinkComponent key={link.id} {...linkProps} className="block w-full group">
              <div
                className="mx-4 sm:mx-6 relative h-44 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5"
                style={{
                  background: `linear-gradient(180deg, ${pal.accent} 0%, ${pal.base} 100%)`,
                  border: `2px solid ${pal.accent}CC`,
                  outline: `6px solid ${pal.accent}40`,
                }}
              >
                {/* Conteúdo centralizado, sem CTA */}
                <div
                  className={`relative h-full flex items-center ${
                    link.textPosition === "right" ? "justify-end" : "justify-start"
                  } px-6`}
                >
                  <div
                    className={`${
                      link.textPosition === "right" ? "text-right" : "text-left"
                    } flex ${
                      link.textPosition === "right" ? "flex-row-reverse" : "flex-row"
                    } items-center gap-4 w-full`}
                  >
                    {/* Ícone branco com sombra para legibilidade */}
                    <div className="flex-shrink-0" style={{ color: "#FFFFFF" }}>
                      <link.Icon
                        className="w-12 h-12"
                        style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.35))" }}
                      />
                    </div>

                    {/* Textos em branco */}
                    <div className="flex-1">
                      <h2
                        className="font-black text-2xl md:text-3xl leading-tight mb-1 tracking-tight text-white"
                        style={{ textShadow: "0 1px 0 rgba(0,0,0,0.35)" }}
                      >
                        {link.title}
                      </h2>
                      {link.subtitle && (
                        <p
                          className="text-sm md:text-base font-semibold text-white"
                          style={{ opacity: 0.95, textShadow: "0 1px 0 rgba(0,0,0,0.25)" }}
                        >
                          {link.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </LinkComponent>
          );
        })}
      </div>


      {/* Social Media Icons */}
      <div className="flex items-center justify-center gap-8 mb-8 bg-white rounded-full px-12 py-4 shadow-lg border border-pink-200">
        <a
          href="https://instagram.com/spacobellasoficial"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-pink-500 transition-colors cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
        <a
          href="https://youtube.com/@SpacoBellasBellas" /* Adicionado o link correto */
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-pink-500 transition-colors cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
        </a>
        <a
          href="https://tiktok.com/@spacobellasoficial"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-pink-500 transition-colors cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
          </svg>
        </a>
        <a
          href="https://wa.me/5511976820135"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-pink-500 transition-colors cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>
      </div>

      {/* Footer */}
      <footer
        className="mx-4 sm:mx-6 mt-12 mb-16 md:mb-24 text-center text-gray-500 text-sm space-y-1 rounded-2xl bg-white/70 backdrop-blur px-6 pt-6 pb-8"
        style={{ paddingBottom: "calc(1rem + env(safe-area-inset-bottom, 0px))" }}
      >
        <div>
          R. Antônio Fortunato, 678 - Burgo Paulista, São Paulo <br /> 3 min do Metrô Patriarca
        </div>
        <div>WhatsApp: (11) 9.7682-0135</div>
        <div className="pt-4 text-xs">
          © 2025 Spaço Bellas - Todos os direitos reservados
        </div>
      </footer>
    </div>
  );
}
