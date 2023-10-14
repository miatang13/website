import globalStyles from "../../settings/global-styles";
import frame1 from "../../public/blog/LLMs/LLM-1.png";
import frame2 from "../../public/blog/LLMs/LLM-2.png";
import frame3 from "../../public/blog/LLMs/LLM-3.png";
import frame4 from "../../public/blog/LLMs/LLM-4.png";
import Image from "next/image";
import blogData from "../../settings/blogs.json";
import { Tweet } from "react-twitter-widgets";

export default function LLMs() {
  return (
    <div
      className={globalStyles.div_styles.page_outer_wrapper}
      id='page-container'
    >
      <div className={globalStyles.div_styles.page_inner_wrapper}>
        <div className='pb-12 border-b-2'>
          <h1 className={globalStyles.font_styles.h1}>
            {blogData["llms"].title}
          </h1>
          <p className={globalStyles.font_styles.p}>
            Have you ever wondered about the magic behind ChatGPT? As more
            LLM-based generative AI tools become part of our lives, they don’t
            have to remain mysterious black boxes! Here, we delve into the
            basics of LLMs, from predicting the next word to techniques like
            fine-tuning and RLHF.
          </p>
        </div>
        <div className='py-12 border-b-2'>
          <h4 className={globalStyles.font_styles.h4}>Topics Covered</h4>
          <div className='container'>
            <ul className='list-disc'>
              {blogData["llms"].covered.map((topic) => (
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
        <div className='py-12 border-b-2 grid sm:grid-cols-1 gap-6'>
          <Image src={frame1} />
          <Image src={frame2} />
          <Image src={frame3} />
          <Image src={frame4} />
        </div>
        <div className='pt-12'>
          <Tweet tweetId='1713232964707111083' />
        </div>
      </div>
    </div>
  );
}
