"use client";

import { LaundryLocation } from "@/components/fragments/location";

import { LaundryCarpetWhy } from "./content/service-laundry-carpet-why";

export const LaundryCarpetBottomContent = () => {
  return (
    <>
      <LaundryCarpetWhy />
      <LaundryLocation />
    </>
  );
};