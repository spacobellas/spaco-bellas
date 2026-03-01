/**
 * Centralized contact configuration for Spaço Bellas.
 * This ensures consistency and makes it easy to update contact details across the app.
 */

export const CONTACT_CONFIG = {
  WHATSAPP_NUMBER: "5511976820135",
  PHONE_DISPLAY: "(11) 97682-0135",
  INSTAGRAM_HANDLE: "@spacobellas",
  ADDRESS: "Rua Exemplo, 123 - São Paulo, SP",
} as const;

/**
 * Pre-defined WhatsApp messages to avoid magic strings and ensure DRY.
 */
export const WHATSAPP_MESSAGES = {
  GENERAL: "Olá! Quero conhecer o Spaço Bellas!",
  SPA_DAY_CELEBRIDADES:
    "Olá! Vim pelo site e quero conhecer os pacotes do Spa Day Celebridades!",
  SPA_DAY_CASAL:
    "Olá! Vim pelo site e quero conhecer os pacotes do Spa Day para Casal!",
  SPA_DAY_INDIVIDUAL:
    "Olá! Vim pelo site e quero conhecer os pacotes do Spa Day Individual!",
  SPA_DAY_NOIVA:
    "Olá! Vim pelo site e quero conhecer os pacotes do Spa Day Noiva!",
  MENSAL_VIP:
    "Olá! Quero conhecer o Programa Mulheres VIP Bellas e ver os planos.",
  CORPORATE:
    "Olá! Gostaria de informações sobre parcerias corporativas com o Spaço Bellas.",
  CTA_PRE_LAUNCH:
    "Olá! Quero garantir minha vaga no pré-lançamento do Spa Day das Celebridades!",
} as const;

/**
 * Utility to build a formatted WhatsApp URL.
 * @param message - The message to pre-fill in the WhatsApp chat.
 * @param utm - Optional UTM parameters for tracking.
 * @returns A complete WhatsApp link.
 */
export const buildWhatsAppUrl = (
  message: string,
  utm?: Record<string, string>,
): string => {
  const base = `https://wa.me/${CONTACT_CONFIG.WHATSAPP_NUMBER}`;
  const params = new URLSearchParams({ text: message });

  if (utm) {
    Object.entries(utm).forEach(([key, value]) => params.append(key, value));
  }

  return `${base}?${params.toString()}`;
};
