import { content, messages } from './site.js';
import { whatsappLink } from './links.js';
import { EVENTS } from './track.js';
import CtaLink from './CtaLink.jsx';
import Reveal from './Reveal.jsx';
import { WhatsAppIcon } from './Icons.jsx';
import Logo from './Logo.jsx';

export default function Clube() {
  const c = content.club;
  return (
    <section id="clube" aria-labelledby="clube-title" className="relative overflow-hidden bg-navy text-offwhite">
      <div className="mx-auto grid max-w-site items-center gap-16 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-36">
        <div className="lg:col-span-6">
          <Reveal><p className="eyebrow text-sand/80">Comunidade VIP · WhatsApp</p></Reveal>
          <Reveal delay={1}>
            <h2 id="clube-title" className="display mt-6 text-[48px] sm:text-[68px] lg:text-[76px]">
              Clube <em className="italic">Viva4You</em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-8 max-w-lg text-[19px] font-light italic leading-snug text-sand sm:text-[21px]">{c.tagline}</p>
            <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-offwhite/70">{c.text}</p>
          </Reveal>
          <Reveal delay={3} className="mt-10">
            <CtaLink href={whatsappLink(messages.club)} variant="light" icon={WhatsAppIcon} event={EVENTS.club} section="clube" className="w-full sm:w-auto">
              {c.cta}
            </CtaLink>
            <p className="mt-4 max-w-md text-[12.5px] leading-relaxed text-offwhite/50">{c.note}</p>
          </Reveal>
        </div>

        {/* Cartão de membro */}
        <Reveal delay={1} className="lg:col-span-5 lg:col-start-8">
          <div className="relative mx-auto max-w-[460px]">
            <div className="absolute -inset-4 rotate-[-3deg] border border-sand/20" aria-hidden="true" />
            <div className="relative bg-offwhite p-8 text-navy shadow-[0_40px_80px_-40px_rgba(0,0,0,.6)] sm:p-10">
              <div className="flex items-center justify-between">
                <Logo className="h-5" />
                <p className="eyebrow text-navy/50">Membro</p>
              </div>
              <div className="my-8 h-px bg-navy/15" />
              <p className="eyebrow text-navy/50">O que você acompanha</p>
              <ul className="mt-6 space-y-5">
                {c.benefits.map((b, i) => (
                  <li key={b} className="flex items-baseline gap-5">
                    <span className="text-[12px] font-extrabold text-brandred">0{i + 1}</span>
                    <span className="text-[17px] font-semibold leading-tight">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex items-end justify-between border-t border-navy/15 pt-6">
                <p className="eyebrow text-navy/50">Clube Viva4You</p>
                <p className="text-[13px] font-medium italic text-navy/60">Curitiba</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
