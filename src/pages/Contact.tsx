import { useEffect } from "react";
import { BarChart3, Code2, Compass, Mail, PanelsTopLeft, Search, Workflow } from "lucide-react";
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

const capabilities = [
  { icon: Search, type: "Business", title: "Market Research", body: "We size opportunities, study competitors, interview users, and turn market evidence into a clear view of where a partner can compete." },
  { icon: BarChart3, type: "Technical", title: "Data Analytics", body: "We clean and analyze data, define useful metrics, and build models or visualizations that make decisions easier to defend." },
  { icon: Code2, type: "Technical", title: "Software Engineering", body: "We scope and build focused tools, prototypes, automations, and data-driven applications around a concrete organizational need." },
  { icon: Workflow, type: "Business", title: "Operations Strategy", body: "We map workflows, identify bottlenecks, and recommend practical changes to processes, ownership, and implementation." },
  { icon: Compass, type: "Business", title: "Growth Strategy", body: "We connect research to positioning, partnerships, go-to-market choices, and a realistic plan for reaching the right audience." },
  { icon: PanelsTopLeft, type: "Technical", title: "Product & UX", body: "We translate user needs into product requirements, journeys, interfaces, and testable prototypes that teams can carry forward." },
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
              <p className="mt-7 max-w-2xl text-xl leading-relaxed text-[hsl(var(--cream)/0.74)]">Four to six Regents' and Chancellor's Scholars work across software, analytics, operations, business development, and product design, with defined reviews from kickoff through final delivery.</p>
              <a href="#inquiry" className="mt-9 inline-flex min-h-12 items-center rounded-md bg-primary px-8 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">Start a conversation</a>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-24">
          <div data-scroll-reveal className="mb-12 px-3 text-center">
            <p className="text-eyebrow text-[hsl(var(--gold))]">Business &amp; technical capabilities</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl">What We Deliver</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[hsl(var(--cream)/0.64)]">Each engagement combines the commercial question with the research, data, design, or engineering needed to answer it.</p>
          </div>
          <div className="cream-panel-field container mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <article key={capability.title} data-scroll-reveal style={{ transitionDelay: `${(index % 3) * 80}ms` }} className="cream-paper group relative flex min-h-[24rem] overflow-hidden p-8 text-[hsl(var(--brown))] shadow-[0_20px_55px_hsl(220_30%_4%/0.3)] md:p-9">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-[hsl(var(--gold)/0.22)] transition-transform duration-700 group-hover:scale-110" aria-hidden="true" />
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full border border-[hsl(var(--gold)/0.35)]" aria-hidden="true" />
                  <div className="relative flex w-full flex-col">
                    <div className="flex items-center justify-between gap-5">
                      <span className="grid h-12 w-12 place-items-center rounded-full bg-[hsl(var(--gold)/0.13)] text-[hsl(var(--gold))]"><Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" /></span>
                      <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brown)/0.42)]">{capability.type}</span>
                    </div>
                    <div className="mt-auto pt-10">
                      <h3 className="font-display text-3xl italic leading-tight lg:text-[2.15rem]">{capability.title}</h3>
                      <p className="mt-4 max-w-xl text-sm leading-relaxed text-[hsl(var(--brown)/0.68)] xl:text-base">{capability.body}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="px-6 py-20 md:py-28">
          <div data-scroll-reveal className="prestige-blue-panel mx-auto max-w-6xl rounded-2xl">
            <div className="prestige-blue-surface rounded-2xl bg-primary px-8 py-14 md:px-14 md:py-16">
              <p className="text-eyebrow text-[hsl(var(--gold))]">Engagement timeline</p>
              <h2 className="mt-4 max-w-4xl font-display text-4xl md:text-6xl">From first conversation to final handoff.</h2>
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

        <section id="inquiry" className="scroll-mt-28 px-6 pb-28 pt-20 md:pb-36 md:pt-28">
          <div className="cream-panel-field container mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[.72fr_1.28fr]">
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

            <div data-scroll-reveal className="cream-paper p-8 text-[hsl(var(--brown))] shadow-[0_24px_65px_hsl(220_30%_4%/0.38)] md:p-12" style={{ transitionDelay: "120ms" }}>
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
