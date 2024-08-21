import { Metadata } from "next";
import Head from "next/head";

import { HomeContainer } from "@/container/home";
import { HOME_WEB_DESCRIPTION, HOME_WEB_KEYWORDS, HOME_WEB_TITLE } from "@/constant/seo/home-page";
import { HOST_URL } from "@/constant/env";
import { ROUTES } from "@/constant/routes";
import { createMetadata } from "@/constant/seo/meta-data";
import { generateAppIdJson } from "@/constant/seo/app-id-json";

export function generateMetadata(): Metadata {
  return createMetadata({
    title: HOME_WEB_TITLE,
    description: HOME_WEB_DESCRIPTION,
    primaryKeyword: HOME_WEB_KEYWORDS,
    secondaryKeyword: [],
    socialImage: {
      url: HOST_URL + "/images/laundry-karpet-terdekat.png",
      width: 1920,
      height: 957,
    },
  });
}


export default function Home() {
  return (
    <>
      <Head>
        <link rel="canonical" href={HOST_URL + ROUTES.HOME} />
        <script type="application/ld+json">
          {JSON.stringify(generateAppIdJson({ webTitle: HOME_WEB_TITLE }))}
        </script>
      </Head>
      <HomeContainer />
    </>
  );
}
