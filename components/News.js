
import { newLinkStyle } from "@/constants/styles";
import Image from "next/image";

export default function News() {
    const newsItems = [
        {
            content: (
                <span><b>Upcoming: </b>
                    Our recent work on  <a
                        href="https://inklayer.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={newLinkStyle}
                    >sketch segmentation
                    </a>  has been accepted to SIGGRAPH 2025. See you in Vancouver!
                </span>
            )
        },
        {
            content: <span><b>Upcoming: </b>We are teaching and organizing some fun workshops at SIGGRAPH this year. Details coming soon.</span>
        },
        {
            content: (
                <span><b>Upcoming: </b>
                    We are organizing a {" "}
                    <a
                        href="https://cveu.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={newLinkStyle}
                    >CVPR Workshop
                    </a> on AI for Creative Visual Content Generation and Editing.
                </span>
            ),
        },
        {
            content: <span><b>✓</b> I received the Stanford School of Engineering Fellowship as an incoming Ph.D. student. ٩(^‿^)۶ 💛 </span>
        },
        {
            content: (
                <span ><b>✓</b> I am giving a talk at Stanford <em>Graphics Café</em> on 04/24/2025. Come join us.</span>
            ),
        },
    ];

    return (
        <div>
            <h2 className="text-lg font-black mb-1">Recent News</h2>
            <ul className="space-y-2 text-xs">
                {newsItems.map((item, id) => (
                    <li key={id} className="text-gray-600">
                        {item.content}
                    </li>
                ))}
            </ul>
        </div>
    );
}
