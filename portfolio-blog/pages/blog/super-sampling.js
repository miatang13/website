import globalStyles from "../../settings/global-styles";
import frame1 from "../../public/blog/super-sampling/anti-aliasing.png";
import Image from "next/image";
import blogData from "../../settings/blogs.json";
import { Tweet } from "react-twitter-widgets";

export default function SuperSampling() {
  return (
    <div
      className={globalStyles.div_styles.page_outer_wrapper}
      id="page-container"
    >
      <div className={globalStyles.div_styles.page_inner_wrapper}>
        <div className="pb-12 border-b-2">
          <h1 className={globalStyles.font_styles.h1}>
            {blogData["super-sampling"].title}
          </h1>
          <p className={globalStyles.font_styles.p}>
            Supersampling is one of the most straightforward solution to
            combatting aliasing in renders. Here we have a short comic on how
            Supersampling can be used to smooth out the jaggies in an image via
            box filter.
          </p>
        </div>
        <div className="py-12 border-b-2">
          <h4 className={globalStyles.font_styles.h4}>Topics Covered</h4>
          <div className="container">
            <ul className="list-disc">
              {blogData["super-sampling"].covered.map((topic) => (
                <li className={globalStyles.font_styles.p}>{topic}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-12 border-b-2">
          <Image src={frame1} />
        </div>

        <div className="pt-12">
          <Tweet tweetId="1443930631554183168" />
        </div>
      </div>
    </div>
  );
}
