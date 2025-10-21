import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Início", target: "home" },
  { label: "Sobre", target: "introduction" },
  { label: "Day Spa", target: "spa-day" },
  { label: "Mensal Bellas", target: "mensal-bellas" },
  { label: "Empresas", target: "empresas" },
  { label: "Serviços", target: "menu" },
  { label: "Depoimentos", target: "testimonials" },
];

const WHATSAPP_NUMBER = "5511976820135";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Gostaria de agendar minha experiência no Spaço Bellas.");
const PHONE_NUMBER = "(11) 97682-0135";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map(item => document.getElementById(item.target));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navItems[i].target);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Controle de overflow do body quando menu mobile está aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

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
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 transition-all duration-500 z-50 ${
          scrolled 
            ? 'header-glass shadow-2xl' 
            : 'bg-gradient-to-b from-black/20 to-transparent'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <button
              onClick={() => smoothScrollTo("home")}
              className="flex items-center gap-3 group relative z-10"
            >
              <div>
                <span className={`text-3xl font-display font-bold tracking-wide block transition-colors duration-300 ${
                  scrolled ? 'text-[var(--primary-purple)]' : 'text-white drop-shadow-lg'
                }`}>
                  Spaço Bellas
                </span>
              </div>
            </button>

            <nav className="hidden xl:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => smoothScrollTo(item.target)}
                  className={`relative px-5 py-3 text-sm font-body font-medium transition-all duration-300 group ${
                    scrolled 
                      ? 'text-[var(--text-primary)] hover:text-[var(--primary-purple)]' 
                      : 'text-white/90 hover:text-white'
                  } ${
                    activeSection === item.target ? 'font-semibold' : ''
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--primary-purple)] to-[var(--accent-gold)] transition-all duration-300 ${
                    activeSection === item.target 
                      ? 'opacity-100 scale-x-100' 
                      : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                  }`}></span>
                </button>
              ))}
            </nav>

            <div className="hidden xl:flex items-center gap-4">
              <a
                href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  scrolled 
                    ? 'text-[var(--primary-purple)] hover:bg-[var(--primary-purple-ultra-light)]' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm font-body font-medium">{PHONE_NUMBER}</span>
              </a>
              
              <Button
                asChild
                className="btn-primary-luxury relative z-10"
              >
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agende Agora
                </a>
              </Button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`xl:hidden p-3 rounded-full transition-all duration-300 relative z-10 ${
                scrolled 
                  ? 'text-[var(--primary-purple)] hover:bg-[var(--primary-purple-ultra-light)]' 
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 xl:hidden transition-all duration-500 ${
          mobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
        
        {/* Menu Panel */}
        <div className={`absolute right-0 top-0 bottom-0 w-full max-w-sm bg-gradient-to-br from-[var(--neutral-cream)] via-[var(--neutral-beige-light)] to-[var(--neutral-beige)] shadow-2xl overflow-y-auto transition-transform duration-500 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Botão de fechar dentro do menu */}
          <div className="absolute top-6 right-6 z-10">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-full bg-white/80 text-[var(--primary-purple)] hover:bg-white hover:scale-110 transition-all shadow-lg"
              aria-label="Fechar menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-8 pt-24">
            <div className="mb-12">
              <span className="text-3xl font-display text-[var(--primary-purple)] block font-bold">
                Spaço Bellas
              </span>
            </div>
            
            <nav className="flex flex-col gap-2 mb-12">
              {navItems.map((item, index) => (
                <button
                  key={item.target}
                  onClick={() => smoothScrollTo(item.target)}
                  className={`text-left py-4 px-6 rounded-2xl font-body font-medium text-lg transition-all duration-300 ${
                    activeSection === item.target
                      ? 'bg-[var(--primary-purple)] text-white shadow-lg'
                      : 'text-[var(--text-primary)] hover:bg-white/60'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="space-y-4">
              <a
                href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
                className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-white text-[var(--primary-purple)] font-body font-semibold text-lg hover:shadow-lg transition-all"
              >
                <Phone className="h-5 w-5" />
                {PHONE_NUMBER}
              </a>
              
              <Button
                asChild
                className="btn-primary-luxury w-full h-14 text-lg"
              >
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agende sua Experiência
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
