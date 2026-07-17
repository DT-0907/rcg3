import { useEffect } from "react";
import { Calendar } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Logo from "@/components/Logo";
import { members } from "@/data/copy";

const coffeeMembers = [
  ...members,
  { id: "placeholder-7", name: "First Last", role: "Project Manager", year: "Junior", major: "Data Science", schedulingUrl: "https://calendly.com/your-link" },
  { id: "placeholder-8", name: "First Last", role: "Consultant", year: "Sophomore", major: "Political Science", schedulingUrl: "https://calendly.com/your-link" },
  { id: "placeholder-9", name: "First Last", role: "Consultant", year: "Junior", major: "Mechanical Engineering", schedulingUrl: "https://calendly.com/your-link" },
];

const Team = () => {
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
      <div className="home-canvas min-h-[80svh] px-6 pb-28 pt-20 text-[hsl(var(--cream))] md:pb-36 md:pt-28">
        <div className="container mx-auto max-w-6xl">
          <div data-scroll-reveal className="text-center">
            <p className="text-eyebrow text-[hsl(var(--gold))]">Team</p>
            <h1 className="mt-4 font-display text-5xl md:text-7xl">Talk with someone in RCG.</h1>
            <p className="mx-auto mt-5 max-w-2xl text-[hsl(var(--cream)/0.62)]">Ask about recruitment, project work, or the Regents' scholar community, then reserve a time directly through Calendly.</p>
          </div>
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {coffeeMembers.map((member, index) => (
              <article key={member.id} data-scroll-reveal style={{ transitionDelay: `${(index % 3) * 90}ms` }} className="flex overflow-hidden rounded-xl bg-primary shadow-[0_18px_45px_hsl(220_30%_4%/0.35)]">
                <div className="grid w-28 shrink-0 place-items-center bg-[hsl(var(--cream)/0.06)] text-[hsl(var(--cream)/0.18)]">
                  <Logo size="lg" className="h-16" />
                </div>
                <div className="flex min-w-0 flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[hsl(var(--gold))]">{member.role}</p>
                  <h2 className="mt-2 font-display text-2xl">{member.name}</h2>
                  <p className="mt-2 text-sm text-[hsl(var(--cream)/0.5)]">{[member.year, member.major].filter(Boolean).join(" · ")}</p>
                  <a href={member.schedulingUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--cream))] hover:text-[hsl(var(--gold))]">
                    <Calendar className="h-4 w-4" />Schedule on Calendly
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Team;
