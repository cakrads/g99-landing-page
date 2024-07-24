import { useRef } from "react";
import clsx from "clsx";

import { SectionHeader } from "@/components/fragments/section-header";
import { useIsVisible } from "@/utils/use-in-view";
import { LOCATION_DESCRIPTION, LOCATION_TITLE } from "@/constant/seo/global";
import { SHOP_ADDRESS, SHOP_NAME } from "@/constant/shop";
import { IconClock } from "@/components/ui/icons/clock";

import { LocationMap } from "./location-map";

export const LaundryLocation = () => {
  const refInfo = useRef(null);
  const isInfoIntersecting = useIsVisible({ ref: refInfo, once: true });
  const refMap = useRef(null);
  const isMapIntersecting = useIsVisible({ ref: refMap, once: true });

  const days = [
    { day: "Senin", time: "09:00 - 21:00 WIB" },
    { day: "Selasa", time: "09:00 - 21:00 WIB" },
    { day: "Rabu", time: "09:00 - 21:00 WIB" },
    { day: "Kamis", time: "09:00 - 21:00 WIB" },
    { day: "Jum'at", time: "09:00 - 21:00 WIB" },
    { day: "Sabtu", time: "09:00 - 21:00 WIB" },
    { day: "Minggu", time: "09:00 - 21:00 WIB" },
  ];

  return (
    <section id="our-location" className="w-full pt-24 pb-12 md:py-24 lg:py-32">
      <div className="container">
        <SectionHeader
          title={LOCATION_TITLE}
          description={LOCATION_DESCRIPTION}
        />
        <div ref={refMap} className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 md:gap-12">
          <div
            className={clsx(
              "order-2 lg:order-1 h-[400px] flex flex-col justify-center space-y-4 border rounded-lg overflow-hidden",
              isMapIntersecting ? "animate-fade-right animate-once animate-ease-in-out animate-delay-500 md:animate-delay-0" : "opacity-0"
            )}
          >
            <LocationMap />
          </div>
          <div ref={refInfo} className="order-1 lg:order-2 flex flex-col space-y-4">
            <div className="space-y-2">
              <h3
                className={clsx(
                  "text-2xl sm:text-4xl font-semibold",
                  isInfoIntersecting ? "animate-fade-left animate-once animate-ease-in-out animate-delay-100" : "opacity-0"
                )}
              >
                {SHOP_NAME}
              </h3>
              <p
                className={clsx(
                  "text-foreground-secondary",
                  isInfoIntersecting ? "animate-fade-left animate-once animate-ease-in-out animate-delay-200" : "opacity-0"
                )}
              >
                {SHOP_ADDRESS}
              </p>
              <br />
              <div
                className={clsx(
                  "text-foreground-secondary",
                  isInfoIntersecting ? "animate-fade-left animate-once animate-ease-in-out animate-delay-300" : "opacity-0"
                )}
              >
                <h4 className="font-semibold flex flex-row gap-2 items-center">
                  <IconClock />
                  Jam Operasional:
                </h4>
                {days.map((entry, index) => (
                  <div key={index + entry.day} className="flex w-64 justify-between my-1">
                    <span>{entry.day}</span>
                    <span>: {entry.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
