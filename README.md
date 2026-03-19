# hyoseo.dev

Hyoseo Lee's personal digital garden, portfolio, and "thinking" space.

## 🚀 Overview

This is the source code for [hyoseo.dev](https://hyoseo.dev). It serves as a personal website, a repository for projects, and a space for philosophical thoughts and abstract structures.

## 🛠 Tech Stack

- **Framework:** [Astro](https://astro.build/) (v6.0+)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4.0+)
- **Icons:** [Lucide Astro](https://lucide.dev/)
- **Language:** TypeScript

## 📂 Project Structure

- `src/data/`: The "Content" of the site. Managed as TypeScript objects.
- `src/components/`: Modular Astro components (Header, Footer, etc.).
- `src/layouts/`: Common page structures, primarily `BaseLayout.astro`.
- `src/pages/`: Route-specific Astro files.
- `src/scripts/`: Client-side logic and data integrity checks.

## 🧞 Commands

All commands are run from the project root:

| Command | Action |
| :--- | :--- |
| `npm install` | Installs dependencies |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run test` | Run data integrity checks (cross-links, etc.) |

## 📝 Updating Content

Most content is data-driven. To update projects, thoughts, or links:
1. Navigate to `src/data/`.
2. Edit the corresponding TypeScript file.
3. Run `npm run test` to ensure all cross-links and connections are valid.

## 👤 About the Author

**Hyoseo Lee**
- CS student at the University of Waterloo (Co-op).
- Philosophies: *Be happy, Be unique, Be useful*, *Both Infinity Are Connected*, *Optimistic Nihilism*, *Attack the Axiom*.
