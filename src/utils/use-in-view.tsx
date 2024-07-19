import React, { useEffect, useState } from "react";

interface IUseIsVisible {
  ref: React.RefObject<Element>;
  once?: boolean;
}

export function useIsVisible({ ref, once = false }: IUseIsVisible) {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

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

  return isIntersecting;
}