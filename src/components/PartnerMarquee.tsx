import { partners, type Partner } from "@/data/partners";

/** Repeat count so one marquee half is wider than any viewport. */
const REPEATS_PER_HALF = 4;

const halfTrack = Array.from({ length: REPEATS_PER_HALF }, () => partners).flat();

const PartnerLogo = ({
  partner,
  loading = "lazy",
}: {
  partner: Partner;
  loading?: "lazy" | "eager";
}) =>
  partner.logo ? (
    // Partner logos render in their original brand colors —
    // no filters/desaturation applied.
    <img
      src={partner.logo}
      alt={partner.name}
      loading={loading}
      className="max-h-12 w-auto object-contain"
    />
  ) : (
    <div className="text-center">
      <div className="font-display text-lg text-muted-foreground/70 px-4 py-3 border border-dashed border-border rounded-sm whitespace-nowrap">
        {partner.name}
      </div>
    </div>
  );

const MarqueeGroup = ({ items }: { items: Partner[] }) => (
  <div className="flex shrink-0">
    {items.map((p, i) => (
      <div
        key={`${p.id}-${i}`}
        className="flex shrink-0 items-center justify-center w-48 px-10"
      >
        <PartnerLogo partner={p} loading="eager" />
      </div>
    ))}
  </div>
);

const PartnerMarquee = () => {
  return (
    <section className="py-16 border-y border-border bg-card">
      <div className="container mx-auto px-6">
        <p className="text-eyebrow text-muted-foreground text-center mb-10">
          Past partners & clients
        </p>
      </div>

      <div
        className="relative overflow-hidden motion-reduce:hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        role="region"
        aria-label={`Past partners and clients: ${partners.map((p) => p.name).join(", ")}`}
      >
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]" aria-hidden>
          <MarqueeGroup items={halfTrack} />
          <MarqueeGroup items={halfTrack} />
        </div>
      </div>

      <ul className="hidden motion-reduce:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center container mx-auto px-6">
        {partners.map((p) => (
          <li key={p.id} className="flex items-center justify-center">
            <PartnerLogo partner={p} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PartnerMarquee;
