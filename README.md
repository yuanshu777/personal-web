# Yuanshu Wang — Signal & Structure

Static, responsive Bento portfolio in the selected green research style. Math, statistics, and logic anchor the identity; AI and quant are peer directions. English is the default; the header offers English / Chinese switching across every page. A visitor's explicit language choice is saved only on their device. Switching language preserves the current page and both experiments' progress. The personal content is a first editorial draft based on the owner's ChatGPT memories, read at their request. Social profile addresses and full project write-ups are still pending.

## Structure

- `dist/index.html`: document shell and social-link placeholder dialog
- `dist/styles.css`: dark green / acid green design tokens and responsive layouts
- `dist/localization.js`: bilingual text and accessible-label translations; English-first language preference
- `dist/profile.js`: paired English / Chinese biography, strengths, ideas, philosophy, quant research, and project copy
- `dist/language.css`: language switcher and responsive refinements for bilingual copy
- `dist/app.js`: homepage, background, strengths, current thinking, philosophy, quantitative research, AI lab; hash-based navigation
- `dist/homepage.js` and `dist/homepage.css`: redesigned homepage, non-clickable foundation labels, and Quant / Philosophy / AI question cards with separate detail destinations; AI research page
- `dist/agent-market.js`: eight-round synthetic market game with value, trend, and blended agent policies, adjustable crowd composition, and a buy-and-hold comparison
- `preview.mjs`: local-only static preview server on `127.0.0.1:4173`
- `dist/philosophy.html`: independent bilingual, scroll-driven philosophical essay; nine acts preserve all twenty nodes of the owner's source record
- `dist/philosophy-content.js`: paired editorial English translation and Chinese adaptation; experiences, conditional inferences, and metaphysical hypotheses remain distinct
- `dist/philosophy-world.js`: locally vendored Three.js 0.180.0 spatial diagrams, updated on scroll rather than a continuous animation loop
- `dist/assets/philosophy-*.webp`: original AI-generated illustrative scenes, not personal photographs; `thought-evolution-original-zh.pdf` is the supplied unmodified record
- `dist/vendor/THREE-LICENSE.txt`: Three.js MIT license

Run `node preview.mjs` to preview. Static output is authored directly in `dist`; no installation or build is required. Hosted configuration is in `.openai/hosting.json`.

## Design and content

The design takes general Bento layout inspiration from https://github.com/Ladvace/astro-bento-portfolio. Implementation is original; no template code, photos, identity, or personal content has been copied. Typography uses Google Fonts (Space Grotesk / IBM Plex Mono) with system fallbacks.

Review the education and project wording with the owner before broadening the site's audience. The first draft avoids dates, performance metrics, private identifiers, recruiting details, and unverified social addresses. The market-agent idea is explicitly an open research direction, not a completed system. The AI lab's probability experiment is a demo created for this site, not a claim about the owner's previous work.

The probability demo remains in the AI Lab: prior variance 1, observation variance 0.64, each observation 0.65. At n observations, posterior mean is n × 0.65 / (0.64 + n), variance is 0.64 / (0.64 + n). Display is limited to 10 observations with a fixed vertical scale.

The homepage Agent Market is a rule-based toy, not a trained AI or a real market forecast. The player starts with 1,000 cash and rebalances before each round's random news, long-only and without leverage, paying 0.1% on traded value. Value and trend policies use the currently observable value gap and previous price move; Blend averages their allocations. The crowd combines value and trend traders (80% total) and noise traders (20%). Its aggregate orders and random news move the synthetic price. The benchmark holds from the opening price, without fees; edge is the difference in percentage points. The chart normalizes both series to 100. Game state is kept in memory across navigation and language changes; New game or a reload starts over. Full rules are available within the game.

The philosophy essay is reached from the homepage Philosophy card and its summary page, with an explicit Home link back to the portfolio. Ten illustrative scenes cover all nine acts: the original road and bedroom, followed by rules, outside, histories, local self, freedom, first-person experience, reflexivity, and open questions. Each later act begins with its scene and dissolves into the existing spatial diagram as the reader progresses. Images retain their full landscape composition, and the current and next act load as needed. It retains English default and the shared explicit language preference, plus a device-local reading-mode preference. Language/layout changes retain the current note. Native scrolling and chapter anchors work without scroll hijacking. Reduced-motion users receive static spatial poses; unavailable WebGL keeps the scene image and full essay accessible. Spatial models are conceptual illustrations, not empirical or probabilistic claims. The original PDF is included unchanged at the owner's request to present the complete philosophy.
