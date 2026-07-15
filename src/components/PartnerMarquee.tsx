import { partners, type Partner, copy } from "@/data/copy";

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
      className="max-h-20 max-w-44 w-auto object-contain"
    />
  ) : (
    <div className="text-center">
      <div className="font-display text-xl font-medium text-foreground/65 px-4 py-3 whitespace-nowrap">
        {partner.name}
      </div>
    </div>
  );

const MarqueeGroup = ({ items }: { items: Partner[] }) => (
  <div className="flex shrink-0">
    {items.map((p, i) => (
      <div
        key={`${p.id}-${i}`}
        className="cream-paper mx-4 flex h-28 w-64 shrink-0 items-center justify-center rounded-lg px-8 shadow-soft"
      >
        <PartnerLogo partner={p} loading="eager" />
      </div>
    ))}
  </div>
);

const PartnerMarquee = () => {
  return (
    <section className="px-6 py-14 md:py-18">
      <div data-scroll-reveal className="prestige-blue-panel mx-auto max-w-7xl rounded-2xl shadow-[0_26px_70px_hsl(220_12%_3%/0.52)]">
        <div className="prestige-blue-surface overflow-hidden rounded-2xl bg-primary py-16">
        <p className="mb-12 px-8 text-center font-display text-2xl text-primary-foreground md:text-4xl">
          {copy.partnerMarquee.heading}
        </p>

        <div
          className="relative overflow-hidden motion-reduce:hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
          role="region"
          aria-label={`Organizations represented in our scholars' experience: ${partners.map((p) => p.name).join(", ")}`}
        >
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]" aria-hidden>
            <MarqueeGroup items={halfTrack} />
            <MarqueeGroup items={halfTrack} />
          </div>
        </div>

        <ul className="mx-auto hidden grid-cols-2 items-center gap-8 px-6 motion-reduce:grid sm:grid-cols-3 md:grid-cols-6">
          {partners.map((p) => (
            <li key={p.id} className="flex items-center justify-center rounded-lg bg-background p-3">
              <PartnerLogo partner={p} />
            </li>
          ))}
        </ul>
        </div>
      </div>
    </section>
  );
};

export default PartnerMarquee;
