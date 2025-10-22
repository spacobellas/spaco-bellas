import React from "react";
import { Link } from "wouter";
import spacoBellasLogo from "./spacobellaslogo.jpg";

interface LinkItem {
  id: string;
  label: string;
  subtitle?: string;
  href: string;
  external?: boolean;
}

const links: LinkItem[] = [
  {
    id: "institucional",
    label: "📍 Institucional",
    subtitle: "Conheça o Spaço Bellas",
    href: "/institucional",
  },
  {
    id: "celebridades",
    label: "✨ Spa das Celebridades",
    subtitle: "Viva seu Dia de Estrela",
    href: "/celebridades",
  },
  {
    id: "vip",
    label: "👑 Grupo VIP - Pré-Lançamento",
    subtitle: "Vagas Limitadas com Bônus Exclusivo",
    href: "/whatsapp/grupo-vip",
  },
  {
    id: "whatsapp",
    label: "💬 WhatsApp Direto",
    subtitle: "Fale conosco agora",
    href: "/whatsapp",
  },
  {
    id: "instagram",
    label: "📸 @spacobellasoficial",
    subtitle: "Siga no Instagram",
    href: "https://instagram.com/spacobellasoficial",
    external: true,
  },
];

export default function LinktreeLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 py-12 px-4">
      <div className="max-w-md mx-auto">
        {/* Logo Real */}
        <div className="flex justify-center mb-6">
          <img 
            src={spacoBellasLogo} 
            alt="Spaço Bellas Logo" 
            className="w-32 h-32 object-contain rounded-full shadow-lg bg-white p-2"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Spaço Bellas
        </h1>
        <p className="text-center text-gray-600 mb-8">Spa & Estética Premium</p>

        {/* Links */}
        <div className="space-y-4">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white hover:bg-gray-50 text-gray-800 font-semibold py-4 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-center border-2 border-pink-200 hover:border-pink-300 cursor-pointer"
              >
                <div>{link.label}</div>
                {link.subtitle && (
                  <div className="text-sm text-gray-500 mt-1">
                    {link.subtitle}
                  </div>
                )}
              </a>
            ) : (
              <Link
                key={link.id}
                href={link.href}
                className="block w-full bg-white hover:bg-gray-50 text-gray-800 font-semibold py-4 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-center border-2 border-pink-200 hover:border-pink-300 cursor-pointer"
              >
                <div>{link.label}</div>
                {link.subtitle && (
                  <div className="text-sm text-gray-500 mt-1">
                    {link.subtitle}
                  </div>
                )}
              </Link>
            )
          )}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>Unidade Patriarca - 3min do Metrô</p>
          <p className="mt-1">WhatsApp: (11) 9.7682-0135</p>
          <p className="mt-4">© 2025 Spaço Bellas</p>
        </div>
      </div>
    </div>
  );
}
