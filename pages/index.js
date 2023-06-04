import globalStyles from "../settings/global-styles";
import LandingIntro from "../components/landing/Intro";
import EngineeringProjects from "../components/landing/EngineeringProjects";

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
        <section className='pt-3 border-t-2'>
          <h2 className={section_title_style}>
            Creative Engineering Experiences
          </h2>
          <EngineeringProjects />
        </section>
        <section className='py-3'>
          <h2 className={section_title_style}>
            Graphic Design & Branding Projects
          </h2>
        </section>
      </div>
    </div>
  );
}
