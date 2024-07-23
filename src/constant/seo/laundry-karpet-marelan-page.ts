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

export const CARPET_WHY_TITLE = "Kenapa Harus Laundry Karpet di Kami?";
export const CARPET_WHY_DESCRIPTION = "";

// dengan menggunakan google trend antara "laundry karpet" dan "cuci karpet",
//   didapatkan "laundry karpet" rata - rata 32 sedangkan "cuci karpet" rata - rata 47

// hasil Kueri google trend: "laundry karpet":
// `
// TOP
// laundry karpet terdekat,100
// laundry terdekat,99
// harga laundry karpet,84
// harga laundry,84
// harga karpet,83
// cuci karpet,57
// mesin laundry,22
// harga cuci karpet,16
// cuci karpet terdekat,16
// laundry terdekat dari lokasi saya,12
// laundry karpet terdekat dari lokasi saya,12
// laundry terdekat antar jemput,8
// laundry karpet masjid,8
// laundry karpet antar jemput terdekat,8
// harga mesin laundry,8

// RISING
// laundry karpet antar jemput terdekat,Pesat
// laundry karpet terdekat dari lokasi saya,+2.450%
// laundry terdekat dari lokasi saya,+2.000%
// laundry terdekat antar jemput,+1.350%
// laundry karpet terdekat,+350%
// cuci karpet terdekat,+350%
// laundry terdekat,+350%
// `

// hasil kueri trend "cuci karpet":
// `
// TOP
// cuci karpet terdekat,100
// harga cuci karpet,82
// harga karpet,82
// mesin cuci,78
// jasa cuci karpet,78
// mesin cuci karpet,78
// laundry karpet,65
// laundry,65
// cara cuci karpet,38
// tempat cuci karpet,33
// cuci sofa,33
// karpet mobil,32
// alat cuci karpet,32
// cuci karpet jakarta,28
// cuci karpet masjid,28
// harga mesin cuci,24
// harga laundry karpet,18
// laundry karpet terdekat,18
// laundry terdekat,17
// cuci karpet jogja,17
// karpet lantai,15
// cuci karpet kantor,15
// jasa cuci karpet terdekat,14
// jasa cuci sofa,13
// cuci springbed,13

// RISING
// jasa cuci karpet terdekat,+1.500%
// cuci karpet terdekat,+700%
// laundry terdekat,+600%
// laundry karpet terdekat,+550%
// `

// `
// laundry karpet terdekat,100
// laundry terdekat,99
// harga laundry karpet,84
// harga laundry,84
// harga karpet,83
// cuci karpet,57
// mesin laundry,22
// mesin laundry karpet,22
// harga cuci karpet,16
// cuci karpet terdekat,16
// laundry terdekat dari lokasi saya,12
// laundry karpet terdekat dari lokasi saya,12
// laundry terdekat antar jemput,8
// laundry karpet masjid,8
// laundry karpet antar jemput terdekat,8

// RISING
// laundry karpet antar jemput terdekat,Pesat
// laundry karpet terdekat dari lokasi saya,+2.450%
// laundry terdekat dari lokasi saya,+2.000%
// laundry terdekat antar jemput,+1.350%
// laundry karpet terdekat,+350%
// cuci karpet terdekat,+350%
// laundry terdekat,+350%
// `

// hasil kueri trend "cuci karpet":
// `
// TOP
// cuci karpet terdekat,100
// harga cuci karpet,82
// harga karpet,82
// mesin cuci,78
// jasa cuci karpet,78
// mesin cuci karpet,78
// laundry karpet,65
// laundry,65
// cara cuci karpet,38
// tempat cuci karpet,33
// cuci sofa,33
// karpet mobil,32
// alat cuci karpet,32
// cuci karpet jakarta,28
// cuci karpet masjid,28
// harga mesin cuci,24
// harga laundry karpet,18
// laundry karpet terdekat,18
// laundry terdekat,17
// cuci karpet jogja,17
// karpet lantai,15
// cuci karpet kantor,15
// jasa cuci karpet terdekat,14
// jasa cuci sofa,13
// karpet bulu,13

// RISING
// jasa cuci karpet terdekat,+1.500%
// cuci karpet terdekat,+700%
// laundry terdekat,+600%
// laundry karpet terdekat,+550%
// tempat cuci karpet terdekat,+400%
// `