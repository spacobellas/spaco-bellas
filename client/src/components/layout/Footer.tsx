import { MapPin, Phone, Clock, Mail, Send, Sparkles } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const WHATSAPP_NUMBER = "5511976820135";
const PHONE_NUMBER = "(11) 97682-0135";
const EMAIL = "contato@spacobellas.com.br";
const ADDRESS = "R. Antônio Fortunato, 678 - Burgo Paulista, São Paulo - SP";
const INSTAGRAM = "https://instagram.com/spacobellasoficial";
const FACEBOOK = "https://facebook.com/p/Spaço-Bellas-61559677151317/";

const navigationSections = [
  {
    title: "Navegação",
    links: [
      { label: "Início", target: "home" },
      { label: "Sobre", target: "introduction" },
      { label: "Experiências", target: "spa-day" },
      { label: "Diferenciais", target: "differentials" },
    ],
  },
  {
    title: "Contato",
    links: [
      { label: "Depoimentos", target: "testimonials" },
      { label: "WhatsApp", target: "whatsapp" },
      { label: "Instagram", target: "instagram" },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();

  const smoothScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  const handleLinkClick = (target: string) => {
    if (target === "whatsapp") {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank");
    } else if (target === "instagram") {
      window.open(INSTAGRAM, "_blank");
    } else {
      smoothScrollTo(target);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-[var(--primary-purple)]" />
              <h3 className="text-2xl font-bold">Spaço Bellas</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Spa Day das Celebridades: onde toda mulher vive seu dia de estrela.
            </p>
            <div className="flex gap-4">
            {/* Instagram - Gradiente no hover */}
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5 text-white" />
            </a>
            
            {/* Facebook - Azul no hover */}
            <a
              href={FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-10 h-10 bg-white/10 hover:bg-[#1877F2] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Facebook"
            >
              <FaFacebook className="w-5 h-5 text-white" />
            </a>
            
            {/* WhatsApp - Verde no hover */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-10 h-10 bg-white/10 hover:bg-[#25D366] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-5 h-5 text-white" />
            </a>
          </div>
          </div>

          {/* Navigation columns */}
          {navigationSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold mb-4 text-[var(--primary-purple)]">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => handleLinkClick(link.target)}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[var(--primary-purple)]">
              Fale Conosco
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-[var(--primary-purple)]" />
                <span className="text-sm">{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0 text-[var(--primary-purple)]" />
                <a href={`tel:${WHATSAPP_NUMBER}`} className="hover:text-white transition-colors text-sm">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0 text-[var(--primary-purple)]" />
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors text-sm">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Clock className="w-5 h-5 flex-shrink-0 mt-1 text-[var(--primary-purple)]" />
                <div className="text-sm">
                  <div>Seg - Sáb: 9h às 19h</div>
                  <div>Dom: Fechado</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-bold mb-4">
              Receba novidades exclusivas 💜
            </h4>
            <p className="text-gray-400 mb-6">
              Cadastre-se para receber promoções especiais e dicas de autocuidado
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[var(--primary-purple)]"
                required
              />
              <Button
                type="submit"
                className="bg-[var(--primary-purple)] hover:bg-[var(--primary-purple)]/90 px-8"
              >
                {subscribed ? "Enviado! ✓" : "Enviar"}
                {!subscribed && <Send className="w-4 h-4 ml-2" />}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Spaço Bellas</p>
          <p className="mt-2">
            <p>Feito com 💜 por <a href="https://starttecnologico.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">Start Tecnológico</a></p>
          </p>
        </div>
      </div>
    </footer>
  );
}
