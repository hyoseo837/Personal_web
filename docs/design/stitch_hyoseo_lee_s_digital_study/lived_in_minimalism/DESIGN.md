---
name: Lived-In Minimalism
colors:
  surface: '#fbf9f1'
  surface-dim: '#dcdad2'
  surface-bright: '#fbf9f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f4ec'
  surface-container: '#f0eee6'
  surface-container-high: '#eae8e0'
  surface-container-highest: '#e4e3db'
  on-surface: '#1b1c17'
  on-surface-variant: '#54433d'
  inverse-surface: '#30312c'
  inverse-on-surface: '#f3f1e9'
  outline: '#87736c'
  outline-variant: '#dac1b9'
  surface-tint: '#94492c'
  primary: '#94492c'
  on-primary: '#ffffff'
  primary-container: '#d67d5c'
  on-primary-container: '#541902'
  inverse-primary: '#ffb59b'
  secondary: '#725b35'
  on-secondary: '#ffffff'
  secondary-container: '#fbdbac'
  on-secondary-container: '#765f39'
  tertiary: '#675d4e'
  on-tertiary: '#ffffff'
  tertiary-container: '#9f9382'
  on-tertiary-container: '#342c20'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#ffb59b'
  on-primary-fixed: '#380d00'
  on-primary-fixed-variant: '#763217'
  secondary-fixed: '#fedeaf'
  secondary-fixed-dim: '#e1c295'
  on-secondary-fixed: '#281900'
  on-secondary-fixed-variant: '#584320'
  tertiary-fixed: '#efe0cd'
  tertiary-fixed-dim: '#d2c4b2'
  on-tertiary-fixed: '#221a0f'
  on-tertiary-fixed-variant: '#4f4538'
  background: '#fbf9f1'
  on-background: '#1b1c17'
  surface-variant: '#e4e3db'
typography:
  display-lg:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Newsreader
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Newsreader
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.7'
  body-md:
    fontFamily: Newsreader
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.03em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1120px
  reading-width: 720px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 40px
---

## Brand & Style

The design system is centered around the concept of "Lived-in Minimalism." It eschews the sterile, cold precision of traditional tech interfaces in favor of a warm, inviting atmosphere that feels like a sun-drenched library. The target audience includes readers, collaborators, and peers who value thoughtful reflection and a human touch.

The emotional response should be one of calm, comfort, and quiet confidence. This is achieved through a mix of **Minimalism** (focused content and heavy whitespace) and **Tactile** influences (soft tonal layering and subtle borders that suggest paper or fabric). The guiding principle is the tagline: "Be happy • Be unique • Be useful."

## Colors

The palette is strictly warm, removing all cold grays to maintain a "golden hour" glow.

- **Primary (Terracotta):** Used sparingly for call-to-actions, active states, and highlights.
- **Secondary (Soft Amber):** Used for soft highlights, hover states, and decorative accents.
- **Tertiary (Warm Sand):** Used for secondary containers, tags, and subtle background shifts.
- **Neutral (Cream):** The canvas. This is the base background color for all pages.
- **Text (Earth):** A deep, warm brownish-charcoal is used instead of pure black to ensure high contrast without the harshness of digital black.

## Typography

This design system utilizes a "Serif-First" approach to prioritize the reading experience of the blog.

- **Newsreader** handles all editorial content and headlines. Its literary, slightly organic strokes provide the "lived-in" feel. 
- **Plus Jakarta Sans** is used for functional UI elements: navigation, buttons, metadata, and labels. Its clean, rounded geometric forms provide a modern counterpoint to the traditional serif.

Line heights are intentionally generous (1.6x to 1.7x for body text) to ensure a relaxed pace while reading long-form articles.

## Layout & Spacing

The layout follows a **Fixed-Width Grid** model to ensure the composition remains balanced and cozy rather than sprawling.

- **Desktop:** A 12-column grid with a narrow max-width of 1120px. For blog posts, content is constrained to a 720px "reading lane" to prevent eye fatigue.
- **Tablet:** 8-column grid with 32px side margins.
- **Mobile:** 4-column grid with 20px margins.

Spacing is based on an 8px scale, but emphasizes larger gaps (32px, 48px, 64px) between sections to create the "generous whitespace" required by the brand personality.

## Elevation & Depth

Depth in this design system is achieved through **Tonal Layers** and **Low-Contrast Outlines** rather than traditional drop shadows.

- **Surface Tiers:** Background is Cream (#FFFDF5). Elevated cards use a subtle Warm Sand (#F5E6D3) fill or a simple 1px border in #E6D8C5.
- **Soft Shadows:** If a shadow is strictly necessary for functional clarity (e.g., a floating menu), it must be an ambient, diffused shadow tinted with the primary color: `0 8px 24px rgba(214, 125, 92, 0.08)`.
- **Interactions:** Hover states should involve a slight shift in background color (from Sand to Amber) rather than a vertical "lift."

## Shapes

The shape language is soft and organic. Sharp corners are avoided entirely to maintain the approachable "cozy" vibe.

- **Standard Elements:** Buttons and small input fields use a 0.5rem (8px) radius.
- **Large Elements:** Cards, image containers, and featured sections use a 1rem (16px) radius.
- **Specialty Elements:** Badges or category chips may use pill-shaped (full-round) styling to distinguish them from interactive buttons.

## Components

### Buttons
- **Primary:** Terracotta background with Cream text. Bold, slightly rounded (8px).
- **Secondary:** Warm Sand background with Earth text. No border.
- **Tertiary:** Earth text with a 1px Earth border.

### Cards
- Large 16px corner radius.
- Background: Warm Sand (#F5E6D3) or a subtle 1px border on the Cream background.
- Padding should be generous (min 32px) to allow content to breathe.

### Input Fields
- Filled style using Warm Sand. 
- 8px corner radius.
- Labels use Plus Jakarta Sans (Label-md) for clarity.

### Chips & Tags
- Used for blog categories. 
- Soft Amber (#F9D9AA) background with Earth text. 
- Fully rounded (pill) shape.

### Editorial List
- Used for the blog index. 
- Minimalist approach: Headline (Serif), Date (Sans-serif, muted), and a subtle horizontal divider in #E6D8C5. No cards; just clean typography on the neutral background.