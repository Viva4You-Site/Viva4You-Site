import { campaign } from './site.js';

/** A campanha aparece só se estiver ativa e dentro do prazo. */
export function isCampaignLive(now = new Date()) {
  if (!campaign.active) return false;
  if (campaign.hideAfter && now >= new Date(campaign.hideAfter)) return false;
  return true;
}

/** Retorna as etapas com status: 'upcoming' | 'today' | 'ended'. */
export function phasesWithStatus(now = new Date()) {
  return campaign.phases.map((p) => {
    const end = p.endsAt ? new Date(p.endsAt) : null;
    const ended = end && now >= end;
    const isToday = end && !ended && end - now <= 1000 * 60 * 60 * 24;
    return { ...p, status: ended ? 'ended' : isToday ? 'today' : 'upcoming' };
  });
}
