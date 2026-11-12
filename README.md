# Nadir Qədirzadə — Portfolio

A minimalist, dark-themed portfolio built with Next.js 14 (App Router + TypeScript), Tailwind CSS, and Framer Motion. Positioned as a Data Analysis / Data Science portfolio with an engineering background in support. Design direction: Apple-level restraint combined with an engineering-notebook feel — graphite dark mode and an off-white, faintly ruled light mode (designed separately, not inverted), the system font for text with monospace reserved for labels and the build log, 1px borders instead of cards or shadows, one calm accent, and spring-based motion that respects `prefers-reduced-motion`.

## File architecture

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Metadata, viewport, MotionProvider (no remote fonts)
│   │   ├── page.tsx          # Composes all sections
│   │   └── globals.css       # Base styles, scrollbar, bracket motif, reduced-motion
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky nav, mobile menu
│   │   ├── Hero.tsx          # Name, headline, badges, contact CTAs
│   │   ├── About.tsx         # Bio + skills "build log"
│   │   ├── Projects.tsx      # SmartCityPulse / MedScan AI / AbituriyentX cards
│   │   ├── Achievements.tsx  # Feature photos + 16-certificate lightbox grid
│   │   ├── Resume.tsx        # CV call-to-action
│   │   ├── Footer.tsx
│   │   └── SectionHeading.tsx
│   └── lib/
│       └── data.ts           # ALL site content lives here — edit this file first
├── public/
│   ├── images/                # award-cash-prize.jpg, award-pitch.jpg
│   └── certificates/          # cert-01.jpg … cert-16.jpg
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Editing content

Everything text-based (name, bio, badges, project descriptions, links) lives in **`src/lib/data.ts`**. You won't need to touch the components to update copy, swap a link, or add a project.

## Images

All images you provided are already placed and wired up:

- `public/images/award-cash-prize.jpg` and `public/images/award-pitch.jpg` — the two featured achievement photos.
- `public/certificates/cert-01.jpg` … `cert-14.jpg` — your 14 certificates, in the order and with the titles listed in `src/lib/data.ts` (`certificates` array). To reorder, relabel, or swap one out, edit that array — the filenames don't need to change.

Project preview thumbnails are pulled automatically from YouTube (`img.youtube.com/vi/<id>/hqdefault.jpg`) using the video URLs in `data.ts` — no local files needed for those.

## Run locally

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

`npm run build` must complete with zero errors before deploying.

## Deploy to Vercel

**Option A — CLI**
```bash
npm i -g vercel
vercel
```
Follow the prompts (link or create a project); Vercel auto-detects Next.js and deploys with the correct build settings.

**Option B — Git + Dashboard**
1. Push this folder to a GitHub repo.
2. Go to vercel.com → **Add New… → Project** → import the repo.
3. Framework preset: **Next.js** (auto-detected). No env vars are required.
4. Click **Deploy**.

Every subsequent push to the connected branch redeploys automatically.

## Notes

- All external links (`GitHub`, `LinkedIn`, project videos, resume, socials) use `target="_blank" rel="noopener noreferrer"`.
- `prefers-reduced-motion` is respected globally (see `globals.css`).
- Design tokens live in two places: colors and the font stack in `tailwind.config.ts`; the type scale (`.t-*`), buttons (`.btn*`), spring easing and accessibility media queries in `src/app/globals.css`. Motion tokens (springs, easing, reveal) are in `src/lib/motion.ts`; shared dialog behaviour (focus trap, Esc, scroll lock) is in `src/lib/useDialog.ts`.
- **Light / dark mode:** both palettes are defined once as CSS variables at the top of `src/app/globals.css`; `<html data-theme>` selects one. `src/components/ThemeToggle.tsx` is the switch in the nav bar. The first visit follows the OS setting, an explicit choice is saved in `localStorage` and wins afterwards, and a tiny inline script in `layout.tsx` applies the theme before first paint so there is no flash. To adjust a theme's colors, edit its variable block — nothing else.
- **Favicon:** `src/app/icon.png` is a true circle with transparent corners (the logo sits inside with padding so nothing is clipped). `apple-icon.png` stays square on purpose — iOS applies its own rounded mask to home-screen icons.
- No custom web fonts are loaded — the site works offline and renders Azerbaijani characters (ə, ı, ş…) natively on every platform.

## Things you need to provide

- **Profile photo.** Put a file named `profile.jpg` (or `.jpeg` / `.png` / `.webp` / `.avif`) in `public/images/`. The hero picks it up automatically (shown in monochrome, color on hover). Until then a quiet fallback frame with the NQ mark is shown on large screens only. In production, rebuild after adding it (`npm run build`); `npm run dev` picks it up immediately. A portrait crop (4:5) works best.
- **Projects.** Two renderings, both driven by `src/lib/data.ts`. Projects without a `videoUrl` (case studies with GitHub links) are rendered by one component, `ProjectEntry` in `src/components/Projects.tsx`, on one grid — number + labels | title + description | links — with no images, so entries cannot drift apart. Projects with a `videoUrl` are rendered as YouTube media tiles (thumbnail, play button, title, role, description) beneath them. Labels come from a project's `tags`; links appear only for URLs that exist in the data (`caseStudy`, `githubUrl`, `videoUrl`).
