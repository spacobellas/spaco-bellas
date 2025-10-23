// src/components/sections/empresas/DiferenciaisEmpresas.tsx
import { BadgeCheck, ShieldCheck, Info, CheckCircle2, Sparkles } from "lucide-react";

const COLORS = { lilacBg: "#F6EDF9", gold: "#C7A45C", text: "#2F2F2F", primary: "#8E5BAE" };

type Row = {
  ent: string;
  mercado: string;
  bellas: string;
  tag?: "Premium/Corporate" | "Corporate" | "Incluso";
};

const rows: Row[] = [
  { ent: "Massagem corporativa (100 pessoas)", mercado: "R$ 5.000", bellas: "Incluso" },
  { ent: "Videomaker + fotógrafo", mercado: "R$ 1.800", bellas: "Incluso", tag: "Premium/Corporate" },
  { ent: "Análise de clima organizacional", mercado: "R$ 15.000", bellas: "Inclusa" },
  { ent: "Palestra motivacional", mercado: "R$ 4.000", bellas: "Inclusa", tag: "Corporate" },
  { ent: "Brindes e ambientação", mercado: "R$ 1.000", bellas: "Inclusos" },
];

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium"
      style={{ backgroundColor: "#FAF8FB", color: COLORS.primary, border: `1px solid ${COLORS.primary}20` }}
    >
      {children}
    </span>
  );
}

function IncludedPill({ label, tag }: { label: string; tag?: Row["tag"] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[12px] font-medium text-emerald-700">
        <CheckCircle2 size={14} /> {label}
      </span>
      {tag && <Chip>{tag}</Chip>}
    </div>
  );
}

export function DiferenciaisEmpresas() {
  return (
    <section id="diferenciais" className="py-10 md:py-14" style={{ backgroundColor: COLORS.lilacBg, color: COLORS.text }}>
      <div className="container mx-auto px-4">
        {/* Etiqueta */}
        <div className="flex w-full items-center justify-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs"
            style={{ backgroundColor: "#FAF8FB", color: COLORS.primary, border: `1px solid ${COLORS.primary}20` }}
          >
            <Sparkles size={14} />
            Benchmark de mercado
          </span>
        </div>

        {/* Título */}
        <header className="mx-auto mt-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: COLORS.gold }}>
            Tudo o que o mercado cobra caro — o Bellas entrega incluso.
          </h2>
          <p className="mt-2 opacity-90">Mais de R$ 25 mil em valor entregue; investimento a partir de R$ 29 por colaborador.</p>
        </header>

        {/* Mobile: cards premium */}
        <div className="mt-6 space-y-4 md:hidden">
          {rows.map((r) => (
            <article
              key={r.ent}
              className="group relative overflow-hidden rounded-2xl bg-white/90 p-5 shadow-lg backdrop-blur-sm transition"
              style={{ border: "1px solid rgba(142,91,174,0.10)" }}
            >
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: "linear-gradient(90deg, #8E5BAE 0%, rgba(199,164,92,0.7) 50%, #8E5BAE 100%)" }}
                aria-hidden
              />
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full"
                    style={{ background: "#F6EDF9", boxShadow: `0 0 0 2px ${COLORS.gold}` }}
                    aria-hidden
                  >
                    <ShieldCheck className="text-[#8E5BAE]" size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{r.ent}</p>
                    <p className="text-xs opacity-70">Valor de mercado: {r.mercado}</p>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <IncludedPill label={r.bellas} tag={r.tag} />
              </div>

              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                style={{ boxShadow: "0 0 0 3px rgba(142,91,174,0.12) inset" }}
                aria-hidden
              />
            </article>
          ))}
        </div>

        {/* Desktop/Tablet: tabela com pills e chips */}
        <div className="mt-6 hidden md:block">
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg" style={{ border: "1px solid rgba(142,91,174,0.10)" }}>
            {/* Barra superior */}
            <div
              className="h-1 w-full"
              style={{ background: "linear-gradient(90deg, #8E5BAE 0%, rgba(199,164,92,0.7) 50%, #8E5BAE 100%)" }}
            />
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left">
                  <th className="px-5 py-4">Entrega</th>
                  <th className="px-5 py-4">Valor de mercado</th>
                  <th className="px-5 py-4">No Bellas</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.ent} className={i % 2 ? "bg-white" : "bg-white/60"}>
                    <td className="px-5 py-4 align-top">
                      <div className="flex items-start gap-2">
                        <BadgeCheck className="mt-0.5 text-[#8E5BAE]" size={18} />
                        <span>{r.ent}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 align-top">{r.mercado}</td>
                    <td className="px-5 py-4 align-top">
                      <IncludedPill label={r.bellas} tag={r.tag} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Nota de rodapé */}
          <p className="mt-3 flex items-start gap-2 text-xs opacity-70">
            <Info size={14} className="mt-0.5" />
            Valores indicativos de mercado para referência executiva; a inclusão pode variar por plano conforme o escopo do evento.
          </p>
        </div>
      </div>
    </section>
  );
}
