# Workflow: Apply New Visual Design

## Objective
Replace placeholder structure with a fully original visual identity. Nothing borrowed from augen.pro — new brand, new palette, new type system.

## Inputs
- `clone/` — structurally complete project from Phase 3
- `tools/design_token_generator.py`

## Steps

### 1. Define the new visual identity
Choose a direction that is clearly distinct from augen.pro's aesthetic. Document your choice in `DESIGN.md` before writing any CSS:
- Color palette rationale
- Font selection and pairing logic
- Spacing philosophy
- Motion/animation style

### 2. Create theme spec
Write `blueprints/theme.json` with the full token set:
```json
{
  "colors": { ... },
  "fonts": { ... },
  "type-scale": { ... },
  "spacing": { ... },
  "radius": { ... },
  "shadows": { ... },
  "output": "clone/src/styles/tokens.css"
}
```

### 3. Generate tokens
```bash
python tools/design_token_generator.py blueprints/theme.json
```

### 4. Wire tokens globally
Import `tokens.css` in the root layout. Use only CSS variables in all component styles — no hardcoded hex, rem, or px values.

### 5. Redesign each component
Work through every component file and replace the placeholder layout CSS with the new design:
- Use token variables exclusively
- Redesign button styles, hover states, focus rings
- Redesign card styles, dividers, badges
- Replace any placeholder images with new-style assets (Unsplash URLs or SVG shapes)
- Implement the new animation style (different from reference's)

### 6. Replace all copy
- New fictional brand name throughout
- Rewritten headlines and subheads matching new brand voice
- Rewritten microcopy (button labels, nav items, footer tagline)
- Rewritten product/feature names

### 7. Write `DESIGN.md`
Document the complete visual system:
```markdown
# Design System — [New Brand Name]

## Color Palette
| Token | Value | Usage |
|-------|-------|-------|

## Typography
| Token | Value | Usage |
|-------|-------|-------|

## Spacing Scale
...

## Component Decisions
- Buttons: ...
- Cards: ...
- Nav: ...

## Motion Style
...
```

### 8. Final commit
```bash
git add .
git commit -m "feat: visual redesign complete — new brand identity applied"
git push
```

## Rules
- Zero borrowed values from augen.pro (no same colors, fonts, spacing ratios)
- All values via CSS variables — never hardcoded
- Every component gets the new treatment — no skipped sections

## Output
- `clone/src/styles/tokens.css` — full design token set
- `DESIGN.md` — visual system documentation
- All components redesigned and committed
