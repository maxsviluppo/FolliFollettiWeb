from PIL import Image, ImageFilter
import collections

# Load image
img = Image.open('public/cartello.png').convert('RGBA')
w, h = img.size
pixels = img.load()

# Analyze background: check corners
print("Top-left:", pixels[0, 0])
print("Top-right:", pixels[w - 1, 0])
print("Bottom-left:", pixels[0, h - 1])
print("Bottom-right:", pixels[w - 1, h - 1])

# Flood fill from outside borders to find all connected background pixels
visited = bytearray(w * h)
queue = collections.deque()

def is_bg(r, g, b, a):
    # Near white background
    return r > 240 and g > 240 and b > 240

# Add all edge pixels that are background
for x in range(w):
    for y in (0, h - 1):
        r, g, b, a = pixels[x, y]
        if is_bg(r, g, b, a):
            queue.append((x, y))
            visited[y * w + x] = 1

for y in range(h):
    for x in (0, w - 1):
        if not visited[y * w + x]:
            r, g, b, a = pixels[x, y]
            if is_bg(r, g, b, a):
                queue.append((x, y))
                visited[y * w + x] = 1

# BFS
while queue:
    cx, cy = queue.popleft()
    for dx, dy in [(-1,0), (1,0), (0,-1), (0,1)]:
        nx, ny = cx + dx, cy + dy
        if 0 <= nx < w and 0 <= ny < h:
            idx = ny * w + nx
            if not visited[idx]:
                r, g, b, a = pixels[nx, ny]
                # If near white, continue flood
                if is_bg(r, g, b, a):
                    visited[idx] = 1
                    queue.append((nx, ny))

# Create new image with transparent background and smooth anti-aliased edge
new_img = Image.new('RGBA', (w, h), (0, 0, 0, 0))
new_pixels = new_img.load()

# Also check for unvisited isolated pockets of white above the sign (between leaves/vines and wood)
# For pixels in upper area (y < h * 0.7) that are very pure white (>245), check if they are near visited
for y in range(h):
    for x in range(w):
        idx = y * w + x
        r, g, b, a = pixels[x, y]
        if visited[idx]:
            # It is background
            new_pixels[x, y] = (0, 0, 0, 0)
        else:
            new_pixels[x, y] = (r, g, b, a)

# Save result
new_img.save('public/cartello_clean.png', 'PNG')
print("Successfully saved public/cartello_clean.png")
