import globalStyles from "../../settings/global-styles";
import frame1 from "../../public/blog/image-compression/img-compression1.png";
import frame2 from "../../public/blog/image-compression/img-compression2.png";
import frame3 from "../../public/blog/image-compression/img-compression3.png";
import frame4 from "../../public/blog/image-compression/img-compression4.png";
import Image from "next/image";
import blogData from "../../settings/blogs.json";
import { Tweet } from "react-twitter-widgets";

export default function ImageCompression() {
  return (
    <div
      className={globalStyles.div_styles.page_outer_wrapper}
      id="page-container"
    >
      <div className={globalStyles.div_styles.page_inner_wrapper}>
        <div className="pb-12 border-b-2">
          <h1 className={globalStyles.font_styles.h1}>Image Compression </h1>
          <p className={globalStyles.font_styles.p}>
            Billions of images are shared online daily. Image compression is key
            for fast transmission and efficient storage. We take a look at the
            difference between lossy &amp; lossless compression, and 3 specific
            lossy compression techniques: Color Quantization, Chroma
            Subsampling, and DCT.
          </p>
        </div>
        <div className="py-12 border-b-2">
          <h4 className={globalStyles.font_styles.h4}>Topics Covered</h4>
          <div className="container">
            <ul className="list-disc">
              {blogData["image-compression"].covered.map((topic) => (
                <li className={globalStyles.font_styles.p}>{topic}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-12 border-b-2 grid sm:grid-cols-2 gap-6">
          <Image src={frame1} />
          <Image src={frame2} />
          <Image src={frame3} />
          <Image src={frame4} />
        </div>
        <div className="pt-12">
          <Tweet tweetId="1515698020624519171" />
        </div>
      </div>
    </div>
  );
}
