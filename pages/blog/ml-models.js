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
          <p className={globalStyles.font_styles.p}>
            Have you wondered about the magic behind generative AI art tools
            like DALL·E and Midjourney? Seeing the outputs is fun, and learning
            the algorithms can be even more rewarding. Today we look at 4
            popular Machine Learning models — Autoencoder, Transformer,
            Diffusion Model, and GAN.
          </p>
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
        <div className="pt-12">
          <Tweet tweetId="1550863605519847425" />
        </div>
      </div>
    </div>
  );
}
