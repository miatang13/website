import Image from "next/image";
import globalStyles from "../../settings/global-styles";

const teachingData = [
    {
        "company": "Adobe",
        "link": "https://research.adobe.com/",
        "time": ["Summer 2023"],
        "role": "Research Engineer Intern",
        "logo": "AdobeResearch.jpeg"
    },
    {
        "company": "Cesium",
        "link": "https://cesium.com/",
        "time": ["Summer 2022"],
        "role": "Software Developer Intern",
        "logo": "CesiumRobot.png"
    },
    {
        "company": "Jam3",
        "link": "https://www.jam3.com/",
        "time": ["Summer 2021"],
        "role": "Developer Intern",
        "logo": "Jam3-16x9.png"
    },
]

const descriptions_style = "mono font-normal";

export default function WorkExperience() {
    return (
        <div className="flex justify-between items-center py-2 grid md:grid-cols-3 gap-4 ">
            {teachingData.map((details, index) => (
                <div key={index} className="bg-gradient-to-r from-pink-50 to-white-500 p-4 outline outline-offset-2 outline-pink-50">

                    <div className="text-slate-400 text-sm pb-3">{details.time} </div>
                    <div className="">
                        <Image src={"/assets/logos/" + details.logo} alt={details.company} width={1920} height={1920 / 16 * 9} />
                    </div>

                    <div>
                        <a
                            href={details.link}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <h3 className={globalStyles.font_styles.h2 + " hover:text-pink-500 cursor-pointer transition duration-200 ease-in-ou"}>{details.company}</h3>
                        </a>

                        <p>{details.role} </p>
                    </div>
                </div>
            ))}
        </div>
    );
}