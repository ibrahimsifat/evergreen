import { getDatabase } from "@/lib/mongodb";
import { COMPANY_INFO } from "@/lib/seo-config";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = COMPANY_INFO.url;

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/clients`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  try {
    const db = await getDatabase();

    // Fetch services
    const services = await db
      .collection("services")
      .find({})
      .project({ id: 1, updatedAt: 1 })
      .toArray();

    const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
      url: `${baseUrl}/services/${service.id}`,
      lastModified: service.updatedAt ? new Date(service.updatedAt) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

    // Fetch projects
    const projects = await db
      .collection("projects")
      .find({})
      .project({ id: 1, updatedAt: 1 })
      .toArray();

    const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
      url: `${baseUrl}/projects/${project.id}`,
      lastModified: project.updatedAt ? new Date(project.updatedAt) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

    return [...staticPages, ...servicePages, ...projectPages];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    // Return static pages if database fails
    return staticPages;
  }
}
