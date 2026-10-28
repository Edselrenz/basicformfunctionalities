# Quality Checklist and 100-Point Evaluation Rubric

Use this operational verification protocol before declaring any front-end implementation complete.

## 1. Runtime vs. Static Verification Protocol

### Mode A: Live Browser / Preview Environment Available

Execute these steps in order:

1. Start the development server or preview runner and confirm zero build or console errors.
2. Inspect the interface at three canonical viewport widths:
   - **Desktop (`1440x900`):** Verify information hierarchy, max-width containment, alignment, and multi-pane balance.
   - **Tablet (`768x1024`):** Verify sidebar collapse behavior, grid reflow, and touch spacing.
   - **Mobile (`375x812`):** Verify zero unintended `overflow-x` on `document.documentElement`, legible font sizes (`>= 12px` metadata, `>= 14px-16px` body), and accessible navigation toggles.
3. Test primary interactive workflows: click buttons, type into search/filter inputs, toggle tabs, open/close overlays, and trigger empty and error states.
4. Press `Tab` sequentially from the top of the document to verify logical focus order and visible `:focus-visible` outlines.
5. If a visual reference or mockup was supplied, compare proportions, color luminance, typography scale, and alignment directly against the reference.

### Mode B: Static Code Verification (When No Browser Tool Exists)

When the execution environment does not provide a live DOM preview:

1. **Token & Contrast Audit:** Calculate luminance contrast ratios directly from the hex/HSL values defined in your CSS variables. Verify that `--text-primary`, `--text-secondary`, and `--text-muted` achieve `>= 4.5:1` against both `--bg-canvas` and `--bg-surface`.
2. **Overflow & Box-Model Audit:** Search CSS/classes for hardcoded widths (`w-[500px]`, `width: 800px`), unwrapped flex rows (`flex` without `flex-wrap` or responsive breakpoint prefixes), and grid tracks lacking `minmax(0, 1fr)`.
3. **Interactive Wiring Audit:** Trace every `<button>`, `<input>`, and `<select>` in the template to confirm it is bound to a real state variable or handler function.
4. **Honest Reporting:** Explicitly mark visual rendering items as `[Verified via Static Code Audit; Runtime Visual Inspection Unavailable]` in your validation report. Never fabricate runtime screenshot claims.

## 2. Detailed 100-Point Scoring Rubric

Evaluate the implementation objectively across seven weighted dimensions:

### Category 1: Context and Product Suitability (15 Points)

- **13-15 pts:** Interface architecture, density, and tone are tailored to the domain workflow and user persona. Zero inappropriate marketing fluff in functional tools.
- **9-12 pts:** Generally appropriate layout, but minor mismatches in content density or secondary workflow prioritization.
- **0-8 pts:** Uses a generic one-size-fits-all template that ignores how real users interact with this product category.

### Category 2: Visual Identity and Distinctiveness (20 Points)

- **17-20 pts:** Expresses a cohesive, deliberate visual thesis. Free of unmotivated purple/blue gradients, card bloat, decorative emoji, and repetitive three-column feature grids.
- **12-16 pts:** Clean aesthetic, but relies on safe default component-library styling or slightly repetitive section structures.
- **0-11 pts:** Immediately recognizable as an unedited AI-generated template.

### Category 3: Layout and Information Hierarchy (15 Points)

- **13-15 pts:** Primary focal point, key metrics, and main actions are identifiable within 3 seconds. Grouping uses whitespace and hairline dividers effectively.
- **9-12 pts:** Clear primary sections, though secondary metadata or actions compete visually with primary tasks.
- **0-8 pts:** Flat hierarchy where every element has equal visual weight, size, or card elevation.

### Category 4: Typography, Color, and Spacing (15 Points)

- **13-15 pts:** Cohesive type scale, `60ch-75ch` reading measure, `tabular-nums` on all numeric data, semantic color tokens, and consistent base-4/base-8 spacing rhythm.
- **9-12 pts:** Readable typography and pleasant colors, but occasional magic numbers in spacing or missing tabular numerals.
- **0-8 pts:** Arbitrary font sizes, poor contrast, hardcoded hex values scattered across components, or cramped padding.

### Category 5: Usability and Interaction Quality (15 Points)

- **13-15 pts:** All interactive controls function properly. Includes thoughtful empty states, loading indicators, validation feedback, and hover/active transitions.
- **9-12 pts:** Core path works, but lacks empty-state handling or secondary filter interactivity.
- **0-8 pts:** Contains dead buttons, unhooked inputs, or regressions to existing features.

### Category 6: Responsive Behavior and Accessibility (10 Points)

- **9-10 pts:** Semantic HTML landmarks, complete form `<label>` associations, visible `:focus-visible` rings, WCAG AA contrast, `prefers-reduced-motion` support, and clean mobile adaptation (`375px+`).
- **6-8 pts:** Responsive on mobile and mostly accessible, with minor non-blocking ARIA or focus-ring omissions.
- **0-5 pts:** Horizontal overflow on mobile, missing form labels, keyboard traps, or unreadable contrast (triggers mandatory fail gate).

### Category 7: Code Quality and Maintainability (10 Points)

- **9-10 pts:** Idiomatic framework structure, centralized design tokens, clean component decomposition, no unnecessary dependencies.
- **6-8 pts:** Working code with minor style duplication or overly verbose markup.
- **0-5 pts:** Brittle inline styles, broken imports, or violation of existing project conventions.

## 3. Pre-Completion Gate Protocol

Before delivering the final output:

1. Compute the rubric score across all 7 categories.
2. Verify all four **Zero-Tolerance Gates**:
   - Gate 1: Zero critical accessibility failures.
   - Gate 2: Zero broken primary interactions or removed existing features.
   - Gate 3: Zero severe mobile overflow or clipped controls.
   - Gate 4: Zero console/compilation errors.
3. If the total score is **below 85/100** or any Zero-Tolerance Gate fails, **refactor the code immediately** before responding to the user.
