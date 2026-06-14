import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { copy } from "@/data/copy";

const About = () => {
  return (
    <PageLayout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <p className="text-eyebrow text-muted-foreground">{copy.about.eyebrow}</p>
            <h1 className="font-display text-4xl md:text-6xl text-foreground mt-4 leading-[1.1]">
              {copy.about.title}
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mt-16 max-w-6xl">
            <div className="md:col-span-2 space-y-6">
              {copy.about.paragraphs.map((p, i) => (
                <p key={i} className="text-lg text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <aside className="space-y-8 border-l border-border pl-8">
              <div>
                <h3 className="text-eyebrow text-muted-foreground mb-2">Based at</h3>
                <p className="text-foreground">UC Berkeley</p>
              </div>
              <div>
                <h3 className="text-eyebrow text-muted-foreground mb-2">Composed of</h3>
                <p className="text-foreground">
                  Regents' & Chancellor's Scholars — Berkeley's top undergraduate award recipients.
                </p>
              </div>
              <div>
                <h3 className="text-eyebrow text-muted-foreground mb-2">Focus</h3>
                <p className="text-foreground">
                  Strategy, growth, operations, and research for partner organizations.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Interested? pathway */}
      <section className="py-20 md:py-28 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-eyebrow text-muted-foreground">Interested?</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mt-4">
              Pick the path that fits you.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-background border border-border rounded-md p-8 shadow-soft">
              <h3 className="font-display text-2xl text-foreground">
                For organizations
              </h3>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                Share what you're working on and we'll be in touch within a few days.
              </p>
              <Button asChild className="mt-6 min-h-11">
                <Link to="/contact">Submit an inquiry</Link>
              </Button>
            </div>
            <div className="bg-background border border-border rounded-md p-8 shadow-soft">
              <h3 className="font-display text-2xl text-foreground">
                For Berkeley students
              </h3>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                Meet a current member or apply directly during open recruitment.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="outline" className="min-h-11">
                  <Link to="/team">Coffee chats</Link>
                </Button>
                <Button asChild className="min-h-11">
                  <Link to="/apply">Apply</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
