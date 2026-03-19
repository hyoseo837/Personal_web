# GEMINI.md - Personal Web Project Context

This file provides context and instructions for AI agents working on Hyoseo Lee's personal website project.

## Project Overview

- **Owner:** Hyoseo Lee (Computer Science student at the University of Waterloo)
- **Domain:** [hyoseo.dev](https://hyoseo.dev)
- **Purpose:** A personal digital garden, portfolio, and "thinking" space.
- **Tech Stack:**
    - **Framework:** [Astro](https://astro.build/) (v6.0+)
    - **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4.0+)
    - **Icons:** [Lucide Astro](https://lucide.dev/guide/packages/lucide-astro)
    - **Language:** TypeScript
- **Architecture:**
    - **Data-Driven Content:** Most content (projects, links, stack, tastes, thoughts) is managed as TypeScript objects in `src/data/`.
    - **Components:** Modular Astro components in `src/components/`.
    - **Layouts:** Common page structures in `src/layouts/`, primarily `BaseLayout.astro`.
    - **Pages:** Route-based pages in `src/pages/`.

## Project Structure

```text
/
├── public/              # Static assets (favicons, etc.)
├── src/
│   ├── components/      # Astro components (Header, Footer, etc.)
│   ├── data/            # TypeScript data files (The "Content")
│   ├── layouts/         # Page layouts (BaseLayout.astro)
│   ├── pages/           # Route-specific Astro files
│   ├── scripts/         # Extracted client-side TypeScript logic
│   └── styles/          # Global CSS and Tailwind directives
├── astro.config.mjs     # Astro configuration
├── package.json         # Dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

## Building and Running

All commands are run from the project root:

- **Install Dependencies:** `npm install`
- **Development Server:** `npm run dev` (Starts at `localhost:4321`)
- **Production Build:** `npm run build`
- **Preview Build:** `npm run preview`
- **Astro CLI:** `npm run astro ...` (e.g., `npm run astro check`)

### Development Conventions

### Content Updates
- To update projects, thoughts, or other lists, modify the corresponding file in `src/data/`.
- Icons are imported from `lucide-astro` and passed as components in the data objects.
- **Data Integrity:** Run `npm run test` after updating data to ensure all cross-links and connections are valid. This uses a regex-based script in `src/scripts/check-data.ts`.

### Component Design
- Use **Tailwind CSS 4.0** utility classes for styling.
- Prefer **Vanilla CSS** patterns within Tailwind when complex animations or specific layouts are needed (see `src/styles/global.css`).
- Components should be kept small and focused.
- **Script Extraction:** For complex client-side logic, extract scripts into `src/scripts/` and reference them in the component using `<script src="../scripts/filename.ts"></script>`. This improves IDE support and clarity.

### Styling
- The project uses a "stone" and "orange/amber" themed color palette.
- Typography: Uses 'Inter' for sans-serif and 'Newsreader' for serif (main text).
- Responsive design is a priority (check `sm:`, `md:`, `lg:` prefixes).

### SEO and Metadata
- Always use `BaseLayout.astro` for pages to ensure consistent metadata, Open Graph tags, and structure.
- Title and description should be provided via props to `BaseLayout`.

## User Profile (Hyoseo Lee)
- **Philosophies:** "Be happy, Be unique, Be useful", "Both Infinity Are Connected", "Optimistic Nihilism", "Attack the Axiom".
- **Interests:** Patterns, abstract structures, philosophy, software engineering.
- **Education:** CS at University of Waterloo (Co-op).
