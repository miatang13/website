import Image from "next/image";
import globalStyles from "../../settings/global-styles";
import hero_img from "../../public/assets/GCafe/thumbnail.png";
import projects_data from "../../settings/projects.json";
import ProjectHeader from "../../components/project/ProjectHeader";
import FullLine from "../../components/project/FullLine";
import StyledExternalLink from "../../components/global/StyledExternalLink";

const page_key = "GCafe";
const page_data = projects_data[page_key];

const images = [
    "Elliott_Wu.png",
    "Douglas_Lanman.png",
    "Alexander_Clegg.png",
    "Dalton_Omens.png",
    "Anyi_Rao.png",
    "Karen_Liu.png",
    "Shengqu_Ca_Zhengfei_Kuang.png",
    "Takara_Truong.png",
    "Joon_Park.png",
    "Jiaman_Li.png",
    "Brennan_Shacklett.png",
    "Jiaju_Ma.png",
    "Koven_Yu.png",
    "Vishnu_Sarukkai.png",
    // "Guy_Tevet.png",
    "Sarah_Jobalia.png",
    "Zander_Majercik.png",
];

export default function GCafe() {
    return (
        <div className={globalStyles.div_styles.page_outer_wrapper}>
            <div className={globalStyles.div_styles.page_inner_wrapper}>
                <Image src={hero_img} />
                <ProjectHeader page_data={page_data} />
                <FullLine />
                <div className='grid md:grid-cols-2 py-6'>
                    <h2 className={globalStyles.font_styles.h2}>Overview</h2>
                    <p className={globalStyles.font_styles.p}>
                        I co-organized the Stanford Graphics Cafe Seminar, a weekly event showcasing the amazing work of PhD students, faculty, and visiting speakers in the field of computer graphics. <br /> <br />

                        Each week, we welcome a speaker to share their research. I also design a unique bunny character for each speaker, inspired by their research interests. Here are some of the bunnies I've created :). <br /> <br />

                        Subscribe to our  <StyledExternalLink href="https://mailman.stanford.edu/mailman/listinfo/graphics-cafe">mailing list</StyledExternalLink> for updates on our weekly talks!
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
