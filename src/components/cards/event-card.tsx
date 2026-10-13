"use client";

import Image from "next/image";
import Link from "next/link";
import { StatStrip } from "@/components/shared/stat-strip";
import { Event, getEventHref } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface EventCardProps {
  event: Event;
  className?: string;
  featured?: boolean;
  priority?: boolean;
}

export function EventCard({ event, className, featured = false, priority = false }: EventCardProps) {
  const eventHref = getEventHref(event);
  const isPast = event.status === "past";
  const { participant, attendance } = siteConfig.eventRegistration;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={cn("h-full", className)}
    >
      <Card
        className={cn(
          "group h-full overflow-hidden border-border/60 hover:shadow-xl",
          featured && "md:grid md:grid-cols-2"
        )}
      >
        <Link
          href={eventHref}
          className={cn(
            "relative block overflow-hidden",
            featured ? "min-h-[220px] sm:min-h-[260px] md:min-h-full" : "aspect-[16/10]"
          )}
        >
          <Image
            src={event.image}
            alt={event.title}
            fill
            priority={priority}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
          <Badge className="absolute left-4 top-4 bg-white/90 text-primary">
            {event.yearBadge ?? event.year}
          </Badge>
          <Badge
            className={cn(
              "absolute right-4 top-4 text-white",
              isPast ? "bg-foreground/80" : "bg-secondary"
            )}
          >
            {isPast ? "Past Event" : "Upcoming"}
          </Badge>
        </Link>

        <CardContent className="flex flex-col p-5 sm:p-6 md:p-8">
          <p className="text-sm font-semibold text-secondary">{event.tagline}</p>
          <h3 className="mt-2 text-xl font-bold text-foreground sm:text-2xl">
            <Link href={eventHref} className="transition-colors hover:text-primary">
              {event.title}
            </Link>
          </h3>

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-secondary" />
              {event.date}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-secondary" />
              {event.location}
            </span>
          </div>

          <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
            {event.description}
          </p>

          <StatStrip stats={event.stats} className="mt-6" />

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <Button size="sm" asChild>
              <Link href={eventHref}>
                Explore Event
                <ArrowRight className="h-3 w-3" />
              </Link>
            </Button>
            {!isPast && (
              <>
                <Button size="sm" variant="outline" asChild>
                  <Link href={participant} target="_blank" rel="noopener noreferrer">
                    Participate
                    <ExternalLink className="h-3 w-3 opacity-70" />
                  </Link>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <Link href={attendance} target="_blank" rel="noopener noreferrer">
                    Register to Attend
                    <ExternalLink className="h-3 w-3 opacity-70" />
                  </Link>
                </Button>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
