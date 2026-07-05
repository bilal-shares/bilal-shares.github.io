# SocialSlay

Premium multi-page SocialSlay website built with Next.js, React, Tailwind CSS, Framer Motion, GSAP, and Lenis. The site is statically exported for Cloudflare Pages.

## Pages

- `/` - conversion-focused homepage
- `/services/` - detailed service cards
- `/pricing/` - editable Instagram pricing
- `/proofs/` - searchable/filterable proof gallery with lightbox
- `/contact/` - WhatsApp-first contact page and brief builder

## Editable Content

- Business links, services, FAQs, platforms, testimonials: `data/site.ts`
- Instagram pricing packages: `data/pricing.ts`
- Proof metadata/categories: `data/proofs.ts`
- Source proof optimizer: `scripts/optimize-proofs.mjs`

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run lint
npm run build
```

The production export is generated in `out/`.

## Proof Images

The original `.jpg` proof files were converted into optimized WebP assets:

- Thumbnails: `public/proofs/thumb/`
- Fullscreen versions: `public/proofs/full/`

To regenerate them from the original SocialSlay proof folder:

```bash
npm run optimize:proofs
```

## Cloudflare Pages Deployment

Cloudflare Pages settings:

- Framework preset: `Next.js` or `None`
- Build command: `npm run build`
- Build output directory: `out`
- Node version: `22` via `.nvmrc`

Direct deploy with Wrangler:

```bash
npm run deploy:cloudflare
```

Preview locally through Cloudflare Pages:

```bash
npm run preview:cloudflare
```

The project includes `wrangler.jsonc` with `pages_build_output_dir = "./out"` and `public/_headers` for baseline security/cache headers.
