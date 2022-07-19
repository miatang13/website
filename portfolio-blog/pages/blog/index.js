import { useEffect, useState } from "react";
import globalStyles from "../../settings/global-styles";
import blogData from "../../settings/blogs.json";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/global/Footer";

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
      <div className="sm:w-8/12 place-self-center">
        <h1 className={globalStyles.font_styles.h1}>
          I make educational materials on computer science topics on the
          weekends.
        </h1>

        <div id="blog-posts-catalog">
          <h1 className={globalStyles.font_styles.h1}>Catalog</h1>
          <div className="grid grid-cols-3 gap-3">
            {Object.keys(grpBlogs).map((key, index) => (
              <>
                {grpBlogs[key].map((b) => (
                  <div>
                    <Link href={"/blog/" + b.page_path}>
                      <p className={globalStyles.font_styles.p}>{b.title}</p>
                    </Link>
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>

        <div id="blog-posts-thumbnails">
          <h1 className={globalStyles.font_styles.h1}>Posts</h1>
          {Object.keys(grpBlogs).map((key, index) => (
            <div className="pb-3">
              <h2 className={globalStyles.font_styles.h2}>
                Topics Related To {key}
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {grpBlogs[key].map((b) => (
                  <div>
                    <Image src={b.img_path} width={200} height={200} />
                    <Link href={"/blog/" + b.page_path}>
                      <h3
                        className={
                          globalStyles.font_styles.h3 +
                          +" underline decoration-pink-500"
                        }
                      >
                        {b.title}
                      </h3>
                    </Link>
                    {/* <p> {b.description} </p> */}
                    <p className={globalStyles.font_styles.p + " text-xs"}>
                      {" "}
                      {b.date}{" "}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
