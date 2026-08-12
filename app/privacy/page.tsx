import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Zyvoris",
  description:
    "Privacy Policy for Zyvoris AI-powered lead response and follow-up systems.",
};

const sections = [
  {
    number: "01",
    title: "Information We Collect",
    content: (
      <p>
        We collect information you provide directly to us, such as when you
        fill out a form, schedule a consultation, or communicate with us. This
        may include your name, email address, phone number, company name, and
        any other information you choose to provide.
      </p>
    ),
  },
  {
    number: "02",
    title: "How We Use Your Information",
    content: (
      <p>
        We use the information we collect to provide, maintain, and improve our
        services, communicate with you about our services, and respond to your
        inquiries and requests.
      </p>
    ),
  },
  {
    number: "03",
    title: "Information Sharing",
    content: (
      <p>
        We do not sell, trade, or otherwise transfer your personal information
        to third parties without your consent, except as necessary to provide
        our services or as required by law.
      </p>
    ),
  },
  {
    number: "04",
    title: "Data Security",
    content: (
      <p>
        We implement appropriate technical and organizational measures to
        protect your personal information against unauthorized access,
        alteration, disclosure, or destruction.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#05060A] text-white">
      <div className="relative isolate overflow-hidden">
        {/* Subtle brand accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-[#2F7DFF]/[0.055] blur-[140px]"
        />

        <div className="relative mx-auto max-w-4xl px-5 py-8 sm:px-8 sm:py-14 lg:px-10 lg:py-20">
          {/* Back navigation */}
          <Link
            href="/"
            className="group mb-12 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-white/65 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F7DFF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05060A] sm:mb-14"
          >
            <ArrowLeft
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5"
              aria-hidden="true"
            />
            Back to Home
          </Link>

          {/* Header */}
          <header className="mb-10 max-w-3xl sm:mb-14">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2F7DFF]/20 bg-[#2F7DFF]/[0.08] px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#2F7DFF]">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              Legal
            </div>

            <h1 className="text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              This policy explains how Zyvoris handles information provided
              through our website and communications.
            </p>

            <div className="mt-7 flex items-center gap-3 text-sm text-white/40">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-white/15"
              />
              <span>Last updated: January 2026</span>
            </div>
          </header>

          {/* Policy content */}
          <article
            aria-label="Privacy Policy"
            className="rounded-3xl border border-white/10 bg-white/[0.025] p-5 shadow-[0_12px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-8 lg:p-10"
          >
            <div>
              {sections.map((section, index) => (
                <section
                  key={section.number}
                  className={`py-8 sm:py-9 ${
                    index !== sections.length - 1
                      ? "border-b border-white/[0.08]"
                      : ""
                  } ${
                    index === 0
                      ? "pt-1 sm:pt-1"
                      : ""
                  }`}
                >
                  <div className="grid gap-4 sm:grid-cols-[72px_1fr] sm:gap-8">
                    <div className="text-xs font-semibold tracking-[0.16em] text-[#2F7DFF]">
                      {section.number}
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                        {section.title}
                      </h2>

                      <div className="mt-4 text-[15px] leading-7 text-white/55 sm:text-base sm:leading-8">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </section>
              ))}

              {/* Contact */}
              <section className="border-t border-white/[0.08] pt-8 sm:pt-9">
                <div className="grid gap-4 sm:grid-cols-[72px_1fr] sm:gap-8">
                  <div className="text-xs font-semibold tracking-[0.16em] text-[#2F7DFF]">
                    05
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                      Contact Us
                    </h2>

                    <p className="mt-4 text-[15px] leading-7 text-white/55 sm:text-base sm:leading-8">
                      If you have any questions about this Privacy Policy,
                      please contact us at{" "}
                      <a
                        href="mailto:shaurya@zyvoris.com"
                        className="font-medium text-[#2F7DFF] underline decoration-[#2F7DFF]/30 underline-offset-4 transition-colors duration-300 hover:text-white hover:decoration-white/40 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F7DFF]/70"
                      >
                        shaurya@zyvoris.com
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </article>

          {/* Footer navigation */}
          <footer className="mt-8 flex flex-col gap-4 border-t border-white/[0.08] pt-7 text-sm text-white/40 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:pt-8">
            <span>© {new Date().getFullYear()} Zyvoris</span>

            <Link
              href="/"
              className="w-fit rounded-sm transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F7DFF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05060A]"
            >
              Return to Zyvoris
            </Link>
          </footer>
        </div>
      </div>
    </main>
  );
}