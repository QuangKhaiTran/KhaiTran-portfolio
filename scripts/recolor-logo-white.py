from pathlib import Path
import numpy as np
from PIL import Image

# Logos designed on black: white mark parts need a dark fill for light UI.
files = [
    Path(r"d:\KhaiTran-portfolio\src\assets\logos\client-yhotel.png"),
    Path(r"d:\KhaiTran-portfolio\src\assets\logos\client-greencm.png"),
]

DARK = np.array([15, 23, 42], dtype=np.uint8)  # slate-950, matches site foreground


def recolor_white_for_light_bg(path: Path) -> None:
    img = Image.open(path).convert("RGBA")
    arr = np.array(img)
    rgb = arr[:, :, :3].astype(np.float32)
    alpha = arr[:, :, 3].astype(np.float32)

    # How "white" a pixel is (only among opaque pixels)
    min_c = rgb.min(axis=2)
    max_c = rgb.max(axis=2)
    sat = max_c - min_c

    # Near-white / light-gray fills (keep saturated greens)
    white_mask = (alpha > 40) & (min_c >= 180) & (sat <= 40)

    # Soft blend: whiter → more dark recolor
    t = np.clip((min_c - 180) / 75.0, 0, 1)
    t = np.where(white_mask, t, 0.0)[..., None]

    rgb = rgb * (1.0 - t) + DARK.astype(np.float32) * t
    out = arr.copy()
    out[:, :, :3] = np.clip(rgb, 0, 255).astype(np.uint8)
    Image.fromarray(out).save(path)
    print(f"recolored white->dark: {path.name}, pixels={int(white_mask.sum())}")


for f in files:
    recolor_white_for_light_bg(f)

# Refresh previews
preview = Path(r"d:\KhaiTran-portfolio\.tmp-logo-preview")
preview.mkdir(exist_ok=True)
for name in ["client-yhotel.png", "client-greencm.png", "client-vinfast.png"]:
    logo = Image.open(Path(r"d:\KhaiTran-portfolio\src\assets\logos") / name).convert("RGBA")
    white = Image.new("RGBA", logo.size, (255, 255, 255, 255))
    white.alpha_composite(logo)
    white.convert("RGB").save(preview / f"{name}-on-white.jpg", quality=92)

print("done")
