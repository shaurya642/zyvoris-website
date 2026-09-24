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
    default: "Zyvoris | PI Lead Conversion System for Personal Injury Law Firms",
    template: "%s | Zyvoris",
  },

  description:
    "ZYVORIS helps US personal injury law firms turn more of the inbound opportunities they already generate into qualified consultations through fast response, intake support, qualification, follow-up, missed-call recovery, consultation booking, CRM updates, and team notifications.",

  keywords: [
    "Personal Injury Lead Conversion",
    "PI Lead Conversion",
    "Personal Injury Lead Response",
    "PI Lead Response",
    "Personal Injury Lead Qualification",
    "PI Lead Qualification",
    "Personal Injury Lead Follow Up",
    "PI Lead Follow Up",
    "Personal Injury Intake Automation",
    "PI Intake Automation",
    "Personal Injury Consultation Booking",
    "PI Consultation Booking",
    "Personal Injury Missed Call Recovery",
    "PI Missed Call Recovery",
    "Personal Injury Lead Management",
    "PI Lead Management",
    "Personal Injury CRM Automation",
    "PI CRM Automation",
    "Lead Response & Conversion System",
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
    title:
      "Zyvoris | PI Lead Conversion System for Personal Injury Law Firms",
    description:
      "Turn more of the inbound opportunities your personal injury law firm already generates into qualified consultations. Respond faster, support intake, qualify inquiries, recover missed calls, follow up consistently, and move qualified prospects toward consultations.",
    url: "https://zyvoris.com",
    siteName: "Zyvoris",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Zyvoris | PI Lead Conversion System for Personal Injury Law Firms",
    description:
      "Help your personal injury law firm turn more existing inbound opportunities into qualified consultations through fast response, intake support, qualification, follow-up, missed-call recovery, booking, and lead management.",
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
      className={`${manrope.variable} ${geistMono.variable} bg-background`}
    >
      <body className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground antialiased selection:bg-primary/20 selection:text-white">
        {children}

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}