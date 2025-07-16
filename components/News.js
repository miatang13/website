
import { newLinkStyle } from "@/constants/styles";
import { time } from "framer-motion";
import Image from "next/image";

export default function News() {
    const newsItems = [
        // {
        //     content: (
        //         <span><b>Upcoming: </b>
        //             Our recent work on  <a
        //                 href="https://inklayer.github.io/"
        //                 target="_blank"
        //                 rel="noopener noreferrer"
        //                 className={newLinkStyle}
        //             >sketch segmentation
        //             </a>  has been accepted to SIGGRAPH 2025. See you in Vancouver!
        //         </span>
        //     )
        // },
        // {
        //     content: <span><b>Upcoming: </b>We are teaching and organizing some fun workshops at SIGGRAPH this year. Details coming soon.</span>
        // },
        {
            content: (
                <span>We organized a {" "}
                    <a
                        href="https://cveu.github.io/event/cvpr2025.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={newLinkStyle}
                    >CVPR Workshop
                    </a> on AI for Creative Visual Content Generation and Editing.
                </span>
            ),
            time: "June 2025"
        },
        {
            content: <span>I received the Stanford School of Engineering Fellowship as an incoming Ph.D. student. ٩(^‿^)۶ 💛 </span>,
            time: "April 2025"
        },
        {
            content: (
                <span> I am giving a talk at Stanford <em>Graphics Café</em> on 04/24. Come join us.</span>
            ),
            time: "April 2025"
        },
    ];

    return (
        <div>
            <h2 className="text-lg font-black mb-1">Recent News</h2>
            <ul className="space-y-2 text-xs">
                {newsItems.map((item, id) => (
                    <li key={id} className="text-gray-600">
                        {item.time && (
                            <span className="text-gray-400">
                                {item.time} -{" "}
                            </span>
                        )}
                        {item.content}
                    </li>
                ))}
            </ul>
        </div>
    );
}
