---
target: src/pages/index.astro
total_score: 24
p0_count: 0
p1_count: 2
timestamp: 2026-06-26T14-09-40Z
slug: src-pages-index-astro
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Form submits via `mailto:` — user sees nothing happen until email client opens |
| 2 | Match System / Real World | 3 | Copy speaks the audience's language; HLTAID codes appropriate for WHS buyers but opaque to first-timers |
| 3 | User Control and Freedom | 3 | Anchor nav works cleanly; mobile drawer has overlay-tap close |
| 4 | Consistency and Standards | 3 | Inline style override on ghost button in CTA deviates from system |
| 5 | Error Prevention | 2 | Name + email validated; people count is type="text"; no required attribute fallback |
| 6 | Recognition Rather Than Recall | 3 | Sticky nav + anchor links; category badges on courses |
| 7 | Flexibility and Efficiency | 2 | Expected for a landing page |
| 8 | Aesthetic and Minimalist Design | 2 | 6 identical icon-card grid in Why; kicker on every section |
| 9 | Error Recovery | 2 | Inline errors appear; only first-invalid field gets focus; no scroll-to-error |
| 10 | Help and Documentation | 2 | No FAQ or "which course?" guidance for first-timers |
| **Total** | | **24/40** | **Acceptable** |

## Anti-Patterns Verdict

**LLM assessment:** Partly AI-looking. Differentiators: Bricolage Grotesque + Public Sans pairing (strong), color role discipline (consistent), ECG animation (distinctive). Against: 6 identical icon-card Why section, kicker on every section, warm cream background. Net: competent but not distinctive.

**Deterministic scan:** One finding — single-font flagged in Layout.astro. FALSE POSITIVE — both Bricolage Grotesque and Public Sans are imported and used correctly.

## Overall Impression

Solid bones, template skin. Strong copy and color discipline undermined by identical icon grid and kicker overuse. Mailto form is a conversion liability on mobile.

## What's Working

1. Typography pairing — Bricolage Grotesque 800 vs Public Sans 400 creates strong authority signal.
2. Color role discipline — red/teal/amber separation executed consistently throughout.
3. ECG animation — unexpected, earned, distinctive to the brand context.

## Priority Issues

**[P1] Reveal animation gates visible content** — `.reveal { opacity: 0 }` hides elements including `.cta-box` (the quote form) until IntersectionObserver fires. Background tabs on mobile mean the CTA can ship invisible. Fix: start elements visible; enhance with JS class.

**[P1] Mailto form: invisible conversion friction** — "Request My Quote" navigates window.location to mailto:. On mobile without configured email client, nothing happens. Primary conversion element fails silently. Fix: add clear above-button disclosure; medium-term replace with real form handler.

**[P2] Identical icon-card grid in Why section** — 6 identical rounded-icon + h3 + p cards. Banned pattern ("Large rounded-corner icons above every heading"). Equalizes items of different importance. Fix: elevate 2-3 key differentiators, demote the rest to a list.

**[P2] Kicker eyebrow on every section** — .kicker appears on Hero, Why, Steps, and more. Banned as AI scaffolding when used on every section. Fix: keep hero kicker (location context), remove from 3-4 other sections.

**[P3] Title Case body copy** — Every sentence uses Title Case in body paragraphs, list items, form labels, meta description. Slows reading; non-standard. Fix: convert body copy to sentence case.

## Persona Red Flags

**Jordan (First-Timer):** Clicks submit on mobile → nothing visible happens (no configured email client). "Units Needed" placeholder assumes domain knowledge they don't have. No course selection guidance.

**Casey (Distracted Mobile User):** .cta-box.reveal invisible in background tab. Nav logo 88px + RTO logo 96px takes prime mobile real estate. Quote form requires extensive typing.

**Riley (Stress Tester):** No maxlength on name field. People count accepts "twelve" (type="text"). JS-only validation means bots or no-JS sends empty mailto.

## Minor Observations

- Phone button uses 📞 emoji; rest of icon system uses SVG. Inconsistent.
- Ghost button in CTA has inline style overrides — should be a dark-section variant class.
- GSAP v3.15 installed but unused; ECG uses raw rAF. DrawSVGPlugin + SplitText would raise motion ceiling.
- Steps 01–04 numbers are legitimate sequential markers (genuine ordered flow). Not a violation.
- 1180px max-width container may push body paragraphs past 75ch in some sections.

## Questions to Consider

- "What if Why section had 2 large differentiators + 4 compact secondary points?"
- "Is there appetite for using GSAP properly — SplitText on hero h1, orchestrated entrance — instead of the CSS reveal system with the visibility bug?"
- "Should the phone CTA appear earlier and stickier so mobile users who won't fill a form have a zero-friction path?"
