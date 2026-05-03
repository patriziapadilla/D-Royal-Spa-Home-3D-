# D'Royal Spa Miami — PRD

## Problem Statement
Sitio web landing para D'Royal Spa Miami (español) — servicio premium de belleza in-home en Miami: Lipo con Láser, Botox Natural con Láser, Aumentos sin Cirugía, CoolSculpting. User provided image filenames (placeholders used pending upload) and design mockups.

## Architecture
- Backend: FastAPI + MongoDB (motor). Endpoints: POST/GET `/api/reservations`, POST `/api/leads`, `/api/status`.
- Frontend: React + Tailwind + shadcn primitives + sonner. Single landing page with scroll sections.
- Design: Cream (#F1ECE1) bg, ink (#0B0B0B), Fraunces (display) + Chivo (body). Editorial minimal luxury.

## Sections
1. Navbar (sticky, mobile-friendly)
2. Hero (D'Royal Spa title + tagline + CTAs + locations strip)
3. Marquee (treatment names loop)
4. TreatmentLipo (carousel placeholders for lipo images)
5. TreatmentBotox
6. TreatmentAumentos
7. TreatmentCoolsculpting
8. Resultados (before/after grid)
9. Areas (Brickell, Downtown, Doral, Miami Beach)
10. Agendar (form → POST /api/reservations)
11. Footer

## Status
- ✅ Landing page with all sections
- ✅ Reservation form → MongoDB
- ✅ WhatsApp + phone CTAs
- ⏳ Real images — user will upload (files 6-11 pending per problem statement)

## Next
- Replace placeholder carousel cards with real photos/videos when uploaded
- Optional: admin panel to manage reservations
- Optional: Stripe for $90 first session deposit
