import globalStyles from "../settings/global-styles";
import LandingIntro from "../components/landing/Intro";
import Publications from "../components/landing/Publication";
import AllProjects from "../components/landing/Project";
import Workshops from "../components/landing/Workshops";
import Teaching from "../components/landing/Teaching";
import WorkExperience from "../components/landing/WorkExperience";

export default function Work() {
  const section_title_style = "text-xl font-bold text-pink-400";
  const section_title_style_blue = "text-xl font-bold text-blue-400";

  return (
    <div
      className={globalStyles.div_styles.page_outer_wrapper}
      id='page-container'
    >
      <div className={globalStyles.div_styles.page_inner_wrapper}>
        <section>
          <LandingIntro />
        </section>
        <section className='pt-3 pb-3 border-t-2'>
          <h2 className={section_title_style_blue}>Publication</h2>
          <Publications />
        </section>
        <section className='pt-3 pb-3 border-t-2'>
          <h2 className={section_title_style_blue}>Conference Workshop</h2>
          <Workshops />
        </section>
        <section className='pt-3 pb-3 border-t-2'>
          <h2 className={section_title_style}>Teaching</h2>
          <Teaching />
        </section>
        <section className='pt-3 pb-3 border-t-2'>
          <h2 className={section_title_style}>Experience</h2>
          <WorkExperience />
        </section>
        <section className='pt-3 pb-6 border-t-2'>
          <h2 className={section_title_style}>Project</h2>
          <AllProjects />
        </section>
      </div>
    </div>
  );
}
