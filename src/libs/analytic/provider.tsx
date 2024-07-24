/* eslint-disable no-unused-vars */
"use client";

import * as React from "react";
import ReactGA from "react-ga4";
import { usePathname } from "next/navigation";

import { initializeGA } from "./utils";
import { EventKey, FeatureKey } from "./analytic.types";

if (typeof window !== "undefined") {
  initializeGA();
}

interface OptionsEvent {
  success: 0 | 1
  message: "OK" | string
  duration?: number
  page?: string
  source?: string
  action?: string
  details?: string | null
  params_id?: string | number
}

interface AnalyticContextValue {
  trackEvent: (
    event: EventKey,
    feature: FeatureKey,
    options: OptionsEvent
  ) => void
  trackStart: (event: EventKey) => void
  trackEnd: (event: EventKey) => void
}

const AnalyticContext = React.createContext<AnalyticContextValue>({
  trackEvent: () => { },
  trackStart: () => { },
  trackEnd: () => { },
});

export const AnalyticProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();
  const execTimeRef = React.useRef<
    Record<string, { start?: number; duration?: number }>
  >({});

  const trackStart = React.useMemo(() => (
    event: EventKey
  ) => {
    // console.log(`start track: ${event}`);
    if (!execTimeRef.current[event]) execTimeRef.current[event] = {};
    execTimeRef.current[event].start = performance.now();
  }, []);

  const trackEnd = React.useMemo(() => (
    event: EventKey,
  ) => {
    if (!execTimeRef.current?.[event]) {
      throw new Error(event + " - event start not setted");
    }

    // console.log(`end track: ${event}`);
    execTimeRef.current[event].duration = Math.round(
      (performance.now() - execTimeRef.current[event].start!) / 1000
    );
  }, []);

  const trackEvent = React.useMemo(() => (
    event: EventKey,
    feature: string,
    options: OptionsEvent
  ) => {
    const page_title = document?.title;
    const duration = execTimeRef.current?.[event]?.duration ?? 0;
    const page = pathname;
    // console.log(`send track: ${event} in feature: ${feature} with duration: ${duration}. options: ${JSON.stringify(options)}`);

    ReactGA.event(event, {
      page_title,
      feature,
      duration,
      page,
      ...options,
    });
  }, [pathname]);

  return (
    <AnalyticContext.Provider
      value={React.useMemo(() => ({
        trackEvent,
        trackStart,
        trackEnd,
      }), [trackEvent, trackStart, trackEnd])}
    >
      {children}
    </AnalyticContext.Provider>
  );
};

export const useAnalytic = () => React?.useContext(AnalyticContext);
