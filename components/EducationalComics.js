// components/EducationalComics.js
import Image from 'next/image';
import { useEffect, useState } from "react";
import blogData from "@/constants/blogs.json";
import Link from "next/link";
import { blogTitleStyle, mainSmallDescriptionStyle } from '@/constants/styles';
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


    return (
        <div id="educational-comics">
            <div className="grid md:grid-cols-2 mb-4 gap-4">
                <h2 className="text-xl font-medium italic">Educational Comics</h2>

            </div>


            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <p className={mainSmallDescriptionStyle}> Turning complex ideas into playful, approachable visuals is a challenge that continues to inspire me. As a comic artist, that exploration takes shape through educational illustrations on technical topics. In my free time, I also volunteer as a math tutor for preschoolers at local schools in Palo Alto.
                    </p>
                    <div className="relative h-64 w-full mb-2">
                        <Image src="/blog/thumbnail.png" alt="Educational Comics Collection" fill className="object-cover" />
                    </div>
                    <span className="text-xs text-slate-600">*Click on individual topics for the specific set of comics. </span>
                </div>


                <div className="grid md:grid-cols-2">
                    {Array.from({ length: 2 }, (_, col) => (
                        <div key={col}>
                            {Object.entries(grpBlogs)
                                .slice(col * Math.ceil(Object.keys(grpBlogs).length / 2),
                                    (col + 1) * Math.ceil(Object.keys(grpBlogs).length / 2))
                                .map(([category, blogs]) => (
                                    <ul key={category}>
                                        {blogs.map(blog => (
                                            (<motion.div
                                                key={blog.id}
                                                {...fadeInProps(blog.id * 0.1)}>
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
                                                    )}
                                                    >
                                                        <Link href={blog.page_path} className={blogTitleStyle} target='_blank' rel="noopener noreferrer">
                                                            ↳ {blog.title}
                                                        </Link>
                                                    </HoverInfo>
                                                </li>
                                            </motion.div>)))}
                                    </ul>
                                ))}
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}