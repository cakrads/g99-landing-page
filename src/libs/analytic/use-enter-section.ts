import React, { useEffect } from "react";

import { EventKey, FeatureKey } from "./analytic.types";
import { useAnalytic } from "./provider";

interface IUseEnterSection {
  envetKey: EventKey;
  featureKey: FeatureKey;
  active?: boolean;
  // hasStartTrack ideally true, cause trackStart init in first landing page, and if false, the duration will 0
  hasStartTrack?: boolean;
}

export const useTrackEnterSection = (props: IUseEnterSection) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { envetKey, featureKey, active = true, hasStartTrack = true } = props;
  const analytic = useAnalytic();
  // Track the previous isInView value so we only fire when it transitions false→true,
  // not when the effect re-runs due to other dep changes (e.g. envetKey or analytic changing
  // on navigation while the element is already in the viewport).
  const prevIsInViewRef = React.useRef(false);

  const { isInView } = useInView(ref, { once: true });

  useEffect(() => {
    if (!active) return;

    if (!hasStartTrack) {
      analytic.trackStart(envetKey);
    }

    const justBecameVisible = isInView && !prevIsInViewRef.current;
    prevIsInViewRef.current = isInView;

    if (justBecameVisible) {
      analytic.trackEnd(envetKey);
      analytic.trackEvent(envetKey, featureKey, { success: 1, message: "OK", });
    }

  }, [hasStartTrack, active, isInView, envetKey, featureKey, analytic]);

  return {
    ref,
    isInView: isInView
  };
};

export function useInView(ref: React.RefObject<Element>, { once = false }: { once?: boolean }) {
  const [isIntersecting, setIsIntersecting] = React.useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (once && entry.isIntersecting) {
        observer.disconnect();
      }
      setIsIntersecting(entry.isIntersecting);
    }, { threshold: 0.5 });

    observer.observe(ref.current!);
    return () => {
      observer.disconnect();
    };
  }, [once, ref]);

  return {
    isInView: isIntersecting
  };
}