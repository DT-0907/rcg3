import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { siteConfig } from "@/config/site";
import { copy } from "@/data/copy";

const leftLinks = copy.nav.links.slice(0, 2);
const rightLinks = copy.nav.links.slice(2);

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-medium uppercase tracking-[0.08em] transition-colors duration-300 ${
    isActive ? "text-[hsl(var(--brown))]" : "text-[hsl(var(--brown)/0.58)] hover:text-[hsl(var(--brown))]"
  }`;

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const update = () => setHasScrolled(window.scrollY > 48);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const visible = !isHome || hasScrolled || open;

  return (
    <nav className={`cream-paper fixed inset-x-0 top-0 z-50 text-[hsl(var(--brown))] transition-all duration-500 ${visible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0"}`}>
      <div className="container relative mx-auto flex h-[5.25rem] items-center justify-between px-6">
        <div className="hidden flex-1 items-center justify-end gap-10 pr-20 md:flex">
          {leftLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>{link.label}</NavLink>
          ))}
        </div>

        <Link to="/" className="absolute left-1/2 -translate-x-1/2 text-[hsl(var(--brown))]" aria-label={`${siteConfig.name} home`}>
          <Logo size="md" className="text-[hsl(var(--brown))]" />
        </Link>

        <div className="hidden flex-1 items-center gap-10 pl-20 md:flex">
          {rightLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>{link.label}</NavLink>
          ))}
        </div>

        <div className="ml-auto md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="min-h-11 min-w-11 text-[hsl(var(--brown))]"
              aria-label={copy.nav.openMenuAriaLabel}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background">
            <SheetTitle className="sr-only">{copy.nav.menuTitle}</SheetTitle>
            <div className="flex items-center gap-3 pb-6 text-[hsl(var(--brown))]">
              <Logo size="md" className="text-[hsl(var(--brown))]" />
              <span className="font-display text-lg text-foreground">{siteConfig.name}</span>
            </div>
            <div className="flex flex-col gap-6 pt-8">
              {copy.nav.links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-2xl font-display uppercase ${
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
      </div>
    </nav>
  );
};

export default Navigation;
