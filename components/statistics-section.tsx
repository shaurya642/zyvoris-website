"use client";

import { Calendar, Clock, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionReveal } from "@/components/section-reveal";

const outcomes = [
  {
    icon: Zap,
    title: "Respond Immediately",
    description:
      "New inquiries can receive an immediate response instead of waiting for someone on your team to become available.",
  },
  {
    icon: Clock,
    title: "Follow Up Consistently",
    description:
      "Automated follow-up keeps conversations moving so promising opportunities don't get forgotten after the first interaction.",
  },
  {
    icon: Calendar,
    title: "Move Leads Toward Booking",
    description:
      "When a prospect is ready for the next step, the workflow can guide them toward scheduling without unnecessary back-and-forth.",
  },
];

const EASE = "cubic-bezier(0.22,1,0.36,1)";

export function StatisticsSection() {
  return (
    <SectionReveal>
      <section
        id="statistics"
        aria-labelledby="why-zyvoris-heading"
        className="section-glow relative overflow-hidden bg-background py-24 sm:py-32 lg:py-36"
      >
        {/* Ambient background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.025] blur-[140px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
              Why Zyvoris
            </span>

            <h2
              id="why-zyvoris-heading"
              className="mt-4 text-balance text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl"
            >
              Every lead deserves a next step.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              Zyvoris helps your business respond to new inquiries, maintain
              consistent follow-up, and move qualified conversations toward
              appointments without adding more manual work.
            </p>
          </div>

          {/* Outcomes */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {outcomes.map((outcome) => {
              const Icon = outcome.icon;

              return (
                <Card
                  key={outcome.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:bg-white/[0.035] hover:shadow-[0_18px_44px_rgba(0,0,0,0.18)]"
                  style={{
                    transitionTimingFunction: EASE,
                  }}
                >
                  {/* Hover glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top_right,rgba(47,125,255,0.065),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      transitionTimingFunction: EASE,
                    }}
                  />

                  <CardContent className="relative p-7 sm:p-8">
                    {/* Icon */}
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/[0.08] shadow-[0_8px_22px_rgba(47,125,255,0.07)] transition-all duration-500 group-hover:-translate-y-0.5 group-hover:border-primary/30 group-hover:bg-primary/[0.11]"
                      style={{
                        transitionTimingFunction: EASE,
                      }}
                    >
                      <Icon
                        className="h-6 w-6 text-primary transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2"
                        style={{
                          transitionTimingFunction: EASE,
                        }}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Content */}
                    <div className="mt-7 space-y-3">
                      <h3 className="text-xl font-semibold tracking-tight text-white">
                        {outcome.title}
                      </h3>

                      <p className="text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                        {outcome.description}
                      </p>
                    </div>

                    {/* Accent line */}
                    <div
                      aria-hidden="true"
                      className="mt-7 h-px w-0 bg-primary transition-all duration-700 group-hover:w-full"
                      style={{
                        transitionTimingFunction: EASE,
                      }}
                    />
                  </CardContent>

                  {/* Subtle inner border */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-3xl border border-white/[0.025]"
                  />
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}