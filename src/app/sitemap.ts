import { MetadataRoute } from "next";

import { HOST_URL } from "@/constant/env";

export default function sitemap(): MetadataRoute.Sitemap {
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
      priority: 0.8,
    },
    // {
    //   url: HOST_URL + "/",
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.5,
    // },
  ];
}