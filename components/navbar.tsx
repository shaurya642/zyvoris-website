"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDLY_URL = "https://calendly.com/shaurya-zyvoris/30min";

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Industries", href: "#industries" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-4 flex w-[96%] max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#07080D]/75 px-6 py-4 backdrop-blur-2xl shadow-[0_12px_36px_rgba(0,0,0,0.35)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-8 lg:px-10">
        <Link href="/" className="group flex items-center">
          <img
            src="/logo.svg"
            alt="Zyvoris"
            draggable={false}
            className="h-8 w-auto transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative text-[15px] font-medium text-white/65 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-white"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex">
          <Button
            asChild
            className="group h-auto rounded-xl bg-primary px-6 py-2.5 text-white shadow-[0_12px_30px_rgba(47,125,255,0.22)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-primary hover:shadow-[0_18px_38px_rgba(47,125,255,0.30)]"
          >
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Strategy Call
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" />
            </a>
          </Button>
        </div>

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/30 hover:bg-primary/10 lg:hidden"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          mobileMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto mt-3 w-[96%] max-w-7xl rounded-2xl border border-white/10 bg-[#07080D]/90 p-5 backdrop-blur-2xl shadow-[0_12px_36px_rgba(0,0,0,0.30)]">
          <div className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-white/70 transition-all duration-300 hover:bg-white/[0.04] hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Button
            asChild
            className="mt-5 h-auto w-full rounded-xl bg-primary py-3 text-white shadow-[0_12px_30px_rgba(47,125,255,0.22)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-primary hover:shadow-[0_18px_38px_rgba(47,125,255,0.30)]"
          >
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Strategy Call
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}