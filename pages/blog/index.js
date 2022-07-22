import { useEffect, useState } from "react";
import globalStyles from "../../settings/global-styles";
import blogData from "../../settings/blogs.json";
import Image from "next/image";
import Link from "next/link";
import HeroImg from "../../public/assets/Illustration/thumbnail.png";
import ExternalLink from "../../components/global/ExternalLink";
import LinkWrapper from "../../components/global/LinkWrapper";

export default function Blog() {
  const [showTopicsCatalog, setShowTopic] = useState(false);
  const [grpBlogs, setGrpBlogs] = useState({});
  const base_url = "/blog/";

  // populate all blogs
  useEffect(() => {
    let blogsToDisplay = [];
    let categories = {};
    Object.keys(blogData).forEach((key) => {
      let blog = blogData[key];
      let curBlog = JSON.parse(JSON.stringify(blog));
      curBlog.img_path = base_url + key + "/thumbnail.png";
      curBlog.page_path = blog.external ? blog.link : "/blog/" + key;
      if (!blog.complete) {
        curBlog.page_path = "/blog";
      }
      curBlog.format = blog.format ? blog.format : "Comics";
      blogsToDisplay.push(curBlog);
      categories[blog.category] = 0;
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
      <div className={globalStyles.div_styles.page_inner_wrapper}>
        <Image src={HeroImg} />

        <div id="blog-posts-catalog" className="pb-12">
          <h1 className={globalStyles.font_styles.h1}>Catalog</h1>
          <button
            className="bg-orange-100 outline outline-offset-2 outline-orange-50 p-1 hover:bg-amber-200"
            onClick={() => setShowTopic(!showTopicsCatalog)}
          >
            <p
              className={
                globalStyles.font_styles.btn +
                " text-slate-600 hover:text-slate-900"
              }
            >
              {showTopicsCatalog ? "Hide " : "Show "}Covered Topics
            </p>
          </button>

          <div
            className={
              showTopicsCatalog
                ? "grid gap-3 select-none"
                : "grid sm:grid-cols-2 gap-3 select-none"
            }
          >
            {Object.keys(grpBlogs).map((key, index) => (
              <div>
                <h2 className={globalStyles.font_styles.h2 + " pb-3"}>{key}</h2>
                <div className="container">
                  <ul className="list-disc">
                    {grpBlogs[key].map((b, i) => (
                      <li key={b.title + "-link"}>
                        <LinkWrapper external={b.external} href={b.page_path}>
                          <span
                            className={
                              globalStyles.font_styles.p +
                              (b.complete
                                ? " underline decoration-amber-300 hover:bg-amber-200"
                                : " text-slate-400")
                            }
                          >
                            {b.title} {b.complete ? " " : "(COMING SOON)"}
                          </span>

                          {showTopicsCatalog && (
                            <p
                              className={
                                globalStyles.font_styles.p + " text-slate-600"
                              }
                            >
                              {b.covered.map((topic, index) => (
                                <span className="inline-flex text-sm">
                                  <span className="bg-amber-100 hover:bg-amber-200">
                                    {topic}
                                  </span>
                                  {index !== b.covered.length - 1 && ","} &nbsp;
                                </span>
                              ))}{" "}
                            </p>
                          )}
                        </LinkWrapper>
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
              <li className={globalStyles.font_styles.p}>
                <p>Shadow Maps</p>
              </li>
              <li className={globalStyles.font_styles.p}>
                <p> Shadows in Ray Tracing</p>
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
              <h2 className={globalStyles.font_styles.h2 + " sm:pb-6 pb-3"}>
                Topics Related To {key}
              </h2>
              <div className="grid sm:grid-cols-3 sm:gap-12 gap-8 select-none">
                {grpBlogs[key].map((b) => (
                  <LinkWrapper href={b.page_path} external={b.external}>
                    <div
                      className={
                        "p-3 bg-gradient-to-r from-yellow-50 hover:from-yellow-100 hover:to-orange-100 outline outline-offset-2 " +
                        (b.complete
                          ? "outline-orange-50"
                          : "outline-slate-50 from-slate-50 hover:from-slate-50 hover:to-slate-50 hover:cursor-not-allowed")
                      }
                    >
                      <p
                        className={
                          globalStyles.font_styles.p +
                          " text-slate-400  text-sm"
                        }
                      >
                        {b.date} | {b.format}
                      </p>
                      <div>
                        <Image src={b.img_path} width={400} height={400} />
                      </div>
                      <h3
                        className={
                          globalStyles.font_styles.h3 +
                          (b.complete
                            ? " bg-gradient-to-r from-yellow-100"
                            : " ")
                        }
                      >
                        {b.title}
                      </h3>

                      <p
                        className={
                          globalStyles.font_styles.p + " text-slate-600"
                        }
                      >
                        {b.covered.map((topic, index) => (
                          <span className="inline-flex text-sm">
                            {topic}
                            {index !== b.covered.length - 1 && ", "}{" "}
                          </span>
                        ))}
                      </p>
                    </div>
                  </LinkWrapper>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div id="blog-posts-paragraph" className="pb-6">
          <p className={globalStyles.font_styles.p}>
            If there are any topics you wish to see me cover, feel free to send
            me an email. <br />
            <br /> 📮: miatang13[at]gmail[dot]com
          </p>
        </div>
      </div>
    </div>
  );
}
