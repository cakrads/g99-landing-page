import { useRef } from "react";
import clsx from "clsx";

import { SectionHeader } from "@/components/fragments/section-header";
import { WEB_TITLE } from "@/constant/env";
import { useIsVisible } from "@/utils/use-in-view";

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
          title="Lokasi Kami"
          description="Ayo ke Laundry kami dan dapatkan pengalaman laundry yang menyenangkan!"
        />
        <div ref={refMap} className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 md:gap-12">
          <div
            className={clsx(
              "order-2 lg:order-1 flex flex-col justify-center space-y-4 border rounded-lg overflow-hidden",
              isMapIntersecting ? "animate-fade-right animate-once animate-ease-in-out animate-delay-500 md:animate-delay-0" : "opacity-0"
            )}
          >
            <iframe
              title={WEB_TITLE}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.4929642183615!2d98.65544247581292!3d3.702013749503646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3036d2aadccd6867%3A0xdaac34b9834c62a4!2sJl.%20Marelan%20Raya%20Ps.%20II%20No.145%2C%20Rengas%20Pulau%2C%20Kec.%20Medan%20Marelan%2C%20Kota%20Medan%2C%20Sumatera%20Utara%2020255!5e0!3m2!1sid!2sid!4v1720915787070!5m2!1sid!2sid"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
            >
            </iframe>
          </div>
          <div ref={refInfo} className="order-1 lg:order-2 flex flex-col space-y-4">
            <div className="space-y-2">
              <h3
                className={clsx(
                  "text-2xl sm:text-4xl font-semibold",
                  isInfoIntersecting ? "animate-fade-left animate-once animate-ease-in-out animate-delay-100" : "opacity-0"
                )}
              >
                {WEB_TITLE}
              </h3>
              <p
                className={clsx(
                  "text-foreground-secondary",
                  isInfoIntersecting ? "animate-fade-left animate-once animate-ease-in-out animate-delay-200" : "opacity-0"
                )}
              >
                Jl. Marelan Raya Ps. II No.145, Rengas Pulau, Kec. Medan Marelan, Kota Medan, Sumatera Utara 20255
              </p>
              <br />
              <div
                className={clsx(
                  "text-foreground-secondary",
                  isInfoIntersecting ? "animate-fade-left animate-once animate-ease-in-out animate-delay-300" : "opacity-0"
                )}
              >
                <h4 className="font-semibold">Jam Operasional:</h4>
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
