import { Metadata } from "next";
import Head from "next/head";

import { HomeContainer } from "@/container/home";
import { APPLICATION_ID_JSON, HOME_WEB_DESCRIPTION, HOME_WEB_KEYWORDS, HOME_WEB_TITLE } from "@/constant/seo/home-page";
import { HOST_URL } from "@/constant/env";
import { SHOP_NAME } from "@/constant/shop";
import { ROUTES } from "@/constant/routes";

export const metadata: Metadata = {
  metadataBase: new URL(HOST_URL || ""),
  title: HOME_WEB_TITLE,
  description: HOME_WEB_DESCRIPTION,
  keywords: HOME_WEB_KEYWORDS,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: HOST_URL,
    title: HOME_WEB_TITLE,
    description: HOME_WEB_DESCRIPTION,
    siteName: SHOP_NAME,
    images: {
      url: HOST_URL + "/images/laundry-karpet-terdekat.png",
      width: 1920,
      height: 957,
    }
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_WEB_TITLE,
    description: HOME_WEB_DESCRIPTION,
    // images: [`${siteConfig.url}/og.jpg`],
    // creator: "@sadmann17",
  },
  icons: {
    icon: "/favicon.ico",
  },
  // manifest: absoluteUrl("/site.webmanifest"),
};

export default function Home() {
  return (
    <>
      <Head>
        <link rel="canonical" href={HOST_URL + ROUTES.HOME} />
        <script type="application/ld+json">
          {JSON.stringify(APPLICATION_ID_JSON)}
        </script>
      </Head>
      <HomeContainer />
    </>
  );
}
