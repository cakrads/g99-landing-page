import { HOST_URL } from "../env";
import { SHOP_ADDRESS, SHOP_PHONE } from "../shop";


export const CARPET_WEB_TITLE = "Cuci Karpet Medan | Laundry G 99 - Cepat, Bersih, Murah";
//GM Cuci Karpet Medan | Laundry Karpet G 99 - Bersih dalam 1 Hari
//GM Cuci Karpet Medan | Laundry G 99 - Cepat, Bersih, Murah
//GPT Laundry G 99 - Jasa Cuci Karpet Terbaik di Medan | Selesai 1 Hari
export const CARPET_WEB_DESCRIPTION = "Cari jasa cuci karpet di Medan? Laundry G 99 siap membantu! Karpet bersih dalam 1 hari. GRATIS Antar Jemput. Hubungi kami segera di 081361610795!";
//GM Butuh jasa cuci karpet cepat dan berkualitas di Medan? Laundry G 99 siap membantu! Kami menawarkan layanan cuci karpet dengan pengering khusus, bersih dalam 1 hari. Cek harga dan jadwal sekarang!
//GM  Butuh jasa cuci karpet cepat dan berkualitas di Medan? Laundry G 99 adalah solusinya! Kami menawarkan layanan cuci karpet dengan pengering khusus, selesai dalam 1 hari. Hubungi kami sekarang!
//GPT Laundry G 99 menawarkan jasa cuci karpet profesional di Medan dengan pengering khusus yang memungkinkan selesai dalam 1 hari. Layanan terdekat, berkualitas, dan harga terjangkau. Hubungi kami di 081361610795.

export const CARPET_WEB_KEYWORDS_PRIMARY = [
  "Cuci Karpet",
  "Laundry Karpet",
  "Jasa Cuci Karpet",
  "Harga Cuci Karpet",
  "Cuci Karpet Medan",
  "Laundry Karpet Medan",
];
export const CARPET_WEB_KEYWORDS_SECONDARY = [
  "Cuci Karpet Terdekat di Medan",
  "Cuci Karpet Terdekat di Medan",
  "Tempat Cuci Karpet Terdekat di Medan",
  "Jasa Cuci Karpet Terdekat di Medan",
  "Harga Cuci Karpet 1 Hari di Medan",
  "Pencucian Karpet Terdekat di Medan",
  "Daftar Harga Laundry Karpet",
  "Tempat Laundry Karpet Terdekat di Medan",
  "Cuci Karpet Antar Jemput",
];
export const CARPET_WEB_KEYWORDS = [
  ...CARPET_WEB_KEYWORDS_PRIMARY,
  ...CARPET_WEB_KEYWORDS_SECONDARY
];
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
export const CARPET_HERO_TITLE = `Cuci Karpet Medan yang \n Bersih dalam 1 Hari!`;
// GM Cuci Karpet Anda Hari Ini, Kering Besok!
// GPT Cuci Karpet Medan - Laundry Karpet Cepat dan Terpercaya di Laundry G 99
// 
export const CARPET_HERO_DESCRIPTION = "Cuci Karpet Express 1 Hari Selesai di Medan. \n Layanan cuci karpet profesional dengan harga terjangkau.";
// Cuci Karpet Express 1 Hari Selesai di Marelan, Medan. Layanan cuci karpet profesional dengan harga terjangkau.
// GM Laundry G 99 adalah solusi praktis untuk menjaga kebersihan karpet Anda. Dengan teknologi pengeringan terbaru, karpet Anda akan bersih dan segar kembali dalam waktu singkat.
//GPT "Bersih dan Wangi dalam Sehari" - Jasa Laundry Karpet dengan Pengering Khusus

export const CARPET_HERO_CTA = "Pesan dan Dapatkan Gratis Antar Jemput";

export const CARPET_WHY_TITLE = "Kenapa Harus Cuci Karpet di Kami?";
export const CARPET_WHY_DESCRIPTION = "";

export const CARPET_SERVICES_DETAIL_TITLE = "";
export const CARPET_SERVICES_DETAIL_DESCRIPTION = `

`;
export const CARPET_WHY_LIST = [
  {
    "label": "Gratis Antar Jemput",
    "description": "Laundry kami melayani GRATIS Antar Jemput Karpet untuk wilayah Medan.",
  },
  {

    "label": "Bersih dan Aman",
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

  {
    "label": "Jasa Cuci Karpet Medan Profesional",
    "description": "Nikmati layanan cuci karpet berkualitas tinggi dengan tim ahli berpengalaman.",
  },
  {
    "label": "Bersihkan Karpet Anda dengan Cepat",
    "description": "Dapatkan karpet bersih dalam waktu singkat tanpa mengorbankan kualitas.",
  },
  {
    "label": "Harga Cuci Karpet Terjangkau",
    "description": "Kami menawarkan harga kompetitif tanpa mengorbankan hasil maksimal.",
  },
  {
    "label": "Peralatan Modern",
    "description": "Kami menggunakan peralatan cuci karpet terbaru untuk hasil yang optimal.",
  },
  {
    "label": "Bahan Pembersih Aman",
    "description": "Semua bahan pembersih kami aman untuk keluarga dan lingkungan.",
  },
  {
    "label": "Garanti Kepuasan",
    "description": "Kami menjamin kepuasan Anda atau uang kembali.",
  },
  {
    "label": "Gratis Antar Jemput",
    "description": "Nikmati kemudahan layanan antar jemput tanpa biaya tambahan.",
  },
  {
    "label": "Cuci Karpet Semua Jenis",
    "description": "Kami melayani semua jenis karpet, dari karpet bulu hingga karpet berbahan sintetis.",
  },
  {
    "label": "Karpet Bersih dan Wangi",
    "description": "Dapatkan karpet yang bersih, segar, dan bebas kuman.",
  },
  {
    "label": "Layanan 24 Jam",
    "description": "Hubungi kami kapan saja untuk mendapatkan informasi lebih lanjut.",
  },
];
// GM
// Teknologi Modern: Kami menggunakan mesin pengering khusus yang dapat mengeringkan karpet dalam waktu singkat tanpa merusak serat karpet.
// Tenaga Ahli: Tim kami berpengalaman dalam membersihkan berbagai jenis karpet.
// Harga Terjangkau: Kami menawarkan harga yang kompetitif tanpa mengorbankan kualitas.
// Pelayanan Ramah: Kami selalu siap melayani Anda dengan sepenuh hati.
// GPT
// Pengalaman: Bertahun-tahun melayani pelanggan dengan hasil memuaskan.
// Teknologi Modern: Menggunakan alat canggih untuk hasil terbaik.
// Pelayanan Ramah: Tim profesional siap membantu kebutuhan Anda.
// Garansi Kepuasan: Jika tidak puas, kami siap mencuci ulang tanpa biaya tambahan.

export const CARPET_SERVICE_TITLE = ``;
// GM Layanan Cuci Karpet Profesional
// GM Layanan Cuci Karpet Profesional di Medan
export const CARPET_SERVICE_DESCRIPTION = ``;
// GM Kami menawarkan layanan cuci karpet lengkap, mulai dari karpet bulu, karpet masjid, hingga karpet sofa. Proses pencucian dilakukan oleh tenaga ahli dengan menggunakan bahan-bahan berkualitas.
// GPT Laundry G 99 menyediakan layanan cuci karpet dengan hasil bersih dan wangi. Menggunakan teknologi pengering khusus, kami menjamin karpet Anda siap digunakan dalam satu hari.
export const CARPET_SERVICE_BENEFIT = [];
// GM
// Karpet bersih dan bebas kuman
// Warna karpet kembali cerah
// Tekstur karpet lebih lembut
// Proses cepat dan efisien
// Harga terjangkau
// GPT
// Cepat dan Efisien: Karpet bersih dalam 1 hari.
// Hasil Maksimal: Menghilangkan noda dan bau tidak sedap.
// Pengering Khusus: Teknologi pengering yang aman untuk semua jenis karpet.
// Harga Terjangkau: Layanan berkualitas dengan biaya yang kompetitif.
export const CARPET_SERVICE_PRICE = [];

export const CARPET_SERVICE_FAQ = [];
// GM
// Berapa lama proses pencucian karpet?
// Apakah Anda melayani penjemputan dan pengantaran?
// Bahan apa yang Anda gunakan untuk membersihkan karpet?
// Bagaimana cara memesan layanan cuci karpet?
// GPT
// Berapa lama waktu yang dibutuhkan untuk mencuci karpet?
// Kami menggunakan pengering khusus sehingga karpet dapat selesai dalam 1 hari.
// Apakah karpet saya aman dicuci di Laundry G 99?
// Ya, kami menggunakan teknologi dan bahan yang aman untuk semua jenis karpet.
// Apakah Laundry G 99 melayani pengambilan dan pengantaran?
// Ya, kami menyediakan layanan antar-jemput untuk area Medan Marelan.