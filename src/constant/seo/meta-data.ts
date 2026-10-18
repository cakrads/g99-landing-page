import { Metadata } from "next";

import { HOST_URL } from "../env";
import { SHOP_NAME } from "../shop";

interface IGenerateMetaData {
  title: string
  description: string
  primaryKeyword: Array<string>
  secondaryKeyword: Array<string>
  /** Canonical page URL for og:url. Defaults to HOST_URL (homepage). */
  url?: string
  /** Absolute social image URL (already includes HOST_URL). Used as-is. */
  socialImage: {
    url: string
    width: number
    height: number
  }
}

export const createMetadata = (dataSeo: IGenerateMetaData): Metadata => {

  return {
    metadataBase: new URL(HOST_URL || ""),
    title: dataSeo.title,
    description: dataSeo.description,
    keywords: [...dataSeo.primaryKeyword, ...dataSeo.secondaryKeyword],
    openGraph: {
      type: "website",
      locale: "id_ID",
      url: dataSeo.url ?? HOST_URL,
      title: dataSeo.title,
      description: dataSeo.description,
      siteName: SHOP_NAME,
      images: {
        url: dataSeo.socialImage.url,
        width: dataSeo.socialImage.width,
        height: dataSeo.socialImage.height,
      }
    },
    twitter: {
      card: "summary_large_image",
      title: dataSeo.title,
      description: dataSeo.description,
      images: [dataSeo.socialImage.url],
    },
    icons: {
      icon: "/icon.ico",
    },
    // manifest: absoluteUrl("/site.webmanifest"),
  };
};
