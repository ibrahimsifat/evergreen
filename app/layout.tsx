import { Analytics } from "@vercel/analytics/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import type React from "react";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "Evergreen Intelligent Company Ltd - Leading Manpower, Electrical & Mechanical Subcontracting in Saudi Arabia",
    template: "%s | Evergreen Intelligent Company Ltd",
  },
  description:
    "Evergreen Intelligent Company Ltd (EIC) is a leading provider of manpower supply, electrical subcontracting, and mechanical subcontracting services in Saudi Arabia. We deliver excellence through innovation and quality.",
  keywords: [
    "manpower supply",
    "electrical subcontracting",
    "mechanical subcontracting",
    "construction company Saudi Arabia",
    "industrial services",
    "Jeddah construction",
    "Saudi Arabia manpower",
    "skilled workforce",
    "technical services",
  ],
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://evergreen.sa",
    siteName: "Evergreen Intelligent Company Ltd",
    title:
      "Evergreen Intelligent Company Ltd - Leading Manpower, Electrical & Mechanical Subcontracting",
    description:
      "Evergreen Intelligent Company Ltd (EIC) is a leading provider of manpower supply, electrical subcontracting, and mechanical subcontracting services in Saudi Arabia.",
    images: [
      {
        url: "/images/top-logo.png",
        width: 1200,
        height: 630,
        alt: "Evergreen Intelligent Company Ltd Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Evergreen Intelligent Company Ltd - Leading Manpower, Electrical & Mechanical Subcontracting",
    description:
      "Evergreen Intelligent Company Ltd (EIC) is a leading provider of manpower supply, electrical subcontracting, and mechanical subcontracting services in Saudi Arabia.",
    images: ["/images/top-logo.png"],
  },
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
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Evergreen Intelligent Company Ltd",
    alternateName: "EIC",
    url: "https://evergreen.sa",
    logo: "https://evergreen.sa/images/top-logo.png",
    description:
      "Evergreen Intelligent Company Ltd (EIC) is a leading provider of manpower supply, electrical subcontracting, and mechanical subcontracting services in Saudi Arabia.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al Nuzha",
      addressLocality: "Jeddah",
      addressCountry: "SA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "0559481660",
      contactType: "customer service",
      email: "info@evergreen.sa",
    },
    sameAs: ["https://evergreen.sa"],
    foundingDate: "2019",
    numberOfEmployees: "50+",
    areaServed: "Saudi Arabia",
    serviceType: [
      "Manpower Supply",
      "Electrical Subcontracting",
      "Mechanical Subcontracting",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
