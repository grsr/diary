# 🌭 Sausage Swing

A one-touch web game for iPhone (works anywhere, installs to your home screen).
You're a sausage — drawn-on face, stick arms and legs — swinging from tree to
tree across a ravine to reach the next cliff, while monkeys lob bananas at you.
Levels are **procedurally generated and get harder forever**, from gentle to
brutal.

Play it at **https://grsr.github.io/diary/sausage-swing/**

## How to play

- **Hold** anywhere to shoot a rope and grab the nearest vine, then swing.
- **Let go** on the forward up-swing to fly to the next tree — timing is
  everything.
- While you're in the air, **hold again** to auto-catch the next vine, so you
  can chain across the whole ravine.
- Reach the **far cliff** to clear the level. Don't fall into the ravine, and
  **dodge the bananas**.

On desktop you can use the **Spacebar** instead of touch.

## The rules

- **Score** = how many levels you clear.
- **3 lives.** A banana hit or a fall costs one life and restarts the current
  level. Run out and it's game over (your best score is saved on the device).
- **Every 3rd level** a 🍳 **frying pan** floats on the path. Grab it and, for
  the rest of that level, swinging into a monkey **whacks it** — clearing the
  banana threat.

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
