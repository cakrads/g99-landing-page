import Head from "next/head";
import { Metadata } from "next";

import { ServiceLaundryCarpetContainer } from "@/container/service-laundry-carpet";
import { HOST_URL } from "@/constant/env";
import { ROUTES } from "@/constant/routes";
import { createMetadata } from "@/constant/seo/meta-data";
import { CARPET_WEB_DESCRIPTION, CARPET_WEB_KEYWORDS_PRIMARY, CARPET_WEB_KEYWORDS_SECONDARY, CARPET_WEB_TITLE, APPLICATION_ID_JSON, CARPET_SOCIAL_IMAGE } from "@/constant/seo/custom/laundry-karpet-marelan-page";


export function generateMetadata(): Metadata {
  return createMetadata({
    title: CARPET_WEB_TITLE,
    description: CARPET_WEB_DESCRIPTION,
    primaryKeyword: CARPET_WEB_KEYWORDS_PRIMARY,
    secondaryKeyword: CARPET_WEB_KEYWORDS_SECONDARY,
    socialImage: {
      url: CARPET_SOCIAL_IMAGE,
      width: 1920,
      height: 957,
    },
  });
}
export default function LaundryKarpetMarelan() {
  return (
    <>
      <Head>
        <link rel="canonical" href={HOST_URL + ROUTES.CARPET_SERVICES} />
        <script type="application/ld+json">
          {JSON.stringify(APPLICATION_ID_JSON)}
        </script>
      </Head>
      <ServiceLaundryCarpetContainer source="laundry-karpet-marelan" />
    </>
  );
}
