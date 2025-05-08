// components/RDExperiences.js
import { linkStyle, mainSmallDescriptionStyle } from '@/constants/styles';
import Image from 'next/image';
import { motion } from 'framer-motion';
import HoverInfo from './HoverInfo';
import Link from 'next/link';
export default function RDExperiences() {
    const experiences = [
        {
            id: 1,
            company: "Adobe",
            role: "Research Engineer Intern",
            time: "May - December 2023",
            imagePath: "/assets/logos/AdobeResearch.jpeg",
            link: "https://research.adobe.com/",
            details: (
                <span> I collaborated with amazing research scientists and engineers to bring cutting-edge technology into real-world design tools through tech transfer. </span>
            )
        },
        {
            id: 2,
            company: "Cesium",
            time: "May - August 2022",
            role: "Software Developer Intern",
            imagePath: "/assets/logos/CesiumRobot.png",
            link: "https://cesium.com/",
            details: (
                <span> I worked on the <i>Cesium for Unreal Plugin</i>, which builds on open standards and APIs, allowing Unreal Engine users to create virtual worlds with massive 3D data.</span>
            )
        },
        {
            id: 3,
            company: "Jam3",
            role: "Developer Intern",
            time: "May - August 2021",
            imagePath: "/assets/logos/Jam3-16x9.png",
            link: "https://www.jam3.com/",
            details: (
                <span>I had a wonderful time collaborating in a small team of designers and developer, contributing to developing a 3D interactive site where users take on the form of agents embodied by abstract geometric 3D shapes to enjoy music &#9835; together. </span>
            )
        },
        {
            id: 4,
            company: "CMU School of Design",
            role: "Web Designer & Developer",
            time: "January - August 2021",
            imagePath: "/assets/SoD/thumbnail.png",
            link: "https://design.cmu.edu/",
            details: (
                <span>I was incredibly fortunate to contribute to <i>CMU School of Design</i>'s rebrand and website redesign, working alongside some wonderful friends from our design studio. You can see our design system in person at CMU's Margaret Morrison Carnegie Hall or explore its digital form on the official website.</span>
            )
        }
    ];
    const fadeInProps = (delay = 0) => ({
        initial: { opacity: 0, scaleY: 0.8 },
        whileInView: { opacity: 1, scaleY: 1 },
        transition: { duration: 0.4, delay, ease: 'easeOut' },
        viewport: { once: true, amount: 0.3 },
    });


    return (
        <div id="rd-experiences">
            <div className="grid md:grid-cols-2 mb-4 gap-4">
                <h2 className="text-xl font-medium mb-2 italic">Research & Development Experiences</h2>
                <p className={mainSmallDescriptionStyle}>With a background in traditional graphic design, I'm passionate about bridging research and product by crafting user-facing applications powered by cutting-edge technologies.</p>
            </div>


            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {experiences.map((exp) => {
                    const content = (
                        <div key={exp.id} className="flex flex-col">
                            <span className="text-xs text-gray-600 mb-2">[{exp.time}]</span>
                            <div className="relative w-full mb-1 aspect-video">
                                <Image
                                    src={exp.imagePath}
                                    alt={`${exp.company} experience`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <a href={exp.link} target='_blank' rel="noopener noreferrer" >
                                <p className="text-sm">{exp.company} </p>
                            </a>
                            <p className="text-xs italic text-gray-600">{exp.role}</p>
                        </div>
                    );

                    return (
                        <motion.div key={exp.id} {...fadeInProps(exp.id * 0.1)}>
                            {exp.details ? (
                                <HoverInfo tooltip={exp.details}>
                                    {content}
                                </HoverInfo>
                            ) : content}
                        </motion.div>
                    );
                })}

            </div>
        </div >
    );
}