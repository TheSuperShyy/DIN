# Workflow: Scaffold the Clone Project

## Objective
Create a working project skeleton that matches the reference site's stack and routing.

## Inputs
- `.tmp/analysis.md` — must exist and be complete before starting

## Steps

### 1. Confirm the stack
Read `.tmp/analysis.md`. Identify the framework. Common cases:
- **Next.js (App Router):** `npx create-next-app@latest clone --typescript --tailwind --app --no-src-dir`
- **Next.js (Pages Router):** same but `--no-app`
- **Astro:** `npm create astro@latest clone`
- **Plain HTML:** create files manually with `tools/file_writer.py`

### 2. Scaffold the project
Run the appropriate scaffolding command. The output directory is `clone/`.

### 3. Set up routing
Create one page file per route found in analysis:
```
clone/app/page.tsx                          → /
clone/app/products/a1-sense/page.tsx        → /products/a1-sense
clone/app/products/b1-eye/page.tsx          → /products/b1-eye
clone/app/neurals/a1-neuro/page.tsx         → /neurals/a1-neuro
clone/app/programs/page.tsx                 → /programs
clone/app/updates/page.tsx                  → /updates
```

### 4. Create global layout
- `clone/app/layout.tsx` — global shell with `<Nav />` and `<Footer />`
- Use placeholder content in nav (correct item count + numbering, lorem text)

### 5. Generate empty section components
Use `tools/component_generator.py` with a blueprint JSON. Create one component per section identified in analysis.

Example blueprint (`blueprints/homepage.json`):
```json
{
  "output_dir": "clone/src/components",
  "framework": "nextjs",
  "components": [
    { "name": "HeroSection", "description": "Full-screen hero with CTAs" },
    { "name": "BreakthroughIntro", "description": "Two-column intro section" },
    { "name": "MissionList", "description": "Mission / Vision / Ambition bullets" },
    { "name": "InvisibleApproach", "description": "Product showcase with images" },
    { "name": "ProgressMethod", "description": "Editorial copy section" },
    { "name": "OurAim", "description": "Impact statement section" },
    { "name": "ThreeCardGrid", "description": "Evidence / People / Contact cards" },
    { "name": "SiteFooter", "description": "Footer with links and social" }
  ]
}
```

Run: `python tools/component_generator.py blueprints/homepage.json`

### 6. Git init and first commit
```bash
cd clone
git init
git add .
git commit -m "chore: initial scaffold — stack matches reference, routing complete"
```

### 7. Push to GitHub
**Stop here and ask the user for the GitHub repo URL before pushing.**

Then:
```bash
git remote add origin <repo-url>
git push -u origin main
```

## Output
- `clone/` — working project with routing and empty components
- Initial commit on GitHub

## Failure Handling
- If scaffolding fails, check Node version: `node -v` (must be 18+)
- If `create-next-app` hangs, use `--use-npm` flag
