import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { brand, legal, seo } from './site.js';
import { whatsappLink } from './links.js';
import { openCookiePreferences } from './consent.js';
import { IS_SINGLE } from './router.js';

const fmt = (d) => new Date(d + 'T12:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });

function H({ children }) {
  return <h2 className="mt-12 text-[20px] font-bold leading-tight tracking-[-0.01em] text-navy sm:text-[22px]">{children}</h2>;
}
function P({ children }) {
  return <p className="mt-4 text-[16px] leading-[1.8] text-graphite/85">{children}</p>;
}
function L({ items }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((it) => (
        <li key={it} className="flex gap-3 text-[16px] leading-relaxed text-graphite/85">
          <span className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-brandred" aria-hidden="true" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPage() {
  const a = brand.address;
  const controller = [legal.companyName || brand.name, legal.cnpj && `CNPJ ${legal.cnpj}`].filter(Boolean).join(', ');

  useEffect(() => {
    const prev = document.title;
    document.title = 'Política de Privacidade e Cookies | Viva4You';
    const desc = document.querySelector('meta[name="description"]');
    const prevDesc = desc?.getAttribute('content');
    desc?.setAttribute('content', 'Como a Viva4You trata dados pessoais e utiliza cookies em seu site, conforme a LGPD.');
    if (seo.canonicalUrl) {
      let c = document.querySelector('link[rel="canonical"]');
      if (!c) { c = document.createElement('link'); c.rel = 'canonical'; document.head.appendChild(c); }
      c.href = `${seo.canonicalUrl.replace(/\/$/, '')}/politica-de-privacidade`;
    }
    window.scrollTo(0, 0);
    return () => { document.title = prev; if (prevDesc) desc?.setAttribute('content', prevDesc); };
  }, []);

  return (
    <article className="bg-offwhite pt-[68px] lg:pt-[76px]" aria-labelledby="privacy-title">
      <div className="mx-auto max-w-[760px] px-5 py-14 sm:px-8 lg:py-20">
        <a href={IS_SINGLE ? '#topo' : '/'} className="eyebrow inline-flex items-center gap-2 text-navy/60 hover:text-navy">
          <ArrowLeft size={14} strokeWidth={1.5} aria-hidden="true" /> Voltar ao site
        </a>
        <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-brandred">LGPD · Lei nº 13.709/2018</p>
        <h1 id="privacy-title" className="display-soft mt-4 text-[34px] text-navy sm:text-[44px]">Política de Privacidade e Cookies</h1>
        <p className="mt-5 text-[13px] uppercase tracking-[0.16em] text-navy/50">Última atualização: {fmt(legal.privacyUpdatedAt)}</p>

        <P>
          Esta política explica como a {brand.name} trata os dados pessoais de quem visita este site, quais cookies utilizamos e
          como você pode exercer seus direitos, de acordo com a Lei Geral de Proteção de Dados (LGPD).
        </P>

        <H>1. Quem é a responsável pelos seus dados</H>
        <P>
          {controller}, com loja na {a.street}, {a.district}, {a.city} — {a.state}, CEP {a.zip}. Atendimento pelo WhatsApp{' '}
          {brand.whatsappDisplay}{legal.email ? <> e pelo e-mail {legal.email}</> : null}.
        </P>

        <H>2. Quais dados podemos coletar</H>
        <L items={[
          'Dados de navegação: páginas visitadas, cliques, tempo de permanência, tipo de dispositivo e navegador, cidade aproximada e origem da visita. Esses dados são coletados por cookies e ferramentas de medição, apenas com a sua autorização.',
          'Dados que você nos envia ao iniciar uma conversa pelo WhatsApp, como nome, número de telefone e o conteúdo da mensagem.',
        ]} />
        <P>Este site não possui formulários de cadastro nem área de compra, e não solicita dados sensíveis.</P>

        <H>3. Para que usamos os dados</H>
        <L items={[
          'Responder ao seu contato e prestar atendimento sobre peças, condições e visitas à loja.',
          'Incluir você no grupo VIP do Clube Viva4You, quando você solicitar.',
          'Entender como o site é usado para melhorar conteúdo, navegação e desempenho.',
          'Medir e aprimorar campanhas de divulgação, quando você autorizar os cookies de marketing.',
        ]} />

        <H>4. Bases legais</H>
        <P>
          Tratamos dados com base no seu consentimento (cookies de análise e de marketing e entrada no grupo VIP), na execução de
          procedimentos que você solicitou (atendimento) e no legítimo interesse da {brand.name} em manter o site seguro e funcionando,
          sempre respeitando os seus direitos.
        </P>

        <H>5. Cookies</H>
        <P>Cookies são pequenos arquivos guardados no seu navegador. Utilizamos três categorias:</P>
        <div className="mt-6 overflow-hidden ring-1 ring-navy/10">
          {[
            ['Necessários', 'Garantem o funcionamento do site e guardam a sua escolha sobre cookies. Não podem ser desativados.', 'Sempre ativos'],
            ['Análise', 'Medem visitas e interações de forma agregada, por meio do Google Tag Manager e do Google Analytics.', 'Com autorização'],
            ['Marketing', 'Permitem medir campanhas e exibir anúncios mais relevantes em plataformas como Google e Meta.', 'Com autorização'],
          ].map(([t, d, s], i) => (
            <div key={t} className={`grid gap-2 bg-white p-5 sm:grid-cols-[140px,1fr,130px] sm:gap-6 ${i ? 'border-t border-navy/10' : ''}`}>
              <p className="text-[14px] font-bold text-navy">{t}</p>
              <p className="text-[14px] leading-relaxed text-graphite/80">{d}</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy/55 sm:text-right">{s}</p>
            </div>
          ))}
        </div>
        <P>
          Os cookies de análise e de marketing só são ativados depois que você autoriza no aviso de cookies. Você pode mudar sua
          escolha a qualquer momento:
        </P>
        <button type="button" onClick={openCookiePreferences} className="btn btn-dark mt-5">Preferências de cookies</button>
        <P>Também é possível apagar ou bloquear cookies nas configurações do seu navegador.</P>

        <H>6. Compartilhamento</H>
        <P>
          Não vendemos dados pessoais. Os dados podem ser tratados por fornecedores que viabilizam o site e o atendimento, como Google
          (medição e anúncios), Meta (WhatsApp, Instagram e anúncios) e o serviço de hospedagem do site, cada um com suas próprias
          políticas de privacidade. Alguns desses fornecedores podem armazenar dados fora do Brasil, com as garantias previstas na LGPD.
          Dados também podem ser compartilhados quando exigido por lei ou autoridade competente.
        </P>

        <H>7. Por quanto tempo guardamos</H>
        <P>
          Mantemos os dados apenas pelo tempo necessário para as finalidades descritas ou para cumprir obrigações legais. Dados de
          navegação seguem os prazos de retenção configurados nas ferramentas de medição. Sua escolha sobre cookies fica salva no seu
          navegador até que você a altere ou apague.
        </P>

        <H>8. Seus direitos</H>
        <P>Pela LGPD, você pode, a qualquer momento:</P>
        <L items={[
          'Confirmar se tratamos seus dados e ter acesso a eles.',
          'Corrigir dados incompletos, inexatos ou desatualizados.',
          'Pedir anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a lei.',
          'Revogar o consentimento e pedir a eliminação dos dados tratados com base nele.',
          'Saber com quem compartilhamos seus dados e solicitar a portabilidade.',
          'Sair do grupo VIP do Clube Viva4You quando quiser.',
        ]} />
        <P>
          Para exercer seus direitos, fale com a gente pelo{' '}
          <a href={whatsappLink('Olá! Gostaria de falar sobre meus dados pessoais (LGPD).')} target="_blank" rel="noopener noreferrer"
            className="font-semibold text-navy underline underline-offset-2">WhatsApp {brand.whatsappDisplay}</a>
          {legal.email ? <> ou pelo e-mail {legal.email}</> : null}. Você também pode apresentar reclamação à Autoridade Nacional de
          Proteção de Dados (ANPD).
        </P>

        <H>9. Segurança</H>
        <P>
          Adotamos medidas técnicas e administrativas razoáveis para proteger os dados contra acessos não autorizados, perdas ou
          alterações. Nenhum sistema é totalmente imune a riscos, mas trabalhamos para reduzi-los.
        </P>

        <H>10. Alterações nesta política</H>
        <P>
          Esta política pode ser atualizada para refletir mudanças no site ou na legislação. A data da última atualização fica sempre
          indicada no início da página.
        </P>
      </div>
    </article>
  );
}
