"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionReveal } from "@/components/section-reveal";

const CALENDLY_URL = "https://calendly.com/shaurya-zyvoris/30min";

export function CTASection() {
  return (
    <SectionReveal>
      <section className="relative overflow-hidden bg-[#05060A] py-28 sm:py-36">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(47,125,255,0.05),transparent_65%)]" />
          <div className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/6 blur-[160px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] px-8 py-16 text-center backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:px-12 sm:py-20">
            <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top,rgba(47,125,255,0.08),transparent_55%)]" />

            <div className="relative">
              <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-primary/20 bg-primary/10 shadow-[0_10px_30px_rgba(47,125,255,0.10)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-primary/35 hover:bg-primary/15">
                <Sparkles className="h-9 w-9 text-primary transition-transform duration-500 group-hover:scale-105" />
              </div>

              <h2 className="text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Ready to stop losing leads?
              </h2>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl">
                Book a free strategy call and discover how Zyvoris can automate
                your lead qualification, follow-ups, and appointment booking so
                every opportunity gets the attention it deserves.
              </p>

              <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="group h-auto rounded-xl bg-primary px-9 py-6 text-base font-semibold text-white shadow-[0_12px_30px_rgba(47,125,255,0.22)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-primary hover:shadow-[0_18px_38px_rgba(47,125,255,0.30)] active:translate-y-0"
                >
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Your Free Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-500 group-hover:translate-x-1.5" />
                  </a>
                </Button>
              </div>

              <div className="mt-8">
                <p className="text-sm tracking-wide text-white/45">
                  No contracts. No commitment. Just a conversation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}