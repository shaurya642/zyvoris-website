"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Play,
  Zap,
  CheckCircle2,
  Calendar,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDLY_URL = "https://calendly.com/shaurya-zyvoris/30min";

const workflowSteps = [
  {
    icon: Zap,
    label: "New Lead",
    description: "Inquiry received instantly",
  },
  {
    icon: Zap,
    label: "AI Responds Instantly",
    description: "Replies within seconds",
  },
  {
    icon: CheckCircle2,
    label: "Lead Qualified",
    description: "AI identifies serious prospects",
  },
  {
    icon: Calendar,
    label: "Appointment Booked",
    description: "Meeting scheduled automatically",
  },
  {
    icon: Bell,
    label: "Owner Notified",
    description: "Instant notification delivered",
  },
];

export function HeroSection() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(47,125,255,0.08),transparent_60%)]" />

      <div className="absolute left-1/2 top-[32%] h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-primary/10 blur-[90px] md:h-[640px] md:w-[640px] md:blur-[150px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="text-center lg:text-left">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/[0.03] px-5 py-2 backdrop-blur-xl shadow-[0_10px_26px_rgba(47,125,255,0.08)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>

              <span className="text-sm font-medium tracking-wide text-primary">
                AI-Powered Automation
              </span>
            </div>

            <h1 className="max-w-[720px] text-5xl font-extrabold leading-[0.94] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl xl:text-[82px]">
              Never Miss
              <br />
              Another Lead
              <span className="text-primary"> Again.</span>
            </h1>

            <p className="mx-auto mt-8 max-w-[620px] text-lg leading-8 text-white/60 sm:text-xl lg:mx-0">
              AI-powered lead qualification, instant follow-ups, and automated
              appointment booking—so every new lead gets a response in seconds,
              not hours.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Button
                asChild
                size="lg"
                className="group h-auto rounded-xl bg-primary px-8 py-6 text-base font-semibold text-white shadow-[0_12px_30px_rgba(47,125,255,0.22)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-primary hover:shadow-[0_18px_38px_rgba(47,125,255,0.30)] active:translate-y-0"
              >
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Book a Strategy Call

                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-500 group-hover:translate-x-1.5" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-auto rounded-xl border border-white/10 bg-white/[0.03] px-8 py-6 text-white backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.05]"
              >
                <a href="#process">
                  <Play className="mr-2 h-4 w-4" />
                  See How It Works
                </a>
              </Button>
            </div>

            <p className="mt-6 text-sm text-white/45">
              Built for service businesses that value fast response times.
            </p>
          </div>

          <div className="relative w-full">
            <div className="absolute inset-0 rounded-[40px] bg-primary/[0.025] blur-3xl" />

            <div className="relative space-y-4">
              {workflowSteps.map((step, index) => {
                const Icon = step.icon;

                const isActive = activeStep === index;

                const wasActive =
                  activeStep ===
                  (index - 1 + workflowSteps.length) % workflowSteps.length;

                return (
                  <div key={index} className="relative">
                    {index < workflowSteps.length - 1 && (
                      <div className="absolute left-7 top-[74px] h-8 w-px overflow-hidden rounded-full bg-white/10">
                        <div
                          className={`absolute left-0 w-full bg-gradient-to-b from-primary via-primary/80 to-transparent transition-all duration-700 ${
                            isActive
                              ? "top-0 h-full opacity-100"
                              : wasActive
                              ? "top-full h-full opacity-0"
                              : "-top-full h-full opacity-0"
                          }`}
                        />
                      </div>
                    )}

                    <div
                      style={{ willChange: "transform, opacity" }}
                      className={`group relative overflow-hidden rounded-3xl border backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isActive
                          ? "border-primary/25 bg-white/[0.04] shadow-[0_12px_30px_rgba(47,125,255,0.10)]"
                          : "border-white/10 bg-white/[0.03] hover:-translate-y-1 hover:border-primary/20 hover:bg-white/[0.04] hover:shadow-[0_12px_26px_rgba(0,0,0,0.18)]"
                      }`}
                    >
                      <div
                        className={`absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top_right,rgba(47,125,255,0.08),transparent_60%)] transition-opacity duration-500 ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                      />

                      <div className="relative flex items-center gap-4 p-6">
                        <div
                          className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            isActive
                              ? "border-primary/25 bg-primary/10 shadow-[0_8px_20px_rgba(47,125,255,0.10)]"
                              : "border-white/10 bg-primary/5 group-hover:border-primary/25 group-hover:bg-primary/10"
                          }`}
                        >
                          <Icon
                            className={`h-6 w-6 text-primary transition-all duration-500 ${
                              isActive
                                ? "scale-105"
                                : "group-hover:scale-105 group-hover:rotate-2"
                            }`}
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-lg font-semibold tracking-tight text-white">
                            {step.label}
                          </h3>

                          <p className="mt-1 text-sm leading-6 text-white/60">
                            {step.description}
                          </p>
                        </div>

                        <div
                          className={`h-2.5 w-2.5 rounded-full transition-all duration-500 ${
                            isActive
                              ? "bg-primary shadow-[0_0_12px_rgba(47,125,255,0.45)]"
                              : "bg-white/15"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-[36px] border border-white/[0.03]" />
          </div>
        </div>
      </div>
    </section>
  );
}