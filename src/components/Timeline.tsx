import { TimelineStep } from "@/data/timeline";
import { Lock } from "lucide-react";

const Timeline = ({ steps }: { steps: readonly TimelineStep[] }) => {
  return (
    <ol className="relative border-l-2 border-border space-y-10 pl-8">
      {steps.map((step, idx) => (
        <li key={`${step.label}-${idx}`} className="relative">
          <span
            className="absolute -left-[2.4rem] top-1 size-6 rounded-full bg-primary text-primary-foreground text-xs font-medium flex items-center justify-center"
            aria-hidden="true"
          >
            {idx + 1}
          </span>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-display text-xl text-foreground">{step.label}</h3>
            <span className="text-eyebrow text-muted-foreground">{step.date}</span>
            {step.inviteOnly && (
              <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground">
                <Lock className="h-3 w-3" aria-hidden="true" />
                Invite only
              </span>
            )}
          </div>
          <p className="text-muted-foreground mt-2 leading-relaxed">{step.description}</p>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
