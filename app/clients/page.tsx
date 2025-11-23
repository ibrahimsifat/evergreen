import PremiumClientsPage from "@/components/premium/clients-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients - Evergreen Intelligent Company Ltd",
  description:
    "See our valued clients and partners who trust Evergreen Intelligent Company Ltd for their construction and industrial needs.",
};

export default function ClientsPage() {
  return <PremiumClientsPage />;
}
