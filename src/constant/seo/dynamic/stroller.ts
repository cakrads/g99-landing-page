import { HOST_URL } from "@/constant/env";

import { generateAppIdJson } from "../app-id-json";
import { IWebContent, IWebSeo } from "./type";

const WEB_TITLE = "Laundry Stroller Berkualitas di Medan Marelan";
export const SLUG = "laundry-stroller";
export const webSeo: IWebSeo = {
  title: WEB_TITLE,
  description: "Laundry Stroller si buah hati disini, tim kami akan menjemput stroller Anda dan akan dibersihkan secara profesional.",
  primaryKeyword: [
    "laundry stroller",
    "cuci stroller bayi",
    "jasa cuci stroller",
  ],
  secondaryKeyword: [
    "cuci stroller terdekat",
    "laundry stroller panggilan",
    "harga cuci stroller",
    "laundry stroller bayi Medan",
    "laundry stroller bayi Marelan",
    "cuci stroller bayi Medan",
    "cuci stroller bayi Marelan",
    "jasa cuci stroller bayi murah",
    "layanan laundry stroller",
    "stroller bayi kotor",
    "cara membersihkan stroller bayi",
  ],
  imgAlt: WEB_TITLE,
  applicationId: generateAppIdJson({ webTitle: WEB_TITLE }),
  routes: "/" + SLUG,
  socialImage: HOST_URL + "/images/services/stroller/laundry-stroller-medan-marelan.png",
};

export const webContent: IWebContent = {
  title: "Jasa Cuci Stroller",
  subTitle: "Spesialis cuci stroller dan laundry perlengkapan bayi.",
  serviceName: "Laundry Stroller",
  serviceNameAlt: "Cuci Stroller",
  article: `
    <p><strong>Bingung stroller si buah hati kotor????</strong><br/>
    <strong>Pesan Jasa Kami, tim kami akan menjemput stroller Anda dan akan dibersihkan secara profesional oleh Laundry Stroller G 99.</strong></p>
    <br/>
    <h2>Kenapa Harus Laundry Stroller di Laundry G 99 :</h2>
    <ul>
        <li>Kami membersihkan stroller &; perlengkapan bayi Anda dengan&nbsp;teknik pencucian terbaik&nbsp;yang membuat semua noda, kotoran, dan aroma tidak sedap terlepas sempurna tanpa harus khawatir terjadinya resiko kerusakan pada stroller Anda.</li>
        <li>Kami menggunakan&nbsp;chemical pembersih khusus perlengkapan bayi yang memiliki pH 7&nbsp;sehingga sangat aman dan sesuai untuk kebutuhan bayi.</li>
        <li>Kami berani&nbsp;menggaransi kepuasan Anda. Jika Anda tidak puas, Anda bisa mengklaim untuk dicuci kembali atau GRATIS tidak perlu membayar.</li>
    </ul>
    <br/>
    <br/>
    <h3 style="text-align:center;">Hadiahkan&nbsp;stroller yang bersih dan higienis&nbsp;untuk buah hati Anda setiap hari, silahkan memesan jasa laundry stroller kami.</h3>
    <br/>
    <h2>Baby Kleen</h2>
    <p>Merupakan jasa laundry spesialis untuk barang bayi seperti stroller dan car seat. Baby Kleen menggunakan bahan pembersih yang aman untuk kulit bayi dan menggunakan steam untuk membersihkan kuman secara maksimal.<br>&nbsp;</p>
    <h2>Bagaiaman Cara Order Layanan Laundry Stroller:</h2>
    <p>Proses pengerjaan laundry sampai dengan barang akan diterima kembali adalah 7 hari kalender.</br>
    Apabila ada pertanyaan lebih lanjut, dapat menghubungi tim Customer Service kami: <strong>081361610795</strong>,<strong> 0895330398255</strong></p>
  `,
  prices: [
    // {
    //   type: "TIDAK TERMASUK LINER / SARUNG STROLLER",
    //   value: "Rp 80.000",
    // },
    // {
    //   type: "SUDAH TERMASUK LINER / SARUNG STROLLER",
    //   value: "Rp 100.000",
    // }
  ],
  hooks: "",
  article2: "",
  images: [
    "/images/services/stroller/laundry-stroller-medan-marelan.png",
    "/images/services/stroller/cuci-stroller-medan-marelan.png",
    "/images/services/stroller/laundry-kleen-medan-marelan.png",
  ],
  faq: []
};
