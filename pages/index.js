import globalStyles from "../settings/global-styles";
import LandingIntro from "../components/landing/Intro";
import InternProjects from "../components/landing/InternProjects";
import NonInternProjects from "../components/landing/NonInternProjects";
import News from "../components/landing/News";

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
        <section className='pt-3 pb-3 border-t-2'>
          <h2 className={section_title_style}>
            <span className='text-pink-400 font-bold'>News &amp;</span>
            <span className='text-blue-400 font-bold'> Future</span>
          </h2>
          <News />
        </section>
        <section className='pt-3 pb-6 border-t-2'>
          <h2 className={section_title_style}>Engineering Internships</h2>
          <InternProjects />
        </section>
        <section className='pt-3 pb-6 border-t-2'>
          <h2 className={section_title_style}>Design Projects</h2>
          <NonInternProjects />
        </section>
      </div>
    </div>
  );
}
