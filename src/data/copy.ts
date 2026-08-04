import aanyaPhoto from "@/assets/members/aanya-chakraborty.jpg";
import andrewPhoto from "@/assets/members/andrew-shia.jpg";
import delbertPhoto from "@/assets/members/delbert-tran.jpg";
import devinPhoto from "@/assets/members/devin-cheng.jpg";
import khushiPhoto from "@/assets/members/khushi-kolte.jpg";
import markPhoto from "@/assets/members/mark-lin.jpg";
import vincentPhoto from "@/assets/members/vincent-tran.jpg";
import williamPhoto from "@/assets/members/william-li.jpg";

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
      "We're a team of Regents' and Chancellor's Scholars who take on consulting projects for companies, nonprofits, and community organizations. We dig into the research, argue our way through what it means, and hand back something you can act on.",
    primaryCta: "Tell us what you're working on",
    secondaryCta: "Learn about RCG",
  },

  /**
   * Landing hero: the wordmark and the tracked line under it. Keep the tagline
   * short — it is set in uppercase with wide tracking on one or two lines, so
   * a sentence-length string will crowd the hero.
   */
  homeHero: {
    title: "Regents' & Chancellor's Group",
    tagline: "Projects & consulting from the top scholars at Berkeley",
  },

  partnerMarquee: {
    heading: "Our Scholars Have Worked With:",
  },

  whatWeDo: {
    eyebrow: "What we do",
    title: "Research that leads to a clear next move.",
    blurb:
      "Every project starts with a decision someone actually has to make. A small team then spends six to ten weeks on it, reading everything we can find and talking to the people closest to the problem before we commit to a recommendation.",
    pillars: [
      {
        title: "Stability",
        body: "We settle the question, the check-in schedule, and the final deliverable before any work starts. Nobody spends the semester guessing at what they own.",
      },
      {
        title: "Vision",
        body: "Scholars get to aim what they've learned in class at a problem where the answer actually matters to somebody.",
      },
      {
        title: "Direction",
        body: "Students finish with real project experience. Partners finish with work they can use.",
      },
    ],
  },

  whyRcg: {
    eyebrow: "Why RCG",
    title: "A small team with room to go deep.",
    points: [
      "Our members all come out of the Regents' and Chancellor's Scholars community. They study engineering, business, the sciences, the humanities.",
      "Alumni and experienced project leads stay close to the work. They push back on a team's assumptions well before a partner ever has to.",
      "You'll always know what we're working on and why. That gets set with you at kickoff, not explained after the fact.",
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
      "RCG is a project-based organization. Members are selected through behavioral, technical, and case interviews, and what we're looking for is fairly simple: people who think clearly and will carry a hard piece of work all the way to the end.",
      "Berkeley gives us more than 35,000 undergraduates, 100 majors, and 1,200 student organizations to draw from, and we use it. A typical project team pairs people out of EECS, computer science, data science, math, or statistics with people out of Haas, economics, or policy.",
      "The reason we build teams that way is that nobody should have to choose between getting the technical work right and keeping the business question in view. One team can hold both.",
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
        body: "Tell us what your team is stuck on. We'll follow up with questions, and we'll tell you honestly if it isn't a good fit for a student team.",
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
      "Each project runs with a team of six to eight: four to six consultants drawn from both technical and business backgrounds, plus two project managers. We lock the scope at kickoff, check in at the midpoint, and finish with a presentation to your team plus a deck you'll keep using.",
    offerings: [
      {
        title: "Software Engineering",
        body: "Builds and technical problem-solving, led by scholars in computer science, data science, and engineering.",
      },
      {
        title: "Analytics",
        body: "Cleaning up messy data, working through it, and reporting back in terms of the decision you're trying to make.",
      },
      {
        title: "Business Development",
        body: "Market research, positioning, partnership strategy, and outreach planning, with the evidence behind every call we make.",
      },
      {
        title: "Operations & Product Design",
        body: "Process and product work that takes seriously how your organization actually runs, not how the org chart says it runs.",
      },
    ],
    howWeWork: {
      eyebrow: "How we work",
      title: "A clear rhythm from kickoff to final presentation.",
      paragraphs: [
        "We start with a kickoff call to pin down the problem, who we'll need to talk to, and what a useful answer would even look like.",
        "A team of six to eight then owns the work for the semester: four to six consultants, with two project managers running delivery and staying your point of contact throughout.",
        "At the midpoint we show you where things are heading. That's the moment to redirect us if it's wrong. We close with a presentation to your leadership and a deck your team can keep working from.",
      ],
      cta: "Start a conversation",
    },
  },

  team: {
    eyebrow: "Coffee Chats",
    title: "Meet our members.",
    blurb:
      "Reach out to any member below for a 1:1. We're happy to talk about RCG, about Berkeley, or about whatever you're still trying to figure out.",
    scheduleChatCta: "Schedule a chat",
    scheduleChatAriaLabelPrefix: "Schedule a coffee chat with",
  },

  apply: {
    eyebrow: "Recruitment",
    title: "Join RCG.",
    blurb:
      "We recruit at the start of each semester from Berkeley's Regents' and Chancellor's Scholars community. There's a written application first, then behavioral, technical, and case rounds before you join a project team.",
    applyCta: "Apply Now",
    recruitmentProcess: {
      eyebrow: "Recruitment process",
      title: "The path from interested to admitted.",
      blurb:
        "Invite-only stages go to applicants who advance from the round before.",
    },
    interviewProcessSection: {
      eyebrow: "Interview process",
      title: "What to expect in interviews.",
      blurb:
        "Our interviews are meant to feel like conversations. You don't need any consulting experience to do well in one.",
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
      "Share a few details and we'll get back to you within a few days to set up a first call.",
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
      "Thanks. Your message is ready in your mail app. We'll respond within a few days.",
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
      "Open to anyone. Come meet current members and ask us whatever you want to know.",
  },
  {
    label: "Coffee Chats",
    date: "Weeks 1–2",
    description:
      "A 1:1 with someone already in RCG, so you can work out whether the group is right for you.",
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
      "A behavioral interview about what you've worked on and how you work with other people.",
  },
  {
    label: "Final Round Interviews",
    date: "Week 4",
    inviteOnly: true,
    description: "A case interview, plus a panel conversation with senior members.",
  },
  {
    label: "Offers Extended",
    date: "End of Week 4",
    description: "We welcome the new class into RCG.",
  },
];

/**
 * The dated recruitment cycle shown on the Apply hero rail.
 *
 * `start` / `end` carry an explicit Pacific offset, so each one is an absolute
 * instant. Comparisons against `Date.now()` are therefore correct no matter
 * what timezone the visitor's machine is set to. August is PDT (UTC-7); if a
 * future cycle crosses into November, use -08:00 for the dates after the flip.
 *
 * To roll this forward to next year, edit only this array.
 */
export type RecruitmentRound = {
  id: string;
  label: string;
  dateLabel: string;
  start: string;
  end: string;
  note?: string;
  isFinal?: boolean;
};

/**
 * Numbering starts at Round Two on purpose: Round One was the written
 * application, due 2 Aug 2026, and has already closed. The dates below are
 * unchanged — only the round numbers shifted up to account for it.
 */
export const recruitmentCycle = {
  season: "August 2026",
  eyebrow: "Recruitment cycle",
  rounds: [
    {
      id: "R2",
      label: "Round Two",
      dateLabel: "Aug 8–9",
      start: "2026-08-08T00:00:00-07:00",
      end: "2026-08-09T23:59:59-07:00",
    },
    {
      id: "R3",
      label: "Round Three",
      dateLabel: "Aug 22",
      start: "2026-08-22T00:00:00-07:00",
      end: "2026-08-22T23:59:59-07:00",
    },
    {
      id: "R4",
      label: "Round Four",
      dateLabel: "Aug 23",
      start: "2026-08-23T00:00:00-07:00",
      end: "2026-08-23T23:59:59-07:00",
    },
    {
      id: "R5",
      label: "Final Round",
      dateLabel: "Aug 29–30",
      note: "First week of school",
      isFinal: true,
      start: "2026-08-29T00:00:00-07:00",
      end: "2026-08-30T23:59:59-07:00",
    },
  ] satisfies RecruitmentRound[],
} as const;

/**
 * Interview rounds shown on the Apply page. Each entry is index-matched to
 * `interviewPrep` in src/pages/Apply.tsx — add or remove one here and you must
 * do the same there.
 */
export const interviewProcess: TimelineStep[] = [
  {
    label: "Behavioral Round",
    date: "Behavioral",
    inviteOnly: true,
    description:
      "We get to know your story, what drives you, and how you tend to operate on a team.",
  },
  {
    label: "Business Case",
    date: "Case round",
    inviteOnly: true,
    description:
      "A business problem we walk through together. We'll coach you as you go, and you don't need consulting experience to handle it.",
  },
  {
    label: "Technical Case",
    date: "Case round",
    inviteOnly: true,
    description:
      "A technical problem worked through with an interviewer, aimed at how you reason about data and build toward an answer.",
  },
  {
    label: "Final Round",
    date: "Final round",
    inviteOnly: true,
    description: "Details for the final round will be released later.",
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
  companies?: string[];
  photo?: string;
  schedulingUrl: string;
};

export const members: Member[] = [
  {
    id: "mark-lin",
    name: "Mark Lin",
    role: "Executive Director",
    major: "Molecular and Cellular Biology, Environmental Sciences",
    bio: "Nice to meet you! I'm Mark Lin, External President of the RCSA and Executive Director of the RCG. Some of my greatest loves are, in no particular order: my algae culture, the ocean, lofi jazz (Pebble Beach by Vince Guaraldi), the gym, cooking, surfing, Korean BBQ, Singapore, and rock climbing. If you're interested in science, business, obtaining a patent, getting a science internship, or making a new friend, I'd be happy to chat!",
    companies: ["Johnson & Johnson", "Terranova"],
    photo: markPhoto,
    schedulingUrl: "https://calendly.com/marklin-berkeley/rc-coffee-chat-mark-lin",
  },
  {
    id: "khushi-kolte",
    name: "Khushi Kolte",
    role: "Financial Director",
    major: "Cognitive Science, Data Science",
    bio: "Hi, I'm Khushi. I am a sophomore studying Cognitive Science and Data Science, and I'm the Internal VP for RCSA and the Financial Director for RCG. In my free time, I love dancing, painting, playing poker, hiking, binging TV shows, and trying new cafes and restaurants.",
    companies: ["Astraqua", "Epistemy", "Golden Bear Sleep and Mood Research Clinic"],
    photo: khushiPhoto,
    schedulingUrl: "https://calendly.com/khushikolte/30min",
  },
  {
    id: "andrew-shia",
    name: "Andrew Shia",
    role: "Project Manager",
    major: "Applied Mathematics, Economics",
    bio: "Hi, I'm Andrew! I'm a Taiwanese American exploring finance, more specifically private equity and risk analysis. Besides that, I love music (K-pop, KRNB, R&B, indie, and classical), photography, sports (basketball and volleyball), speedcubing and puzzles, and being a professional napper.",
    companies: ["Trustpoint AI", "Morgan Stanley", "Goldman Sachs"],
    photo: andrewPhoto,
    schedulingUrl: "https://calendly.com/andrewshia-berkeley/cc",
  },
  {
    id: "aanya-chakraborty",
    name: "Aanya Chakraborty",
    role: "Project Manager",
    major: "Public Health, Data Science, Neuroscience",
    bio: "Hi! I'm Aanya. Feel free to talk to me about your personal or professional interests—or ask me about mine, which include AI/ML for drug discovery and world literature. Or feel free to ask about Berkeley! Whatever floats your boat.",
    companies: ["Kaiser Permanente", "Stanford School of Medicine", "Lawrence Berkeley National Laboratory"],
    photo: aanyaPhoto,
    schedulingUrl: "https://calendly.com/aanyachakraborty-berkeley/coffee-chat-with-aanya",
  },
  {
    id: "vincent-tran",
    name: "Vincent Tran",
    role: "Project Manager",
    major: "EECS",
    bio: "Hi, my name is Vincent Tran, a rising sophomore studying EECS. I like operating systems and low-level programming (ask me about CS 162). I am a boba enjoyer, ex-Diamond in Valorant, ex-Platinum in USACO, and ex-jobless. AMA.",
    companies: ["Broadcom"],
    photo: vincentPhoto,
    schedulingUrl: "https://calendly.com/vincent-samuel-tran-berkeley/vt-fa26-coffee-chat",
  },
  {
    id: "william-li",
    name: "William Li",
    role: "Project Manager",
    major: "Engineering Mathematics and Statistics, EECS",
    bio: "Hi everyone! I'm William, a sophomore studying EECS, math, and statistics. In my free time I enjoy eating and playing Roblox. I also do software engineering and ML, I guess.",
    companies: ["Amazon"],
    photo: williamPhoto,
    schedulingUrl: "https://cal.com/william-li/coffee-chats",
  },
  {
    id: "delbert-tran",
    name: "Delbert Tran",
    role: "Project Manager",
    major: "EECS",
    bio: "Hi, I'm Delbert, a rising sophomore who's interested in startups, venture, and growth. For fun, I'm into rock climbing, martial arts, piano, guitar, and Valorant. Hit me up if you're in the San Francisco or Berkeley area, or just want to chat online about life.",
    companies: ["Mercor", "Google", "Oracle", "Western Digital"],
    photo: delbertPhoto,
    schedulingUrl: "https://calendly.com/delberttran-berkeley/new-meeting",
  },
  {
    id: "devin-cheng",
    name: "Devin Cheng",
    role: "Project Manager",
    major: "EECS",
    bio: "Hey, what's up? I'm Devin, a rising sophomore interested in ML research and startups. Chat with me if you like tech, ML, swimming, eating, R&B and chill music, AI larp, the outdoors, or computers. Hit me up to chat about anything interesting!",
    companies: ["Amazon", "Cisco", "NVIDIA"],
    photo: devinPhoto,
    schedulingUrl: "https://calendly.com/devin-cheng-berkeley/30min",
  },
];

export type Leader = {
  id: string;
  name: string;
  role: string;
  photo?: string;
};

/** Leadership mirrors the roster so future additions only require one data entry. */
export const leadership: Leader[] = members.map(({ id, name, role, photo }) => ({ id, name, role, photo }));

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
  { id: "morgan-stanley", name: "Morgan Stanley", logo: "/partners/morgan-stanley.svg" },
  { id: "goldman-sachs", name: "Goldman Sachs", logo: "/partners/goldman-sachs.svg" },
  { id: "kaiser-permanente", name: "Kaiser Permanente", logo: "/partners/kaiser-permanente.svg" },
  { id: "stanford-school-of-medicine", name: "Stanford School of Medicine", logo: "/partners/stanford-school-of-medicine.svg" },
  { id: "lawrence-berkeley-national-lab", name: "Lawrence Berkeley National Laboratory", logo: "/partners/lawrence-berkeley-national-lab.svg" },
  { id: "western-digital", name: "Western Digital", logo: "/partners/western-digital.svg" },
  { id: "nvidia", name: "NVIDIA", logo: "/partners/nvidia.svg" },
];
