import { content, images } from './site.js';
import EditorialImage from './EditorialImage.jsx';
import Reveal from './Reveal.jsx';

export default function Essencia() {
  const e = content.essence;
  return (
    <section id="essencia" aria-labelledby="essencia-title" className="bg-white py-24 lg:py-36">
      <div className="mx-auto grid max-w-site items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
        <Reveal className="lg:col-span-5">
          <EditorialImage src={images.essence} alt={images.essenceAlt} label="Essência" tone="stone" ratio="aspect-[4/5]" />
        </Reveal>
        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal><p className="eyebrow text-navy/60">{e.eyebrow}</p></Reveal>
          <Reveal delay={1}>
            <h2 id="essencia-title" className="display-soft mt-6 text-[36px] text-navy sm:text-[50px]">
              Mais do que vestir. <em className="italic">Uma forma de se expressar.</em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-10 flex gap-6">
              <span className="mt-3 h-px w-12 shrink-0 bg-beige" aria-hidden="true" />
              <p className="text-[18px] font-light leading-relaxed text-graphite/85 sm:text-[20px]">{e.text}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
