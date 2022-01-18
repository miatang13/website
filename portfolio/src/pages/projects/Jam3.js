import LeftColumn from "../../components/Layout/LeftColumn";
import RightColumn from "../../components/Layout/RightColumn";
import TwoColumns from "../../components/Layout/TwoColumns";
import BlurbHeader from "../../components/Project/BlurbHeader";
import ImageGallery from "../../components/Project/ImageGallery";
import IndivImage from "../../components/Project/IndivImage";
import IndivVideo from "../../components/Project/IndivVideo";
import Project from "../../components/Project/ProjectContainer";
import ProjectHeader from "../../components/Project/ProjectHeader";
import ProjectLinkSection from "../../components/Project/ProjectLinkSection";
import ProjectSection from "../../components/Project/ProjectSection";
import ProjectShortSection from "../../components/Project/ProjectShortSection";
import SectionBlurb from "../../components/Project/SectionBlurb";
import SectionSubtitle from "../../components/Project/SectionSubtitle";
import SpotlightVideoSection from "../../components/Project/SpotlightVideoSection";
import SpotlightVideo from "../../components/Project/SpotlightVideoSection";
import HandIndex from "../../components/svgs/HandIndex";
import MagicStick from "../../components/svgs/MagicStick";
import project_data from "../../settings/projects.json";

export default function Jam3() {
  const project_idx = 0;

  // intro header
  const team = "Jam3 — Development, Design";
  const role = "Developer, Intern";
  const timeline = "2 months (June — August 2021)";
  const skills = "WebGL, React, Socket.io";
  // image
  const base_url = "/assets/Jam3/video/compressed/";
  const display_format = ".mp4";

  return (
    <Project index={project_idx}>
      <ProjectHeader
        title={project_data[project_idx].landing.title}
        subtitle={project_data[project_idx].landing.subtitle}
        callout={project_data[project_idx].project_summary}
        team={team}
        role={role}
        timeline={timeline}
        skills={skills}
        client={"Jam3 Internal"}
        img_src={"/assets/Jam3/thumbnail.png"}
      />
      <ProjectSection title="Overview">
        <TwoColumns>
          <LeftColumn>
            <BlurbHeader>
              <HandIndex /> The Ask
            </BlurbHeader>
            <SectionBlurb fullWidth={true}>
              In a team of 6 interns from the Design and Development department
              at Jam3, we were asked to brainstorm, design, and prototype a
              concept answering the following prompt:{" "}
              <span className="highlight_text">
                How can we promote music curators through the use of playlists?
              </span>{" "}
              The project was presented to Spotify at the end, but it was mostly
              used for internal purposes, therefore we were given the freedom to
              dream big and create something out of the box.
            </SectionBlurb>
          </LeftColumn>
          <RightColumn>
            <BlurbHeader>
              <MagicStick /> Our Approach
            </BlurbHeader>
            <SectionBlurb fullWidth={true}>
              We envisioned a stand-alone web-based experience that{" "}
              <span className="highlight_text">
                transforms any given playlist to an unique 3D space
              </span>{" "}
              where users can enter as avatars. The user can{" "}
              <span className="highlight_text">
                navigate in the 3D space and interact with other avatars{" "}
              </span>{" "}
              through sending real-time synced reactions. We wished to generate
              different visuals for each specific playlist, thus giving
              individual music curators individual rooms.
            </SectionBlurb>
          </RightColumn>
        </TwoColumns>
      </ProjectSection>

      <ProjectShortSection title="Note">
        <SectionBlurb fullWidth={true}>
          Given the time and team size constraint, we implemented a functional
          proof of concept for a specific playlist by{" "}
          <a href="https://open.spotify.com/artist/2RqrWplViWHSGLzlhmDcbt">
            Yaeji
          </a>{" "}
          . Her genre is house music and hip hop with mellow. <br /> <br />
          Here I will be sharing a few of my favorite key features in the final
          implemented prototype. There are features excluded but feel free to
          contact me for more details if interested.
        </SectionBlurb>
      </ProjectShortSection>

      <ProjectSection title="Prototype Features">
        <SpotlightVideoSection
          subtitle="Avatars"
          src={base_url + "appear" + display_format}
          caption="User Appear as Avatar on Connection"
        >
          <TwoColumns>
            <LeftColumn>
              <IndivImage
                src="/assets/Jam3/process/texture/texture-shape.gif"
                caption="Shapes and Patterns for Avatars"
              />
            </LeftColumn>
            <RightColumn>
              <SectionBlurb fullWidth={true}>
                Each user gets randomly assigned an avatar of a geometric shape
                with patterns wrapped around it. The textures are animated in
                real-time with shaders to have an dynamic appearance.
              </SectionBlurb>
            </RightColumn>
          </TwoColumns>
        </SpotlightVideoSection>

        {/* <TwoColumns>
          <LeftColumn>
            <IndivImage
              src="/assets/Jam3/process/texture/texture_shape.gif"
              width="90%"
              caption="WIP: Shapes and Patterns for Avatars"
            />
          </LeftColumn>
          <RightColumn>
            <SectionBlurb fullWidth={true}>
              Each user gets randomly assigned an avatar of a geometric shape
              with patterns wrapped around it. The textures are animated in
              real-time with shaders to have an dynamic appearance.
            </SectionBlurb>
            <ImageGallery
              md={[4]}
              isSameMd={true}
              images={[
                "/assets/Jam3/process/avatar-texture/1.png",
                "/assets/Jam3/process/avatar-texture/2.png",
                "/assets/Jam3/process/avatar-texture/3.png",
              ]}
              caption="Avatar Textures Without Shaders"
            />
          </RightColumn>
        </TwoColumns> */}

        <SpotlightVideo
          src={base_url + "navigation" + display_format}
          caption="User Navigating in the Space"
          subtitle="Navigation"
        >
          <TwoColumns>
            <LeftColumn>
              <IndivImage
                src="/assets/Jam3/process/physics/room.png"
                caption="Rigid Bodies Using Cannon.js"
              />
            </LeftColumn>
            <RightColumn>
              <SectionBlurb fullWidth={true}>
                The users can navigate in the space, moving and rotating their
                avatars to reach different places in the room. Furthermore, they
                can safely navigate in the room without worrying of falling out
                of the windows because we added rigid bodies to avatar itself
                and the environmental assets.
              </SectionBlurb>
            </RightColumn>
          </TwoColumns>
        </SpotlightVideo>

        <SpotlightVideo
          src={base_url + "reaction" + display_format}
          caption="User Expressing Emotions Through Live & Synced Animations"
          subtitle="Reactions"
        >
          <TwoColumns>
            <LeftColumn>
              <ImageGallery
                images={[
                  "/assets/Jam3/process/reactions/reactions_crop.gif",
                  "/assets/Jam3/process/reactions/inroom.gif",
                ]}
                caption="Prototyping Reactions Animation"
              />
            </LeftColumn>
            <RightColumn>
              <SectionBlurb fullWidth={true}>
                To communicate their feelings and reactions to the current song,
                users can send reactions by toggling a reaction menu and
                choosing their desired emotion. The reactions are synced across
                all the players.
              </SectionBlurb>
              <SectionBlurb fullWidth={true}>
                The reaction animation was more challenging than animating user
                interface since it was fully 3D, and we did not have enough
                hands on deck to rig it with a model, so it was mostly designed
                through code, which I found to be particularly interesting.
              </SectionBlurb>
            </RightColumn>
          </TwoColumns>
        </SpotlightVideo>

        {/* 
      <ProjectSection title="Feature: Music Visualization">
        <ImageGallery
          md={4}
          isSameMd={true}
          images={[
            "/assets/Jam3/video/music_visualization/ball.gif",
            "/assets/Jam3/video/music_visualization/donut.gif",
            "/assets/Jam3/video/music_visualization/double.gif",
          ]}
          caption="Music Visualizations"
        />
        {/* <VideoSection
          src={base_url + "appear" + display_format}
          isFull={true}
          caption="User Upon Entry"
        /> 
      <SectionBlurb> HERE </SectionBlurb> 
      </ProjectSection> */}
        <SectionSubtitle> Post-processing </SectionSubtitle>
        <ImageGallery
          images={[
            "/assets/Jam3/process/post-processing/compressed/without1.png",
            "/assets/Jam3/process/post-processing/compressed/without2.png",
            "/assets/Jam3/process/post-processing/compressed/with1.png",
            "/assets/Jam3/process/post-processing/compressed/with2.png",
          ]}
          caption="Without (1, 2) & With (3, 4) Post-processing"
        />

        <SpotlightVideo
          src={base_url + "multi_player" + display_format}
          caption="Multiple Users Jumping on Dance Floor"
          subtitle="Multi-player Mode"
        >
          <TwoColumns>
            <LeftColumn>
              <IndivVideo
                src="/assets/Jam3/process/multi-player/socket-position.mp4"
                caption="Avatar Movement Sync Across Users"
              />
            </LeftColumn>
            <RightColumn>
              <SectionBlurb fullWidth={true}>
                One key feature I was responsible for is the multi-player
                aspect. We used socket.io and Node.JS web framework express.{" "}
                <br /> <br />
                One important take-away was to deploy early because things that
                work perfectly locally can go unexpected ways when deployed.
              </SectionBlurb>
            </RightColumn>
          </TwoColumns>
        </SpotlightVideo>
      </ProjectSection>

      <ProjectSection title="Reflection" hasDivider={true}>
        <IndivImage src="/assets/Jam3/process/staging.png" width="100%" />
        <TwoColumns>
          <LeftColumn>
            <SectionBlurb fullWidth={true}>
              The 3 months and a half at Jam3 was extremely rewarding. I was
              beyond grateful to work with my fellow developer interns Amna
              Azhar, Mariana de Queiroz, and design interns Nicole Lozano, Noah
              Melrose, Evonne Oby Okoye. I learned how projects are created at
              Jam3 from the very beginning when client hands over a brief to
              when a functional prototype is showcased by the team back to the
              client.
            </SectionBlurb>
          </LeftColumn>
          <RightColumn>
            <SectionBlurb fullWidth={true}>
              I grew as a developer under the guidance of wonderful mentors from
              both design and development sides. <br />
              <br />
              In particular, I had the chance to learn from Amélie Rosser and
              Fabio Toste in the creative development department, who taught me
              both technical and problem-solving skills to curate beauty through
              code.
            </SectionBlurb>
          </RightColumn>
        </TwoColumns>
      </ProjectSection>
      <ProjectLinkSection
        links={[
          {
            link: "https://www.jam3.com/",
            text: "Jam3",
          },
          { link: "https://ameliemaia.com/", text: "Amélie Rosser" },
          { link: "http://fabiotoste.com/", text: "Fabio Toste" },
          {
            link: "https://www.linkedin.com/in/amna-azhar-12957275/",
            text: "Amna Azhar",
          },
          {
            link: "https://www.linkedin.com/in/mdequeiroz/",
            text: "Mariana de Queiroz",
          },
          {
            link: "https://www.linkedin.com/in/nicolelozano1/",
            text: "Nicole Lozano",
          },
          {
            link: "https://www.linkedin.com/in/noah-melrose-5b1103209/",
            text: "Noah Melrose",
          },
          {
            link: "https://www.linkedin.com/in/iamoby/",
            text: "Evonne Oby Okoye",
          },
        ]}
      />
    </Project>
  );
}
