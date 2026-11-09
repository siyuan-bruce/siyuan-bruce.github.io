"""Build the gallery's card thumbnails and lightbox images from _data/gallery.yml.

Usage (from the repo root):  python3 _tools/make_gallery_images.py
Writes assets/images/gallery/thumbs/<id>.webp (longest side 960 px) and
assets/images/gallery/large/<id>.webp (longest side 2000 px). Existing outputs are kept
unless the source is newer, so the script is safe to rerun after adding photos.
"""
import os
import sys

import yaml
from PIL import Image, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "assets", "images", "gallery")
SIZES = {"thumbs": (960, 80), "large": (2000, 85)}


def main():
    with open(os.path.join(ROOT, "_data", "gallery.yml"), encoding="utf-8") as fh:
        sections = yaml.safe_load(fh)
    ids = set()
    for sec in sections:
        for ev in sec["events"]:
            for ph in ev["photos"]:
                pid, src = ph["id"], os.path.join(SRC, ph["file"])
                if pid in ids:
                    sys.exit(f"duplicate photo id: {pid}")
                ids.add(pid)
                if not os.path.exists(src):
                    sys.exit(f"missing source file: {src}")
                im = None
                for folder, (side, quality) in SIZES.items():
                    out = os.path.join(SRC, folder, pid + ".webp")
                    if os.path.exists(out) and os.path.getmtime(out) >= os.path.getmtime(src):
                        continue
                    if im is None:
                        im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
                    copy = im.copy()
                    copy.thumbnail((side, side), Image.LANCZOS)
                    os.makedirs(os.path.dirname(out), exist_ok=True)
                    copy.save(out, "WEBP", quality=quality, method=6)
                    print(f"{folder}/{pid}.webp {copy.size}")


if __name__ == "__main__":
    main()
