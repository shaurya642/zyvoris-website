"use client";

import {
  Bell,
  CalendarCheck,
  ClipboardCheck,
  PhoneIncoming,
  RefreshCw,
  Zap,
} from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const steps = [
  {
    number: "01",
    icon: PhoneIncoming,
    title: "Lead Comes In",
    description:
      "A new digital lead arrives or a call comes in. ZYVORIS captures the opportunity so it can enter the right response workflow.",
  },
  {
    number: "02",
    icon: Zap,
    title: "Fast Response",
    description:
      "New leads receive a timely response, while missed calls can trigger an automatic text-back to restart the conversation.",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Lead Qualified",
    description:
      "The system evaluates the information already provided and gathers additional details through conversation when needed.",
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Follow-Up",
    description:
      "Qualified prospects who have not booked continue receiving appropriate follow-up instead of being left behind.",
  },
  {
    number: "05",
    icon: CalendarCheck,
    title: "Appointment Booked",
    description:
      "Ready prospects are guided toward booking, while lead details and important status updates can reach your CRM and team.",
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
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-primary/[0.025] blur-[110px] max-sm:h-[260px] max-sm:w-[360px] max-sm:blur-[70px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
              How It Works
            </span>

            <h2
              id="process-heading"
              className="mt-4 text-balance text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl"
            >
              From new lead to booked appointment.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              ZYVORIS connects digital leads and missed calls to fast response,
              qualification, follow-up, booking, and lead visibility in one
              connected workflow.
            </p>
          </div>

          <div className="relative">
            <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:items-stretch lg:gap-4">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <li key={step.number} className="relative h-full">
                    <article
                      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-[transform,border-color,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-white/[0.035] hover:shadow-[0_18px_42px_rgba(0,0,0,0.16)] sm:p-7 lg:text-center max-sm:backdrop-blur-none"
                      style={{
                        transitionTimingFunction: EASE,
                      }}
                    >
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(47,125,255,0.06),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />

                      <div className="relative flex h-full flex-col">
                        <div className="mb-6 flex items-center gap-4 lg:flex-col lg:gap-0">
                          <div className="relative">
                            <div
                              className="flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/[0.08] shadow-[0_8px_22px_rgba(47,125,255,0.06)] transition-[transform,border-color,background-color] duration-300 group-hover:-translate-y-0.5 group-hover:border-primary/30 group-hover:bg-primary/[0.11]"
                              style={{
                                transitionTimingFunction: EASE,
                              }}
                            >
                              <Icon
                                className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-105"
                                style={{
                                  transitionTimingFunction: EASE,
                                }}
                                aria-hidden="true"
                              />
                            </div>

                            <div
                              aria-hidden="true"
                              className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border border-primary/20 bg-[#0B101B] text-[10px] font-semibold text-primary shadow-[0_6px_18px_rgba(47,125,255,0.10)]"
                            >
                              {step.number}
                            </div>
                          </div>

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
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="mx-auto mt-12 max-w-3xl text-center sm:mt-14">
            <div className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm font-medium text-white/40">
              <span className="text-white/60">Digital Leads</span>
              <span aria-hidden="true" className="text-primary/50">
                →
              </span>
              <span className="text-white/60">Missed Calls</span>
              <span aria-hidden="true" className="text-primary/50">
                →
              </span>
              <span className="text-white/60">Response</span>
              <span aria-hidden="true" className="text-primary/50">
                →
              </span>
              <span className="text-white/60">Qualification</span>
              <span aria-hidden="true" className="text-primary/50">
                →
              </span>
              <span className="text-white/60">Follow-Up</span>
              <span aria-hidden="true" className="text-primary/50">
                →
              </span>
              <span className="text-white/60">Booking</span>
              <span aria-hidden="true" className="text-primary/50">
                →
              </span>
              <span className="text-white/60">CRM / Team</span>
            </div>

            <p className="mt-4 text-sm leading-7 text-white/30">
              One connected system designed around the way your HVAC company
              already handles leads.
            </p>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}