import React from "react";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import { Header } from "@/components/fragments/header";
import { Footer } from "@/components/fragments/footer";
import { cn } from "@/components/libs/cn";
import { HOME_WEB_DESCRIPTION, HOME_WEB_KEYWORDS, HOME_WEB_TITLE } from "@/constant/seo/home-page";
import { HOST_URL } from "@/constant/env";
import { SHOP_NAME } from "@/constant/shop";
import { AnalyticProvider } from "@/libs/analytic/provider";

import type { Metadata } from "next";

import "./../styles/globals.css";

const fontHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(HOST_URL || ""),
  title: HOME_WEB_TITLE,
  description: HOME_WEB_DESCRIPTION,
  keywords: HOME_WEB_KEYWORDS,
  authors: [
    {
      name: "cakra.ds",
      // url: "https://www.sadmn.com",
    },
  ],
  creator: "cakra.ds",
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

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased",
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <NextTopLoader
          color="hsl(216.8 98.2% 46.5%)"
          shadow="0 0 10px hsl(216.8 98.2% 46.5%),0 0 5px hsl(216.8 98.2% 46.5%)"
          showSpinner={false}
        />
        <AnalyticProvider>
          <Header />
          {children}
          <Footer />
        </AnalyticProvider>
      </body>
    </html>
  );
}
