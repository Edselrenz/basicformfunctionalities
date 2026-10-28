# Anti-Patterns and Remediation Guide

A diagnostic catalog of generic AI-generated UI patterns, why they fail in production interfaces, when specific techniques are genuinely justified, and how to refactor them into intentional designs.

## 1. Visual and Surface Anti-Patterns

### A. Unmotivated Purple/Blue/Neon Gradients

- **The Cliché:** Applying `linear-gradient(135deg, #6366f1, #a855f7, #ec4899)` to hero backgrounds, primary buttons, card borders, and heading text (`background-clip: text`) regardless of brand or industry.
- **Why It Fails:** Immediately signals an unedited AI template, reduces text contrast on buttons, and clashes with domain trust in finance, healthcare, commerce, and enterprise tools.
- **When Appropriate:**
  - Subtle atmospheric scrims (`linear-gradient(to top, rgba(0,0,0,0.75), transparent)`) placed over photography to guarantee white text legibility.
  - Continuous data visualizations, thermal maps, or elevation charts where color progression encodes quantitative meaning.
- **Remediation:** Replace decorative gradients with high-craft solid semantic surfaces (`--bg-canvas`, `--bg-subtle`), crisp `1px` borders, and a single high-contrast solid accent color.

### B. Universal Rounded Card Syndrome (Card Bloat)

- **The Cliché:** Wrapping every single heading, paragraph, stat, filter bar, and list item in its own `<div class="bg-white rounded-2xl shadow-lg p-6">`.
- **Why It Fails:** Creates visual clutter ("box-inside-a-box" fatigue), wastes 30%-40% of viewport width on double margins and padding, and destroys scannability across related data rows.
- **When Appropriate:**
  - Encapsulating genuinely independent, draggable, or clickable multi-attribute objects (such as Kanban cards, media gallery items, or selectable pricing tiers).
- **Remediation:** Group related information using whitespace, typographic hierarchy, and single `1px solid var(--border-subtle)` horizontal rules (`divide-y`) or native `<table>` rows.

### C. Excessive Glassmorphism and Decorative Background Blobs

- **The Cliché:** Placing blurred neon circles (`filter: blur(80px)`) behind semi-transparent containers (`backdrop-filter: blur(16px); background: rgba(255,255,255,0.05)`).
- **Why It Fails:** Degrades text contrast across unpredictable scroll positions and triggers costly GPU compositing repaints on mobile devices.
- **When Appropriate:**
  - Compact floating map controls, media player overlays, or sticky navigation headers where seeing spatial continuity beneath the bar aids orientation.
- **Remediation:** Use opaque or near-opaque (`92%+` opacity) surface tokens with explicit border contrast for primary reading and working areas.

## 2. Structural and Layout Anti-Patterns

### A. The Mandatory Marketing Hero in Functional Apps

- **The Cliché:** Opening an authenticated dashboard, itinerary planner, or admin tool with a giant centered banner ("Welcome to NextGen Analytics - Empower Your Workflow") and two large pill buttons.
- **Why It Fails:** Forces daily users to scroll past empty marketing copy every time they open the tool to perform work.
- **When Appropriate:**
  - Public-facing unauthenticated product landing pages or first-run onboarding splash screens.
- **Remediation:** Start functional applications directly with the workspace: a compact header bar containing context selectors, global search, key summary metrics, and the primary interactive canvas or table.

### B. Repetitive 3-Column Icon-Card Grids

- **The Cliché:** Structuring every page as stacked rows of 3 identical cards, each containing a tinted circle icon, a 2-word bold title, and 2 lines of generic text.
- **Why It Fails:** Treats all features and data points as having identical weight, resulting in monotonous pacing and zero visual focal point.
- **When Appropriate:**
  - Comparing 3 parallel items of equal structural weight (such as 3 subscription tiers or 3 standardized shipping methods).
- **Remediation:** Vary section compositions based on content type: pair an interactive demo or annotated workflow diagram with a structured specification list, a comparison table, or an asymmetric split layout.

## 3. Content, Iconography, and Interaction Anti-Patterns

### A. Emoji and Redundant Icon Clutter

- **The Cliché:** Prefixing every heading, button, nav link, and badge with rocket (`🚀`), sparkles (`✨`), fire (`🔥`), or redundant SVG icons.
- **Why It Fails:** Looks amateurish in professional tools and slows down reading when users must decode arbitrary symbols alongside clear text labels.
- **When Appropriate:**
  - Compact icon-only action buttons (with `aria-label`), file-type indicators, directional arrows, or semantic status badges (`CheckCircle`, `AlertTriangle`).
- **Remediation:** Strip decorative emoji from UI chrome. Let strong typography and spacing establish hierarchy, reserving a cohesive SVG icon set (such as Lucide, Phosphor, or Heroicons with consistent stroke width) for functional signifiers.

### B. Dead Controls and Fake Interactivity

- **The Cliché:** Rendering filter dropdowns, search inputs, pagination buttons, or tab bars that are static HTML with no event listeners or state updates.
- **Why It Fails:** Breaks user trust immediately when clicked and fails basic usability testing.
- **Remediation:** Every rendered control within task scope must work. Wire search inputs to filter visible items, wire column headers or sort controls to sort data, wire tabs to switch active panels, and provide clear empty states when a filter returns zero matches.

### C. Fabricated Social Proof and Meaningless Placeholders

- **The Cliché:** Inventing fake customer quotes ("This app changed my life! - Jane Doe, CEO at TechCorp"), fake "Trusted by 10,000+ companies" banners, or repetitive `Lorem ipsum` paragraphs.
- **Remediation:** Never invent testimonials, certifications, or business metrics unless provided by the user. Populate interfaces with realistic, domain-specific sample data (for example, realistic itinerary stops like "Kyoto Station -> Fushimi Inari, 14 min via JR Nara Line, ¥150" or realistic server logs).
