import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { copy } from "@/data/copy";

const offerings = copy.services.offerings;

const Services = () => {
  return (
    <PageLayout>
      <section className="py-20 md:py-28 navy-texture">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-eyebrow text-primary-foreground/60">{copy.services.eyebrow}</p>
            <h1 className="font-display text-4xl md:text-6xl text-primary-foreground mt-4 leading-[1.1]">
              {copy.services.title}
            </h1>
            <p className="text-lg text-primary-foreground/70 mt-6 leading-relaxed">
              {copy.services.blurb}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-5xl">
            {offerings.map((o) => (
              <div
                key={o.title}
                className="bg-white/10 rounded-md p-8 shadow-soft"
              >
                <h2 className="font-display text-2xl text-primary-foreground">{o.title}</h2>
                <p className="text-primary-foreground/70 mt-3 leading-relaxed">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl">
            <div>
              <p className="text-eyebrow text-muted-foreground">{copy.services.howWeWork.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-5xl text-foreground mt-4">
                {copy.services.howWeWork.title}
              </h2>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              {copy.services.howWeWork.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="mt-12">
            <Button asChild size="lg" className="min-h-12">
              <Link to="/contact">{copy.services.howWeWork.cta}</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
