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
  icons: "/images/favicon.ico",
  openGraph: {
    title: WEB_TITLE,
    description: WEB_DESCRIPTION,
    url: HOST_URL,
    images: {
      url: HOST_URL + "/images/laundry-karpet-terdekat.png",
      width: 1920,
      height: 957,
    }
  }
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
