import { useEffect, useState } from "react";

import { WEB_TITLE } from "@/constant/env";

export const LocationMap = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, []);

  if (!show) {
    return (
      <div className="w-full h-[400px] bg-gray-300 animate-pulse" />
    );
  }

  return (
    <iframe
      title={WEB_TITLE}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.4929642183615!2d98.65544247581292!3d3.702013749503646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3036d2aadccd6867%3A0xdaac34b9834c62a4!2sJl.%20Marelan%20Raya%20Ps.%20II%20No.145%2C%20Rengas%20Pulau%2C%20Kec.%20Medan%20Marelan%2C%20Kota%20Medan%2C%20Sumatera%20Utara%2020255!5e0!3m2!1sid!2sid!4v1720915787070!5m2!1sid!2sid"
      width="100%"
      height="400"
      style={{ border: 0 }}
      loading="lazy"
    >
    </iframe>
  );
};