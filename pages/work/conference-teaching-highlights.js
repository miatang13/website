import Image from "next/image";
import globalStyles from "../../settings/global-styles";
import hero_img from "../../public/assets/ConfTeachHighlight/thumbnail.png";
import projects_data from "../../settings/projects.json";
import ProjectHeader from "../../components/project/ProjectHeader";
import FullLine from "../../components/project/FullLine";
import StyledExternalLink from "../../components/global/StyledExternalLink";

const page_key = "ConfTeachingHighlight";
const page_data = projects_data[page_key];

const images = [
    "Elliott_Wu.png",
];

export default function ConfTeachingHighlights() {
    return (
        <div className={globalStyles.div_styles.page_outer_wrapper}>
            <div className={globalStyles.div_styles.page_inner_wrapper}>
                <Image src={hero_img} />
                <ProjectHeader page_data={page_data} />
                <FullLine />
                <div className='grid md:grid-cols-2 py-6'>
                    <h2 className={globalStyles.font_styles.h2}>Overview</h2>
                    <p className={globalStyles.font_styles.p}>
                        Teaching at SIGGRAPH and SIGGRAPH Asia has been one of the most rewarding experiences of my career, allowing me to connect with incredible minds and share my love for generative machine learning. It all began in the summer of 2022, thanks to the invitation from <StyledExternalLink href="https://www.linkedin.com/in/rajeshxsharma/">Rajesh Sharma</StyledExternalLink>,  who gave me the chance to co-create teaching content for a course introducing machine learning. <br /><br />

                        What started as a collaborative project quickly grew into something special{" "} — {" "}I co-taught the course in-person at SIGGRAPH 2023 in LA, followed by SIGGRAPH Asia in Sydney, and SIGGRAPH 2024 in Denver, where we welcomed over 600 enthusiastic attendees. At SIGGRAPH 2024, I also had the pleasure of contributing to another course on diffusion models for content creation. <br /><br />

                        This page gives you a sneak peek into the materials I poured my heart (and some hours) into, along with some merch, the bookmarks, that I made as little thank-you gifts for our audience.<br /><br />

                        Teaching is more than just sharing knowledge — it's about weaving creative stories into complex concepts, and I hope that my passion shines through in every lecture, making the learning experience as inspiring and enjoyable as it's been for me.
                    </p>
                </div>
                <FullLine />
                <div className='py-6 grid sm:grid-cols-2 gap-3'>
                    {images.map((image) => {
                        return (
                            <div>
                                <Image
                                    width={3000 / 3}
                                    height={3000 / 3}
                                    src={"/assets/GCafe/" + image}
                                />
                            </div>
                        );
                    })}
                </div>
                <Image
                    width={1920}
                    height={1080}
                    src={"/assets/GCafe/Bunnyfarm_16_9.png"}
                />
            </div>
        </div>
    );
}
