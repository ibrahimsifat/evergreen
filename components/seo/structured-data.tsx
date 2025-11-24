"use client";

import { COMPANY_INFO } from "@/lib/seo-config";
import Script from "next/script";

/**
 * Organization Structured Data
 */
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_INFO.name,
    legalName: COMPANY_INFO.legalName,
    url: COMPANY_INFO.url,
    logo: `${COMPANY_INFO.url}${COMPANY_INFO.logo}`,
    foundingDate: COMPANY_INFO.founded,
    email: COMPANY_INFO.email,
    telephone: COMPANY_INFO.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_INFO.address.street,
      addressLocality: COMPANY_INFO.address.city,
      addressRegion: COMPANY_INFO.address.region,
      addressCountry: COMPANY_INFO.address.country,
    },
    sameAs: Object.values(COMPANY_INFO.social).filter(Boolean),
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Local Business Structured Data
 */
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: COMPANY_INFO.name,
    image: `${COMPANY_INFO.url}${COMPANY_INFO.logo}`,
    "@id": COMPANY_INFO.url,
    url: COMPANY_INFO.url,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_INFO.address.street,
      addressLocality: COMPANY_INFO.address.city,
      addressRegion: COMPANY_INFO.address.region,
      addressCountry: COMPANY_INFO.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.5433,
      longitude: 39.1728,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
      opens: "08:00",
      closes: "17:00",
    },
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Saudi Arabia",
    },
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Service Structured Data
 */
export function ServiceSchema({ service }: { service: any }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
      url: COMPANY_INFO.url,
    },
    areaServed: {
      "@type": "Country",
      name: "Saudi Arabia",
    },
    serviceType: service.category || "Construction Service",
  };

  return (
    <Script
      id={`service-schema-${service.id}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Breadcrumb Structured Data
 */
export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${COMPANY_INFO.url}${item.url}`,
    })),
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * FAQ Structured Data
 */
export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
