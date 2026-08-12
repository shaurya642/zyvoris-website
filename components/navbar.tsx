"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDLY_URL = "https://calendly.com/shaurya-zyvoris/30min";

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Industries", href: "#industries" },
  { name: "Contact", href: "#contact" },
];

const EASE = "cubic-bezier(0.22,1,0.36,1)";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Close the mobile menu when returning to desktop.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Allow Escape to close the mobile navigation.
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMobileMenu();
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Main navigation"
        className="mx-auto mt-3 flex w-[96%] max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-background/80 px-5 py-3.5 shadow-[0_12px_36px_rgba(0,0,0,0.24)] backdrop-blur-2xl transition-all duration-500 sm:mt-4 sm:px-7 sm:py-4 lg:px-9"
        style={{ transitionTimingFunction: EASE }}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Zyvoris home"
          className="group flex shrink-0 items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <img
            src="/logo.svg"
            alt="Zyvoris"
            draggable={false}
            className="h-8 w-auto select-none transition-transform duration-500 group-hover:scale-[1.03]"
            style={{ transitionTimingFunction: EASE }}
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative rounded-md py-1 text-sm font-medium text-white/60 transition-colors duration-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              style={{ transitionTimingFunction: EASE }}
            >
              {item.name}

              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-400 group-hover:w-full"
                style={{ transitionTimingFunction: EASE }}
              />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <Button
            asChild
            className="group h-auto rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(47,125,255,0.20)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-primary hover:shadow-[0_16px_34px_rgba(47,125,255,0.26)] active:translate-y-0 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            style={{ transitionTimingFunction: EASE }}
          >
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a Zyvoris strategy call"
            >
              Book a Strategy Call

              <ArrowRight
                className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5"
                style={{ transitionTimingFunction: EASE }}
                aria-hidden="true"
              />
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          ref={menuButtonRef}
          type="button"
          aria-label={
            mobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/80 transition-all duration-400 hover:border-primary/25 hover:bg-primary/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:hidden"
          style={{ transitionTimingFunction: EASE }}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          mobileMenuOpen
            ? "max-h-[520px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
        style={{ transitionTimingFunction: EASE }}
      >
        <div className="mx-auto mt-2 w-[96%] max-w-7xl rounded-2xl border border-white/10 bg-background/90 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.26)] backdrop-blur-2xl sm:mt-3 sm:p-5">
          <div className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMobileMenu}
                tabIndex={mobileMenuOpen ? 0 : -1}
                className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-white/65 transition-all duration-300 hover:bg-white/[0.04] hover:text-white focus-visible:bg-white/[0.04] focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                style={{ transitionTimingFunction: EASE }}
              >
                <span>{item.name}</span>

                <ArrowRight
                  className="h-4 w-4 text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary"
                  style={{ transitionTimingFunction: EASE }}
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>

          <div className="mt-4 border-t border-white/[0.08] pt-4">
            <Button
              asChild
              className="group h-auto w-full rounded-xl bg-primary py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(47,125,255,0.20)] transition-all duration-500 hover:bg-primary hover:shadow-[0_18px_36px_rgba(47,125,255,0.27)] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              style={{ transitionTimingFunction: EASE }}
            >
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                tabIndex={mobileMenuOpen ? 0 : -1}
                aria-label="Book a Zyvoris strategy call"
              >
                Book a Strategy Call

                <ArrowRight
                  className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5"
                  style={{ transitionTimingFunction: EASE }}
                  aria-hidden="true"
                />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}