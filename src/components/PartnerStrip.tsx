import { partners } from "@/data/partners";

const PartnerStrip = () => {
  return (
    <section className="py-16 border-y border-border bg-card">
      <div className="container mx-auto px-6">
        <p className="text-eyebrow text-muted-foreground text-center mb-10">
          Past partners & clients
        </p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {partners.map((p) => (
            <li key={p.id} className="flex items-center justify-center">
              {p.logo ? (
                // Partner logos render in their original brand colors —
                // no filters/desaturation applied.
                <img
                  src={p.logo}
                  alt={p.name}
                  loading="lazy"
                  className="max-h-12 w-auto object-contain"
                />
              ) : (
                <div className="text-center">
                  <div className="font-display text-lg text-muted-foreground/70 px-4 py-3 border border-dashed border-border rounded-sm">
                    {p.name}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PartnerStrip;
