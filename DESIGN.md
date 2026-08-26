---
name: hyoseo.dev
description: A personal site set as a plate from Byrne's Euclid — flat fields of ink owning whole regions, hairline rules, and not one rounded corner.
colors:
  vermilion: "#d8232a"
  on-vermilion: "#f6f5f1"
  ultramarine: "#1c4f9c"
  on-ultramarine: "#f6f5f1"
  chrome: "#f2b705"
  on-chrome: "#17151c"
  mark: "#1c4f9c"
  mark-deep: "#163f7d"
  ground: "#eeece7"
  plate: "#f6f5f1"
  ink: "#17151c"
  ink-muted: "#4a4652"
  ink-dim: "#6d6878"
  rule: "rgba(23, 21, 28, 0.24)"
  rule-strong: "rgba(23, 21, 28, 0.55)"
  code-bg: "#14131c"
  code-line: "rgba(246, 245, 241, 0.09)"
  felt: "#015032"
  card-face: "#f6f5f1"
  card-edge: "rgba(23, 21, 28, 0.55)"
  board: "#e6e3dc"
  stone-black: "#17151c"
  stone-white: "#f6f5f1"
typography:
  display:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(2.125rem, 6.6vw, 4.75rem)"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Libre Caslon Text, Georgia, serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  caption:
    fontFamily: "Libre Caslon Text, Georgia, serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "10px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.18em"
  label-sm:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "9px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.2em"
  numeral:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  none: "0px"
components:
  field-vermilion:
    backgroundColor: "{colors.vermilion}"
    textColor: "{colors.on-vermilion}"
    rounded: "{rounded.none}"
  field-ultramarine:
    backgroundColor: "{colors.ultramarine}"
    textColor: "{colors.on-ultramarine}"
    rounded: "{rounded.none}"
  field-chrome:
    backgroundColor: "{colors.chrome}"
    textColor: "{colors.on-chrome}"
    rounded: "{rounded.none}"
  button-action:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.5rem 0.9rem"
  button-action-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
  pill:
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.45rem 0.8rem"
  pill-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    rounded: "{rounded.none}"
    padding: "0.45rem 0.8rem"
  nav-link:
    textColor: "{colors.ink-dim}"
    typography: "{typography.label}"
  nav-link-current:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
---

# Design System: hyoseo.dev

## Overview

**Creative North Star: "The Standing Proof"**

The site is set as a plate from Oliver Byrne's 1847 *Elements of Euclid*, the
edition that threw out lettered references and proved its propositions with flat
coloured figures instead. That is the whole conceit: a proposition is stated at
full scale, and the steps that prove it follow beneath it. The site is one
continuous argument rather than three products bolted into a nav bar, and every
page is a numbered step in it.

Density is low and deliberate. The plate is mostly empty ground with hairline
rules doing the dividing, and the only things allowed to be loud are the display
type and the three inks — which appear as whole fields, never as decoration on a
control. Everything that is apparatus rather than argument (labels, counts,
dates, state) drops to 9–11px monospace and gets out of the way. There is no
card grid, no rounded corner, no drop shadow, no gradient, and no coloured
status badge anywhere in the system.

The confirmed anti-reference is the standard developer portfolio: a hero, then a
grid of equal-weight cards for unrelated sections. This site refuses that
explicitly. Where that pattern would use a card, this one uses a numbered step
with the numeral hanging in the margin; where it would use a coloured pill for
state, this one draws a mark.

**Key Characteristics:**
- Byrne's three inks as full-bleed fields, never as accents on elements
- Bodoni states, Libre Caslon argues, JetBrains Mono counts
- Zero border-radius everywhere — every step of the scale is squared at the token
- No cast shadows; depth comes from hairline rules and a two-step tonal ground
- State is a drawn mark distinguished by form, never by hue
- Dark mode is a pure token inversion — no component ever branches on theme

## Colors

Three saturated inks against a warm paper ground, with the inks reserved for
whole regions and the greys doing all the ordinary work.

### Primary
- **Vermilion** (`{colors.vermilion}`): the first of Byrne's three inks. Owns the
  Writing field on the index and marks pull-quote borders in prose. It is a field
  colour and a rule colour only — see the named rule below.
- **Ultramarine** (`{colors.ultramarine}`): the second ink, and the one that
  doubles as the interactive colour. Owns the Work field, and is aliased as
  `mark` for every link, turnstile and focus ring at text size.
- **Chrome Yellow** (`{colors.chrome}`): the third ink. Owns the Notes field, and
  carries selection highlight and the solved/cleared banners.

### Neutral
- **Plate White** (`{colors.plate}`): raised surfaces — the sheet a step or panel
  sits on, one tone above the ground.
- **Ground** (`{colors.ground}`): the page itself. Warm, not neutral; this is
  paper, not a white screen.
- **Ink** (`{colors.ink}`): body text, display type, and the fill for solid
  apparatus marks.
- **Ink Muted** (`{colors.ink-muted}`): secondary prose — summaries, blurbs, the
  second line of a step.
- **Ink Dim** (`{colors.ink-dim}`): apparatus — labels, counts, dates, step
  numerals, inactive nav.
- **Rule** (`{colors.rule}`) and **Rule Strong** (`{colors.rule-strong}`): the
  hairlines that do all the dividing. Rule for ordinary separation, Rule Strong
  for a border that has to hold an edge.

### Fixed (theme-independent)
These do not invert. Code is always dark because Shiki runs a single dark theme
(`night-owl`), and the game surfaces are physical objects.
- **Code Ground** (`{colors.code-bg}`) with **Code Line** (`{colors.code-line}`).
- **Felt** (`{colors.felt}`): the solitaire table, carried over from the original
  ddanzt build.
- **Card Face** (`{colors.card-face}`) / **Card Edge** (`{colors.card-edge}`): a
  playing card, whose pixel art is dark linework on white.
- **Board** (`{colors.board}`) with **Stone Black** (`{colors.stone-black}`) and
  **Stone White** (`{colors.stone-white}`): the Yin-Yang board and its stones.

### Named Rules

**The Field Rule.** An ink owns a whole region or it does not appear. Vermilion,
ultramarine and chrome are backgrounds for entire blocks — never a border on a
button, a coloured icon, a tinted chip, or a highlight on a word. If you are
reaching for one of the three to decorate a control, the answer is a hairline
rule or an ink-grey instead.

**The Vermilion Is Not A Text Colour Rule.** Vermilion measures 4.24:1 against
the plate ground and fails body text. Ultramarine is the interactive ink for
exactly this reason. Never set links, labels or running text in vermilion; use it
as a field behind `on-vermilion` type, or as a rule.

**The Mark, Not The Hue Rule.** State is carried by a drawn apparatus mark whose
*form* differs — open square, half-filled square, solid square, dagger, turnstile
— and which inherits its colour from context. There is no green "published", no
amber "draft", no coloured badge anywhere in this system.

**The Token Inversion Rule.** Dark mode is implemented by redefining tokens under
`:root[data-theme="dark"]` and nowhere else. No component carries a `dark:`
branch, and no new colour is introduced for the dark plate. If a surface needs a
dark-mode fix, the fix belongs in the token block.

**The Physical Object Rule.** A playing card, a go stone and a felt table are
objects, not chrome, so they keep fixed light values in both themes and are
exempt from token inversion. This is the *only* sanctioned exception, it applies
to game surfaces alone. Any frozen value reused across a surface must be a named
token (`felt`, `card-face`, `board`, `stone-black`, `stone-white`); a value that
exists only to match a single piece of artwork — the three cat-suit buttons
sampled from their own sprites — stays a local literal with a comment saying so,
because promoting a one-off to the palette pollutes it. Text and controls that sit on a frozen surface
must be frozen too — theme tokens go light-on-light there.

## Typography

**Display Font:** Bodoni Moda (with Didot, Georgia, serif)
**Body Font:** Libre Caslon Text (with Georgia, serif)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, monospace)

**Character:** A high-contrast Didone for statements and a sturdy old-style
Caslon for argument — the pairing of a title page and its text block. The
monospace is not a third voice so much as the ruled margin: it only ever carries
things that are counted or labelled.

### Hierarchy
- **Display** (500, `clamp(2.125rem, 6.6vw, 4.75rem)`, 1.06): the proposition.
  One per page, at the top, with `text-wrap: balance`.
- **Headline** (500, `2rem` rising to `3rem` at `md`, 1.04): a route's own title
  in the sheet header.
- **Title** (500, `1.5rem`, 1.2): an item's name in a list of steps.
- **Body** (400, `1rem`, 1.7): all running prose. Constrained to a `54–60ch`
  measure; never full-bleed.
- **Caption** (400, `0.875rem`, 1.6): a note attached to something else — a
  credit line, a source, an aside under a block. One step below body, never used
  for a whole passage.
- **Label** (500, `10px`, `0.18em`, uppercase): every label, count, date, nav
  item and button in the system.
- **Label Small** (500, `9px`, `0.2em`, uppercase): the same voice one step down,
  for field labels inside a dense apparatus block.
- **Numeral** (400, `11px`, `0.08em`, tabular): step numerals hanging in the
  margin, and any figure that should align in a column.

### Named Rules

**The Three Voices Rule.** Bodoni states, Libre Caslon argues, JetBrains Mono
counts. A heading set in the body serif, or a paragraph set in the display face,
is a bug. Anything that is data rather than prose — a count, a date, an ID, a
size, a duration — is monospace regardless of where it appears.

**The One Display Voice Rule.** The display voice exists once, as the
`.proposition` utility. Never restate its family, size, weight, line-height and
tracking in a component; reach for the class. A component that redeclares them
has forked the display voice and will drift.

**The Apparatus Is Small Rule.** Apparatus type is 9–11px, uppercase, widely
tracked, and set in `ink-dim`. It is meant to be skimmed past. If a label feels
like it needs to be bigger to be read, it is probably prose and belongs in the
body voice.

## Layout

Every route's measure comes from a single utility, `.plate-col`: a centred column
capped at `64rem` with `1.25rem` of gutter rising to `2rem` at `sm`. Changing that
one value rescales the whole site, which is the point — no route sets its own
width.

The recurring spatial figure is the **hanging step**: a two-column grid of
`2.25rem` for the numeral and the remaining space for the assertion, with a `1rem`
gutter. The numeral sits in the margin beside its content rather than above it,
which is the world's law bending the type rather than labelling it. Lists of
things — notes, projects, games — are always steps separated by a hairline
bottom rule, never cards in a grid.

Section rhythm runs on a wide scale: `3rem` between a header and its content,
`5rem` between major blocks, with content blocks internally spaced at `0.75–1.5rem`.
Vertical dividing is done with `border-b border-rule` on the item, not with
margin alone.

**Responsive behavior.** Two breakpoints carry the site. Below `md` (768px) the
running head collapses to a full-screen overlay menu whose items are numbered
steps, and the sheet header's apparatus list stacks under the title as a
bordered block. At `md` and up the running head becomes a horizontal nav and the
sheet header becomes a two-column grid with the title left and its apparatus
right-aligned beside it. Wide content — tables, code, game boards — scrolls
inside its own container; the page body never scrolls sideways.

### Named Rules

**The Plate Column Rule.** No route sets its own max-width. If a page needs a
different measure, the measure is wrong for the site, not for the page.

**The Steps, Not Cards Rule.** A collection renders as numbered steps divided by
hairlines. A grid of equal-weight bordered cards is the pattern this site was
built to refuse.

## Elevation & Depth

There is no elevation. Not "subtle shadows" — none. `box-shadow` does not appear
anywhere in the site chrome, and there is no blur, no glow, and no gradient.

Depth is carried by exactly two devices. First, a **two-step tonal ground**:
`ground` for the page and `plate` one tone above it for anything that reads as a
raised surface, with no third step. Second, **hairline rules**: a 1px `rule`
border, which is how a panel, a step, a header and a footer all announce their
edges. That is the entire depth vocabulary.

The one shadow-shaped thing in the codebase is `box-shadow` used as a *hairline*
on game cells (`0 0 0 1px`), where it draws a grid line rather than suggesting
lift. Spread-zero, blur-zero, no offset. That is a border by another name and is
allowed; a blurred, offset shadow is not.

### Named Rules

**The No Cast Shadow Rule.** A printed plate has no shadow. If a surface needs to
separate from the one behind it, move it one tonal step or give it a hairline —
never lift it.

## Shapes

Everything is square. The radius scale is not merely unused; it is **overwritten
at the token level**, with every step from `xs` through `4xl` redefined to `0px`.
That means a stray `rounded-lg` in markup is inert and produces a square corner
anyway — the system cannot be un-squared from a component.

The two exceptions are genuinely circular by nature and are drawn, not
rounded: the Yin-Yang stones (`border-radius: 50%`) and the circular marks in
the game art. Both are objects rendered on a board, not UI chrome.

Borders are the primary form device. A 1px hairline in `rule` for ordinary
separation, `rule-strong` where an edge must hold, and dashed hairlines for empty
slots and drop targets. Focus is a 2px `mark` outline at 2px offset — square,
like everything else.

### Named Rules

**The Squared Rule.** Every radius token is `0px`. Do not add a rounded variant,
do not reintroduce a radius scale, and do not special-case a component to curve.
A circle is permitted only for something that is physically round.

## Components

### Buttons
- **Shape:** square (`0px`), 1px `rule-strong` border.
- **Primary (action):** label voice — 10px mono, uppercase, `0.18em` tracking —
  in `ink` on a transparent ground, `0.5rem 0.9rem` padding.
- **Hover / Focus:** the button *inverts*: `ink` ground with `ground`-coloured
  type, over a `0.15s` background and colour transition. Focus is the global 2px
  `mark` outline.
- **On a frozen surface:** the same button re-declares its colours against the
  frozen palette rather than the theme tokens, per The Physical Object Rule.

### Chips / Pills
- **Style:** square, 1px `rule` border, 11px mono uppercase at `0.1em`, in
  `ink-muted`. Segmented groups overlap borders with `margin-left: -1px` so the
  set reads as one ruled strip rather than separate buttons.
- **State:** the selected pill inverts to an `ink` ground with `ground` type and
  an `ink` border. Selection is carried by `aria-pressed`, not by colour alone.

### Cards / Containers
There are no cards. The container pattern is the **sheet**: a `plate-col`-width
block whose header is separated from its content by a hairline bottom rule and
`2rem` of padding, with no border on the outside and no background of its own.

### Navigation
- **Style:** label voice, horizontal, `1.75rem` gaps, baseline-aligned with the
  wordmark. Sticky to the top with a hairline bottom rule over the ground.
- **States:** `ink-dim` at rest, `ink` on hover, and the current page gets `ink`
  plus a solid triangular apparatus mark before its name — form, not colour.
- **Mobile:** a full-screen overlay on the ground, whose items are numbered steps
  at `1.5rem` display size with hairline bottom rules, fading in over `0.2s`.

### The Apparatus Mark (signature)
The system's state vocabulary, drawn as inline SVG on a 10×10 viewBox and
inheriting `currentColor`. Kinds differ by **form**: an open square is Seedling, a
half-filled square is Growing, a solid square is Evergreen, a solid triangle is
the current page, a dagger is Archived, and a falsum is Discontinued. Default
size is 9px, with a visually-hidden label always beside it.

They are drawn rather than set as Unicode glyphs (U+25A1, U+22A2, U+220E, U+2020)
because Google Fonts serves JetBrains Mono as unicode-range subsets and those
code points are not reliably present — a fallback glyph would break the metric
mid-line at 9px, which is exactly where these live.

### The Field (signature)
A whole region taking one of the three inks as its background, with its paired
`on-*` token for type. Used for the index's three regions. Hover and focus draw a
2px `currentColor` outline *inset* by `0.6rem`, so the field is drawn on rather
than lifted.

## Do's and Don'ts

### Do:
- **Do** put every route inside `.plate-col` and let the site's one measure decide
  the width.
- **Do** reach for `.proposition` when you need the display voice, rather than
  restating its four type properties.
- **Do** set anything counted or labelled — dates, counts, IDs, durations — in
  JetBrains Mono at 9–11px, uppercase, in `ink-dim`.
- **Do** carry state with an apparatus mark whose form differs, and give it a
  `sr-only` label.
- **Do** fix dark mode in the token block under `:root[data-theme="dark"]`.
- **Do** name a frozen game colour as a token (`felt`, `board`, `card-face`,
  `stone-black`, `stone-white`) and freeze its text and controls to match.
- **Do** render a collection as hairline-divided steps with the numeral hanging
  in the margin.

### Don't:
- **Don't** use vermilion, ultramarine or chrome as an accent on an element — no
  coloured borders, icons, chips or highlighted words. They are fields.
- **Don't** set text in vermilion. It measures 4.24:1 on the plate ground.
- **Don't** add a `box-shadow` with blur or offset. A spread-zero, blur-zero
  `0 0 0 1px` used as a hairline is the only permitted form.
- **Don't** reintroduce a border radius, add a rounded variant, or curve a single
  component. Circles are for physically round objects only.
- **Don't** author new markup against the legacy token aliases — `--color-stone-*`,
  `--color-accent-*`, `--color-surface`, `--color-text-*`, `--color-border-*`,
  `--color-chip*`. They are a migration shim remapped onto this palette so that
  `/about`, `/projects`, `/thinking`, `/archive` and `/blog` keep building, and
  they will be removed as those routes are rebuilt.
- **Don't** give a component a `dark:` branch or introduce a colour that exists
  only in dark mode.
- **Don't** build a grid of equal-weight bordered cards. That is the pattern this
  site exists to refuse.
- **Don't** invent a colour outside this palette. If a surface genuinely needs
  one, add it as a token here first — a literal in a component is drift.
