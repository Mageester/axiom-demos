# Axiom Demo Platform

Axiom Demo Platform is the shared repository for premium business website demos.

The platform currently supports three deployable demos, all built from the same shared repo:

- `restaurant`
- `landscaping`
- `roofing`

## Core Principles

- Keep shared primitives in `src/components/ui` and `src/design-system`.
- Keep shared shell/layout in `src/components/layout`.
- Keep niche-specific content in `src/content/*`.
- Keep demo wiring and active selection in `src/config/demoConfig.ts`.
- Avoid hardcoding niche values in shared components.

## Repository Structure

```text
src/
  app/
    App.tsx                    # Route map and app shell mounting
  components/
    layout/                    # Shared page shell (nav/footer/main)
    ui/                        # Shared primitives (Button, Card, Section, Hero)
  config/
    routes.ts                  # Route contract and nav paths
    siteConfig.ts              # Runtime settings (limits, locale, map)
    demoConfig.ts              # Active demo config + provider
  content/
    types.ts                   # Shared content contract used by demo page sets
    restaurantContent.ts       # Restaurant demo payload
    landscapingContent.ts      # Landscaping demo payload
    roofingContent.ts          # Roofing demo payload
  design-system/
    tokens.css                 # Variables (color, type, spacing)
    base.css                   # Global reset/base
    components.css             # Component and layout classes
  pages/
    *.tsx                      # Restaurant page set
    landscaping/               # Landscaping page set
    roofing/                   # Roofing page set
```

## Route Contract

Each demo config maps these canonical route keys to niche-specific paths:

- `/`
- `/menu` (or `/services`)
- `/about`
- `/gallery` (or `/projects`)
- `/contact`
- `/reservations` (or `/quote` or `/inspection`)

Routing/nav definitions live in `src/config/routes.ts` and are selected by the active demo config.

## Shared vs Niche Boundaries

### Shared

- `src/components/ui/*`
- `src/components/layout/*`
- `src/design-system/*`
- `src/config/routes.ts`

### Demo-specific

- `src/content/restaurantContent.ts`
- `src/content/landscapingContent.ts`
- `src/content/roofingContent.ts`
- `src/pages/landscaping/*`
- `src/pages/roofing/*`
- Copy, service entries, team details, address, phone, email, policies, project collections

Shared components must only consume the active content through `DemoConfigContext`.

## Brand Separation Contract

Demo pages share engineering primitives, but surface brand expression must stay demo-specific.

### Shared under the hood

- Routing contract and page shell mounting (`App.tsx`, `routes.ts`)
- Layout primitives (`SiteNav`, `SiteFooter`, `PageLayout`)
- UI primitives (`Button`, `Card`, `Section`, `PageHero`)
- Design token plumbing (`tokens.css`, `base.css`, `components.css`)

### Demo-specific at the surface

- Brand voice and business copy (`src/content/*`)
- Typography tone, color palette, CTA shape, and rhythm via `data-demo-theme` + `data-demo-brand`
- Hero/media composition and atmosphere by niche page set
- Contact/legal identity for each fictional business

The rule: reuse components, not visual identity.

## Selecting The Active Demo

Set `VITE_DEMO_KEY` in your environment:

```bash
VITE_DEMO_KEY=restaurant
# or
VITE_DEMO_KEY=landscaping
# or
VITE_DEMO_KEY=roofing
```

Resolver behavior:

- If `VITE_DEMO_KEY` is valid, it wins.
- If `VITE_DEMO_KEY` is missing, the app next checks the runtime hostname.
- Recognized hostnames currently include:
  - `restaurant.getaxiom.ca`
  - `landscaping.getaxiom.ca`
  - `roofing.getaxiom.ca`
- If `VITE_DEMO_KEY` is unknown, the app logs a loud console error and prefers a recognized hostname over the default fallback.
- If neither env nor hostname resolves a demo, fallback is `restaurant`.
- Valid values are currently `restaurant`, `landscaping`, and `roofing`.

## Adding Additional Demos

1. Create a new content payload in `src/content/` that satisfies `DemoContent`.
2. Add a new page set under `src/pages/<demo-key>/`.
3. Add route + nav definitions in `src/config/routes.ts`.
4. Register the demo in `src/config/demoConfig.ts`.
5. Keep shared files free of niche strings and niche business rules.

## Local Development

```bash
npm install
npm run dev
```

Optional local selection:

1. Copy `.env.example` to `.env.local`.
2. Set `VITE_DEMO_KEY` to `restaurant`, `landscaping`, or `roofing`.

## Quality Checks

```bash
npm run lint
npm run build
npm run build:all
```

## Deployment

For immediate multi-subdomain deployment, use separate Cloudflare Pages projects.

Why Pages projects are the right approach:

- each Pages project builds one static `dist` output
- each demo needs a different build-time `VITE_DEMO_KEY`
- each demo needs its own custom domain and release lifecycle

The app now also has a hostname-based runtime safety net, so a missed or invalid `VITE_DEMO_KEY` does not silently collapse every subdomain to restaurant. Separate Pages projects are still the recommended setup because they keep releases, custom domains, and rollback decisions isolated per demo.

`wrangler.jsonc` remains useful for Worker-based local preview or alternate deployment flows, but it is not the recommended multi-subdomain setup for these branded demo sites.

## Cloudflare Pages Deployment Matrix

### Shared settings for all three Pages projects

- Repo: `Mageester/axiom-demos`
- Branch: the branch that contains the released demo state you want live
  - current working branch in this repo: `codex/landscaping-launch-pass`
- Framework preset: `None` or `Vite` are both acceptable
- Build command: use the dedicated per-demo script listed below
- Build output directory: `dist`
- Root directory: repository root
- Node compatibility: no extra runtime bindings required

### Restaurant Pages project

- Pages project name: `axiom-demos-restaurant`
- Repo: `Mageester/axiom-demos`
- Branch: the release branch that contains the restaurant deployment you want live
- Build command: `npm run build:restaurant`
- Output directory: `dist`
- Required env vars:
  - none if you use the recommended build command above
  - equivalent manual override: `VITE_DEMO_KEY=restaurant`
- Custom domain: `restaurant.getaxiom.ca`
- Expected route profile:
  - `/menu`
  - `/gallery`
  - `/reservations`

### Landscaping Pages project

- Pages project name: `axiom-demos-landscaping`
- Repo: `Mageester/axiom-demos`
- Branch: the release branch that contains the landscaping deployment you want live
- Build command: `npm run build:landscaping`
- Output directory: `dist`
- Required env vars:
  - none if you use the recommended build command above
  - equivalent manual override: `VITE_DEMO_KEY=landscaping`
- Custom domain: `landscaping.getaxiom.ca`
- Expected route profile:
  - `/services`
  - `/projects`
  - `/quote`

### Roofing Pages project

- Pages project name: `axiom-demos-roofing`
- Repo: `Mageester/axiom-demos`
- Branch: the release branch that contains the roofing deployment you want live
- Build command: `npm run build:roofing`
- Output directory: `dist`
- Required env vars:
  - none if you use the recommended build command above
  - equivalent manual override: `VITE_DEMO_KEY=roofing`
- Custom domain: `roofing.getaxiom.ca`
- Expected route profile:
  - `/services`
  - `/projects`
  - `/inspection`

## Manual Cloudflare Steps After Code Changes

1. Create three separate Cloudflare Pages projects.
2. Connect each project to the same repo and branch.
3. Set the project-specific build command:
   - `npm run build:restaurant`
   - `npm run build:landscaping`
   - `npm run build:roofing`
4. Set the output directory to `dist` for all three.
5. Attach the correct custom domain to each project:
   - `restaurant.getaxiom.ca`
   - `landscaping.getaxiom.ca`
   - `roofing.getaxiom.ca`
6. Trigger an initial deploy for each project.
7. Verify each subdomain resolves to the correct demo and route set.

## If Every Subdomain Shows Restaurant

Check these in order:

1. Confirm the deployment is running a build that includes the current `demoConfig.ts` hostname resolver.
2. Confirm the intended subdomain is actually attached to the expected Cloudflare Pages project.
3. Confirm the project build command matches the demo:
   - `npm run build:restaurant`
   - `npm run build:landscaping`
   - `npm run build:roofing`
4. If you are using raw env-based builds instead of the dedicated scripts, confirm `VITE_DEMO_KEY` is set correctly per project.
5. Redeploy after any Cloudflare project or custom-domain change.

## Local Verification Commands

```bash
npm run lint
npm run build:restaurant
npm run build:landscaping
npm run build:roofing
```
