# Atomity — Frontend Engineering Challenge

Live Demo: [https://atomity-frontend-challenge-ruddy.vercel.app/]

## Overview & Feature Selection
For this challenge, I chose **Option B (from 45 to 55)**. My goal was to take the core concept from the video and transform it in a clean and simple UI.

---

## Key Implementation Highlights

### 1. Token Architecture
- Defined central CSS variables for color palettes inside `:root`.
- Referenced design tokens across Tailwind / CSS components to ensure zero hardcoded hex values in UI logic.

### 2. Data Fetching
- **API:** Fetched dynamic optimization metrics using REST endpoints `DummyJSON`.
- **States:** Fully handled `loading`, `error`, and `success` async UI states with skeleton fallbacks.

### 3. Motion & Animation
- Used **Framer Motion** for natural spring physics and scroll-triggered animations (`whileInView`).

### 4. Modern CSS Usage
- Leveraged modern CSS capabilities such as `clamp()` for fluid typography across screen sizes.
- Utilized CSS logical properties (`margin-inline`, `padding-block`) and flexible layouts for component-level responsiveness.

---

## Tech Stack & Decision Rationale

- **Framework:** Next.js + TypeScript
- **Styling:** Tailwind CSS + Design Tokens (CSS Variables)
- **Animation:** Framer Motion 
- **UI Architecture:** 100% custom-built primitives without relying on third-party UI libraries 
---

## Future Improvements (With More Time)
- Implement container queries (`@container`) for complex card resizing in grid layouts.
- Finishing the dark mode implementation.
- making the page more responsive and engaging .
