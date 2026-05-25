# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

| Command | Action |
| --- | --- |
| `npm run dev` | Start Astro dev server at `localhost:4321` |
| `npm run build` | Build static site to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run test` | Run `src/scripts/check-data.ts` - a regex-based data integrity check over `src/data/` |

Node >= 22.12.0 is required (enforced in `package.json`). There is no linter and no unit-test runner wired up - `npm run test` is exclusively the data integrity checker.

## Architecture

This is a static Astro v6 + Tailwind v4 + TypeScript site. Primary deploy is Cloudflare Pages from `dist/`.

### Two content systems coexist

1. **TypeScript data objects in `src/data/`** power the portfolio side of the site (`projects.ts`, `thoughts.ts`, `tastes.ts`, `stack.ts`, `now.ts`). These are imported directly by Astro pages (`src/pages/projects.astro`, `thinking.astro`, etc.). Every item has a stable `id` string, which `check-data.ts` verifies is unique within each collection.
2. **Markdown posts in `src/content/posts/`** power `/blog/`, via Astro's content collections. The collection schema is defined in `src/content.config.ts` and loaded by a glob pattern that excludes underscore-prefixed files. Posts live in category subdirectories (`TIL/`, `brain-dumps/`, `dev-log/`, `tech-news/`) and frontmatter requires `title`, `date`, `category`, `topic`, `area`, `tags`; `summary` is optional.

**Always run `npm run test` after editing `src/data/*.ts`** to catch duplicate IDs.

### Blog post layout

`src/layouts/PostLayout.astro` is the single post shell; `src/pages/blog/[slug].astro` is the dynamic route that looks up the entry from the `posts` collection. Helpers in `src/utils/posts.ts` centralize slug extraction (Astro v6 glob loader IDs include the extension, e.g. `TIL/post.md`) and date sorting.

The post layout forces code blocks to a dark `stone-900` background, so `astro.config.mjs` uses a single Shiki theme (`night-owl`) rather than the dual `themes` object - the site itself is light-mode only (`BaseLayout.astro`: `bg-stone-50`), so a dual-theme Shiki config would render light-theme colors against the dark code block background.

Markdown pipeline plugins (in `astro.config.mjs`): `remark-math` + `rehype-katex` for math, `remark-toc` for table of contents, `remark-collapse` (configured to collapse sections whose heading matches `Table of contents`). KaTeX CSS is loaded globally in `BaseLayout.astro`.

### Styling

Tailwind v4 via the Vite plugin (`@tailwindcss/vite`), plus `@tailwindcss/typography` for the `prose` classes used in `PostLayout.astro`. Global styles in `src/styles/global.css`. Icons come from `lucide-astro` (imported per-component, not globally).

## Conventions

- Coding style per the project owner: spaces for indentation, snake_case naming in data files.
- When adding a new project/thought/taste, pick a stable and unique `id`.
- Do not edit `dist/` - it's build output.
