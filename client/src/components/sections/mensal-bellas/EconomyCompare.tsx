// src/components/sections/mensal-bellas/EconomyCompare.tsx
import { BadgePercent, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMemo } from "react";
import {
  FaHandSparkles,     // Mão + pé
  FaWind,             // Escova
  FaFaceSmileBeam,    // Skin care
  FaSpa,              // Massagem
  FaBath,             // Banheira
} from "react-icons/fa6";

const COLORS = { lilacBg: "#fefbffff", gold: "#C7A45C", text: "#2F2F2F", primary: "#8E5BAE" };

type Item = { label: string; avulso: number; plano: string; Icon: React.ComponentType<{ className?: string }> };

const SERVICES: Item[] = [
  { label: "Mão + pé (2×/mês)", avulso: 140, plano: "Incluído", Icon: FaHandSparkles },
  { label: "Escova + hidratação (2×/mês)", avulso: 160, plano: "Incluído", Icon: FaWind },
  { label: "Skin Care + Sobrancelha", avulso: 100, plano: "Incluído", Icon: FaFaceSmileBeam },
  { label: "Massagem ou relaxamento", avulso: 180, plano: "Incluído", Icon: FaSpa },
  { label: "Banheira aromática", avulso: 180, plano: "Incluída no Plano 2+", Icon: FaBath },
];

const PLANO_MIN = 347;
const ECONOMIA_MES_ATE = 400;

export function EconomyCompare() {
  const items = SERVICES;
  const totalAvulso = useMemo(() => items.reduce((acc, it) => acc + (it.avulso ?? 0), 0), [items]);

  return (
    <section aria-labelledby="economia-title" className="py-10 md:py-14" style={{ backgroundColor: COLORS.lilacBg, color: COLORS.text }}>
      <div className="container mx-auto px-4">
        <header className="max-w-3xl mx-auto text-center">
          <h2 id="economia-title" className="text-2xl md:text-3xl font-semibold" style={{ color: COLORS.gold }}>
            Você já gasta isso todo mês — só que em lugares diferentes (e sem viver a experiência).
          </h2>
          <p className="mt-2 opacity-90">Veja quanto uma mulher normalmente investe por mês e como o Bellas integra tudo em um só lugar.</p>
        </header>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 max-w-4xl mx-auto">
          {/* Coluna avulso */}
          <article className="rounded-2xl bg-white p-5 shadow">
            <div className="flex items-center gap-2">
              <BadgePercent size={18} style={{ color: COLORS.primary }} />
              <h3 className="text-lg font-medium">Fora do Bellas (avulso)</h3>
            </div>

            <ul className="mt-4 space-y-2">
              {items.map((it, idx) => (
                <li key={idx} className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <it.Icon className="h-5 w-5 text-[#8E5BAE]" aria-hidden />
                    <span className="text-sm md:text-base">{it.label}</span>
                  </div>
                  <span className="font-medium">R$ {it.avulso}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 border-t pt-3 flex items-center justify-between">
              <span className="font-semibold">Total estimado</span>
              <span className="text-lg font-bold">R$ {totalAvulso}</span>
            </div>
          </article>

          {/* Coluna plano */}
          <article className="rounded-2xl bg-white p-5 shadow">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} style={{ color: COLORS.primary }} />
              <h3 className="text-lg font-medium">No plano Bellas</h3>
            </div>

            <ul className="mt-4 space-y-2">
              {items.map((it, idx) => (
                <li key={idx} className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <it.Icon className="h-5 w-5 text-[#8E5BAE]" aria-hidden />
                    <span className="text-sm md:text-base">{it.label}</span>
                  </div>
                  <span className="font-medium text-emerald-700">{it.plano}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 border-t pt-3 space-y-2">
              <p className="text-sm">Planos a partir de <span className="font-semibold">R$ {PLANO_MIN}/mês</span>.</p>
              <p className="text-sm">Economia de até <span className="font-semibold">R$ {ECONOMIA_MES_ATE}/mês</span> — e tudo no mesmo lugar.</p>
              <p className="text-xs opacity-75">Banheira aromática incluída a partir do Plano 2.</p>
            </div>
          </article>
        </div>

        <div className="mt-6 max-w-3xl mx-auto text-center">
          <p className="text-sm md:text-base opacity-90">
            Além de economizar até R$ {ECONOMIA_MES_ATE} por mês, você ganha algo que dinheiro nenhum compra: tempo pra si, acolhimento e pertencimento.
          </p>
          <div className="mt-4 flex justify-center">
            <Button asChild style={{ backgroundColor: COLORS.primary, color: "#FFFFFF" }}>
              <a href="#planos" aria-label="Ver planos do Programa Mulheres VIP Bellas">Ver planos</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
