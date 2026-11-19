/**
 * Imagem editorial com carregamento otimizado.
 * Sem `src`, exibe um quadro editorial sinalizando a substituição
 * por uma foto real da Viva4You — nunca uma imagem genérica.
 */
const tones = {
  sand: 'from-[#E6DCCD] via-[#DED2C2] to-[#CDBDAA] text-navy',
  beige: 'from-[#D3C3B1] via-[#C6B5A3] to-[#B3A08C] text-navy',
  navy: 'from-[#1B3552] via-[#142A43] to-[#0E1F33] text-sand',
  black: 'from-[#222] via-[#151515] to-[#0A0A0A] text-white/70',
  stone: 'from-[#EEE9E1] via-[#E4DCD0] to-[#D6CBBB] text-navy',
};

export default function EditorialImage({
  src,
  alt,
  label = 'Foto',
  ratio = 'aspect-[3/4]',
  tone = 'sand',
  priority = false,
  className = '',
  sizes = '(min-width: 1024px) 50vw, 100vw',
  position = 'center',
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${ratio} ${className}`}>
        <img
          src={src}
          alt={alt}
          sizes={sizes}
          loading={priority ? 'eager' : 'lazy'}
          fetchpriority={priority ? 'high' : 'auto'}
          decoding="async"
          style={{ objectPosition: position }}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] ease-out hover:scale-[1.03]"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`Espaço reservado para fotografia da Viva4You: ${alt}`}
      className={`grain relative overflow-hidden bg-gradient-to-br ${tones[tone]} ${ratio} ${className}`}
    >
      <div className="absolute inset-3 border border-current opacity-25 sm:inset-4" />
      <span className="pointer-events-none absolute -bottom-[0.12em] -right-[0.04em] text-[9rem] font-black leading-none opacity-[0.09] sm:text-[13rem]">
        V
      </span>
      <div className="absolute left-6 top-6 sm:left-8 sm:top-8">
        <p className="eyebrow opacity-70">Viva4You · {label}</p>
      </div>
      <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8">
        <p className="text-[15px] font-medium italic leading-snug opacity-80 sm:text-base">{alt}</p>
        <p className="mt-2 text-[10px] uppercase tracking-[0.24em] opacity-50">Inserir foto real da marca</p>
      </div>
    </div>
  );
}
