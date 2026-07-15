import { useEffect } from "react";
import { CalendarDays, FileText, Mail, Users } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/config/site";

const engagementSteps = [
  { number: "01", title: "Introductory call", timing: "Week 0", body: "We learn what decision is in front of your team, what context already exists, and what a useful outcome would look like." },
  { number: "02", title: "Scope & staffing", timing: "Week 1", body: "RCG defines the question and deliverables, then staffs four to six scholars across technical disciplines and business, policy, or strategy." },
  { number: "03", title: "Research & build", timing: "Weeks 2–6", body: "The team conducts research, analysis, interviews, or technical work while staying in regular contact with your organization." },
  { number: "04", title: "Midpoint review", timing: "Mid-semester", body: "We test early findings with your team, resolve open questions, and adjust the work before final recommendations are developed." },
  { number: "05", title: "Final delivery", timing: "Semester end", body: "Your team receives an executive presentation, final deck, and the supporting work needed to carry the recommendation forward." },
];

const teamPrinciples = [
  { icon: Users, title: "Cross-functional by design", body: "Teams pair engineering, EECS, computer science, data science, mathematics, or statistics with perspectives from Haas, economics, political science, policy, and legal studies." },
  { icon: CalendarDays, title: "A consistent working rhythm", body: "Project managers coordinate the team and maintain a clear partner cadence from kickoff through final delivery." },
  { icon: FileText, title: "Work your team can use", body: "Deliverables are built for handoff—not just presentation—with evidence, models, and next steps included where relevant." },
];

const Contact = () => {
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
        <section className="client-image-hero relative flex min-h-[78svh] items-center overflow-hidden px-6 py-20">
          <div className="container relative z-10 mx-auto">
            <div className="max-w-3xl">
              <p className="text-eyebrow text-[hsl(var(--gold))]">For Clients</p>
              <h1 className="mt-5 font-display text-5xl leading-[1.04] md:text-7xl">Bring us the question your team needs answered.</h1>
              <p className="mt-7 max-w-2xl text-xl leading-relaxed text-[hsl(var(--cream)/0.74)]">RCG partners with organizations on semester-long projects spanning software, analytics, operations, business development, and product design.</p>
              <a href="#inquiry" className="mt-9 inline-flex min-h-12 items-center rounded-md bg-primary px-8 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">Start a conversation</a>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:py-28">
          <div data-scroll-reveal className="prestige-blue-panel mx-auto max-w-6xl rounded-2xl">
            <div className="prestige-blue-surface rounded-2xl bg-primary px-8 py-14 md:px-14 md:py-16">
              <p className="text-eyebrow text-[hsl(var(--gold))]">Engagement timeline</p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl md:text-6xl">From first conversation to final handoff.</h2>
              <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
                {[
                  ["1 semester", "Typical engagement"],
                  ["4–6", "Scholars per team"],
                  ["Weekly", "Partner cadence"],
                  ["3 milestones", "Kickoff, midpoint, final"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <p className="font-display text-3xl text-[hsl(var(--gold))] md:text-4xl">{value}</p>
                    <p className="mt-2 text-sm text-[hsl(var(--cream)/0.5)]">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
                {engagementSteps.map((step) => (
                  <article key={step.number} className="rounded-lg bg-[hsl(var(--cream)/0.055)] p-6">
                    <p className="font-display text-4xl text-[hsl(var(--gold))]">{step.number}</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.13em] text-[hsl(var(--cream)/0.38)]">{step.timing}</p>
                    <h3 className="mt-5 font-display text-2xl leading-tight">{step.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-[hsl(var(--cream)/0.58)]">{step.body}</p>
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
              <p className="text-eyebrow text-[hsl(var(--gold))]">How teams function</p>
              <h2 className="mt-4 font-display text-4xl md:text-6xl">Small teams, clear ownership.</h2>
            </div>
            <div className="mt-14 grid gap-7 md:grid-cols-3">
              {teamPrinciples.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <article key={principle.title} data-scroll-reveal style={{ transitionDelay: `${index * 100}ms` }} className="rounded-xl bg-primary p-8 shadow-[0_20px_50px_hsl(220_30%_4%/0.35)]">
                    <Icon className="h-7 w-7 text-[hsl(var(--gold))]" strokeWidth={1.5} aria-hidden="true" />
                    <h3 className="mt-6 font-display text-3xl">{principle.title}</h3>
                    <p className="mt-5 leading-relaxed text-[hsl(var(--cream)/0.6)]">{principle.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <div className="container mx-auto max-w-6xl px-6" aria-hidden="true"><div className="border-t border-[hsl(var(--cream)/0.34)]" /></div>

        <section id="inquiry" className="scroll-mt-28 px-6 pb-28 pt-20 md:pb-36 md:pt-28">
          <div className="container mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[.72fr_1.28fr]">
            <div data-scroll-reveal>
              <p className="text-eyebrow text-[hsl(var(--gold))]">Get in touch</p>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">Tell us what is on your team’s desk.</h2>
              <p className="mt-6 text-lg leading-relaxed text-[hsl(var(--cream)/0.64)]">A short description is enough to begin. We will follow up to understand the context, timing, and whether the work is a strong fit for an RCG project.</p>
              <div className="mt-10 rounded-xl bg-primary p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[hsl(var(--gold))]">Prefer email?</p>
                <a href={`mailto:${siteConfig.contactEmail}`} className="mt-4 inline-flex items-center gap-3 text-lg hover:text-[hsl(var(--gold))]"><Mail className="h-5 w-5" />{siteConfig.contactEmail}</a>
                <p className="mt-5 text-sm leading-relaxed text-[hsl(var(--cream)/0.5)]">We typically respond within a few days to arrange an introductory call.</p>
              </div>
            </div>

            <div data-scroll-reveal className="cream-paper rounded-2xl p-8 text-[hsl(var(--brown))] shadow-[0_24px_65px_hsl(220_30%_4%/0.38)] md:p-12" style={{ transitionDelay: "120ms" }}>
              <h3 className="font-display text-3xl">Project inquiry</h3>
              <p className="mt-3 text-sm text-[hsl(var(--brown)/0.58)]">Share the essentials and your mail app will prepare a message to RCG.</p>
              <div className="mt-8"><ContactForm /></div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Contact;
