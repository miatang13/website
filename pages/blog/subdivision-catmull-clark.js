import globalStyles from "../../settings/global-styles";
import frame1 from "../../public/blog/subdivision-catmull-clark/Subdivision1.png";
import frame2 from "../../public/blog/subdivision-catmull-clark/Subdivision2.png";
import frame3 from "../../public/blog/subdivision-catmull-clark/Subdivision3.png";
import frame4 from "../../public/blog/subdivision-catmull-clark/Subdivision4.png";
import Image from "next/image";
import blogData from "../../settings/blogs.json";
import { Tweet } from "react-twitter-widgets";

export default function Subdivison() {
  return (
    <div
      className={globalStyles.div_styles.page_outer_wrapper}
      id="page-container"
    >
      <div className={globalStyles.div_styles.page_inner_wrapper}>
        <div className="pb-12 border-b-2">
          <h1 className={globalStyles.font_styles.h1}>
            Subdivision and Catmull-Clark
          </h1>
          <p className={globalStyles.font_styles.p}>
            Sometimes we have to deal with a coarse mesh that we wish to
            upsample for a smoother appearance. Subdivision is a recursive
            operation we can use on polygonal meshes. Take a look at how we
            categorize refinement schemes and how the popular Catmull-Clark
            subdivision works.
          </p>
        </div>
        <div className="py-12 border-b-2">
          <h4 className={globalStyles.font_styles.h4}>Topics Covered</h4>
          <div className="container">
            <ul className="list-disc">
              {blogData["subdivision-catmull-clark"].covered.map((topic) => (
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
          <Tweet tweetId="1500591790805725187" />
        </div>
      </div>
    </div>
  );
}
