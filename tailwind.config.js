/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './*.jsx', './site.js', './blog.js'],
  // Variantes de botão montadas dinamicamente em CtaLink
  safelist: ['btn-dark', 'btn-light', 'btn-outline-dark', 'btn-outline-light'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#142A43', deep: '#0E1F33' },
        offwhite: '#F8F6F2',
        sand: '#DED2C2',
        beige: '#C6B5A3',
        graphite: '#252525',
        brandred: '#D8013B', // vermelho do "4" da logo
      },
      fontFamily: {
        // Montserrat: a mesma família usada nos conteúdos da marca
        serif: ['Montserrat', 'system-ui', 'sans-serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { editorial: '0.32em' },
      maxWidth: { site: '1360px' },
    },
  },
  plugins: [],
};
