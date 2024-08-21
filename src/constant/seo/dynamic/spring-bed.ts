import { HOST_URL } from "@/constant/env";

import { generateAppIdJson } from "../app-id-json";
import { IWebContent, IWebSeo } from "./type";

const WEB_TITLE = "Jasa Cuci Spring bed Medan Marelan: Bisa Antar-Jemput";
export const SLUG = "cuci-spring-bed";

export const webSeo: IWebSeo = {
  title: WEB_TITLE,
  description: "Nikmati jasa cuci spring bed premium dengan harga terjangkau, bisa Antar-Jemput. Kami menggunakan teknologi terbaru untuk membersihkan spring bed Anda secara efektif.",
  primaryKeyword: [
    "laundry springbed",
    "cuci springbed",
    "jasa cuci springbed",
    "laundry spring bed",
    "cuci spring bed",
    "jasa cuci spring bed",
  ],
  secondaryKeyword: [
    "cuci springbed panggilan",
    "cuci spring bed panggilan",
    "harga cuci spring bed",
    "harga cuci springbed",
    "laundry spring bed terdekat",
    "laundry springbed terdekat",
  ],
  imgAlt: "",
  applicationId: generateAppIdJson({ webTitle: WEB_TITLE }),
  routes: "/" + SLUG,
  socialImage: HOST_URL + "/images/services/spring-bed/1.png",
};

export const webContent: IWebContent = {
  title: "Laundry Spring Bed Medan Marelan: Cuci Spring Bed Berkualitas Tinggi",
  subTitle: "Spring Bed Kotor? Serahkan pada Kami! Kami siap Antar-Jemput Spring Bed Anda.",
  serviceName: "Laundry Spring Bed",
  serviceNameAlt: "Cuci Spring Bed",
  article: `
  <p><strong>Jaga Kebersihan dan Kenyamanan Spring Bed Anda dengan Laundry G 99 di Marelan!&nbsp;</strong><br><strong>Apakah Spring Bed Anda terlihat kotor ataupun kusam? Biarkan kami mengurusnya! Dengan layanan laundry khusus dari Laundry G 99, spring bed Anda akan kembali bersih, segar, dan nyaman!</strong><br>&nbsp;</p>
  <h2>Kenapa Harus Laundry Spring Beddi Laundry G 99 :</h2>
  <ul>
      <li><strong>Profesional &amp; Berpengalaman:</strong> Tim kami ahli dalam merawat dan mencuci spring bed berbagai bahan.</li>
      <li><strong>Teknologi Canggih:</strong> Kami menggunakan mesin dan deterjen berkualitas untuk hasil yang maksimal tanpa merusak bahan.</li>
      <li><strong>Hemat Waktu:</strong> Cukup antar dan ambil, dan kami akan mengurus sisanya! ✨ Layanan Ramah Lingkungan: Deterjen ramah lingkungan dan proses pengeringan hemat energi.</li>
      <li>
          <p style="margin-left:0cm;margin-right:0cm;"><span style="color:red;font-family:&quot;Times New Roman&quot;, serif;font-size:16.0pt;"><span lang="EN-US" dir="ltr"><strong>Garansi: Jika kurang puas kita cuci ulang</strong></span></span><span style="font-family:&quot;Times New Roman&quot;, serif;font-size:16.0pt;"><span lang="EN-US" dir="ltr">. </span><i><span lang="EN-US" dir="ltr"><strong>GRATIS</strong></span></i></span></p>
      </li>
  </ul>
  <h2>Mengapa Penting untuk Mencuci Spring Bed Secara Rutin?</h2>
  <ul>
      <li>Manfaat kesehatan</li>
      <li>Menjaga kebersihan dan kebersihan</li>
      <li>Mencegah pertumbuhan bakteri dan jamur</li>
  </ul>
  `, // will help to edit html: https://onlinehtmleditor.dev/
  prices: [],
  hooks: "",
  article2: "",
  images: [
    "/images/services/spring-bed/1.png",
    "/images/services/spring-bed/2.png",
    "/images/services/spring-bed/3.png",
  ],
  faq: [{
    question: "",
    answer: "",
  }]
};
