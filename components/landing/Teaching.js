import StyledExternalLink from "../global/StyledExternalLink";

const teachingData = [
    {
        "name": "CS 248A: Computer Graphics: Rendering, Geometry, and Image Manipulation",
        "venue": "Stanford University",
        "link": "https://gfxcourses.stanford.edu/cs248a/winter24/",
        "semesters": ["Winter 2024"],
        "role": "Course Assistant"
    },
    {
        "name": "CS 148: Introduction to Computer Graphics and Imaging",
        "venue": "Stanford University",
        "link": "https://web.stanford.edu/class/cs148/",
        "semesters": ["Fall 2023"],
        "role": "Course Assistant"
    },
    {
        "name": "15-462/662: Computer Graphics",
        "venue": "Carnegie Mellon University",
        "link": "https://csd.cmu.edu/course/15462/s24",
        "semesters": ["Spring 2022", "Fall 2022"],
        "role": "Teaching Assistant"
    },
    {
        "name": "15-150: Principles of Functional Programming",
        "venue": "Carnegie Mellon University",
        "link": "https://csd.cmu.edu/15150-principles-of-functional-programming",
        "semesters": ["Spring 2020", "Summer 2020"],
        "role": "Teaching Assistant"
    }
]

const descriptions_style = "mono font-bold";
const div_style = "bg-gradient-to-r from-pink-50 to-white-500 p-4 outline outline-offset-2 outline-pink-50 "
const future_div_style = "bg-gradient-to-r from-blue-100 to-white-500 p-4 outline outline-offset-2 outline-blue-50 "

export default function Teaching() {
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
                            <div className={div_style + "p-2 md:col-span-2 rounded-sm hover:bg-pink-200 hover:text-pink-500 cursor-pointer transition duration-100 ease-in-out"}>
                                <a
                                    href={details.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <p className={descriptions_style}>{details.name}</p>
                                </a>
                                <p className="text-slate-400 text-sm">{details.role} for {details.semesters.join(', ')}</p>
                            </div>
                    }

                </div>
            ))}
        </div>
    );
}