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
    <img
      src={partner.logo}
      alt={partner.name}
      loading={loading}
      className="max-h-24 w-auto max-w-60 object-contain"
    />
  ) : (
    <div className="text-center">
      <div className="whitespace-nowrap px-4 py-3 font-display text-xl font-medium text-[hsl(var(--brown)/0.75)]">
        {partner.name}
      </div>
    </div>
  );

const MarqueeGroup = ({ items }: { items: Partner[] }) => (
  <div className="flex shrink-0">
    {items.map((p, i) => (
      <div
        key={`${p.id}-${i}`}
        className="mx-2 flex h-24 w-60 shrink-0 items-center justify-center px-2"
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
        <div className="prestige-blue-surface cream-paper overflow-hidden rounded-2xl py-16 text-[hsl(var(--brown))]">
        <p className="mb-12 px-8 text-center font-display text-2xl md:text-4xl">
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
            <li key={p.id} className="flex items-center justify-center p-3">
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
