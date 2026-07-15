import { useEffect, useState } from "react";
import PageLayout from "@/components/PageLayout";
import Logo from "@/components/Logo";
import { copy, partners } from "@/data/copy";

const scholarStats = [
  { value: "0.1%", label: "Annual acceptance rate" },
  { value: "~130K", label: "Global applicants each year" },
  { value: "40/56%", label: "Men / women" },
  { value: "28%", label: "First-generation scholars" },
];

const majors = [
  { label: "Undeclared", value: 19 },
  { label: "EECS", value: 15 },
  { label: "Engineering", value: 11 },
  { label: "Social Sciences", value: 10 },
  { label: "Computer Science", value: 9 },
  { label: "Business", value: 8 },
  { label: "Biological Sciences", value: 6 },
  { label: "Natural Resources", value: 5 },
  { label: "Mechanical Engineering", value: 5 },
  { label: "Architecture / Urban Studies", value: 3 },
  { label: "Chemistry", value: 3 },
  { label: "Data Science", value: 3 },
  { label: "Math / Physical Sciences", value: 3 },
];

const chartColors = [
  "#c3a765", "#40516a", "#596a7e", "#718093", "#2f4059",
  "#8b7952", "#68788a", "#3a4c65", "#7f8c9a", "#a48c58",
  "#52647a", "#8e9aa5", "#d1c7ad",
];

const polarPoint = (cx: number, cy: number, radius: number, angle: number) => {
  const radians = ((angle - 90) * Math.PI) / 180;
  return { x: cx + radius * Math.cos(radians), y: cy + radius * Math.sin(radians) };
};

const wedgePath = (start: number, end: number, radius: number) => {
  const startPoint = polarPoint(200, 200, radius, end);
  const endPoint = polarPoint(200, 200, radius, start);
  const largeArc = end - start > 180 ? 1 : 0;
  return `M 200 200 L ${startPoint.x} ${startPoint.y} A ${radius} ${radius} 0 ${largeArc} 0 ${endPoint.x} ${endPoint.y} Z`;
};

const memberCards = [
  "Executive Director", "Financial Director", "Project Manager",
  "Project Manager", "Senior Consultant", "Senior Consultant",
  "Consultant", "Consultant", "Consultant",
];

const CreamRule = () => (
  <div className="container mx-auto max-w-6xl px-6" aria-hidden="true">
    <div className="border-t border-[hsl(var(--cream)/0.38)]" />
  </div>
);

const About = () => {
  const [activeMajor, setActiveMajor] = useState<number | null>(null);

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

  const majorTotal = majors.reduce((sum, major) => sum + major.value, 0);
  let currentAngle = 0;
  const wedges = majors.map((major, index) => {
    const start = currentAngle;
    const end = start + (major.value / majorTotal) * 360;
    currentAngle = end;
    return { ...major, start, end, radius: 112 + major.value * 2.8, color: chartColors[index] };
  });

  return (
    <PageLayout>
      <div className="home-canvas text-[hsl(var(--cream))]">
        <section className="about-image-hero relative flex min-h-[82svh] items-center overflow-hidden px-6 py-20">
          <div className="container relative z-10 mx-auto">
            <div className="max-w-3xl">
              <p className="text-eyebrow text-[hsl(var(--gold))]">{copy.about.eyebrow}</p>
              <h1 className="mt-5 font-display text-5xl leading-[1.05] md:text-7xl">{copy.about.title}</h1>
              <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-[hsl(var(--cream)/0.76)]">
                {copy.about.paragraphs.slice(0, 2).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          </div>
        </section>

        <CreamRule />
        <section className="px-6 py-20 md:py-28">
          <div data-scroll-reveal className="prestige-blue-panel mx-auto max-w-6xl rounded-2xl">
            <div className="prestige-blue-surface rounded-2xl bg-primary px-8 py-14 md:px-14 md:py-16">
              <p className="text-eyebrow text-[hsl(var(--gold))]">By the numbers</p>
              <h2 className="mt-4 max-w-2xl font-display text-3xl md:text-4xl">A rare scholarship. A deliberately cross-functional team.</h2>
              <p className="mt-5 max-w-3xl text-[hsl(var(--cream)/0.62)]">Members advance through behavioral, technical, and case evaluations before joining teams that pair engineering and data talent with business and policy perspectives.</p>
              <div className="mt-12 grid grid-cols-2 gap-x-12 gap-y-14 md:grid-cols-4 md:gap-x-10 lg:gap-x-16">
                {scholarStats.map((stat) => (
                  <div key={stat.value} className="text-center">
                    <p className="whitespace-nowrap font-display text-5xl leading-none text-[hsl(var(--gold))] sm:text-6xl md:text-5xl lg:text-6xl">{stat.value}</p>
                    <p className="mx-auto mt-4 max-w-40 text-sm leading-snug text-primary-foreground/62">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CreamRule />
        <section className="px-6 py-20 md:py-28">
          <div className="container mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
            <div data-scroll-reveal>
              <p className="text-eyebrow text-[hsl(var(--gold))]">Academic breadth</p>
              <h2 className="mt-4 font-display text-4xl md:text-6xl">Our scholars study across Berkeley.</h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-[hsl(var(--cream)/0.68)]">No single discipline defines the Regents' and Chancellor's community. That range is what makes our project teams work.</p>
              <div className="mt-9 grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
                {majors.map((major, index) => (
                  <div key={major.label} className={`major-label flex items-center justify-between gap-3 ${activeMajor === index ? "is-active" : ""}`}>
                    <span className="major-label-name flex items-center gap-2"><i className="h-2 w-2 rounded-full" style={{ backgroundColor: chartColors[index] }} />{major.label}</span>
                    <span className="text-[hsl(var(--gold))]">{major.value}%</span>
                  </div>
                ))}
              </div>
            </div>
            <div data-scroll-reveal className="major-chart mx-auto w-full max-w-[34rem]" style={{ transitionDelay: "120ms" }}>
              <svg viewBox="0 0 400 400" role="img" aria-label="Student major distribution chart" className="h-auto w-full overflow-visible">
                {wedges.map((wedge, index) => (
                  <path
                    key={wedge.label}
                    d={wedgePath(wedge.start, wedge.end, wedge.radius)}
                    fill={wedge.color}
                    stroke="hsl(220 9% 10%)"
                    strokeWidth="3"
                    className="major-slice"
                    style={{ transitionDelay: `${index * 70}ms` }}
                    tabIndex={0}
                    onMouseEnter={() => setActiveMajor(index)}
                    onMouseLeave={() => setActiveMajor(null)}
                    onFocus={() => setActiveMajor(index)}
                    onBlur={() => setActiveMajor(null)}
                    aria-label={`${wedge.label}: ${wedge.value}%`}
                  />
                ))}
              </svg>
            </div>
          </div>
        </section>

        <CreamRule />
        <section className="px-6 py-20 md:py-28">
          <div className="container mx-auto max-w-6xl">
            <div data-scroll-reveal className="text-center">
              <p className="text-eyebrow text-[hsl(var(--gold))]">Our members</p>
              <h2 className="mt-4 font-display text-4xl md:text-6xl">The people behind the work.</h2>
            </div>
            <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {memberCards.map((role, index) => (
                <article key={`${role}-${index}`} data-scroll-reveal style={{ transitionDelay: `${(index % 3) * 90}ms` }} className="overflow-hidden rounded-xl bg-primary shadow-[0_18px_45px_hsl(220_12%_3%/0.4)]">
                  <div className="grid aspect-[4/3] place-items-center bg-primary-foreground/10 text-primary-foreground/20">
                    <Logo size="lg" className="h-24" />
                  </div>
                  <div className="p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--gold))]">{role}</p>
                    <h3 className="mt-3 font-display text-2xl">Member Name</h3>
                    <p className="mt-3 text-sm leading-relaxed text-primary-foreground/58">Add a portrait and a short introduction for this member.</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 pt-16 md:pb-32 md:pt-20">
          <div data-scroll-reveal className="cream-paper container mx-auto max-w-6xl rounded-2xl px-8 py-14 text-[hsl(var(--brown))] shadow-[0_24px_65px_hsl(220_12%_3%/0.42)] md:px-14 md:py-16">
            <div className="text-center">
              <p className="text-eyebrow text-[hsl(var(--gold))]">Member &amp; alumni placements</p>
              <h2 className="mx-auto mt-5 max-w-4xl font-display text-4xl leading-tight md:text-6xl">Where the RCG community goes next.</h2>
            </div>
              <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {partners.map((partner) => (
                  <div key={partner.id} className="grid min-h-24 place-items-center rounded-md bg-[hsl(var(--brown)/0.055)] px-5 py-4">
                    {partner.logo ? (
                      <img src={partner.logo} alt={partner.name} className="max-h-11 max-w-full object-contain" />
                    ) : (
                      <span className="text-center text-sm font-medium">{partner.name}</span>
                    )}
                  </div>
                ))}
                {Array.from({ length: 6 }, (_, index) => (
                  <div key={`future-placement-${index}`} className="grid min-h-24 place-items-center rounded-md bg-[hsl(var(--brown)/0.035)] px-5 py-4 text-center text-xs uppercase tracking-[0.14em] text-[hsl(var(--brown)/0.28)]">
                    Future placement
                  </div>
                ))}
              </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default About;
