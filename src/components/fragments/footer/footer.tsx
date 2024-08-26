"use client";

import { usePathname } from "next/navigation";
import React from "react";
import clsx from "clsx";

import Link from "@/components/ui/link";
import { SHOP_ADDRESS, SHOP_DESCRIPTION, SHOP_FB, SHOP_IG, SHOP_MOTTO, SHOP_NAME, SHOP_PHONE, SHOP_PHONE_2, SHOP_PHONE_SHOW, SHOP_PHONE_SHOW_2, SHOP_TIKTOK } from "@/constant/shop";
import { WA_LINK, WA_SERVICE_NAME } from "@/constant/whatsapp";
import { FacebookIcon, InstagramIcon, TiktokIcon, WhatsAppIcon } from "@/components/ui/icons/social";
import { WaveTopBgShape, WaveTopBgShapeSM } from "@/components/ui/shapes";
import { useTrackEnterSection } from "@/libs/analytic/use-enter-section";
import { ROUTES } from "@/constant/routes";
import { useAnalytic } from "@/libs/analytic/provider";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

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

  const {
    handleClickFABWhatsapp,
    handleClickPhone1,
    handleClickPhone2,
    handleClickNavHome,
    handleClickNavCarpetService,
    handleClickFacebook,
    handleClickInstagram,
    handleClickTiktok,
  } = useFooterTracker({ isInView: true });

  return (
    <>
      <Link
        href={WA_LINK(WA_SERVICE_NAME.GLOBAL)}
        target="_blank"
        className={clsx(
          "fixed bottom-4 right-4 flex items-center gap-2",
          "rounded-full bg-whatsapp-gradient py-2 px-4 md:px-5",
          "shadow-2xl hover:shadow-xl active:shadow-2xl focus:shadow-2xl"
        )}
        prefetch={false}
        onClick={handleClickFABWhatsapp}
      >
        <WhatsAppIcon className="w-5 h-5" />
        <b className="text-[#fff] text-xs md:text-sm drop-shadow-xl">PESAN JASA KAMI</b>
        {/* <span className="sr-only">WhatsApp</span> */}
      </Link>
      <footer ref={ref}>
        <WaveTopBgShapeSM className="w-full block lg:hidden" color="hsl(223 9% 15%)" />
        <WaveTopBgShape className="w-full hidden lg:block" color="hsl(223 9% 15%)" />
        <div className="bg-secondary text-secondary-foreground py-8">
          <div className="container mt-8 mx-auto">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-6">
              <div>
                <h3 className="mb-4 text-lg font-bold">Tentang Kami</h3>
                <p className="text-muted">
                  {SHOP_DESCRIPTION}
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-bold">Hubungi Kami</h3>
                <p className="text-muted mb-2">
                  {SHOP_ADDRESS}
                </p>
                <a onClick={handleClickPhone1} href={`tel:${SHOP_PHONE}`} className="hover:text-primary">
                  {SHOP_PHONE_SHOW}
                </a><br />
                <a onClick={handleClickPhone2} href={`tel:${SHOP_PHONE_2}`} className="hover:text-primary">
                  {SHOP_PHONE_SHOW_2}
                </a>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-bold">Halaman Lainnya</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href={ROUTES.HOME} onClick={handleClickNavHome} className="py-3 hover:text-primary">
                      Beranda
                    </Link>
                  </li>
                  <li>
                    <Link href={ROUTES.CARPET_SERVICES} onClick={handleClickNavCarpetService} className="py-3 hover:text-primary">
                      Laundry Karpet
                    </Link>
                  </li>
                  <li>
                    <Link href={ROUTES.SOFA_SERVICES} onClick={() => { }} className="py-3 hover:text-primary">
                      Laundry Sofa
                    </Link>
                  </li>
                  <li>
                    <Link href={ROUTES.SPRING_BED_SERVICES} onClick={() => { }} className="py-3 hover:text-primary">
                      Laundry Spring Bed
                    </Link>
                  </li>
                  <li>
                    <Link href={ROUTES.STROLLER_SERVICES} onClick={() => { }} className="py-3 hover:text-primary">
                      Laundry Stroller
                    </Link>
                  </li>
                  <li>
                    <Link href={ROUTES.SUITCASE_SERVICES} onClick={() => { }} className="py-3 hover:text-primary">
                      Laundry Koper / Tas
                    </Link>
                  </li>
                  <li>
                    <Link href={ROUTES.DOLL_SERVICES} onClick={() => { }} className="py-3 hover:text-primary">
                      Laundry Boneka
                    </Link>
                  </li>
                  <li>
                    <Link href={ROUTES.HELM_SERVICES} onClick={() => { }} className="py-3 hover:text-primary">
                      Laundry Helm
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-bold">Follow Us</h3>
                <div className="flex">
                  <Link href={SHOP_IG} className="hover:text-primary h-11 w-11" onClick={handleClickFacebook}>
                    <FacebookIcon className="h-6 w-6" />
                  </Link>
                  <Link href={SHOP_TIKTOK} className="hover:text-primary h-11 w-11" onClick={handleClickInstagram}>
                    <InstagramIcon className="h-6 w-6" />
                  </Link>
                  <Link href={SHOP_FB} className="hover:text-primary h-11 w-11" onClick={handleClickTiktok}>
                    <TiktokIcon className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="pt-6 text-center text-sm text-muted border-t">
              &copy; {currentYear} {SHOP_MOTTO} - {SHOP_NAME}. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

const useFooterTracker = ({ isInView }: { isInView: boolean }) => {
  const analytic = useAnalytic();

  React.useEffect(() => {
    analytic.trackStart("click_fab_whatsapp");

    if (isInView) {
      analytic.trackStart("click_footer_phone1");
      analytic.trackStart("click_footer_phone2");
      analytic.trackStart("click_footer_nav_home");
      analytic.trackStart("click_footer_nav_carpet_service");
      analytic.trackStart("click_footer_facebook");
      analytic.trackStart("click_footer_instagram");
      analytic.trackStart("click_footer_tiktok");
    }
  }, [isInView, analytic]);

  const handleClickFABWhatsapp = () => {
    analytic.trackEnd("click_fab_whatsapp");
    analytic.trackEvent("click_fab_whatsapp", "Home Page", { success: 1, message: "OK" });
  };

  const handleClickPhone1 = () => {
    analytic.trackEnd("click_footer_phone1");
    analytic.trackEvent("click_footer_phone1", "Home Page", { success: 1, message: "OK" });
  };

  const handleClickPhone2 = () => {
    analytic.trackEnd("click_footer_phone2");
    analytic.trackEvent("click_footer_phone2", "Home Page", { success: 1, message: "OK" });
  };

  const handleClickNavHome = () => {
    analytic.trackEnd("click_footer_nav_home");
    analytic.trackEvent("click_footer_nav_home", "Home Page", { success: 1, message: "OK" });
  };

  const handleClickNavCarpetService = () => {
    analytic.trackEnd("click_footer_nav_carpet_service");
    analytic.trackEvent("click_footer_nav_carpet_service", "Home Page", { success: 1, message: "OK" });
  };

  const handleClickFacebook = () => {
    analytic.trackEnd("click_footer_facebook");
    analytic.trackEvent("click_footer_facebook", "Home Page", { success: 1, message: "OK" });
  };

  const handleClickInstagram = () => {
    analytic.trackEnd("click_footer_instagram");
    analytic.trackEvent("click_footer_instagram", "Home Page", { success: 1, message: "OK" });
  };

  const handleClickTiktok = () => {
    analytic.trackEnd("click_footer_tiktok");
    analytic.trackEvent("click_footer_tiktok", "Home Page", { success: 1, message: "OK" });
  };


  return {
    handleClickFABWhatsapp,
    handleClickPhone1,
    handleClickPhone2,
    handleClickNavHome,
    handleClickNavCarpetService,
    handleClickFacebook,
    handleClickInstagram,
    handleClickTiktok,
  };
};