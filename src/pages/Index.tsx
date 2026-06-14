import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PartnerStrip from "@/components/PartnerStrip";
import { copy } from "@/data/copy";
import { siteConfig } from "@/config/site";

const Index = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative">
        <div className="container mx-auto px-6 pt-20 pb-24 md:pt-32 md:pb-32">
          <div className="max-w-4xl">
            <p className="text-eyebrow text-muted-foreground reveal">
              {copy.hero.eyebrow}
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] text-foreground mt-6 reveal">
              {copy.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-8 max-w-2xl leading-relaxed reveal-delayed">
              {copy.hero.subtitle}
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 reveal-delayed">
              <Button asChild size="lg" className="min-h-12">
                <Link to="/contact">
                  Partner with RCG
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="min-h-12">
                <Link to="/apply">Apply to RCG</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <PartnerStrip />

      {/* What we do */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-eyebrow text-muted-foreground">What we do</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4">
              {copy.whatWeDo.title}
            </h2>
            <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
              {copy.whatWeDo.blurb}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {copy.whatWeDo.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-card border border-border rounded-md p-8 shadow-soft"
              >
                <h3 className="font-display text-2xl text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why RCG */}
      <section className="py-24 md:py-32 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-eyebrow text-muted-foreground">Why RCG</p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4">
                {copy.whyRcg.title}
              </h2>
            </div>
            <ul className="space-y-6">
              {copy.whyRcg.points.map((p, i) => (
                <li key={i} className="flex gap-4">
                  <span
                    className="font-display text-2xl text-primary/60 shrink-0 leading-none"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {p}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Ready to work with us?
          </h2>
          <p className="text-lg text-muted-foreground mt-6">
            Whether you're an organization seeking a partner or a Berkeley student
            interested in joining {siteConfig.name}, we'd love to hear from you.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="min-h-12">
              <Link to="/contact">Start a conversation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="min-h-12">
              <Link to="/team">Meet the team</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
