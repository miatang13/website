import globalStyles from "../../settings/global-styles";
import frame1 from "../../public/blog/halfedge-mesh/Halfedge1.png";
import frame2 from "../../public/blog/halfedge-mesh/Halfedge2.png";
import frame3 from "../../public/blog/halfedge-mesh/Halfedge3.png";
import frame4 from "../../public/blog/halfedge-mesh/Halfedge4.png";
import Image from "next/image";
import blogData from "../../settings/blogs.json";
import { Tweet } from "react-twitter-widgets";

export default function HalfedgeMesh() {
  return (
    <div
      className={globalStyles.div_styles.page_outer_wrapper}
      id="page-container"
    >
      <div className={globalStyles.div_styles.page_inner_wrapper}>
        <div className="pb-12 border-b-2">
          <h1 className={globalStyles.font_styles.h1}>Halfedge Mesh</h1>
          <p className={globalStyles.font_styles.p}>
            To operate on large and complex meshes, we need data structures that
            are efficient and compact. Halfedge data structure is great for
            traversing the mesh by bringing in a new entity named halfedge. Here
            we look at some basics about the data structure.
          </p>
        </div>
        <div className="py-12 border-b-2">
          <h4 className={globalStyles.font_styles.h4}>Topics Covered</h4>
          <div className="container">
            <ul className="list-disc">
              {blogData["halfedge-mesh"].covered.map((topic) => (
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
          <Tweet tweetId="1495438738398191617" />
        </div>
      </div>
    </div>
  );
}
