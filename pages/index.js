import globalStyles from "../settings/global-styles";
import LandingIntro from "../components/landing/Intro";
import Publications from "../components/landing/Publication";
import AllProjects from "../components/landing/Project";
import Teaching from "../components/landing/Teaching";
import WorkExperience from "../components/landing/WorkExperience";

export default function Work() {
  const section_title_style = "text-xl font-bold text-pink-400";

  return (
    <div
      className={globalStyles.div_styles.page_outer_wrapper}
      id='page-container'
    >
      <div className={globalStyles.div_styles.page_inner_wrapper}>
        <section>
          <h2 className={section_title_style}>Hello there :)</h2>
          <LandingIntro />
        </section>
        {/* <section className='pt-3 pb-3 border-t-2'>
          <h2 className={section_title_style}>
            <span className='text-pink-400 font-bold'>News &amp;</span>
            <span className='text-blue-400 font-bold'> Future</span>
          </h2>
          <News />
        </section> */}
        <section className='pt-3 pb-3 border-t-2'>
          <h2 className={section_title_style}>Publication</h2>
          <Publications />
        </section>

        <section className='pt-3 pb-3 border-t-2'>
          <h2 className={section_title_style}>Teaching</h2>
          <Teaching />
        </section>
        <section className='pt-3 pb-3 border-t-2'>
          <h2 className={section_title_style}>Experience</h2>
          <WorkExperience />
        </section>


        {/* <section className='pt-3 pb-6 border-t-2'>
          <h2 className={section_title_style}>Engineering Internships</h2>
          <InternProjects />
        </section> */}
        <section className='pt-3 pb-6 border-t-2'>
          <h2 className={section_title_style}>Project</h2>
          <AllProjects />
        </section>
      </div>
    </div>
  );
}
