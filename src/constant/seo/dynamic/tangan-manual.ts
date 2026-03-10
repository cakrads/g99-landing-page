import { HOST_URL } from "@/constant/env";

import { generateAppIdJson } from "../app-id-json";
import { IWebContent, IWebSeo } from "./type";

const WEB_TITLE = "Jasa Cuci Tangan Manual Terdekat: Layanan Cuci Pakaian Lebih Memuaskan";
export const SLUG = "laundry-tangan-manual";

export const webSeo: IWebSeo = {
  title: WEB_TITLE,
  description: "Layanan cuci tangan manual profesional untuk pakaian Anda. Kami menawarkan jasa cuci pakaian dengan tangan untuk hasil yang lebih memuaskan dan perawatan lebih detail.",
  primaryKeyword: [
    "cuci tangan manual",
    "laundry tangan manual",
    "jasa cuci tangan manual",
  ],
  secondaryKeyword: [
    "cuci tangan manual terdekat",
    "harga cuci tangan manual",
    "layanan cuci tangan",
    "laundry manual terdekat",
  ],
  imgAlt: WEB_TITLE,
  applicationId: generateAppIdJson({ webTitle: WEB_TITLE }),
  routes: "/" + SLUG,
  socialImage: HOST_URL + "/images/services/cuci-tangan-manual.jpg",
};

export const webContent: IWebContent = {
  title: "Laundry Cuci Tangan Manual Medan Marelan: Perawatan Pakaian yang Lebih Memuaskan",
  subTitle: "Ingin Hasil Cucian yang Lebih Bersih dan Detail? Layanan Cuci Tangan Manual Kami Adalah Solusinya!",
  serviceName: "Cuci Tangan Manual",
  serviceNameAlt: "Laundry Manual",
  article: `
  <p><strong>Ingin hasil cucian yang lebih bersih dan terawat? Layanan Cuci Tangan Manual dari Laundry G 99 memberikan perawatan ekstra untuk pakaian kesayangan Anda!</strong></p>
  <h2>Kenapa Harus Cuci Tangan Manual di Laundry G 99 :</h2>
  <ul>
      <li><strong>Perawatan Lebih Detail:</strong> Setiap bagian pakaian dibersihkan dengan teliti dan penuh perhatian.</li>
      <li><strong>Aman untuk Kain Delicate:</strong> Ideal untuk pakaian yang tidak bisa dicuci dengan mesin.</li>
      <li><strong>Hasil Lebih Bersih:</strong> Noda membandel dapat dibersihkan lebih efektif dengan tangan.</li>
      <li><strong>Tenaga Profesional:</strong> Ditangani oleh tenaga berpengalaman dalam perawatan pakaian.</li>
  </ul>
  <br/>
  <h2>Pakaian yang Cocok untuk Cuci Tangan Manual :</h2>
  <ul>
      <li>Pakaian berbahan halus dan delicate</li>
      <li>Pakaian dengan detail bordir atau hiasan</li>
      <li>Pakaian bayi dan anak-anak</li>
  </ul>
  <br/>
  <br/>
  <h2 style="text-align:center;">Percayakan Pakaian Anda kepada Layanan Cuci Tangan Manual di Laundry G 99!&nbsp;</h2>
  <br/>
  <br/>
  `,
  prices: [],
  hooks: "",
  article2: "",
  images: [
    "/images/services/cuci-tangan-manual.jpg",
  ],
  faq: []
};
