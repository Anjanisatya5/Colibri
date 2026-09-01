# Compass

A single-file HTML prototype of Compass (Colibri's exam-prep experience) plus
a componentised design system that documents its visual language.

## Repo layout

```
Colibri/
├─ compassprototype (3).html   ← the HTML prototype (login → onboarding → dashboard)
├─ styles/
│  └─ compass.css              ← the shared visual language (tokens + component classes).
│                                 Both the prototype and the design system consume this file.
└─ design-system/              ← Storybook (Vite + React 18 + TypeScript + Storybook 8).
                                 Components + docs backed by ../styles/compass.css.
```

## Running the prototype

Any static web server will do. The simplest:

```bash
python3 -m http.server 8000
# open http://localhost:8000/compassprototype%20(3).html
```

The prototype `<link>`s to `styles/compass.css`, so changes to that file are
picked up on refresh.

## Running Storybook

```bash
cd design-system
npm install
npm run storybook           # dev server on http://localhost:6006
# or:
npm run build-storybook     # static build → design-system/storybook-static/
```

Storybook loads the same `styles/compass.css` as a global stylesheet, so what
you see in the sidebar is what you get in the app.

## Consuming the design system

**From plain HTML** (designers, quick pages):

```html
<link rel="stylesheet" href="styles/compass.css">

<button class="cta">Continue</button>
<button class="chip-btn">Skip for now</button>
<div class="card">…</div>
```

**From React** (engineers building product):

```tsx
// One-time in your app entry:
import '@compass/design-system/../styles/compass.css';

// Then anywhere:
import { Button, RubiBubble, ProgressRing, Sidebar } from '@compass/design-system';
```

## What's in the design system

- **Foundations** — Colors, Typography, Radii & Shadows.
- **Atoms** — Logo, RubiMark, Icon, Button, Chip, Avatar, ProgressBar,
  ProgressRing, Divider, SectionLabel, SerifHeadline, Tag.
- **Molecules** — NavItem, Sidebar, Field, ModeCard, OptionButton, Toggle2,
  RubiBubble, LearnerBubble, RubiSuggestCard, Slot, Stepper, RubiAskBar,
  WeeklyGrid, ContinueBanner, AssignmentRow, ModuleRow, NextStepCallout,
  WeakSpotsCard, VideoCard.
- **Screens** — Login, Dashboard Hero (page-level compositions demonstrating
  how the atoms and molecules assemble).

If you change a token, change it in one place — `styles/compass.css` — and
both the prototype and the components pick it up.
