import Layout from "@/components/layout";
import PremiumAboutUs from "@/components/premium/about-us";
import PremiumClients from "@/components/premium/clients";
import PremiumContactCTA from "@/components/premium/contact-cta";
import PremiumGallerySection from "@/components/premium/gallery-section";
import PremiumHero from "@/components/premium/hero";
import PremiumMissionVision from "@/components/premium/mission-vision";
import PremiumProjects from "@/components/premium/projects";
import PremiumQuality from "@/components/premium/quality";
import PremiumServices from "@/components/premium/services";
import PremiumWhyChooseUs from "@/components/premium/why-choose-us";
import { Metadata } from "next";

// Force dynamic rendering to prevent static generation issues with client components
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title:
    "Leading Manpower, Electrical & Mechanical Subcontracting in Saudi Arabia",
  description:
    "Evergreen Intelligent Company Ltd (EIC) provides comprehensive manpower supply, electrical subcontracting, and mechanical subcontracting services across Saudi Arabia. Your trusted partner for industrial solutions.",
  keywords: [
    "manpower supply Jeddah",
    "electrical subcontracting Saudi Arabia",
    "mechanical subcontracting",
    "construction services Jeddah",
    "industrial manpower",
    "skilled workforce Saudi Arabia",
    "technical services",
  ],
  openGraph: {
    title:
      "Leading Manpower, Electrical & Mechanical Subcontracting in Saudi Arabia",
    description:
      "Evergreen Intelligent Company Ltd (EIC) provides comprehensive manpower supply, electrical subcontracting, and mechanical subcontracting services across Saudi Arabia.",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Construction site with workers and heavy machinery - Evergreen Intelligent Company Ltd",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <Layout>
      <PremiumHero />
      <PremiumAboutUs />
      <PremiumMissionVision />
      <PremiumServices />
      <PremiumProjects />
      <PremiumGallerySection />
      <PremiumClients />
      <PremiumWhyChooseUs />
      <PremiumQuality />
      <PremiumContactCTA />
    </Layout>
  );
}
