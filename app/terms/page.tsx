import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Zyvoris",
  description: "Terms and Conditions for Zyvoris AI-powered lead response and follow-up systems.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-24 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-8">
          Terms & Conditions
        </h1>

        <div className="prose prose-invert prose-sm max-w-none">
          <p className="text-muted-foreground leading-relaxed mb-6">
            Last updated: January 2026
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By accessing and using the Zyvoris website and services, you accept and agree to be 
              bound by the terms and provisions of this agreement. If you do not agree to abide 
              by these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              2. Services
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Zyvoris provides AI-powered lead response and follow-up automation systems. 
              The specific terms of service delivery will be outlined in individual service 
              agreements with clients.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              3. Intellectual Property
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All content on this website, including text, graphics, logos, and software, is the 
              property of Zyvoris and is protected by intellectual property laws. You may not 
              reproduce, distribute, or create derivative works without our express permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              4. Limitation of Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Zyvoris shall not be liable for any indirect, incidental, special, consequential, 
              or punitive damages resulting from your use of or inability to use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              5. Modifications
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We reserve the right to modify these terms at any time. Changes will be effective 
              immediately upon posting to the website. Your continued use of our services 
              constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              6. Contact
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For any questions regarding these Terms & Conditions, please contact us at{" "}
              <a 
                href="mailto:shaurya@zyvoris.com" 
                className="text-primary hover:underline"
              >
                shaurya@zyvoris.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
