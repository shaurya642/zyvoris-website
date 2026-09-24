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
    title: "Fast Inquiry Response",
    description:
      "Respond to new personal injury inquiries quickly, even when your attorneys or intake team are occupied. Conversations can use the inquiry source, context, and information already provided.",
    features: [
      "Immediate inquiry response",
      "Inquiry-source-aware conversations",
      "Prospective client information capture",
    ],
  },
  {
    icon: PhoneMissed,
    title: "Missed-Call Recovery",
    description:
      "When your team cannot answer a call, the system can automatically reconnect with the caller and create a path toward intake, qualification, and consultation booking.",
    features: [
      "Automatic text-back",
      "Missed-call re-engagement",
      "Opportunity recovery",
    ],
  },
  {
    icon: Bot,
    title: "Intake, Qualification & Follow-Up",
    description:
      "Gather relevant information, apply your firm's defined intake and qualification criteria, and continue following up with qualified prospects who have not booked.",
    features: [
      "Intake questions",
      "Firm-defined qualification criteria",
      "Automated follow-up sequences",
    ],
  },
  {
    icon: Calendar,
    title: "Consultation Booking",
    description:
      "When a qualified prospect is ready, guide them toward scheduling without relying on your intake team to manually coordinate every consultation.",
    features: [
      "Calendar integration",
      "Qualification-based booking",
      "Automated scheduling flow",
    ],
  },
  {
    icon: Database,
    title: "CRM & Inquiry Management",
    description:
      "Keep conversations, intake details, statuses, and inquiry activity organized inside the systems your firm already uses.",
    features: [
      "CRM synchronization",
      "Inquiry status updates",
      "Structured inquiry information",
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
          className="pointer-events-none absolute left-0 top-1/3 h-[320px] w-[320px] rounded-full bg-primary/[0.02] blur-[100px] max-sm:h-[220px] max-sm:w-[220px] max-sm:blur-[70px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-1/4 right-0 h-[300px] w-[300px] rounded-full bg-primary/[0.02] blur-[90px] max-sm:h-[200px] max-sm:w-[200px] max-sm:blur-[60px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
              What ZYVORIS Handles
            </span>

            <h2
              id="services-heading"
              className="mt-4 text-balance text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl"
            >
              Everything between a new PI inquiry and a qualified consultation.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              ZYVORIS connects fast response, missed-call recovery, intake,
              qualification, follow-up, consultation booking, and inquiry
              management into one workflow built around how your PI firm
              already handles inquiries.
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
                  className={`group relative overflow-hidden rounded-3xl border transition-[transform,border-color,background-color,box-shadow] duration-300 max-sm:backdrop-blur-none ${
                    isPrimary
                      ? "border-primary/20 bg-primary/[0.035] hover:border-primary/30 hover:bg-primary/[0.045] hover:shadow-[0_18px_44px_rgba(47,125,255,0.07)] lg:col-span-3"
                      : "border-white/10 bg-white/[0.025] hover:-translate-y-1 hover:border-primary/20 hover:bg-white/[0.035] hover:shadow-[0_18px_44px_rgba(0,0,0,0.16)] lg:col-span-2"
                  }`}
                  style={{
                    transitionTimingFunction: EASE,
                  }}
                >
                  {/* Card ambient light */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top_right,rgba(47,125,255,0.06),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  <CardHeader className="relative pb-4">
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border transition-[transform,border-color,background-color] duration-300 ${
                          isPrimary
                            ? "border-primary/25 bg-primary/[0.10] shadow-[0_8px_22px_rgba(47,125,255,0.07)]"
                            : "border-primary/20 bg-primary/[0.08] shadow-[0_8px_22px_rgba(47,125,255,0.06)]"
                        } group-hover:-translate-y-0.5 group-hover:border-primary/30 group-hover:bg-primary/[0.11]`}
                        style={{
                          transitionTimingFunction: EASE,
                        }}
                      >
                        <Icon
                          className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-105"
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
                          className="flex items-center gap-3 text-sm text-white/50 transition-transform duration-200 group-hover:translate-x-0.5"
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
              Digital inquiries and missed calls flow into the same system:
              respond quickly, support intake, qualify using your firm&apos;s
              criteria, follow up, move qualified prospects toward
              consultation, and keep your team informed.
            </p>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}