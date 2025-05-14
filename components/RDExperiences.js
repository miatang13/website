// components/RDExperiences.js
import { linkStyle, mainSmallDescriptionStyle, sectionTitleStyle } from '@/constants/styles';
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
                <span>I had a wonderful time collaborating in a small team of designers and developer, contributing to developing a 3D interactive site where users take on the form of agents embodied by abstract geometric 3D shapes to enjoy music together. </span>
            )
        },
        {
            id: 4,
            company: "Computational Creativity Lab (CCL)",
            role: "Research Assistant",
            time: "Sep 2021 - May 2022",
            imagePath: "/assets/logos/CCL.png",
            link: "https://computational-creativity.org/",
            details: (
                <span>I was fortunate to be advised by Prof. Kyuha Shim to design and develop data visualization web experiences in collaboration with the United States Census Bureau, presenting insights on food insecurity across the US. </span>
            )
        },
        {
            id: 5,
            company: "Lunar Gala",
            role: "Co-Head of Web",
            time: "Sep 2021 - Mar 2022 ",
            imagePath: "/assets/logos/LunarGala.png",
            link: "https://www.lunargala.org/",
            details: (
                <span>I had the honor to be Co-Head of Web team for the 2022 <i>Lunar Gala</i>, which is an annual student-run fashion show in Pittsburgh. Working with talented designers and developers is always a wonderful experience. </span>
            )
        },
        {
            id: 6,
            company: "CMU School of Design",
            role: "Web Designer & Developer",
            time: "January - August 2021",
            imagePath: "/assets/SoD/thumbnail.png",
            link: "https://design.cmu.edu/",
            details: (
                <span>I was incredibly fortunate to contribute to <i>CMU School of Design</i>'s rebrand and website redesign, working alongside some wonderful friends from our design studio. You can see our design system in person at CMU's Margaret Morrison Carnegie Hall or explore its digital form on the official website.</span>
            )
        },
        {
            id: 7,
            company: "IRIS",
            role: "Frontend Engineer",
            time: "Jan 2020 - May 2021",
            imagePath: "/assets/logos/IrisRover.png",
            link: "https://irislunarrover.space/",
            details: (
                <span>I was fortunate to be part of the <i>CMU Iris Lunar Rover</i> team, contributing to the control interfaces for the 2kg student-built rover which flew in space in 2024. </span>
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
            <div className="grid md:grid-cols-2 gap-4 mb-2">
                <h2 className={sectionTitleStyle}>Research & Development Experiences</h2>
                <p className={mainSmallDescriptionStyle}>With a background in traditional graphic design, I'm passionate about bridging research and product by crafting user-facing applications powered by cutting-edge technologies.</p>
            </div>


            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {experiences.map((exp) => {
                    const content = (
                        <a href={exp.link} target='_blank' rel="noopener noreferrer" >
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
                                <p className="text-sm font-bold">{exp.company} </p>
                                <p className="text-xs italic text-gray-600">{exp.role}</p>
                            </div>
                        </a>
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