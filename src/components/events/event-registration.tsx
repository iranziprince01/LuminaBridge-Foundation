import Link from "next/link";
import type { Event } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { ExternalLink, Mic2, Ticket } from "lucide-react";

interface EventRegistrationProps {
  event: Event;
  variant?: "card" | "detail";
  className?: string;
}

const participantCopy: Record<Event["id"], string> = {
  "voices-new-canada":
    "Apply to perform as a youth artist, spoken word poet, dancer, or cultural performer.",
  bridgefest:
    "Register as a performing artist, facilitator, or cultural presenter at the festival.",
  "youth-unlocking-potential":
    "Apply to compete in music, comedy, theatre, or arts & crafts and join the talent development program.",
};

const attendanceCopy: Record<Event["id"], string> = {
  "voices-new-canada":
    "Reserve your spot to attend the showcase and celebrate youth and community voices.",
  bridgefest:
    "Register to attend festival performances, exhibitions, and community activities.",
  "youth-unlocking-potential":
    "Register to attend the festival showcase and support Alberta's emerging young talent.",
};

export function EventRegistration({
  event,
  variant = "detail",
  className,
}: EventRegistrationProps) {
  const { participant, attendance } = siteConfig.eventRegistration;

  if (variant === "card") {
    return (
      <div className={cn("space-y-3", className)}>
        <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
          Register for this event
        </p>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" asChild>
            <Link href={participant} target="_blank" rel="noopener noreferrer">
              <Mic2 className="h-3.5 w-3.5" />
              Participant
              <ExternalLink className="h-3 w-3 opacity-70" />
            </Link>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <Link href={attendance} target="_blank" rel="noopener noreferrer">
              <Ticket className="h-3.5 w-3.5" />
              Attendance
              <ExternalLink className="h-3 w-3 opacity-70" />
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-2xl border border-secondary/20 bg-gradient-to-br from-secondary/5 to-primary/5 p-6 md:p-8",
        className
      )}
    >
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        Register for {event.title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
        Choose the registration option that fits how you would like to take part. Both forms
        open in a new tab and only take a few minutes to complete.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col rounded-xl border border-border/60 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
            <Mic2 className="h-5 w-5 text-secondary" />
          </div>
          <h3 className="mt-4 text-lg font-bold text-foreground">Participant Registration</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {participantCopy[event.id]}
          </p>
          <Button className="mt-5 w-full sm:w-auto" asChild>
            <Link href={participant} target="_blank" rel="noopener noreferrer">
              Register as Participant
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="flex flex-col rounded-xl border border-border/60 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Ticket className="h-5 w-5 text-primary" />
          </div>
          <h3 className="mt-4 text-lg font-bold text-foreground">Attendance Registration</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {attendanceCopy[event.id]}
          </p>
          <Button className="mt-5 w-full sm:w-auto" variant="outline" asChild>
            <Link href={attendance} target="_blank" rel="noopener noreferrer">
              Register to Attend
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
