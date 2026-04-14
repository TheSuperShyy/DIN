# Workflow: Scrape & Analyze Reference Site

## Objective
Scrape the reference site and produce a complete blueprint (`analysis.md`) that drives all subsequent phases.

## Inputs
- Reference URL: `https://augen.pro/`

## Steps

### 1. Run the scraper
```bash
pip install requests beautifulsoup4
python tools/scrape_single_site.py https://augen.pro/
```
Output lands in `.tmp/scrape/`: one `.html` file per page, plus `manifest.json`.

### 2. Inspect the manifest
Read `.tmp/scrape/manifest.json` to confirm all expected routes were captured:
- `/`
- `/products/a1-sense`
- `/products/b1-eye`
- `/neurals/a1-neuro`
- `/programs`
- `/updates`

If any routes are missing, open the saved `index.html` and manually extract links.

### 3. Analyze each page
For each saved HTML file, determine:
- **Framework / tech stack** — look for `__next`, `nuxt`, `astro`, or plain HTML markers
- **CSS approach** — Tailwind utility classes, CSS Modules (`_xxx`), or inline styles
- **Animation library** — check script tags for GSAP, Framer Motion, AOS, etc.
- **Navigation structure** — numbering pattern, dropdown groups, items order
- **Section order** — list every `<section>` or major `<div>` in sequence with its apparent purpose
- **Component patterns** — hero layouts, card grids, image/text splits, etc.

### 4. Write `.tmp/analysis.md`
Use this template:

```markdown
# Site Analysis — augen.pro

## Tech Stack
- Framework: ...
- CSS: ...
- Animation: ...
- Build tool: ...

## Routes
| Path | Saved file |
|------|-----------|
| /    | index.html |
| ...  | ...        |

## Navigation Structure
- Item 01: ...
- Item 02: ...

## Homepage Sections (in order)
1. Hero — ...
2. Intro — ...
...

## Inner Page Sections
### /products/a1-sense
1. ...

## Component Patterns
- Cards: ...
- Grids: ...
- Hero: ...

## Notes / Edge Cases
- ...
```

## Failure Handling
- **Bot protection / 403:** Save the browser's "View Source" manually into `.tmp/scrape/index.html` and continue with manual analysis.
- **Rate limits:** Add longer delays in `scrape_single_site.py` (increase `time.sleep` value) and re-run.
- **JS-rendered content:** If the HTML is empty shells, note "SSR: no" in analysis and inspect the browser's rendered DOM via DevTools instead.

## Output
- `.tmp/scrape/*.html` — raw page HTML
- `.tmp/scrape/manifest.json` — routes + asset list
- `.tmp/analysis.md` — the blueprint (required before Phase 2)
