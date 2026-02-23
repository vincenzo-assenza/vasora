# Vasora Theme Rebuild — Status

Last update: 2026-02-23 16:59 (Europe/Rome)
Owner: vasora-orchestrator
Branch: `main`

## Mission
Ripulire e ricostruire il tema Shopify locale (`/var/www/vasora-skeleton`) con baseline solida, editor-friendly UX, accessibilità AA e performance, in conformità ai requisiti Shopify Theme Store.

## Stato Oggi (kickoff)
- Inizio operativo confermato.
- Single source of truth impostata su questo file.
- Fase corrente: **Cleanup foundation**.

## Obiettivo del blocco corrente (17:00–18:00)
1. Inventario rapido di codice/asset/section legacy da rimuovere o archiviare.
2. Definizione backlog prioritizzato (designer/coder) con task da 30–90 minuti.
3. Prima tranche di cleanup safe con repo in stato build-ok.

## Top 3 task — Designer
1. Audit UX Theme Editor: settings ridondanti/confusi e naming non coerente.
2. Definizione schema sezioni riusabili con default sensati (hero, feature grid, FAQ, footer).
3. Checklist accessibilità UI (focus state, contrasti, semantic labels).

## Top 3 task — Coder
1. Mappare dead code (src/components legacy, CSS inutilizzato, asset duplicati).
2. Pulizia incrementale con commit piccoli e rollback-safe.
3. Stabilire baseline tecnica minima (struttura cartelle, snippet condivisi, convenzioni naming).

## Rischi / Blocker
- Possibile debito tecnico nascosto nei componenti legacy e nei backup locali.
- Rischio regressioni editor UX se il cleanup non è atomico.

## Definition of Done (oggi)
- Backlog condiviso e ordinato per priorità.
- Cleanup iniziale completato senza rompere build/theme check.
- Primo set di componenti/base pronto per rebuild (con naming e struttura coerenti).

## Cadence
- Check-in orari: ad ogni ora piena fino alle 21:00.
- Domande standard:
  1) Cosa hai chiuso nell’ultima ora?
  2) Cosa fai nella prossima ora?
  3) Hai blocker? Serve decisione?
