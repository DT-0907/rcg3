/**
 * SINGLE SOURCE OF TRUTH FOR ALL WEBSITE TEXT.
 *
 * Every headline, paragraph, button label, form message, nav link, footer
 * line, and roster/timeline entry on the site is defined in this one file.
 * Edit text here — you should not need to open a page or component file to
 * change copy.
 *
 * Exception: the `<meta>` tags in index.html are duplicated from `copy.meta`
 * below, because search engines and social-share crawlers read index.html
 * directly, before React ever runs. If you change `copy.meta`, update
 * index.html to match.
 *
 * Brand basics (site name, tagline, contact email, apply form URL, social
 * links) live in src/config/site.ts instead, since those are configuration
 * values reused for links/routing rather than prose
 */

export const copy = {
  meta: {
    title: "RCG | Regents' & Chancellor's Group",
    description:
      "RCG is the corporate projects arm of UC Berkeley's Regents' and Chancellor's Scholars community.",
    author: "Regents' and Chancellor's Group",
    ogTitle: "RCG | Regents' & Chancellor's Group",
    ogDescription:
      "Cross-functional project teams drawn from UC Berkeley's Regents' and Chancellor's Scholars community.",
  },

  nav: {
    links: [
      { to: "/", label: "Home" },
      { to: "/about", label: "About" },
      { to: "/team", label: "Team" },
      { to: "/apply", label: "Apply" },
      { to: "/contact", label: "For Clients" },
      { to: "https://rcsa.studentorg.berkeley.edu/", label: "RCSA", external: true },
    ],
    openMenuAriaLabel: "Open navigation menu",
    menuTitle: "Navigation",
  },

  footer: {
    exploreHeading: "Explore",
    getInTouchHeading: "Get in touch",
    rightsReserved: "All rights reserved.",
    studentOrgLinePrefix: "A student organization at",
  },

  hero: {
    eyebrow: "UC Berkeley · Corporate Projects",
    title: "Berkeley students helping organizations answer hard questions.",
    subtitle:
      "We are a team of Regents' and Chancellor's Scholars who take on focused consulting projects for companies, nonprofits, and community organizations. We do the research, pressure-test the options, and leave our partners with useful next steps.",
    primaryCta: "Tell us what you're working on",
    secondaryCta: "Learn about RCG",
  },

  partnerMarquee: {
    heading: "Our Scholars Have Worked With:",
  },

  whatWeDo: {
    eyebrow: "What we do",
    title: "Research that leads to a clear next move.",
    blurb:
      "Our projects begin with a real decision on a partner's desk. Over six to ten weeks, a small student team gathers evidence, speaks with the people closest to the problem, and turns what it learns into a practical recommendation.",
    pillars: [
      {
        title: "Stability",
        body: "Every engagement begins with a defined question, partner cadence, and final deliverable so teams know what they own from the start.",
      },
      {
        title: "Vision",
        body: "We give Berkeley scholars a place to apply academic depth to consequential work for companies, nonprofits, and community partners.",
      },
      {
        title: "Direction",
        body: "We connect Berkeley talent with corporate projects that build experience and produce practical results for partner teams.",
      },
    ],
  },

  whyRcg: {
    eyebrow: "Why RCG",
    title: "A small team with room to go deep.",
    points: [
      "Our members come from the Regents' and Chancellor's Scholars community and bring perspectives from engineering, business, the sciences, and the humanities.",
      "Alumni and experienced project leads stay close to the work, challenging assumptions and helping teams make their analysis stronger.",
      "We set the question, cadence, and final deliverable together at the start, so partners always know what is being worked on and why.",
    ],
  },

  closingCta: {
    title: "Have a question your team hasn't had time to chase down?",
    bodyPrefix:
      "Send",
    bodySuffix: " a short note about the decision in front of you. We'll let you know whether it looks like a good fit for a student consulting project.",
    primaryCta: "Start a conversation",
    secondaryCta: "See how projects work",
  },

  about: {
    eyebrow: "About RCG",
    title: "A place to do serious work with people who stay curious.",
    paragraphs: [
      "RCG is a project-based organization whose members are selected through behavioral, technical, and case interviews. The process looks for people who can reason carefully, communicate clearly, and take ownership of demanding work.",
      "Our members study within a university community of more than 35,000 undergraduates, 100 majors, and 1,200 student organizations. Project teams deliberately combine technical minds from engineering, EECS, computer science, data science, mathematics, and statistics with strategists from Haas, economics, policy, and related fields.",
      "That mix lets teams handle engineering and data while keeping the business decision in view. Members gain practical experience while partners receive focused, cross-functional work they can carry forward.",
    ],
    aside: {
      basedAtLabel: "Based at",
      basedAtValue: "UC Berkeley",
      composedOfLabel: "Composed of",
      composedOfValue:
        "Regents' & Chancellor's Scholars — Berkeley's top undergraduate award recipients.",
      focusLabel: "Focus",
      focusValue:
        "Software engineering, analytics, operations, business development, and product design.",
    },
    interested: {
      eyebrow: "Interested?",
      title: "Bring us a question worth investigating.",
      forOrgs: {
        title: "For organizations",
        body: "Tell us about the decision, research gap, or operational problem your team is facing. We'll follow up to understand the context and see whether RCG can help.",
        cta: "Submit an inquiry",
      },
      forStudents: {
        title: "For Berkeley students",
        body: "Meet a current member or apply directly during open recruitment.",
        ctaCoffeeChats: "Coffee chats",
        ctaApply: "Apply",
      },
    },
  },

  services: {
    eyebrow: "For Organizations",
    title: "One semester, one well-defined project.",
    blurb:
      "Each engagement brings together four to six scholars from technical and business disciplines. We agree on the scope at kickoff, share a midpoint update, and close with an executive presentation and a usable final deck.",
    offerings: [
      {
        title: "Software Engineering",
        body: "Focused builds and technical problem-solving led by scholars in computer science, data science, engineering, and related fields.",
      },
      {
        title: "Analytics",
        body: "Data cleaning, analysis, and clear reporting designed around the question your team needs to answer.",
      },
      {
        title: "Business Development",
        body: "Market research, positioning, partnership strategy, and outreach planning grounded in real evidence.",
      },
      {
        title: "Operations & Product Design",
        body: "Process improvement and product thinking that connect user needs with the way your organization actually works.",
      },
    ],
    howWeWork: {
      eyebrow: "How we work",
      title: "A clear rhythm from kickoff to final presentation.",
      paragraphs: [
        "We begin with a kickoff and scoping call to agree on the problem, the people involved, and what a useful final result should look like.",
        "A cross-functional team of four to six scholars owns the work through the semester. Project managers guide delivery and keep communication with the partner straightforward.",
        "A midpoint update gives both sides a chance to test the direction. The engagement ends with an executive presentation and deck your team can continue using.",
      ],
      cta: "Start a conversation",
    },
  },

  team: {
    eyebrow: "Coffee Chats",
    title: "Meet our members.",
    blurb:
      "Reach out to any current member to schedule a 1:1 conversation. We'd love to learn about you and answer questions about RCG.",
    scheduleChatCta: "Schedule a chat",
    scheduleChatAriaLabelPrefix: "Schedule a coffee chat with",
  },

  apply: {
    eyebrow: "Recruitment",
    title: "Join RCG.",
    blurb:
      "We recruit at the start of each semester from UC Berkeley's Regents' and Chancellor's Scholars community. Applicants advance through written, behavioral, technical, and case-based evaluation before joining a project team.",
    applyCta: "Apply Now",
    recruitmentProcess: {
      eyebrow: "Recruitment process",
      title: "The path from interested to admitted.",
      blurb:
        "Stages marked invite-only are extended to applicants who advance from the prior round.",
    },
    interviewProcessSection: {
      eyebrow: "Interview process",
      title: "What to expect in interviews.",
      blurb:
        "We design interviews to be conversational. Come curious — no prior consulting experience is required.",
    },
    readyToApply: {
      title: "Ready to apply?",
      bodyPrefix: "Submit your application through our Google Form. Reach out at",
      bodySuffix: "with any questions.",
      cta: "Apply Now",
    },
  },

  contact: {
    eyebrow: "Work with RCG",
    title: "Tell us about your project.",
    blurb:
      "Share a few details and we'll respond within a few days to set up an introductory conversation.",
    preferEmailHeading: "Prefer email?",
  },

  contactForm: {
    labels: {
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      organization: "Company / organization",
      message: "How can we help?",
    },
    errors: {
      firstName: "First name is required",
      lastName: "Last name is required",
      email: "Enter a valid email address",
      organization: "Organization is required",
      message: "Please share a few details (10+ characters)",
      formInvalid: "Please correct the highlighted fields.",
      mailClientFailedPrefix:
        "We couldn't open your mail client. Please email us directly at",
    },
    successMessage:
      "Thanks — your message is ready in your mail app. We'll respond within a few days.",
    submitLabel: "Send inquiry",
    submittingLabel: "Sending…",
    subjectPrefix: "RCG inquiry from",
    emailBody: {
      namePrefix: "Name:",
      emailPrefix: "Email:",
      organizationPrefix: "Organization:",
    },
  },

  notFound: {
    eyebrow: "Error 404",
    title: "Page not found",
    body: "The page you're looking for doesn't exist or has been moved.",
    cta: "Return home",
  },

  timeline: {
    inviteOnlyBadge: "Invite only",
  },
} as const;

/**
 * Recruitment and interview timelines (shown on the Apply page).
 * Mark a step `inviteOnly: true` to flag it in the UI.
 */
export type TimelineStep = {
  label: string;
  date: string;
  description: string;
  inviteOnly?: boolean;
};

export const recruitmentTimeline: TimelineStep[] = [
  {
    label: "Information Sessions",
    date: "Week 1",
    description:
      "Open to all interested students. Meet current members, learn about RCG, and ask questions.",
  },
  {
    label: "Coffee Chats",
    date: "Weeks 1–2",
    description:
      "1:1 conversations with current members to get to know the group and explore fit.",
  },
  {
    label: "Application Due",
    date: "End of Week 2",
    description: "Submit the written application through the linked Google Form.",
  },
  {
    label: "First Round Interviews",
    date: "Week 3",
    inviteOnly: true,
    description:
      "Behavioral interview focused on motivation, experience, and collaboration.",
  },
  {
    label: "Final Round Interviews",
    date: "Week 4",
    inviteOnly: true,
    description: "Case interview and panel conversation with senior members.",
  },
  {
    label: "Offers Extended",
    date: "End of Week 4",
    description: "New members are welcomed into RCG.",
  },
];

export const interviewProcess: TimelineStep[] = [
  {
    label: "Behavioral Round",
    date: "First Round",
    inviteOnly: true,
    description:
      "We learn about your story, motivations, and how you approach team work.",
  },
  {
    label: "Case Round",
    date: "Final Round",
    inviteOnly: true,
    description:
      "A structured business problem walked through together. We coach you through it — no prior consulting experience required.",
  },
  {
    label: "Panel Conversation",
    date: "Final Round",
    inviteOnly: true,
    description:
      "A relaxed conversation with leadership to talk through fit and answer your questions.",
  },
];

/**
 * Coffee-chat roster. Place photos under `src/assets/members/` and import
 * them at the top of this file. `photo` is optional — cards fall back to an
 * initials avatar. `schedulingUrl` should be a Calendly / cal.com / Google
 * scheduling link.
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

export type Leader = {
  id: string;
  name: string;
  role: string;
  description: string;
  photo?: string;
};

/** Add headshot paths and replace the placeholder details as leadership is confirmed. */
export const leadership: Leader[] = [
  {
    id: "executive-director",
    name: "Executive Director",
    role: "Executive Team",
    description: "Leads the organization, oversees partner relationships, and keeps RCG's work aligned with the scholars community.",
  },
  {
    id: "financial-director",
    name: "Financial Director",
    role: "Executive Team",
    description: "Manages finances, sponsorship operations, and the resources that support project teams and scholar programming.",
  },
  {
    id: "project-manager",
    name: "Project Managers",
    role: "Project Leadership",
    description: "Source opportunities, shape project scopes, and guide cross-functional teams from kickoff through final delivery.",
  },
];

/**
 * Company pipeline. Drop logo files into `public/partners/`,
 * import them, and add an entry below. Partner logos should display in
 * their original brand colors (no monochrome tint applied in components).
 */
export type Partner = {
  id: string;
  name: string;
  /** Optional imported image. If absent, a name chip is rendered instead. */
  logo?: string;
  website?: string;
};

export const partners: Partner[] = [
  { id: "oracle", name: "Oracle", logo: "/partners/oracle.svg" },
  { id: "samsung", name: "Samsung", logo: "/partners/samsung.svg" },
  { id: "johnson-johnson", name: "Johnson & Johnson", logo: "/partners/johnson-johnson.svg" },
  { id: "amazon", name: "Amazon", logo: "/partners/amazon.svg" },
  { id: "broadcom", name: "Broadcom", logo: "/partners/broadcom.svg" },
  { id: "bair", name: "Berkeley Artificial Intelligence Research", logo: "/partners/bair.svg" },
  { id: "jpmorgan", name: "J.P. Morgan", logo: "/partners/jpmorgan.svg" },
  { id: "cisco", name: "Cisco", logo: "/partners/cisco.svg" },
  { id: "google", name: "Google", logo: "/partners/google.svg" },
];
