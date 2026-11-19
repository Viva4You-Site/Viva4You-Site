/**
 * ============================================================
 *  VIVA4YOU — ARQUIVO CENTRAL DE CONFIGURAÇÃO
 * ============================================================
 *  Tudo o que muda com frequência está aqui: contatos, campanha,
 *  datas, descontos, mensagens de WhatsApp, textos e imagens.
 *  Não é preciso mexer nos componentes para atualizar a página.
 * ============================================================
 */

// Fotografias da Viva4You — embutidas no código (src/assets/images.js)
import {
  heroImg,
  fridayImg,
  colElegancia,
  colMomentos,
  colEssenciais,
  celebrationImg,
  essenceImg,
} from '../assets/images.js';

/* ------------------------------------------------------------
 * 1. MARCA E CONTATOS (somente informações confirmadas)
 * ---------------------------------------------------------- */
export const brand = {
  name: 'Viva4You',
  signature: 'VIVA4YOU — CURITIBA, BRASIL',
  instagram: 'https://www.instagram.com/viva4you/',
  instagramHandle: '@viva4you',
  whatsappNumber: '554199707157', // formato internacional, só dígitos
  whatsappDisplay: '+55 41 9970-7157',
  address: {
    street: 'Av. Água Verde, 165',
    district: 'Água Verde',
    city: 'Curitiba',
    state: 'PR',
    zip: '80620-200',
    country: 'BR',
  },
  // Abre o Google Maps com o endereço informado.
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Av. Água Verde, 165 - Água Verde, Curitiba - PR, 80620-200'),
  // Mapa incorporado (iframe). Deixe true no site publicado.
  // Em ambientes que bloqueiam iframes, a composição visual é exibida.
  showMapEmbed: false,
  mapEmbedUrl:
    'https://www.google.com/maps?q=' +
    encodeURIComponent('Av. Água Verde, 165 - Água Verde, Curitiba - PR, 80620-200') +
    '&output=embed',
  // Horário de funcionamento: deixe null até a marca confirmar.
  openingHours: null,
};

/* ------------------------------------------------------------
 * 2. SEO — preencha o domínio definitivo antes de publicar
 * ---------------------------------------------------------- */
export const seo = {
  canonicalUrl: '', // ex.: 'https://www.viva4you.com.br/'
  title: 'Viva4You | Moda feminina em Curitiba — Água Verde',
  description:
    'Moda feminina contemporânea no Água Verde, em Curitiba. Looks para o dia a dia, festas e momentos especiais. Conheça a Viva4You e o Clube Viva4You.',
};

/* ------------------------------------------------------------
 * 3. MENSURAÇÃO — não invente IDs. Deixe vazio até ter os reais.
 * ---------------------------------------------------------- */
export const analytics = {
  // GTM instalado direto no index.html (com Consent Mode v2). Se trocar o ID, troque lá também.
  gtmId: 'GTM-KJMZGV82',
  ga4Id: '', // não usar junto com o GTM — configure o GA4 dentro do GTM
};

/* ------------------------------------------------------------
 * 3b. DADOS LEGAIS (Política de Privacidade)
 *  Preencha razão social e CNPJ quando a marca confirmar.
 *  Enquanto estiverem vazios, não aparecem na página.
 * ---------------------------------------------------------- */
export const legal = {
  companyName: '', // ex.: 'Viva4You Moda Ltda.'
  cnpj: '', // ex.: '00.000.000/0001-00'
  email: '', // e-mail para assuntos de privacidade (opcional)
  privacyUpdatedAt: '2026-11-19',
};

/* ------------------------------------------------------------
 * 4. MENSAGENS DE WHATSAPP
 * ---------------------------------------------------------- */
export const messages = {
  general: 'Olá! Vim pelo site da Viva4You e gostaria de falar com uma consultora.',
  consultant: 'Olá! Vim pelo site da Viva4You e gostaria de falar com uma consultora.',
  club: 'Olá! Conheci o Clube Viva4You pelo site e gostaria de entrar no grupo VIP.',
  celebration:
    'Olá! Vi a seleção de looks para celebrações no site e gostaria de ajuda para escolher uma produção.',
  location: 'Olá! Gostaria de informações para visitar a loja da Viva4You no Água Verde.',
};

/* ------------------------------------------------------------
 * 5. CAMPANHA — VIVA FRIDAY
 * ------------------------------------------------------------
 *  active:          liga/desliga a campanha manualmente.
 *  hideAfter:       a campanha some sozinha depois desta data,
 *                   evitando mensagens promocionais vencidas.
 *  conditionsConfirmed: enquanto false, a página mostra uma nota
 *                   discreta de "condições previstas". Mude para
 *                   true somente após a confirmação final da marca.
 *  Cada etapa também some/ganha o selo "Encerrado" após `endsAt`.
 * ---------------------------------------------------------- */
export const campaign = {
  active: true,
  hideAfter: '2026-11-29T00:00:00-03:00',
  conditionsConfirmed: false,

  name: 'Viva Friday',
  eyebrow: 'Campanha especial · Novembro',
  datesLabel: ['Dias 26, 27 e 28', 'de novembro'], // selo de datas (texto normal + negrito)
  title: 'VIVA FRIDAY',
  subtitle: 'Seu estilo favorito. Uma oportunidade especial.',
  text: 'Uma seleção de peças para renovar suas produções e descobrir novas possibilidades de estilo.',
  pendingNote:
    'Condições previstas e sujeitas à confirmação da Viva4You. Consulte as peças participantes pelo WhatsApp.',

  whatsappMessage:
    'Olá! Vi a Viva Friday no site da Viva4You e gostaria de conhecer as peças e condições disponíveis.',
  primaryCta: 'Quero conhecer as oportunidades',
  secondaryCta: 'Visitar a loja',

  // Imagens da campanha (coloque os arquivos em /public/images/)
  images: {
    main: fridayImg,
    mainAlt: 'Look total preto Viva4You: blusa com mangas em couro e saia midi em suede com recorte de couro',
  },

  phases: [
    {
      id: 'fase-1',
      dateLabel: '26',
      month: 'Novembro',
      weekday: 'Quinta-feira',
      title: 'Abertura Viva Friday',
      highlight: 'Até 70% OFF',
      description: 'Em peças selecionadas, no digital e na loja física.',
      channels: ['Digital', 'Loja física'],
      endsAt: '2026-11-27T00:00:00-03:00',
    },
    {
      id: 'fase-2',
      dateLabel: '27',
      month: 'Novembro',
      weekday: 'Sexta-feira',
      title: 'Viva Friday',
      highlight: 'Até 70% OFF',
      description: 'Em peças selecionadas, no digital e na loja física.',
      channels: ['Digital', 'Loja física'],
      endsAt: '2026-11-28T00:00:00-03:00',
    },
    {
      id: 'fase-3',
      dateLabel: '28',
      month: 'Novembro',
      weekday: 'Sábado',
      title: 'Especial loja física',
      highlight: '70% OFF',
      description: 'Nos produtos da loja, exceto a coleção nova, com 20% OFF.',
      channels: ['Loja física'],
      endsAt: '2026-11-29T00:00:00-03:00',
    },
  ],

  clubHighlight: {
    title: 'Fique por dentro antes de todo mundo',
    text: 'Durante a Viva Friday, as novidades e seleções chegam primeiro ao Clube Viva4You.',
    cta: 'Entrar no Clube',
  },
};

/* ------------------------------------------------------------
 * 6. IMAGENS DA MARCA
 * ------------------------------------------------------------
 *  Use SOMENTE fotos reais da Viva4You. Enquanto o valor for
 *  null, a página exibe um quadro editorial sinalizando a
 *  substituição — nunca uma foto genérica.
 *  Recomendado: .webp, 1600px no lado maior, até ~250 KB.
 * ---------------------------------------------------------- */
export const images = {
  hero: heroImg,
  heroAlt: 'Conjunto de colete e saia longa em linho areia com botões dourados, em uma rua à beira-mar — Viva4You',
  heroDetail: null, // recorte secundário opcional (só aparece se houver foto)
  collection: [colElegancia, colMomentos, colEssenciais],
  collectionAlt: [
    'Blusa creme com gola canelada e saia em couro off-white',
    'Conjunto de jaqueta e calça creme com vivos pretos e blusa vinho',
    'Conjunto de camisa e calça listradas em azul-marinho e branco, à beira-mar',
  ],
  celebration: celebrationImg,
  celebrationAlt: 'Vestido midi branco de alças largas com pespontos, bolsa matelassê bege e acessórios dourados',
  essence: essenceImg,
  essenceAlt: 'Ateliê com croqui de vestido, amostras de tecido em areia, off-white e azul-marinho e linhas de costura',
  finalCta: null,
  ogImage: '/images/og-viva4you.jpg', // 1200×630, usada no compartilhamento
};

/* ------------------------------------------------------------
 * 7. CONTEÚDO EDITORIAL
 * ---------------------------------------------------------- */
export const content = {
  hero: {
    title: 'Viva o seu estilo.',
    subtitle:
      'Peças que acompanham seus momentos, traduzem sua personalidade e valorizam cada escolha.',
    complement: 'Descubra a moda feminina da Viva4You, em Curitiba.',
    primaryCta: 'Explorar a coleção',
    secondaryCta: 'Falar com uma consultora',
  },

  club: {
    title: 'Clube Viva4You',
    tagline: 'Seu lugar para ficar por dentro de tudo o que acontece na Viva.',
    text: 'Entre para o nosso grupo VIP e acompanhe novidades, seleções especiais, lançamentos e oportunidades da Viva4You.',
    benefits: [
      'Novidades da marca',
      'Oportunidades especiais',
      'Lançamentos e coleções',
      'Uma conexão mais próxima com a Viva4You',
    ],
    cta: 'Quero entrar no Clube Viva4You',
    note: 'Você será atendida pelo nosso WhatsApp oficial, que libera sua entrada no grupo.',
  },

  collection: {
    eyebrow: 'Nova coleção — Moda para viver',
    title: 'Peças que acompanham a sua história.',
    text: 'Da rotina aos momentos especiais, a Viva4You reúne escolhas que combinam elegância, personalidade e versatilidade.',
    categories: [
      {
        number: '01',
        title: 'Elegância para todos os dias',
        text: 'Looks contemporâneos e versáteis.',
        message:
          'Olá! Vi a categoria "Elegância para todos os dias" no site e gostaria de conhecer as opções.',
      },
      {
        number: '02',
        title: 'Momentos especiais',
        text: 'Produções para ocasiões que merecem atenção.',
        message:
          'Olá! Vi a categoria "Momentos especiais" no site e gostaria de conhecer as opções.',
      },
      {
        number: '03',
        title: 'Essenciais com personalidade',
        text: 'Peças para criar diferentes combinações.',
        message:
          'Olá! Vi a categoria "Essenciais com personalidade" no site e gostaria de conhecer as opções.',
      },
    ],
    cta: 'Consultar opções',
  },

  celebration: {
    eyebrow: 'Viva Celebration',
    title: 'Sua temporada de celebrar começa aqui.',
    text: 'Encontre produções para confraternizações, Natal, Réveillon e outros momentos especiais.',
    highlights: ['Confraternizações', 'Natal e Réveillon', 'Viagens e celebrações'],
    cta: 'Encontrar meu look',
  },

  essence: {
    eyebrow: 'Nossa essência',
    title: 'Mais do que vestir. Uma forma de se expressar.',
    text: 'Acreditamos na moda como uma extensão da personalidade. Na Viva4You, cada escolha é um convite para valorizar o próprio estilo, descobrir novas combinações e se sentir bem em diferentes momentos da vida.',
  },

  visit: {
    eyebrow: 'Visite a Viva4You',
    title: 'Seu próximo look pode estar mais perto do que você imagina.',
    routeCta: 'Como chegar',
    talkCta: 'Falar com a Viva4You',
  },

  finalCta: {
    title: 'Seu estilo merece ser vivido.',
    text: 'Descubra novas possibilidades, encontre suas peças favoritas e conte com a Viva4You para escolher seu próximo look.',
    primaryCta: 'Conversar pelo WhatsApp',
    secondaryCta: 'Entrar no Clube Viva4You',
  },
};
