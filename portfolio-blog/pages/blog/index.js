import { useEffect, useState } from "react";
import globalStyles from "../../settings/global-styles";
import blogData from "../../settings/blogs.json";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  const [blogs, setBlogs] = useState([]); // sorted by time (latest in front)
  const [defaultBlogs, setDefaultBlogs] = useState([]);
  const [grpBlogs, setGrpBlogs] = useState({});
  const [displayCatalog, setDisplayCatalog] = useState(false);
  const [groupByTopic, setGroupByTopic] = useState(false);
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
      };
      blogsToDisplay.push(curBlog);
      categories[blogData[b].category] = 0;
    });
    setDefaultBlogs(blogsToDisplay);
    // our initial display is default blogs
    setBlogs(blogsToDisplay);

    // we create the blogs grouped by categories too
    let groupedBlogs = {};
    Object.keys(categories).forEach((category) => {
      let filtered = blogsToDisplay.filter((b) => {
        return b.category === category;
      });
      groupedBlogs[category] = filtered;
    });
    setGrpBlogs(groupedBlogs);
  }, []);

  return (
    <div className="container">
      <h4 className={globalStyles.font_styles.h4}>
        I make educational materials on computer science topics on the weekends.{" "}
      </h4>
      <div className="flex space-x-4">
        <button onClick={() => setDisplayCatalog(!displayCatalog)}>
          Browse Catalog
        </button>
        <button onClick={() => setGroupByTopic(!groupByTopic)}>
          Group By Topic{" "}
        </button>
      </div>

      {displayCatalog && (
        <div>
          <h2> Catalog </h2>
          <div
            class="grid grid-cols-3 gap-4 place-content-center"
            id="blog-posts-catalog"
          >
            {blogs.map((b, index) => (
              <div>
                <Link href={"/blog/" + b.page_path}>
                  <h4>{b.title}</h4>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
      {!displayCatalog && (
        <div class="grid grid-cols-3 gap-4" id="blog-posts-thumbnails">
          {blogs.map((b) => (
            <div>
              <Image src={b.img_path} width={200} height={200} />
              <Link href={"/blog/" + b.page_path}>
                <h3>{b.title}</h3>
              </Link>
              <p> {b.description} </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
