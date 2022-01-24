import ImageGallery from "../../components/Project/ImageGallery";
import Project from "../../components/Project/ProjectContainer";
import ProjectHeader from "../../components/Project/ProjectHeader";
import ProjectSection from "../../components/Project/ProjectSection";
import ProjectShortSection from "../../components/Project/ProjectShortSection";
import SectionBlurb from "../../components/Project/SectionBlurb";
import ZoomImageGallery from "../../components/Project/ZoomImageGallery";
import RefLink from "../../components/Utility/RefLink";
import ZoomablePicture from "../../components/Utility/ZoomablePicture";
import project_data from "../../settings/projects.json";

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

      <ProjectSection subtitle="Brief History on Graphics">
        <ZoomImageGallery
          images={[
            base_url + "/graphics/history/1960.png",
            base_url + "/graphics/history/1970.png",
            base_url + "/graphics/history/1980.png",
            base_url + "/graphics/history/1990.png",
            base_url + "/graphics/history/2000.png",
          ]}
          md={4}
        />
        <blockquote class="twitter-tweet">
          <p lang="en" dir="ltr">
            Been reading a bit into the history of computer graphics
            (1960-2000s). Converted some of the notes I took into these. What
            are the milestones in graphics you remember from any decade?{" "}
            <a href="https://t.co/J7oVmQlMEG">pic.twitter.com/J7oVmQlMEG</a>
          </p>
          &mdash; miatang (@Miamiamia0103){" "}
          <a href="https://twitter.com/Miamiamia0103/status/1485314067610812420?ref_src=twsrc%5Etfw">
            January 23, 2022
          </a>
        </blockquote>{" "}
      </ProjectSection>

      <ProjectSection subtitle="Occlusion with Z-buffer">
        <ZoomablePicture
          src={base_url + "graphics/comics/occlusion_zbuffer.png"}
        />
        <blockquote class="twitter-tweet">
          <p lang="en" dir="ltr">
            Almost every beautiful view we look at both in physical world and
            digital scenes involves having objects at different depth. Today we
            look at how Z-buffer is a great technique to render objects at
            different distances from the camera, which smartly handles
            occlusion.{" "}
            <a href="https://t.co/LHLucZxfS5">pic.twitter.com/LHLucZxfS5</a>
          </p>
          &mdash; miatang (@Miamiamia0103){" "}
          <a href="https://twitter.com/Miamiamia0103/status/1454168094151225356?ref_src=twsrc%5Etfw">
            October 29, 2021
          </a>
        </blockquote>{" "}
      </ProjectSection>

      <ProjectSection subtitle="Texture Mapping & MIP Map">
        <ZoomablePicture src={base_url + "graphics/comics/mipmap.png"} />
        <blockquote class="twitter-tweet">
          <p lang="en" dir="ltr">
            Mipmap textures are used frequently in graphics to reduce aliasing
            in images. Today we take a look at what is mipmap, why we need
            mipmap, and how we generate mipmap.{" "}
            <a href="https://t.co/6JvFgTjBgK">pic.twitter.com/6JvFgTjBgK</a>
          </p>
          &mdash; miatang (@Miamiamia0103){" "}
          <a href="https://twitter.com/Miamiamia0103/status/1446842946813370369?ref_src=twsrc%5Etfw">
            October 9, 2021
          </a>
        </blockquote>{" "}
      </ProjectSection>

      <ProjectSection subtitle="Anti-aliasing">
        <ZoomablePicture src={base_url + "graphics/comics/anti-aliasing.png"} />
        <blockquote class="twitter-tweet">
          <p lang="en" dir="ltr">
            For the intro Computer Graphics class at{" "}
            <a href="https://twitter.com/CarnegieMellon?ref_src=twsrc%5Etfw">
              @CarnegieMellon
            </a>
            , we asked our students for feedback on how to improve the
            documentation for an assignment on triangle rasterization &amp;
            supersampling.
            <br />
            <br />
            One of them created this (!):{" "}
            <a href="https://t.co/NoRNbS1LJQ">pic.twitter.com/NoRNbS1LJQ</a>
          </p>
          &mdash; Keenan Crane (@keenanisalive){" "}
          <a href="https://twitter.com/keenanisalive/status/1443930631554183168?ref_src=twsrc%5Etfw">
            October 1, 2021
          </a>
        </blockquote>
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
