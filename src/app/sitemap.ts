import type { MetadataRoute } from "next";

import { marketingSiteOrigin } from "@/lib/marketing/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base: string = marketingSiteOrigin;
  const lastModified: Date = new Date();

  return [
    { url: base, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${base}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${base}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${base}/support`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
