import globalStyles from "../../settings/global-styles";
import frame1 from "../../public/blog/ray-tracing/Raytracing.png";
import frame2 from "../../public/blog/ray-tracing/Raytracing-1.png";
import frame3 from "../../public/blog/ray-tracing/Raytracing-2.png";
import frame4 from "../../public/blog/ray-tracing/Raytracing-3.png";
import Image from "next/image";
import blogData from "../../settings/blogs.json";
import { Tweet } from "react-twitter-widgets";

export default function RayTracing() {
  return (
    <div
      className={globalStyles.div_styles.page_outer_wrapper}
      id="page-container"
    >
      <div className={globalStyles.div_styles.page_inner_wrapper}>
        <div className="pb-12 border-b-2">
          <h1 className={globalStyles.font_styles.h1}>Ray Tracing</h1>
          <p className={globalStyles.font_styles.p}>
            Ray tracing is our friend when we want a realistic 3D render. This
            technique is inspired by what happens in the natural world. But why,
            and how? Here we look at some basics of ray tracing: the why, ray
            equation, forward vs backward, and an overview of the general
            algorithm.
          </p>
        </div>
        <div className="py-12 border-b-2">
          <h4 className={globalStyles.font_styles.h4}>Topics Covered</h4>
          <div className="container">
            <ul className="list-disc">
              {blogData["ray-tracing"].covered.map((topic) => (
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
          <Tweet tweetId="1510623478256480268" />{" "}
        </div>
      </div>
    </div>
  );
}
