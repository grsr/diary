# Migraine Diary

A fast, private, install-to-home-screen web app for tracking migraines and the
factors around them (sleep, stress, food/drink, triggers, medication) — with a
one-tap **doctor's report** you can save as a PDF.

- **No account, no server, no cost.** It's a static web app hosted on GitHub Pages.
- **Private by design.** Every entry is stored *only on your device* (browser
  local storage). Nothing is ever uploaded. Use **Download backup** now and then
  so you never lose your history.
- **Built to be quick.** Logging a day is mostly taps; it auto-saves as you go.

---

## 1. Turn on hosting (one-time, ~1 minute)

The app files live in this repo. To make it a live URL:

1. Go to the repo on GitHub → **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Set **Branch** to `main` and folder to **`/ (root)`**, then **Save**.
4. Wait ~1 minute, then reload the page. GitHub will show your live URL:

   ```
   https://grsr.github.io/diary/
   ```

That's it — the app is live.

## 2. Install it on your iPhone (makes it feel like an app)

1. Open the URL above in **Safari** on your iPhone.
2. Tap the **Share** button (the square with an up-arrow).
3. Scroll down and tap **Add to Home Screen** → **Add**.
4. Open it from your new **Migraine Diary** icon. It runs full-screen, works
   offline, and behaves like a native app.

> Works the same on Android via Chrome's "Add to Home screen" / "Install app".

## 3. Set up the evening reminder (one-time)

iPhones limit web apps from sending scheduled notifications on their own, so the
app gives you two reliable, native options. Open the app's **Settings** tab:

- **Easiest — Add to Calendar:** set your reminder time, tap **“Add daily
  reminder to my Calendar.”** Open the downloaded file and your iPhone adds a
  repeating daily alert.
- **Most flexible — Shortcuts automation:** in the iOS **Shortcuts** app →
  **Automation** → **+** → **Time of Day** → pick your evening time, **Daily**,
  “Run Immediately” → action **Open App → Migraine Diary**. Now your phone opens
  the diary for you every evening.

(There's also an in-app notification toggle that fires while the app has been
opened that day.)

---

## What it tracks

Each day: whether you had a migraine, severity (1–10), duration, aura, medication
taken, hours & quality of sleep, stress level, possible triggers (caffeine,
alcohol, dehydration, skipped meals, weather, etc. — plus your own custom ones),
water, exercise, free-text notes, and an optional menstrual-cycle marker.

## The doctor's report

The **Report** tab summarises a date range (30/90/180 days or all time): number
of migraine days, average severity, % of days affected, average sleep on migraine
vs. other days, and the most common factors on migraine days — followed by a full
day-by-day table. Tap **Open printable report / Save as PDF** and use your
browser's **Share → Save to Files (PDF)** to hand it to your doctor. You can also
export **CSV** for a spreadsheet, and a **JSON backup** to move data between
devices.

## Files

| File | Purpose |
|------|---------|
| `index.html` | The entire app (UI + logic, no dependencies, no build step) |
| `manifest.webmanifest` | PWA metadata so it installs to the home screen |
| `sw.js` | Service worker for offline use |
| `icon-*.png`, `apple-touch-icon.png`, `icon.svg` | App icons |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |

## Privacy note

This is a personal health diary. Data never leaves your device. If you clear your
browser data, switch phones, or delete the app, the on-device history is gone —
so keep an occasional **JSON backup** (Report tab). This app is a tracking aid,
not medical advice.
