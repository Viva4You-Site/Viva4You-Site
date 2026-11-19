import { brand } from './site.js';

/** Monta o link do WhatsApp oficial com mensagem personalizada. */
export const whatsappLink = (message = '') =>
  `https://wa.me/${brand.whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
