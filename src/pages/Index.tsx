import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Quote } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PartnerMarquee from "@/components/PartnerMarquee";
import { Button } from "@/components/ui/button";
import { copy } from "@/data/copy";

const pillarImages = [
  { src: "/pillar-stability.jpg", alt: "Historic South Hall at UC Berkeley" },
  { src: "/pillar-vision.jpg", alt: "The new Grimes Engineering Center at UC Berkeley" },
  { src: "/pillar-direction.png", alt: "Sather Gate at UC Berkeley" },
];

const Index = () => {
  const [actionsVisible, setActionsVisible] = useState(false);

  useEffect(() => {
    const update = () => setActionsVisible(window.scrollY > 64);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  /* Honour the OS motion setting: `smooth` here would override it. */
  const scrollToContent = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: window.innerHeight * 0.86,
      behavior: reduced ? "auto" : "smooth",
    });
  };

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
      <section className="hero-team-image relative grid min-h-[92svh] place-items-center overflow-hidden px-6 text-center md:min-h-[100svh]">
        <div className="relative z-10 text-[hsl(var(--cream))]">
          {/*
            .hero-typed-text is white-space: nowrap for its reveal wipe, so the
            wordmark can never wrap. It scales with the viewport instead, sized
            so the line always fits: ~10em wide at this tracking, against a
            viewport that is 12.5em at 8vw.
          */}
          <h1 className="hero-welcome-entry font-display text-[clamp(2rem,8.4vw,6.5rem)] font-medium uppercase leading-[1.02] tracking-[0.1em] drop-shadow-[0_2px_24px_hsl(222_52%_6%/0.55)]">
            <span className="hero-typed-text">{copy.homeHero.title}</span>
          </h1>
          <p className="hero-tagline-entry mx-auto mt-6 max-w-3xl text-[clamp(0.8rem,2.1vw,1rem)] font-medium uppercase leading-relaxed tracking-[0.18em] text-[hsl(var(--cream)/0.95)] drop-shadow-[0_1px_12px_hsl(222_52%_6%/0.7)] sm:tracking-[0.2em] md:mt-8">
            {copy.homeHero.tagline}
          </p>
        </div>

        <button
          type="button"
          onClick={scrollToContent}
          aria-label="Scroll to page content"
          className="hero-chevron-entry absolute bottom-8 left-1/2 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full text-[hsl(var(--cream))] transition-colors hover:text-[hsl(var(--gold))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--gold))] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent md:bottom-10"
        >
          <ChevronDown className="hero-chevron h-7 w-7" aria-hidden="true" />
        </button>
      </section>

      <section className="relative z-20 -mt-24 px-6 pb-40 md:-mt-28 md:pb-44">
        {/*
          Hidden until the visitor scrolls a little. `invisible` rather than
          opacity alone so the links leave the tab order and the a11y tree
          while concealed, instead of being invisible-but-focusable.
        */}
        <div
          className={`text-center text-[hsl(var(--cream))] transition-all duration-700 ease-out ${
            actionsVisible ? "visible translate-y-0 opacity-100" : "invisible translate-y-6 opacity-0"
          }`}
        >
          <div className="flex flex-col justify-center gap-10 sm:flex-row sm:gap-20 lg:gap-28">
            <Button asChild size="lg" className="min-h-12 min-w-64 rounded-none font-display text-lg uppercase tracking-[0.18em] border-x-0 border-y border-[hsl(var(--cream)/0.5)] bg-transparent text-[hsl(var(--cream)/0.8)] transition-colors hover:border-[hsl(var(--cream)/0.9)] hover:bg-[hsl(var(--cream)/0.1)] hover:text-[hsl(var(--cream))] md:min-w-72">
              <Link to="/apply">Students</Link>
            </Button>
            <Button asChild size="lg" className="min-h-12 min-w-64 rounded-none font-display text-lg uppercase tracking-[0.18em] border-x-0 border-y border-[hsl(var(--cream)/0.5)] bg-transparent text-[hsl(var(--cream)/0.8)] transition-colors hover:border-[hsl(var(--cream)/0.9)] hover:bg-[hsl(var(--cream)/0.1)] hover:text-[hsl(var(--cream))] md:min-w-72">
              <Link to="/contact">Clients</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 pt-4 text-[hsl(var(--cream))] md:pb-20 md:pt-6">
        <div className="container mx-auto">
          <div className="relative border-y border-[hsl(var(--cream)/0.45)] py-16 md:min-h-[30rem] md:py-24">
            <div data-scroll-reveal className="max-w-xl md:w-[48%]">
              <p className="text-eyebrow text-[hsl(var(--gold))]">Our Mission</p>
              <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
                Turn Berkeley expertise into useful work.
              </h2>
              <p className="mt-7 text-lg leading-relaxed text-[hsl(var(--cream)/0.72)]">
                We build student teams around questions companies, nonprofits, and community organizations are actually trying to answer. Every project needs business judgment and real technical work, so we staff for both.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-[hsl(var(--cream)/0.72)]">
                Our members get to do the work rather than read about it. Partners get a recommendation they can act on, or something built they can use.
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

      <section className="px-6 py-16 text-[hsl(var(--cream))] md:py-24">
        <div className="container mx-auto">
          <div data-scroll-reveal className="text-center">
            <p className="text-eyebrow text-[hsl(var(--gold))]">What guides us</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl">Our Pillars</h2>
          </div>

          <div className="relative mt-14">
            <div className="absolute inset-x-0 top-10 border-t border-[hsl(var(--cream)/0.45)]" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-10 border-t border-[hsl(var(--cream)/0.45)]" aria-hidden="true" />
            <div className="relative mx-auto grid max-w-5xl justify-items-center gap-8 md:grid-cols-3">
              {copy.whatWeDo.pillars.map((pillar, index) => (
              <article key={pillar.title} data-scroll-reveal style={{ transitionDelay: `${index * 120}ms` }} className="cream-paper flex min-h-[31rem] w-full flex-col overflow-hidden text-[hsl(var(--brown))] shadow-[0_22px_55px_hsl(220_12%_3%/0.45)]">
                <img
                  src={pillarImages[index].src}
                  alt={pillarImages[index].alt}
                  className="h-60 w-full object-cover"
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

      <section className="px-6 py-16 md:py-24">
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
            <div className="relative min-h-[28rem] overflow-hidden md:min-h-full">
              <img src="/mark-lin.jpeg" alt="Mark Lin, Fall 2026 President" className="absolute inset-0 h-full w-full object-cover object-center" />
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
