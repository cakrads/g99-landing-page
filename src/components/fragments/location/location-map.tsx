import { useEffect, useState } from "react";

import { LOCATION_MAP_TITLE } from "@/constant/seo/global";

export const LocationMap = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, []);

  if (!show) {
    return (
      <div className="w-full h-[470px] bg-gray-300 animate-pulse" />
    );
  }

  return (
    <iframe
      title={LOCATION_MAP_TITLE}
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15925.969278705223!2d98.6581163!3d3.7021571!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312d2304cd63f1%3A0xe9cae24801292d89!2sLaundry%20Karpet%20Marelan%20G%2099!5e0!3m2!1sid!2sid!4v1724848015880!5m2!1sid!2sid"
      width="100%"
      height="470"
      style={{ border: 0 }}
      loading="lazy"
    >
    </iframe>
  );
};