import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-display text-2xl text-foreground">{siteConfig.name}</div>
            <p className="text-eyebrow text-muted-foreground mt-1">
              {siteConfig.fullName}
            </p>
            <p className="text-sm text-muted-foreground mt-4 max-w-sm">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-eyebrow text-muted-foreground mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-foreground text-muted-foreground">About</Link></li>
              <li><Link to="/services" className="hover:text-foreground text-muted-foreground">Services</Link></li>
              <li><Link to="/team" className="hover:text-foreground text-muted-foreground">Coffee Chats</Link></li>
              <li><Link to="/apply" className="hover:text-foreground text-muted-foreground">Apply</Link></li>
              <li><Link to="/contact" className="hover:text-foreground text-muted-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-eyebrow text-muted-foreground mb-4">Get in touch</h3>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-sm text-muted-foreground hover:text-foreground break-all"
            >
              {siteConfig.contactEmail}
            </a>
            <p className="text-xs text-muted-foreground mt-3">
              {siteConfig.university}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            A student organization at {siteConfig.university}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
