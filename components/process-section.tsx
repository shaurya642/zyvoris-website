"use client";

import { Search, Cpu, Wrench, Rocket, TrendingUp } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery",
      description:
        "We analyze your current lead flow, response times, and conversion bottlenecks.",
    },
    {
      number: "02",
      icon: Cpu,
      title: "Strategy",
      description:
        "Custom automation blueprint designed around your business goals and tech stack.",
    },
    {
      number: "03",
      icon: Wrench,
      title: "Build",
      description:
        "We build and integrate your AI systems with precision and care.",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch",
      description:
        "Deploy your automation with rigorous testing and monitoring.",
    },
    {
      number: "05",
      icon: TrendingUp,
      title: "Optimize",
      description:
        "Continuous improvement based on real performance data and feedback.",
    },
  ];

  return (
    <section id="process" className="relative py-24 sm:py-32 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Process
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            From chaos to automated clarity
          </h2>
          <p className="mt-5 text-lg text-muted-foreground text-pretty leading-relaxed">
            A proven 5-step process that transforms your lead management into a well-oiled machine.
          </p>
        </div>

        {/* Process timeline */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Step circle */}
                <div className="relative z-10 mb-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-card border border-border/50 shadow-lg shadow-background/50 group-hover:border-primary/50 group-hover:shadow-primary/10 transition-all duration-300">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-bold text-primary-foreground shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow for mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="w-px h-8 bg-border mt-6 lg:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
