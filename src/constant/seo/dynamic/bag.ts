import { HOST_URL } from "@/constant/env";

import { generateAppIdJson } from "../app-id-json";
import { IWebContent, IWebSeo } from "./type";

const WEB_TITLE = "Jasa Cuci Tas Medan Marelan: Bisa Antar-Jemput";
export const SLUG = "laundry-tas";

export const webSeo: IWebSeo = {
  title: WEB_TITLE,
  description: "Nikmati jasa cuci tas premium dengan harga terjangkau, bisa Antar-Jemput. Kami menggunakan teknologi terbaru untuk membersihkan tas Anda secara efektif.",
  primaryKeyword: [
    "laundry tas",
    "cuci tas",
    "jasa cuci tas",
  ],
  secondaryKeyword: [
    "cuci tas panggilan",
    "harga cuci tas",
    "laundry tas terdekat",
    "jasa cuci tas murah",
    "layanan laundry tas",
  ],
  imgAlt: "",
  applicationId: generateAppIdJson({ webTitle: WEB_TITLE }),
  routes: "/" + SLUG,
  socialImage: HOST_URL + "/images/services/bag/laundry-tas-medan-marelan.png",
};

export const webContent: IWebContent = {
  title: "Laundry Tas Medan Marelan: Cuci Tas Berkualitas Tinggi",
  subTitle: "Tas Anda Kotor? Serahkan pada Kami! Kami siap Antar-Jemput.",
  serviceName: "Laundry Tas",
  serviceNameAlt: "Cuci Tas",
  article: `
  <p><strong>Layanan laundry dari kami dapat membantu membersihkan tas Anda sehingga menjadi bersih dan nyaman untuk digunakan. Kami melayani pencucian tas dari berbagai bahan dan ukuran. Proses pencucian dan sabun yang kami gunakan sangat aman sehingga tidak merusak kualitas tas Anda. Percayakan kebersihan tas Anda bersama Laundry G99!</strong></p>
  <br/>
  <p><strong>Lama Pengerjaan: </strong>3 – 5 Hari</p>
  <p><strong>Layanan Lain: &nbsp;</strong></p>
  <ul>
      <li>Tersedia Layanan Express</li>
      <li>Tersedia Layanan Antar Jemput<br>&nbsp;</li>
  </ul>
  `, // will help to edit html: https://onlinehtmleditor.dev/
  prices: [
    // {
    //   type: "Harga Mulai Dari",
    //   value: "Rp 75.000,-"
    // }
  ],
  hooks: "",
  article2: "",
  images: [
    "/images/services/bag/laundry-tas-medan-marelan.png",
  ],
  faq: []
};
