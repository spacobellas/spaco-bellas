import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Sparkles, ChevronDown, Tag } from "lucide-react";

const WHATSAPP_NUMBER = "5511976820135";

// Full catalog data
const serviceCategories = [
  {
    id: "sobrancelhas",
    slug: "sobrancelhas-micropigmentacao",
    name: "Sobrancelhas e Micropigmentação",
    displayOrder: 1,
    icon: "✨",
    services: [
      {
        id: "design-personalizado",
        name: "Design Personalizado",
        price: "44,90",
        description:
          "Design de sobrancelhas personalizado para realçar seu olhar.",
        duration: "30 min",
      },
      {
        id: "design-henna",
        name: "Design com Henna",
        price: "59,90",
        description:
          "Design com aplicação de henna natural para efeito duradouro.",
        duration: "45 min",
      },
      {
        id: "brow-lamination",
        name: "Brow Lamination",
        price: "129,90",
        description:
          "Técnica que alinha os fios da sobrancelha, cobrindo falhas e adicionando volume. Inclui Design e Coloração opcional.",
        duration: "60 min",
      },
      {
        id: "nanoblading",
        name: "Nanoblading",
        price: "619,90",
        maintenancePrice: "199,90",
        description:
          "Técnica de preenchimento em falhas para adicionar volume mantendo a naturalidade. Inclui Design e anestésico.",
        duration: "120 min",
      },
      {
        id: "fio-a-fio",
        name: "Fio a Fio",
        price: "619,90",
        maintenancePrice: "199,90",
        description:
          "Fios por toda sobrancelha para resultado suavemente marcado. Inclui Design e anestésico.",
        duration: "120 min",
      },
      {
        id: "shadow",
        name: "Shadow",
        price: "699,90",
        maintenancePrice: "199,90",
        description:
          "Preenchimento sombreado com efeito henna permanente. Inclui Design e anestésico.",
        duration: "120 min",
      },
    ],
  },
  {
    id: "cilios",
    slug: "alongamento-cilios",
    name: "Alongamento de Cílios",
    displayOrder: 2,
    icon: "👁️",
    services: [
      {
        id: "volume-hibrido",
        name: "Volume Híbrido",
        price: "149,90",
        maintenancePrice: "119,90",
        description:
          "Fios tecnológicos 4D para volume suave que não pesa o olhar.",
        duration: "90 min",
      },
      {
        id: "volume-natural",
        name: "Volume Natural",
        price: "149,90",
        maintenancePrice: "119,90",
        description: "Fios YU para dobro do volume dos cílios naturais.",
        duration: "90 min",
      },
      {
        id: "volume-brasileiro",
        name: "Volume Brasileiro",
        price: "159,90",
        maintenancePrice: "119,90",
        description: "Fios YY para volume médio e efeito marcante.",
        duration: "100 min",
      },
      {
        id: "mega-brasegipicio",
        name: "Mega Brasegípcio",
        price: "189,90",
        maintenancePrice: "169,90",
        description: "Fios 4D e YY para máxima densidade e efeito volumoso.",
        duration: "110 min",
      },
    ],
  },
  {
    id: "unhas",
    slug: "nail-design",
    name: "Nail Design",
    displayOrder: 3,
    icon: "💅",
    services: [
      {
        id: "fibra-vidro",
        name: "Fibra de Vidro",
        price: "194,90",
        maintenancePrice: "144,90",
        description:
          "Alongamento em fibra de vidro. Inclui esmaltação em gel e cutilagem.",
        duration: "120 min",
      },
      {
        id: "molde-f1",
        name: "Molde F1",
        price: "189,90",
        maintenancePrice: "144,90",
        description: "Alongamento natural com excelente durabilidade.",
        duration: "120 min",
      },
      {
        id: "gel-tips",
        name: "Gel na Tips",
        price: "169,90",
        maintenancePrice: "134,90",
        description: "Alongamento rápido em unha postiça com gel.",
        duration: "90 min",
      },
      {
        id: "manicure-gel",
        name: "Manicure em Gel",
        price: "79,90",
        description: "Secagem ultra-rápida e durabilidade. Não descasca.",
        duration: "60 min",
      },
      {
        id: "pedicure-gel",
        name: "Pedicure em Gel",
        price: "69,90",
        description: "Ideal para quem usa sapato fechado. Ultra durável.",
        duration: "60 min",
      },
    ],
  },
  {
    id: "massagens",
    slug: "massagens-terapias",
    name: "Massagens e Terapias Corporais",
    displayOrder: 4,
    icon: "💆",
    services: [
      {
        id: "massagem-relaxante",
        name: "Massagem Relaxante",
        price: "165,00",
        description:
          "Técnica terapêutica para reduzir estresse e tensões musculares.",
        duration: "50 min",
      },
      {
        id: "drenagem-linfatica",
        name: "Drenagem Linfática",
        price: "165,00",
        description:
          "Estimula o sistema linfático para eliminar líquidos retidos.",
        duration: "50 min",
      },
      {
        id: "liberacao-miofascial",
        name: "Liberação Miofascial",
        price: "170,00",
        description:
          "Alívio profundo de dores musculares e tensões acumuladas.",
        duration: "50 min",
      },
      {
        id: "shiatsu",
        name: "Shiatsu",
        price: "160,00",
        description: "Técnica oriental que alivia tensões e equilibra energia.",
        duration: "50 min",
      },
      {
        id: "quick-massage",
        name: "Quick Massage",
        price: "60,00",
        description:
          "Massagem rápida em cadeira ergonômica para aliviar estresse.",
        duration: "30 min",
      },
      {
        id: "spa-dos-pes",
        name: "Spa dos Pés",
        price: "60,00",
        description: "Cuidado completo que alivia tensões e hidrata a pele.",
        duration: "30 min",
      },
    ],
  },
  {
    id: "day-spa",
    slug: "day-spa",
    name: "Day Spa",
    displayOrder: 5,
    icon: "🧖",
    services: [
      {
        id: "spa-bronze",
        name: "Day Spa Bronze",
        price: "195,00",
        description: "Cuidado essencial para relaxar e sair renovada.",
        duration: "120 min",
      },
      {
        id: "spa-prata",
        name: "Day Spa Prata",
        price: "360,00",
        description:
          "Mais completo com relaxamento profundo e cuidados extras.",
        duration: "180 min",
      },
      {
        id: "spa-ouro",
        name: "Day Spa Ouro",
        price: "450,00",
        description: "Experiência premium para se sentir única.",
        duration: "240 min",
      },
      {
        id: "spa-diamante",
        name: "Day Spa Diamante",
        price: "650,00",
        description: "O ápice do autocuidado, luxo e bem-estar inesquecível.",
        duration: "300 min",
      },
    ],
  },
  {
    id: "consultoria",
    slug: "consultoria-imagem",
    name: "Consultoria de Imagem",
    displayOrder: 6,
    icon: "👔",
    services: [
      {
        id: "consultoria-completa",
        name: "Consultoria de Imagem Completa",
        price: "6.000,00",
        description:
          "Processo aprofundado incluindo autoconhecimento, análise de estilo, biotipo e coloração pessoal.",
        duration: "Múltiplas sessões",
      },
      {
        id: "estrategia-imagem",
        name: "Estratégia de Imagem",
        price: "3.000,00",
        description:
          "Plano focado em usar a imagem para alcançar metas profissionais.",
        duration: "Múltiplas sessões",
      },
      {
        id: "coloracao-pessoal",
        name: "Análise de Coloração Pessoal",
        price: "700,00",
        description:
          "Descoberta da paleta de cores que harmoniza com sua pele, olhos e cabelo.",
        duration: "120 min",
      },
      {
        id: "visagismo-completo",
        name: "Análise de Visagismo Completa",
        price: "1.800,00",
        description:
          "Estudo completo para orientar corte de cabelo, maquiagem e acessórios.",
        duration: "180 min",
      },
      {
        id: "personal-shopper",
        name: "Personal Shopper",
        price: "600,00",
        description:
          "Acompanhamento estratégico de compras focado no seu estilo.",
        duration: "Diária",
      },
    ],
  },
  {
    id: "terapias-integrativas",
    slug: "terapias-integrativas",
    name: "Terapias Integrativas",
    displayOrder: 7,
    icon: "🔮",
    services: [
      {
        id: "radiestesia",
        name: "Radiestesia e Radiônica",
        price: "150,00",
        description:
          "Captação e emissão de frequências energéticas para harmonizar ambientes.",
        duration: "60 min",
      },
      {
        id: "mr77",
        name: "MR77 – Manifestação da Abundância",
        price: "650,00",
        description:
          "Mesa radiestésica focada no campo da abundância financeira.",
        duration: "90 min",
      },
      {
        id: "decoder",
        name: "Decoder – Decodificador DNA",
        price: "150,00",
        description:
          "Detecta frequências baixas no DNA e ativa frequência elevada.",
        duration: "60 min",
      },
      {
        id: "hipnose",
        name: "Hipnose",
        price: "350,00",
        description:
          "Acessa o inconsciente para ressignificar padrões e tratar fobias.",
        duration: "90 min",
      },
      {
        id: "constelacao",
        name: "Constelação Familiar",
        price: "350,00",
        description:
          "Revela dinâmicas ocultas para liberar emaranhados emocionais.",
        duration: "90 min",
      },
      {
        id: "barras-access",
        name: "Barras de Access",
        price: "150,00",
        description:
          "Toque suave em 32 pontos para dissipar cargas eletromagnéticas.",
        duration: "60 min",
      },
    ],
  },
  {
    id: "cabelo",
    slug: "servicos-cabelo",
    name: "Serviços de Cabelo",
    displayOrder: 8,
    icon: "💇",
    services: [
      {
        id: "progressiva",
        name: "Progressiva",
        price: "150,00",
        description:
          "Alisamento que reduz volume e frizz, deixando cabelos brilhantes.",
        duration: "120 min",
      },
      {
        id: "hidratacao",
        name: "Hidratação",
        price: "50,00",
        description: "Reposição intensiva de nutrientes para maciez e brilho.",
        duration: "45 min",
      },
      {
        id: "botox-capilar",
        name: "Botox Capilar",
        price: "130,00",
        description: "Tratamento rejuvenescedor que preenche fibra capilar.",
        duration: "90 min",
      },
      {
        id: "corte",
        name: "Corte Feminino/Masculino",
        price: "80,00",
        description: "Corte personalizado que valoriza seus traços.",
        duration: "45 min",
      },
      {
        id: "coloracao-profissional",
        name: "Coloração (com tinta do profissional)",
        price: "120,00",
        description: "Coloração completa com produtos de alta qualidade.",
        duration: "90 min",
      },
      {
        id: "luzes",
        name: "Luzes",
        price: "450,00",
        description:
          "Clareamento que cria pontos de luz para efeito iluminado.",
        duration: "180 min",
      },
    ],
  },
];

export function FullMenuSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(),
  );
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (serviceCategories.length > 0) {
      setExpandedCategories(new Set([serviceCategories[0].id]));
    }
  }, []);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const handleWhatsAppClick = (serviceName: string) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de agendar o serviço: ${serviceName}`,
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section
      id="menu"
      ref={sectionRef}
      className={`relative py-24 px-4 sm:px-6 lg:px-8 bg-[var(--primary-beige-light)] overflow-hidden transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-[var(--primary-purple)]/10">
            <Sparkles className="w-3.5 h-3.5 text-[var(--primary-purple)]" />
            <span className="text-xs font-medium text-[var(--primary-purple)] uppercase tracking-wider">
              Nossos Serviços
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-[var(--primary-purple)]">
            Catálogo Completo
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Explore nossa ampla variedade de tratamentos e serviços de bem-estar
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-4">
          {serviceCategories.map((category, idx) => (
            <Card
              key={category.id}
              className={`overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full text-left transition-colors duration-200 hover:bg-gray-50 p-5"
                aria-expanded={expandedCategories.has(category.id)}
                aria-controls={`category-${category.id}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    {/* Icon badge */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--primary-purple)] flex items-center justify-center text-xl shadow-sm">
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2.5 mb-0.5">
                        <span className="inline-flex items-center justify-center min-w-[24px] h-6 px-1.5 rounded-md bg-[var(--primary-purple)]/10 text-[var(--primary-purple)] text-xs font-bold">
                          {idx + 1}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900">
                          {category.name}
                        </h3>
                      </div>
                      <p className="text-xs text-gray-500 flex items-center gap-1.5 mt-1">
                        <Tag className="w-3.5 h-3.5" />
                        {category.services.length}{" "}
                        {category.services.length === 1
                          ? "serviço disponível"
                          : "serviços disponíveis"}
                      </p>
                    </div>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                      expandedCategories.has(category.id) ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {/* Services list */}
              <div
                id={`category-${category.id}`}
                className={`grid transition-all duration-500 ease-in-out ${
                  expandedCategories.has(category.id)
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <CardContent className="pt-0 pb-5 px-5 bg-gray-50/50">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {category.services.map((service) => (
                        <Card
                          key={service.id}
                          className="flex flex-col h-full border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300"
                        >
                          <CardContent className="p-5 flex flex-col flex-1">
                            {/* Service name and description */}
                            <div className="flex-1 space-y-3 mb-4">
                              <h4 className="font-bold text-base text-gray-900">
                                {service.name}
                              </h4>

                              {service.description && (
                                <p className="text-sm text-gray-600 leading-relaxed">
                                  {service.description}
                                </p>
                              )}

                              {/* Duration */}
                              {service.duration && (
                                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                  <Clock className="w-3.5 h-3.5" />
                                  <span>{service.duration}</span>
                                </div>
                              )}
                            </div>

                            {/* Price section - fixed at bottom */}
                            <div className="space-y-3 mt-auto pt-3 border-t border-gray-100">
                              <div className="flex items-baseline gap-1.5">
                                <span className="text-xs text-gray-500">
                                  A partir de
                                </span>
                                <span className="text-xs text-gray-700 font-medium">
                                  R$
                                </span>
                                <span className="text-2xl font-bold text-gray-900">
                                  {service.price}
                                </span>
                              </div>

                              {/* Maintenance price */}
                              {service.maintenancePrice && (
                                <p className="text-xs text-gray-500 italic">
                                  Manutenção: R$ {service.maintenancePrice}
                                </p>
                              )}

                              {/* CTA Button */}
                              <Button
                                onClick={() =>
                                  handleWhatsAppClick(service.name)
                                }
                                className="w-full bg-[var(--primary-purple)] hover:bg-[var(--primary-purple)]/90 text-white font-medium shadow-sm transition-all duration-200"
                                size="sm"
                              >
                                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                                Agendar
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
