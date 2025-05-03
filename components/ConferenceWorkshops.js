// components/ConferenceWorkshops.js
import { sideColSubtext } from "@/constants/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function ConferenceWorkshops() {
    const conferences = [
        {
            id: 1,
            text: "AI for Creative Visual Content Generation Editing and Understanding",
            venue: "CVPR 25'",
            type: "Workshop",
        },
        {
            id: 2,
            text: "Introduction to Generative Machine Learning",
            venue: "SIGGRAPH 23', SIGGRAPH ASIA 23', SIGGRAPH 24'",
            notes_link: "https://dl.acm.org/doi/10.1145/3680532.3689591",
            type: "Course",
        },
        {
            id: 3,
            text: "Generative Models for Visual Content Creation",
            venue: "SIGGRAPH 24'",
            notes_link: "https://dl.acm.org/doi/abs/10.1145/3664475.3664553",
            type: "Course",
        },
        {
            id: 4,
            text: "The Future of Generative Visual Art",
            venue: "CVPR 24'",
            type: "Workshop",
        },
    ];

    return (
        <div>
            <h2 className='text-lg font-medium italic mb-2'>
                Conference Involvements
            </h2>
            <ul className='space-y-2 text-xs'>
                {conferences.map((item) => (
                    <li key={item.id} className='flex items-start flex flex-col'>
                        {/* <span className="text-gray-600 mr-2">•</span> */}
                        <span>
                            <b>
                                {item.type}
                                {item.notes_link && (
                                    <span className='text-orange-300 hover:underline'>{" "}
                                        [<FontAwesomeIcon icon={faLink} className='fa-fw' />{" "}
                                        <a
                                            href={item.notes_link}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        > Notes
                                        </a>]{" "}
                                    </span>
                                )}
                                :
                            </b>{" "}
                            {item.text} <span className={sideColSubtext}>({item.venue})</span>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
