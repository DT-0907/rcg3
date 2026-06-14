/**
 * Past partners / clients.
 *
 * Maintainers: drop logo files into `src/assets/partners/`, import them,
 * and add an entry below. Partner logos should display in their original
 * brand colors (no monochrome tint applied in components).
 */

export type Partner = {
  id: string;
  name: string;
  /** Optional imported image. If absent, a name chip is rendered instead. */
  logo?: string;
  website?: string;
};

export const partners: Partner[] = [
  { id: "p1", name: "Partner One" },
  { id: "p2", name: "Partner Two" },
  { id: "p3", name: "Partner Three" },
  { id: "p4", name: "Partner Four" },
  { id: "p5", name: "Partner Five" },
  { id: "p6", name: "Partner Six" },
];
