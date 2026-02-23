# Vasora Architecture (variant)

Entry points:
- templates/*.vasora.json (index.vasora.json, product.vasora.json)
- sections/*.vasora.liquid (main-product.vasora, cart-drawer.vasora)
- snippets/*.vasora.liquid (product-card.vasora)
- assets/*.vasora.js, assets/vasora.css

Dependencies:
- No external libs. Uses Shopify storefront/cart endpoints (/cart.js, /cart/add.js).

Cart drawer flow:
- Trigger: any element with data-open-cart attribute in .vasora templates.
- Assets: cart.vasora.js updates #cart-items-vasora and manages focus trap.
- Accessibility: ESC close, focus trap, restore focus to trigger.

Snippet structure:
- product-card.vasora.liquid is the single unified product card used by .vasora templates.
- Sections reference only .vasora snippets and assets.

Notes:
- All .vasora files are isolated and do NOT reference legacy files. Original theme files remain untouched.
