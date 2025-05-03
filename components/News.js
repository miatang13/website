// components/News.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { publicationLinkStyle } from "@/constants/styles";
export default function News() {
    const newsItems = [
        {
            text: "We are teaching a hands-on lab on generative systems at SIGGRAPH 2025. Details coming soon.",
            upcoming: true,
        },
        {
            text: "Our recent work on Scene Sketch Segmentation (InkLayer) has been accepted to SIGGRAPH 2025. See you in Vancouver °◡°♡!",
            upcoming: true,
        },
        {
            text: "We are organizing a CVPR Workshop on AI for Creative Visual Content Generation and Editing. Check out the website for more details.",
            link: "https://cveu.github.io/",
            upcoming: true,
        },
        {
            text: "I received Stanford School of Engineering Fellowship as an incoming PhD student.",
        },
        {
            text: "I am giving a talk at Stanford Graphics Café on 04/24/2025. Come join us.",
        },
    ];

    return (
        <div>
            <h2 className='text-lg font-medium italic mb-1'>Recent News</h2>
            <ul className='space-y-2 text-xs'>
                {newsItems.map((item, id) => (
                    <li key={id} className='flex items-start'>
                        {/* <span className="text-gray-400 mr-1">•</span> */}
                        <span className="text-gray-600">
                            <span
                                className={`text-gray-700 ${item.upcoming ? "font-bold" : ""
                                    }`}
                            >
                                {item.upcoming && <span className='mr-1'>Upcoming:</span>}
                                {!item.upcoming && <span className='mr-1'>&#10004;</span>}
                            </span>
                            {item.text}{" "}
                            {item.link && (
                                <a
                                    href={item.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className={publicationLinkStyle}
                                >
                                    <FontAwesomeIcon icon={faLink} className='fa-fw' />
                                </a>
                            )}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
