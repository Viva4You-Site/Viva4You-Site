import { brand, content, images, messages } from './site.js';
import { whatsappLink } from './links.js';
import { EVENTS } from './track.js';
import EditorialImage from './EditorialImage.jsx';
import CtaLink from './CtaLink.jsx';

export default function Hero() {
  const h = content.hero;
  return (
    <section id="topo" aria-labelledby="hero-title" className="relative overflow-hidden bg-offwhite pt-[68px] lg:pt-[76px]">
      <div className="mx-auto grid max-w-site lg:min-h-[calc(100svh-76px)] lg:grid-cols-12">
        {/* Texto */}
        <div className="relative order-2 flex flex-col justify-center px-5 pb-16 pt-10 sm:px-8 lg:order-1 lg:col-span-5 lg:px-12 lg:py-20">
          <p className="eyebrow anim-rise text-navy/60" style={{ animationDelay: '.1s' }}>Nova coleção · Moda feminina</p>
          <h1 id="hero-title" className="display anim-rise mt-6 text-[52px] text-navy sm:text-[72px] lg:text-[60px] xl:text-[76px]" style={{ animationDelay: '.2s' }}>
            Viva o seu <em className="italic">estilo.</em>
          </h1>
          <p className="anim-rise mt-8 max-w-md text-[17px] leading-relaxed text-graphite/80" style={{ animationDelay: '.35s' }}>
            {h.subtitle}
          </p>
          <p className="anim-rise mt-4 text-[15px] font-medium italic text-navy/70" style={{ animationDelay: '.45s' }}>
            {h.complement}
          </p>
          <div className="anim-rise mt-10 flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-start" style={{ animationDelay: '.55s' }}>
            <CtaLink href="#colecao" event={EVENTS.collection} section="hero" arrow>{h.primaryCta}</CtaLink>
            <CtaLink href={whatsappLink(messages.consultant)} variant="outline-dark" event={EVENTS.whatsapp} section="hero">
              {h.secondaryCta}
            </CtaLink>
          </div>
          <p className="eyebrow anim-fade mt-12 text-navy/40 lg:mt-14" style={{ animationDelay: '.9s' }}>{brand.signature}</p>
        </div>

        {/* Fotografia */}
        <div className="relative order-1 lg:order-2 lg:col-span-7">
          <div className="anim-fade relative h-[62svh] min-h-[420px] lg:absolute lg:inset-0 lg:h-auto">
            <EditorialImage
              src={images.hero}
              alt={images.heroAlt}
              position="45% 12%"
              label="Hero · 1600×2000"
              ratio="h-full w-full"
              tone="sand"
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
          </div>
          {/* Recorte secundário (só com foto) */}
          {images.heroDetail && <div className="absolute hidden w-[30%] max-w-[230px] shadow-[0_30px_60px_-30px_rgba(20,42,67,.45)] lg:right-14 lg:top-12 lg:block xl:right-20">
            <EditorialImage src={images.heroDetail} alt="Detalhe de tecido e acessório" label="Detalhe" tone="beige" ratio="aspect-[4/5]" sizes="230px" />
          </div>}
          <p className="vertical-text eyebrow absolute bottom-8 right-5 hidden text-navy/60 lg:block">{brand.signature}</p>
        </div>
      </div>
    </section>
  );
}
