// src/pages/empresas.tsx
import { HeroEmpresas } from "@/components/sections/empresas/HeroEmpresas";
import { BeneficiosEmpresas } from "@/components/sections/empresas/BeneficiosEmpresas";
import { ComoFunciona } from "@/components/sections/empresas/ComoFunciona";
import { PlanosEmpresas } from "@/components/sections/empresas/PlanosEmpresas";
import { DiferenciaisEmpresas } from "@/components/sections/empresas/DiferenciaisEmpresas";
import { ResultadosEmpresas } from "@/components/sections/empresas/ResultadosEmpresas";
import { DepoimentosEmpresas } from "@/components/sections/empresas/DepoimentosEmpresas";
import { FAQEmpresas } from "@/components/sections/empresas/FAQEmpresas";
import { CTAEmpresas } from "@/components/sections/empresas/CTAEmpresas";
import { FooterEmpresas } from "@/components/sections/empresas/FooterEmpresas";

export default function EmpresasPage() {
  return (
    <>
      <HeroEmpresas />
      <BeneficiosEmpresas />
      <ComoFunciona />
      <PlanosEmpresas />
      <DiferenciaisEmpresas />
      <ResultadosEmpresas />
      <DepoimentosEmpresas />
      <FAQEmpresas />
      <CTAEmpresas />
      <FooterEmpresas />
    </>
  );
}
