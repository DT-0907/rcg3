import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { siteConfig } from "@/config/site";

const links = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Coffee Chats" },
  { to: "/apply", label: "Apply" },
  { to: "/contact", label: "Contact" },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `text-eyebrow transition-colors duration-300 ${
    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
  }`;

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} home`}>
          <Logo size="sm" />
          <span className="hidden sm:inline text-eyebrow text-muted-foreground">
            {siteConfig.fullName}
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label.toUpperCase()}
            </NavLink>
          ))}
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden min-h-11 min-w-11"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <div className="flex items-center gap-3 pb-6 border-b border-border">
              <Logo size="md" />
              <span className="font-display text-lg text-foreground">{siteConfig.name}</span>
            </div>
            <div className="flex flex-col gap-6 pt-8">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-2xl font-display ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;
