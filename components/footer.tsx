import Link from "next/link";
import {
  Mail,
  Instagram,
  Facebook,
} from "lucide-react";
const CALENDLY_URL = "https://calendly.com/shaurya-zyvoris/30min";

export function Footer() {
  return (
    <footer id="contact" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          {/* Left: Brand and Description */}
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <img
  src="/logo.png"
  alt="Zyvoris"
  className="h-10 w-auto"
/>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Zyvoris
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              AI-powered lead response and automation systems engineered for modern service businesses.
            </p>
          </div>

          {/* Center: Navigation and Legal */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-1">
            {/* Navigation */}
            <div>
              <h3 className="text-xs font-semibold text-foreground mb-6 uppercase tracking-wide opacity-60">
                Navigation
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#services"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#process"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    Process
                  </Link>
                </li>
                <li>
                  <Link
                    href="#industries"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    Industries
                  </Link>
                </li>
                <li>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    Book Strategy Call
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-xs font-semibold text-foreground mb-6 uppercase tracking-wide opacity-60">
                Legal
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
  href="/terms"
  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
>
  Terms & Conditions
</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Contact and tagline */}
          <div className="space-y-8 lg:col-span-1">
            <div>
              <h3 className="text-xs font-semibold text-foreground mb-6 uppercase tracking-wide opacity-60">
                Contact
              </h3>
              <div className="space-y-4">
                <a
  href="mailto:shaurya@zyvoris.com?subject=Strategy%20Call%20Inquiry"
  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary hover:underline transition-colors duration-200"
>
  <Mail className="h-4 w-4" />
  <span>shaurya@zyvoris.com</span>
</a>
                <div className="flex gap-4 pt-2">
                  <a
                    href="https://www.instagram.com/zyvoris.ai?igsh=Mmt6dXc1bW5qeGlp&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/share/1FdHA3eWKd/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground/60 leading-relaxed italic">
              Engineered with precision for modern businesses.
            </p>
          </div>
        </div>

        {/* Bottom divider and copyright */}
        <div className="mt-16 pt-8 border-t border-border/20">
          <p className="text-xs text-muted-foreground/50 tracking-wide">
            &copy; 2026 Zyvoris. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
