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
- **Nickname + leaderboard.** The game asks for a nickname once (stored on the
  device) and posts your score to a shared **online leaderboard** (Supabase).
  See it any time from the **🏆 Leaderboard** button on the menu, the **🏆**
  button in-play (pauses the game), or the game-over screen. If there's no
  network it falls back to an on-device top-10. The Supabase `anon` key is public
  by design and safe to ship; the table only allows read + insert (no edit/delete).
- **World rank** is shown on the game-over screen ("You're world #4!") based on
  the online leaderboard.
- **Music**: a looping chiptune plays while you play (a spookier one for boss
  fights). Toggle it with the 🔊/🔇 button on the menu or in-play.
- **Version number** is shown in the corner of the menu (currently **v13**), so
  you can confirm you're on the latest build. Opening the game with an internet
  connection always loads the newest version.
- **Secret:** tap the sausage on the menu five times… 🎉

## Levels

Levels are **procedurally generated**, not hand-built — effectively endless and
ramping in difficulty. A per-run seed means every new game lays out differently
(a death-retry within a run reproduces the same level, to stay fair). Each level
also picks a randomized height "shape" so the treetops climb, dip, or zig-zag.
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
- **Spiky blocks** sit in the swing path — some patrol side-to-side, some bob.
- **Bees** (from level 4) slowly chase you — swing away to lose them.
- **Moving vines** (from level 6) drift side-to-side.
- **Gusty wind** (from level 8) nudges you through the air.
- **Coconut trees** drop coconuts as you pass under them.
- **Golden invincibility banana** — grab it for ~8 seconds of *true*
  invincibility (glow around the sausage): nothing can hurt you, and if you fall
  into the ravine you float back up instead of dying. Great for a tricky bit.
- **Gorilla boss** (every 3rd level): rolling barrels + coconut rain, and it
  gets tougher (more HP, faster/heavier attacks) each boss. You can't slip
  behind it, and you can only hurt it by **swinging into it** (walking/jumping
  does nothing) — grab a vine, swing in, and keep chipping while you dodge. The
  frying pan makes swing-hits do double damage but **breaks after 2**, and each
  monkey helper lobs **one** banana then scurries off. Dying re-fights only the
  boss and **keeps the damage you've done**, so you can wear it down.

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
