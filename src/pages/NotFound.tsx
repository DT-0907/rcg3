import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageLayout>
      <section className="py-32 md:py-40">
        <div className="container mx-auto px-6 text-center max-w-xl">
          <p className="text-eyebrow text-muted-foreground">Error 404</p>
          <h1 className="font-display text-6xl md:text-8xl text-foreground mt-4">
            Page not found
          </h1>
          <p className="text-muted-foreground mt-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild size="lg" className="mt-10 min-h-12">
            <Link to="/">Return home</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default NotFound;
