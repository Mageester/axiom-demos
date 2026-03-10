# Axiom Demo Platform

Axiom Demo Platform is the shared repository for premium business website demos.

The current active demo is a restaurant flagship, but the architecture is organized so future demos can reuse shared UI, layout, and design system layers without forking one-off projects.

## Core Principles

- Keep shared primitives in `src/components/ui` and `src/design-system`.
- Keep shared shell/layout in `src/components/layout`.
- Keep niche-specific content in `src/content/*`.
- Keep active demo wiring in `src/config/demoConfig.tsx`.
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
    demoConfig.tsx             # Active demo config + provider
  content/
    types.ts                   # Generic DemoContent schema
    restaurantContent.ts       # Restaurant-specific content payload
  design-system/
    tokens.css                 # Variables (color, type, spacing)
    base.css                   # Global reset/base
    components.css             # Component and layout classes
  pages/
    HomePage.tsx
    MenuPage.tsx
    AboutPage.tsx
    GalleryPage.tsx
    ContactPage.tsx
    ReservationsPage.tsx
```

## Route Contract

Every flagship demo should include these public routes:

- `/`
- `/menu`
- `/about`
- `/gallery`
- `/contact`
- `/reservations`

Routing and nav labels are defined in `src/config/routes.ts`.

## Shared vs Niche Boundaries

### Shared

- `src/components/ui/*`
- `src/components/layout/*`
- `src/design-system/*`
- `src/config/routes.ts`

### Niche-specific

- `src/content/restaurantContent.ts`
- Copy, menu items, team details, address, phone, email, policies, gallery collections

Shared components must only consume the active content through `useDemoConfig()`.

## Adding Demo Two

1. Create a new content payload in `src/content/` that satisfies `DemoContent`.
2. Add a new demo config object in `src/config/demoConfig.tsx`.
3. Point `DemoConfigProvider` to the new config (or add env-based selection).
4. Reuse existing pages/components where schema-compatible.
5. Only create new page sections/components when they are genuinely cross-demo reusable or explicitly demo-specific.
6. Keep shared files free of niche strings and niche business rules.

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
