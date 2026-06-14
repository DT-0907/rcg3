/**
 * Site-wide configuration.
 *
 * Maintainers: edit values here to update the contact recipient, the
 * application form URL, and brand strings without touching layout code.
 */

export const siteConfig = {
  name: "RCG",
  fullName: "Regents' and Chancellor's Group",
  tagline: "Berkeley's premier student consulting group.",
  university: "University of California, Berkeley",

  /** Where contact-form submissions are routed (mailto). */
  contactEmail: "____@email.com",

  /** External application form. */
  applyFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSe3IOl9x6mqUhWg5ROsr07HHXDsXMZHXpNdC3VJyEgYabDe7A/viewform?usp=dialog",

  /** Social / external links (optional). */
  social: {
    instagram: "",
    linkedin: "",
  },
} as const;
