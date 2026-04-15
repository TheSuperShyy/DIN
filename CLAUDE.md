# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## What This Repo Is

This is a **WAT (Website Analysis & Translation) framework** — a meta-project that contains tooling, blueprints, and phase-by-phase workflow instructions for cloning the structure of [https://augen.pro/](https://augen.pro/) and rebuilding it with a completely different visual identity.

The repo does **not** contain the final website. The website clone is built into `clone/` (created during Phase 2). All work in this repo is orchestration and scaffolding infrastructure.

---

## Repository Layout

```
blueprints/       — JSON specs consumed by Python tools
  homepage.json   — component list + props for the homepage (framework: nuxt)
  theme.json      — full design token set (colors, fonts, spacing, etc.)

tools/            — Python CLI scripts (no framework, stdlib only except requests/bs4)
  scrape_single_site.py     — crawls a URL, saves HTML to .tmp/scrape/
  component_generator.py    — generates component stubs from a blueprint JSON
  design_token_generator.py — converts theme.json → tokens.css (CSS variables)
  file_writer.py            — writes arbitrary files from a spec JSON

workflows/        — Markdown phase docs; read these before starting each phase
  scrape_site.md      — Phase 1: scrape + analyze reference site
  scaffold_project.md — Phase 2: init the clone project + routing
  build_sections.md   — Phase 3: implement section structure (no styling yet)
  apply_design.md     — Phase 4: apply visual identity + replace copy
  qa_handoff.md       — Phase 5: QA checklist + write DIFF.md

.tmp/             — gitignored scratch space
  scrape/         — raw HTML + manifest.json from scraper
  analysis.md     — written after Phase 1; drives all later phases

clone/            — the actual website (created in Phase 2, not present initially)
```

---

## Python Tool Commands

Install dependencies once:
```bash
pip install requests beautifulsoup4
```

**Phase 1 — Scrape reference site:**
```bash
python tools/scrape_single_site.py https://augen.pro/
# Output: .tmp/scrape/*.html + .tmp/scrape/manifest.json
```

**Phase 2 — Generate component stubs from blueprint:**
```bash
python tools/component_generator.py blueprints/homepage.json
# Output: clone/src/components/*.vue (framework: nuxt per blueprint)
```

**Phase 4 — Generate CSS design tokens from theme spec:**
```bash
python tools/design_token_generator.py blueprints/theme.json
# Output: clone/src/styles/tokens.css (path defined in theme.json "output" field)
```

**Write arbitrary files from a spec:**
```bash
python tools/file_writer.py <spec.json>
```

---

## Clone Project Commands (run from `clone/`)

The clone uses **Nuxt** (as set in `blueprints/homepage.json`). Once scaffolded:
```bash
npm run dev      # development server
npm run build    # production build
npm run preview  # preview production build
```

---

## Phase Workflow

Always read the matching workflow doc before starting a phase:

| Phase | Workflow doc | Key output |
|-------|-------------|------------|
| 1 — Scrape | `workflows/scrape_site.md` | `.tmp/analysis.md` |
| 2 — Scaffold | `workflows/scaffold_project.md` | `clone/` with routing |
| 3 — Build sections | `workflows/build_sections.md` | All pages structurally complete |
| 4 — Apply design | `workflows/apply_design.md` | `clone/src/styles/tokens.css`, `DESIGN.md` |
| 5 — QA & handoff | `workflows/qa_handoff.md` | `DIFF.md`, final push |

**Critical rule:** Phase 3 (structure) and Phase 4 (design) are strictly separated. Do not apply colors, fonts, or decorative CSS during Phase 3.

---

## Design Token System

`blueprints/theme.json` is the single source of truth for all visual values. After any change to it, regenerate `tokens.css`:
```bash
python tools/design_token_generator.py blueprints/theme.json
```

In all component CSS, use only the generated CSS variables — never hardcode hex, rem, or px values. Variable naming pattern:
- Colors: `--color-<name>`
- Fonts: `--font-<sans|serif|mono>`
- Type scale: `--text-<xs|sm|base|lg|xl|2xl…>`
- Spacing: `--space-<1|2|3|4|6|8…>`
- Radius: `--radius-<sm|md|lg|xl|full>`
- Shadows: `--shadow-<sm|md|lg>`

---

## Content Rules

All hardcoded strings (headlines, body copy, nav labels, footer text, product names) must live in a single `clone/src/content.ts` file — no strings scattered across components.

---

## Project Objective (reference)

Clone the structure and user flow of [https://augen.pro/](https://augen.pro/) and rebuild with a completely different visual identity.

**Pages:**
- `/` — Homepage (8 sections, listed in `workflows/build_sections.md`)
- `/products/a1-sense`, `/products/b1-eye` — Product detail pages
- `/neurals/a1-neuro` — Neural product detail
- `/programs` — Programs page
- `/updates` — Updates/blog page

**Navigation to preserve:** Numbered items (01, 02, 03…), dropdown groups (Wearable → products, Neural → neurals), search item.

**Deliverables:** working `npm run dev`, all pages implemented, `DESIGN.md` (visual system), `DIFF.md` (structural deviations from reference).
