import { MetadataRoute } from "next";

import { HOST_URL } from "@/constant/env";
import { AVAILABLE_SERVICES_ROUTES } from "@/constant/seo/get-dynamic-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const availableServiceRoutes = Object.keys(AVAILABLE_SERVICES_ROUTES);
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
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: HOST_URL + "/laundry-karpet-marelan",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: HOST_URL + "/cuci-karpet-medan",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...routes,
    // {
    //   url: HOST_URL + "/",
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.5,
    // },
  ];
}