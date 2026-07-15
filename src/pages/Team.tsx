import PageLayout from "@/components/PageLayout";
import MemberCard from "@/components/MemberCard";
import { members, copy } from "@/data/copy";

const Team = () => {
  return (
    <PageLayout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-eyebrow text-muted-foreground">{copy.team.eyebrow}</p>
            <h1 className="font-display text-4xl md:text-6xl text-foreground mt-4 leading-[1.1]">
              {copy.team.title}
            </h1>
            <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
              {copy.team.blurb}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {members.map((m) => (
              <MemberCard key={m.id} member={m} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Team;
