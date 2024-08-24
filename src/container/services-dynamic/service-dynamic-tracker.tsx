"use client";

import { useEffect } from "react";

import { useAnalytic } from "@/libs/analytic/provider";

export const ServiceDynamicPageTracker = () => {
  const analytic = useAnalytic();

  useEffect(() => {
    analytic.trackStart("enter_carpet_service_footer");
  }, [analytic]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);
  }, []);

  return null;
};
