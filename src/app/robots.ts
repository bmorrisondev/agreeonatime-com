import type { MetadataRoute } from "next";

import { marketingSiteOrigin } from "@/lib/marketing/constants";

export default function robots(): MetadataRoute.Robots {
  const base: string = marketingSiteOrigin;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
