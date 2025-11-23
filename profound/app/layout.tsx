import { Analytics } from "@vercel/analytics/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import type React from "react";
import { Suspense } from "react";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: {
    default:
      "Profound Company for Contracting - Leading Construction & Manpower Solutions in Saudi Arabia",
    template: "%s | Profound Company for Contracting",
  },
  description:
    "Leading construction and manpower solutions provider in Saudi Arabia. We deliver excellence through innovation, quality, and unwavering commitment to client satisfaction. Specializing in manpower supply, equipment supply, material supply, and contracting works.",
  keywords: [
    "construction company Saudi Arabia",
    "manpower supply",
    "equipment supply",
    "material supply",
    "contracting works",
    "industrial construction",
    "general contracting",
    "Jeddah construction",
    "Saudi Arabia construction",
    "construction services",
    "building contractors",
    "industrial projects",
  ],
  authors: [{ name: "Profound Company for Contracting" }],
  creator: "Profound Company for Contracting",
  publisher: "Profound Company for Contracting",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://profoundksa.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://profoundksa.com",
    siteName: "Profound Company for Contracting",
    title:
      "Profound Company for Contracting - Leading Construction & Manpower Solutions",
    description:
      "Leading construction and manpower solutions provider in Saudi Arabia. We deliver excellence through innovation, quality, and unwavering commitment to client satisfaction.",
    images: [
      {
        url: "/images/top-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Profound Company for Contracting Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Profound Company for Contracting - Leading Construction & Manpower Solutions",
    description:
      "Leading construction and manpower solutions provider in Saudi Arabia. We deliver excellence through innovation, quality, and unwavering commitment to client satisfaction.",
    images: ["/images/top-logo.jpg"],
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
    name: "Profound Company for Contracting",
    alternateName: "شركــة بــروفــاونــد",
    url: "https://profoundksa.com",
    logo: "https://profoundksa.com/images/top-logo.jpg",
    description:
      "Leading contracting company in Saudi Arabia providing integrated solutions for construction industry with civil, structural, mechanical, electrical, and plumbing services.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Building No. 6954, 18 Street, Al Adama District",
      addressLocality: "Dammam",
      postalCode: "31411",
      addressRegion: "Eastern Province",
      addressCountry: "SA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+966548218876",
      contactType: "customer service",
      email: "Profoundksa@gmail.com",
    },
    sameAs: ["https://profoundksa.com"],
    foundingDate: "2010",
    numberOfEmployees: "200+",
    areaServed: "Saudi Arabia",
    serviceType: [
      "General Contracting",
      "Civil Work & Site Preparation",
      "Structural & Finishing Work",
      "MEP Work (Mechanical, Electrical, Plumbing)",
      "HVAC System & Cooling Tower",
      "Firefighting & Fire Alarm Systems",
      "BMS & Low Current Systems",
      "Industrial Support Services",
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
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${cairo.variable}`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
