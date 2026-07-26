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

export function IndustriesSection() {
  const industries = [
    {
      icon: Hammer,
      title: "Roofing",
      description:
        "Capture every roof repair and replacement inquiry instantly. AI responds 24/7 to schedule inspections and keep leads warm.",
    },
    {
      icon: Wrench,
      title: "HVAC",
      description:
        "Never miss a furnace or AC emergency. Instant dispatch scheduling and seasonal maintenance follow-ups that drive recurring revenue.",
    },
    {
      icon: Droplet,
      title: "Plumbing",
      description:
        "Handle urgent service requests automatically. AI dispatches qualified leads and manages emergency callbacks seamlessly.",
    },
    {
      icon: Zap,
      title: "Electrical",
      description:
        "Respond to every service call within seconds. Smart scheduling that reduces travel time and increases appointments booked.",
    },
    {
      icon: Sun,
      title: "Solar",
      description:
        "Convert solar inquiries into consultations instantly. Qualify leads and book appointments automatically while you're sleeping.",
    },
    {
      icon: Home,
      title: "Real Estate",
      description:
        "Never miss a property inquiry. Instant responses and nurture sequences that turn browsers into qualified leads.",
    },
    {
      icon: Briefcase,
      title: "Marketing Agencies",
      description:
        "Scale client acquisition without scaling your team. Automated client outreach, proposals, and follow-up sequences.",
    },
    {
      icon: Stethoscope,
      title: "Medical Clinics",
      description:
        "Patient engagement that feels personal. Appointment reminders, follow-ups, and reactivation campaigns that improve retention.",
    },
    {
      icon: Building2,
      title: "Home Services",
      description:
        "Compete with the big players. Enterprise-level automation tailored for any home service business you run.",
    },
  ];

  return (
    <section id="industries" className="relative py-24 sm:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Industries We Serve
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            AI automation for service businesses
          </h2>
          <p className="mt-5 text-lg text-muted-foreground text-pretty leading-relaxed">
            Whether you're in roofing, HVAC, plumbing, or any service industry, Zyvoris powers your lead response at scale.
          </p>
        </div>

        {/* Industries grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="card-glow group relative overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-slate-900/40 to-slate-800/20 p-8 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:from-slate-900/60 hover:to-slate-800/40 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Icon container */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/8 border border-primary/20 group-hover:bg-primary/15 group-hover:border-primary/40 transition-all duration-300 mb-5">
                <industry.icon className="h-7 w-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                {industry.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {industry.description}
              </p>

              
            </div>
          ))}
        </div>

        {/* Custom industries CTA */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-slate-900/40 to-slate-800/20 p-10 backdrop-blur-md">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Don&apos;t see your industry?
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              We build custom AI automation systems for any service business. If your industry isn&apos;t listed, we can create a tailored solution specifically for your needs.
            </p>
            <a
  href="https://calendly.com/shaurya-zyvoris/30min"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]"
>
  Let&apos;s Talk
  <ArrowRight className="h-4 w-4" />
</a>
          </div>
        </div>
      </div>
    </section>
  );
}
