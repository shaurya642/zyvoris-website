import Link from "next/link";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Mail,
} from "lucide-react";

const CALENDLY_URL = "https://calendly.com/shaurya-zyvoris/30min";

const navigationLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Industries", href: "#industries" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

const EASE = "cubic-bezier(0.22,1,0.36,1)";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.08] bg-background"
    >
      {/* Subtle ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-primary/[0.035] blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.25fr_1fr_1fr] lg:gap-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link
              href="/"
              aria-label="Zyvoris home"
              className="group inline-flex w-fit rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <img
                src="/logo.svg"
                alt="Zyvoris"
                draggable={false}
                className="h-8 w-auto transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-95"
                style={{ transitionTimingFunction: EASE }}
              />
            </Link>

            <p className="max-w-sm text-sm leading-7 text-white/55">
              Zyvoris builds AI lead response and conversion systems that help
              businesses respond faster, qualify leads, follow up
              automatically, and book more appointments.
            </p>

            <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/30">
              Respond faster. Qualify better. Book more.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-10 sm:gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
                Navigation
              </h2>

              <ul className="space-y-4">
                {navigationLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center rounded-sm text-sm text-white/50 transition-all duration-400 hover:translate-x-1 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      style={{ transitionTimingFunction: EASE }}
                    >
                      <span>{item.label}</span>

                      <ArrowRight
                        className="ml-1.5 h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-400 group-hover:translate-x-0 group-hover:opacity-70"
                        style={{ transitionTimingFunction: EASE }}
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}

                <li>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center rounded-sm text-sm text-white/50 transition-all duration-400 hover:translate-x-1 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    style={{ transitionTimingFunction: EASE }}
                  >
                    <span>Strategy Call</span>

                    <ArrowRight
                      className="ml-1.5 h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-400 group-hover:translate-x-0 group-hover:opacity-70"
                      style={{ transitionTimingFunction: EASE }}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
                Legal
              </h2>

              <ul className="space-y-4">
                {legalLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center rounded-sm text-sm text-white/50 transition-all duration-400 hover:translate-x-1 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      style={{ transitionTimingFunction: EASE }}
                    >
                      <span>{item.label}</span>

                      <ArrowRight
                        className="ml-1.5 h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-400 group-hover:translate-x-0 group-hover:opacity-70"
                        style={{ transitionTimingFunction: EASE }}
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-7">
            <div>
              <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
                Contact
              </h2>

              <a
                href="mailto:shaurya@zyvoris.com?subject=Strategy%20Call%20Inquiry"
                className="group inline-flex max-w-full items-center gap-3 rounded-xl text-sm text-white/55 transition-colors duration-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-400 group-hover:border-primary/25 group-hover:bg-primary/[0.08]"
                  style={{ transitionTimingFunction: EASE }}
                >
                  <Mail
                    className="h-4 w-4 text-white/50 transition-colors duration-400 group-hover:text-primary"
                    style={{ transitionTimingFunction: EASE }}
                    aria-hidden="true"
                  />
                </span>

                <span className="break-all sm:break-normal">
                  shaurya@zyvoris.com
                </span>
              </a>
            </div>

            {/* Primary CTA */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a Zyvoris strategy call"
              className="group inline-flex items-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(47,125,255,0.20)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(47,125,255,0.27)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              style={{ transitionTimingFunction: EASE }}
            >
              Book a Strategy Call

              <ArrowRight
                className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5"
                style={{ transitionTimingFunction: EASE }}
                aria-hidden="true"
              />
            </a>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/zyvoris.ai?igsh=Mmt6dXc1bW5qeGlp&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zyvoris on Instagram"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-400 hover:-translate-y-1 hover:border-primary/25 hover:bg-primary/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                style={{ transitionTimingFunction: EASE }}
              >
                <Instagram
                  className="h-[18px] w-[18px] text-white/45 transition-colors duration-400 group-hover:text-primary"
                  style={{ transitionTimingFunction: EASE }}
                  aria-hidden="true"
                />
              </a>

              <a
                href="https://www.facebook.com/share/1FdHA3eWKd/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zyvoris on Facebook"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-400 hover:-translate-y-1 hover:border-primary/25 hover:bg-primary/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                style={{ transitionTimingFunction: EASE }}
              >
                <Facebook
                  className="h-[18px] w-[18px] text-white/45 transition-colors duration-400 group-hover:text-primary"
                  style={{ transitionTimingFunction: EASE }}
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/[0.08] pt-8 sm:mt-20 md:flex-row md:items-center md:justify-between">
          <p className="text-xs tracking-[0.12em] text-white/30">
            © {new Date().getFullYear()} Zyvoris. All rights reserved.
          </p>

          <p className="text-xs text-white/25">
            From new lead to booked appointment — automatically.
          </p>
        </div>
      </div>
    </footer>
  );
}