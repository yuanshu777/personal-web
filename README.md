# Signal & Structure — personal site design prototype

Static, responsive Bento portfolio. Main language: Chinese; English is used for secondary labels. All personal biography, viewpoints and project content are clearly marked as placeholders or sample copy. No real social profiles are linked yet.

## Structure

- `dist/index.html`: document shell and social-link placeholder dialog
- `dist/styles.css`: dark green / acid green design tokens and responsive layouts
- `dist/themes.css`: three complete design directions and the floating comparison switcher; choice is stored only on the current device
- `dist/app.js`: homepage, background, strengths, current thinking, philosophy, quantitative research, AI lab; hash-based navigation
- `preview.mjs`: local-only static preview server on `127.0.0.1:4173`

Run `node preview.mjs` to preview. Static output is authored directly in `dist`; no installation or build is required. Hosted configuration is in `.openai/hosting.json`.

## Design and content

The design takes general Bento layout inspiration from https://github.com/Ladvace/astro-bento-portfolio. Implementation is original; no template code, photos, identity, or personal content has been copied. Typography uses Google Fonts (Space Grotesk / IBM Plex Mono) with system fallbacks.

Replace `YOUR NAME`, `你的名字`, the introduction, placeholder sections and social buttons when final content is provided. The AI lab's probability experiment is a demo created for this site, not a claim about the owner's previous work.

The probability demo is normal-normal updating: prior variance 1, observation variance 0.64, each observation 0.65. At n observations, posterior mean is n × 0.65 / (0.64 + n), variance is 0.64 / (0.64 + n). Display is limited to 10 observations with a fixed vertical scale. The homepage signal/noise diagram uses synthetic values only.
