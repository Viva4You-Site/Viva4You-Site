import { ArrowUpRight } from 'lucide-react';
import { content, images } from './site.js';
import { whatsappLink } from './links.js';
import { track, EVENTS } from './track.js';
import EditorialImage from './EditorialImage.jsx';
import Reveal from './Reveal.jsx';

const tones = ['sand', 'stone', 'beige'];
const offsets = ['', 'lg:mt-24', 'lg:mt-10'];

export default function Colecao() {
  const c = content.collection;
  return (
    <section id="colecao" aria-labelledby="colecao-title" className="bg-offwhite py-24 lg:py-36">
      <div className="mx-auto max-w-site px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-navy/60">{c.eyebrow}</p>
            <h2 id="colecao-title" className="display-soft mt-6 text-[38px] text-navy sm:text-[52px] lg:text-[60px]">
              Peças que acompanham <em className="italic">a sua história.</em>
            </h2>
          </Reveal>
          <Reveal delay={1} className="flex items-end lg:col-span-4 lg:col-start-9">
            <p className="text-[16px] leading-relaxed text-graphite/75">{c.text}</p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {c.categories.map((cat, i) => (
            <Reveal as="article" key={cat.number} delay={i} className={`group ${offsets[i]}`}>
              <div className="overflow-hidden">
                <EditorialImage
                  src={images.collection[i]}
                  alt={images.collectionAlt[i]}
                  position="50% 25%"
                  label={`Coleção ${cat.number}`}
                  tone={tones[i]}
                  ratio="aspect-[3/4]"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="mt-7 flex items-baseline gap-5">
                <span className="text-[13px] font-extrabold text-brandred">{cat.number}</span>
                <div className="flex-1">
                  <h3 className="text-[21px] font-bold leading-tight text-navy">{cat.title}</h3>
                  <p className="mt-2 text-[15px] text-graphite/70">{cat.text}</p>
                  <a
                    href={whatsappLink(cat.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track(EVENTS.collection, { section: 'colecao', label: cat.title })}
                    className="link-underline mt-5 text-[11.5px] font-medium uppercase tracking-[0.2em] text-navy active:opacity-60"
                  >
                    {c.cta} <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
                    <span className="sr-only"> de {cat.title} pelo WhatsApp (abre em nova aba)</span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
