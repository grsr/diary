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

## 1. Hosting — automatic

Every push to `main` runs a GitHub Actions workflow (`.github/workflows/deploy.yml`)
that turns on GitHub Pages (first time only) and publishes the site. You don't
need to touch any settings. After the first push, wait ~1–2 minutes and the app
is live at:

```
https://grsr.github.io/diary/
```

You can watch progress on the repo's **Actions** tab. (If your account has Actions
disabled, enable **Settings → Actions → Allow all actions**, or set
**Settings → Pages → Deploy from a branch → `main` / root** as a manual fallback.)

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
  **Run Immediately** → add the **Open URLs** action and enter
  `https://grsr.github.io/diary/`. (Use **Open URLs**, *not* “Open App” —
  installed web apps don’t appear in the Open App list.) Now your phone opens the
  diary for you every evening.

(There's also an in-app notification toggle that fires while the app has been
opened that day.)

---

## Your usual day + catching up

Because an all-day headache is the norm, new days start **pre-filled with your
usual headache** — so a typical day is a single tap on **Save**. Had a good day?
Just tap **No**. Adjust the default (duration/severity, or turn it off) under
**Settings → Your usual day**.

If you miss a day, the **Today** tab shows a "**N earlier days not logged**"
banner. Tap **Catch up** to fill them fast: **Fill all with my usual headache**,
or per day choose **Usual / None / Edit**.

## Apple Health (sleep) via a Shortcut

Web apps can't read Apple Health directly, but you can push data in. Build a
Shortcut that reads **Sleep Analysis** from Health and opens the diary with it:

```
https://grsr.github.io/diary/?sleep=<hours>
```

The app fills that day's sleep in and saves automatically, then cleans the URL.
It also accepts `?date=YYYY-MM-DD` and `?steps=<count>` (ticks "exercise" if you
were active). Step-by-step setup is in **Settings → Apple Health**.

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
