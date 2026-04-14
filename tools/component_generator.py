"""
component_generator.py
Scaffolds React/Next.js component files from a section blueprint.
Usage: python tools/component_generator.py <blueprint.json>

Blueprint format:
{
  "output_dir": "clone/src/components",
  "framework": "nextjs",         // nextjs | nuxt | astro | html
  "components": [
    {
      "name": "HeroSection",
      "description": "Full-screen hero with headline and two product CTAs",
      "props": ["headline", "subline", "ctaPrimary", "ctaSecondary"]
    }
  ]
}
"""

import json
import sys
from pathlib import Path


REACT_TEMPLATE = """\
interface {name}Props {{
{props_interface}
}}

export default function {name}({{ {prop_names} }}: {name}Props) {{
  return (
    <section className="{css_class}">
      {{/* {description} */}}
      <div className="container">
        <p>TODO: implement {name}</p>
      </div>
    </section>
  );
}}
"""

ASTRO_TEMPLATE = """\
---
// {description}
interface Props {{
{props_interface}
}}
const {{ {prop_names} }} = Astro.props;
---

<section class="{css_class}">
  {{/* TODO: implement {name} */}}
  <div class="container">
    <p>TODO: implement {name}</p>
  </div>
</section>
"""

HTML_TEMPLATE = """\
<!-- {name}: {description} -->
<section class="{css_class}">
  <div class="container">
    <p>TODO: implement {name}</p>
  </div>
</section>
"""


def pascal_to_kebab(name: str) -> str:
    import re
    return re.sub(r"(?<!^)(?=[A-Z])", "-", name).lower()


def build_props_interface(props: list[str]) -> str:
    return "\n".join(f"  {p}?: string;" for p in props)


def generate_component(comp: dict, framework: str, output_dir: Path):
    name = comp["name"]
    description = comp.get("description", "")
    props = comp.get("props", [])
    css_class = pascal_to_kebab(name)
    prop_names = ", ".join(props) if props else ""
    props_interface = build_props_interface(props)

    if framework in ("nextjs", "react"):
        content = REACT_TEMPLATE.format(
            name=name,
            description=description,
            props_interface=props_interface or "  // no props",
            prop_names=prop_names or "",
            css_class=css_class,
        )
        ext = ".tsx"
    elif framework == "astro":
        content = ASTRO_TEMPLATE.format(
            name=name,
            description=description,
            props_interface=props_interface or "  // no props",
            prop_names=prop_names or "",
            css_class=css_class,
        )
        ext = ".astro"
    else:
        content = HTML_TEMPLATE.format(
            name=name, description=description, css_class=css_class
        )
        ext = ".html"

    dest = output_dir / f"{name}{ext}"
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(content, encoding="utf-8")
    print(f"  Generated: {dest}")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python tools/component_generator.py <blueprint.json>")
        sys.exit(1)

    blueprint_path = Path(sys.argv[1])
    if not blueprint_path.exists():
        print(f"File not found: {blueprint_path}")
        sys.exit(1)

    blueprint = json.loads(blueprint_path.read_text(encoding="utf-8"))
    output_dir = Path(blueprint.get("output_dir", "src/components"))
    framework = blueprint.get("framework", "nextjs")
    components = blueprint.get("components", [])

    for comp in components:
        generate_component(comp, framework, output_dir)

    print(f"\nDone. {len(components)} components generated.")
