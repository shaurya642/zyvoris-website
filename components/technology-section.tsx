"use client";

import { SectionReveal } from "@/components/section-reveal";

const technologies = [
  { name: "OpenAI", text: "OpenAI" },
  { name: "Google Gemini", text: "Gemini" },
  { name: "Make", text: "Make" },
  { name: "n8n", text: "n8n" },
  { name: "Calendly", text: "Calendly" },
  { name: "Google", text: "Google" },
  { name: "Meta", text: "Meta" },
  { name: "CRM & Lead Platforms", text: "CRM & Lead Platforms" },
];

const EASE = "cubic-bezier(0.22,1,0.36,1)";

export function TechnologySection() {
  return (
    <SectionReveal>
      <section
        aria-labelledby="technology-heading"
        className="relative overflow-hidden bg-background py-20 sm:py-24"
      >
        {/* Subtle ambient light */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.025] blur-[140px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Heading */}
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
              Integrations
            </p>

            <h2
              id="technology-heading"
              className="mt-4 text-balance text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl"
            >
              Works with the tools already in your business.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              Zyvoris connects AI, automation, communication, scheduling,
              and lead-management tools into one workflow without forcing you
              to replace everything you already use.
            </p>
          </div>

          {/* Technology grid */}
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {technologies.map((technology) => (
              <li key={technology.name}>
                <div
                  className="group flex h-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.025] px-5 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-white/[0.035] hover:shadow-[0_14px_32px_rgba(0,0,0,0.16)]"
                  style={{
                    transitionTimingFunction: EASE,
                  }}
                >
                  <span className="text-sm font-semibold tracking-tight text-white/40 transition-colors duration-300 group-hover:text-primary sm:text-base">
                    {technology.text}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          {/* Supporting note */}
          <p className="mx-auto mt-8 max-w-xl text-center text-xs leading-6 text-white/30">
            The exact tools and integrations depend on your existing setup,
            lead sources, communication channels, CRM, and business
            requirements.
          </p>
        </div>
      </section>
    </SectionReveal>
  );
}