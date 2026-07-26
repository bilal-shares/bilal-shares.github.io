# Social.bil

Premium multi-page Social.bil website built with Next.js, React, and Tailwind CSS. The site is statically exported and deployed to GitHub Pages at [socialslay.me](https://socialslay.me).

No animation libraries are used — motion is CSS-driven with small, targeted scripts, which keeps the page free of the hydration flash that JS-driven scroll reveals cause.

## Pages

- `/` - conversion-focused homepage
- `/services/` - detailed service cards
- `/pricing/` - every Instagram package on one page
- `/proofs/` - searchable/filterable proof gallery with lightbox
- `/contact/` - WhatsApp-first contact page and brief builder

## Editable Content

- Business links, services, FAQs, platforms, testimonials: `data/site.ts`
- Instagram pricing packages: `data/pricing.ts`
- Proof metadata/categories: `data/proofs.ts`
- Source proof optimizer: `scripts/optimize-proofs.mjs`
- Social card image generator: `scripts/make-og.mjs` (`npm run make:og`)

## Design System

All colour lives in `app/globals.css` as CSS custom properties:

- `--ig-*` — the Instagram brand ramp (`#405DE6` → `#FCAF45`), plus `--ig-gradient`
- `--whatsapp` (`#25D366`) — reserved for WhatsApp actions only. Use the
  `.button-whatsapp`, `.whatsapp-text`, `.whatsapp-tile` and `.whatsapp-fab`
  classes rather than hard-coding the colour
- Light/dark surfaces follow Instagram's own UI values (`#FAFAFA`/`#262626` and
  `#000000`/`#F5F5F5`)

Custom classes live in `@layer components` so Tailwind utilities (`hidden`,
`sm:flex`, …) always win over them.

## Local Development

```bash
npm install
```

```bash
npm run dev
```

Open `http://127.0.0.1:3000`.

## Production Build

```bash
npm run lint
```

```bash
npm run build
```

The production export is generated in `out/`.

## Proof Images

The original `.jpg` proof files were converted into optimized WebP assets:

- Thumbnails: `public/proofs/thumb/`
- Fullscreen versions: `public/proofs/full/`

To regenerate them from the original proof folder:

```bash
npm run optimize:proofs
```

## GitHub Pages Deployment

`.github/workflows/deploy.yml` builds on every push to `main`/`master` and
publishes `out/` to GitHub Pages.

The custom domain is set by `public/CNAME` (`socialslay.me`), which is copied
into the export on every build — so the domain survives redeploys. The workflow
also skips the project-pages base path whenever that file exists.

DNS should point at GitHub Pages:

- `A` records for the apex → `185.199.108.153`, `185.199.109.153`,
  `185.199.110.153`, `185.199.111.153`
- `CNAME` for `www` → `<owner>.github.io`

## Cloudflare Pages (alternative)

- Framework preset: `Next.js` or `None`
- Build command: `npm run build`
- Build output directory: `out`
- Node version: `22` via `.nvmrc`

```bash
npm run deploy:cloudflare
```

`wrangler.jsonc` sets `pages_build_output_dir = "./out"`, and `public/_headers`
carries baseline security/cache headers (Cloudflare only — GitHub Pages ignores
it).
