import { Metadata } from "next";

import { HomeContainer } from "@/container/home";
import { HOME_WEB_DESCRIPTION, HOME_WEB_KEYWORDS, HOME_WEB_TITLE } from "@/constant/seo/home-page";
import { HOST_URL } from "@/constant/env";
import { ROUTES } from "@/constant/routes";
import { createMetadata } from "@/constant/seo/meta-data";
import { generateAppIdJson } from "@/constant/seo/app-id-json";

export function generateMetadata(): Metadata {
  return {
    ...createMetadata({
      title: HOME_WEB_TITLE,
      description: HOME_WEB_DESCRIPTION,
      primaryKeyword: HOME_WEB_KEYWORDS,
      secondaryKeyword: [],
      socialImage: {
        url: HOST_URL + "/images/laundry-karpet-marelan-g99.png",
        width: 1200,
        height: 600,
      },
    }),
    alternates: {
      canonical: HOST_URL + ROUTES.HOME,
    },
  };
}


export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateAppIdJson()).replace(/<\/script>/gi, "<\\/script>") }}
      />
      <HomeContainer />
    </>
  );
}
