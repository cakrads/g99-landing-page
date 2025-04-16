import Image from "next/image";
import { usePathname } from "next/navigation";

import * as DATA_LAUNDRY_CARPET_MARELAN from "@/constant/seo/custom/laundry-karpet-marelan-page";
import * as DATA_CUCI_KARPET_MEDAN from "@/constant/seo/custom/cuci-karpet-medan-page";
import { SectionHeader } from "@/components/fragments/section-header";
import { useTrackEnterSection } from "@/libs/analytic/use-enter-section";
import { WA_LINK, WA_SERVICE_NAME } from "@/constant/whatsapp";
import { SHOP_PHONE_2, SHOP_PHONE_SHOW, SHOP_PHONE_SHOW_2 } from "@/constant/shop";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/icons/social";
import { FadeIn } from "@/components/ui/animations";

export const LaundryCarpetWhy = () => {
  const { ref } = useTrackEnterSection({
    envetKey: "enter_carpet_service_why",
    featureKey: "Carpet Service Page",
  });

  const pathname = usePathname();
  const data = pathname === "/cuci-karpet-medan" ? DATA_CUCI_KARPET_MEDAN : DATA_LAUNDRY_CARPET_MARELAN;
  const { CARPET_WHY_DESCRIPTION, CARPET_WHY_TITLE, CARPET_IMG_ALT, CARPET_WHY_LIST } = data;

  return (
    <section ref={ref}>
      <div className="pt-32 pb-16 md:pt-40 sm:py-24 relative">
        <div className="container">
          <SectionHeader
            title={CARPET_WHY_TITLE}
            description={CARPET_WHY_DESCRIPTION}
          />
          <div className="flex flex-col gap-10 pt-12 pb-0 md:py-12 items-center">
            <div className="order-2 md:order-1 w-full md:min-w-[300px] flex flex-col md:flex-row gap-3 lg:gap-5">
              <FadeIn direction="right" delay={0.4} className="relative rounded-2xl w-full h-[300px] md:h-[150px] lg:h-[200px] bg-gray-400 shadow-lg">
                <Image
                  src="/images/services/carpet/laundry-karpet-terdekat-pembersih-karpet.png"
                  alt={CARPET_IMG_ALT}
                  fill={true}
                  className="w-full h-full top-0 left-0 object-cover rounded-2xl"
                />
              </FadeIn>
              <FadeIn direction="right" delay={0.5} className="relative rounded-2xl w-full h-[300px] md:h-[150px] lg:h-[200px] bg-gray-400 shadow-lg">
                <Image
                  src="/images/services/carpet/laundry-karpet-terdekat-mesin-pengering-karpet.png"
                  alt={CARPET_IMG_ALT}
                  fill={true}
                  className="w-full h-full top-0 left-0 object-cover rounded-2xl"
                />
              </FadeIn>
              <FadeIn direction="right" delay={0.6} className="relative rounded-2xl w-full h-[300px] md:h-[150px] lg:h-[200px] bg-gray-400 shadow-lg">
                <Image
                  src="/images/services/carpet/laundry-karpet-terdekat-tumpukan-karpet.png"
                  alt={CARPET_IMG_ALT}
                  fill={true}
                  className="w-full h-full top-0 left-0 object-cover rounded-2xl"
                />
              </FadeIn>
            </div>
            <div className="order-1 md:order-2">
              <FadeIn direction="left">
                <ul className="pl-6 list-disc text-xl md:text-2xl space-y-2 md:space-y-4">
                  {CARPET_WHY_LIST.map((item, index) => (
                    <li key={index}>
                      <p dangerouslySetInnerHTML={{ __html: item.description }} />
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </div>

          <div className="flex flex-col gap-4 my-5">
            <FadeIn direction="right" delay={0.4} className="relative rounded-2xl w-full h-[300px] lg:h-[600px] shadow-lg">
              <Image
                src="/images/services/carpet/laundry-karpet-terdekat-terpercaya.png"
                alt={CARPET_IMG_ALT}
                fill={true}
                className="w-full h-full top-0 left-0 object-cover rounded-2xl"
              />
            </FadeIn>
            <FadeIn direction="right" delay={0.4} className="relative rounded-2xl w-full h-[300px] lg:h-[600px] shadow-lg">
              <Image
                src="/images/services/carpet/laundry-karpet-terdekat-mesin-pengering-karpet-2.png"
                alt={CARPET_IMG_ALT}
                fill={true}
                className="w-full h-full top-0 left-0 object-cover rounded-2xl"
              />
            </FadeIn>
            <FadeIn direction="right" delay={0.4} className="hidden md:block relative rounded-2xl w-full h-[300px] lg:h-[600px] shadow-lg">
              <Image
                src="/images/services/carpet/laundry-karpet-terdekat-pembersih-dan-pengering-karpet.png"
                alt={CARPET_IMG_ALT}
                fill={true}
                className="w-full h-full top-0 left-0 object-cover rounded-2xl"
              />
            </FadeIn>
            <FadeIn direction="right" delay={0.4} className="relative rounded-2xl w-full h-[300px] lg:h-[600px] shadow-lg">
              <Image
                src="/images/services/carpet/laundry-karpet-terdekat-pembersih-karpet.png"
                alt={CARPET_IMG_ALT}
                fill={true}
                className="w-full h-full top-0 left-0 object-cover rounded-2xl"
              />
            </FadeIn>
          </div>

          <div>
            <h2 className="mt-20 font-bold text-2xl mb-3 text-left md:text-center">Laundry Karpet Anda Sekarang :</h2>
            <div className="mx-3 flex flex-col md:flex-row justify-center gap-5 md:gap-8">
              <a
                href={WA_LINK(WA_SERVICE_NAME.CARPET)}
                target="_blank"
                className="flex justify-center items-center gap-2 rounded-md py-4 px-8 bg-whatsapp-gradient shadow-2xl hover:shadow-xl active:shadow-2xl focus:shadow-2xl"
              >
                <WhatsAppIcon className="w-10 h-10" />
                <b className="text-[#fff] text-xl drop-shadow-xl">{SHOP_PHONE_SHOW}</b>
              </a>
              <a
                href={`tel:${SHOP_PHONE_2}`}
                className="flex justify-center items-center gap-2 rounded-md py-4 px-8 bg-background shadow-2xl border hover:border-primary hover:shadow-xl active:shadow-2xl focus:shadow-2xl"
              >
                <PhoneIcon className="w-10 h-10" />
                <b className="text-xl drop-shadow-xl">{SHOP_PHONE_SHOW_2}</b>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};