import globalStyles from "../../settings/global-styles";
import FXAA from "../../public/blog/anti-aliasing/FXAA.png";
import MSAA from "../../public/blog/anti-aliasing/MSAA.png";
import SSAA from "../../public/blog/anti-aliasing/SSAA.png";
import TXAA from "../../public/blog/anti-aliasing/TXAA.png";
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
          <h1 className={globalStyles.font_styles.h1}>Anti-Aliasing</h1>
          <p className={globalStyles.font_styles.p}>
            Have you ever felt confused by all the Anti-Aliasing acronyms out
            there? What are they actually doing to reduce those jaggies on your
            screen? Here we look at some selected features of FXAA, SSAA, MSAA,
            and TXAA.
          </p>
        </div>
        <div className="py-12 border-b-2">
          <h4 className={globalStyles.font_styles.h4}>Topics Covered</h4>
          <div className="container">
            <ul className="list-disc">
              {blogData["anti-aliasing"].covered.map((topic) => (
                <li className={globalStyles.font_styles.p}>{topic}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-12 border-b-2 grid sm:grid-cols-2 gap-6">
          <Image src={FXAA} />
          <Image src={MSAA} />
          <Image src={SSAA} />
          <Image src={TXAA} />
        </div>
        <div className="pt-12">
          <Tweet tweetId="1490355292487487494" />
        </div>
      </div>
    </div>
  );
}
