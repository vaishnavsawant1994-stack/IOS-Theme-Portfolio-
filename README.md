# iOS Theme Portfolio — Vexoo-inspired recreation

Responsive, dependency-free HTML/CSS/JavaScript portfolio based on the Vexoo V7 implementation built in ChatGPT.

## Pages
Home, About, Portfolio, Contact, five case studies (Travel Easy, Gamma, Stream AI, Foome, Edbost), and a fallback page. Navigation is client-side.

## Run locally
Run `python -m http.server 4173` and open `http://localhost:4173`.

The canonical editable source is `index.html` + `styles.css` + `app.js`. `preview.html` is the self-contained single-file build for offline preview. `404.html`, `_redirects`, and `vercel.json` are included as static hosting fallbacks.

## Limitations
- This is an independently authored approximation, not the original Framer project.
- Some photographs and project media load from Framer public URLs, subject to availability and permitted usage.
- The Contact form validates fields and can open an email draft. Real form delivery requires a configured backend endpoint.
- Original animation values and pixel-perfect reproduction across every page are not fully verified.

## Attribution and reference
Original visual reference: https://vexoo.framer.website/
Vexoo is a Framer template by TE Studio. Respect the original template's terms and third-party media licenses before redistribution or commercial use.

## Detailed project documentation

The [**Project Handbook**](docs/PROJECT_HANDBOOK.md) explains this repository individually: product objectives, user journeys, code and technology, current implementation scope, risks, local development, quality gates, and the next engineering milestones. Statements about planned features do not imply release acceptance.
