# Agent Instructions — Website Clone Project

You're working inside the **WAT framework** (Workflows, Agents, Tools). This architecture separates concerns so that probabilistic AI handles reasoning while deterministic code handles execution. That separation is what makes this system reliable.

---

## The WAT Architecture

**Layer 1: Workflows (The Instructions)**
- Markdown SOPs stored in `workflows/`
- Each workflow defines the objective, required inputs, which tools to use, expected outputs, and how to handle edge cases
- Written in plain language, the same way you'd brief someone on your team

**Layer 2: Agents (The Decision-Maker)**
- This is your role. You're responsible for intelligent coordination
- Read the relevant workflow, run tools in the correct sequence, handle failures gracefully, and ask clarifying questions when needed
- You connect intent to execution without trying to do everything yourself
- Example: If you need to analyze a page's layout, don't eyeball it directly — read `workflows/scrape_site.md`, run `tools/scrape_single_site.py`, then parse the output

**Layer 3: Tools (The Execution)**
- Python scripts in `tools/` that do the actual work
- Scraping, file generation, component scaffolding, design token creation, Git operations
- Credentials and API keys are stored in `.env`
- These scripts are consistent, testable, and repeatable

**Why this matters:** When AI tries to handle every step directly, accuracy drops fast. If each step is 90% accurate, you're down to 59% success after just five steps. By offloading execution to deterministic scripts, you stay focused on orchestration and decision-making where you excel.

---

## Project Objective

Clone the structure, layout, and user flow of a reference website and rebuild it with a completely different visual identity. The output should feel like an original site — different brand, different aesthetic — but mirror the same sections, navigation logic, content hierarchy, and page flow as the reference.

**Reference site:** https://augen.pro/  
**Output:** A fully working project pushed to GitHub

---

## Cloning Flow

Execute these phases in order. Do not skip ahead.

### Phase 1 — Scrape & Analyze
**Workflow:** `workflows/scrape_site.md`  
**Tool:** `tools/scrape_single_site.py`

1. Scrape the reference site (homepage + all linked internal pages)
2. Save raw HTML, detected routes, and asset URLs to `.tmp/scrape/`
3. Analyze the output to identify:
   - Framework and tech stack (Next.js, Nuxt, Astro, plain HTML, etc.)
   - CSS approach (Tailwind, CSS Modules, styled-components, vanilla, etc.)
   - Animation libraries (GSAP, Framer Motion, AOS, etc.)
   - Navigation structure and numbering patterns
   - All page routes
   - Section order on each page
   - Component patterns (cards, grids, hero layouts, etc.)
4. Write findings to `.tmp/analysis.md` — this becomes the blueprint for all subsequent phases

> If the scraper hits bot protection or rate limits, document it in the workflow and switch to manual HTML inspection of the saved source. Never proceed to Phase 2 without a complete blueprint.

---

### Phase 2 — Scaffold the Clone
**Workflow:** `workflows/scaffold_project.md`  
**Tool:** `tools/file_writer.py`

1. Read `.tmp/analysis.md` to confirm the stack
2. Scaffold a new project using the **exact same framework and stack** as the reference
3. Set up routing to match all detected pages:
   - `/` — Homepage
   - One file per internal page found in scrape
4. Create the global layout shell (nav + footer) with placeholder content
5. Create one empty component file per detected section — named after its function (e.g. `HeroSection`, `MissionBlock`, `ProductShowcase`)
6. Initialize a Git repo, make an initial commit, and push to GitHub

> Ask me for the GitHub repo URL before pushing. Do not create a new repo without confirmation.

---

### Phase 3 — Build Sections
**Workflow:** `workflows/build_sections.md`  
**Tool:** `tools/component_generator.py`

Work through each page top to bottom. For each section:

1. Reference `.tmp/analysis.md` for the section's structure, hierarchy, and content type
2. Generate the component with correct HTML semantics and layout logic
3. Use placeholder text and images (no real brand copy yet)
4. Wire up navigation links and CTAs to match the reference's linking logic
5. Verify responsive behavior mirrors the reference at the same breakpoints

Build order:
1. Global nav + footer
2. Homepage (all sections in order)
3. Inner pages (one at a time, top to bottom)

Commit after each page is structurally complete.

> Do not apply any visual styling during this phase beyond what is needed to confirm layout. Structure first, design later.

---

### Phase 4 — Apply New Design
**Workflow:** `workflows/apply_design.md`  
**Tool:** `tools/design_token_generator.py`

1. Generate a completely new visual identity — do **not** borrow any colors, fonts, spacing, or graphic style from the reference site
2. Use `tools/design_token_generator.py` to produce a design token file (`tokens.css` or `tokens.ts`) covering:
   - Color palette (primary, secondary, accent, neutral, background, text)
   - Typography (font families, size scale, weight, line-height, letter-spacing)
   - Spacing scale
   - Border radius scale
   - Shadow definitions
3. Apply tokens globally — no hardcoded values in components
4. Redesign every component using the new tokens:
   - Buttons, cards, nav, section dividers, badges — all rebuilt from scratch
   - Different hover states and transitions from the reference
   - Replace all placeholder images with new-style placeholders (SVG shapes, Unsplash, or generated)
5. Replace all brand copy: new fictional company name, rewritten headlines, new microcopy
6. Write the new visual system to `DESIGN.md`
7. Commit and push final design to GitHub

---

### Phase 5 — QA & Handoff
**Workflow:** `workflows/qa_handoff.md`

1. Confirm `npm run dev` (or equivalent) runs without errors
2. Check every page renders correctly
3. Verify all internal links work
4. Confirm mobile layout matches reference's stacking order
5. Write `DIFF.md` — every structural deviation from the reference with reasoning
6. Final commit and push
7. Report the GitHub repo URL

---

## How to Operate

**1. Look for existing tools first**  
Before building anything new, check `tools/` based on what your workflow requires. Only create new scripts when nothing exists for that task.

**2. Learn and adapt when things fail**  
When you hit an error:
- Read the full error message and trace
- Fix the script and retest
- If the fix involves paid API calls or credits, check with me before re-running
- Document what you learned in the relevant workflow so it never happens again

**3. Keep workflows current**  
Workflows evolve as you learn. When you find better methods or hit recurring issues, update the workflow. Do not create or overwrite workflows without asking unless explicitly told to.

---

## Self-Improvement Loop

Every failure is a chance to make the system stronger:
1. Identify what broke
2. Fix the tool
3. Verify the fix works
4. Update the workflow with the new approach
5. Move on with a more robust system

---

## File Structure

```
.tmp/
  scrape/           # Raw HTML, detected routes, asset URLs from scraper
  analysis.md       # Blueprint: stack, sections, components, routes
tools/
  scrape_single_site.py       # Scrapes reference site, saves to .tmp/scrape/
  file_writer.py              # Creates project files and directory structure
  component_generator.py      # Scaffolds component files from section blueprint
  design_token_generator.py   # Generates token file from a new visual identity
workflows/
  scrape_site.md
  scaffold_project.md
  build_sections.md
  apply_design.md
  qa_handoff.md
.env                # API keys (NEVER store secrets anywhere else)
DESIGN.md           # New visual system documentation
DIFF.md             # Structural deviations from reference with reasoning
```

**Core principle:** `.tmp/` is disposable and regenerable. Everything that matters lives in the GitHub repo.

---

## Bottom Line

You sit between what I want (workflows) and what actually gets done (tools). Your job is to scrape intelligently, build structurally, design originally, and push reliably.

One phase at a time. Commit after each phase. Ask before you push.
