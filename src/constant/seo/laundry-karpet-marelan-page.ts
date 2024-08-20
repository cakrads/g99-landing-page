import { HOST_URL } from "../env";
import { SHOP_ADDRESS, SHOP_PHONE } from "../shop";


// Cuci Karpet Cepat, Cuci Karpet di Medan, Layanan Cuci Karpet, Laundry Karpet Marelan G 99, Cuci Karpet Terdekat, Harga Cuci Karpet, Jasa Cuci Karpet, Cuci Karpet Cepat di Medan, Mesin Cuci Karpet Modern, Solusi Cuci Karpet
// laundry karpet, cuci karpet, cuci karpet Medan, laundry karpet Medan, cuci karpet Marelan, laundry karpet Marelan
// harga laundry karpet, harga cuci karpet, cuci karpet terdekat, laundry karpet terdekat, jasa cuci karpet, jasa cuci karpet Medan, jasa cuci karpet Marelan

export const CARPET_WEB_TITLE = "Laundry Karpet Marelan G 99 | Cuci Karpet Terdekat & Cepat di Medan Marelan";
// GPT: Cuci Karpet Cepat & Bersih di Medan - Laundry Karpet Marelan G 99
// gemini: Cuci Karpet Marelan G 99 | Laundry Karpet Cepat & Terjangkau di Medan!
export const CARPET_WEB_DESCRIPTION = "Dapatkan karpet Bersih dan Higienis bebas Bakteri dalam 1 hari di Laundry Karpet Marelan G 99. Cuci Karpet Terdekat, Cepat & Bersih di Medan Marelan!";
// export const CARPET_WEB_DESCRIPTION = "Dapatkan karpet Bersih dan Higienis bebas Bakteri dalam 1 hari dengan Cuci Karpet Instan di Laundry Karpet Marelan G 99. Layanan Premium dengan harga terjangkau. Kami melayanan sluruh wilayah Medan. Cuci Karpet Terdekat, Cepat & Bersih di Medan Marelan!";
// GPT: Laundry Karpet Marelan G 99 menyediakan layanan cuci karpet cepat dan berkualitas dalam satu hari dengan mesin pengering modern. Nikmati karpet bersih, bebas debu, kotoran, tungau, dan bakteri. Layanan premium dengan harga terjangkau di Medan.
// gemini: Dapatkan karpet bersih, higienis, dan bebas tungau dalam 1 hari dengan Cuci Karpet Instan di Laundry Karpet Marelan G 99 Medan! Harga bersahabat, layanan profesional. Kami melayani seluruh wilayah Medan, termasuk Marelan.
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
// Cuci Karpet Cepat, Cuci Karpet di Medan, Layanan Cuci Karpet, Laundry Karpet Marelan G 99, Cuci Karpet Terdekat, Harga Cuci Karpet, Jasa Cuci Karpet, Cuci Karpet Cepat di Medan, Mesin Cuci Karpet Modern, Solusi Cuci Karpet
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
export const CARPET_HERO_DESCRIPTION = "Cuci Karpet Express 1 Hari Selesai di Medan Marelan.\n Layanan cuci karpet profesional dengan harga terjangkau.";
// export const CARPET_WHY_DESCRIPTION = "Jasa Laundry Karpet cepat & bersih Siap menerima layanan antar-jemput untuk daerah Bandung dan Sekitarnya";
export const CARPET_HERO_CTA = "Pesan Sekarang";

export const CARPET_HOOKS = "Kini, Laundry Karpet Jadi Super Praktis!";
export const CARPET_HOOKS_DESC = "Tak perlu repot keluar rumah atau pusing mencari waktu luang. Cukup hubungi kami, dan tim kami siap menjemput karpet Anda langsung dari rumah";
export const CARPET_HOOKS_BTN = "HUBUNGI KAMI";

export const CARPET_WHY_TITLE = "Mengapa harus memilih Laundry G 99 Karpet Expert untuk karpet Anda?";
export const CARPET_WHY_DESCRIPTION = "";
export const CARPET_WHY_LIST = [
  {
    "label": "Hemat waktu dan tenaga!",
    "description": "Nikmati kemudahan layanan <b>Antar-Jemput GRATIS</b> untuk karpet Anda di wilayah Medan Marelan, Hamparan Perak, Martubung, Mabar, Medan Belawan, Titi Papan, dan sekitarnya. Hubungi kami sekarang untuk penjadwalan!"
    // "description": "Karpet akan kami <b>Antar Jemput secara GRATIS</b> untuk wilayah Medan Marelan, Hamparan Perak, Martubung, Mabar, Medan Belawan, Titi Papan dan Sekitarnya.",
  },
  {
    "label": "Bersih dan Aman",
    "description": "<b>Teknik Pencucian Khusus</b> kami memastikan karpet Anda kembali Bersih, Segar, dan terlihat seperti Baru. Semua noda membandel hilang tanpa risiko kerusakan!",
    // "description": "Kami mencuci karpet Anda dengan <b>teknik pencucian terbaik</b> yang membuat semua noda, kotoran, dan aroma tidak sedap terlepas sempurna tanpa harus khawatir terjadinya resiko kerusakan pada karpet Anda.",
  },
  {
    "label": "Pembersih Khusus",
    "description": "Laundry karpet kami menggunakan <b>Cairan Pembersih Khusus Karpet ber pH 8</b> yang aman, memastikan karpet Anda Bersih Maksimal Tanpa risiko Kerusakan atau Bau Apek.",
    // "description": "Laundry karpet kami menggunakan <b>bahan pembersih khusus karpet yang memiliki pH 8</b> sehingga sangat aman dan bebas dari resiko bau Apek.",
  },
  {
    "label": "Teknologi Modern",
    "description": "Kami menggunakan <b>Mesin Pembersih Karpet Modern</b> yang memastikan setiap Kotoran, Debu, dan Noda Terangkat sempurna, membuat karpet Anda kembali Segar dan terlihat seperti Baru."
    // "description": "Karpet dicuci dan diproses dengan <b>mesin pembersih karpet terkini</b> yang membuat karpet Anda bersih terlihat seperti baru.",
  },
  {
    "label": "Selesai dengan Cepat",
    "description": "Nikmati keunggulan mesin <b>Spinner Karpet Gadhing Kreatologi Indonesia seharga Rp 40 jutaan</b> yang memastikan karpet Anda Kering Sempurna dalam waktu singkat, sehinga Bebas dari Bakteri penyebab Bau Apek.",
    // "description": "Karpet Anda dikeringkan dengan mesin <b>Spinner Karpet - Gadhing Kreatologi Indonesia dengan harga Rp 40 jutaan</b>, yang membuat karpet Anda cepat kering dan terhindar dari bau Apek.",
    // 
  },
  {
    "label": "Kualitas premium, harga bersahabat.",
    "description": "Dapatkan layanan cuci karpet <b>Premium dengan Harga Terjangkau!</b>. Kami menawarkan harga yang kompetitif tanpa mengorbankan hasil terbaik.",
    // "description": "Laundry Karpet kami menawarkan <b>Harga Kompetitif</b> tanpa mengorbankan hasil.",
  },
  {
    "label": "Garansi Layanan",
    "description": "Kami sangat percaya diri dengan hasil kerja kami. Jika Anda tidak puas, kami akan <b>cuci ulang karpet Anda tanpa biaya tambahan</b>. Kepuasan Anda adalah prioritas utama kami.",
    // "description": "Laundry Karpet kami berani <b>menggaransi kepuasan Anda</b>. Jika Anda tidak puas, Anda bisa mengklaim untuk dicuci kembali atau GRATIS tidak perlu membayar.",
  },
];

export const CARPET_SERVICES_DETAIL_TITLE = "Layanan Cuci Karpet di Marelan";
export const CARPET_SERVICES_DETAIL_DESCRIPTION = `
  Kami menyediakan layanan cuci karpet terdekat di Marelan, Medan. Cuci karpet cepat, bersih, dan higienis.
`;

