import StyledExternalLink from "../global/StyledExternalLink";

const teachingData = [
    {
        "name": "AI for Creative Visual Content Generation Editing and Understanding",
        "venue": "CVPR 2025",
        "link": "https://cveu.github.io/",
        "semesters": ["June 2025"],
        "role": "Workshop Organizer"
    },
    {
        "name": "Generative Models for Visual Content Editing and Creation",
        "venue": "SIGGRAPH 2024",
        "link": "https://s2024.conference-program.org/presentation/?id=gensub_279&sess=sess166",
        "semesters": ["July 2024"],
        "role": "Instructor"
    },
    {
        "name": "Introduction to Generative Machine Learning",
        "venue": "SIGGRAPH 2024",
        "link": "https://s2024.conference-program.org/presentation/?id=gensub_449&sess=sess153",
        "semesters": ["July 2024"],
        "role": "Instructor"
    },
    {
        "name": "The Future of Generative Visual Art",
        "venue": "CVPR 2024",
        "link": "https://cveu.github.io/event/cvpr2024.html",
        "semesters": ["June 2024"],
        "role": "Workshop Organizer"
    },
    {
        "name": "Introduction to Generative Machine Learning",
        "venue": "SIGGRAPH Asia 2023",
        "link": "https://asia.siggraph.org/2023/presentation/?id=crs_120&sess=sess109",
        "semesters": ["December 2023"],
        "role": "Instructor"
    },
    {
        "name": "Introduction to Generative Machine Learning",
        "venue": "SIGGRAPH 2023",
        "link": "https://s2023.siggraph.org/presentation/?id=gensub_261&sess=sess158",
        "semesters": ["August 2023"],
        "role": "Instructor"
    },
]

const descriptions_style = "mono font-bold";
const div_style = "bg-gradient-to-r from-blue-50 to-white-500 p-4 outline outline-offset-2 outline-blue-50 "
const future_div_style = "bg-gradient-to-r from-blue-100 to-white-500 p-4 outline outline-offset-2 outline-blue-50 "

export default function Workshops() {
    return (
        <div>
            {teachingData.map((details, index) => (
                <div key={index} className="flex justify-between items-center py-2 grid md:grid-cols-3 gap-y-2">
                    <p className="text-slate-400"> {details.venue}</p>

                    {
                        details.future ?
                            <div className={future_div_style + "p-2 md:col-span-2 rounded-sm hover:bg-blue-200 hover:text-blue-500 cursor-pointer transition duration-100 ease-in-out"}>
                                <a
                                    href={details.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <p className={descriptions_style}>{details.name}</p>
                                </a>
                                <p className="text-slate-400 text-sm">{details.role} for {details.semesters.join(', ')}</p> </div> :
                            <div className={div_style + "p-2 md:col-span-2 rounded-sm hover:bg-blue-200 hover:text-blue-500 cursor-pointer transition duration-100 ease-in-out"}>
                                <a
                                    href={details.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <p className={descriptions_style}>{details.name}</p>
                                </a>
                                {/* <p className="text-slate-400 text-sm">{details.role} for {details.semesters.join(', ')}</p> */}
                            </div>
                    }

                </div>
            ))}
        </div>
    );
}