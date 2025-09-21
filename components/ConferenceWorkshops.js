// components/ConferenceWorkshops.js
import { sectionTitleStyle, sideColSubtext } from "@/constants/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faLink, faPager } from "@fortawesome/free-solid-svg-icons";
import HoverInfo from "./HoverInfo";

export default function ConferenceWorkshops() {
    const conferences = [
        {
            id: 0,
            text: "Drawing & Sketching: Art, Psychology, and Computer Graphics",
            venue: "SIGGRAPH '25",
            type: "Workshop",
            website_link: "https://lines-and-minds.github.io/"
        },
        {
            id: 1,
            text: "AI for Creative Visual Content Generation Editing and Understanding",
            venue: "CVPR '25",
            type: "Workshop",
            website_link: "https://cveu.github.io/event/cvpr2025.html",
        },
        {
            id: 2,
            text: "Introduction to Generative Machine Learning",
            venue: "SIGGRAPH '23 & '24 & '25, SIGGRAPH Asia '23",
            notes_link: "https://dl.acm.org/doi/10.1145/3680532.3689591",
            type: "Course",
        },
        {
            id: 3,
            text: "Generative Models for Visual Content Creation",
            venue: "SIGGRAPH '24",
            notes_link: "https://dl.acm.org/doi/abs/10.1145/3664475.3664553",
            type: "Course",
            website_link: "https://cveu.github.io/event/sig2024.html"
        },
        {
            id: 4,
            text: "The Future of Generative Visual Art",
            venue: "CVPR '24",
            type: "Workshop",
            website_link: "https://cveu.github.io/event/cvpr2024.html",
        },
    ];

    return (
        <div>

            <HoverInfo
                tooltip={
                    <span>
                        Thanks to the wonderful co-instructors and co-organizers who've made these workshops possible. Always up for new ideas, so feel free to reach out if you're cooking up something interesting.
                    </span>
                }
            > <h2 className={sectionTitleStyle}>
                    Conference Involvements
                </h2>
            </HoverInfo>

            <ul className='space-y-2 text-xs'>
                {conferences.map((item) => (
                    <li key={item.id} className='flex items-start flex flex-col'>
                        {/* <span className="text-gray-600 mr-2">•</span> */}
                        <p>
                            <b>
                                {item.type}
                                :
                            </b>{" "}
                            {item.text} <span className={sideColSubtext}>({item.venue})</span>
                            {item.notes_link && (
                                <a
                                    href={item.notes_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs ml-2 p-1 text-gray-400 rounded-md shadow-xs hover:shadow-sm hover:text-black transition duration-200 inline-flex items-center break-keep"
                                >
                                    <FontAwesomeIcon icon={faFileAlt} className="mr-1 text-gray-300" />
                                    Notes
                                </a>

                            )}
                            {item.website_link && (
                                <a
                                    href={item.website_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs  ml-2 p-1 text-gray-400 rounded-md shadow-xs hover:shadow-sm hover:text-black transition duration-200 inline-flex items-center break-keep"
                                >
                                    <FontAwesomeIcon icon={faPager} className="mr-1 text-gray-300" />
                                    Webpage
                                </a>

                            )}

                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
