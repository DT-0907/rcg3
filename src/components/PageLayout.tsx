import { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";

type PageLayoutProps = {
  children: ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  const { pathname } = useLocation();
  return (
    <div className="min-h-dvh flex flex-col bg-background">
      <Navigation />
      <main className={`flex-1 ${pathname === "/" ? "" : "pt-[5.25rem]"}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
