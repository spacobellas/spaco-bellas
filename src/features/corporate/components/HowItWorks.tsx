// src/components/sections/empresas/ComoFunciona.tsx
import { Music, Flame, ClipboardList, Film, Sparkles, CheckCircle2 } from "lucide-react";
import photo from "@/assets/images/membership/workshops/spaday.jpeg";

const COLORS = { lilacBg: "#F6EDF9", gold: "#C7A45C", primary: "#8E5BAE", text: "#2F2F2F" };

type Step = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  bullets: string[];
};

const steps: Step[] = [
  {
    icon: Flame,
    title: "Ambientação sensorial",
    desc: "Música, aromas e estrutura completa para um espaço de pausa e leveza.",
    bullets: ["Montagem rápida e silenciosa", "Higiene e organização de alto padrão", "Fluxo pensado para zero gargalo"],
  },
  {
    icon: Music,
    title: "Atendimento humanizado",
    desc: "Cada colaborador vive 15 minutos de relaxamento e cuidado de verdade.",
    bullets: ["Massagem relaxante + atenção ao detalhe", "Equipe treinada para acolher", "Pausa produtiva sem interromper a operação"],
  },
  {
    icon: ClipboardList,
    title: "Dados e relatório",
    desc: "Cadastro digital e análise de satisfação para mensurar impacto real.",
    bullets: ["Mini pesquisa logo após a experiência", "Relatório de clima: antes/depois e insights", "Resumo executivo para liderança"],
  },
  {
    icon: Film,
    title: "Fotos e vídeo (opcional)",
    desc: "Conteúdo profissional para comunicação interna e redes sociais.",
    bullets: ["Registros discretos e bem dirigidos", "Entrega pronta para intranet/newsletter", "Clipes curtos para social"],
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-10 md:py-14" style={{ backgroundColor: COLORS.lilacBg, color: COLORS.text }}>
      <div className="container mx-auto px-4">
        <img src={photo} alt="" className="mx-auto h-28 w-full max-w-3xl rounded-xl object-cover" loading="lazy" />
        <header className="mx-auto max-w-3xl text-center mt-4">
          <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: COLORS.gold }}>
            Em apenas 15 minutos de pausa, tudo muda.
          </h2>
          <p className="mt-2 opacity-90">
            Montamos um mini spa sensorial na sua empresa: cuidado humano, fluidez operacional e entregas claras para decisão.
          </p>
        </header>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <article
              key={s.title}
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
                  <s.icon className="text-[#8E5BAE]" />
                </span>
                <h3 className="text-[15px] font-semibold">{s.title}</h3>
              </div>

              <p className="mt-2 text-sm opacity-90">{s.desc}</p>

              <ul className="mt-4 space-y-2 text-sm">
                {s.bullets.map((b, i) => (
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
            Mini spa in‑company com dados e prova
          </span>
        </div>
      </div>
    </section>
  );
}
