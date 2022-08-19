import Image from "next/image";
import globalStyles from "../../settings/global-styles";
import hero_img from "../../public/assets/Cesium/thumbnail.png";
import unionStation from "../../public/assets/Cesium/union-station.png";
import projects_data from "../../settings/projects.json";
import projectByOrder from "../../settings/project-order";
import ProjectHeader from "../../components/project/ProjectHeader";
import StyledExternalLink from "../../components/global/StyledExternalLink";
import FullLine from "../../components/project/FullLine";

const page_key = "Cesium";

const project_idx = projectByOrder.indexOf(page_key);
const page_data = projects_data[project_idx];

export default function Cesium() {
  return (
    <div className={globalStyles.div_styles.page_outer_wrapper}>
      <div className={globalStyles.div_styles.page_inner_wrapper}>
        <Image src={hero_img} />
        <ProjectHeader page_data={page_data} />
        <FullLine />
        <div
          className={globalStyles.div_styles.work_project_container}
          id="work-main-content"
        >
          <Image src={unionStation} />
          <p className={globalStyles.font_styles.p + " place-self-center"}>
            I work on the{" "}
            <StyledExternalLink href="https://cesium.com/platform/cesium-for-unreal/">
              Cesium for Unreal Plugin
            </StyledExternalLink>
            , which builds on open standards and APIs, allowing Unreal Engine
            users to create virtual worlds with massive 3D data.
          </p>
        </div>
      </div>
    </div>
  );
}
