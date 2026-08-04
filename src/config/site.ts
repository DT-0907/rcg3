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
  contactEmail: "contact@calrcg.org",

  /** External application form. */
  applyFormUrl: "https://forms.gle/uE1cWq5Nym4CUYm29",

  /** Social / external links (optional). */
  social: {
    instagram: "",
    linkedin: "",
  },
} as const;
