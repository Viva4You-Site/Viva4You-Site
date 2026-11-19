import { brand, messages } from './site.js';
import { whatsappLink } from './links.js';
import { track, EVENTS } from './track.js';
import { InstagramIcon, WhatsAppIcon } from './Icons.jsx';
import Logo from './Logo.jsx';
import { sectionHref, privacyHref } from './router.js';
import { openCookiePreferences } from './consent.js';

export default function Footer({ campaignLive, onHome = true }) {
  const h = (id) => sectionHref(id, onHome);
  const a = brand.address;
  const links = [
    { href: h('colecao'), label: 'Nova coleção' },
    ...(campaignLive ? [{ href: h('viva-friday'), label: 'Viva Friday' }] : []),
    { href: h('clube'), label: 'Clube Viva4You' },
    { href: h('celebration'), label: 'Viva Celebration' },
    { href: h('essencia'), label: 'Nossa essência' },
    { href: h('journal'), label: 'Journal (blog)' },
    { href: h('visite'), label: 'Localização' },
  ];
  return (
    <footer className="bg-graphite text-offwhite/80">
      <div className="mx-auto max-w-site px-5 pb-28 pt-20 sm:px-8 lg:px-12 lg:pb-12">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="light" tagline className="h-16 sm:h-[72px]" />
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-offwhite/55">Moda feminina no Água Verde, em Curitiba.</p>
          </div>
          <nav aria-label="Links do rodapé" className="lg:col-span-3 lg:col-start-6">
            <p className="eyebrow text-offwhite/40">Navegue</p>
            <ul className="mt-6 space-y-3">
              {links.map((l) => (
                <li key={l.href}><a href={l.href} className="text-[14px] transition-colors hover:text-white">{l.label}</a></li>
              ))}
            </ul>
          </nav>
          <div className="lg:col-span-4">
            <p className="eyebrow text-offwhite/40">Contato</p>
            <ul className="mt-6 space-y-4 text-[14px]">
              <li>
                <a href={whatsappLink(messages.general)} target="_blank" rel="noopener noreferrer" onClick={() => track(EVENTS.whatsapp, { section: 'footer' })} className="inline-flex items-center gap-3 hover:text-white">
                  <WhatsAppIcon size={16} /> {brand.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={brand.instagram} target="_blank" rel="noopener noreferrer" onClick={() => track(EVENTS.instagram, { section: 'footer' })} className="inline-flex items-center gap-3 hover:text-white">
                  <InstagramIcon size={16} /> {brand.instagramHandle}
                </a>
              </li>
              <li>
                <a href={brand.mapsUrl} target="_blank" rel="noopener noreferrer" onClick={() => track(EVENTS.location, { section: 'footer' })} className="block leading-relaxed hover:text-white">
                  {a.street} — {a.district}<br />{a.city} — {a.state} · CEP {a.zip}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-[12px] text-offwhite/40 sm:flex-row sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <p>© {new Date().getFullYear()} Viva4You. Todos os direitos reservados.</p>
            <a href={privacyHref} className="underline-offset-4 hover:text-white hover:underline">Política de Privacidade</a>
            <button type="button" onClick={openCookiePreferences} className="text-left underline-offset-4 hover:text-white hover:underline">
              Preferências de cookies
            </button>
          </div>
          <p className="eyebrow !text-[10px]">{brand.signature}</p>
        </div>
      </div>
    </footer>
  );
}
