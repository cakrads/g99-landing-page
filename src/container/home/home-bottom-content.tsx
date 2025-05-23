"use client";

import { dynamic } from "@/libs/api-client/dynamic";
import { HomeServices } from "./content/home-services";
import { HomeHooks } from "./content/home-hooks";
import { HomeReviews } from "./content/home-reviews";

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
      <HomeHooks />
      <HomeReviews />
      <HomeServices />
      <HomeWhy />
      {/* SECTION AYO DATANG KE KAMI  */}
      <LaundryLocation />
    </>
  );
};