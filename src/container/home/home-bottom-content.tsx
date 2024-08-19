"use client";

import { dynamic } from "@/libs/api-client/dynamic";

import { HomeServices } from "./content/home-services";
import { HomeAboutUs } from "./content/home-about-us";

const LaundryLocation = dynamic(
  () => import("@/components/fragments/location").then((mod) => mod.LaundryLocation),
  { ssr: false }
);
const HomeWhy = dynamic(
  () => import("./content/home-why").then((mod) => mod.HomeWhy),
  { ssr: false }
);

export const HomeBottomContent = () => {
  return (
    <>
      <HomeAboutUs />
      <HomeServices />
      <HomeWhy />
      {/* SECTION AYO DATANG KE KAMI  */}
      <LaundryLocation />
    </>
  );
};