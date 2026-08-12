"use client";

import { ArrowRight, Bot, Calendar, Database, Zap } from "lucide-react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionReveal } from "@/components/section-reveal";

const services = [
  {
    icon: Zap,
    title: "Instant Lead Engagement",
    description:
      "Respond to new inquiries immediately so prospects aren't left waiting while your team is busy. Conversations can be tailored to the source, context, and information already provided by the lead.",
    features: [
      "Immediate lead response",
      "Personalized conversations",
      "Lead information capture",
    ],
  },
  {
    icon: Bot,
    title: "AI-Assisted Follow-Ups",
    description:
      "Keep conversations moving after the first response with follow-up workflows that help prevent qualified opportunities from going cold or getting forgotten.",
    features: [
      "Automated follow-up sequences",
      "Context-aware messaging",
      "Consistent lead nurturing",
    ],
  },
  {
    icon: Database,
    title: "CRM & Lead Management",
    description:
      "Keep lead information organized as conversations happen. Qualification details, statuses, and important lead activity can be routed back into the systems your team already uses.",
    features: [
      "CRM synchronization",
      "Lead status updates",
      "Structured lead information",
    ],
  },
  {
    icon: Calendar,
    title: "Appointment Booking",
    description:
      "When a lead is ready for the next step, the system can guide them toward scheduling instead of relying on your team to manually coordinate every appointment.",
    features: [
      "Calendar integration",
      "Qualification-based booking",
      "Automated scheduling flow",
    ],
  },
];

const EASE = "cubic-bezier(0.22,1,0.36,1)";

export function ServicesSection() {
  const [reducedMotion, setReducedMotion] = useState(false);

  return (
    <SectionReveal>
      <section
        id="services"
        aria-labelledby="services-heading"
        className="section-glow relative overflow-hidden bg-background py-24 sm:py-32 lg:py-36"
      >
        {/* Ambient background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-1/3 h-[420px] w-[420px] rounded-full bg-primary/[0.025] blur-[140px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-1/4 right-0 h-[380px] w-[380px] rounded-full bg-primary/[0.025] blur-[130px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
              What Zyvoris Handles
            </span>

            <h2
              id="services-heading"
              className="mt-4 text-balance text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl"
            >
              Everything between a new lead and the next step.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              Zyvoris connects response, qualification, follow-up, lead
              management, and appointment booking into one workflow built
              around how your business already operates.
            </p>
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Card
                  key={service.title}
                  onMouseMove={(event) => {
                    if (reducedMotion) return;

                    const card = event.currentTarget;

                    const rect = card.getBoundingClientRect();

                    card.style.setProperty(
                      "--mouse-x",
                      `${event.clientX - rect.left}px`,
                    );

                    card.style.setProperty(
                      "--mouse-y",
                      `${event.clientY - rect.top}px`,
                    );
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:bg-white/[0.035] hover:shadow-[0_18px_44px_rgba(0,0,0,0.18)]"
                  style={{
                    transitionTimingFunction: EASE,
                  }}
                >
                  {/* Cursor-following glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-[var(--mouse-x,50%)] top-[var(--mouse-y,50%)] h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.07] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      transitionTimingFunction: EASE,
                    }}
                  />

                  {/* Card ambient light */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top_right,rgba(47,125,255,0.065),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      transitionTimingFunction: EASE,
                    }}
                  />

                  <CardHeader className="relative pb-4">
                    <div className="flex items-center gap-4">
                      <div
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/[0.08] shadow-[0_8px_22px_rgba(47,125,255,0.07)] transition-all duration-500 group-hover:-translate-y-0.5 group-hover:border-primary/30 group-hover:bg-primary/[0.11]"
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

                      <CardTitle className="text-xl font-semibold tracking-tight text-white">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent className="relative space-y-6">
                    <CardDescription className="text-base leading-7 text-white/55">
                      {service.description}
                    </CardDescription>

                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm text-white/50 transition-transform duration-300 group-hover:translate-x-0.5"
                          style={{
                            transitionTimingFunction: EASE,
                          }}
                        >
                          <ArrowRight
                            className="h-3.5 w-3.5 shrink-0 text-primary"
                            aria-hidden="true"
                          />

                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
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