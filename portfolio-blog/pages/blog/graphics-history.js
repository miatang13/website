import globalStyles from "../../settings/global-styles";
import nineTeen6ty from "../../public/blog/graphics-history/1960s.png";
import nineTeen7ty from "../../public/blog/graphics-history/1970s.png";
import nineTeen8ty from "../../public/blog/graphics-history/1980s.png";
import nineTeen9ty from "../../public/blog/graphics-history/1990s.png";
import twoThousands from "../../public/blog/graphics-history/2000s.png";
import Image from "next/image";
import blogData from "../../settings/blogs.json";
import { Tweet } from "react-twitter-widgets";

export default function GraphicsHistory() {
  return (
    <div
      className={globalStyles.div_styles.page_outer_wrapper}
      id="page-container"
    >
      <div className={globalStyles.div_styles.page_inner_wrapper}>
        <div className="pb-12 border-b-2">
          <h1 className={globalStyles.font_styles.h1}>
            Brief History on Graphics
          </h1>
          <p className={globalStyles.font_styles.p}>
            Been reading a bit into the history of computer graphics
            (1960-2000s). Converted some of the notes I took into these. What
            are the milestones in graphics you remember from any decade?
          </p>
        </div>
        <div className="py-12 border-b-2">
          <h4 className={globalStyles.font_styles.h4}>Topics Covered</h4>
          <div className="container">
            <ul className="list-disc">
              {blogData["graphics-history"].covered.map((topic) => (
                <li className={globalStyles.font_styles.p}>{topic}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-12 border-b-2 grid sm:grid-cols-2 gap-6">
          <Image src={nineTeen6ty} />
          <Image src={nineTeen7ty} />
          <Image src={nineTeen8ty} />
          <Image src={nineTeen9ty} />
          <Image src={twoThousands} />
        </div>
        <div className="pt-12">
          <Tweet tweetId="1485314067610812420" />
        </div>
      </div>
    </div>
  );
}
