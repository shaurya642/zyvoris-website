"use client";

import {
  ArrowRight,
  Bot,
  Calendar,
  Database,
  PhoneMissed,
  Zap,
} from "lucide-react";
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
    title: "Instant Lead Response",
    description:
      "Respond to new inquiries quickly, even when your team is busy on jobs. Conversations can be tailored to the lead source, context, and information already provided.",
    features: [
      "Immediate lead response",
      "Personalized conversations",
      "Lead information capture",
    ],
  },
  {
    icon: PhoneMissed,
    title: "Missed-Call Recovery",
    description:
      "Turn missed calls into follow-up opportunities. When your team cannot answer, the workflow can help reconnect with the caller and move the conversation toward the right next step.",
    features: [
      "Missed-call follow-up",
      "Fast re-engagement",
      "Opportunity recovery",
    ],
  },
  {
    icon: Bot,
    title: "Lead Qualification & Follow-Up",
    description:
      "Evaluate incoming leads using the information they provide, gather additional details when needed, and keep following up with qualified prospects who haven’t booked.",
    features: [
      "Qualification questions",
      "Automated follow-up sequences",
      "Context-aware messaging",
    ],
  },
  {
    icon: Calendar,
    title: "Appointment Booking",
    description:
      "When a prospect is ready, guide them toward scheduling without relying on your team to manually coordinate every appointment.",
    features: [
      "Calendar integration",
      "Qualification-based booking",
      "Automated scheduling flow",
    ],
  },
  {
    icon: Database,
    title: "CRM & Lead Management",
    description:
      "Keep conversations, qualification details, statuses, and lead activity organized inside the systems your team already uses.",
    features: [
      "CRM synchronization",
      "Lead status updates",
      "Structured lead information",
    ],
  },
];

const EASE = "cubic-bezier(0.22,1,0.36,1)";

export function ServicesSection() {
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
              Everything between a new lead and a booked appointment.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              From the first response to qualification, missed-call recovery,
              follow-up, booking, and lead management, Zyvoris connects the
              pieces into one workflow built around your business.
            </p>
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isPrimary = index === 0 || index === 1;

              return (
                <Card
                  key={service.title}
                  onMouseMove={(event) => {
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
                  className={`group relative overflow-hidden rounded-3xl backdrop-blur-xl transition-all duration-500 ${
                    isPrimary
                      ? "border-primary/20 bg-primary/[0.035] hover:border-primary/30 hover:bg-primary/[0.045] hover:shadow-[0_18px_44px_rgba(47,125,255,0.08)] lg:col-span-3"
                      : "border-white/10 bg-white/[0.025] hover:-translate-y-1 hover:border-primary/20 hover:bg-white/[0.035] hover:shadow-[0_18px_44px_rgba(0,0,0,0.18)] lg:col-span-2"
                  }`}
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
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border transition-all duration-500 ${
                          isPrimary
                            ? "border-primary/25 bg-primary/[0.10] shadow-[0_8px_22px_rgba(47,125,255,0.08)]"
                            : "border-primary/20 bg-primary/[0.08] shadow-[0_8px_22px_rgba(47,125,255,0.07)]"
                        } group-hover:-translate-y-0.5 group-hover:border-primary/30 group-hover:bg-primary/[0.11]`}
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

          {/* Bottom positioning statement */}
          <div className="mx-auto mt-12 max-w-2xl text-center sm:mt-14">
            <p className="text-sm leading-7 text-white/35">
              Response, qualification, follow-up, booking, and lead management
              work together as one system — not as disconnected tools.
            </p>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}