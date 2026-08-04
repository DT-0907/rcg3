import { useEffect } from "react";
import { ExternalLink, Lock } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import RecruitmentRail from "@/components/RecruitmentRail";
import { Button } from "@/components/ui/button";
import { copy, interviewProcess, recruitmentTimeline } from "@/data/copy";
import { siteConfig } from "@/config/site";

const recruitmentImages = [
  { src: "/recruitment-info-session.jpeg", position: "center" },
  { src: "/recruitment-coffee-chat.jpeg", position: "center" },
  { src: "/recruitment-application.jpeg", position: "center 42%" },
  { src: "/recruitment-behavioral.jpeg", position: "center" },
  { src: "/recruitment-case.jpeg", position: "center 35%" },
  { src: "/recruitment-offer.jpeg", position: "center" },
];

const interviewPrep = [
  {
    focus: "Motivation, ownership, collaboration, and reflection.",
    prep: ["Prepare four flexible STAR stories.", "Know why RCG fits your goals.", "Practice each answer aloud in two minutes."],
    questions: [
      "Why RCG, and what would you contribute to a project team?",
      "Tell us about a time a team was not working well. What did you do?",
      "Describe a mistake you made and what changed afterward.",
      "Tell us about a time you worked through an ambiguous problem.",
      "When have you changed your mind after receiving feedback?",
    ],
    resources: [
      { label: "Berkeley interview preparation", note: "Mock interviews, Big Interview, and practice guidance.", href: "https://career.berkeley.edu/prepare-for-success/interviewing/interview-preparation/" },
      { label: "Berkeley interview overview", note: "Behavioral preparation and interview-day fundamentals.", href: "https://career.berkeley.edu/prepare-for-success/interviewing/" },
      { label: "MIT interviewing toolkit", note: "A clear walkthrough of behavioral questions and STAR.", href: "https://capd.mit.edu/resources/career-toolkit-interviewing/" },
    ],
  },
  {
    focus: "Structured thinking, sensible assumptions, quantitative reasoning, and communication.",
    prep: ["Solve cases with a partner, not only on paper.", "State assumptions before calculating.", "End every case with a concise recommendation."],
    questions: [
      "A campus café is losing customers. How would you identify the cause?",
      "A nonprofit wants to increase student participation. What would you investigate first?",
      "Estimate the weekly demand for a new service near campus.",
      "A software product has strong sign-ups but weak retention. How would you diagnose it?",
      "A client has three growth options. How would you compare them?",
    ],
    resources: [
      { label: "McKinsey practice cases", note: "Worked cases with suggested logic and answers.", href: "https://www.mckinsey.com/careers/interviewing/en" },
      { label: "Bain case preparation", note: "Practice cases focused on assumptions, math, and synthesis.", href: "https://www.bain.com/careers/interview-preparation/experience-interview.aspx" },
      { label: "BCG case preparation", note: "Interactive case quizzes and structured-thinking guidance.", href: "https://careers.bcg.com/global/en/case-interview-preparation" },
    ],
  },
  {
    // TODO(rcg): drop in the technical case structure and the practice-case
    // links from Mark. Left deliberately sparse rather than filled with
    // invented detail about how the technical round actually runs.
    focus: "How you reason about data, break down a technical problem, and explain your approach.",
    prep: [],
    questions: [],
    resources: [],
  },
  {
    focus: "",
    prep: [],
    questions: [],
    resources: [],
  },
];

const Apply = () => {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }),
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <PageLayout>
      <div className="home-canvas text-[hsl(var(--cream))]">
        <section className="apply-image-hero relative flex min-h-[82svh] items-center overflow-hidden px-6 py-20">
          <div className="container relative z-10 mx-auto">
            <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_24rem]">
              <div className="max-w-3xl">
                <p className="text-eyebrow text-[hsl(var(--gold))]">{copy.apply.eyebrow}</p>
                <h1 className="mt-5 font-display text-6xl leading-[1.02] md:text-8xl">{copy.apply.title}</h1>
                <p className="mt-7 max-w-2xl text-xl leading-relaxed text-[hsl(var(--cream)/0.76)]">{copy.apply.blurb}</p>
                <Button asChild size="lg" className="mt-9 min-h-12 bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href={siteConfig.applyFormUrl} target="_blank" rel="noopener noreferrer">
                    {copy.apply.applyCta}<ExternalLink aria-hidden="true" />
                  </a>
                </Button>
              </div>
              <RecruitmentRail />
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:py-28">
          <div data-scroll-reveal className="prestige-blue-panel mx-auto max-w-6xl rounded-2xl">
            <div className="prestige-blue-surface rounded-2xl bg-primary px-8 py-14 md:px-14 md:py-16">
              <p className="text-eyebrow text-[hsl(var(--gold))]">{copy.apply.recruitmentProcess.eyebrow}</p>
              <h2 className="mt-4 max-w-4xl font-display text-4xl md:text-6xl">{copy.apply.recruitmentProcess.title}</h2>
              <p className="mt-5 max-w-2xl text-[hsl(var(--cream)/0.62)]">{copy.apply.recruitmentProcess.blurb}</p>
              <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {recruitmentTimeline.map((step, index) => (
                  <article key={step.label} className="group relative min-h-[19rem] overflow-hidden rounded-lg bg-[hsl(var(--charcoal))] shadow-[0_16px_38px_hsl(220_30%_4%/0.3)]">
                    <img
                      src={recruitmentImages[index].src}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                      style={{ objectPosition: recruitmentImages[index].position }}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(220_12%_7%/0.34),hsl(220_12%_7%/0.9)_72%,hsl(220_12%_7%/0.97))]" aria-hidden="true" />
                    <div className="relative flex min-h-[19rem] flex-col p-6">
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-display text-4xl text-[hsl(var(--gold))]">0{index + 1}</span>
                        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[hsl(var(--cream)/0.68)]">{step.date}</span>
                      </div>
                      <div className="mt-auto pt-14">
                        <h3 className="font-display text-2xl">{step.label}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-[hsl(var(--cream)/0.72)]">{step.description}</p>
                        {step.inviteOnly && <p className="mt-5 inline-flex items-center gap-1.5 text-xs text-[hsl(var(--gold))]"><Lock className="h-3 w-3" />Invite only</p>}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto max-w-6xl px-6" aria-hidden="true"><div className="border-t border-[hsl(var(--cream)/0.34)]" /></div>

        <section className="px-6 py-20 md:py-28">
          <div className="container mx-auto max-w-6xl">
            <div data-scroll-reveal className="text-center">
              <p className="text-eyebrow text-[hsl(var(--gold))]">{copy.apply.interviewProcessSection.eyebrow}</p>
              <h2 className="mt-4 font-display text-4xl md:text-6xl">{copy.apply.interviewProcessSection.title}</h2>
              <p className="mx-auto mt-5 max-w-2xl text-[hsl(var(--cream)/0.62)]">{copy.apply.interviewProcessSection.blurb}</p>
            </div>
            <div className="cream-panel-field mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {interviewProcess.map((step, index) => (
                <article key={step.label} data-scroll-reveal style={{ transitionDelay: `${index * 100}ms` }} className="cream-paper flex flex-col p-8 text-[hsl(var(--brown))] shadow-[0_20px_50px_hsl(220_30%_4%/0.35)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--gold))]">{step.date}</p>
                  <h3 className="mt-4 font-display text-3xl">{step.label}</h3>
                  <p className="mt-5 leading-relaxed text-[hsl(var(--brown)/0.66)]">{step.description}</p>
                  {/* Each block is omitted when empty, so a round whose details
                      are not public yet shows no bare headings. */}
                  {interviewPrep[index].focus && (
                    <div className="mt-7 border-t border-[hsl(var(--brown)/0.16)] pt-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[hsl(var(--gold))]">What we assess</p>
                      <p className="mt-3 text-sm leading-relaxed text-[hsl(var(--brown)/0.72)]">{interviewPrep[index].focus}</p>
                    </div>
                  )}
                  {!!interviewPrep[index].prep.length && (
                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[hsl(var(--gold))]">Preparation checklist</p>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[hsl(var(--brown)/0.72)]">
                      {interviewPrep[index].prep.map((item) => (
                        <li key={item} className="flex gap-3"><span className="text-[hsl(var(--gold))]">✓</span><span>{item}</span></li>
                      ))}
                    </ul>
                  </div>
                  )}
                  {!!interviewPrep[index].questions.length && (
                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[hsl(var(--gold))]">Example questions</p>
                    <ul className="mt-3 space-y-3 text-sm leading-relaxed text-[hsl(var(--brown)/0.72)]">
                      {interviewPrep[index].questions.map((question) => (
                        <li key={question} className="flex gap-3"><span className="text-[hsl(var(--gold))]">—</span><span>{question}</span></li>
                      ))}
                    </ul>
                  </div>
                  )}
                  {!!interviewPrep[index].resources.length && (
                  <div className="mt-auto pt-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[hsl(var(--gold))]">Preparation resources</p>
                    <div className="mt-3 flex flex-col items-start gap-4">
                      {interviewPrep[index].resources.map((resource) => (
                        <a key={resource.label} href={resource.href} target="_blank" rel="noopener noreferrer" className="group/resource block text-sm text-[hsl(var(--brown))] transition-colors hover:text-[hsl(var(--gold))]">
                          <span className="inline-flex items-center gap-2 font-semibold underline decoration-[hsl(var(--gold)/0.5)] underline-offset-4">
                            {resource.label}<ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                          <span className="mt-1 block font-normal leading-relaxed text-[hsl(var(--brown)/0.52)] group-hover/resource:text-[hsl(var(--brown)/0.72)]">{resource.note}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                  )}
                </article>
              ))}
            </div>
            <div data-scroll-reveal className="mx-auto mt-14 max-w-3xl text-center">
              <h3 className="font-display text-3xl">{copy.apply.readyToApply.title}</h3>
              <p className="mt-4 text-[hsl(var(--cream)/0.62)]">Applications open at the beginning of each semester.</p>
              <Button asChild size="lg" className="mt-7 min-h-12 bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={siteConfig.applyFormUrl} target="_blank" rel="noopener noreferrer">{copy.apply.readyToApply.cta}<ExternalLink aria-hidden="true" /></a>
              </Button>
            </div>
          </div>
        </section>

      </div>
    </PageLayout>
  );
};

export default Apply;
