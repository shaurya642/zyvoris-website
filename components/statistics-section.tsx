"use client";

import { Zap, Clock, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function StatisticsSection() {
  const stats = [
    {
      icon: Zap,
      title: "Respond in Seconds",
      description: "Instant AI-powered responses to every new lead, eliminating delays and capturing attention when it matters most.",
    },
    {
      icon: Clock,
      title: "24/7 Automated Follow-ups",
      description: "Never miss a follow-up again. Intelligent automation nurtures leads around the clock, even while you sleep.",
    },
    {
      icon: Calendar,
      title: "Appointment Booking",
      description: "Frictionless booking experiences that qualify leads and automatically schedule calls into your calendar.",
    },
  ];

  return (
    <section
  id="statistics"
  className="relative overflow-hidden py-24 sm:py-32"
>
      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] bg-primary/8 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Why Zyvoris
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Built for immediate impact
          </h2>
          <p className="mt-5 text-lg text-muted-foreground text-pretty leading-relaxed">
            Three core capabilities that transform how you engage with leads and grow your business.
          </p>
        </div>

        {/* Statistics grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="card-glow group relative overflow-hidden border border-primary/10 bg-gradient-to-br from-slate-900 to-slate-950 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
            >
              <CardContent className="p-8 space-y-6">
                {/* Icon container */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-blue-500/10 border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    <stat.icon className="h-8 w-8 text-primary group-hover:text-blue-400 transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {stat.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Animated bottom accent */}
                <div className="h-0.5 w-0 bg-gradient-to-r from-primary to-blue-500 group-hover:w-full transition-all duration-500" />
              </CardContent>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-50 transition-opacity duration-500">
                <div className="absolute inset-0 bg-radial-gradient from-primary/10 to-transparent" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
