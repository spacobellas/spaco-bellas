// src/components/sections/empresas/BeneficiosEmpresas.tsx
import { HeartHandshake, BarChart3, Users2, Camera, Sparkles, CheckCircle2 } from "lucide-react";
import cover from "../mensal-bellas/assets/workshops/waiting.jpg";

const COLORS = { lilacBg: "#F6EDF9", gold: "#C7A45C", primary: "#8E5BAE", text: "#2F2F2F" };

type Item = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  chips: string[];
  bullets: string[];
};

const items: Item[] = [
  {
    icon: HeartHandshake,
    title: "Bem‑estar com propósito",
    desc: "Relaxamento físico e emocional que transforma clima, humor e energia do time.",
    chips: ["Pertencimento", "Acolhimento"],
    bullets: [
      "Mini spa sensorial in‑company com música e aromas",
      "Pausa produtiva que reduz estresse e ruído de equipe",
      "Experiência humana com atendimento acolhedor",
    ],
  },
  {
    icon: BarChart3,
    title: "Resultados mensuráveis",
    desc: "NPS, satisfação e relatório de clima para decisões objetivas e branding.",
    chips: ["NPS", "Clima", "Relatório"],
    bullets: [
      "Coleta via cadastro digital e mini pesquisa",
      "Relatório PDF com comparativo antes/depois",
      "Resumo executivo para liderança e RH",
    ],
  },
  {
    icon: Users2,
    title: "Marca empregadora forte",
    desc: "Reconhecimento, pertencimento e retenção com ações memoráveis.",
    chips: ["Employer Branding", "Retenção"],
    bullets: [
      "Ação de alto valor percebido para colaborar e reconhecer",
      "Melhora de clima e orgulho de pertencer",
      "Material para comunicação interna e rituais do time",
    ],
  },
  {
    icon: Camera,
    title: "Conteúdo e presença",
    desc: "Fotos e vídeos para comunicação interna e redes com autenticidade.",
    chips: ["Fotos", "Vídeo", "Endomarketing"],
    bullets: [
      "Registros profissionais do dia Bellas",
      "Prontos para intranet, newsletter e social",
      "Fortalece narrativa humana da marca",
    ],
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

export function BeneficiosEmpresas() {
  return (
    <section className="py-10 md:py-14" style={{ backgroundColor: COLORS.lilacBg, color: COLORS.text }}>
      <div className="container mx-auto px-4">
        <img src={cover} alt="" className="mx-auto h-28 w-full max-w-3xl rounded-xl object-cover" loading="lazy" />
        <header className="mx-auto max-w-3xl text-center mt-4">
          <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: COLORS.gold }}>
            Um spa com alma — agora dentro da sua empresa.
          </h2>
          <p className="mt-2 opacity-90">
            Transformamos o autocuidado em experiência completa para empresas, escolas e condomínios, com impacto humano e valor estratégico.
          </p>
        </header>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <article
              key={it.title}
              className="group relative overflow-hidden rounded-2xl bg-white/90 p-5 shadow-lg backdrop-blur-sm transition"
              style={{ border: "1px solid rgba(142,91,174,0.10)" }}
            >
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: "linear-gradient(90deg, #8E5BAE 0%, rgba(199,164,92,0.7) 50%, #8E5BAE 100%)" }}
                aria-hidden
              />
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ background: "#F6EDF9", boxShadow: `0 0 0 2px ${COLORS.gold}` }}
                  aria-hidden
                >
                  <it.icon className="text-[#8E5BAE]" />
                </span>
                <h3 className="text-[15px] font-semibold">{it.title}</h3>
              </div>

              <p className="mt-2 text-sm opacity-90">{it.desc}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {it.chips.map((c) => (
                  <Pill key={c} label={c} />
                ))}
              </div>

              <ul className="mt-4 space-y-2 text-sm">
                {it.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-0.5 text-emerald-600" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                style={{ boxShadow: "0 0 0 3px rgba(142,91,174,0.12) inset" }}
                aria-hidden
              />
            </article>
          ))}
        </div>

        <div className="mt-6 flex w-full items-center justify-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs"
            style={{ backgroundColor: "#FAF8FB", color: COLORS.primary, border: `1px solid ${COLORS.primary}20` }}
          >
            <Sparkles size={14} />
            Propósito com entregas executivas
          </span>
        </div>
      </div>
    </section>
  );
}
