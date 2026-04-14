"""
scrape_single_site.py
Scrapes a reference website: homepage + all internal linked pages.
Saves raw HTML, detected routes, and asset URLs to .tmp/scrape/
Usage: python tools/scrape_single_site.py <url>
"""

import os
import re
import sys
import json
import time
import hashlib
from pathlib import Path
from urllib.parse import urljoin, urlparse

try:
    import requests
    from bs4 import BeautifulSoup
except ImportError:
    print("Missing dependencies. Run: pip install requests beautifulsoup4")
    sys.exit(1)

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/120.0.0.0 Safari/537.36"
    )
}

OUTPUT_DIR = Path(".tmp/scrape")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)


def slugify(url: str) -> str:
    path = urlparse(url).path.strip("/") or "index"
    slug = re.sub(r"[^a-zA-Z0-9_-]", "_", path)
    return slug or "index"


def save_page(url: str, html: str):
    slug = slugify(url)
    dest = OUTPUT_DIR / f"{slug}.html"
    dest.write_text(html, encoding="utf-8")
    print(f"  Saved: {dest}")
    return dest


def extract_internal_links(base_url: str, html: str) -> list[str]:
    soup = BeautifulSoup(html, "html.parser")
    domain = urlparse(base_url).netloc
    links = set()
    for tag in soup.find_all("a", href=True):
        href = tag["href"]
        full = urljoin(base_url, href)
        parsed = urlparse(full)
        if parsed.netloc == domain and parsed.scheme in ("http", "https"):
            # Strip fragments and query strings for route detection
            clean = parsed._replace(fragment="", query="").geturl()
            links.add(clean)
    return sorted(links)


def extract_assets(base_url: str, html: str) -> list[str]:
    soup = BeautifulSoup(html, "html.parser")
    assets = set()
    selectors = [
        ("link", "href"),
        ("script", "src"),
        ("img", "src"),
        ("source", "srcset"),
    ]
    for tag_name, attr in selectors:
        for tag in soup.find_all(tag_name, **{attr: True}):
            val = tag[attr]
            full = urljoin(base_url, val.split()[0])  # handle srcset
            if full.startswith("http"):
                assets.add(full)
    return sorted(assets)


def fetch(url: str, session: requests.Session) -> str | None:
    try:
        r = session.get(url, headers=HEADERS, timeout=15)
        r.raise_for_status()
        return r.text
    except Exception as e:
        print(f"  ERROR fetching {url}: {e}")
        return None


def scrape(start_url: str):
    session = requests.Session()
    visited = set()
    queue = [start_url]
    all_routes = []
    all_assets = []

    while queue:
        url = queue.pop(0)
        if url in visited:
            continue
        visited.add(url)

        print(f"Scraping: {url}")
        html = fetch(url, session)
        if not html:
            continue

        save_page(url, html)
        all_routes.append(url)
        all_assets.extend(extract_assets(url, html))

        links = extract_internal_links(start_url, html)
        for link in links:
            if link not in visited:
                queue.append(link)

        time.sleep(0.8)  # polite crawl delay

    # Save manifest
    manifest = {
        "base_url": start_url,
        "routes": all_routes,
        "assets": sorted(set(all_assets)),
    }
    manifest_path = OUTPUT_DIR / "manifest.json"
    manifest_path.write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    print(f"\nDone. {len(all_routes)} pages scraped.")
    print(f"Manifest: {manifest_path}")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python tools/scrape_single_site.py <url>")
        sys.exit(1)
    scrape(sys.argv[1])
