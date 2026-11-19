import { useEffect, useState } from 'react';
import { messages } from './site.js';
import { whatsappLink } from './links.js';
import { track, EVENTS } from './track.js';
import { WhatsAppIcon } from './Icons.jsx';

export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false);
  const [banner, setBanner] = useState(false);
  useEffect(() => {
    const on = (e) => setBanner(!!e.detail);
    window.addEventListener('cookie-banner', on);
    return () => window.removeEventListener('cookie-banner', on);
  }, []);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <a
      href={whatsappLink(messages.general)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track(EVENTS.whatsapp, { section: 'botao-flutuante' })}
      aria-label="Atendimento pelo WhatsApp (abre em nova aba)"
      className={`group fixed bottom-5 right-5 z-40 flex items-center gap-3 bg-navy py-3.5 pl-4 pr-4 text-offwhite shadow-[0_18px_40px_-18px_rgba(20,42,67,.8)] transition-all duration-500 active:scale-95 sm:bottom-8 sm:right-8 sm:pr-5 ${
        show && !banner ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <WhatsAppIcon size={20} />
      <span className="hidden text-[11px] font-medium uppercase tracking-[0.2em] sm:inline">Atendimento</span>
    </a>
  );
}
