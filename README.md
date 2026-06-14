# RCG — Regents' & Chancellor's Group

The website for the Regents' & Chancellor's Group, a student consulting partners group at UC Berkeley.

## Stack

Vite + React + TypeScript + Tailwind + shadcn/ui. Client-side only.

## Local development

```sh
bun install
bun run dev
```

## Where to edit content (no code changes required)

All editable content lives under `src/config/` and `src/data/`:

| File | What it controls |
|---|---|
| `src/config/site.ts` | Contact email recipient, Apply form URL, brand strings, social links |
| `src/data/members.ts` | Coffee-chat roster (name, role, year, major, bio, photo, scheduling link) |
| `src/data/partners.ts` | Past partner / client logos |
| `src/data/timeline.ts` | Recruitment and interview process steps & dates |
| `src/data/copy.ts` | Long-form page copy (hero, about, services, etc.) |

### Adding images

Drop files into the matching folder, then import them at the top of the data file:

```ts
// src/data/members.ts
import alexPhoto from "@/assets/members/alex.jpg";

export const members = [
  { id: "alex", name: "Alex", photo: alexPhoto, /* ... */ },
];
```

- Member photos → `src/assets/members/` (any 4:5 image works; missing photos fall back to initials).
- Partner logos → `src/assets/partners/` (rendered in original brand colors).
- RCG logo → `src/assets/logo/` (wire it into `src/components/Navigation.tsx` when ready).

## Known gaps vs. the build brief

The current build is **frontend only**, by request. The following items from BUILD_OFF.md are deferred and will need a backend to fully satisfy:

- **§4.4 Contact form** — currently submits via `mailto:` to `siteConfig.contactEmail`. There is no internal API route, no server-side validation, and no database persistence. To add: a backend endpoint (e.g. Lovable Cloud edge function or external service) called from `src/components/ContactForm.tsx`.
- **§4.7 Analytics** — silent pageview recording is not implemented (also requires a backend endpoint).

Everything else from the brief (theme, 5 functional areas, accessibility, responsive layouts, maintainable data layer, deep-link routing) is in place.
