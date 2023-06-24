import Image from "next/image";
import globalStyles from "../../settings/global-styles";
import hero_img from "../../public/assets/ComicBooklet/cover_onspread.jpg";
import projects_data from "../../settings/projects.json";
import projectByOrder from "../../settings/project-order";
import ProjectHeader from "../../components/project/ProjectHeader";
import FullLine from "../../components/project/FullLine";

const page_key = "ComicBooklet";
const page_data = projects_data[page_key];

const images = [
  "cover+1spread.png",
  "landscape_1.png",
  "2-3.png",
  "4-5.png",
  "6-7.png",
  "8-9.png",
  "10-11.png",
  "12-13.png",
  "14-15.png",
  "16-17.png",
  "18-19.png",
  "20-21.png",
  "22-23.png",
  "24-25.png",
  "26-27.png",
  "28-29.png",
  "30-31.png",
  "32-33.png",
  "34-35.png",
  "36-37.png",
  "realistic-mock.jpg",
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
            Upon my graduation from CMU, I self-published this booklet compiling
            my educational illustrations as a gift to the professors who have
            taught me throughout my college career and the twitter community who
            have supported me along the way.
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
                  src={"/assets/ComicBooklet/spreads_fullres/" + image}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
