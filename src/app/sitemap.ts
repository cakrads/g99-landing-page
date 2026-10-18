import { MetadataRoute } from "next";

import { HOST_URL } from "@/constant/env";
import { AVAILABLE_SERVICES_ROUTES } from "@/constant/seo/get-dynamic-content";

export default function sitemap(): MetadataRoute.Sitemap {
  // Only canonical service URLs belong in the sitemap. Alias routes
  // (cuci-*) canonicalize to their laundry-* page, so listing them here
  // would send a conflicting signal to search engines.
  const availableServiceRoutes = Object.keys(AVAILABLE_SERVICES_ROUTES).filter(
    (key) => AVAILABLE_SERVICES_ROUTES[key].webSeo.routes === `/${key}`
  );
  const routes: MetadataRoute.Sitemap = availableServiceRoutes.map((key) => {
    return {
      url: HOST_URL + `/${key}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    };
  });


  return [
    {
      url: HOST_URL + "/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: HOST_URL + "/laundry-karpet-marelan",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // /cuci-karpet-medan intentionally NOT listed: per issue-03 decision
    // (option B, consolidation) it canonicalizes to /laundry-karpet-marelan,
    // so all ranking signals concentrate on the single carpet page.
    ...routes,
    // {
    //   url: HOST_URL + "/",
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.5,
    // },
  ];
}