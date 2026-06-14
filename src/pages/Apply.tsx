import PageLayout from "@/components/PageLayout";
import Timeline from "@/components/Timeline";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { recruitmentTimeline, interviewProcess } from "@/data/timeline";
import { copy } from "@/data/copy";
import { siteConfig } from "@/config/site";

const Apply = () => {
  return (
    <PageLayout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-eyebrow text-muted-foreground">{copy.apply.eyebrow}</p>
            <h1 className="font-display text-4xl md:text-6xl text-foreground mt-4 leading-[1.1]">
              {copy.apply.title}
            </h1>
            <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
              {copy.apply.blurb}
            </p>

            <div className="mt-10">
              <Button asChild size="lg" className="min-h-12">
                <a
                  href={siteConfig.applyFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <p className="text-eyebrow text-muted-foreground">Recruitment process</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mt-4">
              The path from interested to admitted.
            </h2>
            <p className="text-muted-foreground mt-4">
              Stages marked invite-only are extended to applicants who advance from the
              prior round.
            </p>
          </div>

          <div className="mt-12 max-w-3xl">
            <Timeline steps={recruitmentTimeline} />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <p className="text-eyebrow text-muted-foreground">Interview process</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mt-4">
              What to expect in interviews.
            </h2>
            <p className="text-muted-foreground mt-4">
              We design interviews to be conversational. Come curious — no prior
              consulting experience is required.
            </p>
          </div>

          <div className="mt-12 max-w-3xl">
            <Timeline steps={interviewProcess} />
          </div>

          <div className="mt-16 border-t border-border pt-10 max-w-3xl">
            <h3 className="font-display text-2xl text-foreground">Ready to apply?</h3>
            <p className="text-muted-foreground mt-3">
              Submit your application through our Google Form. Reach out at{" "}
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="underline hover:text-foreground"
              >
                {siteConfig.contactEmail}
              </a>{" "}
              with any questions.
            </p>
            <Button asChild size="lg" className="mt-6 min-h-12">
              <a
                href={siteConfig.applyFormUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Apply;
