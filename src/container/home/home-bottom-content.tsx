"use client";

import { LaundryLocation } from "@/components/fragments/location";

import { HomeWhy } from "./content/home-why";
import { HomeServices } from "./content/home-services";

export const HomeBottomContent = () => {
  return (
    <>
      <HomeServices />
      <HomeWhy />
      <LaundryLocation />
    </>
  );
};