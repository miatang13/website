import Image from "next/image";
import globalStyles from "../../settings/global-styles";
import projects_data from "../../settings/projects.json";
import projectByOrder from "../../settings/project-order";
import ProjectHeader from "../../components/project/ProjectHeader";
import IndivVideo from "../../components/project/Mp4Video";
import FullLine from "../../components/project/FullLine";

// Images
import hero_img from "../../public/assets/Jam3/thumbnail.png";
import physicsRoom from "../../public/assets/Jam3/process/physics/room.png";
import reaction from "../../public/assets/Jam3/process/reactions/inroom.gif";
import postProcessing1 from "../../public/assets/Jam3/process/post-processing/compressed/without1.png";
import postProcessing2 from "../../public/assets/Jam3/process/post-processing/compressed/without2.png";
import postProcessing3 from "../../public/assets/Jam3/process/post-processing/compressed/with1.png";
import postProcessing4 from "../../public/assets/Jam3/process/post-processing/compressed/with2.png";
import staging from "../../public/assets/Jam3//process/staging.png";

const page_key = "Jam3";

const project_idx = projectByOrder.indexOf(page_key);
const page_data = projects_data[project_idx];

// videos
const base_url = "/assets/Jam3/video/compressed/";
const display_format = ".mp4";

export default function Jam3() {
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
          <h2 className={globalStyles.font_styles.h2}>Overview</h2>
          <div>
            <p className={globalStyles.font_styles.p}>
              In a team of 6 interns from the Design and Development department
              at Jam3, we were asked to brainstorm, design, and prototype a
              concept answering the following prompt:{" "}
              <span className={globalStyles.font_styles.highlight_text}>
                How can we promote music curators through the use of playlists?
              </span>{" "}
              The project was presented to Spotify at the end, but it was mostly
              used for internal purposes, therefore we were given the freedom to
              dream big and create something out of the box.
              <br /> <br />
              We envisioned a stand-alone web-based experience that{" "}
              <span className={globalStyles.font_styles.highlight_text}>
                transforms any given playlist to an unique 3D space
              </span>{" "}
              where users can enter as avatars. The user can{" "}
              <span className={globalStyles.font_styles.highlight_text}>
                navigate in the 3D space and interact with other avatars{" "}
              </span>{" "}
              through sending real-time synced reactions. We wished to generate
              different visuals for each specific playlist, thus giving
              individual music curators individual rooms.
            </p>
          </div>
          <FullLine />
          {/* APPEAR  */}
          <div className="col-span-full">
            <h2> Digital Avatars </h2>
            <IndivVideo src={base_url + "appear" + display_format} />
          </div>
          <p className={globalStyles.font_styles.p + " sm:col-start-2"}>
            Each user gets randomly assigned an avatar of a geometric shape with
            patterns wrapped around. Textures are animated in real-time with
            shaders to have an dynamic appearance.
          </p>
          <FullLine />
          {/* NAVIGATION */}
          <div className="col-span-full">
            <h2> Navigation in the Room </h2>
            <IndivVideo src={base_url + "navigation" + display_format} />
          </div>
          <Image src={physicsRoom} />
          <p className={globalStyles.font_styles.p + " place-self-center"}>
            The users can navigate in the space, moving and rotating their
            avatars to reach different places in the room. Furthermore, they can
            safely navigate in the room without worrying of falling out of the
            windows because we added rigid bodies to avatar itself and the
            environmental assets.
          </p>
          <FullLine />
          {/* REACTIONS */}
          <div className="col-span-full">
            <h2> Reactions as Communications </h2>
            <IndivVideo src={base_url + "reaction" + display_format} />
          </div>
          <Image src={reaction} />
          <p className={globalStyles.font_styles.p + " place-self-center"}>
            To communicate their feelings and reactions to the current song,
            users can send reactions by toggling a reaction menu and choosing
            their desired emotion. The reactions are synced across all the
            players.
            <br />
            <br />
            The reaction animation was more challenging than animating user
            interface since it was fully 3D, and we did not have enough hands on
            deck to rig it with a model, so it was mostly designed through code,
            which I found to be particularly interesting.
          </p>
          <FullLine />
          {/* MULTI-PLAYER  */}
          <div className="col-span-full">
            <h2> Multi-player </h2>
            <IndivVideo src={base_url + "multi_player" + display_format} />
          </div>
          <p className={globalStyles.font_styles.p + " sm:col-start-2"}>
            One key feature I was responsible for is the multi-player aspect. We
            used socket.io and Node.JS web framework express.
          </p>
          <FullLine />
          {/* POST-PROCESSING */}
          <div className="col-span-full">
            <h2> Post-processing </h2>{" "}
          </div>
          <Image src={postProcessing1} /> <Image src={postProcessing3} />
          <Image src={postProcessing2} /> <Image src={postProcessing4} />
          <FullLine />
          {/* TAKE-AWAY */}
          <div className="col-span-full">
            <h2> Reflection </h2>
          </div>
          <p>
            The 3 months and a half at Jam3 was extremely rewarding. I was
            beyond grateful to work with my fellow developer interns Amna Azhar,
            Mariana de Queiroz, and design interns Nicole Lozano, Noah Melrose,
            Evonne Oby Okoye. I learned how projects are created at Jam3 from
            the very beginning when client hands over a brief to when a
            functional prototype is showcased by the team back to the client.
          </p>
          <p>
            I grew as a developer under the guidance of wonderful mentors from
            both design and development sides. <br />
            <br />
            In particular, I had the chance to learn from Amélie Rosser and
            Fabio Toste in the creative development department, who taught me
            both technical and problem-solving skills.
          </p>
        </div>
      </div>
    </div>
  );
}
