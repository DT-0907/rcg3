/**
 * Long-form page copy. Maintainers can edit text here without touching
 * page layout. Keep paragraphs short and direct.
 */

export const copy = {
  hero: {
    eyebrow: "UC Berkeley · Student Consulting",
    title: "Strategy and execution, delivered by Berkeley's top scholars.",
    subtitle:
      "RCG is a partners group of Regents' and Chancellor's Scholars working with organizations to solve real problems with rigor and care.",
  },

  whatWeDo: {
    title: "What we do",
    blurb:
      "We partner with organizations on focused engagements — market research, strategy, growth, and operations — bringing the discipline of a small consulting team and the curiosity of Berkeley's top undergraduates.",
    pillars: [
      {
        title: "Strategy & Research",
        body: "Market sizing, competitive analysis, and entry strategy grounded in primary research.",
      },
      {
        title: "Growth & Go-to-Market",
        body: "Channel testing, positioning, and pricing experiments that move metrics.",
      },
      {
        title: "Operations & Analytics",
        body: "Process diagnostics and data-driven recommendations your team can implement.",
      },
    ],
  },

  whyRcg: {
    title: "Why RCG",
    points: [
      "Selectively built from Regents' and Chancellor's Scholars — Berkeley's most distinguished undergraduate cohort.",
      "Senior mentorship from alumni now at top consulting firms, investment banks, and operating roles.",
      "Tight engagements with clear deliverables — we ship written reports, not slide-ware.",
    ],
  },

  about: {
    eyebrow: "About RCG",
    title: "A consulting group built from Berkeley's distinguished scholars.",
    paragraphs: [
      "The Regents' and Chancellor's Group brings together students who have earned UC Berkeley's most prestigious undergraduate scholarship. We channel that talent into a small, focused consulting practice that serves real organizations.",
      "Our members come from across the College of Letters & Science, Haas, Engineering, and beyond. What unites us is intellectual rigor, a bias toward action, and a deep care for the people and partners we work with.",
      "We're a community as much as a consulting group. Members mentor one another, push each other's thinking, and stay connected long after graduation.",
    ],
  },

  services: {
    eyebrow: "For Organizations",
    title: "Engagements built around your team.",
    blurb:
      "We scope every project around a concrete decision the client needs to make. Engagements typically run six to ten weeks with weekly working sessions.",
  },

  team: {
    eyebrow: "Coffee Chats",
    title: "Meet our members.",
    blurb:
      "Reach out to any current member to schedule a 1:1 conversation. We'd love to learn about you and answer questions about RCG.",
  },

  apply: {
    eyebrow: "Recruitment",
    title: "Join RCG.",
    blurb:
      "We recruit new members at the start of each semester. The process is open to all UC Berkeley undergraduates regardless of major or year.",
  },
} as const;
