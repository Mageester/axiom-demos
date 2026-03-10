# Axiom Demo Platform

Axiom Demo Platform is the shared repository for premium business website demos.

The platform now supports multiple flagship demos (restaurant and landscaping) while reusing shared UI, layout, and design-system layers.

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
  design-system/
    tokens.css                 # Variables (color, type, spacing)
    base.css                   # Global reset/base
    components.css             # Component and layout classes
  pages/
    *.tsx                      # Restaurant page set
    landscaping/               # Landscaping page set
```

## Route Contract

Each demo config maps these canonical route keys to niche-specific paths:

- `/`
- `/menu` (or `/services`)
- `/about`
- `/gallery` (or `/projects`)
- `/contact`
- `/reservations` (or `/quote`)

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
- `src/pages/landscaping/*`
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
```

Resolver behavior:

- If `VITE_DEMO_KEY` is missing, fallback is `restaurant`.
- If `VITE_DEMO_KEY` is unknown, the app logs a loud console error and falls back to `restaurant`.
- Valid values are currently `restaurant` and `landscaping`.

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

## Quality Checks

```bash
npm run lint
npm run build
```

## Deployment

Configured for Cloudflare Workers with SPA fallback:

- Config: `wrangler.jsonc`
- Build: `npm run build`
- Deploy: `npm run deploy`

For subdomain deployments (for example `restaurant.getaxiom.ca`), bind the domain at the Worker/zone level and keep route paths relative (already enforced in this repo).

## Cloudflare Multi-Subdomain Checklist

Use the same repository for both demos, but separate deployment targets (separate Cloudflare projects/Workers), each with its own build-time env.

### 1. Restaurant target (`restaurant.getaxiom.ca`)

1. Create or open the Cloudflare deployment target dedicated to restaurant.
2. Connect it to this repo/branch.
3. Set build command to include demo key:
   - `VITE_DEMO_KEY=restaurant npm run build`
4. Set output directory:
   - `dist`
5. Attach custom domain:
   - `restaurant.getaxiom.ca`
6. Deploy and verify nav/routes are restaurant-specific (`/menu`, `/gallery`, `/reservations`).

### 2. Landscaping target (`landscaping.<your-domain>`)

1. Create or open a second Cloudflare deployment target dedicated to landscaping.
2. Connect it to the same repo/branch.
3. Set build command:
   - `VITE_DEMO_KEY=landscaping npm run build`
4. Set output directory:
   - `dist`
5. Attach custom domain for landscaping (for example `landscaping.getaxiom.ca`).
6. Deploy and verify nav/routes are landscaping-specific (`/services`, `/projects`, `/quote`).

### 3. Critical isolation rule

Never run both subdomains from one Cloudflare target with one shared build env.  
Each subdomain must have its own target/project (or environment) with its own `VITE_DEMO_KEY`.
