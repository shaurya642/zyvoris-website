"use client";

import {
  Cpu,
  Rocket,
  Search,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We map how new leads enter your business, how your team responds today, and where inquiries are getting delayed or missed.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Strategy",
    description:
      "We design the lead-handling workflow around your qualification process, follow-up needs, booking flow, and existing tools.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Build",
    description:
      "We build and connect the system so new leads can be responded to, qualified, followed up with, and moved toward the right next step.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    description:
      "We test the workflow, verify each connection, and deploy the system so it fits into the way your team already works.",
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "Optimize",
    description:
      "Once the system is running, we identify opportunities to refine conversations, follow-ups, routing, and the overall lead-handling workflow.",
  },
];

const EASE = "cubic-bezier(0.22,1,0.36,1)";

export function ProcessSection() {
  return (
    <SectionReveal>
      <section
        id="process"
        aria-labelledby="process-heading"
        className="section-glow relative overflow-hidden bg-background py-24 sm:py-32 lg:py-36"
      >
        {/* Ambient background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[700px] -translate-x-1/2 rounded-full bg-primary/[0.035] blur-[140px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
              Our Process
            </span>

            <h2
              id="process-heading"
              className="mt-4 text-balance text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl"
            >
              A system built around your workflow.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              We start with how your business handles leads today, then build
              the response, qualification, follow-up, and booking workflow
              around it.
            </p>
          </div>

          {/* Process */}
          <div className="relative">
            {/* Desktop connector */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-[10%] right-[10%] top-8 hidden h-px bg-gradient-to-r from-transparent via-white/[0.10] to-transparent lg:block"
            />

            <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:items-stretch lg:gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <li key={step.number} className="relative h-full">
                    <article
                      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:bg-white/[0.035] hover:shadow-[0_18px_42px_rgba(0,0,0,0.18)] sm:p-7 lg:text-center"
                      style={{
                        transitionTimingFunction: EASE,
                      }}
                    >
                      {/* Hover light */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(47,125,255,0.07),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        style={{
                          transitionTimingFunction: EASE,
                        }}
                      />

                      <div className="relative flex h-full flex-col">
                        {/* Icon + number */}
                        <div className="mb-6 flex items-center gap-4 lg:flex-col lg:gap-0">
                          <div className="relative">
                            <div
                              className="flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/[0.08] shadow-[0_8px_22px_rgba(47,125,255,0.07)] transition-all duration-500 group-hover:-translate-y-0.5 group-hover:border-primary/30 group-hover:bg-primary/[0.11]"
                              style={{
                                transitionTimingFunction: EASE,
                              }}
                            >
                              <Icon
                                className="h-7 w-7 text-primary transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2"
                                style={{
                                  transitionTimingFunction: EASE,
                                }}
                                aria-hidden="true"
                              />
                            </div>

                            {/* Step number */}
                            <div
                              aria-hidden="true"
                              className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border border-primary/20 bg-[#0B101B] text-[10px] font-semibold text-primary shadow-[0_6px_18px_rgba(47,125,255,0.12)]"
                            >
                              {step.number}
                            </div>
                          </div>

                          {/* Mobile step label */}
                          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary lg:hidden">
                            Step {step.number}
                          </span>
                        </div>

                        <h3 className="text-lg font-semibold tracking-tight text-white">
                          {step.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-white/55">
                          {step.description}
                        </p>
                      </div>
                    </article>

                    {/* Mobile connector */}
                    {index < steps.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="mx-auto mt-5 h-7 w-px bg-white/[0.08] sm:hidden"
                      />
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}