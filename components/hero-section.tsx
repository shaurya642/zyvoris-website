"use client";

import { ArrowRight, Play, Zap, CheckCircle2, Calendar, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDLY_URL = "https://calendly.com/shaurya-zyvoris/30min";

const workflowSteps = [
  {
    icon: Zap,
    label: "New Lead",
    description: "Lead comes in",
  },
  {
    icon: Zap,
    label: "AI Responds Instantly",
    description: "Immediate engagement",
  },
  {
    icon: CheckCircle2,
    label: "Lead Qualified",
    description: "Smart qualification",
  },
  {
    icon: Calendar,
    label: "Appointment Booked",
    description: "Scheduled automatically",
  },
  {
    icon: Bell,
    label: "Owner Notified",
    description: "You stay informed",
  },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle background glow - only blue */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5 mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                AI-Powered Automation
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-balance">
              Never Let Another Lead Go{" "}
              <span className="text-primary">Cold.</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
              AI-powered lead response, intelligent follow-ups and appointment booking systems for service businesses that rely on fast customer response.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="btn-glow bg-primary text-primary-foreground hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] transition-all duration-300 px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25"
              >
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  Book a Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border/60 bg-secondary/30 backdrop-blur-sm hover:bg-secondary/50 hover:border-primary/40 px-8 py-6 text-base font-semibold text-foreground transition-all duration-300"
              >
                <a href="#process">
                  <Play className="mr-2 h-4 w-4" />
                  See How It Works
                </a>
              </Button>
            </div>

            {/* Trust statement */}
            <p className="mt-6 text-sm text-muted-foreground/80">
              Built for service businesses that value fast response times.
            </p>
          </div>

          {/* Right Side - Workflow Visualization */}
          <div className="relative">
            <div className="space-y-6">
              {workflowSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    {/* Workflow Card */}
                    <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card/40 backdrop-blur-md p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                      {/* Glassmorphism glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative flex items-center gap-4">
                        {/* Icon with glow */}
                        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground">
                            {step.label}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-0.5">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Connecting Line with animation */}
                    {index < workflowSteps.length - 1 && (
                      <div className="absolute left-6 top-[72px] w-0.5 h-6 bg-gradient-to-b from-primary/40 to-transparent">
                        <div className="absolute inset-0 bg-gradient-to-b from-primary to-transparent animate-pulse" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Subtle glow behind workflow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl opacity-40 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
