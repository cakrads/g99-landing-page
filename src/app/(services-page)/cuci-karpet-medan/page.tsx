import { Metadata } from "next";

import { ServiceLaundryCarpetContainer } from "@/container/service-laundry-carpet";
import { HOST_URL } from "@/constant/env";
import { ROUTES } from "@/constant/routes";
import { createMetadata } from "@/constant/seo/meta-data";
import { generateBreadcrumbJsonLd, generateServiceJsonLd } from "@/constant/seo/service-json";
import { APPLICATION_ID_JSON, CARPET_WEB_DESCRIPTION, CARPET_WEB_KEYWORDS_PRIMARY, CARPET_WEB_KEYWORDS_SECONDARY, CARPET_WEB_TITLE, CARPET_SOCIAL_IMAGE } from "@/constant/seo/custom/laundry-karpet-marelan-page";


export function generateMetadata(): Metadata {
  return {
    ...createMetadata({
      title: CARPET_WEB_TITLE,
      description: CARPET_WEB_DESCRIPTION,
      primaryKeyword: CARPET_WEB_KEYWORDS_PRIMARY,
      secondaryKeyword: CARPET_WEB_KEYWORDS_SECONDARY,
      url: HOST_URL + ROUTES.CARPET_SERVICES,
      socialImage: {
        url: CARPET_SOCIAL_IMAGE,
        width: 1920,
        height: 957,
      },
    }),
    alternates: {
      canonical: HOST_URL + ROUTES.CARPET_SERVICES,
    },
  };
}

export default function CuciKarpetMedan() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(APPLICATION_ID_JSON).replace(/<\/script>/gi, "<\\/script>") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateServiceJsonLd({
          name: "Cuci Karpet",
          alternateName: "Laundry Karpet",
          description: CARPET_WEB_DESCRIPTION,
          url: HOST_URL + ROUTES.CARPET_SERVICES,
        })).replace(/<\/script>/gi, "<\\/script>") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbJsonLd([
          { name: "Beranda", url: HOST_URL + "/" },
          { name: "Cuci Karpet Marelan", url: HOST_URL + ROUTES.CARPET_SERVICES },
        ])).replace(/<\/script>/gi, "<\\/script>") }}
      />
      <ServiceLaundryCarpetContainer source="cuci-karpet-medan" />
    </>
  );
}
