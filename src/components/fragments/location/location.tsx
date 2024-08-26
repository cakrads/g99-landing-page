import { useRef } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import { SectionHeader } from "@/components/fragments/section-header";
import { useIsVisible } from "@/utils/use-in-view";
import { LOCATION_DESCRIPTION, LOCATION_TITLE } from "@/constant/seo/global";
import { SHOP_ADDRESS, SHOP_NAME, SHOP_PHONE_2, SHOP_PHONE_SHOW, SHOP_PHONE_SHOW_2 } from "@/constant/shop";
import { IconClock } from "@/components/ui/icons/clock";
import { useTrackEnterSection } from "@/libs/analytic/use-enter-section";
import { ROUTES } from "@/constant/routes";
import { PhoneIcon, PhoneListIcon, WhatsAppIcon } from "@/components/ui/icons/social";
import { WA_LINK, WA_SERVICE_NAME } from "@/constant/whatsapp";

import { LocationMap } from "./location-map";

export const LaundryLocation = () => {
  const refInfo = useRef(null);
  const isInfoIntersecting = useIsVisible({ ref: refInfo, once: true });
  const refMap = useRef(null);
  const isMapIntersecting = useIsVisible({ ref: refMap, once: true });

  const pathname = usePathname();
  const { ref } = useTrackEnterSection(
    pathname === ROUTES.HOME
      ? {
        envetKey: "enter_home_footer",
        featureKey: "Home Page",
      } : {
        envetKey: "enter_carpet_service_footer",
        featureKey: "Carpet Service Page",
      }
  );

  const days = [
    { day: "Senin", time: "07:00 - 21:00 WIB" },
    { day: "Selasa", time: "07:00 - 21:00 WIB" },
    { day: "Rabu", time: "07:00 - 21:00 WIB" },
    { day: "Kamis", time: "07:00 - 21:00 WIB" },
    { day: "Jum'at", time: "07:00 - 21:00 WIB" },
    { day: "Sabtu", time: "07:00 - 21:00 WIB" },
    { day: "Minggu", time: "07:00 - 21:00 WIB" },
  ];

  return (
    <section ref={ref} id="our-location" className="w-full pt-24 pb-12 md:py-24 lg:py-32">
      <div className="container">
        <SectionHeader
          title={LOCATION_TITLE}
          description={LOCATION_DESCRIPTION}
        />
        <div ref={refMap} className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 md:gap-12">
          <div
            className={clsx(
              "order-2 lg:order-1 h-[470px] flex flex-col justify-center space-y-4 rounded-lg overflow-hidden shadow-md shadow-primary",
              isMapIntersecting ? "animate-fade-right animate-once animate-ease-in-out animate-delay-500 md:animate-delay-0" : "opacity-0"
            )}
          >
            <LocationMap />
          </div>
          <div ref={refInfo} className="order-1 lg:order-2 flex flex-col gap-8">
            <div className={clsx(
              "space-y-2",
              isInfoIntersecting ? "animate-fade-left animate-once animate-ease-in-out animate-delay-100" : "opacity-0"
            )}>
              <h3 className="text-2xl sm:text-3xl font-semibold text-primary">
                {SHOP_NAME}
              </h3>
              <p>
                {SHOP_ADDRESS}
              </p>
            </div>
            <div
              className={clsx(
                "space-y-2",
                isInfoIntersecting ? "animate-fade-left animate-once animate-ease-in-out animate-delay-300" : "opacity-0"
              )}
            >
              <h4 className="font-semibold flex flex-row gap-1 items-center">
                <PhoneListIcon />
                Hubungi Kami di :
              </h4>
              <div className="flex gap-5 w-full">
                <a
                  href={WA_LINK(WA_SERVICE_NAME.GLOBAL)}
                  target="_blank"
                  className="flex w-full justify-center items-center gap-2 rounded-md py-4 px-2 bg-whatsapp-gradient md:px-5 shadow-2xl hover:shadow-xl active:shadow-2xl focus:shadow-2xl"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <b className="text-[#fff] text-xs md:text-sm drop-shadow-xl">{SHOP_PHONE_SHOW}</b>
                </a>
                <a
                  href={`tel:${SHOP_PHONE_2}`}
                  className="flex w-full justify-center items-center gap-2 rounded-md py-4 px-2 bg-background md:px-5 shadow-2xl border hover:border-primary hover:shadow-xl active:shadow-2xl focus:shadow-2xl"
                >
                  <PhoneIcon className="w-5 h-5" />
                  <b className="text-xs md:text-sm drop-shadow-xl">{SHOP_PHONE_SHOW_2}</b>
                </a>
              </div>
            </div>
            <div
              className={clsx(
                isInfoIntersecting ? "animate-fade-left animate-once animate-ease-in-out animate-delay-500" : "opacity-0"
              )}
            >
              <h4 className="font-semibold flex flex-row gap-1 items-center">
                <IconClock />
                Jam Operasional :
              </h4>
              {days.map((entry, index) => (
                <div key={index + entry.day} className="flex w-64 justify-between my-1 font-medium">
                  <span>{entry.day}</span>
                  <span>: {entry.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
