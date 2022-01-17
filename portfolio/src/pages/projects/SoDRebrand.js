import LeftColumn from "../../components/Layout/LeftColumn";
import RightColumn from "../../components/Layout/RightColumn";
import TwoColumns from "../../components/Layout/TwoColumns";
import BlurbHeader from "../../components/Project/BlurbHeader";
import ImageGallery from "../../components/Project/ImageGallery";
import ImageRow from "../../components/Project/ImageRow";
import IndivImage from "../../components/Project/IndivImage";
import Project from "../../components/Project/ProjectContainer";
import ProjectHeader from "../../components/Project/ProjectHeader";
import ProjectLinkSection from "../../components/Project/ProjectLinkSection";
import ProjectSection from "../../components/Project/ProjectSection";
import SectionBlurb from "../../components/Project/SectionBlurb";
import HandIndex from "../../components/svgs/HandIndex";
import MagicStick from "../../components/svgs/MagicStick";
import project_data from "../../settings/projects.json";

export default function SoDRebrand() {
  const base_url = "/assets/SoD/";
  const display_format = ".png";
  let web_subpage_images = [];
  for (let i = 1; i < 7; i++) {
    let src = base_url + "web/" + i.toString() + display_format;
    web_subpage_images.push(src);
  }
  const misc_features = [
    {
      title: "Wordmark",
      path_url: "branding/",
      visuals: [
        {
          file_name: "logo_floorplan",
        },
        {
          file_name: "logo_plain",
        },
        // {
        //   file_name: "b&w",
        // },
      ],
    },
    {
      title: "Marketing",
      path_url: "marketing/",
      visuals: [
        {
          file_name: "main+spread",
        },
        {
          file_name: "posters",
        },
        // {
        //   file_name: "main-poster",
        // },
      ],
    },
    {
      title: "Print",
      path_url: "print/",
      visuals: [
        {
          file_name: "1",
        },
        {
          file_name: "2",
        },
        {
          file_name: "3",
        },
        {
          file_name: "4",
        },
      ],
    },
    {
      title: "Merch",
      path_url: "merch/",
      visuals: [
        {
          file_name: "1",
        },
        {
          file_name: "2",
        },
        // {
        //   file_name: "3",
        // },
      ],
    },
  ];

  const project_idx = project_data.length - 1;

  return (
    <Project index={project_idx}>
      <ProjectHeader
        title={project_data[project_idx].landing.title}
        subtitle={project_data[project_idx].landing.subtitle}
        team="Langston Wells, Yoshi Torralva, Angela Lee, Alice Cai"
        role="Developer, Designer"
        skills="Cargo CMS, Javascript, Figma"
        timeline="January 2021 — August 2021"
        client="CMU School of Design"
        img_src={base_url + "thumbnail.png"}
      />

      <ProjectSection title="Overview">
        <TwoColumns>
          <LeftColumn>
            {" "}
            <BlurbHeader>
              <HandIndex /> The Ask
            </BlurbHeader>
            <SectionBlurb fullWidth={true}>
              The CMU School of Design wanted to reach diverse prospective
              students through a{" "}
              <span className="highlight_text">marketing campaign</span>. The
              campaign should allow high school students to learn more about the
              program, seek answers to their potential questions, and ultimately
              see themselves in the design field. In order to be accessible and
              convincing to the highschool students, a more playful brand
              identity needed to be established.
            </SectionBlurb>
          </LeftColumn>
          <RightColumn>
            {" "}
            <BlurbHeader>
              <MagicStick /> Our Approach
            </BlurbHeader>
            <SectionBlurb fullWidth={true}>
              To inspire those potential future designers to apply for CMU, we
              wanted to focus on the following actions:{" "}
              <span className="highlight_text">
                {" "}
                educate, motivate, and connect
              </span>
              . It is only possible for highschool students to apply if only
              they are motivated to become designers, so in the series of
              products in this campaign:{" "}
              <span className="highlight_text"> website, print, marketing</span>
              , we strive to provide insights on how the audience just might be
              a great designer.
            </SectionBlurb>{" "}
          </RightColumn>
        </TwoColumns>
      </ProjectSection>

      <ProjectSection title="Brand">
        <IndivImage
          src={base_url + "branding/guideline" + display_format}
          alt="multi-page"
          caption="Brand Guidelines"
          width="100%"
        />
        <SectionBlurb>
          We created a cheerful, young and exciting visual identity with the
          high contrast color combinations. Along with the color and typeface
          system, we developed a set of doodles as assets to be utilized across
          various mediums in the campaign.
        </SectionBlurb>
      </ProjectSection>

      <ProjectSection title="Website">
        <IndivImage
          src={base_url + "web/multi-page" + display_format}
          alt="multi-page"
          width="100%"
        />
        <ImageRow left={true} src={base_url + "web/mockup.gif"}>
          {" "}
          <SectionBlurb fullWidth={true}>
            As the lead developer on the team, I first researched on the
            existing popular CMS on the market, and decided on using Cargo to
            make our website come to life. By using a CMS, it allows easy
            editing for other designers on the team, and future maintenance of
            the website. <br />
            <br />
            The website is designed and made to be{" "}
            <span class="highlight_text">
              playful, interactive, and engaging
            </span>
            .{" "}
          </SectionBlurb>
        </ImageRow>

        <ImageGallery
          images={web_subpage_images}
          md={4}
          isSameMd={true}
          caption="Selected Screenshots of the Website"
        />
      </ProjectSection>

      {misc_features.map((feat) => (
        <ProjectSection title={feat.title}>
          <ImageGallery
            images={feat.visuals.map(
              (e) => base_url + feat.path_url + e.file_name + display_format
            )}
            isSameMd={true}
            md="6"
          />
        </ProjectSection>
      ))}
      <ProjectSection title="Reflection" hasDivider={true}>
        <IndivImage
          src={base_url + "process/posters.png"}
          alt="web motion mockup"
          width="100%"
          caption="the TEAM <3"
        />
        <TwoColumns>
          <LeftColumn>
            {" "}
            <SectionBlurb fullWidth={true}>
              This project was fun from the very start as I got to work with
              some of my favorite classmates as colleagues and professors as
              mentors and clients, and furthermore, I am more than honored to be
              chosen to be part of the effort to rebrand and promote CMU SoD.{" "}
              <br /> <br /> Professor Brett Yasko and Professor Dylan Vitone
              gave us valuable feedback and inspirations throughout the project
              as our main point of contact with the SoD faculty. Their
              continuous support and guidance allowed our creativity to flourish
              and be executed.
            </SectionBlurb>{" "}
          </LeftColumn>
          <RightColumn>
            <SectionBlurb fullWidth={true}>
              This was my first time working on a client project focusing on
              creating a completely new brand identity, and developing separate
              projects across different mediums to achieve the objective. The
              technical aspect of this project was not too challenging, but I
              still learned a lot about working with CMS, <q>hacking</q> the
              pre-defined rules, and using custom code to enable playful
              interactions.
              <br />
              <br />
              As a conclusion, I have been very grateful to be a part of this
              project, and it had helped me grow both as a designer and as a
              developer.
            </SectionBlurb>
          </RightColumn>
        </TwoColumns>
      </ProjectSection>
      <ProjectLinkSection
        links={[
          {
            link: "https://cmudesignundergradadmissions.com/",
            text: "Live Site",
          },
          { link: "http://brettyasko.com/", text: "Brett Yasko" },
          { link: "https://www.dylanvitone.com/", text: " Dylan Vitone" },
          { link: "https://alliswells.co/", text: "Langston Wells" },
          { link: "https://www.ytorralva.com/", text: "Yoshi Torralva" },
          { link: "https://angelahlee.com/", text: "Angela Lee" },
          { link: "https://alicelcai.com/", text: "Alice Cai" },
        ]}
      />
    </Project>
  );
}
