import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Zyvoris",
  description: "Privacy Policy for Zyvoris AI-powered lead response and follow-up systems.",
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>

        <div className="prose prose-invert prose-sm max-w-none">
          <p className="text-muted-foreground leading-relaxed mb-6">
            Last updated: January 2026
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect information you provide directly to us, such as when you fill out a form, 
              schedule a consultation, or communicate with us. This may include your name, email 
              address, phone number, company name, and any other information you choose to provide.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect to provide, maintain, and improve our services, 
              communicate with you about our services, and respond to your inquiries and requests.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              3. Information Sharing
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third 
              parties without your consent, except as necessary to provide our services or as 
              required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              4. Data Security
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              5. Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us at{" "}
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
