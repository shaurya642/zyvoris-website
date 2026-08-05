import type { Metadata, Viewport } from "next";
import { Manrope, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zyvoris.com"),
  title: {
    default: "Zyvoris | AI Automation for Service Businesses",
    template: "%s | Zyvoris",
  },
  description:
    "AI-powered lead qualification, instant responses, automated follow-ups, CRM automation, and appointment booking for modern service businesses.",
  keywords: [
    "AI Automation",
    "Lead Qualification",
    "AI Follow Ups",
    "Appointment Booking",
    "CRM Automation",
    "Service Business Automation",
    "Roofing",
    "HVAC",
    "Plumbing",
    "Marketing Agency",
    "Medical Clinic",
    "Real Estate",
  ],
  authors: [
    {
      name: "Zyvoris",
    },
  ],
  creator: "Zyvoris",
  publisher: "Zyvoris",
  applicationName: "Zyvoris",
  category: "Business",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Zyvoris | AI Automation for Service Businesses",
    description:
      "Never miss another lead with AI-powered lead qualification, instant responses, follow-ups, CRM automation, and appointment booking.",
    url: "https://zyvoris.com",
    siteName: "Zyvoris",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zyvoris | AI Automation for Service Businesses",
    description:
      "Respond faster. Qualify smarter. Book more appointments automatically.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05060A",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${geistMono.variable} scroll-smooth bg-background`}
    >
      <body className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground antialiased selection:bg-primary/20 selection:text-white">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}