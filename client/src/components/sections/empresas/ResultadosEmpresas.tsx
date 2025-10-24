// src/components/sections/empresas/ResultadosEmpresas.tsx
import { BarChartHorizontalBig, MessageSquareMore, Heart, CheckCircle2, Sparkles } from "lucide-react";

const COLORS = { lilacBg: "#F6EDF9", gold: "#C7A45C", text: "#2F2F2F", primary: "#8E5BAE" };

type Card = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  bullets: string[];
  chips: string[];
};

const items: Card[] = [
  {
    icon: BarChartHorizontalBig,
    title: "Gráfico de satisfação antes e depois",
    desc: "Visual comparativo claro do humor, leveza e motivação para decisão do RH e liderança.",
    bullets: [
      "Coleta via cadastro digital e mini pesquisa pós‑experiência",
      "Comparativo antes/depois no relatório de clima (PDF)",
      "Arquivo pronto para apresentação interna do time",
    ],
    chips: ["PDF", "Apresentação", "Clima"],
  },
  {
    icon: MessageSquareMore,
    title: "Palavras mais citadas",
    desc: "Mapa de sentimentos com termos espontâneos para enxergar temas recorrentes rapidamente.",
    bullets: [
      "Lista de termos e agrupamento por tema recorrente",
      "Insights textuais prontos para endomarketing",
      "Anexo no relatório com leitura executiva",
    ],
    chips: ["Endomarketing", "Insights", "Resumo"],
  },
  {
    icon: Heart,
    title: "Comentários e recomendações",
    desc: "Depoimentos curtos que fortalecem clima e employer branding com linguagem humana.",
    bullets: [
      "Trechos textuais reais de colaboradores",
      "Sinalização de recomendações e percepções de valor",
      "Material pronto para intranet/newsletter/redes",
    ],
    chips: ["Branding", "Intranet", "Social"],
  },
];

function Pill({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium"
      style={{ backgroundColor: "#FAF8FB", color: COLORS.primary, border: `1px solid ${COLORS.primary}20` }}
    >
      {label}
    </span>
  );
}

export function ResultadosEmpresas() {
  return (
    <section
      id="resultados"
      className="py-10 md:py-14"
      style={{ backgroundColor: "#FFFFFF", color: "#2F2F2F" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex w-full items-center justify-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs"
            style={{ backgroundColor: "#FAF8FB", color: COLORS.primary, border: `1px solid ${COLORS.primary}20` }}
          >
            <Sparkles size={14} />
            Provas e entregas executivas
          </span>
        </div>

        <header className="mx-auto mt-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: COLORS.gold }}>
            Provas reais de que o bem‑estar gera resultado
          </h2>
          <p className="mt-2 opacity-90">
            Relatório prático para decisões: dados objetivos e humanidade que se vê nos detalhes.
          </p>
        </header>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.title}
              className="group relative overflow-hidden rounded-2xl bg-white/90 p-5 shadow-lg backdrop-blur-sm transition"
              style={{ border: "1px solid rgba(142,91,174,0.10)" }}
            >
              {/* Barra de acento */}
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: "linear-gradient(90deg, #8E5BAE 0%, rgba(199,164,92,0.7) 50%, #8E5BAE 100%)" }}
                aria-hidden
              />

              {/* Cabeçalho */}
              <div className="flex items-center gap-3">
                <div
                  className="relative inline-flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ background: "#F6EDF9", boxShadow: `0 0 0 2px ${COLORS.gold}` }}
                  aria-hidden
                >
                  <it.icon className="text-[#8E5BAE]" />
                </div>
                <h3 className="text-[15px] font-semibold">{it.title}</h3>
              </div>

              {/* Descrição */}
              <p className="mt-2 text-sm opacity-90">{it.desc}</p>

              {/* Chips */}
              <div className="mt-3 flex flex-wrap gap-2">
                {it.chips.map((c) => (
                  <Pill key={c} label={c} />
                ))}
              </div>

              {/* Bullets */}
              <ul className="mt-4 space-y-2 text-sm">
                {it.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-0.5 text-emerald-600" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Hover glow */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                style={{ boxShadow: "0 0 0 3px rgba(142,91,174,0.12) inset" }}
                aria-hidden
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
