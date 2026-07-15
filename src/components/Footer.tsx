import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { siteConfig } from "@/config/site";
import { copy } from "@/data/copy";

const Footer = () => {
  const footerLinks = [
    ...copy.nav.links,
    { to: "/services", label: "Services" },
  ];

  return (
    <footer className="cream-paper text-[hsl(var(--brown))]">
      <div className="container mx-auto px-6 py-14 md:py-18">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 md:gap-4">
              <Logo size="lg" className="h-32 text-[hsl(var(--brown))] md:h-40" />
              <div className="font-display text-3xl leading-[0.95] md:text-4xl">
                <p><span className="inline-block min-w-[0.64em] text-[1.1em] font-medium text-[hsl(var(--gold))]">R</span>egents' &amp;</p>
                <p><span className="inline-block min-w-[0.64em] text-[1.1em] font-medium text-[hsl(var(--gold))]">C</span>hancellor's</p>
                <p><span className="inline-block min-w-[0.64em] text-[1.1em] font-medium text-[hsl(var(--gold))]">G</span>roup</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-eyebrow mb-5 text-[hsl(var(--gold))]">{copy.footer.exploreHeading}</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-[hsl(var(--brown)/0.65)] hover:text-[hsl(var(--brown))]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-eyebrow mb-5 text-[hsl(var(--gold))]">{copy.footer.getInTouchHeading}</h3>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="break-all text-sm text-[hsl(var(--brown)/0.65)] hover:text-[hsl(var(--brown))]"
            >
              {siteConfig.contactEmail}
            </a>
            <p className="mt-3 text-xs text-[hsl(var(--brown)/0.5)]">
              {siteConfig.university}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 pt-6 text-[hsl(var(--brown)/0.42)] md:flex-row md:items-center md:justify-between">
          <p className="text-xs">
            © {new Date().getFullYear()} {siteConfig.fullName}. {copy.footer.rightsReserved}
          </p>
          <p className="text-xs">
            {copy.footer.studentOrgLinePrefix} {siteConfig.university}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
