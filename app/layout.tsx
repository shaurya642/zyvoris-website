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
    default: "Zyvoris | Lead Response & Conversion System for HVAC Companies",
    template: "%s | Zyvoris",
  },

  description:
    "ZYVORIS helps HVAC companies turn more of the leads they already generate into booked jobs through fast response, lead qualification, follow-up, missed-call recovery, appointment booking, CRM updates, and team notifications.",

  keywords: [
    "HVAC Lead Response",
    "HVAC Lead Conversion",
    "HVAC Lead Qualification",
    "HVAC Lead Follow Up",
    "HVAC Appointment Booking",
    "HVAC CRM Automation",
    "HVAC Missed Call Recovery",
    "HVAC Missed Call Response",
    "HVAC Speed to Lead",
    "HVAC Lead Management",
    "HVAC Automation",
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
    title: "Zyvoris | Lead Response & Conversion System for HVAC Companies",
    description:
      "Turn more of the leads your HVAC company already generates into booked jobs. Respond faster, qualify leads, recover missed calls, follow up consistently, and move ready prospects toward appointments.",
    url: "https://zyvoris.com",
    siteName: "Zyvoris",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Zyvoris | Lead Response & Conversion System for HVAC Companies",
    description:
      "Help your HVAC company turn more existing leads into booked jobs through fast response, qualification, follow-up, missed-call recovery, booking, and lead management.",
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