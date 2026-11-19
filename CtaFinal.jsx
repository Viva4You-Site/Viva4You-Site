import { content, messages, images } from './site.js';
import { whatsappLink } from './links.js';
import { EVENTS } from './track.js';
import CtaLink from './CtaLink.jsx';
import Reveal from './Reveal.jsx';
import { WhatsAppIcon } from './Icons.jsx';

export default function CtaFinal() {
  const f = content.finalCta;
  return (
    <section aria-labelledby="final-title" className="relative overflow-hidden bg-navy-deep text-offwhite">
      {images.finalCta && (
        <img src={images.finalCta} alt="" aria-hidden="true" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover opacity-35" />
      )}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <span className="select-none text-[48vw] font-black leading-none text-white/[0.035]">V</span>
      </div>
      <div className="relative mx-auto max-w-site px-5 py-28 text-center sm:px-8 lg:px-12 lg:py-44">
        <Reveal><p className="eyebrow text-sand/70">Viva4You · Curitiba</p></Reveal>
        <Reveal delay={1}>
          <h2 id="final-title" className="display mx-auto mt-8 max-w-5xl text-[42px] sm:text-[68px] lg:text-[88px]">
            Seu estilo merece <em className="italic">ser vivido.</em>
          </h2>
        </Reveal>
        <Reveal delay={2}><p className="mx-auto mt-8 max-w-xl text-[16px] leading-relaxed text-offwhite/70">{f.text}</p></Reveal>
        <Reveal delay={3} className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
          <CtaLink href={whatsappLink(messages.general)} variant="light" icon={WhatsAppIcon} event={EVENTS.whatsapp} section="cta-final">{f.primaryCta}</CtaLink>
          <CtaLink href={whatsappLink(messages.club)} variant="outline-light" event={EVENTS.club} section="cta-final">{f.secondaryCta}</CtaLink>
        </Reveal>
      </div>
    </section>
  );
}
