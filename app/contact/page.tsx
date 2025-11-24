import PremiumContactPage from "@/components/premium/contact-page-v2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Evergreen Intelligent Company Ltd",
  description:
    "Get in touch with Evergreen Intelligent Company Ltd for your construction and manpower needs in Saudi Arabia. Contact us for a consultation.",
};

export default function ContactPage() {
  return <PremiumContactPage />;
}
