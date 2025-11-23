import PremiumServicesPage from "@/components/premium/services-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Evergreen Intelligent Company Ltd",
  description:
    "Explore our comprehensive range of services including manpower supply, electrical subcontracting, and mechanical subcontracting.",
};

export default function ServicesPage() {
  return <PremiumServicesPage />;
}
