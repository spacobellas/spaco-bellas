// src/config/contacts.ts
export const WHATSAPP_NUMBER = "5511976820135"; // mesmo número já usado no Hero atual
export const buildWAUrl = (msg: string, utm?: Record<string, string>) => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const params = new URLSearchParams({ text: msg });
  if (utm) Object.entries(utm).forEach(([k, v]) => params.append(k, v));
  return `${base}?${params.toString()}`;
};
export const MSG_MENSAL_VIP =
  "Olá! Quero conhecer o Programa Mulheres VIP Bellas e ver os planos."; 
