import globalStyles from "../../settings/global-styles";
import frame1 from "../../public/blog/svg-rasterization/SVG-1.png";
import frame2 from "../../public/blog/svg-rasterization/SVG-2.png";
import frame3 from "../../public/blog/svg-rasterization/SVG-3.png";
import frame4 from "../../public/blog/svg-rasterization/SVG-4.png";
import Image from "next/image";
import blogData from "../../settings/blogs.json";
import { Tweet } from "react-twitter-widgets";

export default function SvgRaster() {
  return (
    <div
      className={globalStyles.div_styles.page_outer_wrapper}
      id="page-container"
    >
      <div className={globalStyles.div_styles.page_inner_wrapper}>
        <div className="pb-12 border-b-2">
          <h1 className={globalStyles.font_styles.h1}>SVG Rasterization</h1>
          <p className={globalStyles.font_styles.p}>
            Vector graphic is great for web because of its scalability and
            smaller file size, but we can do more complex editing with raster
            graphic. Take a look at a simple rasterization pipeline for SVG
            files, painting <code>{"<polygon />"} </code>
            on a grid of pixels with supersampling.
          </p>
        </div>
        <div className="py-12 border-b-2">
          <h4 className={globalStyles.font_styles.h4}>Topics Covered</h4>
          <div className="container">
            <ul className="list-disc">
              {blogData["svg-rasterization"].covered.map((topic) => (
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
          <Tweet tweetId="1487812714294652934" />
        </div>
      </div>
    </div>
  );
}
