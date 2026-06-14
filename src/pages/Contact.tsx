import PageLayout from "@/components/PageLayout";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <PageLayout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-16 max-w-6xl">
            <div className="md:col-span-2">
              <p className="text-eyebrow text-muted-foreground">Work with RCG</p>
              <h1 className="font-display text-4xl md:text-5xl text-foreground mt-4 leading-[1.1]">
                Tell us about your project.
              </h1>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                Share a few details and we'll respond within a few days to set up an
                introductory conversation.
              </p>

              <div className="mt-10 pt-8 border-t border-border">
                <h2 className="text-eyebrow text-muted-foreground mb-3">
                  Prefer email?
                </h2>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="inline-flex items-center gap-2 text-foreground hover:text-primary"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.contactEmail}
                </a>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="bg-card border border-border rounded-md p-8 md:p-10 shadow-soft">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
