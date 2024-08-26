import { HOST_URL } from "@/constant/env";

import { generateAppIdJson } from "../app-id-json";
import { IWebContent, IWebSeo } from "./type";

const WEB_TITLE = "Jasa Cuci Bantal dan Guling Medan Marelan: Bisa Antar-Jemput";
export const SLUG = "laundry-bantal-guling";

export const webSeo: IWebSeo = {
  title: WEB_TITLE,
  description: "Nikmati jasa cuci guling dan bantal premium dengan harga terjangkau, bisa Antar-Jemput. Kami menggunakan teknologi terbaru untuk membersihkan guling dan bantal Anda secara efektif.",
  primaryKeyword: [
    "laundry bantal dan guling",
    "cuci bantal dan guling",
    "jasa cuci bantal dan guling",
  ],
  secondaryKeyword: [
    "cuci bantal dan guling panggilan",
    "harga cuci bantal dan guling",
    "laundry bantal dan guling terdekat",
    "jasa cuci bantal dan guling murah",
    "layanan laundry bantal dan guling",
  ],
  imgAlt: "",
  applicationId: generateAppIdJson({ webTitle: WEB_TITLE }),
  routes: "/" + SLUG,
  socialImage: HOST_URL + "/images/services/pillow/laundry-bantal-dan-guling.png",
};

export const webContent: IWebContent = {
  title: "Laundry Bantal dan Guling Medan Marelan: Cuci Bantal dan Guling Berkualitas Tinggi",
  subTitle: "Bantal dan Guling Anda Kotor? Serahkan pada Kami! Kami siap Antar-Jemput.",
  serviceName: "Laundry Bantal dan Guling",
  serviceNameAlt: "Cuci Bantal dan Guling",
  article: `
  <p><strong>Hallo warga Marelan dan sekitarnya ….</strong><br><strong>Apakah bantal ataupun guling Anda sudah lama tidak dibersihkan? Saatnya membersihkannya di laundry bantal G 99.&nbsp;</strong></p>
  <p><strong>Kami menawarkan pembersihan mendalam untuk memastikan bantal ataupun guling Anda bersih dan segar, membantu Anda tidur lebih nyenyak.</strong><br>&nbsp;</p>
  <p><strong>Bantal ataupun Guling Andakotor? Kini ada solusinya! Rasakan bagaimana layanan laundry bantal kami mengubah bantal ataupun Guling Anda menjadi bersih dan segar!</strong></p>
  `, // will help to edit html: https://onlinehtmleditor.dev/
  prices: [],
  hooks: "",
  article2: "",
  images: [
    "/images/services/pillow/laundry-bantal-dan-guling.png"
  ],
  faq: []
};
