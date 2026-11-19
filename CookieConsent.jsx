import { useEffect, useState } from 'react';
import { Cookie, X } from 'lucide-react';
import { readConsent, saveConsent } from './consent.js';
import { privacyHref } from './router.js';

function Toggle({ id, checked, onChange, disabled, label, desc }) {
  return (
    <div className="flex items-start justify-between gap-6 border-t border-navy/10 py-4">
      <div>
        <label htmlFor={id} className="text-[14px] font-semibold text-navy">{label}</label>
        <p className="mt-1 text-[12.5px] leading-relaxed text-graphite/65">{desc}</p>
      </div>
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`relative mt-1 h-6 w-11 shrink-0 rounded-full transition-colors ${checked ? 'bg-navy' : 'bg-navy/20'} ${disabled ? 'opacity-50' : ''}`}
      >
        <span className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all ${checked ? 'left-6' : 'left-1'}`} />
        <span className="sr-only">{checked ? 'Ativado' : 'Desativado'}</span>
      </button>
    </div>
  );
}

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [custom, setCustom] = useState(false);
  const [prefs, setPrefs] = useState({ analytics: true, marketing: true });

  useEffect(() => {
    const saved = readConsent();
    if (!saved) {
      const t = setTimeout(() => setOpen(true), 900);
      return () => clearTimeout(t);
    }
    setPrefs({ analytics: saved.analytics, marketing: saved.marketing });
  }, []);

  useEffect(() => {
    const reopen = () => { setCustom(true); setOpen(true); };
    window.addEventListener('open-cookie-preferences', reopen);
    return () => window.removeEventListener('open-cookie-preferences', reopen);
  }, []);

  // Avisa o botão flutuante para subir enquanto o banner está aberto
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('cookie-banner', { detail: open }));
  }, [open]);

  const decide = (p) => { saveConsent(p); setPrefs(p); setOpen(false); setCustom(false); };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
      className="fixed inset-x-3 bottom-3 z-[55] mx-auto max-w-[560px] bg-offwhite p-6 text-graphite shadow-[0_24px_60px_-20px_rgba(20,42,67,.55)] ring-1 ring-navy/10 sm:inset-x-auto sm:bottom-6 sm:left-6 sm:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <p id="cookie-title" className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-navy">
          <Cookie size={16} strokeWidth={1.6} aria-hidden="true" /> Sua privacidade
        </p>
        {custom && (
          <button type="button" onClick={() => setCustom(false)} aria-label="Voltar" className="text-navy/60 hover:text-navy">
            <X size={18} strokeWidth={1.5} />
          </button>
        )}
      </div>

      <p className="mt-3 text-[13.5px] leading-relaxed text-graphite/80">
        Usamos cookies para o funcionamento do site, para entender como ele é usado e para melhorar nossas campanhas.
        Você escolhe o que autoriza. Saiba mais na{' '}
        <a href={privacyHref} className="font-semibold text-navy underline underline-offset-2">Política de Privacidade</a>.
      </p>

      {custom && (
        <div className="mt-4">
          <Toggle id="ck-necessary" label="Necessários" checked disabled onChange={() => {}}
            desc="Essenciais para o site funcionar e para guardar a sua escolha. Sempre ativos." />
          <Toggle id="ck-analytics" label="Análise" checked={prefs.analytics} onChange={(v) => setPrefs({ ...prefs, analytics: v })}
            desc="Medem visitas e cliques de forma agregada (ex.: Google Analytics) para melhorar o site." />
          <Toggle id="ck-marketing" label="Marketing" checked={prefs.marketing} onChange={(v) => setPrefs({ ...prefs, marketing: v })}
            desc="Ajudam a mostrar anúncios mais relevantes e a medir campanhas (ex.: Google e Meta)." />
        </div>
      )}

      <div className="mt-5 grid grid-cols-2 gap-2 sm:flex">
        {custom ? (
          <button type="button" onClick={() => decide(prefs)} className="btn btn-dark col-span-2 !py-3.5">Salvar preferências</button>
        ) : (
          <>
            <button type="button" onClick={() => decide({ analytics: true, marketing: true })} className="btn btn-dark col-span-2 !py-3.5">Aceitar todos</button>
            <button type="button" onClick={() => decide({ analytics: false, marketing: false })} className="btn btn-outline-dark !px-4 !py-3.5">Recusar</button>
            <button type="button" onClick={() => setCustom(true)} className="btn !px-4 !py-3.5 text-navy underline-offset-4 hover:underline">Personalizar</button>
          </>
        )}
      </div>
    </div>
  );
}
