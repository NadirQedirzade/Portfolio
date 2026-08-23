# Nadir Qədirzadə — Portfolio

A minimalist, dark-themed portfolio built with Next.js 14 (App Router + TypeScript), Tailwind CSS, and Framer Motion. Design direction is inspired by ulrychkristian.cz — generous whitespace, restrained motion, a serif/mono type pairing — with a recurring "engineering blueprint" motif (grid backdrop, corner brackets, index numbers) that nods to Nadir's mechatronics background.

## File architecture

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Fonts (Fraunces / Inter / JetBrains Mono), metadata
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
- The accent color (`#6FE7DD`), fonts, and grid/bracket motif are defined once in `tailwind.config.ts` / `globals.css` — change them there to re-theme the whole site.
