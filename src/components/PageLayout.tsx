import { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type PageLayoutProps = {
  children: ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-dvh flex flex-col bg-background">
      <Navigation />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
