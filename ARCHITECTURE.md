# RCG Website — Architecture Overview

> Last updated: 2025-06-14  
> Frontend-only build. No backend connected.

---

## 1. Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Build tool | Vite 5 | Dev server, HMR, production bundling |
| Framework | React 18 | UI component model |
| Language | TypeScript 5 | Type-safe components & data |
| Styling | Tailwind CSS v3 | Utility-first CSS |
| UI kit | shadcn/ui | Accessible primitives (Button, Input, Sheet, Dialog, etc.) |
| Routing | React Router (v6) | Client-side SPA navigation |
| Forms | react-hook-form + Zod | Validation & state management |
| Icons | lucide-react | SVG icon set |
| Fonts | Fraunces (display), Inter (body) | Typography |

**No backend runtime.** There is no server-side code, database, API routes, or edge functions in this codebase.

---

## 2. Route Map (Single-Page Application)

All routes are rendered client-side by the same React bundle.

| Path | Page Component | Description |
|------|----------------|-------------|
| `/` | `Index` | Landing page |
| `/about` | `About` | Organization overview |
| `/services` | `Services` | Offerings & programs |
| `/team` | `Team` | Member roster |
| `/apply` | `Apply` | Application CTA (links to external Google Form) |
| `/contact` | `Contact` | Contact form |
| `*` | `NotFound` | 404 fallback |

---

## 3. Design System

- **Theme:** Light-mode only.
- **Primary background:** Off-white (`#FAF6EE` / `#FAF8F3`).
- **Primary text / ink:** Deep navy (`#142446` / `#0F1E3D`).
- **Tokens:** CSS custom properties in `src/index.css`, mapped to Tailwind classes in `tailwind.config.ts`.
- **Components:** Styled via Tailwind + shadcn/ui variants. No inline style objects for layout or color.

---

## 4. Data & Configuration Layer

All content is static TypeScript / JSON modules. There is no network data fetching.

| File | Purpose |
|------|---------|
| `src/config/site.ts` | Site-wide config (title, description, contact email, external links) |
| `src/data/members.ts` | Placeholder team roster (names, roles, bios, photo imports) |
| `src/data/partners.ts` | Placeholder partner/logo data |
| `src/data/timeline.ts` | Placeholder program steps & dates |
| `src/data/copy.ts` | Reusable marketing copy blocks |

### Asset conventions
- Member photos: `src/assets/members/{slug}.jpg`
- Partner logos: `src/assets/partners/{slug}.svg` or `.png`
- RCG logo: **Not yet wired in.** Navigation currently uses a text wordmark.

---

## 5. Mocked / Placeholder Connections

Because the backend was skipped, the following features are UI-complete but not wired to any real service:

### Contact Form
- **UI state:** Loading spinner, success message, error message, field-level validation.
- **Submission mechanism:** `mailto:` link with a prefilled recipient (`____@email.com` from `siteConfig`).
- **Limitations:**
  - No server-side validation.
  - No database persistence.
  - No actual email delivery pipeline (relies on the user’s local mail client).
  - If no mail client is configured, the submission silently fails.

### Analytics / Pageviews
- **Status:** Completely omitted.
- **Impact:** No traffic tracking, no event logging, no conversion funnels.

### Member Data
- **Status:** Static placeholder roster in `src/data/members.ts`.
- **Photos:** Imported from `src/assets/members/`. If a photo is missing, an initials avatar is rendered.

### Partner Logos
- **Status:** Static placeholder data in `src/data/partners.ts`.
- **Visual:** Grayscale strip on landing page; restores original brand colors on hover when populated.

### Timeline
- **Status:** Static placeholder steps and dates in `src/data/timeline.ts`.

---

## 6. Component Architecture

```
src/
  components/
    Navigation.tsx        — Site nav + mobile sheet menu
    Footer.tsx            — Site footer
    PageLayout.tsx        — Wrapper for consistent section spacing & max-width
    MemberCard.tsx        — Individual team member display
    PartnerStrip.tsx      — Horizontal partner logo row
    Timeline.tsx          — Vertical step timeline
    ContactForm.tsx       — Validated contact form (client-side only)
  pages/
    Index.tsx             — Landing / hero + partners + timeline preview
    About.tsx             — Mission, vision, values
    Services.tsx          — Detailed offerings
    Team.tsx              — Grid of MemberCards
    Apply.tsx             — Redirect/CTA to external Google Form
    Contact.tsx           — Contact info + ContactForm
    NotFound.tsx          — 404 page
```

---

## 7. Build & Deploy Workflow

| Command | Action |
|---------|--------|
| `bun run dev` | Start dev server (default port 8080) |
| `bun run build` | Production build → static assets in `dist/` |
| `bun run preview` | Preview production build locally |

### Output
- Static HTML, CSS, JS, and assets.
- Deployable to any static host: **Vercel, Netlify, GitHub Pages, Cloudflare Pages**, etc.

---

## 8. What Is NOT Present

| Feature | Why It’s Missing |
|---------|------------------|
| Database | No backend selected |
| Authentication / login | No backend selected |
| Server-side API routes | No backend selected |
| Email service (SendGrid, Resend, etc.) | No backend selected |
| Analytics (Plausible, Google Analytics, etc.) | Not integrated |
| CMS / admin dashboard | Not implemented |
| Dynamic content (blog, news) | Scoped out; static copy only |

---

## 9. Adding a Backend Later

If a backend is introduced (e.g. Lovable Cloud / Supabase), the typical integration points would be:

1. **Contact form** — Replace `mailto:` with a POST to an API route or edge function that sends email via a provider.
2. **Member / partner data** — Move from static TS modules to database tables; fetch at build time or runtime.
3. **Analytics** — Inject a lightweight script or use server-side logging.
4. **Authentication** — Add login flow and protected routes if an admin dashboard is needed.

---

## 10. Environment Summary

- **Node runtime:** Not required in production (static files only).
- **Package manager:** `bun` (lockfile: `bun.lockb`).
- **Git repo:** Connected to GitHub; bidirectional sync enabled.
