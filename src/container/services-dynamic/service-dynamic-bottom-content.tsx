"use client";

import { dynamic } from "@/libs/api-client/dynamic";

const LaundryLocation = dynamic(
  () => import("@/components/fragments/location").then((mod) => mod.LaundryLocation),
  { ssr: false }
);

export const LaundryDynamicBottomContent = () => {
  return (
    <LaundryLocation />
  );
};