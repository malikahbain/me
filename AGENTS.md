# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Durable design decisions

- The portfolio travels horizontally between full-viewport locations; do not convert it back to a long vertical landing page.
- Light and dark themes use genuinely different environmental artwork. Dark mode is a moonlit, lantern-lit world, not tinted daylight.
- Keep the journey map as a first-class interactive navigation screen.
- Maintain complete English and French UI modes.
- Keep dedicated résumé, social media, featured-project detail, and Devvit-app detail experiences in the journey.
- Keep the home screen completely viewport-locked, including on mobile; never allow vertical scrolling on Home.
- Use a pixelated fade for location changes instead of a visible sliding transition.
- The map is a draggable world surface with clickable destinations.
- The journey map is theme-locked: day artwork in light mode and night artwork in dark mode. It must never auto-cycle between them.
- `public/assets/malikah-crest.png` is the canonical masthead logo; its resized derivatives are the favicon and Apple touch icon.
- Do not show a player/avatar marker floating over the journey map.
- Entrance fades must preserve each component's final layout position; content should never settle lower after loading.
- Stories currently use illustrated link cards without separate cover-photo layers or visible social embeds.
- The header music control plays Malikah's YouTube playlist through a visually hidden embed. Playback begins only after explicit user interaction and persists while navigating between portfolio screens.
- Résumé category columns, including Skills, are top-aligned with matching header placement.
- Social content must clearly distinguish Personal, Professional, and Writing channels, including coming-soon launch states.
- About should present Malikah's Grenadian background and playful personal facts as an interactive game-like experience.
- Do not add case-study CTAs.
- All location changes use fade-in plus a pixel-gradient dissolve; never reveal a lateral sliding motion.
- The map follows cursor position without click-and-drag and should feel larger than the viewport, with multiple continuous environmental animations.
- Devvit app actions link to Reddit, while project/section-level discovery points to Malikah's Devvit presence rather than GitHub.
- The résumé PDF in `public/Malikah-Bain-Resume.pdf` is the content source of truth for roles, dates, education, and listed skills.
- Navigation uses translucent modern glass, never a solid blue bar.
- Social content includes Malikah's creator reach, brand collaborations, event opportunities, TikTok, Instagram, GitHub, LinkedIn, and blog/article links without coming-soon labels.
- Never draw a rectangular frame around the viewport.
- In light mode, navigation text must remain dark and readable over the artwork.
- About shows the Traveler's Quiz in the fun-facts position; facts remain hidden until completion.
- Résumé uses horizontal scrolling, includes all work and university education from the source PDF, and translates its full content with the EN/FR control.
- Scene transitions directly reveal the incoming artwork over the outgoing artwork with a slow pixel-gradient mask; never use a solid-color interstitial.
