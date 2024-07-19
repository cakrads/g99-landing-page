"use client";

import { dynamic } from "@/libs/api-client/dynamic";

import { HomeServices } from "./content/home-services";

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
      <HomeServices />
      <HomeWhy />
      <LaundryLocation />
    </>
  );
};