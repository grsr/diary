# 🌭 Sausage Swing

A one-touch web game for iPhone (works anywhere, installs to your home screen).
You're a sausage — drawn-on face, stick arms and legs — swinging from tree to
tree across a ravine to reach the next cliff, while monkeys lob bananas at you.
Levels are **procedurally generated and get harder forever**, from gentle to
brutal.

Play it at **https://grsr.github.io/diary/sausage-swing/**

## How to play

- **Tap the top of a tree** (the highlighted knob in the leaves) to shoot a rope
  and swing to it.
- **Hold** to keep swinging; **let go** on the forward up-swing to fly to the
  next tree — timing is everything.
- **Shake the phone** to swing higher and build speed for long gaps.
- **Tap with a second finger** to climb up the rope (handy for lining up a
  treetop above you).
- Cross the **checkered finish line** to clear the level — swinging into any
  part of the finish cliff counts. Don't fall into the ravine, and dodge the
  hazards.

On desktop: **Space** grabs the nearest reachable treetop, **↑** climbs the
rope, and **P** does a swing pump (stands in for shaking).

## The rules

- **Score** = how many levels you clear.
- **5 lives.** Getting hit or falling costs a life and restarts the current
  level. Run out and it's game over (your best score is saved on the device).
- **Progress is saved** at the start of every level, so you can close the app
  and pick up where you left off — the menu shows a **Continue** button.
- **Mini-sausages** 🌭 are scattered along the way like coins. Grab them — each
  one becomes a **monkey helper** in the next boss fight (up to 6).
- **Every 3rd level is a boss level.** A 🍳 **frying pan** floats on the path —
  grab it, because reaching the finish triggers a **gorilla boss fight**. Move
  with the **on-screen ◀ ▶ / JUMP buttons** or **tap a vine to swing in**, and
  whack the gorilla with the pan (or jump on its head if you missed the pan).
  Your monkey helpers pelt it with bananas — one helper per mini-sausage you
  collected. Dodge its barrels (jump over them) and its falling coconuts. A hit
  only restarts the **boss**, not the whole level, so you keep chipping away.

## Hazards

- **Monkeys** in the trees throw **bananas**.
- **Birds** patrol the sky.
- **Spiky blocks** float in the sky — swing around them.
- **Coconut trees** drop coconuts as you pass under them.
- **Gorilla boss** (every 3rd level): rolling barrels + coconut rain.

## Difficulty

Each level is built from a seed derived from its number, so a level always
regenerates identically when you retry it. As the level number climbs, the
ravine gets longer, the vines get farther apart and span a wider height band,
and there are more monkeys throwing bananas more often and faster.

## Install on your iPhone (feels like a native app)

1. Open the URL above in **Safari**.
2. Tap **Share** → **Add to Home Screen** → **Add**.
3. Launch it from the new **Sausage** icon — it runs full-screen and works
   offline.

> Works the same on Android via Chrome's "Add to Home screen".

## Files

| File | What it is |
|------|-----------|
| `index.html` | The entire game — canvas, physics, procedural levels, rendering. No dependencies. |
| `manifest.webmanifest`, `sw.js` | PWA metadata + offline service worker. |
| `icon-*.png`, `apple-touch-icon.png` | Home-screen icons. |
| `gen-icons.js` | Node script that draws and re-generates the icons (`node gen-icons.js`). |

Everything is static — it's served from the same GitHub Pages site as the rest
of this repo, at the `/sausage-swing/` path.
