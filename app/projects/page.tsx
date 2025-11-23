import PremiumProjectsPage from "@/components/premium/projects-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Evergreen Intelligent Company Ltd",
  description:
    "Explore our portfolio of successful construction, electrical, and mechanical projects across Saudi Arabia.",
};

export default function ProjectsPage() {
  return <PremiumProjectsPage />;
}
