import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { LocalBusinessSchema, OrganizationSchema } from "@/components/seo/structured-data";
import { DEFAULT_SEO } from "@/lib/seo-config";
import { Analytics } from "@vercel/analytics/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import type React from "react";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: DEFAULT_SEO.title,
    template: "%s | Evergreen EIC",
  },
  description: DEFAULT_SEO.description,
  keywords: DEFAULT_SEO.keywords,
  authors: [{ name: "Evergreen Intelligent Company Ltd" }],
  creator: "Evergreen Intelligent Company Ltd",
  publisher: "Evergreen Intelligent Company Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://evergreen.sa"),
  alternates: {
    canonical: "/",
  },
  openGraph: DEFAULT_SEO.openGraph,
  twitter: DEFAULT_SEO.twitter,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
      </body>
    </html>
  );
}
