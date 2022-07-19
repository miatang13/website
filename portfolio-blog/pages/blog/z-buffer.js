import globalStyles from "../../settings/global-styles";
import frame1 from "../../public/blog/z-buffer/zbuffer.png";
import Image from "next/image";
import blogData from "../../settings/blogs.json";
import { Tweet } from "react-twitter-widgets";

export default function ZBuffer() {
  return (
    <div
      className={globalStyles.div_styles.page_outer_wrapper}
      id="page-container"
    >
      <div className={globalStyles.div_styles.page_inner_wrapper}>
        <div className="pb-12 border-b-2">
          <h1 className={globalStyles.font_styles.h1}>
            {blogData["z-buffer"].title}
          </h1>
          <p className={globalStyles.font_styles.p}>
            Almost every beautiful view we look at both in physical world and
            digital scenes involves having objects at different depth. Today we
            look at how Z-buffer is a great technique to render objects at
            different distances from the camera, which smartly handles
            occlusion.
          </p>
        </div>
        <div className="py-12 border-b-2">
          <h4 className={globalStyles.font_styles.h4}>Topics Covered</h4>
          <div className="container">
            <ul className="list-disc">
              {blogData["z-buffer"].covered.map((topic) => (
                <li className={globalStyles.font_styles.p}>{topic}</li>
              ))}
            </ul>
          </div>
        </div>
        <Image src={frame1} />
        <div className="pt-12">
          <Tweet tweetId="1454168094151225356" />
        </div>
      </div>
    </div>
  );
}
