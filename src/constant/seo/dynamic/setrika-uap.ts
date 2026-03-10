import { HOST_URL } from "@/constant/env";

import { generateAppIdJson } from "../app-id-json";
import { IWebContent, IWebSeo } from "./type";

const WEB_TITLE = "Jasa Cuci Setrika Uap Terdekat: Pakaian Bersih dan Rapi Bebas Kusut";
export const SLUG = "laundry-setrika-uap";

export const webSeo: IWebSeo = {
  title: WEB_TITLE,
  description: "Nikmati layanan cuci setrika uap premium. Rasakan kenyamanan memakai pakaian yang bersih, rapi, dan bebas kusut dengan teknologi setrika uap modern.",
  primaryKeyword: [
    "laundry setrika uap",
    "cuci setrika uap",
    "jasa cuci setrika uap",
  ],
  secondaryKeyword: [
    "laundry setrika uap terdekat",
    "harga laundry setrika uap",
    "layanan setrika uap",
    "pakaian bebas kusut",
    "laundry kiloan setrika uap",
  ],
  imgAlt: WEB_TITLE,
  applicationId: generateAppIdJson({ webTitle: WEB_TITLE }),
  routes: "/" + SLUG,
  socialImage: HOST_URL + "/images/services/cuci-setrika-uap.jpg",
};

export const webContent: IWebContent = {
  title: "Laundry Setrika Uap Medan Marelan: Pakaian Bersih, Rapi, dan Bebas Kusut",
  subTitle: "Tampil Percaya Diri dengan Pakaian yang Bersih dan Rapi! Layanan Cuci Setrika Uap Kami Siap Membantu.",
  serviceName: "Laundry Setrika Uap",
  serviceNameAlt: "Cuci Setrika Uap",
  article: `
  <p><strong>Ingin tampil rapi dan percaya diri setiap hari? Layanan Cuci Setrika Uap dari Laundry G 99 adalah solusi terbaik untuk pakaian bersih dan bebas kusut!</strong></p>
  <h2>Kenapa Harus Laundry Setrika Uap di Laundry G 99 :</h2>
  <ul>
      <li><strong>Teknologi Setrika Uap Modern:</strong> Menggunakan mesin setrika uap canggih untuk hasil yang maksimal.</li>
      <li><strong>Bersih dan Rapi:</strong> Pakaian Anda akan bersih, rapi, dan bebas kusut.</li>
      <li><strong>Hemat Waktu:</strong> Serahkan cucian Anda dan terima kembali dalam kondisi siap pakai.</li>
      <li><strong>Harga Terjangkau:</strong> Layanan berkualitas dengan harga yang bersahabat.</li>
  </ul>
  <br/>
  <h2>Keunggulan Layanan Setrika Uap :</h2>
  <ul>
      <li>Membunuh kuman dan bakteri pada pakaian</li>
      <li>Menghilangkan kusut secara efektif</li>
      <li>Menjaga kualitas dan warna pakaian</li>
  </ul>
  <br/>
  <br/>
  <h2 style="text-align:center;">Percayakan Pakaian Anda kepada Layanan Cuci Setrika Uap di Laundry G 99!&nbsp;</h2>
  <br/>
  <br/>
  `,
  prices: [],
  hooks: "",
  article2: "",
  images: [
    "/images/services/cuci-setrika-uap.jpg",
  ],
  faq: []
};
