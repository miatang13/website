import Image from "next/image";
import globalStyles from "../../settings/global-styles";
import hero_img from "../../public/assets/BrianCollins/cover&back_2.png";
import projects_data from "../../settings/projects.json";
import projectByOrder from "../../settings/project-order";
import ProjectHeader from "../../components/project/ProjectHeader";
import FullLine from "../../components/project/FullLine";
import StyledExternalLink from "../../components/global/StyledExternalLink";

const page_key = "BrianCollins";
const page_data = projects_data[page_key];

const images = [
  "cover.png",
  "cover&back.png",
  "sp_1.png",
  "sp_2.png",
  "sp_3.png",
  "sp_4.png",
  "sp_5.png",
  "sp_6.png",
  "sp_7.png",
  "45_1.png",
  "45_2.png",
  "45_3.png",
  "crippledPoster.png",
];

export default function ComicBooklet() {
  return (
    <div className={globalStyles.div_styles.page_outer_wrapper}>
      <div className={globalStyles.div_styles.page_inner_wrapper}>
        <Image src={hero_img} />
        <ProjectHeader page_data={page_data} />
        <FullLine />
        <div className='grid md:grid-cols-2 py-6'>
          <h2 className={globalStyles.font_styles.h2}>Overview</h2>
          <p className={globalStyles.font_styles.p}>
            This is a series of print designs to tell the personal story and
            work of the designer Brian Collins, who is the founder of the brand
            agency
            <StyledExternalLink href='https://www.wearecollins.com/'>
              {" "}
              COLLINS{" "}
            </StyledExternalLink>
            .
          </p>
        </div>
        <FullLine />
        <div className='py-6 flex flex-col space-y-4 place-items-center'>
          {images.map((image) => {
            return (
              <div className='py-3 md:w-5/6'>
                <Image
                  width={4500 / 3}
                  height={3000 / 3}
                  src={"/assets/BrianCollins/" + image}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
