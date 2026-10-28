# Responsive Design and Accessibility Standards

Concrete engineering requirements for building accessible, keyboard-navigable, responsive interfaces across HTML/CSS, React, Next.js, Vue, Angular/Ionic, and Tailwind CSS.

## 1. Semantic HTML and Document Structure

Never build an interface out of nested `<div>` and `<span>` tags when native elements exist:

- **Landmarks:** Structure views with `<header>`, `<nav aria-label="...">`, `<main>`, `<aside>`, and `<footer>` so screen reader users can jump directly to primary regions.
- **Heading Hierarchy:** Use exactly one `<h1>` per view describing the current page or workspace purpose. Nest `<h2>`, `<h3>`, and `<h4>` sequentially by logical section. Never choose a heading tag based on its visual font size; style headings with CSS classes instead.
- **Buttons vs. Links:**
  - Use `<button type="button">` (or `type="submit"`) for actions that mutate state, open modals, toggle panels, sort tables, or trigger scripts.
  - Use `<a href="...">` (or framework router links) for navigation that changes the URL or jumps to an anchor.
  - Never attach `onClick` / `@click` handlers to a `<div>` or `<span>` without `role="button"`, `tabindex="0"`, and `keydown` handlers for both `Enter` and `Space`. Always prefer a native `<button>`.
- **Data Tables:** Use `<table>`, `<thead>`, `<tbody>`, `<th scope="col">`, and `<th scope="row">` for tabular datasets so assistive technologies announce column and row headers accurately.

## 2. Keyboard Navigation and Focus Management

Every workflow must be completable using only a keyboard:

- **Visible Focus Rings:** Never apply `outline: none` without providing a high-contrast replacement on `:focus-visible`.

```css
/* Standard high-visibility focus ring */
:where(a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])):focus-visible {
  outline: 2px solid var(--accent-interactive, #2563eb);
  outline-offset: 2px;
}
```

- **Icon-Only Controls:** Every button containing only an icon (such as a close button, map zoom control, or row action menu) must include an explicit `aria-label` (for example, `<button type="button" aria-label="Close itinerary details">`) and mark the inner SVG with `aria-hidden="true"`.
- **Modals and Drawers:** Prefer native `<dialog>` elements or established accessible primitives (Radix UI, Headless UI, Angular CDK) that trap focus inside the open overlay, close on `Escape`, and restore focus to the triggering element upon dismissal.

## 3. Color Contrast and Visual Ergonomics (WCAG 2.2 AA)

- **Body and UI Text (< 18pt / 24px regular or < 14pt / 18.5px bold):** Minimum contrast ratio of **4.5:1** against its immediate background surface.
- **Large Text (>= 24px regular or >= 18.5px bold):** Minimum contrast ratio of **3.0:1**.
- **Non-Text UI Components:** Input borders, checkbox outlines, active tab indicators, and chart segments require at least **3.0:1** contrast against adjacent surfaces.
- **Non-Color Indicators:** Never indicate form errors, stock depletion, or system alerts through red/green color alone. Include an icon, text prefix, or pattern change.

## 4. Accessible Forms and Validation

- **Explicit Labels:** Bind every `<input>`, `<select>`, and `<textarea>` to a visible `<label for="id">`. Placeholder text disappears on input and is not a substitute for a label.
- **Error Association:** When validation fails, set `aria-invalid="true"` on the input and link the error message container via `aria-describedby="error-id"`.

```html
<div class="field-group">
  <label for="budget-limit" class="field-label">Daily Budget Limit (USD)</label>
  <input
    id="budget-limit"
    name="budgetLimit"
    type="number"
    aria-invalid="true"
    aria-describedby="budget-limit-error"
  />
  <p id="budget-limit-error" class="field-error" role="alert">
    Enter a positive amount greater than 0.
  </p>
</div>
```

## 5. Responsive Architecture and Touch Targets

Design layouts that adapt gracefully from `320px` small mobile viewports through `768px` tablets to `1440px+` desktop monitors:

- **Zero Unintended Horizontal Overflow:**
  - Never use fixed pixel widths (`width: 600px`) on block containers; use `width: 100%; max-width: 600px`.
  - Apply `min-width: 0` to flex and grid children that contain long strings, URLs, or code blocks so they wrap or truncate instead of blowing out the parent track.
  - Wrap wide data tables in a dedicated scroll container (`overflow-x: auto; -webkit-overflow-scrolling: touch`) with a subtle right-edge shadow cue, or transform rows into structured summary lists on narrow mobile screens.
- **Touch Target Sizing:** Ensure all interactive controls on mobile/touch viewports provide at least a **44x44px** tap target (or **24x24px** minimum with adequate spacing per WCAG 2.2 Target Size).
- **Dynamic Viewport Units:** Use `min-height: 100dvh` instead of `100vh` for full-screen application layouts so mobile browser toolbars do not clip bottom controls.

## 6. Motion Safety and Performance

- **Reduced Motion:** Respect user operating system settings by guarding non-essential animations:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- **Layout Stability (CLS):** Always provide explicit `width` and `height` attributes or CSS `aspect-ratio` on `<img>`, `<video>`, and map/chart containers so content does not jump while assets load.

## 7. Framework-Specific Implementation Notes

- **React / Next.js:** Use semantic JSX elements, `useId()` for accessible form bindings, Next.js `<Image>` or explicit aspect-ratio containers, and CSS variables in Tailwind configs (`tailwind.config.js`) to keep utility classes tied to semantic tokens.
- **Vue:** Use `:id` bindings for label associations, scoped styles or CSS custom properties on `:root`, and clean `<Transition>` wrappers that respect `prefers-reduced-motion`.
- **Angular / Ionic Angular:** Leverage Angular CDK a11y utilities (`FocusTrap`, `LiveAnnouncer`) where appropriate; customize Ionic CSS Custom Properties (`--ion-background-color`, `--ion-text-color`, `--border-radius`) so hybrid apps reflect intentional brand hierarchy rather than unstyled default mobile chrome.
