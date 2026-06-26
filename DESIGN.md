---
name: Life First Aid Courses
description: Nationally recognised workplace first aid training — Blue Mountains & Greater Western Sydney
colors:
  red: "#e03b30"
  red-deep: "#b22a21"
  teal: "#0d7c6b"
  teal-deep: "#0a5d50"
  teal-soft: "#e3f0ed"
  amber: "#f0a92b"
  ink: "#12222c"
  ink2: "#1b3340"
  slate: "#5a6b74"
  paper: "#f5f3ec"
  cream: "#fbfaf4"
  card: "#ffffff"
  line: "#e0dccf"
  line2: "#d2ccbd"
typography:
  display:
    fontFamily: "'Bricolage Grotesque', sans-serif"
    fontSize: "clamp(1.875rem, 7vw, 3.875rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Bricolage Grotesque', sans-serif"
    fontSize: "clamp(1.5rem, 5vw, 2.75rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Bricolage Grotesque', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Public Sans', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "'Public Sans', sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  sm: "7px"
  md: "10px"
  lg: "14px"
  xl: "16px"
  2xl: "20px"
  pill: "30px"
spacing:
  xs: "8px"
  sm: "14px"
  md: "22px"
  lg: "32px"
  xl: "48px"
  section: "64px"
  section-lg: "84px"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.card}"
    rounded: "{rounded.md}"
    padding: "14px 22px"
  button-primary-hover:
    backgroundColor: "{colors.red-deep}"
    textColor: "{colors.card}"
    rounded: "{rounded.md}"
    padding: "14px 22px"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.card}"
    rounded: "{rounded.md}"
    padding: "14px 22px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "14px 22px"
  chip:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink2}"
    rounded: "{rounded.pill}"
    padding: "7px 13px"
  card-light:
    backgroundColor: "{colors.card}"
    rounded: "{rounded.lg}"
    padding: "24px"
  card-dark:
    backgroundColor: "rgba(255,255,255,0.05)"
    textColor: "#eaf1f0"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: Life First Aid Courses

## 1. Overview

**Creative North Star: "The Community Expert"**

This is the design language of someone the region trusts by name. Not a national franchise or a government portal — a known, experienced local whose credibility comes from showing up and doing the work for over a decade. The visual system is calm and capable: dark, grounded ink tones anchor a layout that never shouts; the Signal Red appears only where action is required; the Valley Teal carries trust and accreditation; the Wattle Gold marks things worth believing. Nothing decorates for its own sake.

Density is moderate. The site must work for both a WHS coordinator scanning compliance language and a first-timer figuring out which course applies to them. Information is legible at a glance — course codes, duration, certification type — without requiring users to read to understand. Visual hierarchy is achieved through scale and weight contrast, not color noise.

The system explicitly rejects: hospital-blue clinical sterility, faceless corporate training aesthetics, cheap local-business clip-art energy, and the warm-AI-cream monoculture that reads as "generated" before a visitor reads a word.

**Key Characteristics:**
- Dark ink base with selective use of red (action), teal (trust), amber (credential)
- Two-family type system: Bricolage Grotesque for authority, Public Sans for clarity
- Tactile, confident components that reward hover without performing for attention
- Flat at rest, shadow on hover — depth is earned, not ambient
- Mobile-first, section-based scroll rhythm; each fold has one job

## 2. Colors: The Community Expert Palette

Three intentional roles: Signal Red for action, Valley Teal for trust and accreditation, Wattle Gold for credential markers. Ink anchors everything; warm off-white carries the body.

### Primary
- **Signal Red** (`#e03b30`): The action color. Primary CTAs, emphatic inline text (`<em>` in headings), form submit buttons. Used sparingly so it retains urgency. Its deep variant (`#b22a21`) is hover only.

### Secondary
- **Valley Teal** (`#0d7c6b`): Trust and accreditation. Course category badges, icon fills, focus rings, secondary buttons. Communicates "nationally recognised, professionally delivered." Its soft tint (`#e3f0ed`) is a background for teal-zone content blocks.
- **Valley Teal Deep** (`#0a5d50`): Hover state for teal elements only.

### Tertiary
- **Wattle Gold** (`#f0a92b`): Credential and trust markers. Stars in reviews, checkmark icon strokes in trust bands, amber focus highlights, form label accent. Never used on text over light backgrounds — contrast is insufficient. Dark-section only for text.

### Neutral
- **Deep Ironstone** (`#12222c`): Primary text, dark section backgrounds (Why, TopBar, nav drawer). The dominant surface color on dark folds.
- **Slate Navy** (`#1b3340`): Secondary dark text, footer background. Slightly lighter than Ironstone; creates subtle layering on dark sections.
- **Muted Slate** (`#5a6b74`): Supporting body copy, timestamps, descriptions where emphasis is not needed.
- **Off-White Paper** (`#f5f3ec`): Main body background. Warm-tinted; in future iterations this is the first candidate for increased differentiation from the AI-cream band.
- **Light Cream** (`#fbfaf4`): Alternating section backgrounds (Industries, Steps, Area). Barely distinguishable from Paper; used for visual rhythm only.
- **Pure Card** (`#ffffff`): Card surfaces, input backgrounds, nav fill.
- **Border Line** (`#e0dccf`): Default card and divider borders. Warm, not gray.
- **Border Line Strong** (`#d2ccbd`): Heavier borders, separator rules.

**The Signal Rule.** Red appears on one primary action per viewport. If two red buttons share a screen, one of them should be dark or ghost. Scarcity is the mechanism.

**The Teal Trust Rule.** Valley Teal touches only elements that carry accreditation or verification meaning: course codes, RTO badges, checkmarks, certification language. Do not use it decoratively.

## 3. Typography

**Display Font:** Bricolage Grotesque (variable, Google Fonts; fallback: sans-serif)
**Body Font:** Public Sans (variable, Google Fonts; fallback: sans-serif)

**Character:** Bricolage Grotesque carries authority without aggression — a contemporary grotesque with optical sizing that reads well at large display scale. Public Sans is a U.S. government-commissioned font designed for legibility in critical contexts; its neutral clarity pairs with Bricolage's character without competing.

### Hierarchy

- **Display** (800, `clamp(1.875rem, 7vw, 3.875rem)`, line-height 1.05, tracking −0.02em): Hero `h1` only. Max ~62px; never above 64px. `text-wrap: balance`.
- **Headline** (800, `clamp(1.5rem, 5vw, 2.75rem)`, line-height 1.1, tracking −0.02em): Section `h2` headings. `text-wrap: balance`.
- **Title** (700, ~17–19px, line-height 1.25, tracking −0.01em): Card headings, component titles (`h3`). Bricolage Grotesque.
- **Body** (400/500, 16px, line-height 1.6): All running prose. Public Sans. Max line length 65–75ch.
- **Label** (700, 12px, letter-spacing 0.14em, uppercase): Kicker eyebrows, course codes, category tags, form labels. Used sparingly — one deliberate kicker per section is a brand signal; a kicker on every section is scaffolding. Public Sans.

**The Weight Contract Rule.** Bricolage Grotesque is always 700 or 800. Never 400 or 500 for headings — the contrast between display weight and body weight is what creates hierarchy.

## 4. Elevation

This system is flat by default. Cards rest on their background without shadow; depth is created through background color shifts between sections (ink → paper → cream → ink). Shadows appear as a response to interaction (hover) or to floating elements (sticky nav on scroll, modal-style hero card).

### Shadow Vocabulary

- **Card Hover** (`0 18px 50px -22px rgba(18, 34, 44, 0.35)`): Appears on `.ind`, `.course`, `.rev` cards on hover. Derived from the ink color; dark and directional, not gray-ambient.
- **Hero Card** (same value, always present): The dark stat card in the hero is permanently elevated — the only element with a persistent shadow at rest.

**The Flat-By-Default Rule.** Surfaces rest flat. The shadow token appears only on hover state or for the single persistently-elevated hero element. If a card grid looks flat and lifeless at rest, that is correct — interaction reveals depth.

## 5. Components

### Buttons

Tactile and confident. Min-height 48px for touch targets. Weight 700. Border-radius 10px (medium; neither sharp nor soft). Transition: 0.18s.

- **Primary:** Signal Red (`#e03b30`) background, white text, red glow shadow (`0 10px 24px -10px rgba(224,59,48,0.7)`). Hover: Deep Red (`#b22a21`) + translateY(−2px). Reserved for the single highest-priority action per section.
- **Dark:** Ironstone (`#12222c`) background, white text. Secondary action; appears alongside Primary in hero CTAs. Hover: Slate Navy + lift.
- **Ghost:** Transparent background, `#d2ccbd` border, Ironstone text. Lowest emphasis. Border shifts to ink on hover; background fills white.

### Chips

Pill-shaped (30px radius), white background, `#e0dccf` border, `#1b3340` text, 700 weight at 13px. Teal checkmark icon. Used in hero to communicate delivery modes (On-Site, Blended, Fast Turnaround). Read-only; no interactive state.

### Cards / Containers

Two card worlds:

**Light cards** (Industries, Courses, Reviews): white background (`#ffffff`), 1px `#e0dccf` border, 14–16px radius, 22–26px internal padding. No shadow at rest. On hover: teal border, card-hover shadow, translateY(−3–4px).

**Dark cards** (Why section features, Hero stat card): `rgba(255,255,255,0.05)` background on ink base, `rgba(255,255,255,0.09)` border. No shadow (the section background is the depth). Icon backgrounds: `rgba(240,169,43,0.16)` for amber icon, `rgba(13,124,107,0.4)` radial for teal glow.

### Inputs / Fields

On-dark context only (the quote form lives on the Ironstone CTA box). Background `rgba(255,255,255,0.07)`, border `rgba(255,255,255,0.16)`, 10px radius, 12–13px padding, 15px font size. Placeholder: `#7f9694`. Focus: border shifts to Wattle Gold (`#f0a92b`), no glow. Error text: `#ff9a9a`.

### Navigation

Sticky at top 0, z-index 100. Background: `rgba(251,250,244,0.95)` + `backdrop-filter: blur(10px)`. Bottom border: 1px `#e0dccf`. Scroll shadow added via JS (`0 6px 24px -16px rgba(18,34,44,.4)`). Desktop links: Slate Navy, 14.5px, 600 weight; hover: Signal Red. Mobile: full-height drawer from right, Ironstone background, white links.

### Kicker (Signature Component)

The branded section eyebrow: 12px uppercase, 700 weight, 0.14em tracking, Valley Teal Deep color, preceded by a 22×2px Signal Red bar. Used as a deliberate brand identifier — maximum one per section, not on every section.

### Category Labels (Signature Component)

Pill-shaped course category badges: 13px, Bricolage Grotesque 800, 0.06em tracking, uppercase. Color-coded by category: Core (teal tint + teal-deep text), Emergency (red tint + red-deep text), Safety (amber tint + dark ochre text), Mental Health (purple tint), Sports (green tint), Workshop (gray). A dot prefix instead of an icon.

## 6. Do's and Don'ts

### Do:

- **Do** use Signal Red for one primary CTA per viewport fold. Its scarcity is its urgency.
- **Do** use Valley Teal exclusively for accreditation and trust signals: course codes, RTO language, certification checkmarks.
- **Do** write body copy at 16px minimum, line-height 1.6, max 65–75ch. Legibility is a compliance requirement for the audience (WHS coordinators, safety managers).
- **Do** keep `text-wrap: balance` on all h1–h3 elements and `text-wrap: pretty` on long body paragraphs.
- **Do** ensure body text against any background meets WCAG 2.1 AA (≥4.5:1). The Muted Slate (`#5a6b74`) on Off-White Paper (`#f5f3ec`) must be verified — it is close to the AA threshold.
- **Do** provide `@media (prefers-reduced-motion: reduce)` alternatives for all reveal animations. Reveal `.reveal` elements must be visible by default; the transition enhances, it never gates.
- **Do** size all interactive elements to ≥44×44px touch targets.
- **Do** use Bricolage Grotesque at 700 or 800 only for headings. Never lighter.
- **Do** use the teal-soft tint (`#e3f0ed`) as a background for RTO partnership and accreditation blocks.

### Don't:

- **Don't** use a hospital-blue, clinical-white, or medical-sterile aesthetic. This brand is warm, local, and human — not a government portal or insurance form.
- **Don't** use a faceless national-franchise look: generic "your compliance solution" language, LMS-style table layouts, generic badge grids.
- **Don't** use Wattle Gold (`#f0a92b`) for body text on light backgrounds — contrast fails WCAG AA. Amber is a dark-section-only text color; on light backgrounds, limit to icon strokes and decorative star characters.
- **Don't** apply the `.kicker` eyebrow pattern to every section. One deliberate kicker per page is brand voice; an uppercase tracked label above every heading is AI scaffolding. Vary the section openers.
- **Don't** use `border-left` greater than 1px as a colored accent stripe on cards or callouts.
- **Don't** use gradient text (`background-clip: text`).
- **Don't** use numbered section markers (01 / 02 / 03) outside genuinely sequential flows (the 4-step booking process earns it; section headings do not).
- **Don't** gate content behind a reveal animation. `.reveal { opacity: 0 }` combined with an IntersectionObserver means content ships invisible if JS is slow or the tab is hidden. Reveals must enhance already-visible content.
- **Don't** add more fonts. The system is Bricolage Grotesque + Public Sans. A third family is a distraction, not richness.
- **Don't** use SaaS startup defaults: gradient hero cards, cream-on-cream restraint, or hero-metric big-number templates (10+ / 20+ stat boxes should be used with contextual framing, not as the primary proof of authority).
