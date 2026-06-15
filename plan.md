# RCG Website — Build Plan

Transform the existing ARCH STUDIO template into the **Regents' & Chancellor's Group** site, keeping the template's overall look and structure where it works, restyled to a light offwhite + navy palette.

Since you opted out of a backend, the contact form will validate client-side and submit via `mailto:` to a configurable recipient, and analytics/pageview recording will be omitted (brief §4.7 / §5 require a server). I'll note these gaps clearly in the README so they can be added later if you change your mind.

## Pages & routing

| Route | Purpose | Source |
|---|---|---|
| `/` | Landing: who RCG is, dual CTAs (org / student), partner logo strip, what-we-do summary | rework `Index` |
| `/about` | About RCG + "interested?" pathway to contact & apply | rework `About` |
| `/services` | What RCG offers organizations (credibility, capabilities) | rework `Services` |
| `/team` | Coffee chat / meet the team — member cards with scheduling links | rework `Work` |
| `/apply` | Recruitment + interview timeline, "Apply Now" → Google Form | rework `Blog` |
| `/contact` | Contact form (org inquiry flow) | rework `Contact` |

Remove `Blog`/`BlogPost` routes. `NotFound` stays. `BrowserRouter` already handles deep-link refreshes correctly.

## Theme

- Update `index.css` + `tailwind.config.ts` semantic tokens: offwhite background (`~#FAF8F3`), navy ink (`~#0F1E3D`) as primary, restrained gold/warm accent. Light mode only; remove the dark theme toggle.
- Keep template's typography rhythm but switch to a professional serif display + clean sans body (e.g. Fraunces / Inter or similar — final pick made during build).
- Replace ARCH STUDIO brand with "RCG" wordmark slot (real logo dropped in later as an asset).

## Functional areas (brief §4)

**Landing** — hero with dual primary CTAs ("Partner with RCG" → `/contact`, "Apply" → `/apply`); partner-logo strip (data-driven, original brand colors preserved, graceful fallback); what-we-do + why-RCG sections.

**About** — preserve template's About copy structure; add explicit org→contact and student→team/apply pathways at the bottom.

**Clients/Contact** — form fields: first name, last name, email, organization, message. Client-side validation with Zod + react-hook-form (required fields, valid email, field-level errors). Submit state machine: idle → submitting (button disabled, prevents duplicate) → success (form cleared, confirmation) → error (input preserved, message shown). Submission opens a prefilled `mailto:` to the configured recipient. Recipient lives in `src/config/site.ts` as a single constant. A visible contact email is shown on the page too.

**Team / Coffee Chat** — member cards driven by `src/data/members.ts` (name, role, year, bio, photo, schedulingUrl). Placeholder roster shipped; photo fallback = initials avatar. Each card has a "Schedule a chat" button opening the scheduling link in a new tab.

**Apply** — "Apply Now" button → your Google Form URL (stored in `src/config/site.ts`). Recruitment process + interview process rendered as ordered timeline components, content sourced from `src/data/timeline.ts` so edits are pure data changes.

**Analytics** — omitted (requires backend). Documented in README.

## Maintainable content layer

All editable content isolated under `src/data/` and `src/config/`:

```text
src/
  config/
    site.ts          # contactEmail, applyFormUrl, brand strings
  data/
    members.ts       # team roster
    partners.ts      # partner logos + names
    timeline.ts      # recruitment & interview steps
    copy.ts          # long-form page copy blocks
  assets/
    logo/            # RCG logo (you upload)
    partners/        # partner logos (you upload)
    members/         # member photos (you upload)
```

## Accessibility & responsiveness (brief §4.1)

- Semantic landmarks, single `<main>` per route, sensible heading order.
- Mobile nav (sheet/drawer) with keyboard + focus management via shadcn primitives.
- Labeled form fields, visible focus rings, alt text on meaningful images, `aria-label` on icon-only buttons.
- Responsive layouts verified at mobile / tablet / desktop widths.

## Out of scope (explicitly deferred)

- Backend API routes, DB persistence, server-side validation, real email delivery — replaced with `mailto:` flow.
- Silent pageview analytics endpoint.
- Real RCG logo, member photos, partner logos, member roster — placeholders shipped; you'll drop in real assets/data later by editing the files in `src/data/` and `src/assets/`.

## Build order

1. Theme tokens (offwhite/navy) + remove dark mode.
2. Routing + nav/footer restructure for 6 pages above.
3. Content data layer (`config/site.ts`, `data/*.ts`) with placeholders.
4. Landing, About, Services, Team, Apply pages.
5. Contact form with validation + mailto submit + state UI.
6. Mobile nav, a11y pass, responsive checks.
7. README note on backend/analytics gap and where to edit content.
