// components/Teaching.js
import { sideColSubtext } from "@/constants/styles";
export default function Teaching() {
    const teachingExperience = [
        {
            university: "Stanford University",
            courses: [
                {
                    id: 1,
                    code: "CS 248A: Computer Graphics: Rendering, Geometry, and Image Manipulation",
                    term: "Winter 2024"
                },
                {
                    id: 2,
                    code: "CS 148: Introduction to Computer Graphics and Imaging",
                    term: "Fall 2023"
                }
            ]
        },
        {
            university: "Carnegie Mellon University",
            courses: [
                {
                    id: 3,
                    code: "15-462/662: Computer Graphics",
                    term: "Spring 2022, Fall 2022"
                },
                {
                    id: 4,
                    code: "15-150: Principles of Functional Programming",
                    term: "Spring 2020, Summer 2020"
                }
            ]
        }
    ];

    return (
        <div>
            <h2 className="text-lg font-medium italic mb-1">University Teaching</h2>

            <div className="space-y-2 text-xs">
                {teachingExperience.map((univ, idx) => (
                    <div key={idx}>
                        <p className="font-bold">{univ.university}</p>
                        <ul className="ml-4 mt-1 space-y-1">
                            {univ.courses.map((course) => (
                                <li key={course.id}>
                                    {course.code} <span className={sideColSubtext}>({course.term})</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}