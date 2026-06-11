"use client";

import { Testimonial } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={cn("h-full", className)}
    >
      <Card className="h-full border-border/60 bg-white hover:shadow-lg">
        <CardContent className="flex h-full flex-col p-9 md:p-10">
          <Quote className="h-10 w-10 text-accent/60" />
          <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-foreground md:text-xl">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <div className="mt-8 border-t border-border pt-5">
            <p className="text-lg font-semibold text-foreground">{testimonial.author}</p>
            <p className="text-base text-muted-foreground">{testimonial.role}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
