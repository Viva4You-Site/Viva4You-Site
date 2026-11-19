import { useEffect, useState } from 'react';
import { findPost } from './blog.js';

/**
 * Roteamento simples, sem dependências.
 * Produção: artigos em /blog/<slug> (o servidor deve devolver o index.html — ver README).
 * Prévia em arquivo único: artigos em #<slug>.
 */
export const IS_SINGLE = import.meta.env.MODE === 'single';

export const postHref = (slug) => (IS_SINGLE ? `#${slug}` : `/blog/${slug}`);

export const PRIVACY_SLUG = 'politica-de-privacidade';
export const privacyHref = IS_SINGLE ? `#${PRIVACY_SLUG}` : `/${PRIVACY_SLUG}`;

/** Link para uma seção da home, funcionando também a partir de um artigo. */
export const sectionHref = (id, onHome) => (onHome || IS_SINGLE ? `#${id}` : `/#${id}`);

function readRoute() {
  const hash = decodeURIComponent(window.location.hash.replace('#', ''));
  if (hash === PRIVACY_SLUG || window.location.pathname.replace(/\/$/, '') === `/${PRIVACY_SLUG}`) return { name: 'privacy' };
  if (hash && findPost(hash)) return { name: 'post', slug: hash };
  const m = window.location.pathname.match(/^\/blog\/([^/]+)\/?$/);
  if (m && findPost(m[1])) return { name: 'post', slug: m[1] };
  return { name: 'home', anchor: hash || null };
}

export function useRoute() {
  const [route, setRoute] = useState(readRoute);
  useEffect(() => {
    const onChange = () => setRoute(readRoute());
    window.addEventListener('hashchange', onChange);
    window.addEventListener('popstate', onChange);
    return () => {
      window.removeEventListener('hashchange', onChange);
      window.removeEventListener('popstate', onChange);
    };
  }, []);
  return route;
}
