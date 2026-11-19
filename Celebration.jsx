import { content, images, messages } from './site.js';
import { whatsappLink } from './links.js';
import { EVENTS } from './track.js';
import EditorialImage from './EditorialImage.jsx';
import CtaLink from './CtaLink.jsx';
import Reveal from './Reveal.jsx';

export default function Celebration() {
  const c = content.celebration;
  return (
    <section id="celebration" aria-labelledby="celebration-title" className="bg-sand/60">
      <div className="mx-auto grid max-w-site lg:grid-cols-2">
        <EditorialImage
          src={images.celebration}
          alt={images.celebrationAlt}
          position="50% 4%"
          label="Celebration"
          tone="beige"
          ratio="aspect-[4/5] lg:aspect-auto lg:min-h-[760px]"
        />
        <div className="flex flex-col justify-center px-5 py-20 sm:px-8 lg:px-20">
          <Reveal><p className="eyebrow text-navy/60">{c.eyebrow}</p></Reveal>
          <Reveal delay={1}>
            <h2 id="celebration-title" className="display-soft mt-6 text-[36px] text-navy sm:text-[46px]">
              Sua temporada de <em className="italic">celebrar</em> começa aqui.
            </h2>
          </Reveal>
          <Reveal delay={2}><p className="mt-6 max-w-md text-[16px] leading-relaxed text-graphite/75">{c.text}</p></Reveal>
          <Reveal delay={2} as="ul" className="mt-10 border-b border-navy/15">
            {c.highlights.map((h, i) => (
              <li key={h} className="flex items-baseline justify-between border-t border-navy/15 py-5">
                <span className="text-[19px] font-semibold text-navy">{h}</span>
                <span className="text-[12px] font-bold text-brandred">0{i + 1}</span>
              </li>
            ))}
          </Reveal>
          <Reveal delay={3} className="mt-10">
            <CtaLink href={whatsappLink(messages.celebration)} event={EVENTS.whatsapp} section="celebration" arrow>
              {c.cta}
            </CtaLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
