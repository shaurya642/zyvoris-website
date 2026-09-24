"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const testimonials = [
  {
    quote: [
      "We were getting enough inquiries, but our intake process had some gaps. If a call came in while the team was tied up, or a lead reached out after hours, there was a good chance we wouldn’t get back to them until much later. By then, some of those people had already moved on.",
      "ZYVORIS helped us tighten up that part of the process. The biggest difference has been the speed and consistency of our follow-up. New inquiries are being engaged much sooner, and our team has a clearer picture of who needs attention and where each lead stands.",
      "It’s not about replacing our intake team. It’s about making sure opportunities don’t fall through the cracks.",
    ],
    name: "Michael Reynolds",
    role: "Attorney / Owner",
  },
  {
    quote: [
      "Our biggest issue wasn’t generating leads. We were already spending money to get people to contact us. The problem was what happened after someone called or submitted an inquiry.",
      "There were too many situations where the response depended on who was available at the time. ZYVORIS gave us a much more consistent process for responding, qualifying inquiries, and getting the right information in front of our team.",
      "I also liked that we didn’t have to completely change the way we operate. It fit into our existing workflow instead of creating another complicated system for our staff to manage.",
      "We’re simply doing a better job of turning the inquiries we already paid for into actual conversations.",
    ],
    name: "Daniel Foster",
    role: "Managing Partner / Attorney",
  },
  {
    quote: [
      "Before ZYVORIS, missed calls were one of those things we knew we needed to improve, but it was difficult to stay on top of them consistently. Our staff is busy, and not every inquiry comes in during convenient hours.",
      "What changed for us was having a system that keeps the conversation moving even when someone on our team isn’t immediately available. Leads are followed up with, information is collected, and qualified prospects can be moved toward a consultation without everything depending on someone remembering to make the next call.",
      "The difference isn’t just having more activity. We have a much better handle on what’s happening with our inbound inquiries.",
      "For a PI practice, that kind of consistency matters.",
    ],
    name: "Sarah Mitchell",
    role: "Managing Attorney & Owner",
  },
];

const EASE = "cubic-bezier(0.22,1,0.36,1)";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  const nextTestimonial = React.useCallback(() => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  }, []);

  const previousTestimonial = React.useCallback(() => {
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length,
    );
  }, []);

  React.useEffect(() => {
    if (isPaused) {
      return;
    }

    const interval = window.setInterval(() => {
      nextTestimonial();
    }, 7000);

    return () => {
      window.clearInterval(interval);
    };
  }, [isPaused, nextTestimonial]);

  const testimonial = testimonials[activeIndex];

  return (
    <SectionReveal>
      <section
        id="testimonials"
        aria-labelledby="testimonials-heading"
        className="relative overflow-hidden bg-background py-20 sm:py-24"
      >
        {/* Subtle ambient light */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.025] blur-[110px] max-sm:h-[280px] max-sm:w-[420px] max-sm:blur-[80px]"
        />

        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          {/* Heading */}
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
              Client Feedback
            </p>

            <h2
              id="testimonials-heading"
              className="mt-4 text-balance text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl"
            >
              Built to improve what happens after an inquiry comes in.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              See how firms are using ZYVORIS to create a more consistent
              response, intake, and follow-up process.
            </p>
          </div>

          {/* Testimonial */}
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            <div
              className="relative overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.025] px-6 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:px-10 sm:py-10 lg:px-14 lg:py-12"
              style={{
                transitionTimingFunction: EASE,
              }}
            >
              {/* Quote icon */}
              <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.07]">
                <Quote
                  className="h-5 w-5 text-primary"
                  aria-hidden="true"
                />
              </div>

              <div
                key={activeIndex}
                className="animate-in fade-in slide-in-from-right-3 duration-500"
              >
                <div className="space-y-5">
                  {testimonial.quote.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-7 text-white/65 sm:text-lg sm:leading-8"
                    >
                      “{paragraph}”
                    </p>
                  ))}
                </div>

                <div className="mt-8 border-t border-white/[0.08] pt-6">
                  <p className="text-base font-semibold tracking-tight text-white">
                    — {testimonial.name}
                  </p>

                  <p className="mt-1 text-sm text-white/40">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-8 flex items-center justify-between border-t border-white/[0.08] pt-6">
                <div className="flex items-center gap-2">
                  {testimonials.map((item, index) => (
                    <button
                      key={item.name}
                      type="button"
                      aria-label={`Go to testimonial ${index + 1}`}
                      aria-current={index === activeIndex}
                      onClick={() => setActiveIndex(index)}
                      className={`h-1.5 rounded-full transition-[width,background-color,opacity] duration-300 ${
                        index === activeIndex
                          ? "w-8 bg-primary"
                          : "w-1.5 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={previousTestimonial}
                    aria-label="Previous testimonial"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] text-white/60 transition-[transform,border-color,background-color,color] duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/[0.06] hover:text-white"
                    style={{
                      transitionTimingFunction: EASE,
                    }}
                  >
                    <ChevronLeft
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </button>

                  <button
                    type="button"
                    onClick={nextTestimonial}
                    aria-label="Next testimonial"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] text-white/60 transition-[transform,border-color,background-color,color] duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/[0.06] hover:text-white"
                    style={{
                      transitionTimingFunction: EASE,
                    }}
                  >
                    <ChevronRight
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Supporting note */}
          <p className="mx-auto mt-7 max-w-2xl text-center text-xs leading-6 text-white/30">
            Feedback reflects individual client experiences and is not a
            guarantee of future results.
          </p>
        </div>
      </section>
    </SectionReveal>
  );
}