import globalStyles from "../../settings/global-styles";
import frame1 from "../../public/blog/ml-models/ML-Autoencoder.png";
import frame2 from "../../public/blog/ml-models/ML-DiffusionModel.png";
import frame3 from "../../public/blog/ml-models/ML-GAN.png";
import frame4 from "../../public/blog/ml-models/ML-Transformer.png";
import Image from "next/image";
import blogData from "../../settings/blogs.json";
import { Tweet } from "react-twitter-widgets";

export default function MLModels() {
  return (
    <div
      className={globalStyles.div_styles.page_outer_wrapper}
      id="page-container"
    >
      <div className={globalStyles.div_styles.page_inner_wrapper}>
        <div className="pb-12 border-b-2">
          <h1 className={globalStyles.font_styles.h1}>
            {blogData["ml-models"].title}
          </h1>
          <p className={globalStyles.font_styles.p}>FILL THIS OUT</p>
        </div>
        <div className="py-12 border-b-2">
          <h4 className={globalStyles.font_styles.h4}>Topics Covered</h4>
          <div className="container">
            <ul className="list-disc">
              {blogData["ml-models"].covered.map((topic) => (
                <li
                  className={globalStyles.font_styles.p}
                  key={"topic-" + topic}
                >
                  {topic}
                </li>
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
        {/* <div className="pt-12">
          <Tweet tweetId="1545518922509713411" />
        </div> */}
      </div>
    </div>
  );
}