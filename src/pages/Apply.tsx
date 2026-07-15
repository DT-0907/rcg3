import { useEffect } from "react";
import { Calendar, ExternalLink, Lock } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { copy, interviewProcess, members, recruitmentTimeline } from "@/data/copy";
import { siteConfig } from "@/config/site";

const coffeeMembers = [
  ...members,
  { id: "placeholder-7", name: "First Last", role: "Project Manager", year: "Junior", major: "Data Science", bio: "Add a short member introduction.", schedulingUrl: "https://calendly.com/your-link" },
  { id: "placeholder-8", name: "First Last", role: "Consultant", year: "Sophomore", major: "Political Science", bio: "Add a short member introduction.", schedulingUrl: "https://calendly.com/your-link" },
  { id: "placeholder-9", name: "First Last", role: "Consultant", year: "Junior", major: "Mechanical Engineering", bio: "Add a short member introduction.", schedulingUrl: "https://calendly.com/your-link" },
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
                  <article key={step.label} className="rounded-lg bg-[hsl(var(--cream)/0.055)] p-6">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-display text-4xl text-[hsl(var(--gold))]">0{index + 1}</span>
                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[hsl(var(--cream)/0.4)]">{step.date}</span>
                    </div>
                    <h3 className="mt-5 font-display text-2xl">{step.label}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[hsl(var(--cream)/0.6)]">{step.description}</p>
                    {step.inviteOnly && <p className="mt-5 inline-flex items-center gap-1.5 text-xs text-[hsl(var(--gold))]"><Lock className="h-3 w-3" />Invite only</p>}
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
            <div className="mt-12 grid gap-7 md:grid-cols-3">
              {interviewProcess.map((step, index) => (
                <article key={step.label} data-scroll-reveal style={{ transitionDelay: `${index * 100}ms` }} className="rounded-xl bg-primary p-8 shadow-[0_20px_50px_hsl(220_30%_4%/0.35)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--gold))]">{step.date}</p>
                  <h3 className="mt-4 font-display text-3xl">{step.label}</h3>
                  <p className="mt-5 leading-relaxed text-[hsl(var(--cream)/0.62)]">{step.description}</p>
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

        <div className="container mx-auto max-w-6xl px-6" aria-hidden="true"><div className="border-t border-[hsl(var(--cream)/0.34)]" /></div>

        <section className="px-6 pb-28 pt-20 md:pb-36 md:pt-28">
          <div className="container mx-auto max-w-6xl">
            <div data-scroll-reveal className="text-center">
              <p className="text-eyebrow text-[hsl(var(--gold))]">Coffee chats</p>
              <h2 className="mt-4 font-display text-4xl md:text-6xl">Talk with someone in RCG.</h2>
              <p className="mx-auto mt-5 max-w-2xl text-[hsl(var(--cream)/0.62)]">Choose a member and reserve a time directly through their Calendly page.</p>
            </div>
            <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {coffeeMembers.map((member, index) => (
                <article key={member.id} data-scroll-reveal style={{ transitionDelay: `${(index % 3) * 90}ms` }} className="flex overflow-hidden rounded-xl bg-primary shadow-[0_18px_45px_hsl(220_30%_4%/0.35)]">
                  <div className="grid w-28 shrink-0 place-items-center bg-[hsl(var(--cream)/0.06)] text-[hsl(var(--cream)/0.18)]">
                    <Logo size="lg" className="h-16" />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[hsl(var(--gold))]">{member.role}</p>
                    <h3 className="mt-2 font-display text-2xl">{member.name}</h3>
                    <p className="mt-2 text-sm text-[hsl(var(--cream)/0.5)]">{[member.year, member.major].filter(Boolean).join(" · ")}</p>
                    <a href={member.schedulingUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--cream))] hover:text-[hsl(var(--gold))]">
                      <Calendar className="h-4 w-4" />Schedule on Calendly
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Apply;
