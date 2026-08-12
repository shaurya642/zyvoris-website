"use client";

import {
  ArrowRight,
  Briefcase,
  Building2,
  Droplet,
  Hammer,
  Home,
  Stethoscope,
  Sun,
  Wrench,
  Zap,
} from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const CALENDLY_URL = "https://calendly.com/shaurya-zyvoris/30min";

const industries = [
  {
    icon: Hammer,
    title: "Roofing",
    description:
      "New estimate requests can sit unanswered while your team is on a job. Zyvoris responds to inquiries, qualifies the opportunity, and helps move ready homeowners toward an inspection.",
  },
  {
    icon: Wrench,
    title: "HVAC",
    description:
      "Service requests can arrive while technicians are busy. Zyvoris keeps the conversation moving by responding, collecting relevant details, and guiding qualified prospects toward booking.",
  },
  {
    icon: Droplet,
    title: "Plumbing",
    description:
      "Urgent inquiries need a fast response. Zyvoris helps acknowledge new requests immediately, gather the information your team needs, and keep follow-up from being forgotten.",
  },
  {
    icon: Zap,
    title: "Electrical",
    description:
      "New service inquiries should not depend on someone being available to respond. Zyvoris can handle initial conversations, qualify requests, and keep the next step moving.",
  },
  {
    icon: Sun,
    title: "Solar",
    description:
      "Solar inquiries often require qualification before a consultation makes sense. Zyvoris can collect relevant information, follow up with prospects, and help move qualified leads toward a meeting.",
  },
  {
    icon: Home,
    title: "Real Estate",
    description:
      "Buyer and seller inquiries can arrive at any hour. Zyvoris responds quickly, helps qualify intent, follows up consistently, and guides ready prospects toward an appointment.",
  },
  {
    icon: Briefcase,
    title: "Marketing Agencies",
    description:
      "Agency leads can get buried while the team is focused on client work. Zyvoris helps respond to new inquiries, qualify prospects, automate follow-up, and move conversations toward booked calls.",
  },
  {
    icon: Stethoscope,
    title: "Medical Clinics",
    description:
      "New patient inquiries require timely and consistent communication. Zyvoris can help handle initial lead conversations, collect relevant information, and guide appropriate inquiries toward scheduling.",
  },
  {
    icon: Building2,
    title: "Home Services",
    description:
      "From cleaning and remodeling to other local services, missed follow-ups can mean missed opportunities. Zyvoris connects incoming inquiries to a consistent response, qualification, follow-up, and booking workflow.",
  },
];

const EASE = "cubic-bezier(0.22,1,0.36,1)";

export function IndustriesSection() {
  return (
    <SectionReveal>
      <section
        id="industries"
        aria-labelledby="industries-heading"
        className="section-glow relative overflow-hidden bg-background py-24 sm:py-32 lg:py-36"
      >
        {/* Ambient background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.035] blur-[150px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
              Industries We Serve
            </span>

            <h2
              id="industries-heading"
              className="mt-4 text-balance text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl"
            >
              Built around the way your business handles leads.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              Whether you run a home service company, agency, clinic, or real
              estate business, Zyvoris connects new inquiries to a faster, more
              consistent lead-handling workflow.
            </p>
          </div>

          {/* Industry cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <article
                  key={industry.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:bg-white/[0.035] hover:shadow-[0_16px_40px_rgba(0,0,0,0.18)] sm:p-8"
                  style={{ transitionTimingFunction: EASE }}
                >
                  {/* Hover light */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top_right,rgba(47,125,255,0.07),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ transitionTimingFunction: EASE }}
                  />

                  <div className="relative">
                    {/* Icon */}
                    <div
                      className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/[0.08] shadow-[0_8px_24px_rgba(47,125,255,0.07)] transition-all duration-500 group-hover:-translate-y-0.5 group-hover:border-primary/30 group-hover:bg-primary/[0.11]"
                      style={{ transitionTimingFunction: EASE }}
                    >
                      <Icon
                        className="h-6 w-6 text-primary transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2"
                        style={{ transitionTimingFunction: EASE }}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold tracking-tight text-white">
                      {industry.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/55">
                      {industry.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Custom workflow CTA */}
          <div className="mx-auto mt-16 max-w-3xl sm:mt-20">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-8 text-center shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-2xl sm:p-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,125,255,0.065),transparent_60%)]"
              />

              <div className="relative">
                <div
                  aria-hidden="true"
                  className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/[0.08]"
                >
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>

                <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Don&apos;t see your industry?
                </h3>

                <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/55 sm:leading-8">
                  The workflow can be built around your existing lead sources,
                  qualification process, follow-up needs, and booking flow.
                </p>

                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book a Zyvoris strategy call"
                  className="group mt-7 inline-flex items-center rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(47,125,255,0.20)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(47,125,255,0.27)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  style={{ transitionTimingFunction: EASE }}
                >
                  Book a Strategy Call

                  <ArrowRight
                    className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5"
                    style={{ transitionTimingFunction: EASE }}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}