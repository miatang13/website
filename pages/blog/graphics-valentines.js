import globalStyles from "../../settings/global-styles";
import GPU from "../../public/blog/graphics-valentines/GPU.png";
import Halfedge from "../../public/blog/graphics-valentines/Halfedge.png";
import NURBS from "../../public/blog/graphics-valentines/NURBS.png";
import World from "../../public/blog/graphics-valentines/World.png";
import Image from "next/image";
import blogData from "../../settings/blogs.json";
import { Tweet } from "react-twitter-widgets";

export default function GraphicsValentines() {
  return (
    <div
      className={globalStyles.div_styles.page_outer_wrapper}
      id='page-container'
    >
      <div className={globalStyles.div_styles.page_inner_wrapper}>
        <div className='pb-12 border-b-2'>
          <h1 className={globalStyles.font_styles.h1}>Valentine's Day Cards</h1>
          <p className={globalStyles.font_styles.p}>
            Happy Valentine's♥️! Celebrate the day with some lighthearted
            graphics jokes to share with your graphics friends 💌
          </p>
        </div>
        <div className='py-12 border-b-2'>
          <h4 className={globalStyles.font_styles.h4}>Topics Covered</h4>
          <div className='container'>
            <ul className='list-disc'>
              {blogData["halfedge-mesh"].covered.map((topic) => (
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
        <div className='py-12 border-b-2 grid sm:grid-cols-2 gap-6'>
          <Image src={GPU} />
          <Image src={Halfedge} />
          <Image src={World} />
          <Image src={NURBS} />
        </div>
        <div className='pt-12'>
          <Tweet tweetId='1493238627572330496' />
        </div>
      </div>
    </div>
  );
}
