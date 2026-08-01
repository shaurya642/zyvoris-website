"use client";
import { useEffect, useState } from "react";
import { ArrowRight, Play, Zap, CheckCircle2, Calendar, Bell } from "lucide-react";
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
    }, 1400);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle background glow - only blue */}
      <div
        className="
absolute
top-1/3
left-1/2
-translate-x-1/2

w-[260px]
h-[260px]

md:w-[600px]
md:h-[600px]

bg-primary/10
rounded-full
blur-2xl
md:blur-3xl
opacity-40
"
      />

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
              Never Miss
              <br />
              Another Lead
              <span className="text-primary">
                {" "}
                Again.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
              AI-powered lead qualification, instant follow-ups, and automated appointment booking—so every new lead gets a response in seconds, not hours.            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="btn-glow bg-primary text-primary-foreground hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] transition-[transform,opacity,border-color,box-shadow] duration-300 px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25"
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
                className="border-border/60 bg-secondary/30 backdrop-blur-sm hover:bg-secondary/50 hover:border-primary/40 px-8 py-6 text-base font-semibold text-foreground transition-[transform,opacity,border-color,box-shadow] duration-300"
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
                const isActive = activeStep === index;
                return (
                  <div key={index} className="relative">{index < workflowSteps.length - 1 && (
                    <div className="absolute left-6 top-[72px] h-6 w-0.5 overflow-hidden rounded-full bg-border/50">
                      <div
                        className={`absolute left-0 top-0 w-full bg-primary transition-[transform,opacity,border-color,box-shadow] duration-400 ${isActive
                          ? "h-full shadow-[0_0_12px_rgba(59,130,246,0.9)]"
                          : "h-0"
                          }`}
                      />
                    </div>
                  )}
                    {/* Workflow Card */}
                    <div
                      style={{ willChange: "transform, opacity" }}
                      className={`group relative overflow-hidden rounded-2xl border p-6 backdrop-blur-sm transition-[transform,opacity,border-color,box-shadow] duration-500 ${isActive
                          ? "border-primary/70 bg-card/90 shadow-[0_0_18px_rgba(59,130,246,0.22)] scale-[1.01] ring-1 ring-primary/30"
                          : "border-border/40 bg-card/40 hover:border-primary/40 hover:bg-card/60"
                        }`}
                    ><div
                        className={`absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                          }`}
                      />
                      {/* Glassmorphism glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative flex items-center gap-4">
                        {/* Icon with glow */}
                        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/20 transition-[transform,opacity,border-color,box-shadow] duration-300">
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

                  </div>
                );
              })}
            </div>

            {/* Subtle glow behind workflow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] md:w-[400px] md:h-[400px] bg-primary/10 rounded-full blur-xl md:blur-3xl opacity-40 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
