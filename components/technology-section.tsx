"use client";

import { SectionReveal } from "@/components/section-reveal";

export function TechnologySection() {
  const technologies = [
    { name: "OpenAI", text: "OpenAI" },
    { name: "Google Gemini", text: "Gemini" },
    { name: "Make", text: "Make" },
    { name: "n8n", text: "n8n" },
    { name: "Google Workspace", text: "Workspace" },
    { name: "Calendly", text: "Calendly" },
    { name: "Meta", text: "Meta" },
    { name: "Gmail", text: "Gmail" },
    { name: "Twilio", text: "Twilio" },
    { name: "Stripe", text: "Stripe" },
  ];

  return (
    <SectionReveal>
      <section className="relative overflow-hidden bg-[#05060A] py-20 sm:py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(47,125,255,0.04),transparent_70%)]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Technology Stack
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">
              Powered by trusted platforms
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/60">
              We build reliable AI automation using industry-leading tools that
              scale with your business.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="group flex h-24 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-primary/25 hover:bg-white/[0.04] hover:shadow-[0_16px_36px_rgba(0,0,0,0.22)]"
              >
                <span className="text-lg font-semibold tracking-tight text-white/45 transition-all duration-500 group-hover:text-primary">
                  {tech.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}