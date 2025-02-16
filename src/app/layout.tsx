import React from "react";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import type { Metadata } from "next";

import { Footer } from "@/components/fragments/footer";
import { cn } from "@/components/libs/cn";
import { HOME_WEB_DESCRIPTION, HOME_WEB_KEYWORDS, HOME_WEB_TITLE, } from "@/constant/seo/home-page";
import { HOST_URL } from "@/constant/env";
import { AnalyticProvider } from "@/libs/analytic/provider";
import { createMetadata } from "@/constant/seo/meta-data";
import "./../styles/globals.css";
import { dynamic } from "@/libs/api-client/dynamic";

const Header = dynamic(
  () => import("@/components/fragments/header").then((mod) => mod.Header),
  { ssr: false }
);

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
          fontHeading.className,
          fontBody.className,
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
