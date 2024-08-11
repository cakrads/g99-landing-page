import Head from "next/head";
import { Metadata } from "next";

import { ServiceLaundryCarpetContainer } from "@/container/service-laundry-carpet";
import { CARPET_WEB_DESCRIPTION, CARPET_WEB_KEYWORDS, CARPET_WEB_TITLE } from "@/constant/seo/laundry-karpet-marelan-page";
import { HOST_URL } from "@/constant/env";
import { APPLICATION_ID_JSON } from "@/constant/seo/laundry-karpet-marelan-page";
import { SHOP_NAME } from "@/constant/shop";
import { ROUTES } from "@/constant/routes";


export const metadata: Metadata = {
  metadataBase: new URL(HOST_URL || ""),
  title: CARPET_WEB_TITLE,
  description: CARPET_WEB_DESCRIPTION,
  keywords: CARPET_WEB_KEYWORDS,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: HOST_URL,
    title: CARPET_WEB_TITLE,
    description: CARPET_WEB_DESCRIPTION,
    siteName: SHOP_NAME,
    images: {
      url: HOST_URL + "/images/laundry-karpet-terdekat.png",
      width: 1920,
      height: 957,
    }
  },
  twitter: {
    card: "summary_large_image",
    title: CARPET_WEB_TITLE,
    description: CARPET_WEB_DESCRIPTION,
    // images: [`${siteConfig.url}/og.jpg`],
    // creator: "@sadmann17",
  },
  icons: {
    icon: "/icon.ico",
  },
  // manifest: absoluteUrl("/site.webmanifest"),
};

export default function LaundryKarpetMarelan() {
  return (
    <>
      <Head>
        <link rel="canonical" href={HOST_URL + ROUTES.CARPET_SERVICES} />
        <script type="application/ld+json">
          {JSON.stringify(APPLICATION_ID_JSON)}
        </script>
      </Head>
      <ServiceLaundryCarpetContainer />
    </>
  );
}
