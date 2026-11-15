# iOS Portfolio — V8 acceptance audit

**Date:** 15 November 2026. **Base:** V7 reference-inspired site. **Review type:** local source inspection, offline Chromium responsive/interaction regression, GitHub source verification and hosted deployment receipt if available. **Reference:** https://vexoo.framer.website/ .

## Completed in V8

1. Fixed misleading generic social-profile links: unconfigured profiles are visible but non-clickable; configurable destination URLs are set in `site-config.js`.
2. Fixed footer **Back to top**: scrolls the current page rather than navigating Home.
3. Removed the outdated May 2026 availability claim; displays configurable, noncommittal text.
4. Replaced hardcoded Pune and Asia/Kolkata labels with configurable location + user-local time.
5. Contact form now reports *demo-only* clearly when there is no endpoint, without sending data to an unverified email. Live submit supports configurable POST endpoint, 12-second timeout, failure handling, disabled submit while pending, and status messages.
6. Added focused keyboard skip link and focus styling, labelled quote controls and disabled end states, reduced-motion handling, more predictable portrait pointer movement.
7. Added route-specific HTML metadata, dynamic page title and description, OpenGraph / Twitter tags and canonical updates for public HTTPS page loads.
8. Added source regression tests, GitHub Actions workflow, reproducible static-host build, deterministic file manifest and preview-only robots noindex.
9. Fixed the standalone preview script load order bug uncovered by Playwright.

## Verified locally

- `node --check app.js`, `node --check site-config.js`.
- `node --test tests/source.test.mjs` — route / config / interactions source checks.
- Offline Chromium smoke tests (`qa_playwright.py`) cover ten route states at seven widths: 320, 375, 390, 768, 1024, 1640 and 1920 CSS pixels. All 70 structural combinations passed with no observed horizontal overflow or JavaScript exceptions; key navigation, quote controls, contact form validation and demo response, theme, footer scroll and 404 were exercised.
- At 1640px, the retained Home grid starts at x≈17, y≈207 and the About card measures ~389×310px, consistent with screenshot-measured V7 geometry. External images and font files are blocked in offline tests; visual parity is **not** certified.

## Outstanding acceptance gates

- **P0: Real enquiry delivery** requires the owner's verified email, approved endpoint, abuse protection and receipt testing. Do not label as completed.
- **P0: Ownership and lawful publication** requires replacing Soren Weil sample identity and checking third-party media/templates, client permissions and case-study truthfulness.
- **P1: Reference-perfect visuals and motion** require matched live-browser images/recordings for all pages and breakpoints, original font/asset permissions and actual Framer animation specification.
- **P1: Cross-browser and performance** require Safari/Firefox, touch devices, Lighthouse Core Web Vitals, network throttling and real/CDN image availability.
- **P1: Deployment/commit parity** requires a GitHub commit hash, build manifest, host upload confirmation and successful independent public-route probes.
- **P2: SEO production publishing** requires a permanent domain and verified owner content; preview deliberately has `noindex,nofollow`.

**Release verdict:** V8 is a more robust **tested demonstration**. It is *not* a completed production portfolio or 100% identical to Vexoo, and this audit must not be described as final production certification.
