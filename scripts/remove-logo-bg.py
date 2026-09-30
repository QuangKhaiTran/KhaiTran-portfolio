from pathlib import Path
from collections import deque
import numpy as np
from PIL import Image

files = [
    Path(r"d:\KhaiTran-portfolio\src\assets\logos\client-yhotel.png"),
    Path(r"d:\KhaiTran-portfolio\src\assets\logos\client-greencm.png"),
    Path(r"d:\KhaiTran-portfolio\src\assets\logos\client-vinfast.png"),
]


def remove_black_bg(path: Path, threshold: int = 28, soft: int = 18) -> None:
    img = Image.open(path).convert("RGBA")
    arr = np.array(img)
    h, w = arr.shape[:2]
    rgb = arr[:, :, :3].astype(np.int16)
    lum = rgb.max(axis=2)

    bg = np.zeros((h, w), dtype=bool)
    q: deque[tuple[int, int]] = deque()

    def try_push(y: int, x: int) -> None:
        if 0 <= y < h and 0 <= x < w and not bg[y, x] and lum[y, x] <= threshold + soft:
            bg[y, x] = True
            q.append((y, x))

    for x in range(w):
        try_push(0, x)
        try_push(h - 1, x)
    for y in range(h):
        try_push(y, 0)
        try_push(y, w - 1)

    while q:
        y, x = q.popleft()
        for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            ny, nx = y + dy, x + dx
            if 0 <= ny < h and 0 <= nx < w and not bg[ny, nx] and lum[ny, nx] <= threshold + soft:
                bg[ny, nx] = True
                q.append((ny, nx))

    alpha = arr[:, :, 3].astype(np.float32)
    soft_f = float(max(soft, 1))
    for y in range(h):
        for x in range(w):
            if not bg[y, x]:
                continue
            v = int(lum[y, x])
            if v <= threshold:
                alpha[y, x] = 0
            else:
                t = (v - threshold) / soft_f
                alpha[y, x] = min(alpha[y, x], t * 255.0)

    out = arr.copy()
    out[:, :, 3] = np.clip(alpha, 0, 255).astype(np.uint8)

    ys, xs = np.where(out[:, :, 3] > 8)
    if len(xs) and len(ys):
        pad = 4
        y0, y1 = max(0, int(ys.min()) - pad), min(h, int(ys.max()) + pad + 1)
        x0, x1 = max(0, int(xs.min()) - pad), min(w, int(xs.max()) + pad + 1)
        out = out[y0:y1, x0:x1]

    Image.fromarray(out).save(path)
    print(
        f"OK {path.name}: {img.size} -> {out.shape[1]}x{out.shape[0]}, "
        f"transparent={(out[:, :, 3] == 0).sum()}"
    )


for f in files:
    remove_black_bg(f)

print("done")
