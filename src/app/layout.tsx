import React from "react";
import { Inter } from "next/font/google";

import { Header } from "@/components/fragments/header";
import { Footer } from "@/components/fragments/footer";
import { cn } from "@/components/libs/cn";
import { HOST_URL, WEB_DESCRIPTION, WEB_TITLE } from "@/constant/env";

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
  title: WEB_TITLE,
  description: WEB_DESCRIPTION,
  keywords: [
    "laundry",
    "laundry karpet",
    "laundry karpet terdekat",
    "laundry karpet marelan",
    "laundry karpet terdekat marelan",
  ],
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
    title: WEB_TITLE,
    description: WEB_DESCRIPTION,
    siteName: WEB_TITLE,
    images: {
      url: HOST_URL + "/images/laundry-karpet-terdekat.png",
      width: 1920,
      height: 957,
    }
  },
  twitter: {
    card: "summary_large_image",
    title: WEB_TITLE,
    description: WEB_DESCRIPTION,
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
      {/* <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head> */}
      <body
        className={cn(
          "antialiased",
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
