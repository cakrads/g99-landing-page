import { HOST_URL } from "@/constant/env";

import { generateAppIdJson } from "../app-id-json";
import { IWebContent, IWebSeo } from "./type";

const WEB_TITLE = "Jasa Cuci Koper dan Tas Medan Marelan: Bisa Antar-Jemput";
export const SLUG = "laundry-koper-dan-tas";

export const webSeo: IWebSeo = {
  title: WEB_TITLE,
  description: "Nikmati jasa cuci spring bed premium dengan harga terjangkau, bisa Antar-Jemput. Kami menggunakan teknologi terbaru untuk membersihkan spring bed Anda secara efektif.",
  primaryKeyword: [
    "laundry koper",
    "laundry tas",
    "cuci koper",
    "cuci tas",
    "jasa cuci koper",
    "service cuci koper",
  ],
  secondaryKeyword: [
    "cuci koper panggilan",
    "cuci tas panggilan",
    "harga cuci koper",
    "harga cuci tas",
    "laundry koper terdekat",
    "laundry tas terdekat",
    "jasa cuci koper murah",
    "jasa cuci tas murah",
    "layanan laundry koper",
    "layanan laundry tas",
  ],
  imgAlt: "",
  applicationId: generateAppIdJson({ webTitle: WEB_TITLE }),
  routes: "/" + SLUG,
  socialImage: HOST_URL + "/images/services/suitcase/1.png",
};

export const webContent: IWebContent = {
  title: "Laundry Koper dan Tas Medan Marelan: Cuci Koper Berkualitas Tinggi",
  subTitle: "Koper ataupun Tas Anda Kotor? Serahkan pada Kami! Kami siap Antar-Jemput.",
  serviceName: "Laundry Koper",
  serviceNameAlt: "Cuci Koper",
  article: `
  <p><strong>Layanan laundry dari kami dapat membantu membersihkan koper Anda sehingga menjadi bersih dan nyaman untuk digunakan. Kami melayani pencucian koper dari berbagai bahan dan ukuran. Proses pencucian dan sabun yang kami gunakan sangat aman sehingga tidak merusak kualitas koper Anda. Percayakan kebersihan koper Anda bersama Laundry G99!</strong></p>
  <br/>
  <h2>Layanan Laundry Koper Lainnya:</h2>
  <ul>
      <li>Tas Ransel</li>
      <li>Koper Kanvas L</li>
      <li>Koper Kanvas SS</li>
      <li>Koper Kanvas M</li>
      <li>Koper Kanvas S</li>
      <li>Koper Kanvas XL</li>
      <li>Koper Bahan Fiber / Polycarbonate Uk S</li>
      <li>Koper Bahan Fiber / Polycarbonate Uk M</li>
      <li>Koper Bahan Fiber / Polycarbonate Uk L</li>
      <li>Koper Bahan Fiber / Polycarbonate Uk XL</li>
  </ul>
  <br/>
  <p><strong>Proses Kerja: </strong>3 – 5 Hari</p>
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
    "/images/services/suitcase/1.png",
    "/images/services/suitcase/2.png",
  ],
  faq: []
};
