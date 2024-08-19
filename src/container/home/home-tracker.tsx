"use client";

import React, { useEffect } from "react";
import clsx from "clsx";

import { useAnalytic } from "@/libs/analytic/provider";
import { useTrackEnterSection } from "@/libs/analytic/use-enter-section";
import Link from "@/components/ui/link";

export const HomePageTracker = () => {
  const analytic = useAnalytic();

  useEffect(() => {
    analytic.trackStart("enter_home_services");
    analytic.trackStart("enter_home_why");
    analytic.trackStart("enter_home_location");
    analytic.trackStart("enter_home_footer");
  }, [analytic]);

  return null;
};

export const HomeHeroTracker = () => {
  // Hero is SSR, so need this hidden div to track in client
  const { ref } = useTrackEnterSection({
    envetKey: "enter_home_hero",
    featureKey: "Home Page",
    hasStartTrack: false,
  });

  return <div ref={ref} className="hidden" />;
};

export const HomeHeroCtaBtn = () => {
  const analytic = useAnalytic();

  useEffect(() => {
    analytic.trackStart("click_home_hero_cta");
  }, [analytic]);

  const handleClickCta = () => {
    analytic.trackEnd("click_home_hero_cta");
    analytic.trackEvent("click_home_hero_cta", "Home Page", { success: 1, message: "OK" });
  };

  return (
    <Link
      href="#our-location"
      className={clsx(
        "inline-flex items-center justify-center rounded-md py-4 px-10 text-sm font-semibold",
        "bg-secondary text-secondary-foreground shadow transition-all duration-500",
        "hover:bg-white hover:text-foreground",
      )}
      onClick={handleClickCta}
    >
      Pesan Sekarang
    </Link>
  );
};