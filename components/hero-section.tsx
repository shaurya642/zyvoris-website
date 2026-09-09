"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Bell,
  Calendar,
  CheckCircle2,
  Database,
  Play,
  PhoneMissed,
  RefreshCw,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDLY_URL = "https://calendly.com/shaurya-zyvoris/30min";

const workflowSteps = [
  {
    icon: Zap,
    label: "New Lead",
    description: "A new inquiry enters your business",
  },
  {
    icon: PhoneMissed,
    label: "Missed Call Recovered",
    description: "Missed-call opportunities get a response",
  },
  {
    icon: Zap,
    label: "Fast Response",
    description: "Leads receive an immediate response",
  },
  {
    icon: CheckCircle2,
    label: "Lead Qualified",
    description: "Intent, fit, and readiness are identified",
  },
  {
    icon: RefreshCw,
    label: "Follow-Up",
    description: "Unbooked prospects are followed up with consistently",
  },
  {
    icon: Calendar,
    label: "Appointment Booked",
    description: "Ready prospects are guided toward booking",
  },
  {
    icon: Database,
    label: "CRM Updated",
    description: "Lead details and status stay organized",
  },
  {
    icon: Bell,
    label: "Team Notified",
    description: "Important lead events reach your team",
  },
];

const EASE = "cubic-bezier(0.22,1,0.36,1)";

export function HeroSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const updateMotionPreference = () => {
      setReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();

    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveStep((previous) => {
        return (previous + 1) % workflowSteps.length;
      });
    }, 2200);

    return () => {
      window.clearInterval(interval);
    };
  }, [reducedMotion]);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-background pt-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_50%_25%,rgba(47,125,255,0.065),transparent_62%)] max-sm:h-[420px] max-sm:bg-[radial-gradient(circle_at_50%_25%,rgba(47,125,255,0.045),transparent_64%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[30%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/[0.055] blur-[140px] max-sm:h-[260px] max-sm:w-[260px] max-sm:bg-primary/[0.035] max-sm:blur-[80px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div className="text-center lg:text-left">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/[0.03] px-4 py-2 shadow-[0_10px_26px_rgba(47,125,255,0.07)] backdrop-blur-xl max-sm:backdrop-blur-none">
              <span
                aria-hidden="true"
                className="relative flex h-2 w-2"
              >
                {!reducedMotion && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                )}

                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>

              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary sm:text-sm">
                HVAC Lead Conversion System
              </span>
            </div>

            <h1
              id="hero-heading"
              className="max-w-[760px] text-5xl font-extrabold leading-[0.96] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl xl:text-[78px]"
            >
              Turn More HVAC
              <br />
              Leads Into
              <br />
              <span className="text-primary">Booked Jobs.</span>
            </h1>

            <p className="mx-auto mt-8 max-w-[630px] text-lg leading-8 text-white/60 sm:text-xl lg:mx-0">
              ZYVORIS helps HVAC companies respond faster, qualify new leads,
              follow up consistently, recover missed-call opportunities, and
              move ready prospects toward booked appointments.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Button
                asChild
                size="lg"
                className="group h-auto rounded-xl bg-primary px-8 py-6 text-base font-semibold text-white shadow-[0_12px_30px_rgba(47,125,255,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:shadow-[0_18px_38px_rgba(47,125,255,0.28)] active:translate-y-0 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                style={{ transitionTimingFunction: EASE }}
              >
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book a Zyvoris strategy call"
                  className="flex items-center"
                >
                  Book a Strategy Call

                  <ArrowRight
                    className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5"
                    style={{ transitionTimingFunction: EASE }}
                    aria-hidden="true"
                  />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="group h-auto rounded-xl border border-white/10 bg-white/[0.03] px-8 py-6 text-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.05] focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background max-sm:backdrop-blur-none sm:backdrop-blur-xl"
                style={{ transitionTimingFunction: EASE }}
              >
                <a href="#process" className="flex items-center">
                  <Play
                    className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-105"
                    style={{ transitionTimingFunction: EASE }}
                    aria-hidden="true"
                  />
                  See How It Works
                </a>
              </Button>
            </div>

            <p className="mt-6 text-sm text-white/40">
              Built around the way your HVAC company already handles leads.
            </p>
          </div>

          <div className="relative w-full">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[40px] bg-primary/[0.015] blur-2xl max-sm:blur-none"
            />

            <ol
              aria-label="ZYVORIS lead response and conversion workflow"
              className="relative space-y-3"
            >
              {workflowSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === index;

                return (
                  <li key={step.label} className="relative">
                    <div
                      className={`group relative overflow-hidden rounded-3xl border transition-all duration-300 ${
                        isActive
                          ? "border-primary/25 bg-white/[0.04] shadow-[0_10px_26px_rgba(47,125,255,0.07)]"
                          : "border-white/10 bg-white/[0.025] hover:-translate-y-0.5 hover:border-primary/20 hover:bg-white/[0.04] hover:shadow-[0_10px_24px_rgba(0,0,0,0.14)]"
                      }`}
                      style={{
                        transitionTimingFunction: EASE,
                      }}
                    >
                      <div
                        aria-hidden="true"
                        className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${
                          isActive
                            ? "bg-[radial-gradient(circle_at_top_right,rgba(47,125,255,0.055),transparent_60%)] opacity-100"
                            : "opacity-0"
                        }`}
                      />

                      <div className="relative flex items-center gap-4 p-5">
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 ${
                            isActive
                              ? "border-primary/25 bg-primary/10 shadow-[0_6px_16px_rgba(47,125,255,0.08)]"
                              : "border-white/10 bg-primary/[0.04] group-hover:border-primary/25 group-hover:bg-primary/[0.08]"
                          }`}
                          style={{
                            transitionTimingFunction: EASE,
                          }}
                        >
                          <Icon
                            className={`h-5 w-5 text-primary transition-transform duration-300 ${
                              isActive
                                ? "scale-105"
                                : "group-hover:scale-105 group-hover:rotate-2"
                            }`}
                            style={{
                              transitionTimingFunction: EASE,
                            }}
                            aria-hidden="true"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h2 className="text-base font-semibold tracking-tight text-white sm:text-lg">
                            {step.label}
                          </h2>

                          <p className="mt-0.5 text-xs leading-5 text-white/50 sm:text-sm">
                            {step.description}
                          </p>
                        </div>

                        <div
                          aria-hidden="true"
                          className={`h-2.5 w-2.5 shrink-0 rounded-full transition-all duration-300 ${
                            isActive
                              ? "bg-primary shadow-[0_0_10px_rgba(47,125,255,0.32)]"
                              : "bg-white/15"
                          }`}
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[36px] border border-white/[0.025]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}