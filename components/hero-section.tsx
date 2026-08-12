"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Bell,
  Calendar,
  CheckCircle2,
  Database,
  Play,
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
    icon: Zap,
    label: "AI Responds Instantly",
    description: "The lead receives an immediate response",
  },
  {
    icon: CheckCircle2,
    label: "Lead Qualified",
    description: "AI identifies intent, fit, and readiness",
  },
  {
    icon: RefreshCw,
    label: "Follow-Up Automated",
    description: "The conversation keeps moving automatically",
  },
  {
    icon: Calendar,
    label: "Appointment Booked",
    description: "Ready prospects are guided to booking",
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

    const handleMotionPreference = () => {
      setReducedMotion(mediaQuery.matches);
    };

    handleMotionPreference();

    mediaQuery.addEventListener("change", handleMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", handleMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length);
    }, 1800);

    return () => window.clearInterval(interval);
  }, [reducedMotion]);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background pt-20"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(47,125,255,0.075),transparent_60%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[30%] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-primary/[0.07] blur-[110px] md:h-[600px] md:w-[600px] md:blur-[150px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* Hero copy */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/[0.03] px-4 py-2 shadow-[0_10px_26px_rgba(47,125,255,0.07)] backdrop-blur-xl">
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
                AI Lead Response &amp; Conversion System
              </span>
            </div>

            {/* Main heading */}
            <h1
              id="hero-heading"
              className="max-w-[760px] text-5xl font-extrabold leading-[0.96] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl xl:text-[78px]"
            >
              From New Lead
              <br />
              to Booked
              <br />
              <span className="text-primary">Appointment.</span>
            </h1>

            {/* Supporting copy */}
            <p className="mx-auto mt-8 max-w-[630px] text-lg leading-8 text-white/60 sm:text-xl lg:mx-0">
              Zyvoris responds to new leads instantly, qualifies them, follows
              up automatically, and helps ready prospects book an appointment —
              without your team chasing every inquiry manually.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Button
                asChild
                size="lg"
                className="group h-auto rounded-xl bg-primary px-8 py-6 text-base font-semibold text-white shadow-[0_12px_30px_rgba(47,125,255,0.22)] transition-all duration-500 hover:-translate-y-1 hover:bg-primary hover:shadow-[0_18px_38px_rgba(47,125,255,0.28)] active:translate-y-0 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
                    className="ml-2 h-5 w-5 transition-transform duration-500 group-hover:translate-x-1.5"
                    style={{ transitionTimingFunction: EASE }}
                    aria-hidden="true"
                  />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="group h-auto rounded-xl border border-white/10 bg-white/[0.03] px-8 py-6 text-white backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.05] focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                style={{ transitionTimingFunction: EASE }}
              >
                <a href="#process">
                  <Play
                    className="mr-2 h-4 w-4 transition-transform duration-500 group-hover:scale-105"
                    style={{ transitionTimingFunction: EASE }}
                    aria-hidden="true"
                  />
                  See How It Works
                </a>
              </Button>
            </div>

            {/* Supporting reassurance */}
            <p className="mt-6 text-sm text-white/40">
              Built around the way your business already handles new leads.
            </p>
          </div>

          {/* Workflow visualization */}
          <div className="relative w-full">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[40px] bg-primary/[0.02] blur-3xl"
            />

            <ol
              aria-label="Zyvoris lead handling workflow"
              className="relative space-y-3"
            >
              {workflowSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === index;
                const wasActive =
                  activeStep ===
                  (index - 1 + workflowSteps.length) %
                    workflowSteps.length;

                return (
                  <li key={step.label} className="relative">
                    {/* Workflow connector */}
                    {index < workflowSteps.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="absolute left-7 top-[68px] h-6 w-px overflow-hidden rounded-full bg-white/[0.08]"
                      >
                        <div
                          className={`absolute left-0 w-full bg-gradient-to-b from-primary via-primary/70 to-transparent transition-all duration-700 ${
                            isActive
                              ? "top-0 h-full opacity-100"
                              : wasActive
                                ? "top-full h-full opacity-0"
                                : "-top-full h-full opacity-0"
                          }`}
                          style={{ transitionTimingFunction: EASE }}
                        />
                      </div>
                    )}

                    {/* Workflow card */}
                    <div
                      className={`group relative overflow-hidden rounded-3xl border backdrop-blur-xl transition-all duration-500 ${
                        isActive
                          ? "border-primary/25 bg-white/[0.04] shadow-[0_12px_30px_rgba(47,125,255,0.09)]"
                          : "border-white/10 bg-white/[0.025] hover:-translate-y-0.5 hover:border-primary/20 hover:bg-white/[0.04] hover:shadow-[0_12px_26px_rgba(0,0,0,0.16)]"
                      }`}
                      style={{ transitionTimingFunction: EASE }}
                    >
                      <div
                        aria-hidden="true"
                        className={`absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top_right,rgba(47,125,255,0.075),transparent_60%)] transition-opacity duration-500 ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                      />

                      <div className="relative flex items-center gap-4 p-5">
                        {/* Icon */}
                        <div
                          className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border transition-all duration-500 ${
                            isActive
                              ? "border-primary/25 bg-primary/10 shadow-[0_8px_20px_rgba(47,125,255,0.10)]"
                              : "border-white/10 bg-primary/[0.04] group-hover:border-primary/25 group-hover:bg-primary/[0.08]"
                          }`}
                          style={{ transitionTimingFunction: EASE }}
                        >
                          <Icon
                            className={`h-5 w-5 text-primary transition-all duration-500 ${
                              isActive
                                ? "scale-105"
                                : "group-hover:scale-105 group-hover:rotate-2"
                            }`}
                            style={{ transitionTimingFunction: EASE }}
                            aria-hidden="true"
                          />
                        </div>

                        {/* Text */}
                        <div className="min-w-0 flex-1">
                          <h2 className="text-base font-semibold tracking-tight text-white sm:text-lg">
                            {step.label}
                          </h2>

                          <p className="mt-0.5 text-xs leading-5 text-white/50 sm:text-sm">
                            {step.description}
                          </p>
                        </div>

                        {/* Status */}
                        <div
                          aria-hidden="true"
                          className={`h-2.5 w-2.5 flex-shrink-0 rounded-full transition-all duration-500 ${
                            isActive
                              ? "bg-primary shadow-[0_0_12px_rgba(47,125,255,0.4)]"
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