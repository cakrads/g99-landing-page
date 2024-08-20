"use client";

import { dynamic } from "@/libs/api-client/dynamic";

import { LaundryCarpetWhy } from "./content/service-laundry-carpet-why";
import { LaundryCarpetHooks } from "./content/service-laundry-carpet-hooks";
// import { LaundryCarpetDetailServices } from "./content/service-laundry-carpet-detail";

const LaundryLocation = dynamic(
  () => import("@/components/fragments/location").then((mod) => mod.LaundryLocation),
  { ssr: false }
);

export const LaundryCarpetBottomContent = () => {
  return (
    <>
      <LaundryCarpetHooks />
      <LaundryCarpetWhy />
      {/* <LaundryCarpetDetailServices /> */}
      <LaundryLocation />
    </>
  );
};