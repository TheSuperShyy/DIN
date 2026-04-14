# Workflow: Build Sections

## Objective
Implement each page's sections structurally — correct HTML semantics, layout logic, and content hierarchy. No visual styling yet.

## Inputs
- `.tmp/analysis.md` — section order and component patterns
- `clone/` — scaffolded project from Phase 2

## Build Order

### 1. Global Nav
- Implement the numbered nav pattern (01, 02, 03…)
- Wire up dropdown/expandable groups if present in reference
- All items link to correct routes
- Mobile hamburger / collapse behavior matches reference

### 2. Homepage (top to bottom)
Work through each section in the order defined in `.tmp/analysis.md`:
1. `HeroSection` — headline hierarchy, CTA buttons, product links
2. `BreakthroughIntro` — two-column split, text + image placeholder
3. `MissionList` — bullet/list structure with labels (Mission / Vision / Ambition)
4. `InvisibleApproach` — product image showcase, caption layout
5. `ProgressMethod` — editorial copy, pull quotes if present
6. `OurAim` — impact statement, large typographic element
7. `ThreeCardGrid` — three equal cards with icon/title/body/CTA
8. `SiteFooter` — link groups, social icons, legal row, country label

### 3. Inner Pages (one at a time)
For each inner page, reference the saved HTML and replicate section order exactly:
- `/products/a1-sense`
- `/products/b1-eye`
- `/neurals/a1-neuro`
- `/programs`
- `/updates`

## Per-Section Checklist
For each component:
- [ ] Correct HTML landmark (`<section>`, `<nav>`, `<header>`, `<footer>`, `<article>`)
- [ ] Heading hierarchy matches reference (h1 → h2 → h3)
- [ ] Placeholder text in place (no real brand copy yet)
- [ ] Placeholder images with proper `alt` text
- [ ] CTAs link to correct routes (not `#` unless reference uses `#`)
- [ ] Basic responsive stacking — flex column on mobile, row/grid on desktop

## Commit Strategy
Commit after each full page is structurally complete:
```bash
git add .
git commit -m "feat: homepage structure complete — all 8 sections scaffolded"
git commit -m "feat: /products/a1-sense structure complete"
```

## Styling Rule
During this phase, apply only layout-critical CSS:
- `display: flex / grid`
- `gap`, `padding`, `margin` for approximate spacing
- No colors, fonts, shadows, or decorative styles

## Output
- All pages implemented with correct section structure
- All internal links functional
- Committed to GitHub after each page
