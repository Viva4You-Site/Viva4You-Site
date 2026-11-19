import { ArrowRight } from 'lucide-react';
import { track } from './track.js';

/**
 * Link com aparência de botão. Todo clique gera um evento de mensuração.
 * external=true abre em nova aba (WhatsApp, Maps, Instagram).
 */
export default function CtaLink({
  href, children, variant = 'dark', icon: Icon, arrow = false,
  event, section, label, external = false, className = '', ...rest
}) {
  const ext = external || /^https?:/.test(href);
  return (
    <a
      href={href}
      className={`btn btn-${variant} ${className}`}
      {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      onClick={() => event && track(event, { section, label: label || (typeof children === 'string' ? children : undefined) })}
      {...rest}
    >
      {Icon && <Icon size={16} strokeWidth={1.6} aria-hidden="true" />}
      <span>{children}</span>
      {arrow && <ArrowRight size={15} strokeWidth={1.5} className="btn-arrow" aria-hidden="true" />}
      {ext && <span className="sr-only"> (abre em nova aba)</span>}
    </a>
  );
}
