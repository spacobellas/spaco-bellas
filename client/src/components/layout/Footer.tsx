import { MapPin, Phone, Clock, Mail, Send } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import butterflyIcon from "@assets/generated_images/Purple_butterfly_decorative_element_3acd43fe.png";

const WHATSAPP_NUMBER = "5511976820135";
const PHONE_NUMBER = "(11) 97682-0135";

const navigationSections = [
  {
    title: "Navegação",
    links: [
      { label: "Início", target: "home" },
      { label: "Day Spa", target: "spa-day" },
      { label: "Mensal Bellas", target: "mensal-bellas" },
      { label: "Empresas", target: "empresas" },
    ]
  },
  {
    title: "Serviços",
    links: [
      { label: "Catálogo Completo", target: "menu" },
      { label: "Depoimentos", target: "testimonials" },
    ]
  }
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
        behavior: "smooth"
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

  return (
    <footer className="relative bg-gradient-to-br from-[var(--primary-purple)] via-[var(--primary-purple-dark)] to-[var(--primary-purple)] text-white overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url(${butterflyIcon})`,
          backgroundSize: '200px',
          backgroundRepeat: 'repeat',
        }}
      ></div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--accent-gold)] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div>
                <h3 className="text-3xl font-display text-white">Spaço Bellas</h3>
              </div>
            </div>
            <p className="text-lg font-body text-white/90 leading-relaxed mb-8 max-w-md">
              Seu refúgio de luxo e bem-estar em São Paulo. Transformação, renovação e autocuidado em cada detalhe.
            </p>
            
            <div className="space-y-4 mb-8">
              <a 
                href={`https://maps.google.com/?q=Av.+Paulista+1000+São+Paulo`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/80 hover:text-white transition-colors group"
              >
                <MapPin className="h-5 w-5 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <span className="font-body">R. Antônio Fortunato, 678 - Burgo Paulista, São Paulo - SP, 03681-000</span>
              </a>
              
              <a 
                href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
              >
                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="font-body">{PHONE_NUMBER}</span>
              </a>
              
              <div className="flex items-start gap-3 text-white/80">
                <Clock className="h-5 w-5 flex-shrink-0 mt-1" />
                <span className="font-body">
                  Seg - Sáb: 9h - 20h<br />
                </span>
              </div>
              
              <a 
                href="mailto:contato@spacobellas.com.br"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="font-body">contato@spacobellas.com.br</span>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white hover:text-[var(--primary-purple)] hover:scale-110 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-xl" />
              </a>
              <a
                href="https://instagram.com/espacobellas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white hover:text-[var(--primary-purple)] hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://facebook.com/espacobellas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white hover:text-[var(--primary-purple)] hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="text-xl" />
              </a>
            </div>
          </div>

          {navigationSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xl font-display mb-6 text-[var(--neutral-beige)]">{section.title}</h4>
              <ul className="space-y-3 font-body">
                {section.links.map((link) => (
                  <li key={link.target}>
                    <button
                      onClick={() => smoothScrollTo(link.target)}
                      className="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-[var(--accent-gold)]"></span>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-xl font-display mb-6 text-[var(--neutral-beige)]">Newsletter</h4>
            <p className="text-sm font-body text-white/80 mb-4 leading-relaxed">
              Receba ofertas exclusivas e novidades diretamente no seu e-mail
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                required
                className="h-12 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 focus:bg-white/15 focus:border-white/40 rounded-xl"
              />
              <Button 
                type="submit"
                className="w-full h-12 bg-[var(--neutral-beige)] text-[var(--primary-purple)] hover:bg-white font-body font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                {subscribed ? (
                  <>✓ Inscrito!</>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Inscrever
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-body text-white/70">
          <p className="text-white">
            © {currentYear} Spaço Bellas. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <span className="w-1 h-1 rounded-full bg-white/30"></span>
            <a href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
