import Link from "next/link";

import { ArrowLeft, FileText } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Zyvoris",
  description:
    "Terms and Conditions governing the use of the Zyvoris website and PI Lead Conversion System.",
};

const sections = [
  {
    number: "01",
    title: "Acceptance of Terms",
    content: (
      <p>
        By accessing or using the Zyvoris website or services, you agree to
        these Terms &amp; Conditions. If you do not agree with these terms,
        please do not use the website or services. If you are using our
        services on behalf of a personal injury law firm or other business or
        organization, you confirm that you have the authority to accept these
        terms on its behalf.
      </p>
    ),
  },
  {
    number: "02",
    title: "Our Services",
    content: (
      <>
        <p>
          Zyvoris provides a PI Lead Conversion System designed to help US
          personal injury law firms manage what happens after a digital
          inquiry, inbound call, or missed call enters the firm's intake
          workflow.
        </p>

        <p className="mt-4">
          Depending on the configuration and services selected, this may
          include timely lead response, intake and information gathering,
          AI-assisted qualification based on criteria defined by the firm,
          automated follow-up, consultation booking, CRM or lead management,
          team notifications, and missed-call response or recovery.
        </p>

        <p className="mt-4">
          Zyvoris does not provide legal advice, determine liability, decide
          whether an individual has a legal case, or make legal decisions on
          behalf of a law firm. Legal review and legal decision-making remain
          the responsibility of the firm's attorneys and staff.
        </p>

        <p className="mt-4">
          The specific services, features, integrations, implementation
          requirements, pricing, and deliverables provided to a customer may
          be defined in a separate service agreement or other written
          arrangement. Available integrations depend on the firm's existing
          systems and workflow.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "Customer Responsibilities",
    content: (
      <>
        <p>
          Customers are responsible for providing accurate information,
          maintaining appropriate access to the systems and accounts required
          for their implementation, and using the services in accordance with
          applicable laws and the requirements of the platforms they use.
        </p>

        <p className="mt-4">
          Customers are also responsible for the leads, prospective clients,
          contacts, messages, content, and other information they provide to or
          process through their configured systems. The firm remains
          responsible for its intake criteria, legal review, qualification
          decisions, communications, and use of information processed through
          the system.
        </p>

        <p className="mt-4">
          Zyvoris does not guarantee that every inquiry, inbound call, or
          missed call will result in a response, conversation, qualified
          consultation opportunity, consultation, retained client, or other
          business outcome.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "Acceptable Use",
    content: (
      <>
        <p>
          You agree not to use the Zyvoris website or services for unlawful,
          fraudulent, abusive, deceptive, or unauthorized activities.
        </p>

        <p className="mt-4">
          You must not attempt to interfere with the operation of the services,
          gain unauthorized access to systems or accounts, misuse information
          belonging to other individuals or businesses, or use the services in
          a manner that violates applicable laws, regulations, or third-party
          platform requirements.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "Third-Party Platforms & Integrations",
    content: (
      <p>
        Zyvoris may integrate with or operate alongside third-party platforms,
        software, communication services, CRM systems, legal practice
        management systems, scheduling tools, and other technologies depending
        on the firm's setup. Those third-party services may have their own
        terms, privacy policies, limitations, availability requirements, and
        fees. Zyvoris is not responsible for changes, interruptions,
        limitations, or failures originating from third-party services outside
        our reasonable control.
      </p>
    ),
  },
  {
    number: "06",
    title: "Intellectual Property",
    content: (
      <p>
        The Zyvoris name, branding, website content, original materials,
        software, designs, and other intellectual property made available by
        Zyvoris remain the property of Zyvoris or its respective licensors,
        unless otherwise agreed in writing. You may not reproduce, distribute,
        modify, reverse engineer, or create derivative works from Zyvoris
        materials without appropriate authorization.
      </p>
    ),
  },
  {
    number: "07",
    title: "Service Availability",
    content: (
      <p>
        We aim to provide reliable services, but we do not guarantee that the
        website or services will always be available, uninterrupted, or free
        from errors. Service availability may depend on internet connectivity,
        third-party platforms, integrations, customer systems, and other
        factors outside our reasonable control. We may also modify, improve,
        suspend, or discontinue portions of the services when reasonably
        necessary.
      </p>
    ),
  },
  {
    number: "08",
    title: "No Guaranteed Business Results",
    content: (
      <p>
        Zyvoris provides systems intended to help personal injury law firms
        respond to inquiries, support intake, apply firm-defined qualification
        criteria, follow up with prospective clients, and move qualified
        prospects toward consultations more consistently. However, business
        outcomes depend on many factors, including inquiry quality, marketing
        sources, firm-defined criteria, intake processes, response
        configuration, prospective-client behavior, market conditions, and
        other circumstances. We do not guarantee a specific number of
        inquiries, qualified consultations, retained clients, revenue,
        conversion rate, or other business result.
      </p>
    ),
  },
  {
    number: "09",
    title: "Limitation of Liability",
    content: (
      <p>
        To the maximum extent permitted by applicable law, Zyvoris will not be
        responsible for indirect, incidental, special, consequential, or
        punitive damages arising from or related to the use of the website or
        services. This includes losses resulting from missed opportunities,
        business interruption, loss of revenue, loss of data, or reliance on
        third-party platforms or services, except where such limitation is not
        permitted by applicable law.
      </p>
    ),
  },
  {
    number: "10",
    title: "Changes to These Terms",
    content: (
      <p>
        We may update these Terms &amp; Conditions from time to time to reflect
        changes to our website, services, or business practices. Updated terms
        will be posted on this page with a revised "Last updated" date. Your
        continued use of the website or services after an update may constitute
        acceptance of the revised terms to the extent permitted by applicable
        law.
      </p>
    ),
  },
];

export default function TermsPage() {
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
              <FileText
                className="h-3.5 w-3.5"
                aria-hidden="true"
              />
              Legal
            </div>

            <h1 className="text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              Terms &amp; Conditions
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              Please review these terms before using the Zyvoris website or
              services.
            </p>

            <div className="mt-7 flex items-center gap-3 text-sm text-white/40">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-white/15"
              />
              <span>Last updated: September 2026</span>
            </div>
          </header>

          {/* Terms content */}
          <article
            aria-label="Terms and Conditions"
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
                    11
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                      Contact
                    </h2>

                    <p className="mt-4 text-[15px] leading-7 text-white/55 sm:text-base sm:leading-8">
                      If you have questions about these Terms &amp; Conditions,
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