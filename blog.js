/**
 * ============================================================
 *  JOURNAL VIVA4YOU — ARTIGOS DO BLOG
 * ============================================================
 *  Para criar um artigo novo, copie um objeto, troque o `slug`
 *  (vira a URL /blog/slug), os textos e a imagem, e acrescente
 *  a URL em public/sitemap.xml.
 *
 *  Blocos aceitos em `body`:
 *   { type: 'p', text }            parágrafo
 *   { type: 'h2', text }           subtítulo
 *   { type: 'list', items: [] }    lista
 *   { type: 'quote', text }        frase de destaque
 * ============================================================
 */
import {
  colEssenciais as summerImg,
  celebrationLookImg as celebrationImg,
  suedeBlazerImg as suedeImg,
} from '../assets/images.js';

export const blogIntro = {
  eyebrow: 'Journal Viva4You',
  title: 'Ideias para vestir a estação.',
  text: 'Combinações, texturas e produções para inspirar o seu próximo look.',
};

export const posts = [
  {
    slug: 'looks-de-verao',
    category: 'Verão',
    title: 'Looks de verão: leveza que acompanha o dia inteiro',
    excerpt:
      'Tecidos que respiram, listras que nunca saem de cena e combinações fáceis para passar do calor da tarde ao jantar sem trocar de roupa.',
    seoTitle: 'Looks de verão femininos: ideias para o calor | Viva4You Curitiba',
    seoDescription:
      'Ideias de looks de verão femininos: tecidos leves, listras, conjuntos e combinações para o dia a dia e a noite. Viva4You, moda feminina em Curitiba.',
    date: '2026-11-19',
    readingTime: '4 min',
    image: summerImg,
    imageAlt: 'Conjunto de camisa e calça listradas em azul-marinho e branco, à beira-mar',
    whatsappMessage:
      'Olá! Li o artigo sobre looks de verão no site da Viva4You e gostaria de ajuda para montar uma produção.',
    body: [
      {
        type: 'p',
        text: 'O verão pede roupas que acompanhem o ritmo do dia: o trabalho de manhã, o almoço com as amigas, um fim de tarde ao ar livre. O segredo não está em ter muitas peças, mas em escolher as que se adaptam a cada um desses momentos.',
      },
      { type: 'h2', text: 'Comece pelo tecido' },
      {
        type: 'p',
        text: 'Antes da cor ou do modelo, vale olhar o toque. Tecidos de fibras naturais e tramas mais abertas deixam o corpo respirar e caem melhor no calor. Peças levemente amplas também ajudam: o ar circula e o visual fica despretensioso, sem perder a elegância.',
      },
      { type: 'h2', text: 'Listras: o clássico que sempre funciona' },
      {
        type: 'p',
        text: 'Azul-marinho e branco é uma combinação que atravessa as estações e ganha força no verão. Uma camisa listrada aberta sobre uma regata branca já resolve o look. Se a peça vier em conjunto, com camisa e calça do mesmo tecido, use as duas juntas para um visual alongado ou separe e multiplique as possibilidades.',
      },
      { type: 'quote', text: 'Um bom conjunto vale por três looks: junto, só a parte de cima ou só a de baixo.' },
      { type: 'h2', text: 'Do dia para a noite, sem trocar tudo' },
      {
        type: 'list',
        items: [
          'Troque a rasteira por uma sandália de salto bloco.',
          'Acrescente acessórios dourados: argola, bracelete ou anel largo.',
          'Coloque uma camisa por cima da regata e dobre as mangas.',
          'Prenda o cabelo em um coque baixo para um ar mais arrumado.',
        ],
      },
      { type: 'h2', text: 'Cores que conversam com o calor' },
      {
        type: 'p',
        text: 'Off-white, areia e bege formam uma base fácil de combinar e refletem a luz, o que deixa a produção mais fresca. O azul-marinho entra como ponto de contraste. Com essas quatro cores, quase tudo combina com quase tudo, e montar o look de manhã fica mais rápido.',
      },
      {
        type: 'p',
        text: 'Quer ajuda para montar as suas produções de verão? Nossas consultoras indicam combinações a partir do que você já tem e das novidades da loja.',
      },
    ],
  },
  {
    slug: 'looks-natal-e-ano-novo',
    category: 'Celebrações',
    title: 'Natal e Ano Novo: como escolher o look de cada celebração',
    excerpt:
      'Ceia em família, confraternização da empresa, virada com amigos. Cada encontro tem um clima, e o look certo é aquele em que você se sente você mesma.',
    seoTitle: 'Looks para Natal e Ano Novo: ideias femininas | Viva4You Curitiba',
    seoDescription:
      'Como escolher looks para Natal, Réveillon e confraternizações de fim de ano. Dicas de cores, tecidos e acessórios da Viva4You, moda feminina em Curitiba.',
    date: '2026-11-19',
    readingTime: '5 min',
    image: celebrationImg,
    imageAlt: 'Blusa off-white com decote em V, mangas caneladas e lenço estampado amarrado na cintura',
    whatsappMessage:
      'Olá! Li o artigo sobre looks para Natal e Ano Novo no site da Viva4You e gostaria de ajuda para escolher minha produção.',
    body: [
      {
        type: 'p',
        text: 'Dezembro costuma ter mais compromissos do que o resto do ano: confraternizações, amigo secreto, ceia, a virada. Planejar os looks com antecedência evita a pressa da última hora e ajuda a aproveitar melhor cada peça.',
      },
      { type: 'h2', text: 'Confraternizações: elegância sem exagero' },
      {
        type: 'p',
        text: 'Na festa da empresa, o equilíbrio é o melhor caminho. Uma calça de alfaiataria com blusa de tecido nobre, ou um conjunto em tom claro, transmite cuidado sem parecer formal demais. Um acessório marcante, como um brinco dourado ou um lenço amarrado na cintura, faz a transição do expediente para a comemoração.',
      },
      { type: 'h2', text: 'Natal: aconchego com um toque especial' },
      {
        type: 'p',
        text: 'A ceia de Natal pede conforto, porque é uma noite longa, à mesa, entre pessoas queridas. Tons quentes como vinho, caramelo e off-white combinam com o clima da data. Peças com textura, como malhas caneladas ou detalhes em couro, trazem sofisticação sem perder a leveza.',
      },
      { type: 'quote', text: 'O look de Natal ideal é aquele que continua bonito depois do jantar e do abraço apertado.' },
      { type: 'h2', text: 'Réveillon: o branco e além dele' },
      {
        type: 'p',
        text: 'O branco segue como tradição da virada, mas não precisa ser óbvio. Off-white, creme e marfim deixam a produção mais interessante, especialmente quando combinados entre si, em texturas diferentes. Quem prefere fugir do branco pode apostar em tons claros e metálicos discretos.',
      },
      {
        type: 'list',
        items: [
          'Combine tons de branco diferentes em uma mesma produção para dar profundidade.',
          'Aposte em dourado nos acessórios: ilumina sem pesar.',
          'Se a virada for na praia, prefira tecidos leves e sandálias rasteiras.',
          'Para festas em salão, um conjunto de alfaiataria clara é elegante e confortável.',
        ],
      },
      { type: 'h2', text: 'Uma peça, várias celebrações' },
      {
        type: 'p',
        text: 'Uma boa calça de alfaiataria clara pode ir à confraternização com blusa de seda, à ceia com uma malha e à virada com um top delicado. Pensar em peças versáteis faz o guarda-roupa de fim de ano render mais.',
      },
      {
        type: 'p',
        text: 'Na Viva4You, nossas consultoras ajudam você a montar os looks de cada celebração. É só chamar no WhatsApp.',
      },
    ],
  },
  {
    slug: 'textura-encontra-alfaiataria-suede',
    category: 'Tendência',
    title: 'Quando a textura encontra a alfaiataria: o suede no seu guarda-roupa',
    excerpt:
      'O toque aveludado do suede deixa a alfaiataria mais suave e contemporânea. Veja como usar a textura no dia a dia e em produções especiais.',
    seoTitle: 'Suede e alfaiataria: como usar no look feminino | Viva4You Curitiba',
    seoDescription:
      'Saiba como combinar suede com alfaiataria em looks femininos: blazer, calça e saia em suede para o dia a dia e ocasiões especiais. Viva4You, Curitiba.',
    date: '2026-11-19',
    readingTime: '4 min',
    image: suedeImg,
    imageAlt: 'Mulher com blazer bege, blusa estampada geométrica e calça em tom areia',
    whatsappMessage:
      'Olá! Li o artigo sobre suede e alfaiataria no site da Viva4You e gostaria de conhecer as peças em suede.',
    body: [
      {
        type: 'p',
        text: 'A alfaiataria sempre foi sinônimo de estrutura: cortes precisos, linhas retas, caimento impecável. O suede traz para esse universo algo que faltava, o toque. Com acabamento aveludado e aspecto macio, ele deixa as peças clássicas mais acolhedoras e com cara de agora.',
      },
      { type: 'h2', text: 'Por que o suede funciona tão bem' },
      {
        type: 'p',
        text: 'O suede absorve a luz em vez de refleti-la. Isso dá às cores uma profundidade especial, principalmente aos tons terrosos como areia, caramelo, bege e taupe. Em um blazer ou em uma calça de corte reto, a textura transforma uma peça básica em protagonista, sem precisar de estampa ou brilho.',
      },
      { type: 'quote', text: 'A estrutura vem da alfaiataria. A personalidade vem da textura.' },
      { type: 'h2', text: 'Como usar no dia a dia' },
      {
        type: 'list',
        items: [
          'Blazer de suede sobre camiseta branca e calça reta: o clássico que nunca erra.',
          'Calça em suede com camisa de algodão ou seda, para um contraste de texturas.',
          'Saia em suede com malha fina, para os dias mais frescos.',
          'Tom sobre tom: suede bege com peças em areia e off-white cria um visual alongado e sofisticado.',
        ],
      },
      { type: 'h2', text: 'Estampa e suede: um encontro interessante' },
      {
        type: 'p',
        text: 'Uma blusa estampada por baixo de um blazer liso em suede equilibra a produção: a estampa traz movimento e a textura do blazer acalma o conjunto. Estampas gráficas em preto e branco ficam ainda mais bonitas ao lado dos tons terrosos.' },
      { type: 'h2', text: 'Suede e couro: o contraste das texturas' },
      {
        type: 'p',
        text: 'Outra combinação que funciona muito bem é suede com couro, especialmente no total black. O fosco aveludado do suede e o leve brilho do couro criam profundidade em uma produção de uma cor só. Uma saia midi em suede com recorte de couro, por exemplo, vai do trabalho ao jantar sem esforço.',
      },
      { type: 'h2', text: 'Cuidados com a peça' },
      {
        type: 'p',
        text: 'Siga sempre as instruções da etiqueta. De modo geral, guardar em cabide, longe da umidade, e escovar suavemente no sentido das fibras ajuda a manter o aspecto aveludado por mais tempo.',
      },
      {
        type: 'p',
        text: 'Quer conhecer as peças em suede da Viva4You? Fale com uma consultora pelo WhatsApp ou venha experimentar na loja do Água Verde.',
      },
    ],
  },
];

export const findPost = (slug) => posts.find((p) => p.slug === slug);
