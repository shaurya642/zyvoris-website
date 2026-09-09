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
    default: "Zyvoris | Lead Response & Conversion System",
    template: "%s | Zyvoris",
  },

  description:
    "Zyvoris helps roofing and service businesses turn more inquiries and missed calls into booked opportunities with faster response, lead qualification, follow-up, appointment booking, and lead management.",

  keywords: [
    "Lead Response System",
    "Lead Conversion System",
    "Lead Qualification",
    "Automated Lead Follow Up",
    "Appointment Booking",
    "CRM Automation",
    "Speed to Lead",
    "Missed Call Response",
    "Missed Call Recovery",
    "Roofing Lead Response",
    "Roofing Lead Management",
    "Roofing Automation",
    "Service Business Automation",
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

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Zyvoris | Lead Response & Conversion System",
    description:
      "From new lead to booked appointment. Respond faster, qualify leads, follow up consistently, recover missed-call opportunities, and keep your lead workflow organized.",
    url: "https://zyvoris.com",
    siteName: "Zyvoris",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Zyvoris | Lead Response & Conversion System",
    description:
      "From new lead to booked appointment. Respond faster, qualify, follow up, book, and recover missed-call opportunities.",
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