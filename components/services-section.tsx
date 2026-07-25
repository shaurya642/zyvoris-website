"use client";

import { Zap, Bot, Database, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ServicesSection() {
  const services = [
    {
      icon: Zap,
      title: "Instant Lead Engagement",
      description:
        "Respond to new leads within seconds using AI-powered instant responses that feel personal and professional.",
      features: ["Sub-5 second response time", "Personalized messaging", "Multi-channel support"],
    },
    {
      icon: Bot,
      title: "AI-Assisted Follow-Ups",
      description:
        "Intelligent follow-up sequences that adapt based on lead behavior and engagement patterns.",
      features: ["Smart timing optimization", "Behavior-based triggers", "A/B tested templates"],
    },
    {
      icon: Database,
      title: "CRM & Inbox Automation",
      description:
        "Seamless integration with your existing tools. Automatic lead scoring, tagging, and pipeline management.",
      features: ["CRM synchronization", "Automatic lead scoring", "Smart inbox routing"],
    },
    {
      icon: Calendar,
      title: "Appointment Booking Flows",
      description:
        "Frictionless booking experiences that qualify leads and schedule calls automatically.",
      features: ["Calendar integration", "Qualification questions", "Reminder sequences"],
    },
  ];

  return (
    <section id="services" className="relative py-24 sm:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Automation that works while you sleep
          </h2>
          <p className="mt-5 text-lg text-muted-foreground text-pretty leading-relaxed">
            Everything you need to capture, nurture, and convert leads into paying customers—on autopilot.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="card-glow group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2.5">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <ArrowRight className="h-3 w-3 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              {/* Hover glow effect */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
