import globalStyles from "../../settings/global-styles";
import frame1 from "../../public/blog/ml-basics/ML-GradientDescent.png";
import frame2 from "../../public/blog/ml-basics/ML-LinearRegression.png";
import frame3 from "../../public/blog/ml-basics/ML-NN.png";
import Image from "next/image";
import blogData from "../../settings/blogs.json";
import { Tweet } from "react-twitter-widgets";

export default function MLBasics() {
  return (
    <div
      className={globalStyles.div_styles.page_outer_wrapper}
      id="page-container"
    >
      <div className={globalStyles.div_styles.page_inner_wrapper}>
        <div className="pb-12 border-b-2">
          <h1 className={globalStyles.font_styles.h1}>
            {blogData["ml-basics"].title}
          </h1>
          <p className={globalStyles.font_styles.p}>
            Here's a cheat sheet for Neural Network pipeline from data input,
            forward pass with weight adjustments & loss evaluation, to gradient
            descent via backpropagation. Gradient descent is also super useful
            in Graphics for applications such as Inverse Kinematics🦾.
          </p>
        </div>
        <div className="py-12 border-b-2">
          <h4 className={globalStyles.font_styles.h4}>Topics Covered</h4>
          <div className="container">
            <ul className="list-disc">
              {blogData["ml-basics"].covered.map((topic) => (
                <li className={globalStyles.font_styles.p}>{topic}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-12 border-b-2 grid sm:grid-cols-1 gap-6">
          <Image src={frame1} />
          <Image src={frame2} />
          <Image src={frame3} />
        </div>
        <div className="pt-12">
          <Tweet tweetId="1545518922509713411" />
        </div>
      </div>
    </div>
  );
}
