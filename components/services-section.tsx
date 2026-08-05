"use client";

import { useState } from "react";
import {
  Zap,
  Bot,
  Database,
  Calendar,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionReveal } from "@/components/section-reveal";

export function ServicesSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const services = [
    {
      icon: Zap,
      title: "Instant Lead Engagement",
      description:
        "Respond to every new inquiry within seconds using AI conversations that feel natural, helpful, and personalized.",
      features: [
        "Sub-5 second response time",
        "Personalized conversations",
        "Multi-channel engagement",
      ],
    },
    {
      icon: Bot,
      title: "AI-Assisted Follow-Ups",
      description:
        "Automated follow-up sequences that intelligently adapt based on lead intent and engagement.",
      features: [
        "Smart follow-up timing",
        "Behavior-based automation",
        "Personalized messaging",
      ],
    },
    {
      icon: Database,
      title: "CRM & Inbox Automation",
      description:
        "Keep every lead organized with automatic CRM updates, qualification, tagging, and inbox routing.",
      features: [
        "CRM synchronization",
        "Automatic lead scoring",
        "Smart inbox organization",
      ],
    },
    {
      icon: Calendar,
      title: "Appointment Booking",
      description:
        "Qualify prospects automatically and schedule meetings directly into your calendar without manual work.",
      features: [
        "Calendar integration",
        "Lead qualification",
        "Automated reminders",
      ],
    },
  ];

  return (
    <SectionReveal>
      <section
        id="services"
        className="relative overflow-hidden bg-[#05060A] py-28 sm:py-36"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(47,125,255,0.05),transparent_65%)]" />
          <div className="absolute left-0 top-1/3 h-[520px] w-[520px] rounded-full bg-primary/5 blur-[160px]" />
          <div className="absolute right-0 bottom-1/4 h-[460px] w-[460px] rounded-full bg-primary/5 blur-[150px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Our Services
            </span>

            <h2 className="mt-4 text-balance text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              Automation that works while you sleep
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/60">
              Everything you need to capture, qualify, nurture, and convert more
              leads—without adding more manual work.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
            {services.map((service) => (
              <Card
                key={service.title}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();

                  setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                  });
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:border-primary/25 hover:bg-white/[0.04] hover:shadow-[0_18px_44px_rgba(0,0,0,0.22)]"
              >
                <div
                  className="pointer-events-none absolute h-52 w-52 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    left: mousePosition.x - 104,
                    top: mousePosition.y - 104,
                  }}
                />

                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top_right,rgba(47,125,255,0.08),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <CardHeader className="relative pb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 shadow-[0_8px_22px_rgba(47,125,255,0.08)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:border-primary/35 group-hover:bg-primary/15">
                      <service.icon className="h-6 w-6 text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" />
                    </div>

                    <CardTitle className="text-xl font-semibold tracking-tight text-white">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="relative space-y-6">
                  <CardDescription className="text-base leading-8 text-white/60">
                    {service.description}
                  </CardDescription>

                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-white/55 transition-all duration-300 group-hover:translate-x-1"
                      >
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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