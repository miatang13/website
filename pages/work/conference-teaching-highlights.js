import Image from "next/image";
import globalStyles from "../../settings/global-styles";
import hero_img from "../../public/assets/ConfTeachHighlight/thumbnail.png";
import projects_data from "../../settings/projects.json";
import ProjectHeader from "../../components/project/ProjectHeader";
import FullLine from "../../components/project/FullLine";
import StyledExternalLink from "../../components/global/StyledExternalLink";

const page_key = "ConfTeachingHighlight";
const page_data = projects_data[page_key];

const images = ['bookmark_mockup.png', 'transformer_origin.png', 'attention.png', 'transformer_fast.png', 'batch_norm.png', 'rnn.png', 'layers1.png', 'layers2.png', 'lost.png', 'convo_watermelon.png', 'res_connection.png', 'res_connection1.png', 'gen_data0.png', 'gen_data1.png', 'gen_data2.png', 'gen_data3.png', 'gaussian_distribution.png', 'distribution.png', 'forward_diffuse.png', 'repara_motivation.png', 'cfg.png']

export default function ConfTeachingHighlights() {
    const width = 1080 * 0.8;
    const height = width / 16 * 9;
    return (
        <div className={globalStyles.div_styles.page_outer_wrapper}>
            <div className={globalStyles.div_styles.page_inner_wrapper}>
                <Image src={hero_img} />
                <ProjectHeader page_data={page_data} />
                <FullLine />
                <div className='grid md:grid-cols-2 py-6'>
                    <h2 className={globalStyles.font_styles.h2}>Overview</h2>
                    <p className={globalStyles.font_styles.p}>
                        Teaching at conferences has been one of the most rewarding experiences of my career, allowing me to connect with incredible minds and share my fascination with the topics. It all began in the summer of 2022, thanks to the invitation from <StyledExternalLink href="https://www.linkedin.com/in/rajeshxsharma/">Rajesh Sharma</StyledExternalLink>,  who gave me the chance to co-create teaching content for a course introducing machine learning. <br /><br />

                        What started as a collaborative project evolved into a recurring and deeply rewarding teaching journey. I co-taught the course with Rajesh in-person at SIGGRAPH 2023 in LA, followed by SIGGRAPH Asia in Sydney, and SIGGRAPH 2024 in Denver, where we welcomed over 600 enthusiastic attendees. At SIGGRAPH 2024, I also had the pleasure of co-teaching another course on diffusion models for content creation with other wonderful collaborators. <br /><br />

                        This page gives you a sneak peek into the materials I created, along with some merch, the bookmarks, that I made as little thank-you gifts for our audience.<br /><br />

                        Teaching is more than just sharing knowledge — it's about weaving creative stories into complex concepts, and I hope that my passion shines through in every lecture, making the learning experience as inspiring and enjoyable as it's been for me.<br /><br />

                        <span className="text-pink-400"><b>Just a note ◡̈ — </b></span> these are not intended to be stand-alone teaching materials (like my comics) but are meant to give you a glimpse of the visual style and content used in these lectures. I have purposefully omitted math-heavy slides to avoid any out-of-context misunderstandings.
                    </p>
                </div>
                <FullLine />
                <div className='mt-4 w-full flex flex-col gap-y-4 w-fit items-center space-y-2'>
                    {images.map((image) => {
                        return (
                            <div className="drop-shadow-lg rounded-md">
                                <Image // 16:9 aspect ratio
                                    width={width}
                                    height={height}
                                    src={"/assets/ConfTeachHighlight/" + image}
                                    className="border border-2"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
