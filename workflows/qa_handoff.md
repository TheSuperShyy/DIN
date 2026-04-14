# Workflow: QA & Handoff

## Objective
Verify the clone works correctly and document every deviation from the reference.

## Inputs
- `clone/` — fully designed project from Phase 4

## QA Checklist

### Build
- [ ] `npm run dev` starts without errors
- [ ] `npm run build` completes without errors (for Next.js: no type errors, no missing modules)

### Pages
- [ ] `/` — homepage renders all 8 sections in correct order
- [ ] `/products/a1-sense` — renders correctly
- [ ] `/products/b1-eye` — renders correctly
- [ ] `/neurals/a1-neuro` — renders correctly
- [ ] `/programs` — renders correctly
- [ ] `/updates` — renders correctly

### Navigation
- [ ] All nav items link to correct routes
- [ ] No 404s on any internal link
- [ ] Nav dropdowns/groups function correctly
- [ ] Mobile nav opens and closes correctly

### Responsive
- [ ] Mobile (375px) — sections stack in same order as reference
- [ ] Tablet (768px) — layout transitions match reference
- [ ] Desktop (1280px+) — full layout correct

### Design
- [ ] No colors, fonts, or values borrowed from augen.pro
- [ ] All copy replaced with new brand content
- [ ] All placeholder images are appropriate and have alt text
- [ ] Hover states and animations work correctly

### Code Quality
- [ ] No console errors
- [ ] No unused CSS
- [ ] All content strings in `content.ts` / `content.js`
- [ ] All CSS values use token variables

## Write DIFF.md
Document every intentional structural deviation from the reference:
```markdown
# DIFF.md — Structural Deviations

| Section | Reference behavior | Clone behavior | Reason |
|---------|-------------------|----------------|--------|
| Nav     | ...               | ...            | ...    |
```

## Final Commit & Push
```bash
git add .
git commit -m "chore: QA complete — DIFF.md and final polish"
git push
```

## Handoff
Report the GitHub repo URL to the user.
