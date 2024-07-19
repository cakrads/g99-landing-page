"use client";

import { dynamic } from "@/libs/api-client/dynamic";

import { LaundryCarpetWhy } from "./content/service-laundry-carpet-why";

const LaundryLocation = dynamic(
  () => import("@/components/fragments/location").then((mod) => mod.LaundryLocation),
  { ssr: false }
);

export const LaundryCarpetBottomContent = () => {
  return (
    <>
      <LaundryCarpetWhy />
      <LaundryLocation />
    </>
  );
};