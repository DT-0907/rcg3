import { Member, copy } from "@/data/copy";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

const MemberCard = ({ member }: { member: Member }) => {
  return (
    <article className="group bg-card border border-border rounded-md overflow-hidden shadow-soft hover:shadow-elegant transition-shadow duration-500 flex flex-col">
      <div className="aspect-[4/5] bg-muted relative overflow-hidden">
        {member.photo ? (
          <img
            src={member.photo}
            alt={`Photo of ${member.name}`}
            loading="lazy"
            className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className="size-full flex items-center justify-center bg-secondary"
            aria-hidden="true"
          >
            <span className="font-display text-5xl text-primary/70">
              {initials(member.name)}
            </span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-xl text-foreground">{member.name}</h3>
        <p className="text-eyebrow text-muted-foreground mt-1">{member.role}</p>

        {(member.year || member.major) && (
          <p className="text-sm text-muted-foreground mt-3">
            {[member.year, member.major].filter(Boolean).join(" · ")}
          </p>
        )}

        {member.bio && (
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
            {member.bio}
          </p>
        )}

        <div className="mt-6 pt-4 border-t border-border">
          <Button asChild variant="outline" className="w-full min-h-11">
            <a
              href={member.schedulingUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${copy.team.scheduleChatAriaLabelPrefix} ${member.name}`}
            >
              <Calendar className="h-4 w-4" />
              <span>{copy.team.scheduleChatCta}</span>
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default MemberCard;
