import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import {
  CONTACT_CONFIG,
  buildWhatsAppUrl,
  WHATSAPP_MESSAGES,
} from "@/config/contacts";
import { Link, useLocation } from "wouter";

export interface NavItem {
  label: string;
  target: string;
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: "Início", target: "home" },
  { label: "Sobre", target: "introduction" },
  { label: "Experiências", target: "spa-day" },
  { label: "Diferenciais", target: "differentials" },
  { label: "Depoimentos", target: "testimonials" },
];

interface HeaderProps {
  navItems?: NavItem[];
}

/**
 * Global Header component.
 * Features dynamic scroll-spy navigation, a sticky background effect, and a mobile drawer.
 */
export function Header({ navItems = DEFAULT_NAV_ITEMS }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  const navIds = navItems.map((item) => item.target);
  const activeSection = useScrollSpy(navIds, { offset: 100 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const smoothScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  const whatsappUrl = buildWhatsAppUrl(WHATSAPP_MESSAGES.SPA_DAY_CELEBRIDADES);

  return (
    <>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-4"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Logo - Returns to Linktree Root */}
            <Link
              href="/"
              className="group transition-transform hover:scale-105"
            >
              <span
                className={`font-bold text-lg sm:text-xl leading-tight cursor-pointer ${
                  scrolled || mobileMenuOpen ? "text-gray-900" : "text-white"
                }`}
              >
                Spaço Bellas
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => smoothScrollTo(item.target)}
                  className={`font-medium transition-all duration-300 relative group text-sm xl:text-base ${
                    scrolled
                      ? activeSection === item.target
                        ? "text-[var(--primary-purple)]"
                        : "text-gray-700 hover:text-[var(--primary-purple)]"
                      : activeSection === item.target
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--primary-purple)] transition-all duration-300 ${
                      activeSection === item.target
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* CTA Buttons - Hidden on small mobile, visible on desktop */}
            <div className="hidden md:flex items-center gap-3 xl:gap-4">
              <a
                href={`tel:${CONTACT_CONFIG.WHATSAPP_NUMBER}`}
                className={`flex items-center gap-2 font-medium transition-colors text-sm xl:text-base ${
                  scrolled
                    ? "text-gray-700 hover:text-[var(--primary-purple)]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">
                  {CONTACT_CONFIG.PHONE_DISPLAY}
                </span>
              </a>

              <Button
                onClick={() => window.open(whatsappUrl, "_blank")}
                className="bg-[var(--primary-purple)] hover:bg-[var(--primary-purple)]/90 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm xl:text-base px-4 py-2 h-auto"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">
                  Quero minha experiência
                </span>
                <span className="sm:hidden">Reservar</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled || mobileMenuOpen
                  ? "text-gray-900 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu Drawer */}
          <div
            className={`lg:hidden fixed top-0 right-0 h-screen w-full sm:w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <span className="font-bold text-xl text-gray-900">
                  Spaço Bellas
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-900" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="flex-1 overflow-y-auto py-6">
                <div className="flex flex-col gap-2 px-6">
                  {navItems.map((item) => (
                    <button
                      key={item.target}
                      onClick={() => smoothScrollTo(item.target)}
                      className={`text-left px-4 py-4 rounded-lg font-medium text-lg transition-all duration-300 ${
                        activeSection === item.target
                          ? "bg-purple-50 text-[var(--primary-purple)]"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Mobile Contact Info */}
                <div className="mt-8 px-6">
                  <div className="p-6 bg-purple-50 rounded-2xl space-y-4">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Phone className="w-5 h-5 text-[var(--primary-purple)]" />
                      <a
                        href={`tel:${CONTACT_CONFIG.WHATSAPP_NUMBER}`}
                        className="font-bold text-lg"
                      >
                        {CONTACT_CONFIG.PHONE_DISPLAY}
                      </a>
                    </div>
                    <p className="text-sm text-gray-600">
                      Atendimento especializado em beleza e bem-estar.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile CTA Button */}
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                <Button
                  onClick={() => window.open(whatsappUrl, "_blank")}
                  className="w-full bg-[var(--primary-purple)] hover:bg-[var(--primary-purple)]/90 text-white font-bold shadow-lg py-6 text-lg rounded-xl"
                  size="lg"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Quero minha experiência
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
