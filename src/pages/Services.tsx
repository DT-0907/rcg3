import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { copy } from "@/data/copy";

const offerings = [
  {
    title: "Market & Industry Research",
    body: "Sizing, segmentation, and landscape mapping built on primary and secondary research.",
  },
  {
    title: "Strategy & Entry",
    body: "Where to play and how to win — recommendations grounded in your operating constraints.",
  },
  {
    title: "Growth & Go-to-Market",
    body: "Positioning, pricing, channel testing, and pipeline-building experiments.",
  },
  {
    title: "Operations & Analytics",
    body: "Process diagnostics, KPI design, and analyses your team can actually act on.",
  },
];

const Services = () => {
  return (
    <PageLayout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-eyebrow text-muted-foreground">{copy.services.eyebrow}</p>
            <h1 className="font-display text-4xl md:text-6xl text-foreground mt-4 leading-[1.1]">
              {copy.services.title}
            </h1>
            <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
              {copy.services.blurb}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-5xl">
            {offerings.map((o) => (
              <div
                key={o.title}
                className="bg-card border border-border rounded-md p-8 shadow-soft"
              >
                <h2 className="font-display text-2xl text-foreground">{o.title}</h2>
                <p className="text-muted-foreground mt-3 leading-relaxed">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl">
            <div>
              <p className="text-eyebrow text-muted-foreground">How we work</p>
              <h2 className="font-display text-3xl md:text-5xl text-foreground mt-4">
                Six to ten weeks. Weekly working sessions. Written deliverables.
              </h2>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Every engagement is scoped around a concrete decision the client needs to
                make. We agree on the question, the deliverable format, and the working
                cadence before the project starts.
              </p>
              <p>
                A small consulting team — typically three to five members — is assigned
                with senior oversight. We share progress weekly and adjust scope openly
                if the question shifts.
              </p>
              <p>
                Final deliverables are written reports backed by evidence, with the data,
                interview notes, and models handed off so your team can keep going.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <Button asChild size="lg" className="min-h-12">
              <Link to="/contact">Start a conversation</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
