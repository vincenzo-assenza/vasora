# Vasora Theme Rebuild — Status

Last update: 2026-02-23 17:02 (Europe/Rome)
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

## Audit rapido completato (17:02)
- Branch verificato: `main`.
- Stato git: presenti modifiche pregresse (deletions/additions legacy già in staging) + nuovo `_dev/status.md`.
- Tema attuale con doppia pista `standard` + `*.vasora*` (sezioni/template/snippet duplicati): forte rischio incoerenza editor e manutenzione.
- File operativi moderni presenti in `assets/` (`critical.css`, `cart*.js`, `utils.js`) ma coesistono con artefatti legacy in `_dev/` e backup.
- `theme-check` non eseguibile in questo host (mancano `theme-check` locale e Docker): **blocker tecnico di quality gate automatico**.

## Backlog prioritizzato (prossime 2–3 ore)
1. **Decisione architetturale (PM gate)**: scegliere una sola convenzione (baseline `*.vasora*` + fallback minimi, oppure baseline standard) e congelare naming.
2. **Cleanup tranche A (safe)**: isolare backup in `_dev/backup/`, rimuovere riferimenti runtime a file legacy non usati, mantenendo build/theme preview stabile.
3. **Editor UX pass**: uniformare schema/settings delle sezioni core (header, hero, product, collection, footer) con label chiare e default sensati.
4. **Accessibilità base**: checklist rapida su focus visibile, heading order, alt/caption, landmark semantics.
5. **Quality tooling**: abilitare execution `theme-check` (install locale o container runtime disponibile).

## Assegnazione immediata
### Designer (ora corrente)
1. Mappa conflitti UX tra sezioni duplicate (`hero-*`, `main-*`, `product-card*`).
2. Proposta naming canonico per sezioni/snippet e etichette editor.
3. Draft checklist AA per componenti core.

### Coder (ora corrente)
1. Inventario riferimenti a file `*.vasora*` vs standard in `templates/*.json` e `sections/*`.
2. Rimozione/isolamento dead artifacts non referenziati (step atomici).
3. Preparazione comando quality gate replicabile (`theme-check`) per CI/local.

## Rischi / Blocker
- Possibile debito tecnico nascosto nei componenti legacy e nei backup locali.
- Rischio regressioni editor UX se il cleanup non è atomico.
- **Blocker attivo:** impossibile lanciare `theme-check` su host attuale (assenza Docker e binario locale).

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
