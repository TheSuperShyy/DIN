"""
file_writer.py
Creates project files and directory structures from a spec dict or JSON file.
Usage: python tools/file_writer.py <spec.json>

Spec format:
{
  "root": "my-project",
  "files": [
    { "path": "src/index.tsx", "content": "..." },
    { "path": "src/components/Hero.tsx", "content": "" }
  ]
}
"""

import json
import sys
from pathlib import Path


def write_files(spec: dict):
    root = Path(spec.get("root", "."))
    files = spec.get("files", [])

    for entry in files:
        rel_path = entry["path"]
        content = entry.get("content", "")
        dest = root / rel_path
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_text(content, encoding="utf-8")
        print(f"  Written: {dest}")

    print(f"\nDone. {len(files)} files written under '{root}'.")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python tools/file_writer.py <spec.json>")
        sys.exit(1)

    spec_path = Path(sys.argv[1])
    if not spec_path.exists():
        print(f"File not found: {spec_path}")
        sys.exit(1)

    spec = json.loads(spec_path.read_text(encoding="utf-8"))
    write_files(spec)
