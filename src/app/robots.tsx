import { MetadataRoute } from "next";

import { HOST_URL } from "@/constant/env";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // disallow: "/private/",
    },
    sitemap: HOST_URL + "/sitemap.xml",
  };
}