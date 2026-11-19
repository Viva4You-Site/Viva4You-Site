import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { brand, messages } from './site.js';
import { whatsappLink } from './links.js';
import { track, EVENTS } from './track.js';
import { WhatsAppIcon, InstagramIcon } from './Icons.jsx';
import Logo from './Logo.jsx';
import { sectionHref } from './router.js';

export default function Header({ campaignLive, onHome = true }) {
  const h = (id) => sectionHref(id, onHome);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const nav = [
    { href: h('colecao'), label: 'Nova coleção', event: EVENTS.collection },
    ...(campaignLive ? [{ href: h('viva-friday'), label: 'Viva Friday', event: EVENTS.friday }] : []),
    { href: h('clube'), label: 'Clube Viva4You', event: EVENTS.club },
    { href: h('essencia'), label: 'Nossa essência' },
    { href: h('visite'), label: 'Localização', event: EVENTS.location },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const onNav = (item) => {
    setOpen(false);
    if (item.event) track(item.event, { section: 'header', label: item.label });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-offwhite/90 shadow-[0_1px_0_rgba(20,42,67,0.08)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-site items-center justify-between px-5 sm:px-8 lg:h-[76px] lg:px-12">
        <a href={h('topo')} className="block" aria-label="Viva4You — voltar ao início">
          <Logo className="h-[22px] sm:h-6 lg:h-[26px]" />
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => onNav(item)}
                  className={`link-underline text-[11.5px] font-medium uppercase tracking-[0.2em] text-navy/80 hover:text-navy ${
                    item.label === 'Viva Friday' ? 'text-graphite' : ''
                  }`}
                >
                  {item.label === 'Viva Friday' && <span className="h-1.5 w-1.5 rounded-full bg-graphite" aria-hidden="true" />}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink(messages.general)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track(EVENTS.whatsapp, { section: 'header' })}
            className="btn btn-dark hidden !px-5 !py-3 lg:inline-flex"
          >
            <WhatsAppIcon size={15} /> WhatsApp
          </a>
          <a
            href={whatsappLink(messages.general)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track(EVENTS.whatsapp, { section: 'header-mobile' })}
            aria-label="Falar com a Viva4You pelo WhatsApp (abre em nova aba)"
            className="flex h-11 w-11 items-center justify-center bg-navy text-offwhite active:scale-95 lg:hidden"
          >
            <WhatsAppIcon size={18} />
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={open}
            aria-controls="menu-mobile"
            className="flex h-11 w-11 items-center justify-center text-navy active:scale-95 lg:hidden"
          >
            <Menu size={24} strokeWidth={1.4} />
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed inset-0 z-[60] flex flex-col bg-navy text-offwhite transition-all duration-500 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="flex h-[68px] items-center justify-between px-5">
          <Logo tone="light" className="h-[22px]" />
          <button type="button" onClick={() => setOpen(false)} aria-label="Fechar menu" className="flex h-11 w-11 items-center justify-center active:scale-95">
            <X size={24} strokeWidth={1.4} />
          </button>
        </div>
        <nav aria-label="Navegação mobile" className="flex flex-1 flex-col justify-center px-8">
          <ul className="space-y-5">
            {nav.map((item, i) => (
              <li key={item.href} style={{ transitionDelay: open ? `${120 + i * 60}ms` : '0ms' }}
                className={`transition-all duration-500 ${open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}>
                <a href={item.href} onClick={() => onNav(item)} className="flex items-baseline gap-4 text-[28px] font-extrabold uppercase leading-tight tracking-[-0.02em]">
                  <span className="font-sans text-[11px] tracking-[0.2em] text-sand/60">0{i + 1}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-3 px-8 pb-10">
          <a href={whatsappLink(messages.general)} target="_blank" rel="noopener noreferrer"
            onClick={() => track(EVENTS.whatsapp, { section: 'menu-mobile' })} className="btn btn-light w-full">
            <WhatsAppIcon size={16} /> Falar com uma consultora
          </a>
          <a href={brand.instagram} target="_blank" rel="noopener noreferrer"
            onClick={() => track(EVENTS.instagram, { section: 'menu-mobile' })} className="btn btn-outline-light w-full">
            <InstagramIcon size={16} /> {brand.instagramHandle}
          </a>
        </div>
      </div>
    </header>
  );
}
