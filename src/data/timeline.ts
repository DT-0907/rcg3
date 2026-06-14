/**
 * Recruitment and interview timelines.
 *
 * Maintainers: edit step labels, dates, and descriptions here. Mark a step
 * `inviteOnly: true` to flag it in the UI.
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
    description:
      "Submit the written application through the linked Google Form.",
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
    description:
      "Case interview and panel conversation with senior members.",
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
