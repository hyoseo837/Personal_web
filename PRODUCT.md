# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Four audiences, all confirmed as real, in the order they change design decisions:

- **Curious peers and readers** — devs, friends, and people who arrived from a link or a post. They came for one piece of writing and may wander: between notes via wiki-links, from a note into a project, from a project into the log that built it.
- **Co-op recruiters and hiring readers** — screening Hyoseo for a term or a role. They skim for credibility, want to see real work quickly, and need the CV (`public/Hyoseo_Lee_CV.pdf`) to be findable without hunting.
- **Hyoseo himself** — the site is also his thinking space and the place notes and projects get parked and connected. Friction to publish is a real cost; findability of his own old notes is a real benefit.
- **People who found a project** — users of a specific tool (WaterlooWorks Extension, Macro Dashboard) who want to know what it does and where the code lives.

No single audience gets to displace the others. A change that serves recruiters by flattening the writing, or serves the garden by burying the work, is a regression.

## Product Purpose

hyoseo.dev is Hyoseo Lee's personal site: portfolio, dev log, and digital garden in one. It exists to hold, in one place, the things he builds and the things he works out — and to be a place he keeps returning to write.

Success is that the site is **unmistakably his**. A stranger should remember the site itself — its voice and the room it creates — rather than any one page. Credibility, readership, and writing habit all follow from that; none of them is the primary metric.

## Positioning

A CS student's site that reads as one continuous mind rather than three separate products bolted together. The portfolio, the technical logs, and the philosophical notes are not siblings in a nav bar — they cross-reference each other (Obsidian-style `[[wiki-links]]` resolve across the whole post corpus, projects carry the dev logs that produced them, notes carry maturity stages). The unifying claim is that low-level systems, logic, and language keep turning out to be the same problem; the site is the evidence.

Neighboring student portfolios can copy the sections. They cannot truthfully copy the interlinked corpus or the stated position that breadth, not a niche, is the point.

## Operating Context

- Content lives in two systems that coexist by design: TypeScript data objects in `src/data/` (projects, tastes, timeline, stack, links, now) power the portfolio surfaces; markdown in `src/content/posts/` powers `/blog/` through an Astro content collection.
- Post categories in active use: `leetcode`, `dev-log`, `TIL`, `brain-dumps`, `thoughts`. LeetCode solutions were deliberately moved out of the blog stream to `/archive` (with `/blog/leetcode` redirected) so the solved-problem volume does not drown the writing.
- Notes carry garden metadata: `stage` (`seedling` → `growing` → `evergreen`) and an optional `updated` date. The `/thinking` stage filter only appears once notes actually differ in stage.
- Publishing rituals are shell scripts at the repo root: `newpost.sh`, `new_leetcode.sh`, `upload.sh`, `encode-demo.sh`.
- Routes: `/`, `/about`, `/projects`, `/thinking`, `/archive`, `/blog/`.
- Deploy target is Cloudflare Pages from `dist/`; `dist/` is build output and is never edited by hand.

## Capabilities and Constraints

- Astro v6 with Tailwind v4 (`@tailwindcss/vite`), `lucide-astro` icons, static output. Node ≥ 22.12.
- Markdown pipeline: `remark-math` + `rehype-katex`, `remark-toc`, `remark-collapse`, `remark-wiki-link` (Obsidian `|` alias divider; unresolved targets get `.internal.new` so broken links can be styled).
- Astro v6's glob loader includes file extensions in IDs, so `src/utils/posts.ts` centralizes slug extraction and date sorting.
- `npm run test` is `src/scripts/check-data.ts` — a regex data-integrity check, not a unit-test runner. Every `src/data/` item needs a stable unique `id`. Vitest is installed but wired to nothing; there is no linter.
- Project media is one of: a video, an image, or a hand-built CSS-animated demo component in `src/components/demos/` keyed off the project `id`.
- Coding conventions per the owner: spaces for indentation, snake_case in data files.
- **Current implementation facts, not pinned as permanent** (the owner did not commit to preserving these, so treat a change as a decision to raise, not a violation): the site ships light and dark themes, switched by a `data-theme` attribute on `<html>` and implemented by redefining the colour tokens rather than by `dark:` variants; the palette is a cool blueprint grey-blue with a single teal accent; type is IBM Plex as one superfamily across serif, sans and mono; Shiki runs one dark theme (`night-owl`), so code blocks stay dark in both themes; no client-side framework or JS-heavy dependency is present; new surfaces read from `src/data/` and the posts collection rather than hardcoding copy.
- **Retired, do not restore by default:** the earlier warm cream/terracotta, light-mode-only palette. It was deliberately replaced. Treat it as prior state, not as the incumbent to preserve or to react against.
- **Undecided:** whether the "Interactive Knowledge Graph" in `docs/design/.../project_brief_hyoseo_lee_portfolio.md` is still planned. It has never been built; do not present it as existing.

## Brand Commitments

- **Binding:** the three-part motto — *Be happy · Be unique · Be useful* — and the quiet-technology framing behind it ("Technology should not shout. It should sit quietly in the background, making us happy, allowing us to be unique, and serving to be deeply useful."). This is identity, not copy to be rewritten, condensed, or reworded for a new layout.
- Name and domain: Hyoseo Lee, hyoseo.dev.
- Two prior visual worlds are on record and neither is binding: "Lived-In Minimalism" (a well-lit room with one good book on the table) from the original design brief, and "The Working Drawing" (the blueprint sheet) currently shipping. Recorded as history; visual decisions belong to DESIGN.md, not here.
- Voice, as it stands in the shipped copy: first person, plain, unhurried, no salesmanship. Sentences end early. No exclamation, no growth-marketing register.

## Evidence on Hand

- `public/Hyoseo_Lee_CV.pdf` — the real CV.
- ~200 markdown posts under `src/content/posts/`, the large majority LeetCode solutions; the writing categories are smaller and are the ones that carry voice.
- Real projects with real repos in `src/data/projects.ts`, including hand-authored CSS demos. The WaterlooWorks Extension's backend is shut down — its status is recorded honestly in the data and must stay that way.
- Timeline in `src/data/timeline.ts` is factual: born and raised in Anyang, Korea → American School of Warsaw (IB) → Waterloo Honours Mathematics → Republic of Korea Army → Waterloo Honours Computer Science → co-op at Statistics Canada, Ottawa (current).
- Certifications: Microsoft AZ-900, AI-900; UW "WE Accelerate: Azure and AI," Spring 2024.
- Social/contact links in `src/data/links.ts`: GitHub, Instagram, LinkedIn, email, Ko-fi, CV.
- **Absent — never fabricate:** testimonials, client work, user counts, traffic or performance numbers, awards, employer endorsements, or any claim about the Statistics Canada co-op beyond that it is happening.

## Product Principles

1. **One mind, not three products.** Portfolio, log, and garden must keep pointing at each other; anything that isolates a section works against the site's only real claim.
2. **Memorable over optimized.** When a choice trades a conversion-shaped gain against the site's own character, character wins — that is what success was defined as.
3. **Honest state.** Archived projects say archived, dead backends say dead, seedling notes say seedling. Maturity is shown, never implied upward.
4. **Low friction to publish.** The data-file and script-driven workflow exists so writing is cheap. A change that makes adding a post or a project harder is a cost that must be paid for.
5. **Serve every audience's first thirty seconds.** A reader finds the writing, a recruiter finds the work and the CV, a project visitor finds the code — none of them has to dig.

## Accessibility & Inclusion

No product-specific standard was established with the owner. The existing brief asserts high contrast for readability and semantic HTML as baseline intent; the site is light-mode only today, so contrast on cream surfaces is the recurring risk to watch.
