"use client";

import {
  ArrowRight,
  ClipboardCheck,
  PhoneMissed,
  CalendarCheck,
  MessageSquareText,
  RefreshCw,
  Bell,
} from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const CALENDLY_URL = "https://calendly.com/shaurya-zyvoris/30min";

const workflowAreas = [
  {
    icon: MessageSquareText,
    title: "PI Inquiry Response",
    description:
      "Respond quickly to new personal injury inquiries while your attorneys and intake team are focused on existing matters.",
    featured: true,
  },
  {
    icon: PhoneMissed,
    title: "Missed-Call Recovery",
    description:
      "Reconnect with callers when your team cannot answer, giving missed opportunities a path back into the conversation.",
    featured: true,
  },
  {
    icon: ClipboardCheck,
    title: "Intake & Qualification",
    description:
      "Gather relevant information and apply your firm's defined intake and qualification criteria to incoming prospects.",
  },
  {
    icon: RefreshCw,
    title: "Consistent Follow-Up",
    description:
      "Keep following up with qualified prospects who have not booked so promising consultation opportunities do not go cold.",
  },
  {
    icon: CalendarCheck,
    title: "Consultation Booking",
    description:
      "Move qualified prospects toward scheduling when the conversation reaches the right point.",
  },
  {
    icon: Bell,
    title: "CRM & Team Notification",
    description:
      "Keep inquiry details and status organized while making important events visible to your intake team and attorneys.",
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
          className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.025] blur-[110px] max-sm:h-[260px] max-sm:w-[260px] max-sm:blur-[70px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
              Built for Personal Injury Firms
            </span>

            <h2
              id="industries-heading"
              className="mt-4 text-balance text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl"
            >
              Built around how PI firms actually handle inquiries.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              ZYVORIS connects digital inquiries and missed calls to a
              consistent response, intake, qualification, follow-up,
              consultation booking, and team notification workflow.
            </p>
          </div>

          {/* PI workflow areas */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {workflowAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className={`group relative overflow-hidden rounded-3xl border p-7 transition-all duration-300 sm:p-8 ${
                    area.featured
                      ? "border-primary/25 bg-primary/[0.045] shadow-[0_18px_50px_rgba(47,125,255,0.07)]"
                      : "border-white/10 bg-white/[0.025] hover:-translate-y-1 hover:border-primary/20 hover:bg-white/[0.035] hover:shadow-[0_16px_40px_rgba(0,0,0,0.16)]"
                  }`}
                  style={{
                    transitionTimingFunction: EASE,
                  }}
                >
                  {/* Card light */}
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300 ${
                      area.featured
                        ? "bg-[radial-gradient(circle_at_top_right,rgba(47,125,255,0.065),transparent_60%)] opacity-100"
                        : "opacity-0 group-hover:bg-[radial-gradient(circle_at_top_right,rgba(47,125,255,0.055),transparent_60%)] group-hover:opacity-100"
                    }`}
                  />

                  <div className="relative">
                    {/* Icon */}
                    <div
                      className={`mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 ${
                        area.featured
                          ? "border-primary/30 bg-primary/[0.11] shadow-[0_8px_20px_rgba(47,125,255,0.08)]"
                          : "border-primary/20 bg-primary/[0.08] shadow-[0_8px_20px_rgba(47,125,255,0.05)] group-hover:-translate-y-0.5 group-hover:border-primary/30 group-hover:bg-primary/[0.11]"
                      }`}
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

                    {/* Content */}
                    <div className="max-w-xl">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-semibold tracking-tight text-white">
                          {area.title}
                        </h3>

                        {area.featured && (
                          <span className="rounded-full border border-primary/20 bg-primary/[0.08] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                            Core
                          </span>
                        )}
                      </div>

                      <p className="mt-3 text-sm leading-7 text-white/55">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Workflow CTA */}
          <div className="mx-auto mt-16 max-w-3xl sm:mt-20">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-8 text-center shadow-[0_18px_50px_rgba(0,0,0,0.16)] backdrop-blur-xl max-sm:backdrop-blur-none sm:p-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,125,255,0.055),transparent_60%)]"
              />

              <div className="relative">
                <div
                  aria-hidden="true"
                  className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/[0.08]"
                >
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>

                <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Your PI inquiry workflow, connected end to end.
                </h3>

                <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/55 sm:leading-8">
                  From the moment a digital inquiry arrives or a call is
                  missed, ZYVORIS connects response, intake, qualification,
                  follow-up, consultation booking, CRM updates, and team
                  notifications into one system.
                </p>

                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book a ZYVORIS strategy call"
                  className="group mt-7 inline-flex items-center rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(47,125,255,0.20)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(47,125,255,0.25)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  style={{
                    transitionTimingFunction: EASE,
                  }}
                >
                  Book a Strategy Call

                  <ArrowRight
                    className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                    style={{
                      transitionTimingFunction: EASE,
                    }}
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