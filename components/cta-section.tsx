"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDLY_URL = "https://calendly.com/shaurya-zyvoris/30min";

export function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden section-glow">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative mx-auto max-w-3xl text-center">
          {/* Icon */}
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>

          {/* Content */}
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Ready to stop losing leads?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Book a free strategy call and discover how Zyvoris can automate your lead response, follow-ups and appointment booking.
          </p>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="btn-glow bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/40 active:scale-[0.98] transition-all duration-300 px-8 py-6 text-base font-semibold shadow-lg shadow-primary/30 animate-pulse-glow"
            >
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Book Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Trust statements */}
          <div className="mt-8 space-y-2">
            <p className="text-sm text-muted-foreground">
              No contracts. No commitment. Just a conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
