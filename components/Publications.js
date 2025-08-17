// components/Publications.js
'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import Image from "next/image";
import { publicationLinkStyle, publicationAuthorStyle, publicationLinkMyselfStyle } from "@/constants/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLink,
    faFileAlt,
    faCode,
    faDatabase,
    faPager,
} from "@fortawesome/free-solid-svg-icons";


export default function Publications() {
    const publications = [
        {
            id: 1,
            title:
                "Instance Segmentation of Scene Sketches Using Natural Image Priors",
            venue: "ACM SIGGRAPH 2025",
            authors: [
                { name: "Mia Tang", link: "/" },
                { name: "Yael Vinker", link: "https://yael-vinker.github.io/website/" },
                { name: "Chuan Yan", link: "https://nauhcnay.github.io/" },
                {
                    name: "Lvmin Zhang",
                    link: "https://lllyasviel.github.io/lvmin_zhang",
                },
                {
                    name: "Maneesh Agrawala",
                    link: "https://graphics.stanford.edu/~maneesh/",
                },
            ],
            description:
                "Transform your complex raster scene sketch into individual, complete object layers.",
            imagePath: "/publication/inklayer.png",
            projectPage: "https://inklayer.github.io/",
            arxiv: "https://arxiv.org/abs/2502.09608",
            code: "https://github.com/miatang13/InkLayer",
            dataset: "https://www.inkscenes-dataset.com/",
        },
        {
            id: 2,
            title: "CRAFT: Designing Creative and Functional 3D Objects",
            venue: "WACV 2025",
            authors: [
                { name: "Michelle Guo*", link: "https://shellguo.com/" },
                { name: "Mia Tang*", link: "/" },
                { name: "Hannah Cha", link: "https://www.hannahcha.com/" },
                { name: "Ruohan Zhang", link: "https://ai.stanford.edu/~zharu/" },
                {
                    name: "C. Karen Liu",
                    link: "https://profiles.stanford.edu/c-karen-liu",
                },
                { name: "Jiajun Wu", link: "https://jiajunwu.com/" },
            ],
            description:
                "Generate fabricate-able, customizable, and creative everyday objects.",
            imagePath: "/publication/shapecraft-teaser-sm.png",
            projectPage: "https://miatang13.github.io/Craft/",
            arxiv: "https://arxiv.org/abs/2412.03889",
            // code: "#"
        },
        {
            id: 3,
            title: "Block and Detail: Scaffolding Sketch-to-Image Generation",
            venue: "UIST 2024",
            authors: [
                { name: "Vishnu Sarukkai", link: "https://vsanimator.github.io/" },
                { name: "Lu Yuan*", link: "https://sylviayuan-sy.github.io/" },
                { name: "Mia Tang*", link: "/" },
                { name: "Maneesh Agrawala", link: "https://graphics.stanford.edu/~maneesh/" },
                { name: "Kayvon Fatahalian", link: "https://graphics.stanford.edu/~kayvonf/" },
            ],
            description:
                "A novel sketch-to-image tool that aligns with the iterative refinement process of artists. ",
            imagePath: "/publication/blockndetail-teaser-sm-169.png",
            projectPage: "https://miatang13.github.io/BlockAndDetail/",
            arxiv: "https://arxiv.org/abs/2402.18116",
            code: "https://github.com/BlockDetail/Block-and-Detail"
        },
        {
            id: 4,
            title: "Content-Based Search for Deep Generative Models",
            venue: "SIGGRAPH Asia 2023",
            authors: [
                { name: "Daohan Lu*", link: "https://daohanlu.github.io/", },
                { name: "Sheng-Yu Wang*", link: "https://peterwang512.github.io/", },
                { name: "Nupur Kumari*", link: "https://nupurkmr9.github.io/", },
                { name: "Rohan Agarwal*", link: "https://rohana96.github.io/", },
                { name: "Mia Tang", link: "/", },
                { name: "David Bau", link: "https://people.csail.mit.edu/davidbau/home/", },
                { name: "Jun-Yan Zhu", link: "https://www.cs.cmu.edu/~junyanz/", }
            ],
            description:
                "A search algorithm for customized and pre-trained deep generative models.",
            imagePath: "/publication/modelverse-teaser-sm.png",
            projectPage: "https://modelverse.cs.cmu.edu/paper",
            arxiv: "https://arxiv.org/abs/2210.03116",
            code: "https://github.com/generative-intelligence-lab/modelverse",
            demo: "https://modelverse.cs.cmu.edu/"
        },
    ];
    const linkStyle = "text-xs text-gray-500 hover:text-black p-1 transition duration-200 flex items-center border-blue-50 hover:border-blue-100 rounded-lg shadow-xs hover:shadow-sm ";


    return publications.map((pub, index) => {
        const ref = useRef(null);
        const inView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' });

        return (
            <motion.div
                key={pub.id}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='grid grid-cols-1 md:grid-cols-4 gap-8 py-4'
            >
                {/* Publication image - 1 column */}
                <div className='col-span-1'>
                    <div className="relative w-full mb-1 aspect-video">
                        <Image
                            src={pub.imagePath}
                            alt={pub.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Publication details - 3 columns */}
                <div className='md:col-span-3'>
                    <p className='text-sm font-serif text-gray-600'>{pub.venue}</p>
                    <h3 className='sm:text-lg font-serif font-semibold mt-1 mb-2 leading-snug'>{pub.title}</h3>



                    <p className='text-xs mb-2'>
                        {pub.authors.map((author, index) => (
                            <span key={index}>
                                <a
                                    href={author.link}
                                    className={author.name.includes("Mia Tang") ? publicationLinkMyselfStyle : publicationAuthorStyle}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    {author.name}
                                </a>
                                <span className='text-gray-500'>
                                    {index < pub.authors.length - 1 ? " / " : ""}
                                </span>
                            </span>
                        ))}
                    </p>

                    <p className='text-xs sm:text-sm text-gray-700 italic'>{pub.description}</p>

                    {/* Project Links */}
                    <p className="mt-2 flex flex-wrap gap-2">
                        {pub.projectPage && (
                            <a
                                href={pub.projectPage}
                                className={linkStyle}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faPager} className="mr-1 text-gray-300" />
                                Project Page
                            </a>
                        )}
                        {pub.arxiv && (
                            <a
                                href={pub.arxiv}
                                className={linkStyle}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faFileAlt} className="mr-1 text-gray-300" />
                                arXiv
                            </a>
                        )}
                        {pub.code && (
                            <a
                                href={pub.code}
                                className={linkStyle}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faCode} className="mr-1 text-gray-300" />
                                Code
                            </a>
                        )}
                        {pub.dataset && (
                            <a
                                href={pub.dataset}
                                className={linkStyle}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faDatabase} className="mr-1 text-gray-300" />
                                Dataset
                            </a>
                        )}
                    </p>

                </div>
            </motion.div>
        );
    })
}
