import {
  wordmarkDark,
  wordmarkLight,
  logoFullDark as fullDark,
  logoFullLight as fullLight,
} from './images.js';

/**
 * Logotipo oficial Viva4You.
 * tone: 'dark' (fundos claros) | 'light' (fundos escuros)
 * tagline: inclui "Moda & Acessórios"
 */
export default function Logo({ tone = 'dark', tagline = false, className = 'h-7' }) {
  const src = tagline ? (tone === 'light' ? fullLight : fullDark) : tone === 'light' ? wordmarkLight : wordmarkDark;
  const ratio = tagline ? 900 / 284 : 640 / 144;
  return (
    <img
      src={src}
      alt="Viva4You — Moda & Acessórios"
      width={Math.round(ratio * 100)}
      height={100}
      decoding="async"
      className={`w-auto select-none ${className}`}
      draggable="false"
    />
  );
}
