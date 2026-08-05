"use client";

import { Zap, Clock, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionReveal } from "@/components/section-reveal";

export function StatisticsSection() {
  const stats = [
    {
      icon: Zap,
      title: "Respond in Seconds",
      description:
        "Every new lead receives an intelligent AI response within seconds, helping you engage prospects while interest is at its highest.",
    },
    {
      icon: Clock,
      title: "24/7 Automated Follow-ups",
      description:
        "Stay top of mind with automated follow-ups that continue nurturing leads even outside business hours.",
    },
    {
      icon: Calendar,
      title: "Appointment Booking",
      description:
        "Qualify prospects automatically and let AI schedule meetings directly into your calendar without manual back-and-forth.",
    },
  ];

  return (
    <SectionReveal>
      <section
        id="statistics"
        className="relative overflow-hidden bg-[#05060A] py-28 sm:py-36"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(47,125,255,0.05),transparent_65%)]" />
          <div className="absolute left-1/2 top-1/2 h-[850px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[170px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Why Zyvoris
            </span>

            <h2 className="mt-4 text-balance text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              Built for immediate impact
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/60">
              Every automation is designed to help you respond faster, book more
              appointments, and deliver a better customer experience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {stats.map((stat) => (
              <Card
                key={stat.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:border-primary/25 hover:bg-white/[0.04] hover:shadow-[0_18px_44px_rgba(0,0,0,0.22)]"
              >
                <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top_right,rgba(47,125,255,0.08),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <CardContent className="relative p-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 shadow-[0_8px_22px_rgba(47,125,255,0.08)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:border-primary/35 group-hover:bg-primary/15">
                    <stat.icon className="h-8 w-8 text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" />
                  </div>

                  <div className="mt-8 space-y-4">
                    <h3 className="text-xl font-semibold tracking-tight text-white">
                      {stat.title}
                    </h3>

                    <p className="text-base leading-8 text-white/60">
                      {stat.description}
                    </p>
                  </div>

                  <div className="mt-8 h-px w-0 bg-primary transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
                </CardContent>

                <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/[0.03]" />
              </Card>
            ))}
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}