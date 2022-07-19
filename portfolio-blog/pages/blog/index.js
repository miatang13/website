import { useEffect, useState } from "react";
import globalStyles from "../../settings/global-styles";
import blogData from "../../settings/blogs.json";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/global/Footer";
import Link45Deg from "../../components/svgs/Link45Deg";
import DoubleRight from "../../components/svgs/DoubleRight";

export default function Blog() {
  const [grpBlogs, setGrpBlogs] = useState({});
  const base_url = "/../public/blog/";

  // populate all blogs
  useEffect(() => {
    let blogsToDisplay = [];
    let categories = {};
    Object.keys(blogData).forEach((b) => {
      let curBlog = {
        title: blogData[b].title,
        description: blogData[b].description,
        img_path: base_url + b + "/thumbnail.png",
        page_path: b,
        category: blogData[b].category,
        date: blogData[b].date,
      };
      blogsToDisplay.push(curBlog);
      categories[blogData[b].category] = 0;
    });

    // we create the blogs grouped by categories too
    let groupedBlogs = {};
    Object.keys(categories).forEach((category) => {
      let filtered = blogsToDisplay.filter((b) => {
        return b.category === category;
      });
      groupedBlogs[category] = filtered;
    });
    setGrpBlogs(groupedBlogs);

    console.log(groupedBlogs);
  }, []);

  return (
    <div className="container w-screen grid" id="page-container">
      <div className="sm:w-9/12 place-self-center">
        <h1 className={globalStyles.font_styles.h1}>
          I make educational materials on computer science topics on the
          weekends.
        </h1>

        <div id="blog-posts-catalog">
          <h2 className={globalStyles.font_styles.h2}>Catalog</h2>
          <h3 className={globalStyles.font_styles.h3}>Published</h3>

          <div className="grid grid-cols-2 gap-3">
            {Object.keys(grpBlogs).map((key, index) => (
              <>
                {grpBlogs[key].map((b) => (
                  <div>
                    <Link href={"/blog/" + b.page_path}>
                      <div className="flex underline decoration-pink-500">
                        {/* <Link45Deg /> */}
                        <span
                          className={
                            globalStyles.font_styles.p + " text-xs font-black"
                          }
                        >
                          {b.title}
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>

        <div id="blog-posts-all">
          <h2 className={globalStyles.font_styles.h2}>All Posts</h2>
          {Object.keys(grpBlogs).map((key, index) => (
            <div className="pb-3">
              <h3 className={globalStyles.font_styles.h3}>
                Topics Related To {key}
              </h3>
              <div className="grid grid-cols-4 gap-4">
                {grpBlogs[key].map((b) => (
                  <div>
                    <Image src={b.img_path} width={200} height={200} />
                    <Link href={"/blog/" + b.page_path}>
                      <h4
                        className={
                          globalStyles.font_styles.h4 +
                          +" underline decoration-pink-500"
                        }
                      >
                        {b.title}
                      </h4>
                    </Link>
                    <p className={globalStyles.font_styles.p + " text-sm"}>
                      {b.date}{" "}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div id="blog-posts-upcoming">
          <h3 className={globalStyles.font_styles.h3 + "pb-0"}>
            Currently in the works ...
          </h3>
          <p className={globalStyles.font_styles.p + " text-xs italic pb-3"}>
            Updated [July 18th 2022]
          </p>
          <div className="container">
            <ul className="list-disc">
              <li className={globalStyles.font_styles.p}> Shadow Maps</li>
              <li className={globalStyles.font_styles.p}>
                Shadows in Ray Tracing
              </li>
              <li className={globalStyles.font_styles.p}>
                <p> Bounding Volume Hierarchy </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
