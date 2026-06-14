/**
 * Coffee-chat roster.
 *
 * Maintainers: add/edit member entries here. Place photos under
 * `src/assets/members/` and import them at the top of this file.
 * `photo` is optional — cards fall back to an initials avatar.
 * `schedulingUrl` should be a Calendly / cal.com / Google scheduling link.
 */

export type Member = {
  id: string;
  name: string;
  role: string;
  year?: string;
  major?: string;
  bio?: string;
  photo?: string;
  schedulingUrl: string;
};

export const members: Member[] = [
  {
    id: "placeholder-1",
    name: "First Last",
    role: "President",
    year: "Senior",
    major: "Business Administration",
    bio: "Placeholder bio. Replace with real member information.",
    schedulingUrl: "https://calendly.com/your-link",
  },
  {
    id: "placeholder-2",
    name: "First Last",
    role: "Vice President",
    year: "Junior",
    major: "Computer Science",
    bio: "Placeholder bio. Replace with real member information.",
    schedulingUrl: "https://calendly.com/your-link",
  },
  {
    id: "placeholder-3",
    name: "First Last",
    role: "Director of Consulting",
    year: "Junior",
    major: "Economics",
    bio: "Placeholder bio. Replace with real member information.",
    schedulingUrl: "https://calendly.com/your-link",
  },
  {
    id: "placeholder-4",
    name: "First Last",
    role: "Director of Recruitment",
    year: "Sophomore",
    major: "Cognitive Science",
    bio: "Placeholder bio. Replace with real member information.",
    schedulingUrl: "https://calendly.com/your-link",
  },
  {
    id: "placeholder-5",
    name: "First Last",
    role: "Consultant",
    year: "Sophomore",
    major: "Industrial Engineering",
    bio: "Placeholder bio. Replace with real member information.",
    schedulingUrl: "https://calendly.com/your-link",
  },
  {
    id: "placeholder-6",
    name: "First Last",
    role: "Consultant",
    year: "Junior",
    major: "Political Economy",
    bio: "Placeholder bio. Replace with real member information.",
    schedulingUrl: "https://calendly.com/your-link",
  },
];
