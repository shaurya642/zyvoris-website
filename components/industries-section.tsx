"use client";

import {
  Hammer,
  Wrench,
  Droplet,
  Zap,
  Sun,
  Home,
  Briefcase,
  Stethoscope,
  Building2,
  ArrowRight,
} from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const CALENDLY_URL = "https://calendly.com/shaurya-zyvoris/30min";

export function IndustriesSection() {
  const industries = [
    {
      icon: Hammer,
      title: "Roofing",
      description:
        "Capture every roof repair and replacement inquiry instantly. AI responds 24/7, qualifies homeowners, and books inspections automatically.",
    },
    {
      icon: Wrench,
      title: "HVAC",
      description:
        "Convert emergency calls and seasonal maintenance requests into scheduled appointments without manual follow-up.",
    },
    {
      icon: Droplet,
      title: "Plumbing",
      description:
        "Respond to urgent plumbing requests in seconds and keep every customer updated until the job is booked.",
    },
    {
      icon: Zap,
      title: "Electrical",
      description:
        "Automatically qualify service requests, reduce response time, and keep electricians focused on the work that matters.",
    },
    {
      icon: Sun,
      title: "Solar",
      description:
        "Qualify homeowners, answer common questions instantly, and schedule consultations while your team sleeps.",
    },
    {
      icon: Home,
      title: "Real Estate",
      description:
        "Engage buyers and sellers instantly with AI conversations that turn inquiries into qualified appointments.",
    },
    {
      icon: Briefcase,
      title: "Marketing Agencies",
      description:
        "Automate lead qualification, follow-ups, and meeting scheduling so your team spends more time closing deals.",
    },
    {
      icon: Stethoscope,
      title: "Medical Clinics",
      description:
        "Improve patient communication with appointment reminders, automated follow-ups, and faster response times.",
    },
    {
      icon: Building2,
      title: "Home Services",
      description:
        "Enterprise-grade AI automation tailored for every home service business looking to grow without hiring more staff.",
    },
  ];

  return (
    <SectionReveal>
      <section
        id="industries"
        className="relative overflow-hidden bg-[#05060A] py-28 sm:py-36"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(47,125,255,0.05),transparent_65%)]" />
          <div className="absolute left-1/2 top-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[170px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Industries We Serve
            </span>

            <h2 className="mt-4 text-balance text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              AI automation built for service businesses
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/60">
              Whether you run a local service company or a growing agency,
              Zyvoris helps you respond faster, qualify better, and book more
              appointments automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:border-primary/25 hover:bg-white/[0.04] hover:shadow-[0_16px_40px_rgba(0,0,0,0.22)]"
              >
                <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top_right,rgba(47,125,255,0.08),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 shadow-[0_8px_24px_rgba(47,125,255,0.08)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:border-primary/35 group-hover:bg-primary/15">
                    <industry.icon className="h-7 w-7 text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-primary">
                    {industry.title}
                  </h3>

                  <p className="text-sm leading-7 text-white/60">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-20 max-w-3xl">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur-2xl shadow-[0_18px_50px_rgba(0,0,0,0.25)] sm:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,125,255,0.08),transparent_60%)]" />

              <div className="relative">
                <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Don't see your industry?
                </h3>

                <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/60">
                  Every business has unique workflows. We design custom AI
                  automation systems tailored to how your team operates and how
                  your customers buy.
                </p>

                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(47,125,255,0.22)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(47,125,255,0.30)]"
                >
                  Let's Talk

                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}