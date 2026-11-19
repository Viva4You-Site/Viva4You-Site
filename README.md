# Viva4You — Landing Page (React + Tailwind + Lucide)

> Versão **sem pastas**: todos os arquivos ficam na raiz do repositório (facilita o upload pelo site do GitHub).

## Rodar e publicar
```
npm install
npm run dev            # desenvolvimento
npm run build          # produção → pasta dist/ (Netlify, Vercel, Hostinger…)
npm run build:preview  # HTML único para apresentação → dist-preview/
```

## Onde editar
Tudo fica em **`site.js`**:
- **Campanha** (`campaign`): `active` liga/desliga; `hideAfter` remove a campanha sozinha
  depois da data (nada de promoção vencida); `conditionsConfirmed` — mude para `true`
  quando a marca confirmar os descontos (remove a nota de "condições previstas").
  Cada etapa recebe o selo "Acontecendo agora" no dia e "Encerrado" depois de `endsAt`.
- **Mensagens de WhatsApp** (`messages`, `campaign.whatsappMessage`, categorias da coleção).
- **Imagens** (`images`, `campaign.images`): coloque as fotos reais em `public/images/`
  e informe o caminho (ex.: `'/images/hero.webp'`). Enquanto estiver `null`, aparece um
  quadro editorial sinalizando a substituição.
- **SEO** (`seo.canonicalUrl`) e **mensuração** (`analytics.gtmId` / `ga4Id`).

## Fotos
Embutidas no código em `images.js` (data URI .webp) — não há arquivos de imagem para subir, exceto `og-viva4you.jpg` (prévia de compartilhamento, que precisa ser uma URL). Já aplicadas: hero, Viva Friday (versão P&B), 3 categorias da coleção, Celebration e Nossa essência. Para trocar, gere o base64 da nova foto (.webp) e substitua a string em `images.js`.

### Tamanhos de referência
| Chave | Uso | Formato sugerido |
|---|---|---|
| images.hero | Hero principal | 1600×2000, .webp |
| images.heroDetail | Recorte do hero | 800×1000 |
| campaign.images.main | Viva Friday (P&B) | 1600×2000 |
| images.collection[0..2] | 3 categorias | 1200×1600 |
| images.celebration | Looks de festa | 1600×2000 |
| images.essence | Nossa essência | 1200×1500 |
| images.finalCta | Fundo do CTA final (opcional) | 2000×1200 |
| images.ogImage | Compartilhamento | 1200×630 .jpg |


Cada foto com até ~250 KB.

## Antes de publicar
- [ ] Trocar `SEUDOMINIO` em `robots.txt`, `sitemap.xml` e nas tags comentadas de `index.html` (canonical, og:url, og:image).
- [ ] Preencher `seo.canonicalUrl`.
- [ ] Confirmar descontos com a marca → `conditionsConfirmed: true`.
- [x] GTM instalado (GTM-KJMZGV82).
- [ ] Preencher razão social/CNPJ em `legal` e revisar a Política de Privacidade com o jurídico.
- [ ] Ativar `brand.showMapEmbed: true` se quiser o mapa do Google incorporado.
- [ ] Horário de funcionamento: só preencher `brand.openingHours` (e o schema) após confirmação.

## GTM, cookies e LGPD
- **GTM-KJMZGV82** instalado no `index.html` (head + noscript no body).
- **Consent Mode v2**: análise e marketing começam negados; o banner atualiza conforme a escolha
  (`analytics_storage`, `ad_storage`, `ad_user_data`, `ad_personalization`).
- Evento `consent_update` no dataLayer após a escolha (variáveis `consent_analytics` e `consent_marketing`).
- No GTM: GA4 e tags de anúncio devem respeitar o consentimento (Configurações avançadas → Configurações de consentimento).
- Política em `/politica-de-privacidade` (`PrivacyPage.jsx`). Preencha razão social, CNPJ e e-mail em `legal` (site.js).
- Rodapé: links "Política de Privacidade" e "Preferências de cookies".

## Eventos de mensuração (dataLayer)
`click_whatsapp` · `click_clube` · `click_viva_friday` · `click_localizacao` · `click_instagram` · `click_colecao`
Parâmetros: `section` (onde foi o clique) e `label`. No GTM, crie acionadores "Evento personalizado" com esses nomes.

## Blog (Journal Viva4You)
- Artigos em `blog.js` (texto, imagem, SEO e mensagem de WhatsApp de cada um).
- URLs: `/blog/looks-de-verao`, `/blog/looks-natal-e-ano-novo`, `/blog/textura-encontra-alfaiataria-suede`.
- Cada artigo atualiza title, description, canonical e dados estruturados (BlogPosting).
- Hospedagem: `_redirects` (Netlify) e `.htaccess` (Hostinger/Apache) já fazem as URLs do blog abrirem o site.
- Novo artigo: copie um objeto em `blog.js` e acrescente a URL no `sitemap.xml`.
- Evento de mensuração extra: `click_blog`.
