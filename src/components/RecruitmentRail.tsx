import { Fragment, useEffect, useMemo, useState } from "react";
import { recruitmentCycle } from "@/data/copy";

/**
 * Vertical recruitment rail with a live "you are here" marker.
 *
 * Round instants come from `recruitmentCycle` in copy.ts and already carry a
 * Pacific offset, so all comparisons here are absolute — a visitor in Tokyo
 * sees the same round highlighted as one in Berkeley. Only the displayed clock
 * is converted, and it is pinned to Pacific rather than the visitor's local
 * time, because the dates describe events happening on campus.
 */

const PACIFIC = "America/Los_Angeles";

const pacificClock = new Intl.DateTimeFormat("en-US", {
  timeZone: PACIFIC,
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
});

/** "PDT" in summer, "PST" in winter — never wrong for half the year. */
const pacificAbbrev = (at: Date) =>
  new Intl.DateTimeFormat("en-US", { timeZone: PACIFIC, timeZoneName: "short" })
    .formatToParts(at)
    .find((part) => part.type === "timeZoneName")?.value ?? "PT";

const MINUTE = 60_000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const plural = (value: number, unit: string) =>
  `${value} ${unit}${value === 1 ? "" : "s"}`;

/** Coarse, human countdown: days out until the last day, then hours, then minutes. */
const countdown = (ms: number) => {
  if (ms >= DAY) return plural(Math.round(ms / DAY), "day");
  if (ms >= HOUR) return plural(Math.floor(ms / HOUR), "hour");
  if (ms >= MINUTE) return plural(Math.floor(ms / MINUTE), "minute");
  return "moments";
};

type Status = "done" | "active" | "upcoming";

const RecruitmentRail = () => {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  const { rounds, activeIndex, markerIndex, nextRound } = useMemo(() => {
    const parsed = recruitmentCycle.rounds.map((round) => {
      const start = new Date(round.start).getTime();
      const end = new Date(round.end).getTime();
      const status: Status = now > end ? "done" : now >= start ? "active" : "upcoming";
      return { ...round, start, end, status };
    });

    const active = parsed.findIndex((round) => round.status === "active");
    const upcoming = parsed.findIndex((round) => round.status === "upcoming");

    return {
      rounds: parsed,
      activeIndex: active,
      // The floating NOW marker only appears between rounds. While a round is
      // running the marker would duplicate it, so that round carries the state.
      markerIndex: active >= 0 ? -1 : upcoming,
      nextRound: upcoming >= 0 ? parsed[upcoming] : null,
    };
  }, [now]);

  const finished = activeIndex < 0 && !nextRound;
  const clockLabel = `${pacificClock.format(now)} ${pacificAbbrev(new Date(now))}`;

  const marker = (
    <li className="relative flex gap-5 pb-7" aria-live="polite">
      <span className="relative mt-[.3rem] flex h-3.5 w-3.5 shrink-0 items-center justify-center">
        <span
          className="rail-live-halo absolute inset-0 rounded-full bg-[hsl(var(--gold))]"
          aria-hidden="true"
        />
        <span className="relative h-2 w-2 rounded-full bg-[hsl(var(--gold))] shadow-[0_0_14px_hsl(var(--gold)/0.9)]" />
      </span>
      <div className="min-w-0 -mt-0.5">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[hsl(var(--gold))]">
          You are here
        </p>
        <p className="mt-1.5 text-sm text-[hsl(var(--cream)/0.9)]">{clockLabel}</p>
        {nextRound && (
          <p className="mt-1 text-sm text-[hsl(var(--cream)/0.55)]">
            {nextRound.label} opens in {countdown(nextRound.start - now)}
          </p>
        )}
      </div>
    </li>
  );

  return (
    <div className="w-full rounded-2xl border border-[hsl(var(--gold)/0.42)] bg-[hsl(var(--deep-blue)/0.58)] shadow-[0_26px_70px_hsl(220_12%_3%/0.55)] backdrop-blur-md">
      <div className="rounded-2xl px-7 py-8 md:px-8 md:py-9">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[hsl(var(--gold))]">
          {recruitmentCycle.eyebrow}
        </p>
        <h2 className="mt-2.5 font-display text-3xl leading-tight md:text-4xl">
          {recruitmentCycle.season}
        </h2>

        <ol className="relative mt-8">
          {/* The rail itself, stopping short of the final node's centre. */}
          <span
            className="absolute left-[.42rem] top-2 bottom-8 w-px bg-[linear-gradient(180deg,hsl(var(--gold)/0.55),hsl(var(--cream)/0.14))]"
            aria-hidden="true"
          />

          {rounds.map((round, index) => {
            const isActive = round.status === "active";
            const isDone = round.status === "done";

            return (
              <Fragment key={round.id}>
                {markerIndex === index && marker}

                <li className="relative flex gap-5 pb-7 last:pb-0">
                  <span className="relative mt-[.3rem] flex h-3.5 w-3.5 shrink-0 items-center justify-center">
                    {isActive && (
                      <span
                        className="rail-live-halo absolute inset-0 rounded-full bg-[hsl(var(--gold))]"
                        aria-hidden="true"
                      />
                    )}
                    <span
                      className={[
                        "relative block transition-colors",
                        round.isFinal
                          ? "h-3 w-3 rotate-45 rounded-[2px]"
                          : "h-2.5 w-2.5 rounded-full",
                        isDone
                          ? "bg-[hsl(var(--gold)/0.85)]"
                          : isActive
                            ? "bg-[hsl(var(--gold))] shadow-[0_0_14px_hsl(var(--gold)/0.9)]"
                            : round.isFinal
                              ? "bg-[hsl(var(--gold))] shadow-[0_0_12px_hsl(var(--gold)/0.55)]"
                              : "border border-[hsl(var(--cream)/0.45)] bg-[hsl(var(--brown))]",
                      ].join(" ")}
                    />
                  </span>

                  <div
                    className={[
                      "min-w-0 -mt-0.5 transition-opacity",
                      isDone ? "opacity-45" : "opacity-100",
                    ].join(" ")}
                  >
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--gold))]">
                        {round.isFinal ? "Final" : round.id}
                      </span>
                      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[hsl(var(--cream)/0.5)]">
                        {round.dateLabel}
                      </span>
                      {isActive && (
                        <span className="rounded-full bg-[hsl(var(--gold)/0.16)] px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-[hsl(var(--gold))]">
                          Happening now
                        </span>
                      )}
                    </div>
                    <p className="mt-1.5 font-display text-xl text-[hsl(var(--cream))]">
                      {round.label}
                    </p>
                    {round.note && (
                      <p className="mt-1 text-sm text-[hsl(var(--cream)/0.5)]">{round.note}</p>
                    )}
                  </div>
                </li>
              </Fragment>
            );
          })}

          {finished && (
            <li className="relative flex gap-5">
              <span className="mt-[.3rem] flex h-3.5 w-3.5 shrink-0 items-center justify-center">
                <span className="h-2 w-2 rounded-full bg-[hsl(var(--cream)/0.4)]" />
              </span>
              <p className="-mt-0.5 text-sm text-[hsl(var(--cream)/0.55)]">
                This cycle has wrapped. {clockLabel}
              </p>
            </li>
          )}
        </ol>
      </div>
    </div>
  );
};

export default RecruitmentRail;
