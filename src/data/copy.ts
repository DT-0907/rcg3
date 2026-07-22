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
