import { MapPin, Navigation } from 'lucide-react';
import { brand, content, messages } from './site.js';
import { whatsappLink } from './links.js';
import { EVENTS } from './track.js';
import CtaLink from './CtaLink.jsx';
import Reveal from './Reveal.jsx';
import { WhatsAppIcon } from './Icons.jsx';

/** Composição gráfica de mapa (usada quando o iframe está desligado). */
function MapArt() {
  return (
    <svg viewBox="0 0 600 600" className="h-full w-full" role="img" aria-label="Ilustração da localização da Viva4You no Água Verde">
      <rect width="600" height="600" fill="#142A43" />
      <g stroke="#DED2C2" strokeOpacity=".16" strokeWidth="1" fill="none">
        {Array.from({ length: 13 }).map((_, i) => <line key={`h${i}`} x1="0" x2="600" y1={i * 50} y2={i * 50 + 18} />)}
        {Array.from({ length: 13 }).map((_, i) => <line key={`v${i}`} y1="0" y2="600" x1={i * 50} x2={i * 50 - 22} />)}
      </g>
      <path d="M-20 420 C 140 380, 240 330, 300 300 S 470 210, 640 170" stroke="#DED2C2" strokeOpacity=".7" strokeWidth="2.5" fill="none" />
      <path d="M120 -20 C 170 150, 250 240, 300 300 S 380 470, 400 640" stroke="#DED2C2" strokeOpacity=".3" strokeWidth="1.5" fill="none" />
      <circle cx="300" cy="300" r="80" fill="none" stroke="#C6B5A3" strokeOpacity=".35" />
      <circle cx="300" cy="300" r="150" fill="none" stroke="#C6B5A3" strokeOpacity=".15" />
      <circle cx="300" cy="300" r="9" fill="#F8F6F2" />
      <circle cx="300" cy="300" r="22" fill="none" stroke="#F8F6F2" strokeOpacity=".5" />
      <text x="330" y="292" fill="#F8F6F2" fontFamily="Montserrat, sans-serif" fontSize="26" fontWeight="800">Viva4You</text>
      <text x="331" y="318" fill="#DED2C2" fillOpacity=".7" fontFamily="Manrope, sans-serif" fontSize="11" letterSpacing="3">AV. ÁGUA VERDE, 165</text>
      <text x="40" y="560" fill="#DED2C2" fillOpacity=".55" fontFamily="Manrope, sans-serif" fontSize="11" letterSpacing="4">ÁGUA VERDE · CURITIBA</text>
    </svg>
  );
}

export default function Visite() {
  const v = content.visit;
  const a = brand.address;
  return (
    <section id="visite" aria-labelledby="visite-title" className="bg-offwhite py-24 lg:py-32">
      <div className="mx-auto grid max-w-site items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-5">
          <Reveal><p className="eyebrow text-navy/60">{v.eyebrow}</p></Reveal>
          <Reveal delay={1}>
            <h2 id="visite-title" className="display-soft mt-6 text-[34px] text-navy sm:text-[44px]">
              Seu próximo look pode estar <em className="italic">mais perto</em> do que você imagina.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <address className="mt-10 border-t border-navy/15 pt-8 not-italic">
              <p className="flex items-start gap-3 text-[18px] font-semibold leading-snug text-navy">
                <MapPin size={20} strokeWidth={1.4} className="mt-1.5 shrink-0 text-beige" aria-hidden="true" />
                <span>{a.street} — {a.district}<br />{a.city} — {a.state}</span>
              </p>
              <p className="mt-3 pl-8 text-[13px] uppercase tracking-[0.2em] text-graphite/60">CEP {a.zip}</p>
              {brand.openingHours && <p className="mt-3 pl-8 text-[14px] text-graphite/70">{brand.openingHours}</p>}
            </address>
          </Reveal>
          <Reveal delay={3} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CtaLink href={brand.mapsUrl} icon={Navigation} event={EVENTS.location} section="visite">{v.routeCta}</CtaLink>
            <CtaLink href={whatsappLink(messages.location)} variant="outline-dark" icon={WhatsAppIcon} event={EVENTS.whatsapp} section="visite">
              {v.talkCta}
            </CtaLink>
          </Reveal>
        </div>

        <Reveal delay={1} className="lg:col-span-6 lg:col-start-7">
          <a href={brand.mapsUrl} target="_blank" rel="noopener noreferrer" className="group relative block aspect-square overflow-hidden sm:aspect-[5/4] lg:aspect-square"
            aria-label="Abrir a localização da Viva4You no Google Maps (abre em nova aba)">
            {brand.showMapEmbed ? (
              <iframe title="Mapa da Viva4You" src={brand.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className="pointer-events-none h-full w-full grayscale-[0.4]" />
            ) : (
              <MapArt />
            )}
            <span className="absolute bottom-5 right-5 bg-offwhite px-4 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-navy transition-transform duration-300 group-hover:-translate-y-1">
              Ver no Google Maps
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
