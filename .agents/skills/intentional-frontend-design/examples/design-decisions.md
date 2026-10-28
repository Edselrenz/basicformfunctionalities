# Design Decisions: Generic AI vs. Intentional Implementations

Concrete side-by-side comparisons demonstrating how to replace generic AI patterns with context-driven architecture and code.

## Scenario 1: Operational SaaS / Infrastructure Dashboard

### Weak Generic AI Approach (What to Avoid)

- **Visual Cliché:** Dark background with glowing purple/cyan blurred circles, a giant centered "Welcome back, Admin! 🚀" banner, and 4 huge `rounded-3xl` cards with oversized icons for basic metrics.
- **Failure Mode:** Wastes 60% of the vertical viewport on chrome and decoration; operators cannot compare time-series deltas or filter active incidents without scrolling.

### Intentional Context-Driven Approach (What to Build)

- **Design Thesis:** High-density operational console using muted slate surfaces, `1px` structural hairlines, compact KPI strips with inline deltas, and a filterable incident table using `tabular-nums`.

```html
<!-- Intentional High-Density Operational Header + KPI Strip + Table -->
<main class="ops-workspace">
  <header class="ops-header">
    <div class="ops-title-group">
      <span class="ops-env-badge">PROD-US-EAST</span>
      <h1>Service Telemetry & Incident Queue</h1>
    </div>
    <div class="ops-controls">
      <label for="time-window" class="sr-only">Time Window</label>
      <select id="time-window" class="ops-select">
        <option value="1h">Last 60 minutes</option>
        <option value="24h">Last 24 hours</option>
        <option value="7d">Last 7 days</option>
      </select>
      <button type="button" class="btn-primary">Acknowledge Selected</button>
    </div>
  </header>

  <!-- Compact Hairline-Divided Metric Strip (No bloated floating cards) -->
  <section class="kpi-strip" aria-label="System Health Summary">
    <div class="kpi-cell">
      <span class="kpi-label">API p95 Latency</span>
      <div class="kpi-value-row">
        <strong class="kpi-number">142 ms</strong>
        <span class="kpi-delta kpi-delta--good">-12 ms</span>
      </div>
    </div>
    <div class="kpi-cell">
      <span class="kpi-label">Error Rate (5xx)</span>
      <div class="kpi-value-row">
        <strong class="kpi-number">0.04%</strong>
        <span class="kpi-delta kpi-delta--neutral">0.00%</span>
      </div>
    </div>
    <div class="kpi-cell">
      <span class="kpi-label">Active Alerts</span>
      <div class="kpi-value-row">
        <strong class="kpi-number">3</strong>
        <span class="kpi-delta kpi-delta--warn">+2 new</span>
      </div>
    </div>
  </section>
</main>
```

```css
.ops-workspace {
  background: var(--bg-canvas, #0b0f17);
  color: var(--text-primary, #f3f4f6);
  min-height: 100dvh;
  padding: 1.5rem 2rem;
  font-family: var(--font-sans, system-ui, sans-serif);
}

.ops-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-subtle, #1f2937);
}

.kpi-strip {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  background: var(--border-subtle, #1f2937);
  gap: 1px;
  border: 1px solid var(--border-subtle, #1f2937);
  border-radius: 6px;
  overflow: hidden;
  margin-top: 1.25rem;
}

.kpi-cell {
  background: var(--bg-surface, #111827);
  padding: 0.875rem 1.25rem;
}

.kpi-number {
  font-size: 1.375rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}
```

## Scenario 2: Travel Itinerary and Route Planner

### Weak Generic AI Approach (What to Avoid)

- **Visual Cliché:** A generic landing page hero with stock beach photography, followed by a 3-column grid of rounded destination cards showing only a title, a star rating, and a gradient "Book Now" button.
- **Failure Mode:** Breaks chronological sequence, hides transit duration between stops, and separates geographic context from the schedule.

### Intentional Context-Driven Approach (What to Build)

- **Design Thesis:** Split-pane spatial planner pairing a chronological day-by-day timeline spine on the left (showing exact transit connections, durations, and cumulative daily cost) with a sticky interactive route map on the right.

```html
<div class="itinerary-split-layout">
  <section class="itinerary-spine-pane" aria-label="Day 2 Schedule">
    <header class="day-header">
      <div>
        <span class="day-kicker">DAY 02 - TUESDAY, OCT 14</span>
        <h2>Arashiyama & Northern Kyoto</h2>
      </div>
      <div class="day-totals">
        <span>4 Stops</span>
        <span aria-hidden="true">/</span>
        <span class="tabular">¥6,450 est.</span>
      </div>
    </header>

    <ol class="timeline-list">
      <li class="timeline-stop">
        <div class="stop-time tabular">08:30</div>
        <div class="stop-marker" aria-hidden="true">01</div>
        <article class="stop-body">
          <div class="stop-header">
            <h3>Tenryu-ji Temple & North Gate</h3>
            <span class="stop-duration tabular">90 min</span>
          </div>
          <p>Enter via the main grounds before tour buses arrive; exit directly into the bamboo grove path.</p>
          <div class="transit-connector">
            <span>Walk 12 min (0.9 km) North via Sagano Path</span>
          </div>
        </article>
      </li>
    </ol>
  </section>

  <aside class="itinerary-map-pane" aria-label="Route Map">
    <div class="map-canvas" role="region" aria-label="Interactive route map showing 4 pinned stops">
      <!-- Map instance with floating HUD controls -->
    </div>
  </aside>
</div>
```

## Scenario 3: Creative Director / Architecture Portfolio

### Weak Generic AI Approach (What to Avoid)

- **Visual Cliché:** Centered circular avatar, "Hi, I'm Alex 👋 Full-Stack Developer & Designer", skill progress bars ("HTML 95%, CSS 90%"), and 6 identical SaaS-style project cards with purple tags.
- **Failure Mode:** Arbitrary percentage bars convey zero real craft; uniform small cards flatten visual work.

### Intentional Context-Driven Approach (What to Build)

- **Design Thesis:** Editorial exhibition index using a disciplined 12-column grid, stark typographic scale contrast, numbered archival project rows that expand or reveal curated high-resolution imagery, and zero skill progress bars.
