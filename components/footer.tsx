import Link from "next/link";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Mail,
} from "lucide-react";

const CALENDLY_URL = "https://calendly.com/shaurya-zyvoris/30min";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-[#05060A]"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,125,255,0.05),transparent_65%)]" />
        <div className="absolute left-1/2 top-0 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-primary/5 blur-[170px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="space-y-6">
            <Link href="/" className="group inline-flex w-fit items-center">
              <img
                src="/logo.svg"
                alt="Zyvoris"
                draggable={false}
                className="h-8 w-auto transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] group-hover:opacity-95"
              />
            </Link>

            <p className="max-w-sm text-sm leading-7 text-white/60">
              AI-powered lead qualification, instant follow-ups, and automated
              appointment booking built for modern service businesses.
            </p>

            <p className="text-xs uppercase tracking-[0.28em] text-white/35">
              Respond faster. Book more. Grow smarter.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                Navigation
              </h3>

              <ul className="space-y-4">
                {[
                  { label: "Services", href: "#services" },
                  { label: "Process", href: "#process" },
                  { label: "Industries", href: "#industries" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="inline-flex items-center text-sm text-white/55 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-1 hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}

                <li>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-white/55 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-1 hover:text-primary"
                  >
                    Book Strategy Call
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                Legal
              </h3>

              <ul className="space-y-4">
                <li>
                  <Link
                    href="/privacy"
                    className="inline-flex items-center text-sm text-white/55 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-1 hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link
                    href="/terms"
                    className="inline-flex items-center text-sm text-white/55 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-1 hover:text-primary"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                Contact
              </h3>

              <a
                href="mailto:shaurya@zyvoris.com?subject=Strategy%20Call%20Inquiry"
                className="inline-flex items-center gap-3 text-white/60 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-primary"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-primary/25 hover:bg-primary/10">
                  <Mail className="h-4 w-4" />
                </div>

                <span>shaurya@zyvoris.com</span>
              </a>
            </div>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(47,125,255,0.22)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(47,125,255,0.30)]"
            >
              Book a Free Strategy Call

              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" />
            </a>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/zyvoris.ai?igsh=Mmt6dXc1bW5qeGlp&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/10"
              >
                <Instagram className="h-5 w-5 text-white/55 transition-colors duration-500 group-hover:text-primary" />
              </a>

              <a
                href="https://www.facebook.com/share/1FdHA3eWKd/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/10"
              >
                <Facebook className="h-5 w-5 text-white/55 transition-colors duration-500 group-hover:text-primary" />
              </a>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/45">
              Engineered with precision for businesses that want every lead
              answered, qualified, and booked automatically.
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-10 text-center md:flex-row">
          <p className="text-xs tracking-[0.18em] text-white/35">
            © 2026 Zyvoris. All rights reserved.
          </p>

          <p className="text-xs text-white/30">
            Designed to help service businesses never miss another opportunity.
          </p>
        </div>
      </div>
    </footer>
  );
}