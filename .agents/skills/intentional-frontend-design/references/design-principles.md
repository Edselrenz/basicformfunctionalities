# Design Principles and Token Architecture

Operational rules for translating product requirements into a coherent design system, typographic hierarchy, color architecture, and spatial layout.

## 1. Establishing Visual Direction by Domain

Never rely on a single house style. Select a visual paradigm based on the user's cognitive load, environment, and primary task:

| Paradigm | Target Products | Surface & Border Language | Typography Strategy | Density & Grid |
| :--- | :--- | :--- | :--- | :--- |
| **Utilitarian / High-Density** | Admin consoles, DevOps, financial terminals, log analyzers | Flat surfaces, crisp `1px solid` hairlines, zero drop shadows on rows, subtle row-hover luminance shifts | Geometric sans UI (`13px-14px`) + monospace numerals/IDs (`tabular-nums`) | High density, full-width fluid grids, sticky headers, split inspection panes |
| **Editorial / Reading-First** | Long-form journalism, documentation, knowledge bases, bookstores | Warm paper-like neutrals or deep ink dark mode, structural divider rules (`1px` or `2px`), minimal chrome | High-contrast serif or expressive display headings paired with readable body text (`16px-19px`, line-height `1.65`) | Asymmetric multi-column grids with a strict `60ch-72ch` prose measure |
| **Spatial / Canvas-Led** | Travel itinerary planners, GIS tools, node editors, whiteboards | Full-bleed interactive canvas with translucent or high-contrast docked tool rails (`border-radius: 8px-12px`) | Crisp sans-serif labels, compact badge numerals for distances, durations, and coordinates | Edge-to-edge viewport (`100dvh`) with collapsible sidebars and floating HUD controls |
| **Tactile / Merchandising** | E-commerce catalogs, curated marketplaces, booking platforms | Clean neutral canvas so product photography dominates; subtle borders only on interactive inputs and cards | Clear price hierarchy, scannable specification lists, restrained uppercase category kickers | Aspect-ratio-locked media grids (`4:5`, `1:1`, or `16:9`) with persistent filter rails |
| **Expressive / Studio** | Creative portfolios, design agencies, cultural institutions | High-contrast monochrome or curated 2-color editorial palettes, exposed grid lines, bold focal canvases | Oversized display headers (`clamp(2.5rem, 6vw, 5.5rem)`) with tight tracking (`-0.03em`) | Intentional asymmetry, varied pacing between full-bleed showcases and quiet text blocks |

## 2. Semantic Color Architecture

Define colors by their **functional role** in the interface rather than their hue name. Avoid raw hex values in component files.

### Token Structure Example (CSS Custom Properties)

```css
:root {
  /* Surface Hierarchy (Light Mode) */
  --bg-canvas: #f8f9fa;        /* Base page background */
  --bg-surface: #ffffff;       /* Primary containers, tables, panels */
  --bg-elevated: #ffffff;      /* Modals, popovers, dropdown menus */
  --bg-subtle: #f1f3f5;        /* Secondary wells, code blocks, table headers */

  /* Typography Hierarchy */
  --text-primary: #111827;     /* Main headings and body copy (>= 12:1 contrast) */
  --text-secondary: #4b5563;   /* Supporting descriptions and metadata (>= 7:1 contrast) */
  --text-muted: #6b7280;       /* Captions, timestamps, disabled hints (>= 4.5:1 contrast) */

  /* Structural Hairlines & Borders */
  --border-subtle: #e5e7eb;    /* Table row dividers, section boundaries */
  --border-strong: #d1d5db;    /* Form input borders, active card outlines */

  /* Interactive & Brand Accents */
  --accent-primary: #0f172a;   /* Primary CTA fill or active indicator */
  --accent-primary-fg: #ffffff;/* Text on primary CTA */
  --accent-interactive: #2563eb;/* Links, focus rings, selected states */

  /* Semantic Status Roles */
  --status-success-bg: #ecfdf5;
  --status-success-fg: #065f46;
  --status-warning-bg: #fffbeb;
  --status-warning-fg: #92400e;
  --status-danger-bg: #fef2f2;
  --status-danger-fg: #991b1b;
}
```

### Color Discipline Rules

- **60-30-10 Proportion:** Allocate roughly 60% of the viewport to `--bg-canvas` and `--bg-surface`, 30% to `--bg-subtle` and structural typography, and 10% or less to `--accent-primary` and semantic status indicators.
- **Dark Mode Adaptation:** In dark themes, convey elevation through **lighter surface luminance** (for example, `#0b0f17` canvas -> `#111827` surface -> `#1f2937` modal) and `1px solid rgba(255,255,255,0.08)` top borders rather than dark drop shadows.
- **Status Clarity:** Never rely on color alone to communicate status. Pair semantic colors with explicit text labels or unmistakable iconography (`Active`, `Delayed`, `Failed`).

## 3. Typographic Hierarchy and Scannability

Typography carries 80% of an interface's visual quality. Configure scale, weight, and spacing systematically:

- **Font Pairing:** Limit any application to a maximum of 2 font families (3 if a dedicated monospace font is required for technical data).
  - *Functional / SaaS:* Clean grotesque or neo-grotesque sans (such as Inter, Plus Jakarta Sans, or Geist) + crisp monospace (JetBrains Mono or Fira Code).
  - *Editorial / Cultural:* High-contrast serif (Newsreader, Playfair Display, or Instrument Serif) + humanist sans (Source Sans 3 or DM Sans).
- **Modular Scale & Fluid Sizing:**
  - Display / Hero: `clamp(2rem, 4vw + 1rem, 3.5rem)`, line-height `1.08`, letter-spacing `-0.025em`, font-weight `600-700`.
  - Page Title (`h1`): `clamp(1.5rem, 2vw + 0.75rem, 2.25rem)`, line-height `1.15`, letter-spacing `-0.02em`, font-weight `600`.
  - Section Header (`h2`): `1.25rem` (`20px`), line-height `1.25`, letter-spacing `-0.01em`, font-weight `600`.
  - Subsection / Group Title (`h3`): `1rem` (`16px`), line-height `1.4`, font-weight `600`.
  - Body Copy: `1rem` (`16px`) for reading views or `0.875rem` (`14px`) for dense workspace tools, line-height `1.55-1.65`.
  - Metadata / Labels / Kickers: `0.75rem` (`12px`), line-height `1.4`, letter-spacing `0.04em` (if uppercase), font-weight `500-600`.
- **Numeric Alignment:** Always apply `font-variant-numeric: tabular-nums` to prices, timestamps, metrics, tables, timers, and coordinates so digits align vertically across rows.

## 4. Spatial Rhythm, Grids, and Surface Geometry

### Spacing Scale

Use a deterministic base-4 or base-8 spacing scale (`4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`).

- **Internal padding vs. external gap:** The spacing *between* distinct groups must always exceed the spacing *inside* a group (Law of Proximity). If a card has `20px` internal padding, a label and its value inside that card should have `4px-8px` gap, not `24px`.

### Concentric Border Radii

When nesting rounded elements (such as a button or image inside a container), calculate the inner radius relative to the outer radius and padding:

$$\text{Inner Radius} = \max(0, \text{Outer Radius} - \text{Padding})$$

For example, if an outer panel uses `border-radius: 12px` and `padding: 4px`, the inner element should use `border-radius: 8px` so the corners remain optically parallel.

### Layout Archetypes Beyond Hero + Cards

Choose structural compositions that match user workflow:

1. **Master-Detail Split Pane:** Left list/table pane (`320px-400px` fixed or resizable) + right detail workspace (`1fr`). Ideal for email clients, issue trackers, itinerary stops, and log viewers.
2. **Sticky Control Rail + Fluid Data Canvas:** Top sticky toolbar containing search, active filter chips, view switcher, and primary action, mounted directly above a full-bleed table or map.
3. **Chronological Spine / Timeline:** Vertical axis connecting time-stamped nodes with duration connectors, inline status pills, and expandable details. Ideal for travel itineraries, deployment histories, and audit logs.
4. **Asymmetric Editorial Grid:** A `12-column` CSS Grid where a sticky `3-column` index rail anchors a `7-column` reading flow and a `2-column` marginalia/footnote track.
