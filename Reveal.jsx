import { useEffect, useRef } from 'react';

/** Revelação discreta ao entrar na tela. */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) { el.classList.add('is-visible'); return; }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('is-visible'); io.disconnect(); } },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${delay ? `reveal-delay-${delay}` : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
