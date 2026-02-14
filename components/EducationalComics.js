// components/EducationalComics.js
import Image from 'next/image';
import { useEffect, useState } from "react";
import blogData from "@/constants/blogs.json";
import Link from "next/link";
import { blogTitleStyle, mainSmallDescriptionStyle, sectionTitleStyle } from '@/constants/styles';
import { motion } from 'framer-motion';
import HoverInfo from './HoverInfo';
export default function EducationalComics() {
    const [grpBlogs, setGrpBlogs] = useState({});
    const base_url = "/blog/";

    // populate all blogs
    useEffect(() => {
        let blogsToDisplay = [];
        let categories = {};
        Object.keys(blogData).forEach((key, index) => {
            let blog = blogData[key];
            let curBlog = JSON.parse(JSON.stringify(blog));
            curBlog.img_path = base_url + key + "/thumbnail.png";
            curBlog.page_path = blog.external ? blog.link : "/blog/" + key;
            if (!blog.complete) {
                curBlog.page_path = "/blog";
            }
            curBlog.format = blog.format ? blog.format : "Comics";
            curBlog.id = index;
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
    }, []);

    const fadeInProps = (delay = 0) => ({
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.15, delay },
        viewport: { once: true, amount: 0.2 },
    });
    const blogTopicCutoffNum = Object.keys(grpBlogs).length / 4;

    // Flatten all blog entries into one array
    const allBlogs = Object.values(grpBlogs).flat();
    const blogsPerCol = Math.ceil(allBlogs.length / 4);
    const columns = Array.from({ length: 4 }, (_, i) =>
        allBlogs.slice(i * blogsPerCol, (i + 1) * blogsPerCol)
    );


    return (
        <div id="educational-comics">
            <div className="grid md:grid-cols-2 gap-4 mb-2">
                <h2 className={sectionTitleStyle}>Educational Comics</h2>
                <p className={mainSmallDescriptionStyle}>
                    Turning complex ideas into ✰ <i>playful, approachable visuals</i>✰ is a challenge that continues to inspire me. As a comic artist, that exploration takes shape through educational illustrations on technical topics. In my free time, I also volunteer as a math tutor for preschoolers at local schools in Palo Alto.
                </p>
            </div>

            <div>
                {/* Top row: banner */}
                <div className="relative mb-2">
                    <div className="relative h-48 w-full">
                        <Image src="/blog/thumbnail.png" alt="Educational Comics Collection" fill className="object-cover" />
                    </div>
                    <span className="text-xs text-slate-400 italic">*Click on individual topics for the specific set of comics. </span>
                </div>

                {/* Bottom row: topics in 4 columns */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {columns.map((colBlogs, colIdx) => (
                        <ul key={colIdx}>
                            {colBlogs.map(blog => (
                                <motion.div key={blog.id} {...fadeInProps(blog.id * 0.1)}>
                                    <li key={blog.title}>
                                        <HoverInfo tooltip={(
                                            <>
                                                <span className="mr-1 font-bold">Topics:</span>
                                                {blog.covered.map((covered, index) => (
                                                    <span key={index} className="italic">
                                                        {index > 0 && ", "}
                                                        {covered}
                                                    </span>
                                                ))}
                                            </>
                                        )}>
                                            <Link href={blog.page_path} className={blogTitleStyle} target="_blank" rel="noopener noreferrer">
                                                ↳ {blog.title}
                                            </Link>
                                        </HoverInfo>
                                    </li>
                                </motion.div>
                            ))}
                        </ul>
                    ))}
                </div>

            </div>
        </div>
    );
}