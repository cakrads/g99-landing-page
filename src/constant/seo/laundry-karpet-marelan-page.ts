import { HOST_URL } from "../env";
import { SHOP_ADDRESS, SHOP_PHONE } from "../shop";


// Cuci Karpet Cepat, Cuci Karpet di Medan, Layanan Cuci Karpet, Laundry Karpet Marelan G99, Cuci Karpet Terdekat, Harga Cuci Karpet, Jasa Cuci Karpet, Cuci Karpet Cepat di Medan, Mesin Cuci Karpet Modern, Solusi Cuci Karpet
// laundry karpet, cuci karpet, cuci karpet Medan, laundry karpet Medan, cuci karpet Marelan, laundry karpet Marelan
// harga laundry karpet, harga cuci karpet, cuci karpet terdekat, laundry karpet terdekat, jasa cuci karpet, jasa cuci karpet Medan, jasa cuci karpet Marelan

export const CARPET_WEB_TITLE = "Laundry Karpet Marelan G99 | Cuci Karpet Terdekat & Cepat di Medan Marelan";
// GPT: Cuci Karpet Cepat & Bersih di Medan - Laundry Karpet Marelan G99
// gemini: Cuci Karpet Marelan G99 | Laundry Karpet Cepat & Terjangkau di Medan!
export const CARPET_WEB_DESCRIPTION = "Dapatkan karpet Bersih dan Higienis bebas Bakteri dalam 1 hari di Laundry Karpet Marelan G99. Cuci Karpet Terdekat, Cepat & Bersih di Medan Marelan!";
// export const CARPET_WEB_DESCRIPTION = "Dapatkan karpet Bersih dan Higienis bebas Bakteri dalam 1 hari dengan Cuci Karpet Instan di Laundry Karpet Marelan G99. Layanan Premium dengan harga terjangkau. Kami melayanan sluruh wilayah Medan. Cuci Karpet Terdekat, Cepat & Bersih di Medan Marelan!";
// GPT: Laundry Karpet Marelan G99 menyediakan layanan cuci karpet cepat dan berkualitas dalam satu hari dengan mesin pengering modern. Nikmati karpet bersih, bebas debu, kotoran, tungau, dan bakteri. Layanan premium dengan harga terjangkau di Medan.
// gemini: Dapatkan karpet bersih, higienis, dan bebas tungau dalam 1 hari dengan Cuci Karpet Instan di Laundry Karpet Marelan G99 Medan! Harga bersahabat, layanan profesional. Kami melayani seluruh wilayah Medan, termasuk Marelan.
export const CARPET_WEB_KEYWORDS_PRIMARY = [
  "Laundry Karpet",
  "Cuci Karpet",
  "Cuci Karpet Medan",
  "Laundry Karpet Medan",
  "Cuci Karpet Marelan",
  "Laundry Karpet Marelan",
];
export const CARPET_WEB_KEYWORDS_SECONDARY = [
  "Cuci Karpet Terdekat",
  "Laundry Karpet Terdekat",
  "Laundry Karpet Terdekat Medan",
  "Laundry Karpet Terdekat Marelan",
  "Jasa Cuci Karpet",
  "Jasa Cuci Karpet Medan",
  "Jasa Cuci Karpet Marelan",
  "Laundry Karpet Kantor",
  // "Cuci Karpet Kantor",
  "Laundry Karpet Terdekat Dari Lokasi Saya",
  "Laundry Karpet Antar Jemput Terdekat",
  // "Laundry Karpet Masjid",
  "Harga Laundry Karpet",
  "Harga Cuci Karpet",
];
export const CARPET_WEB_KEYWORDS = [
  ...CARPET_WEB_KEYWORDS_PRIMARY,
  ...CARPET_WEB_KEYWORDS_SECONDARY
];
// Cuci Karpet Cepat, Cuci Karpet di Medan, Layanan Cuci Karpet, Laundry Karpet Marelan G99, Cuci Karpet Terdekat, Harga Cuci Karpet, Jasa Cuci Karpet, Cuci Karpet Cepat di Medan, Mesin Cuci Karpet Modern, Solusi Cuci Karpet
// laundry karpet, cuci karpet, cuci karpet Medan, laundry karpet Medan, cuci karpet Marelan, laundry karpet Marelan
// harga laundry karpet, harga cuci karpet, cuci karpet terdekat, laundry karpet terdekat, jasa cuci karpet, jasa cuci karpet Medan, jasa cuci karpet Marelan
export const CARPET_IMG_ALT = CARPET_WEB_TITLE;

export const APPLICATION_ID_JSON = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: CARPET_WEB_TITLE,
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

/****************************************************
  CONTENT
*****************************************************/
export const CARPET_HERO_TITLE = "Laundry Karpet Terdekat di Marelan, Selesai 1 Hari";
export const CARPET_HERO_DESCRIPTION = "Cuci Karpet Express 1 Hari Selesai di Marelan, Medan. Layanan cuci karpet profesional dengan harga terjangkau.";
// export const CARPET_WHY_DESCRIPTION = "Jasa Laundry Karpet cepat & bersih Siap menerima layanan antar-jemput untuk daerah Bandung dan Sekitarnya";
export const CARPET_HERO_CTA = "Pesan Sekarang";

export const CARPET_WHY_TITLE = "Kenapa Harus Laundry Karpet di Kami?";
export const CARPET_WHY_DESCRIPTION = "";
export const CARPET_WHY_LIST = [
  {
    "label": "???",
    "description": "Laundry kami melayani GRATIS Antar Jemput untuk wilayah Medan.",
  },
  {

    "label": "???",
    "description": "Kami cuci karpet dengan teknik pencucian terbaik yang membuat semua noda, kotoran, dan aroma tidak sedap terlepas sempurna tanpa harus khawatir terjadinya resiko kerusakan.",
  },
  {
    "label": "???",
    "description": "Laundry kami menggunakan bahan pembersih khusus yang memiliki pH 8 sehingga sangat aman dan bebas dari resiko bau apek.",
  },
  {
    "label": "???",
    "description": "Karpet diproses dengan mesin Yusima Carpet Spinner seharga Rp50 Jutaan, sehingga proses pengeringan berlangsung sangat cepat",
  },
  {

    "label": "???",
    "description": "Kami berani menggaransi kepuasan Anda. Jika Anda tidak puas, Anda bisa mengklaim untuk cuci kembali atau GRATIS tidak perlu membayar.",
  },
];

export const CARPET_SERVICES_DETAIL_TITLE = "Layanan Cuci Karpet di Marelan";
export const CARPET_SERVICES_DETAIL_DESCRIPTION = `
  Kami menyediakan layanan cuci karpet terdekat di Marelan, Medan. Cuci karpet cepat, bersih, dan higienis.
`;
