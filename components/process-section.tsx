"use client";

import { SectionReveal } from "@/components/section-reveal";
import {
  Search,
  Cpu,
  Wrench,
  Rocket,
  TrendingUp,
} from "lucide-react";

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
        "We design a custom AI automation blueprint around your business, workflows, and goals.",
    },
    {
      number: "03",
      icon: Wrench,
      title: "Build",
      description:
        "Your automation system is built, integrated, and connected with the tools you already use.",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch",
      description:
        "Everything is tested, refined, and deployed to ensure reliable performance from day one.",
    },
    {
      number: "05",
      icon: TrendingUp,
      title: "Optimize",
      description:
        "We continuously improve your system using real conversations, data, and business results.",
    },
  ];

  return (
    <SectionReveal>
      <section
        id="process"
        className="relative overflow-hidden bg-[#05060A] py-28 sm:py-36"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(47,125,255,0.05),transparent_65%)]" />
          <div className="absolute left-1/2 top-0 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-primary/5 blur-[160px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Our Process
            </span>

            <h2 className="mt-4 text-balance text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              From chaos to automated clarity
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/60">
              Every automation is built using a proven process focused on speed,
              reliability, and measurable business growth.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-center backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:border-primary/25 hover:bg-white/[0.04] hover:shadow-[0_18px_42px_rgba(0,0,0,0.22)]"
                >
                  <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(47,125,255,0.08),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex flex-col items-center">
                    <div className="relative mb-6">
                      <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-primary/20 bg-primary/10 shadow-[0_8px_22px_rgba(47,125,255,0.08)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:border-primary/35 group-hover:bg-primary/15">
                        <step.icon className="h-8 w-8 text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" />
                      </div>

                      <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 bg-[#0E1320] text-[11px] font-semibold text-primary shadow-[0_6px_18px_rgba(47,125,255,0.15)]">
                        {step.number}
                      </div>
                    </div>

                    <h3 className="mb-3 text-lg font-semibold tracking-tight text-white">
                      {step.title}
                    </h3>

                    <p className="text-sm leading-7 text-white/60">
                      {step.description}
                    </p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="mx-auto mt-7 h-8 w-px bg-white/10 lg:hidden" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}