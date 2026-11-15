# iOS Theme Portfolio — Complete Project Guide

**Repository:** `vaishnavsawant1994-stack/IOS-Theme-Portfolio-` · **Review:** 15 November 2026  
**Evidence level:** current README, repository layout and manifest where available; no fresh deployed-end-to-end certification.

## Product identity and problem
Responsive independently authored Vexoo-reference portfolio UI reconstruction with multiple case studies and client-side navigation.

**Primary users:** Portfolio developers, designers and prospective template buyers.

## Functional areas and intended user journeys
1. Home, About, Portfolio and Contact views.
2. Five example case-study pages.
3. Static interactive navigation and responsive styling.
4. Standalone offline preview and static hosting fallbacks.

Features above describe documented capability areas, source/UI surfaces or product intents. A listed module is not necessarily a functioning integrated feature.

## System design and codebase
Dependency-free HTML/CSS/JavaScript. Editable source is `index.html`, `styles.css`, `app.js`; `preview.html`, `404.html`, `_redirects` and `vercel.json` support preview/deployment.

## Implementation status
Reference-inspired implementation, not verified 100% identical to the original. Interactive transitions and responsiveness need screenshot-based and browser-based comparison.

**Do not conflate:** planned scope, code existence, passing old CI, live production deployment and independent release acceptance. They require separate evidence.

## Development and testing
`npm run dev` uses `python -m http.server 4173`; `npm run check` syntax-checks JavaScript. Compare 375/390px mobile, tablets and large desktop viewports.

Before using any environment: examine .env examples and source code, use test accounts, protect secrets, and inspect the target database prior to migrations/seed commands.

## Data security, privacy and operations
- Respect third-party branding, imagery and template rights.
- Use correct source attribution and original assets.
- Verify contact links/forms separately from appearance.
Additionally validate backup/restore, audit logs, staging isolation, access reviews, monitoring and release rollback before production use.

## Priority development plan
1. Record side-by-side screenshot baseline at each viewport.
2. Audit hero, typography, cursor, effects and animations.
3. Verify keyboard navigation, reduced motion and performance.
4. Document real deployment preview and acceptance evidence.

## Where to read more
- [`README.md`](../README.md)
- [`app.js`](../app.js)
- [`styles.css`](../styles.css)
- [`preview.html`](../preview.html)

This guide should be revised after verified code, architecture, data schema, deployment or product-scope changes. The underlying source and gated engineering documents remain authoritative.
