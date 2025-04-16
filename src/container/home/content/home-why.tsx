import React from "react";

import { SectionHeader } from "@/components/fragments/section-header";
import { IconDelivery, IconSmileLove, IconWashingMachine } from "@/components/ui/icons";
import { IconDetergent } from "@/components/ui/icons/detergent";
import { IconOneMachineOneLaundry } from "@/components/ui/icons/one-machine-one-laundry";
import { IconPremiumAndBestPrice } from "@/components/ui/icons/premium-and-best-price";
import { HOME_WHY_DESCRIPTION, HOME_WHY_TITLE } from "@/constant/seo/home-page";
import { useTrackEnterSection } from "@/libs/analytic/use-enter-section";
import { FadeIn } from "@/components/ui/animations";

export const HomeWhy = () => {
  const { ref } = useTrackEnterSection({
    envetKey: "enter_home_why",
    featureKey: "Home Page",
  });

  const data = [
    {
      title: "Kualitas Premium  \n dengan Harga Terjangkau",
      description: "Hasil cucian bersih dan rapi seperti laundry premium namun dengan harga yang ramah di kantong.",
      icon: <IconPremiumAndBestPrice className="w-28 h-28 text-primary" />
    },
    {
      title: "1 Mesin  \n untuk 1 Pelanggan",
      description: "Setiap pelanggan mendapatkan mesin cuci sendiri untuk memastikan kebersihan dan privasi pakaian Anda.",
      icon: <IconOneMachineOneLaundry className="w-28 h-28 text-primary" />
    },
    {
      title: "Menggunakan \n Mesin Laundry Modern",
      description: "Mesin-mesin kami dilengkapi dengan teknologi terbaru untuk hasil cucian yang maksimal.",
      icon: <IconWashingMachine className="w-28 h-28 text-primary" />
    },
    {
      title: "Deterjen dan Pewangi Berkualitas",
      description: "Menggunakan deterjen dan pewangi berkualitas tinggi yang aman untuk kulit dan pakaian, memberikan hasil yang bersih, lembut, dan harum tahan lama.",
      icon: <IconDetergent className="w-28 h-28 text-primary" />
    },
    {
      title: "Layanan  \n Antar-Jemput",
      description: "Tidak ada waktu? Mari kami jemput pakaian Anda, sehingga Anda dapat fokus pada aktivitas Anda sementara pakaian Anda tetap bersih sempurna.",
      icon: <div className="flex justify-center items-center w-full h-28 ">
        <div className="-mt-8 -mb-12 -ml-8 ">
          <IconDelivery className="w-52 h-52 text-primary" />
        </div>
      </div>
    },
    {
      title: "Pelayanan  \n Ramah dan Profesional",
      description: "Staf yang terlatih dan selalu siap membantu dengan senyum, memastikan pengalaman laundry Anda menyenangkan dan memuaskan.",
      icon: <IconSmileLove className="w-28 h-28 text-primary" />
    },
  ];

  return (
    <section ref={ref} className="w-full py-12 md:py-24 lg:py-32">
      <div className="container">
        <SectionHeader
          title={HOME_WHY_TITLE}
          description={HOME_WHY_DESCRIPTION}
        />
        <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3 px-0 xs:px-10 xs:max-w-[500px] mx-auto sm:max-w-full">
          {data.map((item, index) => (
            <FadeIn delay={index * 0.1} key={index}>
              <HomeWhyItem key={`${index} - ${item.title}`} {...item} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomeWhyItem: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
}> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col text-center items-center space-y-4 bg-background px-4">
      {icon}
      <h3 className="text-xl font-bold whitespace-pre-wrap">
        {title}
      </h3>
      <p
        className="text-foreground-secondary"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};
