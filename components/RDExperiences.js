// components/RDExperiences.js
import { mainSmallDescriptionStyle } from '@/constants/styles';
import Image from 'next/image';

export default function RDExperiences() {
    const experiences = [
        {
            id: 1,
            company: "Adobe",
            role: "Research Engineer Intern",
            time: "May - December 2023",
            imagePath: "/assets/logos/AdobeResearch.jpeg"
        },
        {
            id: 2,
            company: "Cesium",
            time: "May - August 2022",
            role: "Software Developer Intern",
            imagePath: "/assets/logos/CesiumRobot.png"
        },
        {
            id: 3,
            company: "Jam3",
            role: "Developer Intern",
            time: "May - August 2021",
            imagePath: "/assets/logos/Jam3-16x9.png"
        },
        {
            id: 4,
            company: "CMU School of Design",
            role: "Web Designer & Developer",
            time: "January - August 2021",
            imagePath: "/assets/SoD/thumbnail.png"
        }
    ];

    return (
        <div id="rd-experiences">
            <div className="grid md:grid-cols-2 mb-4 gap-4">
                <h2 className="text-xl font-medium mb-2 italic">Research & Development Experiences</h2>
                <p className={mainSmallDescriptionStyle}>With a background in traditional graphic design, I'm passionate about bridging research and product by crafting user-facing applications powered by cutting-edge technologies.</p>
            </div>


            <div className="grid md:grid-cols-4 gap-4">
                {experiences.map((exp) => (
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
                        <p className="text-sm">{exp.company} </p>
                        <p className="text-xs italic text-gray-600">{exp.role}</p>

                    </div>
                ))}
            </div>
        </div>
    );
}