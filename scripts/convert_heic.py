import sys
import os
from pathlib import Path
import pillow_heif
from PIL import Image, ImageOps

pillow_heif.register_heif_opener()

src_dir = Path(sys.argv[1])
dst_dir = Path(sys.argv[2])
dst_dir.mkdir(parents=True, exist_ok=True)

files = sorted([f for f in src_dir.iterdir() if f.suffix.lower() == ".heic" and "(1)" not in f.name])

MAX_WIDTH = 1600

for i, f in enumerate(files, start=1):
    img = Image.open(f)
    img = ImageOps.exif_transpose(img)
    img = img.convert("RGB")
    if img.width > MAX_WIDTH:
        ratio = MAX_WIDTH / img.width
        img = img.resize((MAX_WIDTH, int(img.height * ratio)), Image.LANCZOS)
    out_path = dst_dir / f"{i:02d}.jpg"
    img.save(out_path, "JPEG", quality=82, optimize=True)
    print(f"{out_path.name} <- {f.name} ({img.width}x{img.height})")
