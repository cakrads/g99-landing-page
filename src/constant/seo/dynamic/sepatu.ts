import { HOST_URL } from "@/constant/env";

import { generateAppIdJson } from "../app-id-json";
import { IWebContent, IWebSeo } from "./type";

const WEB_TITLE = "Laundry Sepatu Medan Marelan: Profesional, Bersih & Terawat!";
export const SLUG = "laundry-sepatu";

export const webSeo: IWebSeo = {
  title: WEB_TITLE,
  description: "Laundry sepatu kesayangan Anda agar terlihat seperti baru lagi di Laundry G99: Laundry Sepatu Medan Marelan. Pasti bersih dan Aman. Pesan sekarang!",
  primaryKeyword: [
    "laundry sepatu",
    "cuci sepatu",
    "jasa cuci sepatu",
    "jasa laundry sepatu",
  ],
  secondaryKeyword: [
    "harga laundry sepatu",
    "laundry sepatu terdekat",
    "laundry sepatu marelan",
    "cuci sepatu marelan",
  ],
  imgAlt: "",
  applicationId: generateAppIdJson({ webTitle: WEB_TITLE }),
  routes: "/" + SLUG,
  socialImage: HOST_URL + "/images/services/shoes/laundry-sepatu-medan-marelan-1.png",
};

export const webContent: IWebContent = {
  title: WEB_TITLE,
  subTitle: "Lindungi Sepatu Kesayangan Anda dengan Sentuhan Ahli",
  serviceName: "Laundry Sepatu",
  serviceNameAlt: "Cuci Sepatu",
  article: `
  <p>Kami memahami bahwa sepatu bukan hanya alas kaki, tetapi bagian penting dari gaya dan kepercayaan diri Anda. Dengan layanan berbasis <em>care &amp; quality</em>, kami memberikan lebih dari sekadar mencuci&mdash;kami merawat setiap sepatu dengan hati-hati untuk menjaga kualitasnya.</p>
  <p><strong>Mengapa Pilih Layanan Kami?</strong></p>
  <ol>
  <li style="list-style-type: none;">
  <ol>
  <li><strong>Perawatan Khusus:</strong> Metode pencucian aman untuk berbagai bahan, dari kain hingga kulit.</li>
  <li><strong>Bersih dan Higienis:</strong> Sepatu bebas dari noda, bau, dan kuman.</li>
  <li><strong>Pelestarian Nilai Sepatu:</strong> Proses ramah bahan yang mempertahankan keindahan dan usia sepatu.</li>
  <li><strong>Teknologi Modern:</strong> Penggunaan alat canggih untuk hasil maksimal tanpa merusak bahan.</li>
  <li><strong>Detail-Oriented:</strong> Setiap bagian sepatu, dari sol hingga tali, dirawat dengan sempurna.</li>
  </ol>
  </li>
  </ol>
  <br/>
  <p>Kami percaya sepatu yang bersih dan terawat dapat meningkatkan kepercayaan diri Anda setiap hari.</p>
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
    "/images/services/shoes/laundry-sepatu-medan-marelan-1.png",
    "/images/services/shoes/laundry-sepatu-medan-marelan-2.png",
    "/images/services/shoes/laundry-sepatu-medan-marelan-3.png",
    "/images/services/shoes/laundry-sepatu-medan-marelan-4.png",
  ],
  faq: []
};
