/**
 * Consentimento de cookies (LGPD) + Google Consent Mode v2.
 * O padrão "negado" é definido no index.html, antes do GTM carregar.
 */
const KEY = 'viva4you_consent';
const VERSION = 1;

export function readConsent() {
  try {
    const c = JSON.parse(localStorage.getItem(KEY) || 'null');
    return c && c.version === VERSION ? c : null;
  } catch {
    return null;
  }
}

export function saveConsent({ analytics, marketing }) {
  const c = { version: VERSION, analytics: !!analytics, marketing: !!marketing, date: new Date().toISOString() };
  try { localStorage.setItem(KEY, JSON.stringify(c)); } catch { /* navegador sem storage */ }
  window.dataLayer = window.dataLayer || [];
  const gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  gtag('consent', 'update', {
    analytics_storage: c.analytics ? 'granted' : 'denied',
    ad_storage: c.marketing ? 'granted' : 'denied',
    ad_user_data: c.marketing ? 'granted' : 'denied',
    ad_personalization: c.marketing ? 'granted' : 'denied',
  });
  // Evento para acionar tags no GTM depois da escolha
  window.dataLayer.push({ event: 'consent_update', consent_analytics: c.analytics, consent_marketing: c.marketing });
  return c;
}

/** Reabre o banner (link "Preferências de cookies" do rodapé). */
export const openCookiePreferences = () => window.dispatchEvent(new Event('open-cookie-preferences'));
