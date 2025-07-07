// components/Teaching.js
import { sectionTitleStyle, sideColSubtext } from "@/constants/styles";
import HoverInfo from "./HoverInfo";
import Image from "next/image";
export default function Teaching() {
    const teachingExperience = [
        {
            university: "Stanford University",
            courses: [
                {
                    id: 1,
                    code: "CS 248A: Computer Graphics: Rendering, Geometry, and Image Manipulation",
                    term: "Winter 2024",
                    image_path: "/tooltip/cs248-teaser.jpg",
                    course_link: "https://gfxcourses.stanford.edu/cs248a/winter25",
                    description: "A deep dive into the foundations of computer graphics."
                },
                {
                    id: 2,
                    code: "CS 148: Introduction to Computer Graphics and Imaging",
                    term: "Fall 2023",
                    image_path: "/tooltip/cs148-banner.png",
                    course_link: "https://web.stanford.edu/class/cs148/",
                    description: "Friendly first course in the computer graphics sequence."

                }
            ]
        },
        {
            university: "Carnegie Mellon University",
            courses: [
                {
                    id: 3,
                    code: "15-462/662: Computer Graphics",
                    term: "Spring 2022, Fall 2022",
                    image_path: "/tooltip/462_banner.jpg",
                    course_link: "https://15462.courses.cs.cmu.edu/fall2022/",
                    description: "A deep dive into the foundations of computer graphics."
                },
                {
                    id: 4,
                    code: "15-150: Principles of Functional Programming",
                    term: "Spring 2020, Summer 2020",
                    image_path: "/tooltip/15150_banner.png",
                    course_link: "https://csd.cmu.edu/course/15150/s25",
                    description: "An introduction to functional programming."
                }
            ]
        }
    ];

    return (
        <div>
            <h2 className={sectionTitleStyle}>University Teaching</h2>

            <div className="space-y-2 text-xs">
                {teachingExperience.map((univ, idx) => (
                    <div key={idx}>
                        <p className="font-bold">{univ.university}</p>
                        <ul className="ml-4 mt-1 space-y-1">
                            {univ.courses.map((course) => (
                                <HoverInfo
                                    key={course.id}
                                    tooltip={(
                                        <div className="flex flex-col">
                                            <div className="relative w-full mb-1 aspect-video">
                                                <Image src={course.image_path}
                                                    alt="Course Image"
                                                    fill
                                                    className="object-cover" />
                                            </div>
                                            <p className="mt-2"><i>{course.description}</i></p>
                                        </div>
                                    )}>
                                    <li key={course.id}>
                                        <a href={course.course_link} className="hover:text-gray-500 hover:underline"
                                            target="_blank" rel="noopener noreferrer"
                                        >  {course.code} <span className={sideColSubtext}>({course.term})</span> </a>
                                    </li>
                                </HoverInfo>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}