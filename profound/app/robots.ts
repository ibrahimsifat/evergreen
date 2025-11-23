import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/", "/api/", "/cms/", "/login"],
    },
    sitemap: "https://profoundksa.com/sitemap.xml",
  };
}
