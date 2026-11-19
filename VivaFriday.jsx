import { MapPin, Users, ShoppingBag } from 'lucide-react';
import { campaign, messages, brand } from './site.js';
import { phasesWithStatus } from './campaign.js';
import { whatsappLink } from './links.js';
import { EVENTS, track } from './track.js';
import EditorialImage from './EditorialImage.jsx';
import CtaLink from './CtaLink.jsx';
import Reveal from './Reveal.jsx';
import { WhatsAppIcon } from './Icons.jsx';

const statusLabel = { today: 'Acontecendo agora', ended: 'Encerrado' };

export default function VivaFriday() {
  const phases = phasesWithStatus();
  const c = campaign;

  return (
    <section id="viva-friday" aria-labelledby="friday-title" className="relative overflow-hidden bg-[#0B0B0B] text-white">
      {/* Abertura */}
      <div className="mx-auto max-w-site px-5 pb-16 pt-24 sm:px-8 lg:px-12 lg:pb-24 lg:pt-32">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-6">
          <p className="eyebrow text-white/60">{c.eyebrow}</p>
          <p className="eyebrow text-white/40">Viva4You · Edição 2026</p>
        </div>

        <Reveal className="mt-14 flex flex-col items-center text-center">
          {/* Moldura com cantos arredondados — mesma linguagem dos posts da campanha */}
          <div className="relative px-6 py-10 sm:px-14 sm:py-14">
            <span aria-hidden="true" className="absolute inset-x-[8%] top-0 h-12 rounded-t-[36px] border-2 border-b-0 border-white sm:h-16 sm:rounded-t-[52px]" />
            <span aria-hidden="true" className="absolute bottom-0 left-[8%] h-12 w-[38%] rounded-bl-[36px] border-b-2 border-l-2 border-white sm:h-16 sm:rounded-bl-[52px]" />
            <span aria-hidden="true" className="absolute bottom-0 right-[8%] h-12 w-[38%] rounded-br-[36px] border-b-2 border-r-2 border-white sm:h-16 sm:rounded-br-[52px]" />
            <ShoppingBag aria-hidden="true" strokeWidth={1.8} className="absolute -bottom-[18px] left-1/2 h-9 w-9 -translate-x-1/2 text-brandred" />
            <h2 id="friday-title" className="display text-[clamp(68px,16vw,176px)] leading-[0.86] tracking-[-0.03em]">
              Viva<br />Friday
            </h2>
          </div>
          <p className="tagline-caps mt-12 text-[15px] text-white/90 sm:text-[20px]">{c.subtitle}</p>
          <p className="mt-8 inline-flex items-center rounded-full bg-white px-6 py-3 text-[13px] uppercase tracking-[0.04em] text-black shadow-[0_5px_0_#D8013B,0_12px_30px_-6px_rgba(216,1,59,.55)] sm:px-8 sm:text-[17px]">
            {c.datesLabel[0]}&nbsp;<strong className="font-extrabold">{c.datesLabel[1]}</strong>
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-8 lg:col-start-3 text-center" delay={1}>
            <p className="mx-auto max-w-xl text-[16px] leading-relaxed text-white/70">{c.text}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <CtaLink href={whatsappLink(c.whatsappMessage)} variant="light" icon={WhatsAppIcon} event={EVENTS.friday} section="viva-friday" label="cta-principal">
                {c.primaryCta}
              </CtaLink>
              <CtaLink href={brand.mapsUrl} variant="outline-light" icon={MapPin} event={EVENTS.location} section="viva-friday">
                {c.secondaryCta}
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Imagens + calendário */}
      <div className="mx-auto grid max-w-site gap-px lg:grid-cols-12">
        <div className="relative lg:col-span-5">
          <div className="lg:sticky lg:top-[76px]">
            <EditorialImage src={c.images.main} alt={c.images.mainAlt} position="50% 30%" label="Campanha · P&B" tone="black" ratio="aspect-[4/5] lg:aspect-auto lg:h-[calc(100svh-76px)]" sizes="(min-width: 1024px) 42vw, 100vw" />
          </div>
        </div>

        <div className="px-5 py-16 sm:px-8 lg:col-span-7 lg:px-16 lg:py-20">
          <p className="eyebrow text-white/50">O calendário</p>
          <ol className="mt-8">
            {phases.map((p, i) => (
              <Reveal as="li" key={p.id} delay={i}
                className={`grid gap-y-6 border-t border-white/15 py-10 sm:grid-cols-[auto,1fr] sm:gap-x-10 ${p.status === 'ended' ? 'opacity-40' : ''}`}>
                <div className="flex items-baseline gap-4 sm:block sm:min-w-[150px]">
                  <p className="text-[48px] font-extrabold leading-none tracking-[-0.04em] sm:text-[64px]">{p.dateLabel}</p>
                  <p className="eyebrow text-white/50 sm:mt-3">{p.month}</p>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="eyebrow text-white/50">{p.weekday}</p>
                    {statusLabel[p.status] && (
                      <span className={`eyebrow border px-2 py-1 !text-[9.5px] ${p.status === 'today' ? 'border-white text-white' : 'border-white/30 text-white/60'}`}>
                        {statusLabel[p.status]}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 text-[22px] font-extrabold uppercase leading-tight tracking-[-0.01em] sm:text-[26px]">{p.title}</h3>
                  <p className="mt-3 text-[18px] font-bold italic text-brandred brightness-125">{p.highlight}</p>
                  <p className="mt-2 max-w-md text-[15px] leading-relaxed text-white/65">{p.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Canais">
                    {p.channels.map((ch) => (
                      <li key={ch} className="border border-white/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white/70">{ch}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>

          {!c.conditionsConfirmed && (
            <p className="border-t border-white/15 pt-6 text-[12px] leading-relaxed text-white/45">{c.pendingNote}</p>
          )}

          {/* Destaque do Clube dentro da campanha */}
          <Reveal className="mt-14 flex flex-col gap-6 border border-sand/30 bg-navy p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="max-w-sm">
              <p className="eyebrow flex items-center gap-2 text-sand"><Users size={14} strokeWidth={1.5} /> Clube Viva4You</p>
              <p className="mt-4 text-[20px] font-bold leading-tight">{c.clubHighlight.title}</p>
              <p className="mt-3 text-[14px] leading-relaxed text-white/65">{c.clubHighlight.text}</p>
            </div>
            <a href={whatsappLink(messages.club)} target="_blank" rel="noopener noreferrer"
              onClick={() => track(EVENTS.club, { section: 'viva-friday' })}
              className="btn btn-outline-light shrink-0">
              {c.clubHighlight.cta}<span className="sr-only"> (abre em nova aba)</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
