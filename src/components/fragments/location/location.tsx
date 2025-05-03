import { usePathname } from "next/navigation";

import { SectionHeader } from "@/components/fragments/section-header";
import { LOCATION_DESCRIPTION, LOCATION_TITLE } from "@/constant/seo/global";
import { SHOP_ADDRESS, SHOP_NAME, SHOP_PHONE_2, SHOP_PHONE_SHOW, SHOP_PHONE_SHOW_2 } from "@/constant/shop";
import { IconClock } from "@/components/ui/icons/clock";
import { useTrackEnterSection } from "@/libs/analytic/use-enter-section";
import { ROUTES } from "@/constant/routes";
import { PhoneIcon, PhoneListIcon, WhatsAppIcon } from "@/components/ui/icons/social";
import { WA_LINK, WA_SERVICE_NAME } from "@/constant/whatsapp";
import { LocationMap } from "./location-map";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/animations";

export const LaundryLocation = () => {
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
    <section ref={ref} id="our-location" className="w-full py-24 lg:py-32">
      <div className="container">
        <SectionHeader
          title={LOCATION_TITLE}
          description={LOCATION_DESCRIPTION}
        />
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 md:gap-12">
          <FadeIn
            delay={0.2}
            direction="right"
            className="order-2 lg:order-1 h-[470px] flex flex-col justify-center space-y-4 rounded-lg overflow-hidden shadow-md shadow-primary"
          >
            <LocationMap />
          </FadeIn>
          <StaggerContainer
            className="order-1 lg:order-2 flex flex-col gap-8"
            staggerChildren={0.2}
            delayChildren={0.2}
          >
            <StaggerItem
              direction="left"
              className="space-y-2"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-primary">
                {SHOP_NAME}
              </h3>
              <p>
                {SHOP_ADDRESS}
              </p>
            </StaggerItem>
            <StaggerItem
              direction="left"
              className={"space-y-2"}
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
            </StaggerItem>
            <StaggerItem direction="left">
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
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
