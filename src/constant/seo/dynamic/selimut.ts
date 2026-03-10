import { HOST_URL } from "@/constant/env";

import { generateAppIdJson } from "../app-id-json";
import { IWebContent, IWebSeo } from "./type";

const WEB_TITLE = "Jasa Cuci Selimut Terdekat: Selimut Bersih dan Higienis untuk Tidur Nyaman";
export const SLUG = "laundry-selimut";

export const webSeo: IWebSeo = {
  title: WEB_TITLE,
  description: "Layanan cuci selimut profesional dengan harga terjangkau. Pastikan selimut Anda selalu bersih dan higienis untuk kesehatan dan kenyamanan tidur yang lebih baik.",
  primaryKeyword: [
    "cuci selimut",
    "laundry selimut",
    "jasa cuci selimut",
  ],
  secondaryKeyword: [
    "cuci selimut terdekat",
    "harga cuci selimut",
    "laundry selimut murah",
    "layanan cuci selimut",
    "cuci selimut tebal",
  ],
  imgAlt: WEB_TITLE,
  applicationId: generateAppIdJson({ webTitle: WEB_TITLE }),
  routes: "/" + SLUG,
  socialImage: HOST_URL + "/images/services/cuci-selimut.jpg",
};

export const webContent: IWebContent = {
  title: "Laundry Cuci Selimut Medan Marelan: Selimut Bersih dan Higienis",
  subTitle: "Selimut Anda Perlu Dicuci? Serahkan pada Kami untuk Hasil yang Bersih, Higienis, dan Segar!",
  serviceName: "Cuci Selimut",
  serviceNameAlt: "Laundry Selimut",
  article: `
  <p><strong>Selimut yang bersih dan higienis adalah kunci untuk tidur yang nyaman dan sehat. Percayakan cuci selimut Anda kepada Laundry G 99!</strong></p>
  <h2>Kenapa Harus Cuci Selimut di Laundry G 99 :</h2>
  <ul>
      <li><strong>Bersih dan Higienis:</strong> Selimut Anda dibersihkan secara menyeluruh dari debu, tungau, dan bakteri.</li>
      <li><strong>Mesin Modern:</strong> Menggunakan mesin cuci berkapasitas besar untuk selimut tebal sekalipun.</li>
      <li><strong>Pengering Efisien:</strong> Selimut dikeringkan dengan sempurna tanpa bau apek.</li>
      <li><strong>Harga Terjangkau:</strong> Layanan berkualitas dengan harga yang bersahabat.</li>
  </ul>
  <br/>
  <h2>Mengapa Penting Mencuci Selimut Secara Rutin?</h2>
  <ul>
      <li>Menghilangkan tungau dan alergen</li>
      <li>Mencegah pertumbuhan bakteri dan jamur</li>
      <li>Menjaga kesehatan dan kualitas tidur</li>
  </ul>
  <br/>
  <br/>
  <h2 style="text-align:center;">Jadikan Selimut Anda Bersih dan Segar dengan Jasa Cuci Selimut di Laundry G 99!&nbsp;</h2>
  <br/>
  <br/>
  `,
  prices: [],
  hooks: "",
  article2: "",
  images: [
    "/images/services/cuci-selimut.jpg",
  ],
  faq: []
};
