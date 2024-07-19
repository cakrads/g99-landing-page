import Link from "next/link";

import { SHOP_ADDRESS, SHOP_DESCRIPTION, SHOP_FB, SHOP_IG, SHOP_MOTTO, SHOP_NAME, SHOP_PHONE_SHOW, SHOP_TIKTOK } from "@/constant/env";
import { WA_LINK } from "@/constant/whatsapp";
import { FacebookIcon, InstagramIcon, TiktokIcon, WhatsAppIcon } from "@/components/ui/icons/social";
import { WaveTopBgShape, WaveTopBgShapeSM } from "@/components/ui/shapes";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Link
        href={WA_LINK}
        target="_blank"
        className="fixed flex-col bottom-4 right-4 flex items-center gap-2 drop-shadow-xl hover:drop-shadow-2xl"
        prefetch={false}
      >
        <WhatsAppIcon className="w-12 h-12 md:w-14 md:h-14" />
        <b className="text-xs md:text-sm">PESAN JASA KAMI</b>
        {/* <span className="sr-only">WhatsApp</span> */}
      </Link>
      <footer>
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
                <a href={`tel:${SHOP_PHONE_SHOW}`} className="text-muted-foreground hover:text-primary">
                  {SHOP_PHONE_SHOW}
                </a>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-bold">Halaman Lainnya</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <Link href="/" prefetch={false}>
                      Beranda
                    </Link>
                  </li>
                  <li>
                    <Link href="/laundry-karpet-marelan" prefetch={false}>
                      Laundry Karpet
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-bold">Follow Us</h3>
                <div className="flex space-x-4">
                  <Link href={SHOP_IG} className="text-muted-foreground hover:text-primary" prefetch={false}>
                    <FacebookIcon className="h-6 w-6" />
                  </Link>
                  <Link href={SHOP_TIKTOK} className="text-muted-foreground hover:text-primary" prefetch={false}>
                    <InstagramIcon className="h-6 w-6" />
                  </Link>
                  <Link href={SHOP_FB} className="text-muted-foreground hover:text-primary" prefetch={false}>
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
