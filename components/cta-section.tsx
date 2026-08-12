"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionReveal } from "@/components/section-reveal";

const CALENDLY_URL = "https://calendly.com/shaurya-zyvoris/30min";

const EASE = "cubic-bezier(0.22,1,0.36,1)";

export function CTASection() {
  return (
    <SectionReveal>
      <section
        aria-labelledby="cta-heading"
        className="section-glow relative overflow-hidden bg-background py-24 sm:py-32 lg:py-36"
      >
        {/* Ambient section light */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-primary/[0.045] blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-7 py-14 text-center shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-2xl sm:px-12 sm:py-20 lg:px-16 lg:py-24">
            {/* Restrained blue ambient light */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,125,255,0.07),transparent_58%)]"
            />

            {/* Subtle top border highlight */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
            />

            <div className="relative">
              {/* Icon */}
              <div
                className="group mx-auto mb-8 flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-primary/20 bg-primary/[0.08] shadow-[0_10px_30px_rgba(47,125,255,0.10)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/35 hover:bg-primary/[0.12] hover:shadow-[0_14px_34px_rgba(47,125,255,0.15)]"
                style={{ transitionTimingFunction: EASE }}
              >
                <Sparkles
                  className="h-8 w-8 text-primary transition-transform duration-500 group-hover:scale-105"
                  style={{ transitionTimingFunction: EASE }}
                  aria-hidden="true"
                />
              </div>

              {/* Heading */}
              <h2
                id="cta-heading"
                className="mx-auto max-w-3xl text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
              >
                Turn more of your leads into booked appointments.
              </h2>

              {/* Supporting copy */}
              <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
                Book a free strategy call to walk through how your business
                currently handles new leads and identify where Zyvoris can
                automate response, qualification, follow-up, and booking.
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="group h-auto rounded-xl bg-primary px-8 py-5 text-base font-semibold text-white shadow-[0_12px_30px_rgba(47,125,255,0.22)] transition-all duration-500 hover:-translate-y-1 hover:bg-primary hover:shadow-[0_18px_38px_rgba(47,125,255,0.28)] active:translate-y-0 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  style={{ transitionTimingFunction: EASE }}
                >
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Book a free Zyvoris strategy call"
                  >
                    Book a Strategy Call

                    <ArrowRight
                      className="ml-2 h-5 w-5 transition-transform duration-500 group-hover:translate-x-1.5"
                      style={{ transitionTimingFunction: EASE }}
                      aria-hidden="true"
                    />
                  </a>
                </Button>
              </div>

              {/* Reassurance */}
              <p className="mt-7 text-sm text-white/40">
                Free strategy call. No commitment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}