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

## Selecting The Active Demo

Set `VITE_ACTIVE_DEMO` in your environment:

```bash
VITE_ACTIVE_DEMO=restaurant
# or
VITE_ACTIVE_DEMO=landscaping
```

If unset, the app defaults to `landscaping`.

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
