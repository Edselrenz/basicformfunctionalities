---
name: intentional-frontend-design
description: Design and implement distinctive, context-aware, production-quality front-end interfaces while preventing generic AI-generated UI patterns. Use when building, redesigning, styling, or reviewing web pages, dashboards, SaaS applications, landing pages, portfolios, e-commerce sites, administrative systems, or mobile-first interfaces across HTML/CSS, React, Next.js, Vue, Angular, or Tailwind CSS.
---
# Intentional Front-End Design

Design and implement production-grade interfaces grounded in product purpose, user workflow, and domain context rather than default AI habits. This skill replaces predictable templates, meaningless gradients, and repetitive card grids with deliberate visual systems, semantic code, and verifiable usability.

## When to Use

- Building a new web application, page, view, or screen from scratch
- Redesigning or refactoring an existing interface that looks generic, inconsistent, or unfinished
- Translating wireframes, screenshots, mockups, or brand references into front-end code
- Implementing interactive dashboards, SaaS tools, e-commerce flows, itineraries, editorial layouts, or portfolios
- Reviewing and auditing front-end code for visual hierarchy, responsiveness, and accessibility

## Core Design Philosophy

### 1. Design for the Product, Not AI Habits

Derive every visual decision from seven concrete inputs:

1. **Product purpose:** What core job does the interface perform?
2. **Target users:** Are they hurried operators, casual shoppers, technical developers, or readers?
3. **Industry and context:** What conventions establish trust in this domain?
4. **User tasks:** What actions must be fastest to find and complete?
5. **Emotional tone:** Should the interface feel authoritative, calm, energetic, utilitarian, or tactile?
6. **Information hierarchy:** What data belongs in the primary focal zone versus secondary disclosure?
7. **Technical environment:** Will users interact on wide desktop monitors, mobile viewports in bright sunlight, or keyboard-driven terminals?

Never apply the same visual template to a travel itinerary app, a cybersecurity console, an independent bookstore, and a creative studio portfolio.

### 2. Establish a Deliberate Visual Direction Before Coding

Before writing component markup for new pages or major redesigns, define these ten parameters internally (or align with the existing codebase for minor updates):

1. **Design concept:** A one-sentence architectural thesis (for example, "High-density financial terminal with tabular precision and muted slate surfaces").
2. **Visual personality:** Two to three governing traits (for example, "Utilitarian, crisp, high-contrast").
3. **Color palette and roles:** Semantic roles for background canvas, elevated surface, primary text, muted text, border hairline, primary accent, and semantic status states.
4. **Typography hierarchy:** Distinct font families, weights, line heights, and tracking rules for display headings, section headers, body prose, UI labels, and monospace/tabular numerals.
5. **Spacing and layout grid:** Base spacing unit, container max-widths, column rules, and density target.
6. **Surface and shape language:** Intentional border radii, border widths, shadow depth, and surface elevation logic.
7. **Iconography and imagery rules:** Stroke weight, sizing, aspect ratios, cropping style, and asset fallbacks.
8. **Interaction and motion principles:** Hover/focus/active transitions, timing functions, and state feedback mechanisms.
9. **Responsive adaptation:** How navigation, multi-pane layouts, and dense tables transform across breakpoints.
10. **Project-specific anti-patterns:** Two to three clichés explicitly banned for this specific build.

*Scope rule for small tasks:* When fixing a bug or adding a minor control to an existing app, do not invent a new design direction. Inspect the existing tokens and components, infer the active system, and preserve it faithfully.

### 3. Create Distinction Through Intentional Decisions

Generate visual identity through structural choices rather than superficial decoration:

- **Typography and scale contrast:** Pair expressive display sizing or crisp technical headers with highly legible body copy and `font-variant-numeric: tabular-nums` for data.
- **Composition and density:** Match whitespace to task cadence. Use generous breathing room for editorial reading and tight, scannable density for operational tools.
- **Grid structure and alignment:** Use asymmetric split grids, sticky control rails, full-bleed canvases, or hairline-divided tables instead of defaulting to equal three-column cards.
- **Color relationships:** Use color primarily for hierarchy, state communication, and focal guidance rather than full-bleed decorative gradients.

### 4. Prioritize Usability Over Decoration

Every visual element must earn its screen real estate. If a blur effect, badge, floating graphic, or animation reduces contrast, obscures a primary action, causes layout shift, or slows task completion, remove it. Make the interface look engineered and designed, never merely decorated.

## Step-by-Step Anti-Generic Workflow

### Phase 1: Understand the Project

Inspect the workspace before generating UI code:

1. Identify the framework, styling engine (CSS Modules, Tailwind, SCSS, styled-components), component library, and icon package in `package.json` or project files.
2. Check global stylesheets, theme configs, and existing components for established design tokens.
3. Map the primary user journey, required interactive states, and target viewport sizes.
4. Inspect any user-supplied screenshots, mockups, or brand references.

*Handling incomplete requirements:* If minor visual details are unspecified, make pragmatic domain-appropriate choices and proceed. Ask clarifying questions only when core functional workflows or destructive architectural changes are ambiguous. Never overwrite an existing project design system without explicit user instruction.

### Phase 2: Establish a Design Concept

Evaluate two to three distinct directions suited to the product domain and commit to the strongest match:

- **Utilitarian / Technical:** Crisp 1px borders, subtle surface contrast, monospace metadata, compact controls, zero ornamental graphics.
- **Editorial / Content-First:** Strong serif or high-contrast grotesque headings, controlled 60ch-75ch measure, structural rules, generous vertical rhythm.
- **Spatial / Canvas-Centered:** Full-viewport interactive map or workspace canvas with docked, collapsible tool panels and translucent floating HUD controls.
- **Tactile / Catalog:** High-impact imagery with consistent aspect ratios, clean price/variant typography, subtle warm neutrals, frictionless filter rails.
- **Expressive / Studio:** Purposeful asymmetry, bold typographic focal points, bespoke grid choreography, restrained color palette with high contrast.

Consult `references/design-principles.md` for detailed execution parameters across these directions.

### Phase 3: Build a Consistent Design System

Encode your design decisions into reusable tokens before building views:

- Define semantic color tokens (`--bg-canvas`, `--bg-surface`, `--bg-elevated`, `--text-primary`, `--text-secondary`, `--border-subtle`, `--accent-primary`, `--status-danger`) rather than hardcoding raw hex values across components.
- Define a modular type scale (5 to 7 steps) and explicit line-height rules (`1.1-1.2` for headings, `1.5-1.65` for body copy).
- Establish a consistent spacing rhythm (such as a 4px/8px scale) and container constraints.
- Define 2 to 3 intentional border-radius tokens matched to component hierarchy (nested inner elements must use a smaller radius than their outer container).
- Keep the token set proportional to project size. A single-page utility needs 15 to 25 CSS custom properties, not an enterprise token architecture.

### Phase 4: Design the Actual Interface

Select page architecture based on what users need to see and do first:

- **Operational / Admin tools:** Lead with summary KPI strips, filterable data tables, split master-detail drawers, or action toolbars. Do not put a marketing hero banner inside an authenticated dashboard.
- **Geographic / Travel planners:** Pair an interactive map or route visualizer with a synchronized chronological itinerary timeline and budget/duration rollup.
- **Content / Documentation:** Prioritize reading ergonomics, sticky table-of-contents navigation, and clear typographic hierarchy.
- **Creative / Marketing pages:** Lead with a concrete product artifact, interactive preview, or asymmetric typographic statement rather than a centered title + subtitle + two-button cliché.

### Phase 5: Implement with Production-Quality Code

Write clean, functional, framework-idiomatic code:

- Use semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<button>`, `<dialog>`, `<table>`) with proper ARIA attributes where native semantics need augmentation.
- Implement real interactive state within task scope: working tab switches, live search/filter logic, sorting, modal toggles, form validation, and state updates.
- Implement complete UI states: **loading** (skeletons or inline spinners), **empty** (helpful guidance and primary creation CTA), **error** (clear recovery steps), **disabled**, **hover**, **focus-visible**, and **active**.
- Customize component libraries (such as Radix, shadcn/ui, Material, Ionic, or Ant Design) via tokens and theme overrides when default styles clash with the product direction.
- Never silently delete existing business logic, event handlers, or data bindings to simplify visual styling.

### Phase 6: Refine and Validate

Never treat the first render pass as finished:

1. **When browser/preview tools are available:** Run the app, inspect desktop (1440px), tablet (768px), and mobile (375px) viewports, test keyboard tab order, trigger empty/error states, check console logs for runtime errors, and compare against any visual references.
2. **When visual tools are unavailable:** Perform static code verification. Audit CSS grid/flex wrapping rules, verify contrast ratios mathematically from token values, trace state handlers, check for hardcoded widths that cause horizontal overflow, and explicitly mark visual rendering items as unverified in your summary.

## Mandatory Anti-Pattern Safeguards

Avoid generic AI habits while understanding when specific techniques are genuinely justified. See `references/anti-patterns.md` for full remediation patterns.

| Pattern | Prohibited Cliché (Never Do This) | Intentional Exception (When Appropriate) |
| :--- | :--- | :--- |
| **Gradients** | Unmotivated purple-to-blue or neon gradients on backgrounds, buttons, and text headings (`bg-clip-text`). | Subtle directional luminance shifts to aid legibility over photography, or data heatmaps representing continuous metrics. |
| **Glassmorphism & Blur** | Heavy `backdrop-filter: blur()` over noisy floating blobs that reduce text contrast and hurt GPU scroll performance. | Compact floating HUD toolbars or sticky navigation headers overlapping live map canvases or media viewports. |
| **Rounded Cards** | Wrapping every paragraph, metric, list item, and table row inside an individual `rounded-2xl shadow-lg` card. | Grouping genuinely independent, movable, or clickable multi-attribute objects (such as kanban tickets or product tiles). |
| **Hero + 3-Column Grid** | Defaulting every page to a centered oversized heading, two pill buttons, and three identical icon-in-circle feature cards. | Clear 3-tier pricing comparisons or structured 3-step onboarding flows where parallel comparison aids comprehension. |
| **Icons & Emoji** | Placing decorative icons or emoji next to every section heading, table column header, and button label. | Status indicators, compact icon-only toolbar actions (with `aria-label`), or wayfinding categories where icons speed visual scanning. |
| **Typography & Scale** | Using a single font weight everywhere, or using `4rem` display headings inside functional workspace screens. | Expressive editorial features, brand storytelling pages, or portfolio hero statements where typography is the primary medium. |
| **Fake Controls** | Rendering search bars, filter pills, pagination buttons, or toggles with no state handlers or feedback. | Static architectural wireframes explicitly requested as non-interactive visual mocks. |
| **Fabricated Claims** | Inventing fake company logos, fake customer testimonials, "99.9% AI accuracy" badges, or meaningless `Lorem ipsum`. | Realistic, domain-accurate sample records (such as plausible flight legs, API endpoints, or inventory SKUs) clearly scoped as seed data. |

## Contextual Adaptation by Domain

Tailor layout density, surface hierarchy, and interaction mechanics to the product category:

- **Travel and Itinerary Applications:** Emphasize geographic relationships and chronological sequencing. Use split map-plus-timeline layouts, clear transit connectors showing duration and distance, scannable day-by-day tabs, currency/budget rollups, and aspect-locked destination photography.
- **Administrative Dashboards and SaaS:** Optimize for scanning speed and bulk action efficiency. Use compact spacing, hairline-divided tables with right-aligned tabular numbers, sticky headers, multi-facet filter bars, keyboard shortcuts, and semantic status badges (`success`, `warning`, `error`, `neutral`).
- **Developer Tools and Technical Platforms:** Prioritize syntax clarity and precision. Use dark or high-contrast neutral palettes, monospace fonts for logs/IDs/code, copy-to-clipboard buttons with confirmation states, collapsible JSON/tree inspectors, and command palettes.
- **E-Commerce and Catalogs:** Prioritize product inspection, trust, and conversion clarity. Use consistent image aspect ratios (such as `4:5` or `1:1`), prominent price and stock indicators, tactile variant selectors (size/color swatches), sticky cart summaries, and unobstructed checkout actions.
- **Editorial and Content Platforms:** Optimize for sustained reading comfort. Constrain prose width to `60ch-72ch`, establish generous line height (`1.6+`), use clear typographic contrast between headlines, deck summaries, bylines, and pull quotes, and eliminate distracting sidebar clutter.
- **Portfolios and Creative Websites:** Establish a memorable signature identity. Use deliberate grid tension, custom typographic scale ratios, curated case-study pacing, and restrained micro-interactions that showcase craft without breaking navigation.

## Technical and Accessibility Standards

Follow the project's established stack (HTML/CSS/JS, React, Next.js, Vue, Angular/Ionic, Tailwind CSS) and enforce these baseline standards (detailed in `references/responsive-accessibility.md`):

- **Semantic structure:** Maintain a logical heading hierarchy (`<h1>` through `<h4>` without skipping levels) and landmark regions.
- **Keyboard and focus:** Ensure every interactive control is reachable via `Tab` and displays a high-contrast `:focus-visible` indicator (`outline: 2px solid var(--accent-primary); outline-offset: 2px`).
- **Color contrast:** Maintain at least `4.5:1` contrast for normal body text and `3:1` for large text, icons, and active UI boundaries (WCAG 2.2 AA).
- **Motion safety:** Wrap non-essential entrance animations and smooth scrolling in `@media (prefers-reduced-motion: no-preference)`.
- **Touch targets and responsiveness:** Provide a minimum `44x44px` hit area on touch viewports. Prevent unintended horizontal page overflow (`overflow-x`) across `320px` to `1920px+` widths.
- **Accessible forms:** Pair every input with a visible `<label>`, associate validation errors via `aria-describedby` and `aria-invalid`, and never rely on placeholder text as the sole label.

## Reference-Driven Design Process

When the user supplies a screenshot, mockup, URL, or visual reference:

1. **Deconstruct core traits:** Analyze grid ratios, background/surface luminance, typographic pairing, border treatments, and component density.
2. **Separate intent from artifact:** Distinguish requested structural traits (such as "use this split sidebar-and-canvas layout and dark slate palette") from incidental details (such as browser chrome or unrelated proprietary logos).
3. **Map to project tokens:** Translate the reference's proportions and colors into the project's token system.
4. **Honest verification:** Never claim "pixel-perfect" reproduction unless you have rendered the output and compared it directly against the reference image.

## Weak Generic Decisions vs. Context-Driven Alternatives

- **Weak (Analytics Dashboard):** Placing 4 huge pastel gradient KPI cards above 3 rounded card containers with centered text and decorative rocket icons.
- **Context-Driven (Analytics Dashboard):** A compact top metric bar with inline sparklines and delta percentages (`+4.2%`), followed by a full-width filterable data table using `tabular-nums`, hairline borders, row hover actions, and a slide-over detail inspector.

- **Weak (Travel Planner):** A generic SaaS landing hero ("Plan Your Dream Trip with AI") followed by a 3-column grid of destination cards with identical "Learn More" buttons.
- **Context-Driven (Travel Planner):** An immediate two-pane workspace featuring a chronological day-by-day itinerary spine on the left (with transit times, booking status, and budget tally) synchronized with an interactive route map and pinned stops on the right.

Consult `examples/design-decisions.md` for complete code comparisons.

## Practical Design Review Checklist

Verify every item before completing a front-end task (see `references/quality-checklist.md` for deep inspection procedures):

- [ ] **Visual identity:** Does the interface express a deliberate, domain-suited direction rather than default styling?
- [ ] **Hierarchy:** Can a user identify the primary metric, content focal point, and main CTA within 3 seconds?
- [ ] **Composition:** Does the page layout directly serve the user's primary workflow without unnecessary wrapper cards?
- [ ] **Typography:** Are font sizes, weights, line lengths (`60ch-75ch` for prose), and `tabular-nums` applied consistently?
- [ ] **Color:** Do all colors map to clear semantic roles and pass WCAG AA contrast thresholds?
- [ ] **Consistency:** Do components share coherent border, radius, and spacing tokens without monotonous repetition?
- [ ] **Functionality:** Do interactive controls (filters, tabs, modals, inputs) work as expected with real state feedback?
- [ ] **Responsive behavior:** Does the layout adapt cleanly from `375px` mobile to wide desktop without clipping or horizontal overflow?
- [ ] **Accessibility:** Are semantic tags, `<label>` bindings, keyboard navigation, and `:focus-visible` states implemented?
- [ ] **Technical quality:** Does the code respect existing project architecture, dependencies, and reusable patterns?
- [ ] **Distinctiveness test:** Could this UI be mistaken for an unrelated AI template if its text were swapped? If yes, refactor layout and surface tokens before finishing.

## 100-Point Evaluation Rubric and Completion Protocol

Score every major front-end deliverable against this rubric before returning the final response:

1. **Context and Product Suitability (15 pts):** Layout, density, and tone match domain workflows and target users.
2. **Visual Identity and Distinctiveness (20 pts):** Clear design thesis; free from unmotivated gradients, card bloat, and template clichés.
3. **Layout and Information Hierarchy (15 pts):** Scannable focal flow, purposeful spatial grouping, and clear action prominence.
4. **Typography, Color, and Spacing (15 pts):** Coherent token scale, semantic color roles, legible measure, and rhythmic alignment.
5. **Usability and Interaction Quality (15 pts):** Working interactive states, complete loading/empty/error states, and intuitive controls.
6. **Responsive Behavior and Accessibility (10 pts):** Semantic HTML, WCAG AA contrast, `:focus-visible` styles, and overflow-free mobile scaling.
7. **Code Quality and Maintainability (10 pts):** Idiomatic framework usage, clean token organization, zero regressions to existing features.

### Mandatory Completion Threshold

- **Passing Score:** Minimum **85 / 100** based on observable code and rendering evidence.
- **Zero-Tolerance Gates (Automatic Fail Regardless of Score):**
  1. Critical accessibility failures (missing form labels, keyboard traps, unreadable contrast).
  2. Broken primary interactions or silent removal of existing application functionality.
  3. Severe responsive defects (unintended horizontal scrollbars or unreachable controls on mobile).
  4. Unresolved runtime, compilation, or console errors.
- **Evidence Rule:** Base scores strictly on verified code or live preview inspection. If live browser rendering is unavailable in the environment, state explicitly which visual checks were verified via static CSS/DOM analysis and which remain unverified at runtime.

## Supplementary References

Load these files when deeper guidance or concrete implementation patterns are needed:

- `references/design-principles.md` - Typography scales, semantic color systems, grid choreography, and domain adaptation guides.
- `references/anti-patterns.md` - Diagnostic catalog of generic AI UI clichés, justified exceptions, and refactoring patterns.
- `references/responsive-accessibility.md` - Framework-specific accessibility patterns, WCAG 2.2 AA rules, and responsive strategies.
- `references/quality-checklist.md` - Pre-completion audit procedures, static vs. runtime verification, and detailed rubric scoring criteria.
- `examples/design-decisions.md` - Side-by-side architectural and code comparisons contrasting generic AI UI with context-driven implementations.
