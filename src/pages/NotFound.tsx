import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { copy } from "@/data/copy";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageLayout>
      <section className="py-32 md:py-40 navy-texture">
        <div className="container mx-auto px-6 text-center max-w-xl">
          <p className="text-eyebrow text-primary-foreground/60">{copy.notFound.eyebrow}</p>
          <h1 className="font-display text-6xl md:text-8xl text-primary-foreground mt-4">
            {copy.notFound.title}
          </h1>
          <p className="text-primary-foreground/70 mt-6">
            {copy.notFound.body}
          </p>
          <Button asChild size="lg" className="mt-10 min-h-12 bg-white text-primary hover:bg-white/90">
            <Link to="/">{copy.notFound.cta}</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default NotFound;
