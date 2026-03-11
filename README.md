# NovaLink Site (Astro + Tailwind + TypeScript)

Repo-first marketing website for **NovaLink Technologies**, built as a full replacement for the old WordPress site.

This version is intentionally static, maintainable, and easy to edit by future AI coding agents.

## Tech Stack

- Astro 5
- TypeScript (via Astro)
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- No CMS
- No page builder
- No SSR/runtime lock-in

## Project Structure

```text
.
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   └── og-default.svg
├── src/
│   ├── components/
│   │   ├── CTASection.astro
│   │   ├── ContactWhatsAppCTA.astro
│   │   ├── FAQAccordion.astro
│   │   ├── Footer.astro
│   │   ├── HeroSection.astro
│   │   ├── Navbar.astro
│   │   ├── ServicesGrid.astro
│   │   └── TrustSection.astro
│   ├── config/
│   │   └── site.ts
│   ├── content/
│   │   └── site-data.ts
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── pages/
│   │   ├── about.astro
│   │   ├── atome.astro
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   ├── privacy.astro
│   │   ├── robots.txt.ts
│   │   ├── services.astro
│   │   ├── sitemap.xml.ts
│   │   └── terms.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Routes Included

- `/`
- `/services`
- `/about`
- `/contact`
- `/atome` (future dedicated landing page placeholder)
- `/privacy` (placeholder)
- `/terms` (placeholder)
- `/robots.txt`
- `/sitemap.xml`

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## Production Build

```bash
npm run build
npm run preview
```

Static output is generated into `dist/`.

## Cloudflare Pages Deployment

Use GitHub integration with Cloudflare Pages.

- Framework preset: `Astro` (or `None`, both are fine for static build)
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `20` or newer recommended

No Cloudflare adapter is required for this setup.

### Troubleshooting: `@astrojs/cloudflare` install error

If your build logs show:

```text
npm i @astrojs/cloudflare@^13.x wrangler@^4.x
ERESOLVE unable to resolve dependency tree
peer astro@"^6.0.0-alpha.0" from @astrojs/cloudflare@13.x
```

it means the adapter version is incompatible with this project (`astro@5`).

- For this static site: do **not** run `astro add cloudflare`; keep build command as `npm run build`.
- Only if you intentionally switch to SSR on Cloudflare: use an Astro 5 compatible adapter, e.g.:

```bash
npm i @astrojs/cloudflare@^12.6.13
```

## SEO and Metadata Defaults

Configured in `src/layouts/MainLayout.astro` and `src/config/site.ts`:

- page title/description defaults
- canonical tags
- Open Graph + Twitter card defaults
- favicon references
- robots and sitemap endpoints

## Important Content Notes

- `/atome` is intentionally a placeholder page scaffold.
- BM-first campaign copy insertion points are marked with `TODO(BM-first copy)` comments in `src/pages/atome.astro`.
- Proof/case study placeholders are included and should be replaced with validated metrics before launch.

## Design Decisions (Brief)

- **Component-first structure**: shared sections keep content updates fast and consistent.
- **Static-first architecture**: faster deploys, lower complexity, no runtime dependencies.
- **Centralized business content**: navigation, services, FAQs, and proof metrics are in `src/content/site-data.ts`.
- **Centralized site settings**: domain, contact, and SEO defaults are in `src/config/site.ts`.

## Quick Content Update Guide

1. Update service and FAQ copy in `src/content/site-data.ts`.
2. Update contact/domain metadata in `src/config/site.ts`.
3. Refine route-specific copy in `src/pages/*.astro`.
4. Replace placeholder legal content in `/privacy` and `/terms`.

## Domain Note

Primary site URL is currently set to:

- `https://novalink-technologies.com`

If this changes, update:

- `astro.config.mjs` (`site`)
- `src/config/site.ts` (`siteUrl`)
