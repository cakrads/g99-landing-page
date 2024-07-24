"use client";

import { usePathname } from "next/navigation";
import React from "react";

import Link from "@/components/ui/link";
import { SHOP_ADDRESS, SHOP_DESCRIPTION, SHOP_FB, SHOP_IG, SHOP_MOTTO, SHOP_NAME, SHOP_PHONE, SHOP_PHONE_2, SHOP_PHONE_SHOW, SHOP_PHONE_SHOW_2, SHOP_TIKTOK } from "@/constant/shop";
import { WA_LINK } from "@/constant/whatsapp";
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
        href={WA_LINK}
        target="_blank"
        className="fixed flex-col bottom-4 right-4 flex items-center gap-2 drop-shadow-xl hover:drop-shadow-2xl"
        prefetch={false}
        onClick={handleClickFABWhatsapp}
      >
        <WhatsAppIcon className="w-12 h-12 md:w-14 md:h-14" />
        <b className="text-xs md:text-sm">PESAN JASA KAMI</b>
        {/* <span className="sr-only">WhatsApp</span> */}
      </Link>
      <footer ref={ref}>
        <WaveTopBgShapeSM className="w-full block lg:hidden" />
        <WaveTopBgShape className="w-full hidden lg:block" />
        <div className="bg-muted py-8">
          <div className="container mt-8 mx-auto">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-6">
              <div>
                <h3 className="mb-4 text-lg font-bold">Tentang Kami</h3>
                <p className="text-muted-foreground">
                  {SHOP_DESCRIPTION}
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-bold">Hubungi Kami</h3>
                <p className="text-muted-foreground mb-2">
                  {SHOP_ADDRESS}
                </p>
                <a onClick={handleClickPhone1} href={`tel:${SHOP_PHONE}`} className="text-muted-foreground hover:text-primary">
                  {SHOP_PHONE_SHOW}
                </a><br />
                <a onClick={handleClickPhone2} href={`tel:${SHOP_PHONE_2}`} className="text-muted-foreground hover:text-primary">
                  {SHOP_PHONE_SHOW_2}
                </a>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-bold">Halaman Lainnya</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <Link href="/" onClick={handleClickNavHome}>
                      Beranda
                    </Link>
                  </li>
                  <li>
                    <Link href="/laundry-karpet-marelan" onClick={handleClickNavCarpetService}>
                      Laundry Karpet
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-bold">Follow Us</h3>
                <div className="flex space-x-4">
                  <Link href={SHOP_IG} className="text-muted-foreground hover:text-primary" onClick={handleClickFacebook}>
                    <FacebookIcon className="h-6 w-6" />
                  </Link>
                  <Link href={SHOP_TIKTOK} className="text-muted-foreground hover:text-primary" onClick={handleClickInstagram}>
                    <InstagramIcon className="h-6 w-6" />
                  </Link>
                  <Link href={SHOP_FB} className="text-muted-foreground hover:text-primary" onClick={handleClickTiktok}>
                    <TiktokIcon className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="pt-6 text-center text-sm text-muted-foreground border-t">
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