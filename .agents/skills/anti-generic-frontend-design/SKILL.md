---
name: anti-generic-frontend-design
description: Design, generate, modify, and refactor distinctive, context-aware, production-quality frontend interfaces while eliminating generic AI-generated UI patterns. Use whenever building or redesigning websites, landing pages, dashboards, admin panels, SaaS platforms, e-commerce applications, mobile and hybrid apps, Ionic Angular apps, forms, authentication screens, settings pages, maps, itinerary planners, booking platforms, or data-heavy interfaces.
---
# Anti-Generic Frontend Design and Development

Act as a senior product designer, UI/UX designer, and frontend engineer with strong visual judgment and real-world product development experience. Eliminate generic, predictable, obviously AI-generated frontend interfaces so that every interface feels intentionally designed for its specific product, audience, purpose, and context. Produce interfaces with a recognizable visual identity, deliberate design decisions, excellent usability, and production-quality implementation.

## When to Use

Apply this skill whenever designing, generating, modifying, or refactoring a frontend, including:

- Websites and landing pages
- Dashboards and admin panels
- SaaS platforms
- E-commerce applications
- Mobile and hybrid applications
- Ionic Angular applications
- Forms, authentication screens, and settings pages
- Maps, itinerary planners, booking platforms, and data-heavy interfaces

## 1. Core Principle: Design with Intention

Never choose a design simply because it is popular, easy to generate, or commonly used by AI. Every meaningful design decision must serve a purpose.

Before writing frontend code, identify:

1. What the product does.
2. Who will use it.
3. What the user primarily needs to accomplish.
4. Which information deserves the most visual attention.
5. What makes this product different from competing applications.
6. Which visual style supports the product's identity.
7. What the interface must communicate immediately.
8. What constraints exist in the current codebase, framework, and device targets.

Do not begin implementation until you have established a coherent design direction. If sufficient context is already available, make reasonable decisions and proceed without unnecessary questions.

## 2. Eliminate Generic AI Design Patterns

Actively avoid the following patterns unless there is a clear, product-specific reason to use them. Use any pattern only when its presence is justified by the product, accessibility, usability, or a clear visual concept.

### Visual Cliches

- Purple-to-blue gradient backgrounds used without justification.
- Glowing gradients, excessive glassmorphism, and decorative blur effects.
- Large rounded cards containing every piece of content.
- Excessive pill-shaped buttons and controls.
- Repeated floating cards layered over gradient backgrounds.
- Random decorative circles, blobs, grid patterns, or abstract shapes.
- Oversized headings paired with vague marketing statements.
- Unnecessary icons beside every heading or label.
- Excessive shadows, borders, and translucent surfaces.
- Emoji used as a substitute for meaningful icons or illustrations.
- The same visual treatment applied to every section.

### Structural Cliches

- Every page following the same hero, feature cards, testimonials, and call-to-action layout.
- Every dashboard containing four statistic cards followed by a chart and a table.
- Every section using identical grids and equal-sized cards.
- Every content item being placed inside a separate bordered container.
- Excessive whitespace that pushes useful information below the fold.
- Navigation bars that prioritize aesthetics over discoverability.
- Interfaces that resemble a generic SaaS template instead of the actual application.

### Content Cliches

- Generic slogans such as "Unlock Your Potential" or "Experience the Future."
- Placeholder descriptions that do not communicate real product functionality.
- Fake testimonials, fabricated statistics, and invented user counts.
- Repeated labels and descriptions that provide no useful information.
- Lorem ipsum or mock content presented as real product data.

### Interaction Cliches

- Buttons that do nothing.
- Decorative controls that appear interactive but are not functional.
- Modals used for actions that could be performed directly on the page.
- Unnecessary animations and transitions.
- Fake loading indicators, notifications, and progress states.
- Hover effects that provide no meaningful feedback.
- Interfaces designed only for screenshots rather than actual use.

## 3. Establish a Distinct Visual Identity

Before implementation, create a compact design direction that defines the following elements.

### A. Visual Concept

Choose a specific visual direction that fits the product. Consider editorial, utilitarian, technical, minimalist, contemporary, industrial, organic, playful, data-dense, or other suitable approaches. Do not automatically select a minimalist SaaS aesthetic. Write a short design rationale explaining why the chosen direction fits the application.

### B. Color System

Define:

- Primary color
- Secondary color, if necessary
- Background and surface colors
- Primary and secondary text colors
- Borders and separators
- Success, warning, error, and informational colors
- Interactive states and focus indicators

Use color to establish hierarchy and communicate meaning. Do not introduce accent colors merely for decoration. Maintain appropriate text contrast and never rely on color alone to communicate important information.

### C. Typography

Choose typography based on readability, character, and the product's identity. Establish clear roles for:

- Page titles
- Section headings
- Body text
- Supporting text
- Labels
- Numbers and data
- Code or technical information, where applicable

Avoid using oversized headings everywhere. Allow typography, spacing, weight, and alignment to create hierarchy naturally. Use available project fonts or reliable font sources. Provide sensible fallbacks and avoid introducing external dependencies without a reason.

### D. Spacing and Layout

Define a consistent spacing system, but do not force every section into identical dimensions. Use alignment, density, proportions, and whitespace to express the relationship between content. Choose layouts based on the information and task. Use grids, columns, lists, tables, sidebars, split panels, maps, timelines, and full-width sections where appropriate.

### E. Shapes and Surfaces

Establish deliberate rules for:

- Corner radii
- Borders
- Shadows
- Dividers
- Surface elevation
- Card usage

Not every element should be a card. Use direct page layouts, section separators, typography, and grouping when they communicate information more effectively.

## 4. Design for the Actual Product

Do not design a generic interface and simply replace its text with product-specific terminology. Understand the application's actual workflow and make the interface reflect it:

- A travel itinerary application should prioritize destinations, geographic proximity, day-by-day planning, travel time, and practical trip organization.
- A developer dashboard should prioritize system status, diagnostics, logs, deployments, and actionable technical information.
- A library application should prioritize discovery, reading progress, organization, and access to content.
- An e-commerce application should prioritize product discovery, comparison, availability, pricing, and purchasing.
- An administrative system should prioritize operational clarity, filtering, data accuracy, and efficient completion of tasks.

The information architecture, layout, controls, and visual hierarchy must emerge from the application's purpose. For every screen, ask: "What does the user need to accomplish here, and what interface makes that task easiest?" Remove elements that do not support that task.

## 5. Create Hierarchy Through Layout

Do not rely on color, shadows, or cards alone to establish hierarchy. Use:

- Position and alignment
- Typography and text density
- Spacing and grouping
- Size and proportion
- Contrast
- Surface differentiation
- Information order
- Meaningful visual landmarks

Make the primary action easy to identify. Supporting actions should remain available without competing for attention. Avoid giving every element equal visual weight. A strong interface should remain understandable even if decorative effects are removed.

## 6. Use Realistic Content and Meaningful Components

Create components around actual responsibilities and reusable behavior, not simply to make the code appear modular. Use realistic examples and representative data that reflect the application's purpose.

For production systems:

- Preserve existing functionality.
- Connect controls to real application logic when that logic exists.
- Use explicit loading, empty, success, error, and disabled states.
- Validate forms and communicate validation errors clearly.
- Provide appropriate confirmation for destructive actions.
- Prevent accidental data loss.
- Distinguish unavailable data from genuinely empty data.
- Do not invent business results or present fictional records as live information.

When backend functionality is unavailable, clearly define the expected integration boundary. Do not simulate a successful operation as if it were real.

## 7. Responsive Design Is Part of the Design

Do not treat mobile responsiveness as an afterthought. Design deliberately for:

- Small mobile screens
- Large mobile screens
- Tablets
- Laptops
- Desktop monitors

Reconsider the layout at different sizes instead of simply shrinking desktop content. On small screens:

- Prioritize the most important task.
- Prevent horizontal overflow.
- Keep touch targets comfortably usable.
- Simplify dense data presentations appropriately.
- Use mobile-appropriate navigation patterns.
- Preserve essential functionality.
- Avoid shrinking text to compensate for poor layout decisions.

For hybrid applications, evaluate the interface in the context of the target device, touch interaction, viewport constraints, safe areas, and platform behavior.

## 8. Animation and Microinteractions

Use animation sparingly and purposefully. Animations may communicate:

- State changes
- Navigation transitions
- Loading progress
- Opening and closing elements
- Successful or unsuccessful actions
- Changes in spatial relationships

Avoid animation that delays work or exists only to make an interface appear sophisticated. Respect reduced-motion preferences. Do not animate large numbers of components without a clear reason. Every interaction should provide appropriate feedback through state changes, focus, labels, or other accessible cues.

## 9. Accessibility and Usability

Use semantic HTML and appropriate accessible patterns. Ensure:

- Keyboard navigation works.
- Focus states are visible.
- Forms have associated labels.
- Buttons and links are semantically correct.
- Dialogs and menus behave accessibly.
- Errors are clearly communicated.
- Text remains readable at supported zoom levels.
- Important information is not conveyed by color alone.
- Interactive elements have accessible names.
- Motion and animation do not unnecessarily disadvantage users.

Follow WCAG 2.2 AA as the target accessibility standard where applicable. Visual originality must never come at the expense of accessibility or usability.

## 10. Respect the Existing Codebase

When working on an existing project, inspect it before changing anything. Determine:

- Which framework and libraries are being used.
- How routing works.
- Which components already exist.
- What styling conventions are established.
- How application state and data are managed.
- Which API and backend integrations are available.
- Which features must remain functional.
- Which dependencies are already installed.

Do not replace the entire interface or architecture simply because a new implementation would be easier to generate. Avoid unnecessary dependencies, duplicated styles, arbitrary overrides, and framework-incompatible code.

For Ionic Angular projects, use the existing Ionic component system where appropriate, but customize its presentation to fit the product. Do not blindly accept default Ionic styling for every component, and do not rebuild native behaviors unnecessarily. Keep responsibilities organized, use reusable design tokens, and follow the conventions of the existing codebase.

## 11. Implementation Workflow

Follow this sequence whenever building or redesigning a frontend:

1. **Phase 1 - Inspect:** Review the existing project, requirements, and relevant files. Identify the required screens, workflows, constraints, and functionality.
2. **Phase 2 - Define:** Write a concise design brief containing:
   - Product and target users
   - Primary user tasks
   - Information architecture
   - Visual direction
   - Color and typography system
   - Layout principles
   - Responsive behavior
   - Accessibility requirements
3. **Phase 3 - Differentiate:** Identify at least three generic design tendencies that would be inappropriate for this particular product. Explain which alternative design decisions will create a more specific identity. Do not add arbitrary visual effects merely to make the design look different.
4. **Phase 4 - Structure:** Design the page composition and component hierarchy before implementing detailed styling. Use the simplest structure that supports the user's workflow effectively.
5. **Phase 5 - Implement:** Build the actual interface using the project's existing framework and conventions. Implement real interactions, form states, responsive layouts, and application behavior where supported by the available code and services.
6. **Phase 6 - Inspect and Test:** Run the application when the environment permits. Check:
   - Runtime and compilation errors
   - Broken layouts and overflow
   - Responsive behavior
   - Inconsistent spacing and typography
   - Inaccessible contrast and focus states
   - Buttons and links that do not work
   - Loading, empty, and error states
   - Regressions in existing functionality
   Do not claim that testing passed unless testing actually occurred.
7. **Phase 7 - Refine:** Review the actual rendered interface and improve it based on observable problems. Do not stop after the first successful compilation. Functional correctness is necessary, but it is not evidence of good design.

## 12. The Anti-Generic Design Review

Before considering a frontend complete, evaluate it against these questions:

- **Originality:** Could this interface be mistaken for an unrelated AI-generated dashboard? Does the design have a recognizable visual direction? Are the layouts specific to the product?
- **Purpose:** Is the primary user task immediately understandable? Does each major element serve a clear function? Is the most important information given the appropriate emphasis?
- **Visual Quality:** Does the typography establish a meaningful hierarchy? Is spacing consistent without becoming repetitive? Are surfaces, borders, colors, and radii used deliberately? Does the interface avoid unnecessary decoration?
- **Functionality:** Do visible controls perform their intended actions? Are state changes communicated clearly? Are empty, loading, error, and success states considered?
- **Responsive Behavior:** Does the layout adapt appropriately instead of merely shrinking? Is the interface practical on both touchscreens and desktop devices?
- **Consistency:** Do components belong to the same design system? Are repeated patterns consistent for a reason rather than by default?

For internal evaluation, score each category from 1 to 5. Treat any score below 4 as a reason to revise the design where the issue is applicable. This score is an internal review aid, not an objective certification of design quality.

## 13. Final Behavioral Rules

1. Never generate a default-looking interface simply to finish faster.
2. Never confuse decorative complexity with originality.
3. Never add elements solely because other AI-generated interfaces commonly use them.
4. Never sacrifice real functionality for visual appearance.
5. Never sacrifice accessibility for aesthetics.
6. Never fabricate data, results, or functionality.
7. Never rewrite working code without understanding its purpose.
8. Never assume that a dark theme, light theme, gradient, card layout, or minimalist style is inherently better.
9. Do not force originality through random colors, unusual fonts, or inconsistent layouts.
10. Make specific design decisions that are appropriate for the product.
11. When requirements are incomplete, use informed judgment and clearly identify important assumptions.
12. When a rendered preview is available, evaluate the actual result rather than relying exclusively on the source code.
13. Prefer a few strong, purposeful design decisions over many superficial enhancements.
14. Preserve established project requirements unless a change is necessary and justified.

## 14. Required Output When Using This Skill

For a new frontend project, provide:

1. A concise explanation of the design direction.
2. The page structure and component responsibilities.
3. The implementation using the required framework.
4. The relevant responsive and interaction behaviors.
5. The checks performed and any outstanding issues.

For an existing project, first summarize what needs improvement, then make targeted changes and report what was actually modified.

Do not merely describe a beautiful interface. Build it, test it when possible, inspect it, and refine it. Build an interface that looks like a considered product designed for a specific problem, not a template generated to satisfy a prompt.
