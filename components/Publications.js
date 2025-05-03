// components/Publications.js
import Image from "next/image";
import { publicationLinkStyle, publicationAuthorStyle, publicationLinkMyselfStyle } from "@/constants/styles";

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
                    link: "https://lllyasviel.github.io/Style2PaintsResearch/lvmin",
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
            // code: "#",
            // dataset: "#",
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

    return (
        <div id='publications'>
            <h2 className='text-xl font-medium mb-4'>Publications</h2>

            <div className='space-y-6 py-0'>
                {publications.map((pub) => (
                    <div key={pub.id} className='grid grid-cols-1 md:grid-cols-4 gap-8'>
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
                        </div >

                        {/* Publication details - 3 columns */}
                        < div className='md:col-span-3' >
                            <p className='text-sm text-gray-600'>{pub.venue}</p>
                            <h3 className='text-lg font-medium mb-2'>{pub.title}</h3>

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
                                        {index < pub.authors.length - 1 ? " / " : ""}
                                        {/* {index == 4 && (<br />)} */}
                                    </span>
                                ))}
                            </p>

                            <div className='mt-2'>
                                <p className='italic text-sm'>{pub.description}</p>
                            </div>

                            <div className='mt-2 text-sm'>
                                <a
                                    href={pub.projectPage}
                                    className={publicationLinkStyle}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Project Page
                                </a>{" "}
                                /{" "}
                                <a href={pub.arxiv} className={publicationLinkStyle} target='_blank'
                                    rel='noopener noreferrer'>
                                    arXiv
                                </a>{" "}
                                /{" "}
                                {pub.code && (
                                    <a href={pub.code} className={publicationLinkStyle} target='_blank'
                                        rel='noopener noreferrer'>
                                        Code
                                    </a>
                                )}
                                {!pub.code && (
                                    <a href={pub.code} className='text-gray-300'>
                                        Code (Coming Soon)
                                    </a>
                                )}
                                {pub.dataset && (
                                    <>
                                        {" "}
                                        /{" "}
                                        <a
                                            href={pub.dataset}
                                            className={publicationLinkStyle} target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            Dataset
                                        </a>
                                    </>
                                )}
                            </div>
                        </div >
                    </div >
                ))
                }
            </div >
        </div >
    );
}
