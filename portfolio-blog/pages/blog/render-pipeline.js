import globalStyles from "../../settings/global-styles";
import frame1 from "../../public/blog/render-pipeline/Pipeline-0.png";
import frame2 from "../../public/blog/render-pipeline/Pipeline-1.png";
import frame3 from "../../public/blog/render-pipeline/Pipeline-2.png";
import frame4 from "../../public/blog/render-pipeline/Pipeline-3.png";
import Image from "next/image";
import blogData from "../../settings/blogs.json";
import { Tweet } from "react-twitter-widgets";

export default function RenderPipeline() {
  return (
    <div
      className={globalStyles.div_styles.page_outer_wrapper}
      id="page-container"
    >
      <div className={globalStyles.div_styles.page_inner_wrapper}>
        <div className="pb-12 border-b-2">
          <h1 className={globalStyles.font_styles.h1}>Rendering Pipeline</h1>
          <p className={globalStyles.font_styles.p}>
            There is so much going on when rendering a 3D scene! Learn or
            refresh you memory on the high-level ideas of the 4-stage rendering
            pipeline — geometry processing, rasterization, fragment processing,
            and frame buffer processing — with Renny the Render Bunny 🐰.
          </p>
        </div>
        <div className="py-12 border-b-2">
          <h4 className={globalStyles.font_styles.h4}>Topics Covered</h4>
          <div className="container">
            <ul className="list-disc">
              {blogData["render-pipeline"].covered.map((topic) => (
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
          <Tweet tweetId="1503383036087386113" />
        </div>
      </div>
    </div>
  );
}
