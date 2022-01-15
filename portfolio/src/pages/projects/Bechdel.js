import LeftColumn from "../../components/Layout/LeftColumn";
import RightColumn from "../../components/Layout/RightColumn";
import TwoColumns from "../../components/Layout/TwoColumns";
import ImageGallery from "../../components/Project/ImageGallery";
import IndivImage from "../../components/Project/IndivImage";
import IndivVideo from "../../components/Project/IndivVideo";
import Project from "../../components/Project/ProjectContainer";
import ProjectHeader from "../../components/Project/ProjectHeader";
import ProjectSection from "../../components/Project/ProjectSection";
import ProjectShortSection from "../../components/Project/ProjectShortSection";
import SectionBlurb from "../../components/Project/SectionBlurb";
import SectionSubtitle from "../../components/Project/SectionSubtitle";
import SpotlightImageSection from "../../components/Project/SpotlightImageSection";
import SpotlightVideoSection from "../../components/Project/SpotlightVideoSection";
import VideoGallery from "../../components/Project/VideoGallery";
import project_data from "../../settings/projects.json";

export default function Bechdel() {
  const project_idx = 3;
  const base_url = "/assets/Bechdel/";
  const process_url = base_url + "process/";
  const video_url = base_url + "videos/";
  const video_format = ".mp4";
  const code_url = base_url + "code/";

  return (
    <Project index={project_idx}>
      <ProjectHeader
        title={project_data[project_idx].landing.title}
        subtitle={project_data[project_idx].landing.subtitle}
        team="Jina Lee, Mihika Bansal, Caroline Song"
        role="Sole Developer, Designer"
        skills="WebGL, React, NYT API, RapidAPI"
        timeline="October 2021 — December 2021"
        client="Class Project for 51-367 @CMU"
        img_src={base_url + "thumbnail.png"}
      />

      <ProjectShortSection title="Overview">
        <SectionBlurb fullWidth={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </SectionBlurb>
      </ProjectShortSection>

      <ProjectShortSection title="1. Data">
        <SectionBlurb fullWidth={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </SectionBlurb>
      </ProjectShortSection>

      <ProjectSection>
        <SectionSubtitle>API 1: Bechdel</SectionSubtitle>
        <SectionSubtitle>API 2: IMdb</SectionSubtitle>
        <SectionSubtitle>API 3: NYT</SectionSubtitle>
      </ProjectSection>

      <ProjectShortSection title="2. Design">
        <SectionBlurb fullWidth={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </SectionBlurb>
      </ProjectShortSection>

      <ProjectSection>
        <SpotlightImageSection
          src={process_url + "key-withoutUI.png"}
          title="Data Visualization"
        >
          <SectionBlurb fullWidth={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </SectionBlurb>{" "}
        </SpotlightImageSection>
      </ProjectSection>

      <ProjectSection>
        <SectionSubtitle>SUBTITLE</SectionSubtitle>
        <ImageGallery
          images={[
            process_url + "genre-symbols.png",
            process_url + "audience-rate.png",
          ]}
        />
        <TwoColumns>
          <LeftColumn>
            <IndivImage src={code_url + "snippet.png"} />{" "}
          </LeftColumn>
          <RightColumn>
            <SectionBlurb fullWidth={true}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </SectionBlurb>{" "}
          </RightColumn>
        </TwoColumns>
      </ProjectSection>

      <ProjectShortSection title="3. Website">
        <SectionBlurb fullWidth={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </SectionBlurb>
      </ProjectShortSection>

      <ProjectSection>
        <SpotlightVideoSection
          // title="Data Visualization"
          src={video_url + "enter" + video_format}
          caption="User Enter"
        >
          <SectionBlurb fullWidth={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </SectionBlurb>{" "}
        </SpotlightVideoSection>
        <VideoGallery
          videos={[
            video_url + "shader1" + video_format,
            video_url + "shader2" + video_format,
            video_url + "shader3" + video_format,
          ]}
        />
      </ProjectSection>

      <ProjectSection>
        <SpotlightVideoSection
          title="Navigation"
          src={video_url + "navigation" + video_format}
          caption="User Enter"
        >
          <SectionBlurb fullWidth={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </SectionBlurb>{" "}
        </SpotlightVideoSection>

        <ProjectSection>
          <TwoColumns>
            <LeftColumn>
              <IndivVideo src={video_url + "arrowkey_detail" + video_format} />{" "}
            </LeftColumn>
            <RightColumn>
              <SectionBlurb fullWidth={true}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </SectionBlurb>{" "}
            </RightColumn>
          </TwoColumns>
        </ProjectSection>
      </ProjectSection>

      <ProjectSection>
        <SpotlightVideoSection
          title="NYT Articles"
          src={video_url + "NYT-articles" + video_format}
        >
          <SectionBlurb fullWidth={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </SectionBlurb>{" "}
        </SpotlightVideoSection>
      </ProjectSection>

      <ProjectSection>
        <SectionSubtitle>Catalog </SectionSubtitle>
        <VideoGallery
          videos={[
            video_url + "catalog-sort" + video_format,
            video_url + "catalog-click" + video_format,
          ]}
        />
      </ProjectSection>
    </Project>
  );
}
