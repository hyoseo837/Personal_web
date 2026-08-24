---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

Scope: `/` (home). Visitor mode: Experience.

Audience and job: four audiences share this surface — curious peers arriving from a
link, co-op recruiters skimming for credibility, project visitors after a specific
tool, and Hyoseo himself. The page's job is to make one thing land in ten seconds —
that a specific mind is at work here — and then route all four without making any of
them scroll for it.

Action: read the proposition, take one of three routes (writing, work, notes).

Proof and content: the motto (binding brand commitment, used as the proposition
itself, not as decoration); recent writing and counts from the posts collection;
selected work and counts from `src/data/projects.ts`; the timeline from
`src/data/timeline.ts`; location from `src/data/now.ts`.

Constraints: light and dark themes must both survive; no client-side framework;
all copy reads from `src/data/` and the posts collection; publishing friction must
not increase.

Chosen direction: The Standing Proof (seed 483f1cd1, assigned index 3), code-led —
this harness has no image generation, so no comp round runs and the ambition rides
in the direction contract's FIRST VIEWPORT block.

Memorable moment: the motto set as Proposition I at display scale, with the three
routes beneath it as full-bleed fields of vermilion, ultramarine and chrome yellow —
colour owning whole regions rather than tinting elements.

Unresolved: whether `/about`, `/projects`, `/thinking`, `/archive` and `/blog` convert
in passes 2 and 3 (agreed: yes, home first); whether the fixed social rail survives
the new chrome or folds into the colophon.
