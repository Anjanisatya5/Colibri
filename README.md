# Compass — clickable prototype

A study-companion prototype: learners onboard with **Rubi**, then land on a
dashboard that carries the same visual language across every screen.

## Flow

```
index.html ──(complete either onboarding)──▶ dashboard.html
  ├─ "Talk it through"  (conversational)          │
  └─ "Fill out a quick form" (guided steps)        ▼
                                          Home dashboard ◀─┐
                                            sidebar nav    │
                              ┌─────────────┼──────────────┤
                              ▼             ▼              ▼
                          rubi.html    course.html   flashcards.html
```

## Pages

| File | Screen |
|------|--------|
| `index.html` | Onboarding — two modes ("Talk it through" chat, "Fill out a quick form"). Both end on **Go to my dashboard** → `dashboard.html`. |
| `dashboard.html` | Home dashboard (landing page). |
| `rubi.html` | Learn with Rubi — guided lesson / chat. |
| `course.html` | Course — modules. |
| `flashcards.html` | Flashcards by topic. |
| `styles.css` | **Single source of truth** for the visual language — color tokens, type (Inter + Source Serif 4), radii, shadows, and the shared app-shell + sidebar chrome. Every page links it. |

## Design language

Taken from the dashboard and applied everywhere via `styles.css`:

- **Type** — Source Serif 4 (display/headings), Inter (interface/body).
- **Brand** — Intelligence Blue `#1E2761`, Rubi Violet `#5B3E8E`, Adaptive Teal `#0E6E76`.
- **Signal** — Signal Green `#1B8A5A` (proven), Amber `#B26414` (attention).
- **Surface & ink** — warm paper `#FAF9F5` through ink `#1A1A16`.

Editorial direction: warm paper, hairline structure, no cards.

## Running it

Open `index.html` in a browser (or serve the folder statically). All five
pages are self-contained; the only external dependency is Google Fonts,
which falls back to system fonts offline.

The sidebar's **Exam simulator** and **Progress** items are intentionally
inert — those screens aren't part of this prototype yet.
