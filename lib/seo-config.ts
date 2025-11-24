/**
 * SEO Configuration
 * Centralized SEO metadata and company information
 */

export const COMPANY_INFO = {
  name: "Evergreen Intelligent Company Ltd",
  shortName: "Evergreen EIC",
  legalName: "Evergreen Intelligent Company Ltd (EIC)",
  description: "Leading provider of manpower supply, electrical and mechanical subcontracting services in Saudi Arabia. Delivering excellence in industrial construction and infrastructure projects.",
  url: "https://evergreen.sa",
  email: "info@evergreen.sa",
  phone: "+966 55 948 1660",
  address: {
    street: "Al Nuzha District",
    city: "Jeddah",
    region: "Makkah Province",
    country: "Saudi Arabia",
    postalCode: "",
  },
  founded: "2019",
  logo: "/images/top-logo.png",
  social: {
    linkedin: "",
    twitter: "",
    facebook: "",
  },
};

export const DEFAULT_SEO = {
  title: "Evergreen Intelligent Company Ltd - Construction & Manpower Services in Saudi Arabia",
  description: "Leading provider of manpower supply, electrical and mechanical subcontracting services in Jeddah, Saudi Arabia. ISO certified, Vision 2030 aligned.",
  keywords: [
    "manpower supply Saudi Arabia",
    "electrical subcontracting Jeddah",
    "mechanical subcontracting KSA",
    "general contracting Saudi Arabia",
    "construction services Jeddah",
    "industrial manpower supply",
    "Vision 2030 contractor",
    "ISO certified contractor Saudi Arabia",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: COMPANY_INFO.url,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: `${COMPANY_INFO.url}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: COMPANY_INFO.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@evergreenEIC",
    creator: "@evergreenEIC",
  },
};

/**
 * Generate page-specific metadata
 */
export function generateMetadata({
  title,
  description,
  keywords = [],
  image,
  path = "",
  type = "website",
}: {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  path?: string;
  type?: string;
}) {
  const fullTitle = title.includes(COMPANY_INFO.shortName)
    ? title
    : `${title} | ${COMPANY_INFO.shortName}`;
  
  const url = `${COMPANY_INFO.url}${path}`;
  const ogImage = image || DEFAULT_SEO.openGraph.images[0].url;

  return {
    title: fullTitle,
    description,
    keywords: [...DEFAULT_SEO.keywords, ...keywords].join(", "),
    authors: [{ name: COMPANY_INFO.name }],
    creator: COMPANY_INFO.name,
    publisher: COMPANY_INFO.name,
    metadataBase: new URL(COMPANY_INFO.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: COMPANY_INFO.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      creator: DEFAULT_SEO.twitter.creator,
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
  };
}

/**
 * Service-specific metadata
 */
export function generateServiceMetadata(service: {
  title: string;
  description: string;
  slug: string;
}) {
  return generateMetadata({
    title: service.title,
    description: service.description,
    keywords: [
      service.title.toLowerCase(),
      `${service.title} Saudi Arabia`,
      `${service.title} Jeddah`,
      "industrial services",
      "construction services",
    ],
    path: `/services/${service.slug}`,
    type: "article",
  });
}

/**
 * Project-specific metadata
 */
export function generateProjectMetadata(project: {
  title: string;
  description: string;
  id: string;
  category: string;
}) {
  return generateMetadata({
    title: `${project.title} - ${project.category} Project`,
    description: project.description,
    keywords: [
      project.category.toLowerCase(),
      "construction project Saudi Arabia",
      "industrial project Jeddah",
      project.title.toLowerCase(),
    ],
    path: `/projects/${project.id}`,
    type: "article",
  });
}
