"""
design_token_generator.py
Generates a design token file (tokens.css) from a theme spec.
Usage: python tools/design_token_generator.py <theme.json>

Theme spec format:
{
  "colors": {
    "primary": "#...",
    "secondary": "#...",
    "accent": "#...",
    "neutral": "#...",
    "background": "#...",
    "surface": "#...",
    "text": "#...",
    "text-muted": "#..."
  },
  "fonts": {
    "sans": "\"Inter\", system-ui, sans-serif",
    "serif": "\"Playfair Display\", Georgia, serif",
    "mono": "\"JetBrains Mono\", monospace"
  },
  "type-scale": {
    "xs": "0.75rem",
    "sm": "0.875rem",
    "base": "1rem",
    "lg": "1.125rem",
    "xl": "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem"
  },
  "spacing": {
    "1": "0.25rem",
    "2": "0.5rem",
    "4": "1rem",
    "8": "2rem",
    "16": "4rem",
    "24": "6rem",
    "32": "8rem"
  },
  "radius": {
    "sm": "0.25rem",
    "md": "0.5rem",
    "lg": "1rem",
    "full": "9999px"
  },
  "shadows": {
    "sm": "0 1px 3px rgba(0,0,0,0.12)",
    "md": "0 4px 16px rgba(0,0,0,0.12)",
    "lg": "0 8px 32px rgba(0,0,0,0.16)"
  },
  "output": "tokens.css"
}
"""

import json
import sys
from pathlib import Path


def generate_css(theme: dict) -> str:
    lines = [":root {"]

    for color_name, value in theme.get("colors", {}).items():
        lines.append(f"  --color-{color_name}: {value};")

    lines.append("")
    for font_name, value in theme.get("fonts", {}).items():
        lines.append(f"  --font-{font_name}: {value};")

    lines.append("")
    for size_name, value in theme.get("type-scale", {}).items():
        lines.append(f"  --text-{size_name}: {value};")

    lines.append("")
    for step, value in theme.get("spacing", {}).items():
        lines.append(f"  --space-{step}: {value};")

    lines.append("")
    for name, value in theme.get("radius", {}).items():
        lines.append(f"  --radius-{name}: {value};")

    lines.append("")
    for name, value in theme.get("shadows", {}).items():
        lines.append(f"  --shadow-{name}: {value};")

    lines.append("}")
    return "\n".join(lines)


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python tools/design_token_generator.py <theme.json>")
        sys.exit(1)

    theme_path = Path(sys.argv[1])
    if not theme_path.exists():
        print(f"File not found: {theme_path}")
        sys.exit(1)

    theme = json.loads(theme_path.read_text(encoding="utf-8"))
    css = generate_css(theme)

    output_file = theme.get("output", "tokens.css")
    out_path = Path(output_file)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(css, encoding="utf-8")
    print(f"Tokens written to: {out_path}")
