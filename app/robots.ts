import { COMPANY_INFO } from "@/lib/seo-config";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/cms/", "/api/"],
      },
    ],
    sitemap: `${COMPANY_INFO.url}/sitemap.xml`,
  };
}
