/**
 * Eventos de mensuração — compatível com GTM (dataLayer) e GA4 (gtag).
 * Nomes de eventos:
 *  click_whatsapp · click_clube · click_viva_friday
 *  click_localizacao · click_instagram · click_colecao · click_blog
 * No GTM, crie acionadores do tipo "Evento personalizado" com esses nomes.
 */
export const EVENTS = {
  whatsapp: 'click_whatsapp',
  club: 'click_clube',
  friday: 'click_viva_friday',
  location: 'click_localizacao',
  instagram: 'click_instagram',
  collection: 'click_colecao',
  blog: 'click_blog',
};

export function track(event, params = {}) {
  if (typeof window === 'undefined' || !event) return;
  const payload = { event, page_section: params.section || undefined, ...params };
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
  if (typeof window.gtag === 'function') window.gtag('event', event, params);
}

/** Injeta GTM ou GA4 somente se os IDs reais forem informados. */
export function initAnalytics({ gtmId, ga4Id }) {
  if (typeof document === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  // O GTM já é carregado no index.html (antes do React), junto com o Consent Mode.
  const gtmInHtml = !!document.querySelector('script[src*="googletagmanager.com/gtm.js"]') || window.google_tag_manager;
  if (gtmId && gtmInHtml) return;
  if (gtmId) {
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    document.head.appendChild(s);
  } else if (ga4Id) {
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`;
    document.head.appendChild(s);
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', ga4Id);
  }
}
