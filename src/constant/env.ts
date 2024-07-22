export const HOST_URL = process.env.NEXT_PUBLIC_HOST_URL ?? "";
export const SELF_API = process.env.NEXT_PUBLIC_SELF_API ?? "";

// SEO PART
export const WEB_TITLE = "Laundry Karpet Marelan G99  | Cuci Karpet Cepat & Bersih di Marelan | Harga Terjangkau!";
export const WEB_DESCRIPTION = "Laundry Karpet Marelan G99 menyediakan layanan cuci karpet cepat dan berkualitas yang selesai dalam satu hari dengan mesin pengering modern. Dapatkan juga layanan cuci kering maupun cuci gosok untuk pakaian bersih, wangi, dan rapi. Harga bersahabat, layanan profesional";
export const WEB_TAGS = [
  "laundry karpet marelan",
  "laundry karpet",
  "laundry karpet terdekat",
  "laundry karpet terdekat marelan",
  "laundry karpet medan",
  "laundry karpet terdekat medan",
  "laundry",
  "laundry marelan",
  "laundry medan",
  "cuci karpet marelan",
  "cuci karpet",
  "cuci karpet terdekat",
  "cuci karpet terdekat marelan",
  "cuci karpet medan",
  "cuci karpet terdekat medan",
  "marelan",
  "medan",
];
export const IMG_ALT = "- Laundry Karpet Marelan";
export const IMG_ALT_LAUNDRY_KARPET = "Laundry Karpet Terdekat di Medan, Selesai 1 Hari";

export const SHOP_NAME = "Laundry G99";
export const SHOP_MOTTO = "Laundry Karpet Marelan";
export const SHOP_DESCRIPTION = "Kami Laundry Karpet Marelan G99 menawarkan hasil cucian bersih, cepat, dan dengan harga terjangkau dengan pelayanan ramah dan profesional. Teknologi modern kami memastikan cucian Anda bersih sempurna setiap saat.";
export const SHOP_ADDRESS = "Pasar 5 Raskam No. 14 (Jl. Marelan Raya Pasar 3), Kec. Medan Marelan, Kota Medan, Sumatera Utara";
export const SHOP_PHONE = "+6281361610795";
export const SHOP_PHONE_SHOW = "+62 813-6161-0795";
export const SHOP_PHONE_2 = "+62895330398255";
export const SHOP_PHONE_SHOW_2 = "+62 895-3303-98255";
export const SHOP_EMAIL = "cakra.ds@gmail.com"; // [TO DO]
export const SHOP_IG = "#";
export const SHOP_FB = "#";
export const SHOP_TIKTOK = "#";

export const APPLICATION_ID_JSON = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: WEB_TITLE,
  url: "https://www.facebook.com/kiwilaundryco/",
  logo: "https://www.facebook.com/kiwilaundryco/",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": SHOP_ADDRESS,
    "addressLocality": "Medan Marelan",
    "addressRegion": "Sumatra Utara",
    "postalCode": "20255",
    "country": "Indonesia"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SHOP_PHONE,
    contactType: "customer service"
  },
  "telephone": SHOP_PHONE,
  "hours": "09:00-21:00",
  "website": `[${HOST_URL}](${HOST_URL})`,
  "latitude": "3.702272984566515",
  "longitude": "98.6581149005907"
};
