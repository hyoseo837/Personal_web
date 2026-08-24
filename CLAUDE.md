# CLAUDE.md

## Commands

`npm run test` runs `src/scripts/check-data.ts`, a regex-based data integrity
check over `src/data/` - it is NOT a unit-test runner. `vitest` is in
devDependencies but nothing is wired to it, and there is no linter.

**Always run `npm run test` after editing `src/data/*.ts`** to catch duplicate IDs.

## Architecture

Primary deploy is Cloudflare Pages from `dist/`.

Two content systems coexist: TypeScript data objects in `src/data/` power the
portfolio pages, and markdown posts in `src/content/posts/` power `/blog/` via
Astro content collections. Every `src/data/` item needs a stable, unique `id`
(enforced by `check-data.ts`); the posts glob deliberately excludes
underscore-prefixed files.

Astro v6 glob loader IDs include the file extension (e.g. `TIL/post.md`) -
`src/utils/posts.ts` centralizes slug extraction and date sorting because of it.

`PostLayout.astro` forces code blocks to a dark `stone-900` background, so
`astro.config.mjs` uses a single Shiki theme (`night-owl`) rather than the dual
`themes` object - the site is light-mode only (`BaseLayout.astro`:
`bg-stone-50`), so a dual-theme config would render light-theme colors against
the dark code block background.

## Conventions

- Coding style per the project owner: spaces for indentation, snake_case naming in data files.
- When adding a new project/thought/taste, pick a stable and unique `id`.
- Do not edit `dist/` - it's build output.
