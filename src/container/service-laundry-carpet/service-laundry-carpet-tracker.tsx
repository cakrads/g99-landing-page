"use client";

import React, { useEffect } from "react";

import { useAnalytic } from "@/libs/analytic/provider";
import { useTrackEnterSection } from "@/libs/analytic/use-enter-section";
import Link from "@/components/ui/link";

export const CarpetServicePageTracker = () => {
  const analytic = useAnalytic();

  useEffect(() => {
    analytic.trackStart("enter_carpet_service_hooks");
    analytic.trackStart("enter_carpet_service_why");
    analytic.trackStart("enter_carpet_service_location");
    analytic.trackStart("enter_carpet_service_footer");
  }, [analytic]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);
  }, []);

  return null;
};

export const CarpetServiceHeroTracker = () => {
  // Hero is SSR, so need this hidden div to track in client
  const { ref } = useTrackEnterSection({
    envetKey: "enter_carpet_service_hero",
    featureKey: "Carpet Service Page",
    hasStartTrack: false,
  });

  return <div ref={ref} className="hidden" />;
};

export const CarpetServiceCtaBtn = ({ label }: { label: string }) => {
  const analytic = useAnalytic();

  useEffect(() => {
    analytic.trackStart("click_carpet_service_hero_cta");
  }, [analytic]);

  const handleClickCta = () => {
    analytic.trackEnd("click_carpet_service_hero_cta");
    analytic.trackEvent("click_carpet_service_hero_cta", "Carpet Service Page", { success: 1, message: "OK" });
  };

  return (
    <Link
      href="#our-location"
      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-secondary shadow transition-colors hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
      prefetch={false}
      onClick={handleClickCta}
    >
      {label}
    </Link>
  );
};