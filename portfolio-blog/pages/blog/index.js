import { useEffect, useState } from "react";
import globalStyles from "../../settings/global-styles";
import blogData from "../../settings/blogs.json";
import Image from "next/image";
import Link from "next/link";
import HeroImg from "../../public/assets/Illustration/thumbnail.png";

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
        covered: blogData[b].covered,
        img_path: base_url + b + "/thumbnail.png",
        page_path: b,
        category: blogData[b].category,
        date: blogData[b].date,
        complete: blogData[b].complete,
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
    <div
      className={globalStyles.div_styles.page_outer_wrapper}
      id="page-container"
    >
      <div className={globalStyles.div_styles.page_inner_wrapper_narrow}>
        <Image src={HeroImg} />

        <div id="blog-posts-catalog" className="pb-12">
          <h1 className={globalStyles.font_styles.h1}>Catalog</h1>

          <div className="grid grid-cols-2 gap-3 select-none">
            {Object.keys(grpBlogs).map((key, index) => (
              <div>
                <h2 className={globalStyles.font_styles.h2 + " pb-3"}>{key}</h2>
                <div className="container">
                  <ul className="list-disc">
                    {grpBlogs[key].map((b, i) => (
                      <li>
                        <Link href={"/blog/" + b.page_path}>
                          <span
                            className={
                              globalStyles.font_styles.p +
                              " underline decoration-amber-300 hover:bg-amber-200"
                            }
                          >
                            {b.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="blog-posts-upcoming" className="pb-12 border-y-2">
          <h1 className={globalStyles.font_styles.h1}>
            Currently in the Works
          </h1>
          <p className={globalStyles.font_styles.p + " italic pb-3"}>
            Updated [July 18th 2022]
          </p>
          <div className="container">
            <ul className="list-disc">
              <li className={globalStyles.font_styles.p}>Shadow Maps</li>
              <li className={globalStyles.font_styles.p}>
                Shadows in Ray Tracing
              </li>
              <li className={globalStyles.font_styles.p}>
                <p> Bounding Volume Hierarchy </p>
              </li>
            </ul>
          </div>
        </div>

        <div id="blog-posts-all" className="pb-12">
          <h1 className={globalStyles.font_styles.h1}>Browse All</h1>
          {Object.keys(grpBlogs).map((key, index) => (
            <div className="pr-6 pb-12 border-b-2">
              <h2 className={globalStyles.font_styles.h2 + " pb-6"}>
                Topics Related To {key}
              </h2>
              <div className="grid sm:grid-cols-3 gap-12 select-none">
                {grpBlogs[key].map((b) => (
                  <Link href={"/blog/" + b.page_path}>
                    <div
                      className={
                        "p-3 bg-gradient-to-r from-yellow-50 hover:from-yellow-100 hover:to-orange-100 outline outline-offset-2 " +
                        (b.complete ? "outline-orange-50" : "outline-blue-500")
                      }
                    >
                      <p
                        className={
                          globalStyles.font_styles.p + " text-slate-400"
                        }
                      >
                        {b.date}
                      </p>
                      <div>
                        <Image src={b.img_path} width={400} height={400} />
                      </div>
                      <Link href={"/blog/" + b.page_path}>
                        <h3
                          className={
                            globalStyles.font_styles.h3 +
                            " bg-gradient-to-r from-yellow-100"
                          }
                        >
                          {b.title}
                        </h3>
                      </Link>

                      <p
                        className={
                          globalStyles.font_styles.p + " text-slate-600"
                        }
                      >
                        {b.covered.map((topic, index) => (
                          <span className=" inline-flex">
                            {topic}
                            {index !== b.covered.length - 1 && ", "}{" "}
                          </span>
                        ))}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div id="blog-posts-paragraph" className="pb-6">
          <p className={globalStyles.font_styles.p}>
            If there are any topics you wish to see me cover, feel free to send
            me an email.
          </p>
        </div>
      </div>
    </div>
  );
}
