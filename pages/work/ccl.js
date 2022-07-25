import Image from "next/image";
import globalStyles from "../../settings/global-styles";
import hero_img from "../../public/assets/CCL/thumbnail.png";
import unionStation from "../../public/assets/Cesium/union-station.png";
import projects_data from "../../settings/projects.json";
import projectByOrder from "../../settings/project-order";
import ProjectHeader from "../../components/project/ProjectHeader";
import StyledExternalLink from "../../components/global/StyledExternalLink";
import FullLine from "../../components/project/FullLine";
import btn1 from "../../public/assets/CCL/btn_1.png";
import btn2 from "../../public/assets/CCL/btn_2.png";
import btn3 from "../../public/assets/CCL/btn_3.png";
import wyt1 from "../../public/assets/CCL/whatsyourtype_0_s.png";
import wyt2 from "../../public/assets/CCL/whatsyourtype_1_s.png";
import wyt3 from "../../public/assets/CCL/whatsyourtype_2_s.png";
import wyt4 from "../../public/assets/CCL/whatsyourtype_3_s.png";
import wyt5 from "../../public/assets/CCL/whatsyourtype_4_s.png";
import wyt6 from "../../public/assets/CCL/whatsyourtype_5_s.png";

const page_key = "CCL";

const project_idx = projectByOrder.indexOf(page_key);
const page_data = projects_data[project_idx];

export default function CCL() {
  return (
    <div className={globalStyles.div_styles.page_outer_wrapper}>
      <div className={globalStyles.div_styles.page_inner_wrapper}>
        <Image src={hero_img} />
        <ProjectHeader page_data={page_data} />
        <FullLine />
        <div className={globalStyles.div_styles.work_project_container}>
          <h2 className={globalStyles.font_styles.h2}>Overview</h2>
          <p>
            I had the pleasure of working as a full-stack developer for over a
            year at{" "}
            <StyledExternalLink href="http://computational-creativity.org/">
              {" "}
              Computational Creativity Lab
            </StyledExternalLink>{" "}
            under Professor Kyuha Shim and along with a group of talented
            designers. Together we created experimental digital experiences that
            stem from an understanding of code as a creative medium for
            designing systems. Projects are in the process of being released,
            but here I have some selected screenshots.
          </p>
          <FullLine />

          {/* PROJECT 1: BEHIND THE NUMBERS */}
          <div>
            <h2 className={globalStyles.font_styles.h2}>
              {"Behind the Numbers".toUpperCase()}
            </h2>
            <p
              className={
                globalStyles.font_styles.p + " italic text-slate-400  text-sm"
              }
            >
              In Collaboration With{" "}
              <StyledExternalLink href="https://www.census.gov/">
                {" "}
                US Census Bureau
              </StyledExternalLink>{" "}
            </p>
          </div>
          <div>
            <p className={globalStyles.font_styles.p}>
              We sought new ways to present Census data on an urgent, but often
              unseen, issue in the United States: food insecurity. While Census
              data undoubtedly proves the scope and characteristics of hunger in
              the United States, it can obscure the lived experience for each
              one of the 49 million households that are food insecure. Our
              project aims to surface these stories, combining a data-driven
              national level picture of food security with the first person
              accounts of hunger from everyday Americans. By combining the power
              of storytelling and data, we aim to create a participatory
              platform where users can submit their own stories, reflections,
              and reactions on the issue of food insecurity, continuously
              enriching the content and surfacing new stories.
            </p>
            <p
              className={
                globalStyles.font_styles.p +
                " italic text-slate-400  text-sm pt-3 sm:text-right"
              }
            >
              (Description from CCL Website.)
            </p>
          </div>

          <Image src={btn1} />
          <Image src={btn2} />
          <Image src={btn3} />

          <FullLine />
          {/* PROJECT 1: BEHIND THE NUMBERS */}
          <div>
            <h2 className={globalStyles.font_styles.h2}>
              {"What's Your Type?".toUpperCase()}
            </h2>
            <p
              className={
                globalStyles.font_styles.p + " italic text-slate-400  text-sm"
              }
            >
              Funded By{" "}
              <StyledExternalLink href="https://studioforcreativeinquiry.org/">
                {" "}
                The Frank-Ratchye STUDIO for Creative Inquiry
              </StyledExternalLink>{" "}
            </p>
          </div>
          <div>
            <p className={globalStyles.font_styles.p}>
              Open-source fonts are ubiquitous throughout the Web, and yet we
              understand very little about the implicit connotations and
              underlying perceptions that users have of them. Nor do we
              understand how these preferences vary across cultural barriers.
              What's Your Type seeks to understand these font connotations and
              perceptions through a web-based survey. The survey asks users to
              pick the font that best matches an emotive adjective—including
              “playful,” “informative,” and “trendy.” By gathering user
              responses, What's Your Type crowdsources a database of font
              preferences, searchable by language and location of the
              respondent.
            </p>
            <p
              className={
                globalStyles.font_styles.p +
                " italic text-slate-400  text-sm pt-3 sm:text-right"
              }
            >
              (Description from CCL Website.)
            </p>
          </div>
          <Image src={wyt1} />
          <Image src={wyt2} />
          <Image src={wyt3} />
          <Image src={wyt4} />
          <Image src={wyt5} />
          <Image src={wyt6} />
        </div>
      </div>
    </div>
  );
}
