import globalStyles from "../../settings/global-styles";
import frame1 from "../../public/blog/mipmap/mipmap.png";
import Image from "next/image";
import blogData from "../../settings/blogs.json";
import { Tweet } from "react-twitter-widgets";

export default function MipMap() {
  return (
    <div
      className={globalStyles.div_styles.page_outer_wrapper}
      id="page-container"
    >
      <div className={globalStyles.div_styles.page_inner_wrapper}>
        <div className="pb-12 border-b-2">
          <h1 className={globalStyles.font_styles.h1}>
            {blogData["mipmap"].title}
          </h1>
          <p className={globalStyles.font_styles.p}>
            Mipmap textures are used frequently in graphics to reduce aliasing
            in images. Today we take a look at what is mipmap, why we need
            mipmap, and how we generate mipmap.
          </p>
        </div>
        <div className="py-12 border-b-2">
          <h4 className={globalStyles.font_styles.h4}>Topics Covered</h4>
          <div className="container">
            <ul className="list-disc">
              {blogData["mipmap"].covered.map((topic) => (
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
        <div className="py-12 border-b-2">
          <Image src={frame1} />
        </div>

        <div className="pt-12">
          <Tweet tweetId="1446842946813370369" />
        </div>
      </div>
    </div>
  );
}
