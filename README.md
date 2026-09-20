# Yuanshu Wang — Paths of Thought

Static, responsive Bento portfolio in the selected green research style. Math, statistics, and logic anchor the identity; AI and quant are peer directions. English is the default; the header offers English / Chinese switching across every page. A visitor's explicit language choice is saved only on their device. Switching language preserves the current page and both experiments' progress. The personal content is a first editorial draft based on the owner's ChatGPT memories, read at their request. LinkedIn, GitHub, language-specific email addresses, and a copyable WeChat ID are connected. Full project write-ups are still pending.

## Structure

- `dist/index.html`: document shell and language navigation
- `dist/styles.css`: dark green / acid green design tokens and responsive layouts
- `dist/localization.js`: bilingual text and accessible-label translations; English-first language preference
- `dist/profile.js`: paired English / Chinese biography, strengths, ideas, philosophy, quant research, and project copy
- `dist/language.css`: language switcher and responsive refinements for bilingual copy
- `dist/app.js`: homepage, background, strengths, current thinking, philosophy, quantitative research, AI lab; hash-based navigation
- `dist/homepage.js` and `dist/homepage.css`: redesigned homepage, non-clickable foundation labels, and Quant / Philosophy / AI question cards with separate detail destinations; AI research page
- `dist/market-engine.js`: deterministic market simulation and causal online expert learner
- `dist/contact.js`: owner-supplied social links, bilingual email, and WeChat copying
- `dist/agent-market.js`: interactive online-learning lab with playback, deterministic replay, expert weights, and decision history
- `dist/site-core.css` and `dist/site-core.js`: combined homepage assets that reduce first-visit request overhead
- `scripts/build-home-bundles.mjs`: regenerates the combined homepage assets after editing their source CSS or JavaScript
- `preview.mjs`: local-only static preview server on `127.0.0.1:4173`
- `dist/philosophy.html`: independent bilingual, scroll-driven philosophical essay; nine acts preserve all twenty nodes of the owner's source record
- `dist/philosophy-content.js`: paired editorial English translation and Chinese adaptation; experiences, conditional inferences, and metaphysical hypotheses remain distinct
- `dist/philosophy-world.js`: locally vendored Three.js 0.180.0 spatial diagrams, updated on scroll rather than a continuous animation loop
- `dist/assets/philosophy-*.webp`: original AI-generated illustrative scenes, not personal photographs; `thought-evolution-original-zh.pdf` is the supplied unmodified record
- `dist/vendor/THREE-LICENSE.txt`: Three.js MIT license

After changing the homepage CSS or JavaScript, run `node scripts/build-home-bundles.mjs`. Run `node preview.mjs` to preview. The site otherwise remains static and has no package installation step. Hosted configuration is in `.openai/hosting.json`.

## Design and content

The design takes general Bento layout inspiration from https://github.com/Ladvace/astro-bento-portfolio. Implementation is original; no template code, photos, identity, or personal content has been copied. Typography uses Google Fonts (Space Grotesk / IBM Plex Mono) with system fallbacks.

Review the education and project wording with the owner before broadening the site's audience. The first draft avoids unverified performance claims and recruiting details. Contact details were supplied by the owner for inclusion. The market-agent idea is explicitly an open research direction, not a completed system. The AI lab's probability experiment is a demo created for this site, not a claim about the owner's previous work.

The probability demo remains in the AI Lab: prior variance 1, observation variance 0.64, each observation 0.65. At n observations, posterior mean is n × 0.65 / (0.64 + n), variance is 0.64 / (0.64 + n). Display is limited to 10 observations with a fixed vertical scale.

The homepage learning lab runs exponential expert weighting over trend, mean-reversion, and cash experts. Decisions use past prices only. Each expert's net log return updates a decaying score; softmax and a 5% exploration floor produce the next weights. A fixed one-third blend and buy-and-hold use the same simulated price path. All accounts start at 1,000, pay 0.1% on traded value, and hold long-only positions. Expert exposure is capped at 85%. Returns are marked to market before final liquidation fees. Regime changes occur after allocation. Replay preserves the seed, while New market changes it. This is an actual online-learning algorithm over synthetic prices, not an LLM or an investment backtest. Navigation, language changes, and backgrounding pause playback without losing state.

Run `node tests/market-engine.test.cjs` for causal timing, accounting, transaction costs, weight normalization, and replay tests. No dependencies are needed.

## Repository and hosting

GitHub source: https://github.com/yuanshu777/personal-web. The first upload preserves the pre-change site at commit `2177cc1`; subsequent changes are committed separately. Serve the contents of `dist/` at a domain root. Asset and philosophy-page URLs are root-relative; a GitHub Pages project subpath needs a base-path adaptation. Uploading to GitHub does not enable Pages or change Sites access settings.

Local preview: `node preview.mjs`, then open http://127.0.0.1:4173. English is the default; Chinese uses 王元舒, 哈佛大学, and 多伦多大学. The English email is wangyulin777@gmail.com; the Chinese email is m15010158067_1@163.com.

The philosophy essay is reached from the homepage Philosophy card and its summary page, with an explicit Home link back to the portfolio. Ten illustrative scenes cover all nine acts: the original road and bedroom, followed by rules, outside, histories, local self, freedom, first-person experience, reflexivity, and open questions. Each later act begins with its scene and dissolves into the existing spatial diagram as the reader progresses. Images retain their full landscape composition, and the current and next act load as needed. It retains English default and the shared explicit language preference, plus a device-local reading-mode preference. Language/layout changes retain the current note. Native scrolling and chapter anchors work without scroll hijacking. Reduced-motion users receive static spatial poses; unavailable WebGL keeps the scene image and full essay accessible. Spatial models are conceptual illustrations, not empirical or probabilistic claims. The original PDF is included unchanged at the owner's request to present the complete philosophy.
