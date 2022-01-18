import Project from "../../components/Project/ProjectContainer";
import ProjectHeader from "../../components/Project/ProjectHeader";
import ProjectSection from "../../components/Project/ProjectSection";
import SectionBlurb from "../../components/Project/SectionBlurb";
import TwoColumns from "../../components/Layout/TwoColumns";
import LeftColumn from "../../components/Layout/LeftColumn";
import RightColumn from "../../components/Layout/RightColumn";
import IndivImage from "../../components/Project/IndivImage";
import project_data from "../../settings/projects.json";
import ImageRow from "../../components/Project/ImageRow";

export default function HolidayAR() {
  const base_url = "/assets/HolidayAR/";
  const display_format = ".gif";
  const features = [
    {
      file_name: "lookat_tree",
      alt: "Place Your Christmas Tree Anywhere Video",
      caption: "Place Your Christmas Tree Anywhere",
    },
    {
      file_name: "UI_detail",
      alt: "Variety of Assets For Decoration Video",
      caption: "Variety of Assets For Decoration",
    },
    {
      file_name: "addition_deletion",
      alt: "Placing & Deleting Video",
      caption: "Placing & Deleting",
    },
    {
      file_name: "surface_snap",
      alt: "Surface Snapping Video",
      caption: "Surface Snapping for Concrete Blocks",
    },
  ];

  const project_idx = 2;

  return (
    <Project index={project_idx}>
      <ProjectHeader
        title={project_data[project_idx].landing.title}
        subtitle={project_data[project_idx].landing.subtitle}
        callout={project_data[project_idx].project_summary}
        team="SOLO"
        role="Creative Prototyper, Designer"
        timeline="2020 Fall — 2 weeks"
        skills="Unity, ARFoundations"
        client="Class Project for 60-212 @CMU"
        img_src={base_url + "thumbnail.png"}
      />
      <ProjectSection title="Overview">
        <SectionBlurb>
          This project focuses on creating a mobile augmented reality experience
          for a specific time or location, and I decided to create an software
          to be used during the holiday seasons for people who are isolated and
          are in need of some festive vibes.
        </SectionBlurb>
      </ProjectSection>

      <ProjectSection title="Concept">
        <TwoColumns>
          <LeftColumn>
            <IndivImage
              src={base_url + "concept_sketch.png"}
              width="100%"
              caption="Concept Sketch"
            />
          </LeftColumn>
          <RightColumn>
            <SectionBlurb fullWidth={true}>
              The end of year holiday season is always one of the happiest time,
              but with the ongoing health concerns around the world, many people
              are left alone away from their family members unlike the usual
              years. Many of my friends are left alone, and setting up a whole
              festive scene might not be financially desirable, therefore I
              wanted to create an augmented reality experience for people to
              enjoy this virtual festive environment without spending a single
              dime.
            </SectionBlurb>
          </RightColumn>{" "}
        </TwoColumns>{" "}
      </ProjectSection>

      <ProjectSection title="Selected Features">
        {features.map((feat, index) => (
          <ImageRow
            src={base_url + feat.file_name + display_format}
            left={index % 2 === 0 ? true : false}
            right={index % 2 === 0 ? false : true}
            caption={feat.caption}
          />
        ))}
      </ProjectSection>

      <ProjectSection title="Reflection">
        <SectionBlurb>
          I learned a lot about mobile AR development by doing this project, and
          it has sparked my interest in learning more about 3D development and
          AR development. The power of Augmented Reality is immense, and I see
          numerous ways we can use AR to help uplift people, such as creating a
          festive environment even if it is digital. We have our phones as our
          second pair of eyes that can see objects that give us warmth and
          happiness.
        </SectionBlurb>
      </ProjectSection>
    </Project>
  );
}
