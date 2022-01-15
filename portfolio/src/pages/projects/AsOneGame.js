import LeftColumn from "../../components/Layout/LeftColumn";
import RightColumn from "../../components/Layout/RightColumn";
import TwoColumns from "../../components/Layout/TwoColumns";
import BlurbHeader from "../../components/Project/BlurbHeader";
import Callout from "../../components/Project/Callout";
import ImageGallery from "../../components/Project/ImageGallery";
import IndivImage from "../../components/Project/IndivImage";
import List from "../../components/Project/List";
import Project from "../../components/Project/ProjectContainer";
import ProjectHeader from "../../components/Project/ProjectHeader";
import ProjectLinkSection from "../../components/Project/ProjectLinkSection";
import ProjectSection from "../../components/Project/ProjectSection";
import ProjectShortSection from "../../components/Project/ProjectShortSection";
import SectionBlurb from "../../components/Project/SectionBlurb";
import SectionSubtitle from "../../components/Project/SectionSubtitle";
import VideoGallery from "../../components/Project/VideoGallery";
import VideoSection from "../../components/Project/VideoSection";
import RefLink from "../../components/Utility/RefLink";
import project_data from "../../settings/projects.json";

export default function AsOneGame() {
  const base_url = "/assets/AsOne/";
  const planning_url = base_url + "planning/";
  const process_url = base_url + "process/";
  const format = ".png";
  const project_idx = 1;

  return (
    <Project index={project_idx}>
      <ProjectHeader
        title={project_data[project_idx].landing.title}
        subtitle={project_data[project_idx].landing.subtitle}
        team="Anne He, Ameer Jones"
        role="Game Designer, Developer"
        skills="Unity, Blender, Inky, Bitsy"
        timeline="October 2021 — December 2021"
        client="Experimental Game Design at CMU"
        img_src={base_url + "thumbnail" + format}
      ></ProjectHeader>
      <ProjectShortSection title="Overview">
        <SectionBlurb fullWidth={true}>
          An indie exploration game about being a little fish in a big world.
          Swim through the ocean and up the river in pursuit of your dreams. A
          game about love, war, death, friendship, and the unknown. This
          charming fish adventure will make you question your life choices.{" "}
          <br />
          <br />
          The game was a semester long project made under the guidance of
          professor{" "}
          <a href="http://paolo.molleindustria.org/">Paolo Pedicini</a> for the
          class{" "}
          <a href="http://mycours.es/gamedesign2021/">
            60-418 Experimental Game Design
          </a>{" "}
          at Carnegie Mellon.
        </SectionBlurb>
      </ProjectShortSection>
      <ProjectSection title="1. Ideation">
        <TwoColumns>
          <LeftColumn>
            <ImageGallery
              images={[
                planning_url + "bitsy" + format,
                planning_url + "bitsy1" + format,
              ]}
              isSameMd={true}
              md={6}
              caption="Bitsy Prototype by Anne He"
            />
          </LeftColumn>
          <RightColumn vAlign={true}>
            <SectionBlurb fullWidth={true}>
              For ideation, each student made a Bitsy prototype of a specific
              narrative game they were interested in creating. Then people split
              into groups to develop a popular concept they were all interested
              in. <br /> <br />
              Anne He, Ameer Jones and I teamed up to turn Anne's concept into
              an actual game, which is a witty and thought-provoking narrative
              that involves user exploring the world as a little salmon. The
              journey of swimming up stream hints at the mentality of chasing
              the crowd, revealing a deeper question under the disguise of an
              innocent fish game.
            </SectionBlurb>
          </RightColumn>
          <RefLink
            href="https://ninjko.itch.io/as-one"
            text="Early Bitsy Prototype"
          />
        </TwoColumns>
      </ProjectSection>
      <ProjectSection title="2. Planning">
        <ImageGallery
          images={[
            planning_url + "narrative-design" + format,
            planning_url + "design-macro" + format,
            planning_url + "mood-board" + format,
          ]}
          md="4"
          caption="Narrative Design Sketch, Game Design Macro, Visual Mood Board"
        />
        <TwoColumns>
          <LeftColumn vAlign={true}>
            <SectionBlurb fullWidth={true}>
              Before moving into Unity, we further explored the narrative design
              by creating a Narrative Design Sketch. Together we strengthened
              the plot by adding more interactive characters the player can
              engage with. <br />
              <br />
              Throughout the process, we stayed mindful of the assets we needed
              to create with each potential feature we were considering by
              keeping track of the Game Design Macro spreadsheet.
              <br />
              <br />
              One interesting exercise in the planning process was the Color
              Script. By planning out each key scene's main color, we were able
              to visualize and solidify our visions of the game as a team.
            </SectionBlurb>
          </LeftColumn>
          <RightColumn>
            <IndivImage
              src={planning_url + "color-script" + format}
              width="100%"
              caption="Color Script"
            />{" "}
          </RightColumn>
        </TwoColumns>
      </ProjectSection>
      <ProjectSection title="3. Making">
        <ImageGallery
          images={[
            process_url + "vertical_slice" + format,
            process_url + "3D_sound" + format,
          ]}
          caption="Vertical Slice, 3D Sound Objects"
        />
        <TwoColumns>
          <LeftColumn>
            <IndivImage
              src={process_url + "inky.png"}
              width="100%"
              // caption=".ink File"
            />{" "}
          </LeftColumn>
          <RightColumn>
            <SectionBlurb fullWidth={true}>
              I worked on implementing the player control and crafting the
              environment of the game, which involved visual and audio designs.
              I made environmental assets using Blender. <br />
              <br />
              It was my first time working on both creating the asset and using
              the asset within Unity, gaining experiences as both game designer
              and game developer. <br /> <br />
              We used Inky to write our dialogues, and used a package to
              integrate it within Unity.
            </SectionBlurb>
          </RightColumn>
        </TwoColumns>
      </ProjectSection>

      <ProjectSection title="4. The Game">
        <SectionBlurb> </SectionBlurb>
      </ProjectSection>

      <ProjectShortSection title="As One">
        <SectionBlurb fullWidth={true}>
          <Callout>
            An indie game about a little salmon exploring a huge world.
            <br />
            <br />
            What would you do if everyone in your life told you to swim upstream
            as if that was the only goal worth chasing after? <br />
            <br />
            Contemplate the meaning of life while you explore the environment,
            and engage with other animal characters as a small fish.
          </Callout>{" "}
        </SectionBlurb>{" "}
      </ProjectShortSection>

      {/* <ProjectSection title="Feature 1: Entry">
        <VideoGallery
          videos={[
            base_url + "features/menu.mp4",
            base_url + "features/options.mp4",
          ]}
        />
        <TwoColumns>
          <LeftColumn>
            <IndivImage
              src={base_url + "screenshots/instruction.png"}
              width="100%"
              caption="Instructions"
            />
          </LeftColumn>
          <RightColumn>
            <SectionBlurb fullWidth={true}>
              Player would see a school of fish swimming in water as the landing
              screen. Then by pressing play, they enter the game, where they can
              start to interact with NPCs such as the red floating buoy ball.
            </SectionBlurb>
          </RightColumn>
        </TwoColumns>
      </ProjectSection> */}

      <ProjectSection title="Feat 1: Interactions">
        <SectionSubtitle>Talk with Animal NPCs</SectionSubtitle>
        <VideoGallery
          videos={[
            base_url + "features/seagull.mp4",
            base_url + "features/fish1.mp4",
          ]}
          caption="One-way Dialogues"
        />{" "}
        <TwoColumns>
          <LeftColumn>
            <SectionBlurb fullWidth={true}>
              The player would encounter different NPCs in various places. By
              pressing enter, a one-way dialogue or dialogue with multiple paths
              get initiated. <br /> <br />
              Each NPC serves 1 purpose from below:
              <List
                items={[
                  "Say some witty nonsense commentaries to light up the mood.",
                  "Pressure player to swim upstream like other fish.",
                  "Motivate player to reconsider if swimming upstream is the correct decision.",
                ]}
              />
              {/* <br />
              In particular, the fish NPCs try to convince the player to keep on
              swimming upstream, and the NPCs of other species express their
              doubts. */}
            </SectionBlurb>
          </LeftColumn>
          <RightColumn>
            <VideoSection
              src={base_url + "features/seahorse.mp4"}
              caption="Multiple options"
              width="100%"
            />
          </RightColumn>
        </TwoColumns>
        <SectionSubtitle>Chasing the Crowd Mentality</SectionSubtitle>
        <ImageGallery
          images={[
            base_url + "screenshots/quotes/if-i-get-to-the-top.png",
            base_url + "screenshots/quotes/big-treasure.png",
            base_url + "screenshots/quotes/cool-goal.png",
          ]}
          caption="Quotes from Fish NPCs"
        />
        <TwoColumns>
          <LeftColumn>
            <SectionBlurb fullWidth={true}>
              We wrote the dialogues so that it would imitate things we hear in
              our daily lives, thus hinting at the message we try to deliver
              through the game. <br /> <br />
              It was a design decision to utilize the same model for the NPC
              fish and the player fish in order to further emphasize the
              similarities between the player and the other fish, eachoing the
              game name: As One.
            </SectionBlurb>
          </LeftColumn>
          <RightColumn>
            <SectionBlurb fullWidth={true}>
              <b>Selected quotes spoken by fish NPC:</b>
              <List
                items={[
                  "I wonder what's up there, that everyone wants so bad?",
                  "I heard theres a BIG treasure buried upstream.",
                  "If I can get to the top, maybe I can be someone, you know?",
                  "I heard they can grant any one wish for the salmon who get to the top...what should I wish for, I wonder?",
                ]}
              />
            </SectionBlurb>
          </RightColumn>
        </TwoColumns>
      </ProjectSection>

      <ProjectSection title="Feat 2: Environment">
        <SectionSubtitle>Explore and Relax</SectionSubtitle>
        <VideoGallery
          videos={[
            base_url + "features/coral-reef.mp4",
            base_url + "features/island.mp4",
          ]}
        />
        <SectionBlurb>
          The environmental assets are low-poly and made in vibrant colors to be
          consistent with the player fish and to create the illusion of a
          simple, innocent exploration game.
        </SectionBlurb>
        <SectionSubtitle>Progression of Environment</SectionSubtitle>
        <ImageGallery
          images={[
            base_url + "screenshots/change-in-environment/full1.png",
            base_url + "screenshots/change-in-environment/full_scene.png",
            base_url + "screenshots/change-in-environment/rough.png",
            base_url + "screenshots/change-in-environment/rough_scene.png",
          ]}
          oneRow={true}
          caption="Environmental Change in Chronological Order"
        />
        <TwoColumns>
          <LeftColumn>
            <IndivImage
              src={process_url + "environment.png"}
              width="100%"
              caption="Planning"
            />
          </LeftColumn>
          <RightColumn>
            <SectionBlurb fullWidth={true}>
              We crafted the environment to have a clear progression from
              relaxing to challenging, conveying the hardship of swimming
              upstream.
            </SectionBlurb>
          </RightColumn>
        </TwoColumns>
        <SectionSubtitle>Progression of Water Color</SectionSubtitle>
        <ImageGallery
          images={[
            base_url + "screenshots/change-in-color/1.png",
            base_url + "screenshots/change-in-color/2.png",
            base_url + "screenshots/change-in-color/3.png",
            base_url + "screenshots/change-in-color/4.png",
            base_url + "screenshots/change-in-color/5.png",
            base_url + "screenshots/change-in-color/6.png",
            base_url + "screenshots/change-in-color/7.png",
          ]}
          oneRow={true}
          caption="Color Change in Chronological Order"
        />{" "}
        <TwoColumns>
          <LeftColumn>
            <SectionBlurb fullWidth={true}>
              Color of water changes from warm orange, bright blue, to dark blue
              as the player moves further down in the journey. It can be used as
              an indication of progress in the game, as well as a mood
              indicator.
            </SectionBlurb>
          </LeftColumn>
          <RightColumn>
            <VideoSection
              src={base_url + "features/water-shader.mp4"}
              caption="Water Shader"
              width="100%"
            />
          </RightColumn>
        </TwoColumns>
      </ProjectSection>

      <ProjectSection title="Reflection">
        <SectionBlurb>
          From this project, I learned about the basic steps of creating an
          actual game along with great teammates and mentor. <br />
          <br />
          As both a game designer and game developer, I was glad to explore and
          sharpen my skills in both areas. In particular, I grew interested in a
          technical artist's role in game development, but I also greatly
          appreciate how game developer holds the power to make the game
          playable.
        </SectionBlurb>
      </ProjectSection>

      <ProjectLinkSection
        links={[
          {
            link: "http://paolo.molleindustria.org/",
            text: "Paolo Pedercini",
          },
          { link: "https://github.com/annehe9", text: "Anne He" },
          {
            link: "https://www.instagram.com/ameer_jones/",
            text: "Ameer Jones",
          },
        ]}
      />
    </Project>
  );
}

// https://ninjko.itch.io/as-one
