import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { findPost, posts } from './blog.js';
import { brand, seo } from './site.js';
import { whatsappLink } from './links.js';
import { sectionHref, IS_SINGLE } from './router.js';
import { EVENTS } from './track.js';
import EditorialImage from './EditorialImage.jsx';
import CtaLink from './CtaLink.jsx';
import { PostCard, formatDate } from './BlogSection.jsx';
import { WhatsAppIcon } from './Icons.jsx';

/** Atualiza title, description, canonical e dados estruturados do artigo. */
function useArticleSeo(post) {
  useEffect(() => {
    const prevTitle = document.title;
    const desc = document.querySelector('meta[name="description"]');
    const prevDesc = desc?.getAttribute('content');
    document.title = post.seoTitle;
    desc?.setAttribute('content', post.seoDescription);

    const base = seo.canonicalUrl ? seo.canonicalUrl.replace(/\/$/, '') : '';
    let canon = document.querySelector('link[rel="canonical"]');
    const prevCanon = canon?.href;
    if (base) {
      if (!canon) { canon = document.createElement('link'); canon.rel = 'canonical'; document.head.appendChild(canon); }
      canon.href = `${base}/blog/${post.slug}`;
    }

    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.id = 'ld-article';
    ld.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.seoDescription,
      datePublished: post.date,
      inLanguage: 'pt-BR',
      author: { '@type': 'Organization', name: brand.name },
      publisher: { '@type': 'Organization', name: brand.name },
      ...(base ? { mainEntityOfPage: `${base}/blog/${post.slug}` } : {}),
    });
    document.head.appendChild(ld);
    window.scrollTo(0, 0);

    return () => {
      document.title = prevTitle;
      if (prevDesc) desc?.setAttribute('content', prevDesc);
      if (canon && prevCanon) canon.href = prevCanon;
      ld.remove();
    };
  }, [post]);
}

function Block({ b }) {
  if (b.type === 'h2') return <h2 className="mt-14 text-[24px] font-bold leading-tight tracking-[-0.015em] text-navy sm:text-[28px]">{b.text}</h2>;
  if (b.type === 'quote')
    return (
      <blockquote className="my-12 border-l-2 border-brandred pl-6 text-[22px] font-light italic leading-snug text-navy sm:text-[26px]">
        {b.text}
      </blockquote>
    );
  if (b.type === 'list')
    return (
      <ul className="mt-6 space-y-3">
        {b.items.map((it) => (
          <li key={it} className="flex gap-4 text-[17px] leading-relaxed text-graphite/85">
            <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-brandred" aria-hidden="true" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    );
  return <p className="mt-6 text-[17px] leading-[1.8] text-graphite/85">{b.text}</p>;
}

export default function ArticlePage({ slug }) {
  const post = findPost(slug);
  useArticleSeo(post);
  const others = posts.filter((p) => p.slug !== slug);
  const back = IS_SINGLE ? '#journal' : sectionHref('journal', false);

  return (
    <article className="bg-offwhite pt-[68px] lg:pt-[76px]" aria-labelledby="article-title">
      {/* Abertura */}
      <header className="mx-auto grid max-w-site lg:grid-cols-12">
        <div className="flex flex-col justify-center px-5 py-14 sm:px-8 lg:col-span-6 lg:px-12 lg:py-20">
          <a href={back} className="eyebrow inline-flex items-center gap-2 text-navy/60 hover:text-navy">
            <ArrowLeft size={14} strokeWidth={1.5} aria-hidden="true" /> Journal Viva4You
          </a>
          <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-brandred">{post.category}</p>
          <h1 id="article-title" className="display-soft mt-4 text-[34px] text-navy sm:text-[46px] lg:text-[52px]">{post.title}</h1>
          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-graphite/75">{post.excerpt}</p>
          <p className="mt-8 text-[12px] uppercase tracking-[0.18em] text-navy/50">
            <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingTime} de leitura
          </p>
        </div>
        <div className="lg:col-span-6">
          <EditorialImage src={post.image} alt={post.imageAlt} priority ratio="aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[640px]" position="50% 25%" />
        </div>
      </header>

      {/* Corpo */}
      <div className="mx-auto max-w-[720px] px-5 py-16 sm:px-8 lg:py-24">
        {post.body.map((b, i) => <Block key={i} b={b} />)}

        <aside className="mt-16 bg-navy p-8 text-offwhite sm:p-10" aria-label="Fale com a Viva4You">
          <p className="eyebrow text-sand/80">Consultoria Viva4You</p>
          <p className="mt-4 text-[22px] font-bold leading-tight">Quer ajuda para montar o seu look?</p>
          <p className="mt-3 text-[15px] leading-relaxed text-offwhite/70">
            Nossas consultoras indicam peças e combinações pelo WhatsApp. Ou visite a loja no Água Verde.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaLink href={whatsappLink(post.whatsappMessage)} variant="light" icon={WhatsAppIcon} event={EVENTS.whatsapp} section={`blog-${post.slug}`}>
              Falar com uma consultora
            </CtaLink>
            <CtaLink href={brand.mapsUrl} variant="outline-light" event={EVENTS.location} section={`blog-${post.slug}`}>
              Como chegar
            </CtaLink>
          </div>
        </aside>
      </div>

      {/* Leia também */}
      <section aria-labelledby="related-title" className="border-t border-navy/10 bg-white py-20">
        <div className="mx-auto max-w-site px-5 sm:px-8 lg:px-12">
          <h2 id="related-title" className="eyebrow text-navy/60">Leia também</h2>
          <div className="mt-10 grid gap-14 sm:grid-cols-2 lg:max-w-[880px] lg:gap-10">
            {others.map((p, i) => <PostCard key={p.slug} post={p} i={i} section="leia-tambem" />)}
          </div>
        </div>
      </section>
    </article>
  );
}
