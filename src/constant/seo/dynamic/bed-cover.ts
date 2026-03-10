import { HOST_URL } from "@/constant/env";

import { generateAppIdJson } from "../app-id-json";
import { IWebContent, IWebSeo } from "./type";

const WEB_TITLE = "Jasa Cuci Bed Cover Terdekat: Bed Cover Bersih dan Wangi untuk Tidur Nyaman";
export const SLUG = "laundry-bed-cover";

export const webSeo: IWebSeo = {
  title: WEB_TITLE,
  description: "Layanan cuci bed cover profesional dengan harga terjangkau. Dapatkan bed cover bersih dan wangi untuk tidur yang lebih nyaman dan nyenyak setiap malam.",
  primaryKeyword: [
    "cuci bed cover",
    "laundry bed cover",
    "jasa cuci bed cover",
  ],
  secondaryKeyword: [
    "cuci bed cover terdekat",
    "harga cuci bed cover",
    "laundry bed cover murah",
    "layanan cuci bed cover",
    "cuci sprei bed cover",
  ],
  imgAlt: WEB_TITLE,
  applicationId: generateAppIdJson({ webTitle: WEB_TITLE }),
  routes: "/" + SLUG,
  socialImage: HOST_URL + "/images/services/cuci-bed-cover.jpg",
};

export const webContent: IWebContent = {
  title: "Laundry Cuci Bed Cover Medan Marelan: Bed Cover Bersih, Wangi, dan Segar",
  subTitle: "Bed Cover Anda Perlu Dicuci? Serahkan pada Kami untuk Hasil Bersih, Wangi, dan Tidur Lebih Nyaman!",
  serviceName: "Cuci Bed Cover",
  serviceNameAlt: "Laundry Bed Cover",
  article: `
  <p><strong>Bed cover yang bersih dan wangi membuat tidur Anda lebih nyaman dan nyenyak. Percayakan cuci bed cover Anda kepada Laundry G 99!</strong></p>
  <h2>Kenapa Harus Cuci Bed Cover di Laundry G 99 :</h2>
  <ul>
      <li><strong>Bersih dan Wangi:</strong> Bed cover Anda dibersihkan secara menyeluruh dan dibilas dengan pelembut pakaian.</li>
      <li><strong>Mesin Berkapasitas Besar:</strong> Mampu mencuci bed cover ukuran besar dengan sempurna.</li>
      <li><strong>Dikeringkan Sempurna:</strong> Bed cover dikeringkan tanpa bau apek menggunakan mesin pengering modern.</li>
      <li><strong>Harga Terjangkau:</strong> Layanan berkualitas dengan harga yang bersahabat.</li>
  </ul>
  <br/>
  <h2>Mengapa Penting Mencuci Bed Cover Secara Rutin?</h2>
  <ul>
      <li>Menghilangkan tungau dan kuman</li>
      <li>Mencegah alergi dan gangguan pernapasan</li>
      <li>Menjaga kebersihan dan kenyamanan tidur</li>
  </ul>
  <br/>
  <br/>
  <h2 style="text-align:center;">Jadikan Bed Cover Anda Bersih dan Wangi dengan Jasa Cuci Bed Cover di Laundry G 99!&nbsp;</h2>
  <br/>
  <br/>
  `,
  prices: [],
  hooks: "",
  article2: "",
  images: [
    "/images/services/cuci-bed-cover.jpg",
  ],
  faq: []
};
