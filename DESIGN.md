---
name: hyoseo.dev
description: A personal site drawn as a working technical drawing — graph paper, hairline rules, and one cold ink.
colors:
  drafting-cyan: "#0d6c88"
  drafting-cyan-hover: "#0a5871"
  drafting-cyan-soft: "rgba(13, 108, 136, 0.07)"
  drafting-cyan-muted: "rgba(13, 108, 136, 0.4)"
  drafting-cyan-bright: "rgba(13, 108, 136, 0.8)"
  drafting-cyan-ink: "#0a5871"
  sheet-white: "#f3f6f8"
  panel: "#eaeff3"
  panel-hover: "#e1e9ee"
  rule-faint: "rgba(120, 145, 165, 0.22)"
  rule-strong: "rgba(120, 145, 165, 0.5)"
  ink-main: "#101820"
  ink-muted: "#47535e"
  ink-dim: "#7d8a95"
  chip-ground: "#dbe7ee"
  chip-ink: "#35505f"
  code-ground: "#0b1119"
  code-rule: "rgba(255, 255, 255, 0.07)"
  grid-minor: "rgba(13, 108, 136, 0.06)"
  grid-major: "rgba(13, 108, 136, 0.12)"
typography:
  display:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  title:
    fontFamily: "IBM Plex Serif, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.375
    letterSpacing: "normal"
  body:
    fontFamily: "IBM Plex Serif, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "10px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.1em"
  field:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "9px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.18em"
  field-value:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  xs: "0px"
  sm: "0px"
  md: "0px"
  lg: "0px"
  xl: "0px"
  2xl: "0px"
  3xl: "0px"
  4xl: "0px"
spacing:
  grid-minor: "16px"
  grid-major: "96px"
  block-y: "32px"
  block-y-lg: "48px"
  sheet-gutter: "20px"
  sheet-gutter-lg: "64px"
components:
  block:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink-main}"
    rounded: "{rounded.md}"
    padding: "32px"
  block-hover:
    backgroundColor: "{colors.panel-hover}"
  chip:
    backgroundColor: "{colors.chip-ground}"
    textColor: "{colors.chip-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "2px 10px"
  filter-active:
    backgroundColor: "{colors.drafting-cyan}"
    textColor: "{colors.sheet-white}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  filter-rest:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  title-block:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink-main}"
    rounded: "{rounded.md}"
    padding: "24px"
  rail-link:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.md}"
    padding: "12px"
  rail-link-hover:
    backgroundColor: "{colors.drafting-cyan}"
    textColor: "#ffffff"
---

# Design System: hyoseo.dev

## Overview

**Creative North Star: "The Working Drawing"**

The site is not a page. It is a sheet — a drawing issued at 1:1 scale, with a
ruled border, zone markers running A–D down both edges and 1–6 across the top,
registration ticks at every corner, and a title strip at the bottom that states
who drew it, which sheet this is, and when it was last revised. Everything sits
on graph paper: a 16px minor grid and a 96px major grid, both drawn from the
accent so the paper shifts with the theme instead of being a fixed grey. A
faint paper grain (2.2% opacity) sits over the light theme and is switched off
entirely in dark, where it would read as noise rather than fibre.

The register is cold, precise and unhurried. There is exactly one ink —
Drafting Cyan — and it appears almost everywhere in trace amounts and at full
strength almost nowhere. Everything else is a cool grey-blue scale that inverts
wholesale in dark mode, which is what lets a single `text-stone-900` be correct
in both themes without a `dark:` variant. Nothing is warm. Nothing is rounded.
Nothing lifts off the page.

This world replaced a warm cream-and-terracotta, light-only predecessor.
PRODUCT.md still describes that earlier look; the code does not. The current
system is a deliberate rejection of it, and warmth is the one quality this
world does not admit.

**Key Characteristics:**

- Graph-paper ground visible through the entire sheet; text blocks sit on
  opaque panels over it rather than dimming it.
- Zero border-radius at the token level — the whole radius scale is squared.
- One accent, one grey scale, both fully inverted for dark mode at token level.
- IBM Plex as a single superfamily across three roles: serif reads, sans
  structures, mono labels.
- Drafting chrome — zone markers, registration ticks, a title block — carried
  as real, aria-hidden ornament.
- No shadows on anything printed on the sheet.

## Colors

A single cold ink on cool grey-blue paper. The entire scale is redefined under
`[data-theme="dark"]`, so tokens carry both themes and component code never
needs a dark variant.

### Primary

- **Drafting Cyan** (`#0d6c88` light / `#45b9da` dark): the one ink of the
  sheet. Links, active nav, selected filters, the grid lines themselves,
  registration ticks, the rail's left edge, and the standing-note motto all
  resolve to this value at varying alpha. Its full-strength appearances are
  deliberately few: an active filter, a hover on a rail link, the site
  wordmark.
- **Drafting Cyan Deep** (`#0a5871` light / `#6ecbe5` dark): hover state for
  the wordmark and inline project links. Note the direction inverts by theme —
  darker in light, lighter in dark.
- **Drafting Cyan Ink** (`#0a5871` light / `#6ecbe5` dark): the ink for
  label-sized text. It shares its value with Drafting Cyan Deep but is a
  separate token because it is a resting text color, not a hover state — no
  alpha of the base accent reaches 4.5:1 at 9–11px, so annotation text needs
  its own deeper value rather than a grey fallback.
- **Drafting Cyan Soft** (7% alpha, 10% in dark): the ground behind icon boxes,
  the "Elsewhere" rail cap, project media placeholders, and the ring that
  blooms around a timeline dot on hover.
- **Drafting Cyan Muted** (40% alpha): registration ticks, selection
  highlight, wiki-link underlines, blockquote borders.

### Neutral

- **Sheet White** (`#f3f6f8` light / `#0d1218` dark): the page ground, and the
  paper the grid is drawn on.
- **Panel** (`#eaeff3` light / `#131b23` dark): every opaque block that carries
  text — cards, the title block, the rail, filter buttons at rest. Its job is
  to stop the graph paper from running under prose.
- **Panel Hover** (`#e1e9ee` light / `#18222c` dark): the only ground change a
  block makes on hover.
- **Rule Faint** (`rgba(120,145,165,0.22)`): the hairline that draws every
  border, divider, and table rule.
- **Rule Strong** (`rgba(120,145,165,0.5)`): the same rule on hover, and the
  rail's horizontal edges.
- **Main Ink** (`#101820` light / `#e4ecf2` dark): headings and body text.
- **Muted Ink** (`#47535e` light / `#a3b1bc` dark): summaries, descriptions,
  secondary prose.
- **Dim Ink** (`#7d8a95` light / `#66757f` dark): field labels, zone markers,
  timestamps.
- **Chip Ground / Chip Ink** (`#dbe7ee` on `#35505f`): the tag pair, a notch
  cooler than the panel so tags read as stamped rather than raised.

### Fixed (theme-independent)

- **Code Ground** (`#0b1119` light / `#080d14` dark): code blocks stay dark in
  both themes, because Shiki runs a single dark theme (`night-owl`). This token
  deliberately does **not** follow the inverted stone scale.

### Semantic status

Three status colors exist and are the only non-cyan hues in the system:
green (`green-600/700` on `green-50`) for evergreen notes and Easy problems,
yellow (`yellow-700` on `yellow-50`) for Medium, red (`red-600` on `red-50`)
for Hard. They appear only as small ringed badges, never as surfaces.

### Named Rules

**The One Ink Rule.** There is one accent in this system and no second one.
Anything that reads as an accent — a rule, a tick, a link, a grid line, a
selected state — is Drafting Cyan at some alpha. A new hue may only enter as a
status badge, never as decoration.

**The Token Inversion Rule.** Dark mode is implemented by redefining the token
values, not by adding `dark:` variants in components. A new component that
needs a `dark:` class is a signal the token set is missing something — extend
the tokens instead.

**The Warm-Is-Out Rule.** No warm neutral, no terracotta, no cream. Every grey
in this system carries blue.

## Typography

**Display / UI Font:** IBM Plex Sans (with system-ui, sans-serif)
**Reading Font:** IBM Plex Serif (with Georgia, serif)
**Label / Data Font:** IBM Plex Mono (with ui-monospace, monospace)

**Character:** One superfamily doing three jobs, which is what keeps a site
carrying portfolio, dev logs and garden notes reading as one mind. Sans is
structural and tightly tracked; serif is the voice and does all the actual
reading; mono is the annotation layer — every label, count, coordinate and
field on the sheet is monospaced, and that is the system's loudest signature.

### Hierarchy

- **Display** (Sans 600, `text-4xl`→`text-6xl`, 1.1, -0.025em): page-level H1
  in post headers. The `.heading-hero` utility.
- **Headline** (Sans 600, `1.75rem`→`text-4xl`, 1.08, -0.03em): the section
  name inside the title block — the tightest tracking in the system.
- **Title** (Serif 600, `text-xl`–`text-2xl`, snug): card and article titles.
  Serif here is what makes a list of posts read as writing rather than as rows.
- **Body** (Serif 400, `text-base`–`text-xl`, 1.75): all prose. Title-block
  summaries are capped at `52ch`.
- **Label** (Mono 600, 10px, 0.1em–0.2em, uppercase): nav items, section
  eyebrows, timestamps, category tags. The `.label-xs` utility sets this in
  Drafting Cyan Ink.
- **Field** (Mono 400, 9px, 0.18em, uppercase): drawing-field keys in the
  title block and footer strip — `dt`, dim and tracked out.
- **Field Value** (Mono 400, 11px, tabular, no tracking): the matching `dd`.
  The only 11px step in the system, and it exists so a field value reads a
  notch above its key without becoming body text.

### Named Rules

**The Mono Annotation Rule.** Anything that is data rather than prose — a
count, a date, a coordinate, a scale, a stack tag, a difficulty — is
monospaced and tabular. Prose is never mono; data is never serif.

**The Annotation Ink Rule.** Label-sized text in the accent uses Drafting Cyan
Ink, never an alpha of Drafting Cyan. `accent/40` measures 1.82:1 and
`accent/60` measures 2.58:1 on light ground — no alpha of the base accent
clears 4.5:1 at 9–11px, which is the only size range labels use.

**The Two-Voice Rule.** Sans for structure, serif for content. A heading that
introduces a section is sans; a heading that *is* content (a post title, a
project name) is serif.

## Layout

The sheet is the layout. `SheetFrame` draws a bordered rectangle inset from the
viewport (`mx-3` → `sm:mx-6` → `lg:mx-12` → `xl:mx-16`, `my-3`/`sm:my-6`) with
a minimum height of `calc(100vh - gutter)`, and everything lives inside it. The
margin outside the frame is not empty space — from `lg` up it holds the zone
markers and the fixed social rail.

Content is anchored left, not centred: `Sheet` sets `max-w-[54rem]` with no
auto margin, so the slack sits on the right the way a drawing leaves room
beside the drawn area. Post pages are the exception — `PostLayout` centres at
`max-w-4xl` because long-form reading wants the column balanced. The footer
centres at `max-w-3xl`.

Spacing rhythm follows the paper: the 16px minor grid is the unit, the 96px
major grid the section interval. Blocks pad at `p-8` / `md:p-12`; sections
separate at `mb-20` / `md:mb-24`; the sheet's top padding is `pt-10` /
`md:pt-14` with `pb-24` at the base.

**Responsive behavior.** Two real breakpoints do the work. At `md` (768px) the
mobile overlay nav is replaced by inline nav, and card grids go from one column
to two (or to the 2/3 media–text split on projects). At `lg` (1024px) the
drafting chrome appears: zone markers, the fixed social rail, and the wider
frame inset. Below `lg` the rail's links are carried by the footer instead, so
they are never both visible.

### Named Rules

**The Left-Anchored Sheet Rule.** Index pages anchor content to the left edge
of the sheet and let the right margin run empty. Do not centre a portfolio
page; centring is reserved for reading (`PostLayout`) and the footer.

**The Chrome Needs Margin Rule.** Zone markers and the rail only exist from
`lg` up, and are `aria-hidden` and `pointer-events-none`. Drafting ornament
never competes with content for width.

## Elevation & Depth

This system is flat by law. There is no elevation scale, no shadow token set,
and the radius scale is squared to `0px` at every step so nothing can round
itself out of the drawing. Depth is carried three ways: hairline rules
(`rule-faint` → `rule-strong` on hover), the opacity of the ground (opaque
panels reading as drawn regions over the transparent graph paper), and ink
weight (dim → muted → main).

Two shadows exist in the entire system, both on the fixed social rail —
`-2px 0 12px rgba(16,24,32,0.08)` on the rail itself and
`-2px 0 10px rgba(16,24,32,0.10)` on its hover tooltip. The rail is the one
element that is not printed on the sheet; it floats over it, and needs the
separation to say so.

### Named Rules

**The Paper Has No Thickness Rule.** Surfaces never lift. Hierarchy is carried
by hairline rules, opacity of the ground, and ink weight. The only shadows in
the system are on the fixed rail, because it is the one element not printed on
the sheet.

**The No-Motion-On-Hover Rule.** Hover changes color, border, and opacity —
never scale, never `translateY`. The one sanctioned movement is a 1px
horizontal nudge (`translate-x-1`) on article titles and backlinks, which reads
as a cursor tracking a line, not as a card lifting.

## Shapes

Zero radius, everywhere, enforced at the token level — `--radius-xs` through
`--radius-4xl` are all `0px`, which squares every card, image, code block and
badge at once without touching component code. Borders are always 1px hairlines
in `rule-faint`; the only 2px border in the system is the rail's left edge in
full-strength accent, and the 2px underline on the active nav item.

The recurring silhouette is the **registration tick**: an L of two 9px hairlines
at each corner, drawn in accent at 40–55% and rising to full opacity on hover.
It appears on `.soft-block` (all four corners, via a `::before` with eight
background gradients), on the title block (two opposite corners only, at 2.5px
scale), and on the sheet frame (all four corners, at 3px). Ticks are what mark
a region as *called out* rather than merely bordered.

Circles survive in exactly one place: `rounded-full` on timeline dots and year
markers, which resolves through Tailwind's infinity calc rather than the
squared token scale. A dot is a point, not a corner, so this is intentional.

### Named Rules

**The Square Corner Rule.** Nothing in this system has a radius, the focus ring
included. If a component
needs `rounded-*`, the answer is that it needs a rule instead. The one
exception is a dot marking a point on a timeline.

**The Tick Marks the Region Rule.** Corner ticks signal "this is a called-out
detail." Use them on containers that hold a discrete unit of work — a card, a
title block, the sheet itself. Do not sprinkle them on every bordered box.

## Components

### Blocks (`.soft-block`)

**Character:** Drawn, not styled.

- **Shape:** hairline `rule-faint` border, zero radius, four corner
  registration ticks via `::before`.
- **Ground:** `panel`, padding `p-8` / `md:p-12`.
- **Hover:** ground → `panel-hover`, border → `rule-strong`, ticks 0.55 → 1
  opacity, all over 500ms. Nothing scales, nothing lifts.
- **Usage:** post cards, project rows, note entries, empty states.

### Chips (`.chip`)

- **Style:** `chip-ground` on `chip-ink`, mono 10px 500, uppercase, 0.08em
  tracking, hairline border, `px-2.5 py-0.5`, square.
- **Usage:** categories and stack technologies.
- **Known drift:** the projects-page timeline uses a `rounded-full` sans-serif
  pill for stack tags instead of `.chip`. Converge on `.chip`.

### Status badges

- **Style:** mono 9px 600, uppercase, `ring-1 ring-inset`, `px-2 py-1`, square.
- **Variants:** seedling (dim on `stone-100`), growing (accent on
  `accent-soft`), evergreen (green); Easy / Medium / Hard in green / yellow /
  red. Difficulty badges are fixed at `w-16` and centred so the archive list
  aligns as a column.

### Filter buttons

- **Style:** mono 12px 500, uppercase, 0.12em tracking, hairline border,
  `px-4 py-2`, square, with a tabular count at reduced opacity inside.
- **Rest:** `panel` ground, `ink-muted`. **Hover:** `stone-200` ground.
  **Active:** full accent ground, white text.
- **Behavior:** the blog's category filters are real anchors intercepted by JS,
  so they work without JS and filter without navigating. Keep that pattern —
  a filter that is only a `<button>` loses its URL.

### Title block (`Sheet`)

The signature component. An opaque bordered panel at the top of every index
page, split into a left cell (mono eyebrow "Hyoseo Lee", the section name at
headline weight, an optional serif summary at `52ch`) and an optional right
`<dl>` of drawing fields, divided by a hairline and stacked with hairlines
between rows. Field keys are mono 9px dim and tracked to 0.18em; values are
mono 11px tabular, right-aligned. Two opposite corners carry registration
ticks. The right column collapses under the left below `sm`.

### Footer title strip

The counterpart at the bottom of the sheet: a four-cell `<dl>` of *Drawn by /
Sheet / Scale / Revised*, in drawing order, `grid-cols-2` collapsing to
`sm:grid-cols-4`, with hairlines drawn conditionally so the 2×2 and 1×4
arrangements both rule correctly. "Sheet" is derived from the URL path and
"Revised" is the build date — both honest for a static site.

### Sheet frame (`SheetFrame`)

The bordered rectangle enclosing the whole document, with zone markers (1–6
across the top, A–D down both sides) and corner registration marks. All markers
are mono 9px at 0.2em tracking, `text-dim` at 50%, `aria-hidden`,
`pointer-events-none`, `select-none`, and drawn only from `lg` up.

### Social rail (`SocialRail`)

Fixed to the right margin, vertically centred, `lg` and up only. A vertical
`writing-mode: vertical-rl` "Elsewhere" cap on `accent-soft`, then a stack of
icon links divided by hairlines, with a 2px accent left edge. Hover and
`focus-visible` both flip the link to accent ground with white icon and reveal
a mono tooltip to its left. Below `lg` the footer carries the same links.

### Navigation

- **Desktop:** mono 10px 600, uppercase, 0.2em tracking. Rest `stone-400`,
  hover `stone-900`, active accent with a 2px bottom border. Theme toggle sits
  at the end of the same row.
- **Mobile:** a full-screen `bg-stone-50/98` backdrop-blurred overlay,
  opacity-transitioned over 300ms, with sans 2xl links. Body scroll is locked
  while open and `aria-expanded` is kept in sync.
- **Wordmark:** sans `text-xl` 600 at -0.02em in accent — one of the few
  full-strength accent appearances.

### Prose (`PostLayout`)

Serif at `text-lg`/`md:text-xl`, `stone-700`, with serif bold headings.
Inline code sits on `stone-200/50`; code blocks are forced to `code-ground`
with a `code-line` border. Tables use uppercase mono-weight headers over
hairline rules. The `@tailwindcss/typography` plugin bakes literal `oklch()`
values that ignore the token overrides, so `global.css` remaps every
`--tw-prose-*` variable onto the token scale, unlayered so it wins.

### Wiki-links

Resolved links (`a.internal`) are accent with a dotted `accent-muted` bottom
border that goes solid on hover — deliberately distinct from an outbound link.
Unresolved links (`a.internal.new`) are `stone-400` with a `stone-300` border
and `cursor: help`, so a broken garden link reads as not-yet-written rather
than as an error.

### Motion

Transitions are `duration-300` for controls, `duration-500` for blocks and
theme changes, easing default. Page transitions run through Astro's
`ClientRouter` with `fallback="animate"` (not the native `@view-transition`
rule, which Firefox still lacks for cross-document navigation); the root
crossfade is tuned to 0.28s ease, and `header` / `footer` carry
`view-transition-name` so the chrome holds still while the body crossfades.

## Do's and Don'ts

### Do:

- **Do** put every new color, in both themes, in the `@theme` block and the
  `[data-theme="dark"]` override, then use the bare token in components.
- **Do** set data — counts, dates, scales, coordinates, stack tags — in mono
  with `tabular-nums`.
- **Do** give any new container a hairline `rule-faint` border and zero radius,
  and add corner ticks only if it is a called-out region.
- **Do** put text-bearing content on an opaque `panel`, so the graph paper
  never runs under prose.
- **Do** keep drafting chrome `aria-hidden`, `pointer-events-none`, and gated
  to `lg` and up.
- **Do** express hover as a color, border, or opacity change over 300–500ms.
- **Do** use Drafting Cyan Ink for any label-sized text set in the accent, and
  reach for `.label-xs` rather than rebuilding the label role inline.
- **Do** keep code-block colors on the fixed `code-ground` token — they must
  not follow the inverted scale, because Shiki runs one dark theme.

### Don't:

- **Don't** reintroduce the warm cream and terracotta palette (`#faf7f2`,
  `orange-200`) that this system replaced. PRODUCT.md still describes it; the
  code does not. Warmth is the one thing this world rejects.
- **Don't** add a border radius. The token scale is `0px` at every step by
  intent; `rounded-*` utilities are inert and their presence in source is
  leftover, not permission.
- **Don't** add a box-shadow to anything printed on the sheet. Only the fixed
  rail floats.
- **Don't** introduce a second accent hue. New non-cyan color enters only as a
  small ringed status badge.
- **Don't** write `dark:` variants in components. If dark mode needs a
  different value, the token is missing.
- **Don't** scale or lift an element on hover. A 1px horizontal nudge on a
  title is the entire sanctioned movement vocabulary.
- **Don't** centre an index page's content column — the sheet is left-anchored
  and the right margin is meant to be empty.
- **Don't** set label-sized accent text in an alpha of the accent — it cannot
  reach AA at 9–11px. Use Drafting Cyan Ink.
- **Don't** set prose in mono or data in serif.
- **Don't** copy the two known drifts: the `rounded-full` sans pill in the
  projects timeline, `.icon-box`'s `rounded-lg`, or `.heading-serif`'s name
  (it applies `font-sans`). Converge on the canonical forms.
