import about_data from "../../settings/about.json";
import Listbullet from "./ListBullet";

export default function AboutIntro() {
  return (
    <div className="about_section_wrapper" id="about_intro">
      <h1> thanks for stopping by </h1>
      <p>
        <br />
        Hi, I am Mia Tang, and I am interested in creating interactive
        experiences (web, MR, & game).
      </p>{" "}
      <p>
        I currently study at Carnegie Mellon University under the
        interdisciplinary{" "}
        <a href="https://www.cmu.edu/interdisciplinary/programs/bcsa.html">
          BXA program
        </a>
        , majoring in Computer Science and Communications Design.
      </p>
      <p>
        I seek to work in environments that allow me to be creative and
        technical at the same time.{" "}
      </p>{" "}
      <p>
        Currently, I am working as a Teaching Assistant for the class Computer
        Graphics (15-462) at CMU.
      </p>{" "}
      <p>
        Previously, I've worked with wonderful people at the following places:
      </p>
      <ul>
        {about_data.past_work.map((w) => (
          <li>
            <Listbullet /> <a href={w.link}>{w.company}</a> ({w.title}){" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
