# Header Refactor Plan

## Scope
- Store: vasora.myshopify.com
- Area: header
- Objective: modularizzare `sections/header.liquid` e ridurre regressioni.

## Files target (fase 1)
- `sections/header.liquid`
- `snippets/header-topbar.liquid` (new)
- `snippets/header-brand.liquid` (new)
- `snippets/header-nav-desktop.liquid` (new)
- `snippets/header-actions.liquid` (new)
- `snippets/header-mobile-panel.liquid` (new)

## Acceptance criteria
- markup invariato lato UI/UX
- menu desktop + mega menu funzionanti
- menu mobile apri/chiudi funzionante
- sticky header invariato
- nessun errore Liquid

## Next step
1) estrarre topbar + brand in snippet
2) estrarre nav/actions/mobile in snippet
3) smoke test locale
