import { ArrowRight } from 'lucide-react';
import { blogIntro, posts } from './blog.js';
import { postHref } from './router.js';
import { track, EVENTS } from './track.js';
import EditorialImage from './EditorialImage.jsx';
import Reveal from './Reveal.jsx';

const fmt = (d) => new Date(d + 'T12:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });

export function PostCard({ post, i = 0, section = 'blog' }) {
  return (
    <Reveal as="article" delay={i} className="group">
      <a
        href={postHref(post.slug)}
        onClick={() => track(EVENTS.blog, { section, label: post.slug })}
        className="block"
        aria-label={`Ler: ${post.title}`}
      >
        <div className="overflow-hidden">
          <EditorialImage src={post.image} alt={post.imageAlt} ratio="aspect-[4/5]" position="50% 25%"
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" />
        </div>
        <div className="mt-6 flex items-center gap-3 text-[10.5px] font-semibold uppercase tracking-[0.2em]">
          <span className="text-brandred">{post.category}</span>
          <span className="h-px w-6 bg-navy/25" aria-hidden="true" />
          <span className="text-navy/50">{post.readingTime} de leitura</span>
        </div>
        <h3 className="mt-3 text-[20px] font-bold leading-snug tracking-[-0.01em] text-navy transition-colors group-hover:text-navy-deep sm:text-[22px]">
          {post.title}
        </h3>
        <p className="mt-3 text-[14.5px] leading-relaxed text-graphite/70">{post.excerpt}</p>
        <span className="link-underline mt-5 text-[11.5px] font-medium uppercase tracking-[0.2em] text-navy">
          Ler artigo <ArrowRight size={14} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </a>
    </Reveal>
  );
}

export { fmt as formatDate };

export default function BlogSection() {
  return (
    <section id="journal" aria-labelledby="journal-title" className="bg-offwhite py-24 lg:py-32">
      <div className="mx-auto max-w-site px-5 sm:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-navy/60">{blogIntro.eyebrow}</p>
            <h2 id="journal-title" className="display-soft mt-6 text-[36px] text-navy sm:text-[48px]">
              Ideias para vestir <em className="italic">a estação.</em>
            </h2>
          </Reveal>
          <Reveal delay={1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[16px] leading-relaxed text-graphite/75">{blogIntro.text}</p>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {posts.map((p, i) => <PostCard key={p.slug} post={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
