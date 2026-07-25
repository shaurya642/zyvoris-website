"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDLY_URL = "https://calendly.com/shaurya-zyvoris/30min";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary to-accent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-[2px] rounded-md bg-background flex items-center justify-center">
                <span className="text-sm font-bold text-primary">Z</span>
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              Zyvoris
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          <Link
            href="#services"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Services
          </Link>
          <Link
            href="#process"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Process
          </Link>
          <Link
            href="#industries"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Industries
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Button
            asChild
            className="btn-glow bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] transition-all duration-300"
          >
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Book a Strategy Call
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl">
          <div className="space-y-1 px-6 py-4">
            <Link
              href="#services"
              className="block py-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#process"
              className="block py-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Process
            </Link>
            <Link
              href="#industries"
              className="block py-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Industries
            </Link>
            <Link
              href="#contact"
              className="block py-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
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
        </div>
      )}
    </header>
  );
}
