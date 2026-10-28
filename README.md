# Link for the webpage
https://edselrenz.github.io/basicformfunctionalities/tabs/tab1

# Basic Form Functionalities & Mobile Portal

A mobile-first hybrid application built with **Ionic 9**, **Angular 22 (Standalone Components)**, and **Capacitor 8**. The application demonstrates modern frontend engineering patterns, reactive form bindings, calculation engines, structured records management, client-side data persistence, and native drawer navigation.

---

## Key Features & Modules

### 1. Tab 1: Account Profile & Registration (`/tabs/tab1`)
- **Reactive Registration Form**: Structured into *Personal Details* and *Bio & Preferences*.
- **Interactive Controls**: Includes floating-label inputs, single-select menus, toggles, consent checkboxes, and multi-line text areas.
- **Verification Summary**: Automatically compiles and renders submitted profile details into a high-contrast review panel with reset capabilities.

### 2. Tab 2: NEUST Institutional Overview (`/tabs/tab2`)
- **Institutional Statement Reader**: Interactive segmented controls for switching between university statements: *Mission*, *Vision*, *Tagline*, and *Core Values*.
- **Academic Pull-Quote**: Prominent reader view with active state tracking.
- **Two-Way Synchronization**: Synchronized editable textarea allowing real-time inspection and updates of statement text.

### 3. Tab 3: Dual-Mode Calculator (`/tabs/tab3`)
- **Keypad Mode**: Familiar tactile pocket-calculator interface supporting arithmetic chaining (`+`, `-`, `×`, `÷`), sign inversion (`+/-`), percentage calculation (`%`), decimal points, backspace (`⌫`), and clear (`AC`).
- **Two-Number Form Mode**: Streamlined two-number form with dedicated operation buttons and an elevated result callout card.
- **Edge-Case Safety**: Robust division-by-zero protection and floating-point precision correction (`0.1 + 0.2 = 0.3`).
- **High-Contrast Display**: Themed readout tokens (`#1e2026` dark display canvas with `#ffffff` numerals) ensuring WCAG AA legibility across dark and light palettes.

### 4. Tab 4: Records & Inventory (`/tabs/tab4`)
- **Academic Gradebook (`*ngFor`)**:
  - Displays student records iterated with Angular's `*ngFor` structural directive.
  - Aggregates live class metrics: Class Average Grade and Passing Rate.
  - Transparent typographic status remarks (`Outstanding`, `Very Satisfactory`, `Passed`, `Failed`) paired with subtle status dots.
- **Retail Grocery Inventory (`*ngFor`)**:
  - Catalogues 22+ initial items with Price (₱), Quantity (Stock), Weight/Volume, and calculated Subtotals.
  - Real-time search filter by item name and weight, equipped with empty-state recovery.
- **Add Item Modal Dialog**:
  - Modal with form validation ensuring non-negative prices and quantities.
  - Prepends new entries directly to the top of the inventory list for immediate visual confirmation.

### 5. Global Side Navigation ("Navigation")
- **Header Drawer Toggle**: Accessible hamburger menu toggle (`<ion-menu-button>`) in all tab headers.
- **Drawer Menu Items**:
  - **Home**: Navigates to `/tabs/tab1`.
  - **Profile**: Direct access to user registration.
  - **Settings**: Appearance toggles (dark mode override, compact density), notifications, and cache clearing.
  - **System**: Real-time framework diagnostics, runtime specs (Angular 22, Ionic 9, Capacitor 8), and client connectivity status.
  - **Dashboard**: Routes directly to the records and inventory dashboard (`/tabs/tab4`).
  - **Preferences Vault**: Direct access to client-side storage management.

### 6. Preferences Vault (`/vault`, `/storage`)
- **Personal Attribute Store**: Saves **Age** and **Favorite Color** to browser `localStorage`.
- **Palette Presets**: Quick-select color swatches (Navy Blue, Emerald, Crimson, Coral, Amber, Indigo, Teal) alongside custom color inputs.
- **Storage Controls**:
  - **Save to Vault**: Persists attributes with formatted timestamp validation.
  - **Display Saved Value**: Retrieves and visualizes stored attributes alongside a live color swatch box and tabular numerals.
  - **Clear**: Removes keys from `localStorage` and resets the active view.

---

## Tech Stack & Architecture

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Framework** | Angular 22.2 | Standalone Components (`imports: [...]`), Control Flow, Signals-ready |
| **Mobile UI** | Ionic Framework 9.0 | Adaptive iOS & Material Design widgets, Gestures, Custom Scoped SCSS |
| **Hybrid Runtime** | Capacitor 8.5 | Cross-platform mobile runtime (iOS, Android, PWA) |
| **Language** | TypeScript 5.9 / 6.0 | Strict type-safety, interfaces for all domain entities |
| **Unit Testing** | Vitest 5.0 + JSDOM | Fast headless component and unit test execution |
| **Code Quality** | ESLint 10 + Angular-ESLint | Enforced style conventions and template validation |

---

## Project Structure

```text
src/
├── app/
│   ├── app.component.{ts,html,scss,spec.ts}   # Root component with side navigation drawer
│   ├── app.routes.ts                          # Top-level routing (tabs, settings, system, vault)
│   ├── tab1/                                  # Account Profile Registration
│   ├── tab2/                                  # NEUST Institutional Statements
│   ├── tab3/                                  # Dual-Mode Calculator (Keypad & Form)
│   ├── tab4/                                  # Academic Gradebook & Grocery Inventory
│   ├── tabs/                                  # Bottom navigation tab-bar coordinator
│   ├── settings/                              # Preferences & Appearance Controls
│   ├── storage/                               # Preferences Vault (Local Storage)
│   ├── system/                                # System Diagnostics & Active Skills
│   └── explore-container/                     # Shared placeholder container
├── theme/
│   └── variables.css                          # Ionic design tokens and palette definitions
└── index.html                                 # HTML5 entrypoint with viewport meta tags
```

---

## Getting Started

### Prerequisites
- **Node.js**: `v20.x` or `v22.x` (LTS recommended)
- **npm**: `v10.x` or higher

### Installation
Clone the repository and install dependencies:
```bash
npm install
```

### Running Locally
Start the development server with live reload:
```bash
npm start
# or: npx ng serve
```
Open your browser and navigate to `http://localhost:4200`.

---

## Quality Assurance & Verification

### Run Unit Tests
Run the entire Vitest unit test suite (35+ component and logic tests):
```bash
npx ng test -c ci
```

### Run Linter
Verify code style and template integrity:
```bash
npm run lint
```

### Build for Production
Generate optimized production bundles in the `www/` directory:
```bash
npm run build
```

---

## Design System & Customization Rules

This codebase follows disciplined, anti-generic design principles configured in `.agents/skills/`:
- **`anti-generic-frontend-design`**: Eliminates meaningless gradients, generic card stacks, and fake controls. Enforces purposeful visual hierarchy and realistic workflows.
- **`intentional-frontend-design`**: Adheres to modular spacing systems, light/dark WCAG AA contrast compliance, and `font-variant-numeric: tabular-nums` for numerical data scanning.
- **`coding-and-system-development`**: Enforces strict test-driven verification, minimal blast radiuses, and root-cause debugging practices.

