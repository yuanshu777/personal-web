# Yuanshu Wang — Signal & Structure

Static, responsive Bento portfolio in the selected green research style. English is the default; the header offers English / Chinese switching across every page. A visitor's explicit language choice is saved only on their device. Switching language preserves the current page and probability-demo progress. The personal content is a first editorial draft based on the owner's ChatGPT memories, read at their request. Social profile addresses and full project write-ups are still pending.

## Structure

- `dist/index.html`: document shell and social-link placeholder dialog
- `dist/styles.css`: dark green / acid green design tokens and responsive layouts
- `dist/localization.js`: bilingual text and accessible-label translations; English-first language preference
- `dist/profile.js`: paired English / Chinese biography, strengths, ideas, philosophy, quant research, and project copy
- `dist/language.css`: language switcher and responsive refinements for bilingual copy
- `dist/app.js`: homepage, background, strengths, current thinking, philosophy, quantitative research, AI lab; hash-based navigation
- `preview.mjs`: local-only static preview server on `127.0.0.1:4173`

Run `node preview.mjs` to preview. Static output is authored directly in `dist`; no installation or build is required. Hosted configuration is in `.openai/hosting.json`.

## Design and content

The design takes general Bento layout inspiration from https://github.com/Ladvace/astro-bento-portfolio. Implementation is original; no template code, photos, identity, or personal content has been copied. Typography uses Google Fonts (Space Grotesk / IBM Plex Mono) with system fallbacks.

Review the education and project wording with the owner before broadening the site's audience. The first draft avoids dates, performance metrics, private identifiers, recruiting details, and unverified social addresses. The market-agent idea is explicitly an open research direction, not a completed system. The AI lab's probability experiment is a demo created for this site, not a claim about the owner's previous work.

The probability demo is normal-normal updating: prior variance 1, observation variance 0.64, each observation 0.65. At n observations, posterior mean is n × 0.65 / (0.64 + n), variance is 0.64 / (0.64 + n). Display is limited to 10 observations with a fixed vertical scale. The homepage signal/noise diagram uses synthetic values only.
