import PremiumAboutPage from "@/components/premium/about-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Evergreen Intelligent Company Ltd",
  description:
    "Learn about Evergreen Intelligent Company Ltd (EIC), a leading manpower, electrical and mechanical subcontracting provider in Saudi Arabia. Discover our mission, values, and commitment to excellence.",
  keywords: [
    "about Evergreen Intelligent Company Ltd",
    "EIC Saudi Arabia",
    "manpower supply company",
    "electrical subcontracting",
    "mechanical subcontracting",
    "construction services Jeddah",
  ],
  openGraph: {
    title: "About Us - Evergreen Intelligent Company Ltd",
    description:
      "Learn about Evergreen Intelligent Company Ltd (EIC), a leading manpower, electrical and mechanical subcontracting provider in Saudi Arabia.",
    images: [
      {
        url: "/images/imgi_13_6.jpg",
        width: 1200,
        height: 630,
        alt: "About Evergreen Intelligent Company Ltd - Team and facilities",
      },
    ],
  },
};

export default function AboutPage() {
  return <PremiumAboutPage />;
}
