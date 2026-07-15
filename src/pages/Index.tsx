import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PartnerMarquee from "@/components/PartnerMarquee";
import { Button } from "@/components/ui/button";
import { copy } from "@/data/copy";
import Logo from "@/components/Logo";

const Index = () => {
  const [heroLogoVisible, setHeroLogoVisible] = useState(true);

  useEffect(() => {
    const updateLogo = () => setHeroLogoVisible(window.scrollY <= 48);
    updateLogo();
    window.addEventListener("scroll", updateLogo, { passive: true });
    return () => window.removeEventListener("scroll", updateLogo);
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <PageLayout>
      <div className="home-canvas">
      <section className="hero-brown-image relative grid min-h-[105svh] place-items-center overflow-hidden px-6 text-center">
        <div className="relative z-10 -translate-y-20 text-[hsl(var(--cream))] md:-translate-y-28">
          <div className="hero-logo-entry">
            <svg className="absolute h-0 w-0" aria-hidden="true">
              <filter id="hero-logo-bold" x="-12%" y="-12%" width="124%" height="124%">
                <feMorphology in="SourceGraphic" operator="dilate" radius="1.6" />
              </filter>
            </svg>
            <div className={`transition-all duration-700 ${heroLogoVisible ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"}`}>
              <div className="hero-logo-medallion mx-auto">
                <Logo size="lg" className="hero-bold-logo h-24 text-[hsl(var(--cream))] md:h-32" />
              </div>
            </div>
          </div>
          <h1 className="mx-auto mt-3 flex max-w-5xl flex-wrap justify-center gap-x-[0.2em] font-display text-4xl leading-tight sm:text-5xl md:text-7xl lg:text-[5.75rem]">
            {["Stability.", "Vision.", "Direction."].map((word, index) => (
              <span
                key={word}
                className="hero-written-word inline-block"
                style={{ animationDelay: `${0.45 + index * 0.72}s` }}
              >
                {word}
              </span>
            ))}
          </h1>
          <p className="hero-welcome-entry mt-3 text-sm font-semibold uppercase tracking-[0.34em] sm:text-base">
            Welcome to RCG
          </p>
        </div>
      </section>

      <section className="relative z-20 -mt-48 px-6 pb-40 md:-mt-56 md:pb-44">
        <div data-scroll-reveal className="flex flex-col justify-center gap-8 sm:flex-row sm:gap-5">
          <Button asChild size="lg" className="min-h-12 min-w-44 bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/apply">For Students</Link>
          </Button>
          <Button asChild size="lg" className="min-h-12 min-w-44 bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/contact">For Clients</Link>
          </Button>
        </div>
      </section>

      <section className="px-6 pb-16 pt-4 text-[hsl(var(--cream))] md:pb-20 md:pt-6">
        <div className="container mx-auto">
          <div className="relative border-y border-[hsl(var(--cream)/0.45)] py-16 md:min-h-[30rem] md:py-24">
            <div data-scroll-reveal className="max-w-xl md:w-[48%]">
              <p className="text-eyebrow text-[hsl(var(--gold))]">Our Mission</p>
              <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
                Put exceptional Berkeley scholars to work on questions that matter.
              </h2>
              <p className="mt-7 text-lg leading-relaxed text-[hsl(var(--cream)/0.72)]">
                RCG builds cross-functional student teams around real corporate projects, giving partners thoughtful work and scholars a place to turn academic strength into practical experience.
              </p>
              <Button asChild size="lg" className="mt-9 min-h-12 bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/about">Learn More <ArrowRight aria-hidden="true" /></Link>
              </Button>
            </div>

            <div data-scroll-reveal className="mt-12 overflow-hidden rounded-md shadow-[0_22px_60px_hsl(220_12%_3%/0.58)] md:absolute md:-bottom-12 md:-top-12 md:right-12 md:mt-0 md:w-[43%]" style={{ transitionDelay: "140ms" }}>
              <img
                src="/berkeley-placeholder.jpg"
                alt="The Campanile at UC Berkeley"
                className="h-full min-h-80 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <PartnerMarquee />

      <section className="px-6 py-18 text-[hsl(var(--cream))] md:py-24">
        <div className="container mx-auto">
          <div data-scroll-reveal className="text-center">
            <p className="text-eyebrow text-[hsl(var(--gold))]">What guides us</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl">Our Pillars</h2>
          </div>

          <div className="relative mt-14">
            <div className="absolute inset-x-0 top-10 border-t border-[hsl(var(--cream)/0.45)]" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-10 border-t border-[hsl(var(--cream)/0.45)]" aria-hidden="true" />
            <div className="relative mx-auto grid max-w-4xl justify-items-center gap-10 md:grid-cols-3">
              {copy.whatWeDo.pillars.map((pillar, index) => (
              <article key={pillar.title} data-scroll-reveal style={{ transitionDelay: `${index * 120}ms` }} className="cream-paper flex min-h-[44rem] w-full max-w-[15rem] flex-col overflow-hidden rounded-sm text-[hsl(var(--brown))] shadow-[0_22px_55px_hsl(220_12%_3%/0.45)]">
                <img
                  src="/berkeley-placeholder.jpg"
                  alt="UC Berkeley campus placeholder"
                  className="h-[40%] min-h-64 w-full object-cover"
                  style={{ objectPosition: `${35 + index * 22}% center` }}
                />
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-xs font-semibold tracking-[0.22em] text-[hsl(var(--gold))]">0{index + 1}</p>
                  <h3 className="mt-4 font-display text-3xl leading-tight">{pillar.title}</h3>
                  <p className="mt-5 text-sm leading-relaxed text-[hsl(var(--brown)/0.7)]">{pillar.body}</p>
                </div>
              </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-18 md:py-24">
        <div className="container mx-auto">
          <div data-scroll-reveal className="prestige-blue-panel mx-auto max-w-6xl rounded-2xl shadow-[0_28px_70px_hsl(220_55%_14%/0.28)]">
          <div className="prestige-blue-surface grid overflow-hidden rounded-2xl bg-primary text-primary-foreground md:grid-cols-[1.25fr_.75fr]">
            <div className="flex flex-col justify-center p-9 md:p-14 lg:p-20">
              <Quote className="h-12 w-12 text-primary-foreground/30" strokeWidth={1.2} aria-hidden="true" />
              <blockquote className="mt-6 font-display text-2xl italic leading-relaxed md:text-4xl">
                “RCG brings together people who think differently but share the same standard for their work. We want every project to leave our partners with a clearer path forward—and our scholars more capable than when they began.”
              </blockquote>
              <div className="mt-10">
                <p className="font-display text-2xl">Mark Lin</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--gold))]">Fall 2026 President</p>
              </div>
            </div>
            <div className="relative min-h-[28rem] bg-primary-foreground/10 md:min-h-full">
              <div className="absolute inset-0 grid place-items-center text-primary-foreground/20">
                <div className="text-center">
                  <div className="mx-auto h-32 w-32 rounded-full bg-current/20" />
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em]">President portrait</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      </div>
    </PageLayout>
  );
};

export default Index;
