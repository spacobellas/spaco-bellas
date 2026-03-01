import { Card } from "@/components/ui/card";
import { Sparkles, Heart, Users } from "lucide-react";

const offerings = [
  {
    icon: Heart,
    highlight: "Você é a Protagonista",
    description:
      "Toda mulher merece se sentir valorizada, confiante e linda — não só em datas especiais, mas em todos os dias.",
  },
  {
    icon: Sparkles,
    highlight: "Experiência Cinematográfica",
    description:
      "Uma experiência de beleza e bem-estar onde cada detalhe é pensado para fazer você brilhar.",
  },
  {
    icon: Users,
    highlight: "Atendimento Personalizado",
    description:
      "Cuidado humanizado e atencioso em cada etapa, porque o verdadeiro luxo é cuidar de você com tempo e amor.",
  },
];

export function Introduction() {
  return (
    <section id="introduction" className="py-24 bg-gradient-to-b from-white to-purple-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-[var(--primary-purple)]" />
            <span className="text-sm font-medium text-[var(--primary-purple)]">
              Spa Day das Celebridades
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Uma experiência criada especialmente para você
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Aqui no Spaço Bellas, acreditamos que toda mulher merece se sentir valorizada, confiante e linda — não só em datas especiais, mas em todos os dias.
          </p>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">
            Pensando nisso, criamos o <span className="font-semibold text-[var(--primary-purple)]">Spa Day das Celebridades</span>, uma experiência de beleza e bem-estar onde você é a protagonista do seu próprio momento.
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gradient-to-br from-purple-100 to-pink-100">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <Sparkles className="w-16 h-16 text-[var(--primary-purple)] mb-4" />
              <p className="text-2xl font-semibold text-gray-800 mb-2">
                Vem viver o seu dia de estrela comigo 💜
              </p>
              <p className="text-gray-600">
                — Luzinete, Fundadora do Spaço Bellas
              </p>
              <p className="text-sm text-gray-500 mt-4">
                [Vídeo de apresentação]
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-purple-100 bg-white"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary-purple)] to-pink-500 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">
                    {offering.highlight}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {offering.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Decorative Quote */}
        <div className="mt-16 text-center">
          <div className="relative inline-block">
            <span className="text-6xl text-purple-200 absolute -top-4 -left-4">"</span>
            <p className="text-2xl md:text-3xl font-serif italic text-gray-700 px-8 relative z-10">
              Cada experiência é cuidadosamente projetada para proporcionar momentos únicos de relaxamento e renovação
            </p>
            <span className="text-6xl text-purple-200 absolute -bottom-8 -right-4">"</span>
          </div>
        </div>
      </div>
    </section>
  );
}
