import ImageGallery from "../../components/Project/ImageGallery";
import Project from "../../components/Project/ProjectContainer";
import ProjectHeader from "../../components/Project/ProjectHeader";
import ProjectSection from "../../components/Project/ProjectSection";
import ProjectShortSection from "../../components/Project/ProjectShortSection";
import SectionBlurb from "../../components/Project/SectionBlurb";
import RefLink from "../../components/Utility/RefLink";
import project_data from "../../settings/projects.json";
import { Tweet } from "react-twitter-widgets";

export default function Illustrations() {
  const project_idx = project_data.length - 1;
  const base_url = "/assets/Illustration/";
  return (
    <Project index={project_idx}>
      <ProjectHeader
        title={project_data[project_idx].landing.title}
        subtitle={project_data[project_idx].landing.subtitle}
        callout={project_data[project_idx].project_summary}
        team="SOLO"
        role="Illustrator, Writer"
        skills="Procreate, Figma, Adobe"
        timeline="January 2020 - Current"
        client="N/A"
        img_src={base_url + "thumbnail.png"}
      />
      <ProjectShortSection title="Overview">
        <SectionBlurb fullWidth={true}>
          Since sophomore year in college, I enjoyed creating illustrations on
          technical content in Computer Science. It started when I was a
          teaching assistant for the class Functional Programming 15-150 at CMU.{" "}
          <br />
          <br />
          Currently, I'm a TA for Computer Graphics 15-462/662 at CMU, and am
          creating weekly content related to graphics on Twitter{" "}
          <RefLink
            text="@Miamiamia0103"
            href="https://twitter.com/Miamiamia0103"
          />
          . <br />
          <br /> This is a comprehensive log of my work in reverse chronological
          order.
        </SectionBlurb>
      </ProjectShortSection>

      <ProjectSection subtitle="Ray Tracing">
        <Tweet tweetId="1510623478256480268" />
      </ProjectSection>

      <ProjectSection subtitle="Rendering Pipeline">
        <Tweet tweetId="1503383036087386113" />
      </ProjectSection>

      <ProjectSection subtitle="Subdivision Surfaces">
        <Tweet tweetId="1500591790805725187" />
      </ProjectSection>

      <ProjectSection subtitle="Halfedge Mesh">
        <Tweet tweetId="1495438738398191617" />
      </ProjectSection>

      <ProjectSection subtitle="Graphics Valentines Cards">
        <Tweet tweetId="1493238627572330496" />
      </ProjectSection>

      <ProjectSection subtitle="Anti-Aliasing Strategies">
        <Tweet tweetId="1490355292487487494" />
      </ProjectSection>

      <ProjectSection subtitle="SVG Rasterization">
        <Tweet tweetId="1487812714294652934" />
      </ProjectSection>

      <ProjectSection subtitle="Brief History on Graphics">
        {/* <ZoomImageGallery
          images={[
            base_url + "/graphics/history/1960.png",
            base_url + "/graphics/history/1970.png",
            base_url + "/graphics/history/1980.png",
            base_url + "/graphics/history/1990.png",
            base_url + "/graphics/history/2000.png",
          ]}
          md={4}
        /> */}
        <Tweet tweetId="1485314067610812420" />
      </ProjectSection>

      <ProjectSection subtitle="Occlusion with Z-buffer">
        {/* <ZoomablePicture
          src={base_url + "graphics/comics/occlusion_zbuffer.png"}
        /> */}
        <Tweet tweetId="1454168094151225356" />
      </ProjectSection>

      <ProjectSection subtitle="Texture Mapping & MIP Map">
        {/* <ZoomablePicture src={base_url + "graphics/comics/mipmap.png"} /> */}
        <Tweet tweetId="1446842946813370369" />
      </ProjectSection>

      <ProjectSection subtitle="Anti-aliasing">
        {/* <ZoomablePicture src={base_url + "graphics/comics/anti-aliasing.png"} /> */}
        <Tweet tweetId="1443930631554183168" />
      </ProjectSection>

      <ProjectSection subtitle="Interactive & Zero-Knowledge Proof">
        <ImageGallery
          images={[
            base_url + "/251/verifier.png",
            base_url + "/251/in_not.png",
          ]}
        />{" "}
        <SectionBlurb>
          A medium article on theoretical CS's complexity class I.P.. <br />
          <br />
          <RefLink
            href="https://mia-tang.medium.com/interactive-proof-ed5050e8e78d"
            text="Medium Link"
          />
        </SectionBlurb>{" "}
      </ProjectSection>

      <ProjectSection subtitle="Higher Order Functions">
        <ImageGallery
          images={[base_url + "/hof/map.png", base_url + "/hof/fold.png"]}
        />{" "}
        <SectionBlurb>
          A medium article with animations covering: map / filter / foldl /
          foldr. <br />
          <br />
          <RefLink
            href="https://mia-tang.medium.com/a-note-on-higher-order-functions-191dc1a48ed4"
            text="Medium Link"
          />
        </SectionBlurb>{" "}
      </ProjectSection>

      <ProjectSection subtitle="Functional Programming Basics">
        <ImageGallery
          images={[
            base_url + "/intro_to_func_prog/jump_hoop.png",
            base_url + "/intro_to_func_prog/trees.png",
          ]}
        />{" "}
        <SectionBlurb>
          A medium article covering: Expressions / Totality / Datatypes &
          Structural Induction / Functions Types. <br />
          <br />
          <RefLink
            href="https://mia-tang.medium.com/functional-programming-manual-v-1-510ae8671b88"
            text="Medium Link"
          />
        </SectionBlurb>{" "}
      </ProjectSection>
    </Project>
  );
}
