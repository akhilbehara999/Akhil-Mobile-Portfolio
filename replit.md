# Akhil Portfolio

An Android-style personal portfolio that introduces Akhil through an animated mobile-first experience across data, AI, and engineering.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/akhil-portfolio/src/App.tsx` — responsive screen state, charts, navigation, and Coming Soon views
- `artifacts/akhil-portfolio/src/index.css` — portfolio color tokens, typography, responsive layout, and motion
- `artifacts/akhil-portfolio` — the deployable React + Vite portfolio artifact

## Architecture decisions

- The portfolio is frontend-only with hardcoded showcase data; the API server remains available for future projects.
- The app conditionally mounts either the mobile experience or desktop Coming Soon screen so Recharts never measures hidden containers.
- Navigation uses local React state instead of a router because the three screens are intentionally a single app surface.

## Product

- Mobile visitors get an Android-inspired portfolio home screen with animated journey, projects, and skills visualizations.
- Workspace and Contact are represented as polished Coming Soon states with return-to-home interactions.
- Tablet and desktop visitors see a centered Coming Soon message for the future full experience.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
