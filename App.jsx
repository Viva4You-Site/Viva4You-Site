import Header from './Header.jsx';
import Hero from './Hero.jsx';
import VivaFriday from './VivaFriday.jsx';
import Clube from './Clube.jsx';
import Colecao from './Colecao.jsx';
import Celebration from './Celebration.jsx';
import Essencia from './Essencia.jsx';
import Visite from './Visite.jsx';
import CtaFinal from './CtaFinal.jsx';
import Footer from './Footer.jsx';
import FloatingWhatsApp from './FloatingWhatsApp.jsx';
import BlogSection from './BlogSection.jsx';
import ArticlePage from './ArticlePage.jsx';
import PrivacyPage from './PrivacyPage.jsx';
import CookieConsent from './CookieConsent.jsx';
import { useEffect } from 'react';
import { isCampaignLive } from './campaign.js';
import { useRoute } from './router.js';

export default function App() {
  const campaignLive = isCampaignLive();
  const route = useRoute();
  const onHome = route.name === 'home';

  // Ao voltar de um artigo para uma seção (#colecao, #journal…), rola até ela.
  useEffect(() => {
    if (onHome && route.anchor) {
      requestAnimationFrame(() => document.getElementById(route.anchor)?.scrollIntoView());
    }
  }, [onHome, route.anchor]);

  if (!onHome) {
    return (
      <>
        <Header campaignLive={campaignLive} onHome={false} />
        <main id="conteudo">{route.name === 'privacy' ? <PrivacyPage /> : <ArticlePage slug={route.slug} />}</main>
        <Footer campaignLive={campaignLive} onHome={false} />
        <FloatingWhatsApp />
        <CookieConsent />
      </>
    );
  }

  return (
    <>
      <Header campaignLive={campaignLive} onHome />
      <main id="conteudo">
        <Hero />
        {campaignLive && <VivaFriday />}
        <Clube />
        <Colecao />
        <Celebration />
        <Essencia />
        <BlogSection />
        <Visite />
        <CtaFinal />
      </main>
      <Footer campaignLive={campaignLive} onHome />
      <FloatingWhatsApp />
      <CookieConsent />
    </>
  );
}
