# iOS Portfolio — V8 reference-inspired website

A responsive, editable HTML/CSS/JavaScript portfolio with a Vexoo-inspired full-width bento Home layout, About, Portfolio, Contact, five case studies, and a 404 view. This is an independently authored **demo**, not a licensed export of Vexoo's Framer source or a production-ready personal website.

## Quick start

- `npm run check` — JavaScript syntax checks.
- `npm test` — source and route regression tests (Node 22+, no dependencies).
- `npm run build` — regenerate `preview.html` from `app.js`, `site-config.js`, `styles.css` and `index.html` (already bundled for static hosting).
- `npm run dev` — start local HTTP server at port 4173 (use `dist` after building if testing deployment artifacts).

`preview.html` is a standalone HTML preview. `index.html` and `/about/`, `/portfolio/`, `/contact/`, each case-study directory, and `dist/404.html` support static hosts. Deploy this repository root (HTML/CSS/JS/static route directories). The standalone preview must be rebuilt after editing runtime files.

## How to personalize

Edit **`site-config.js`**. Keep `mode: 'demo'` until verified ownership information and a working form endpoint are configured. At minimum supply:

- Real name, role, verified email, phone and `phoneDial` (E.164 format).
- Actual resume and individual social profile links (not platform homepages).
- `locationLabel` and optional timezone. The default displays visitors' local time without pretending to know their city.
- `availabilityText`, truthful and kept current.
- A verified HTTPS `formEndpoint` that accepts JSON POSTs and has abuse protection, rate limits, validation, and appropriate storage/retention policies. Test its delivery before changing `mode` to production.

In demo mode, the contact form validates fields but **does not transmit personal information** to an unverified sample email. Social placeholders remain visible but are not clickable. The provided Soren Weil identity, phone, email, resume and testimonials are *sample data* for comparison with the original template; replace them before using publicly as your own work.

## What's implemented

- Full-width screenshot-measured Home bento, portfolio lists, project galleries, about and contact.
- Responsive breakpoints, dark/light toggle, hover/cursor movement, color reveal, text reveal, reduced motion.
- Client-side route navigation and static route entrypoints, title and description metadata, native fallback 404.
- Distinct error/success/preview form messages, configurable backend, focus indicators, skip link and safer external links.
- Source smoke tests, optional offline Playwright QA script, GitHub Actions CI.

## Known release limitations

Exact Framer motion parameters and all-page screenshot parity remain unverified. Media URLs may depend on third-party CDN availability and licensing. Some project narratives are adapted. The real contact backend and owner identity are not provided. Safari/Firefox/physical-device, real delivery and production Lighthouse validations are not yet complete. Because this is a demo and the domain is temporary, `robots.txt` and metadata deliberately use noindex. Change SEO policy **only after** a permanent domain, verified content and commercial rights are in place.

See `docs/RELEASE_AUDIT_V8.md` for evidence, changes and acceptance gaps. The original visual reference is [Vexoo](https://vexoo.framer.website/) by TE Studio; respect its template and media terms.
